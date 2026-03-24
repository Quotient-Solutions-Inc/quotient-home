'use client'

import { useEffect, useRef } from 'react';

// Quotient Build with Q page — hero space animation
// 300 particles scatter as dots, then assemble into a grid of squares, hold, then dissolve.
// Monochrome. Adapted for light background — uses dark color at low opacity.
// 15-second loop.
//
// Usage: place in the space between the top nav and the BUILD WITH Q eyebrow.
// Same pattern as SignalLinesAnimation on the Track Record page.
// Sits in its own dedicated vertical space — not behind or overlapping text.
// Recommended container height: 180-220px.

const GRID_SIZE = 16;
const LOOP_DURATION = 8000; // Faster animation - 8 seconds instead of 15
const NUM_PARTICLES = 300;

interface Particle {
  startX: number;
  startY: number;
  noiseOffset: number;
  targetX: number;
  targetY: number;
  assemblyStart: number;
  baseAlpha: number;
  size: number;
}

function initParticles(logicalWidth: number, logicalHeight: number): Particle[] {
  const particles: Particle[] = [];
  const cols = Math.ceil(logicalWidth / GRID_SIZE);
  const rows = Math.ceil(logicalHeight / GRID_SIZE);

  for (let i = 0; i < NUM_PARTICLES; i++) {
    const col = Math.floor(Math.random() * cols);
    const row = Math.floor(Math.random() * rows);
    const orderValue = row / rows + (1 - col / cols);

    particles.push({
      startX: Math.random() * logicalWidth,
      startY: Math.random() * logicalHeight,
      noiseOffset: Math.random() * 100,
      targetX: col * GRID_SIZE + 2,
      targetY: (rows - 1 - row) * GRID_SIZE + 2,
      assemblyStart: orderValue * 0.4,
      baseAlpha: Math.random() * 0.15 + 0.04, // low opacity for light background
      size: GRID_SIZE - 4,
    });
  }
  return particles;
}

export default function GridBlocksAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationRef: number;
    let startTime: number | null = null;
    let particles: Particle[] = [];
    const logicalSize = { width: 0, height: 0 };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement!.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      logicalSize.width = rect.width;
      logicalSize.height = rect.height;
      particles = initParticles(rect.width, rect.height);
    };

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const t = (elapsed % LOOP_DURATION) / LOOP_DURATION;

      ctx.clearRect(0, 0, logicalSize.width, logicalSize.height);

      // Use dark color at very low opacity for light background
      ctx.fillStyle = 'rgba(28, 26, 23, 1)';

      particles.forEach((p) => {
        let currentX: number;
        let currentY: number;
        let currentAlpha: number;
        let currentSize: number;

        if (t < 0.2) {
          const noise = Math.sin(t * 10 + p.noiseOffset) * 20;
          currentX = p.startX + noise;
          currentY = p.startY + Math.cos(t * 8 + p.noiseOffset) * 20;
          currentAlpha = p.baseAlpha;
          currentSize = 2;
        } else if (t < 0.7) {
          const assemblyProgress = (t - 0.2) / 0.5;
          const localT = Math.max(0, Math.min(1, (assemblyProgress - p.assemblyStart) * 5));
          const ease =
            localT < 0.5
              ? 4 * localT * localT * localT
              : 1 - Math.pow(-2 * localT + 2, 3) / 2;
          currentX = p.startX + (p.targetX - p.startX) * ease;
          currentY = p.startY + (p.targetY - p.startY) * ease;
          currentAlpha = p.baseAlpha + (0.25 - p.baseAlpha) * ease;
          currentSize = 2 + (p.size - 2) * ease;
        } else if (t < 0.9) {
          currentX = p.targetX;
          currentY = p.targetY;
          currentAlpha = 0.25;
          currentSize = p.size;
        } else {
          const dissolveT = (t - 0.9) / 0.1;
          currentX = p.targetX + (Math.random() - 0.5) * 5 * dissolveT;
          currentY = p.targetY + (Math.random() - 0.5) * 5 * dissolveT;
          currentAlpha = 0.25 * (1 - dissolveT);
          currentSize = p.size * (1 - dissolveT * 0.5);
        }

        ctx.globalAlpha = currentAlpha;

        if (t < 0.25) {
          ctx.beginPath();
          ctx.arc(currentX, currentY, 1, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillRect(currentX, currentY, currentSize, currentSize);
        }
      });

      animationRef = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animationRef = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef) cancelAnimationFrame(animationRef);
    };
  }, []);

  return (
    // Container sits in the space between nav and eyebrow
    // Adjust height to taste — recommended 180-220px
    // Fades at left, right, and bottom edges to feel contained
    <div
      className="w-full pointer-events-none mb-12"
      style={{
        height: '200px',
        maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
        maskComposite: 'intersect',
        WebkitMaskComposite: 'source-in',
      }}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
