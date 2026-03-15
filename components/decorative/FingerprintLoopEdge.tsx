/** Large partial ellipses that bleed from edges — 300×400 default. Use with directional positioning. */
export default function FingerprintLoopEdge({ className = '' }: { className?: string }) {
  const arcs = Array.from({ length: 8 }, (_, i) => {
    const rx = 60 + i * 18
    const ry = 80 + i * 24
    return { rx, ry }
  })

  return (
    <svg
      width="300"
      height="400"
      viewBox="0 0 300 400"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {arcs.map((a, i) => (
        <ellipse key={i} cx={0} cy={200} rx={a.rx} ry={a.ry} />
      ))}
    </svg>
  )
}
