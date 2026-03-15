/** 5 curved horizontal ridge lines — 400×80 default. Good for section dividers. */
export default function FingerprintRidge({ className = '' }: { className?: string }) {
  const ridges = Array.from({ length: 5 }, (_, i) => {
    const y = 10 + i * 15
    const curve = 6 + i * 2
    return `M 0 ${y} Q 100 ${y - curve} 200 ${y} Q 300 ${y + curve} 400 ${y}`
  })

  return (
    <svg
      width="400"
      height="80"
      viewBox="0 0 400 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {ridges.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  )
}
