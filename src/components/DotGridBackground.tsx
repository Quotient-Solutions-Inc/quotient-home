'use client'

// Dot grid texture for dark sections on Build with Q page
export default function DotGridBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none rounded-tb-card"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    />
  )
}
