'use client'

import { useEffect, useRef } from 'react';

// Quotient Track Record page — hero space animation
// 16 flowing signal lines that converge into parallel horizontal lines and scatter back out.
// Monochrome warm off-white (#FAFAF7) on light background — adjust strokeStyle if needed.
// Fades out at left and right edges via CSS mask.
// 12-second loop.
//
// Usage: place in the space between the top nav and the TRACK RECORD eyebrow.
// Do NOT sit behind text. Give this component its own dedicated vertical space.
// Recommended container height: 180-220px.

export default function SignalLinesAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationRef: number;
    const dimensionsRef = { width: 0, height: 0, centerY: 0 };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement!.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      dimensionsRef.width = width;
      dimensionsRef.height = height;
      dimensionsRef.centerY = height / 2;
    };

    window.addEventListener('resize', resize);
    resize();

    const numInputs = 16;
    const inputs: {
      yOffset: number;
      amplitude: number;
      frequency: number;
      phase: number;
      waveSpeed: number;
      flowSpeed: number;
      opacity: number;
      dashPattern: [number, number];
    }[] = [];

    const { height } = dimensionsRef;

    for (let i = 0; i < numInputs; i++) {
      inputs.push({
        yOffset: (Math.random() - 0.5) * (height * 0.7),
        amplitude: Math.random() * 60 + 10,
        frequency: Math.random() * 0.004 + 0.001,
        phase: Math.random() * Math.PI * 2,
        waveSpeed: Math.random() * 0.0008 + 0.0002,
        flowSpeed: Math.random() * 0.08 + 0.02,
        opacity: Math.random() * 0.3 + 0.05,
        dashPattern: [Math.random() * 150 + 50, Math.random() * 100 + 40],
      });
    }

    const animationDuration = 12000;

    const draw = (time: number) => {
      const { width, height, centerY } = dimensionsRef;
      ctx.clearRect(0, 0, width, height);

      const progress = (time % animationDuration) / animationDuration;

      let convergence = 0;
      if (progress > 0.15 && progress <= 0.45) {
        const t = (progress - 0.15) / 0.3;
        convergence = t * t * (3 - 2 * t);
      } else if (progress > 0.45 && progress <= 0.65) {
        convergence = 1;
      } else if (progress > 0.65 && progress <= 0.95) {
        const t = (progress - 0.65) / 0.3;
        convergence = 1 - t * t * (3 - 2 * t);
      }

      inputs.forEach((input) => {
        ctx.beginPath();
        const currentYOffset = input.yOffset * (1 - convergence);
        const currentAmplitude = input.amplitude * (1 - convergence);
        const targetOpacity = 0.9;
        const currentOpacity = input.opacity + (targetOpacity - input.opacity) * convergence;
        ctx.globalAlpha = currentOpacity;

        // On light background use a dark muted color instead of #FAFAF7
        // Change to '#1C1A17' with low opacity for light section use
        ctx.strokeStyle = 'rgba(28, 26, 23, 0.25)';
        ctx.lineWidth = 1;

        if (convergence < 0.99) {
          const currentGap = input.dashPattern[1] * (1 - convergence);
          ctx.setLineDash([input.dashPattern[0], currentGap]);
          ctx.lineDashOffset = -(time * input.flowSpeed);
        } else {
          ctx.setLineDash([]);
        }

        const step = 4;
        for (let x = 0; x <= width; x += step) {
          const y =
            centerY +
            currentYOffset +
            Math.sin(x * input.frequency + input.phase + time * input.waveSpeed) * currentAmplitude;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      });

      animationRef = requestAnimationFrame(draw);
    };

    animationRef = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef) cancelAnimationFrame(animationRef);
    };
  }, []);

  return (
    // Container sits in the space between nav and eyebrow
    // Adjust height to taste — recommended 180-220px
    // The CSS mask fades the lines at left and right edges
    <div
      className="w-full pointer-events-none"
      style={{
        height: '200px',
        maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
      }}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
