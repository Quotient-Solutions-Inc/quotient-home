'use client'

import { useEffect, useRef } from 'react';

// Quotient hero animation
// Particles spread across ENTIRE hero section (full width, full height).
// Particles behind text render at low opacity (max 0.15) for legibility.
// Particles converge into a perfectly smooth horizontal line, then scatter back out.
// Line is LEFT-ALIGNED to match the copy position (using section padding).
// Line is positioned at roughly 48% height (between headline and subhead).
// ~11-second loop.

const PARTICLE_COUNT = 200;
const CYCLE_DURATION = 13000; // ms per full cycle (extended for longer line hold)
const COLOR = '255, 255, 255'; // Pure white

function easeInOutCubic(x: number): number {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

class Particle {
  index: number;
  targetX: number;
  targetY: number;
  baseNoiseX: number;
  baseNoiseY: number;
  driftPhaseX: number;
  driftPhaseY: number;
  driftSpeedX: number;
  driftSpeedY: number;
  driftRadius: number;
  baseOpacity: number;

  constructor(index: number, width: number, height: number, lineStartX: number, lineLength: number, lineY: number) {
    this.index = index;

    // Target position on the line
    this.targetX = lineStartX + (index / PARTICLE_COUNT) * lineLength;
    this.targetY = lineY;

    // Scatter across FULL hero area - full width and full height
    const angle = Math.random() * Math.PI * 2;
    const radiusX = (Math.random() * 0.5 + 0.5) * width * 0.45;
    const radiusY = (Math.random() * 0.5 + 0.5) * height * 0.45;

    this.baseNoiseX = width / 2 + Math.cos(angle) * radiusX;
    this.baseNoiseY = height / 2 + Math.sin(angle) * radiusY;

    this.driftPhaseX = Math.random() * Math.PI * 2;
    this.driftPhaseY = Math.random() * Math.PI * 2;
    this.driftSpeedX = Math.random() * 0.0003 + 0.0001;
    this.driftSpeedY = Math.random() * 0.0003 + 0.0001;
    this.driftRadius = Math.random() * 30 + 10;

    // More defined opacity for scattered particles
    this.baseOpacity = Math.random() * 0.12 + 0.10;
  }

  draw(ctx: CanvasRenderingContext2D, time: number, progress: number) {
    // Reduce drift as particles converge for smoother alignment
    const driftFactor = 1 - progress * 0.9;

    const currentNoiseX =
      this.baseNoiseX +
      Math.sin(time * this.driftSpeedX + this.driftPhaseX) * this.driftRadius * driftFactor;
    const currentNoiseY =
      this.baseNoiseY +
      Math.cos(time * this.driftSpeedY + this.driftPhaseY) * this.driftRadius * driftFactor;

    const x = currentNoiseX + (this.targetX - currentNoiseX) * progress;
    const y = currentNoiseY + (this.targetY - currentNoiseY) * progress;

    // Opacity increases as particles converge - brighter when forming line
    const currentOpacity = this.baseOpacity + progress * (0.65 - this.baseOpacity);

    // Size: slightly larger dots when scattered, uniform tight dots when converged
    // Use a fixed random seed based on index for consistent size (no flickering)
    const sizeVariation = ((this.index * 7) % 10) / 10; // Pseudo-random 0-1 based on index
    const scatteredSize = sizeVariation * 1.2 + 1.2;
    const convergedSize = 1.0;
    const size = scatteredSize * (1 - progress) + convergedSize * progress;

    ctx.fillStyle = `rgba(${COLOR}, ${currentOpacity})`;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let animFrameId: number;
    let lineStartX = 0;
    let lineLength = 0;
    let lineY = 0;

    const initParticles = () => {
      // Line positioned between headline and subhead
      // Desktop: py-28 (112px) + eyebrow (~43px) + headline (~200px) = ~355px
      // Mobile: py-20 (80px) + eyebrow (~43px) + headline (~120px) = ~243px
      // Calculate as percentage based on typical hero heights
      const isMobile = width < 1024;

      // Position line at the spacer location (after headline, before subhead)
      // Approximately 55% on desktop, 50% on mobile
      lineY = isMobile ? height * 0.50 : height * 0.55;

      // Line starts at same left position as content (matches section padding: 32px on mobile, 48px on desktop)
      lineStartX = isMobile ? 32 : 48;

      // Line length matches "YOU COLLECT THE RETURNS." text width - approximately 500-600px
      lineLength = Math.min(width * 0.45, 580);

      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle(i, width, height, lineStartX, lineLength, lineY));
      }
    };

    const resize = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      width = rect.width;
      height = rect.height;

      initParticles();
    };

    const animate = (currentTime: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cycleTime = currentTime % CYCLE_DURATION;
      const normalizedTime = cycleTime / CYCLE_DURATION;

      let progress = 0;

      if (normalizedTime < 0.12) {
        // scattered — hold
        progress = 0;
      } else if (normalizedTime < 0.32) {
        // converging into line
        const phaseT = (normalizedTime - 0.12) / 0.20;
        progress = easeInOutCubic(phaseT);
      } else if (normalizedTime < 0.62) {
        // formed line — hold (~4 seconds at 13s cycle)
        progress = 1;
      } else if (normalizedTime < 0.82) {
        // scattering back out
        const phaseT = (normalizedTime - 0.62) / 0.20;
        progress = 1 - easeInOutCubic(phaseT);
      } else {
        // scattered — hold before next cycle
        progress = 0;
      }

      // Always draw particles - they naturally form a line when fully converged
      for (let i = 0; i < particles.length; i++) {
        particles[i].draw(ctx, currentTime, progress);
      }

      animFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => resize();
    window.addEventListener('resize', handleResize);

    const timer = setTimeout(() => {
      resize();
      animFrameId = requestAnimationFrame(animate);
    }, 50);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full pointer-events-none">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
