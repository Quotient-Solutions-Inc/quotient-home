/** Upper-half dome arcs — 8 concentric arcs. 400×140 default. */
export default function FingerprintArc({ className = '' }: { className?: string }) {
  const arcs = Array.from({ length: 8 }, (_, i) => {
    const r = 40 + i * 20
    return `M ${200 - r} 140 A ${r} ${r} 0 0 1 ${200 + r} 140`
  })

  return (
    <svg
      width="400"
      height="140"
      viewBox="0 0 400 140"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {arcs.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  )
}
