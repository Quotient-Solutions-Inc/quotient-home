'use client'

import { useEffect, useRef } from 'react';

// Quotient hero animation
// Particles spread across ENTIRE hero section (full width, full height).
// Particles behind text render at low opacity (max 0.15) for legibility.
// Particles converge into a perfectly smooth horizontal line, then scatter back out.
// Line is LEFT-ALIGNED to match the copy position (using section padding).
// Line is positioned at roughly 48% height (between headline and subhead).
// ~11-second loop.
// Supports inverted mode for light backgrounds (dark particles).

interface HeroAnimationProps {
  inverted?: boolean;
  footerMode?: boolean; // When true, line is positioned at footer divider location (~80% height)
}

const PARTICLE_COUNT = 200;
const CYCLE_DURATION = 13000; // ms per full cycle (extended for longer line hold)
const FOOTER_CYCLE_DURATION = 10400; // 20% faster for footer (13000 * 0.8)
const COLOR_LIGHT = '255, 255, 255'; // White particles for dark backgrounds
const COLOR_DARK = '28, 26, 23'; // tb-dark particles for light backgrounds
const COLOR_FOOTER = '255, 255, 255'; // Footer particles match text-white/40

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

  draw(ctx: CanvasRenderingContext2D, time: number, progress: number, color: string, footerMode: boolean = false) {
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
    // Footer mode uses lower opacity to match text-white/40
    const maxOpacity = footerMode ? 0.40 : 0.65;
    const currentOpacity = this.baseOpacity + progress * (maxOpacity - this.baseOpacity);

    // Size: slightly larger dots when scattered, uniform tight dots when converged
    // Use a fixed random seed based on index for consistent size (no flickering)
    const sizeVariation = ((this.index * 7) % 10) / 10; // Pseudo-random 0-1 based on index
    const scatteredSize = sizeVariation * 1.2 + 1.2;
    const convergedSize = 1.0;
    const size = scatteredSize * (1 - progress) + convergedSize * progress;

    ctx.fillStyle = `rgba(${color}, ${currentOpacity})`;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default function HeroAnimation({ inverted = false, footerMode = false }: HeroAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Footer uses same white but with lower opacity matching text-white/40
  const color = inverted ? COLOR_DARK : (footerMode ? COLOR_FOOTER : COLOR_LIGHT);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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
      const isMobile = width < 1024;
      const sectionPadding = isMobile ? 32 : 48; // px-8 on mobile, lg:px-tb-section-x on desktop
      const maxContentWidth = 1020; // max-w-content from tailwind config

      // Calculate where the max-w-content container actually starts
      // On wide screens, it's centered within the section padding
      const availableWidth = width - (sectionPadding * 2);
      const contentWidth = Math.min(availableWidth, maxContentWidth);
      const contentStartX = sectionPadding + (availableWidth - contentWidth) / 2;

      if (footerMode) {
        // Footer mode: line positioned at the divider location
        // Move line up a bit to give breathing room from bottom bar
        lineY = height * 0.72;

        // Line is CENTERED on the page (not aligned to content)
        lineLength = contentWidth * 0.85; // Tighter line - 85% of content width
        lineStartX = (width - lineLength) / 2; // Center the line horizontally
      } else {
        // Hero mode: line positioned between headline and subhead
        // Position line at the spacer location (after headline, before subhead)
        // Approximately 55% on desktop, 50% on mobile
        lineY = isMobile ? height * 0.50 : height * 0.55;

        // Line starts at same left position as content (where text starts)
        lineStartX = contentStartX;

        // Line extends across almost the full content width, left-aligned to copy
        // Extended longer to the right while keeping left alignment
        lineLength = contentWidth * 0.92;
      }

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

      // Footer mode uses faster cycle duration (20% faster)
      const cycleDuration = footerMode ? FOOTER_CYCLE_DURATION : CYCLE_DURATION;
      const cycleTime = currentTime % cycleDuration;
      const normalizedTime = cycleTime / cycleDuration;

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
        particles[i].draw(ctx, currentTime, progress, color, footerMode);
      }

      animFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => resize();
    window.addEventListener('resize', handleResize);

    const timer = setTimeout(() => {
      resize();
      if (prefersReducedMotion) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
          particles[i].draw(ctx, 0, 1, color, footerMode);
        }
        return;
      }

      animFrameId = requestAnimationFrame(animate);
    }, 50);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, [footerMode, color]);

  return (
    <div className="relative w-full h-full pointer-events-none">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />
    </div>
  );
}
