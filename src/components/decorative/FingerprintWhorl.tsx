/** Tight cluster of 6 small loops — 80×80 default. Good for card corners. */
export default function FingerprintWhorl({ className = '' }: { className?: string }) {
  const loops = [
    { cx: 40, cy: 40, rx: 6, ry: 8 },
    { cx: 40, cy: 40, rx: 12, ry: 16 },
    { cx: 40, cy: 40, rx: 18, ry: 24 },
    { cx: 40, cy: 40, rx: 24, ry: 30 },
    { cx: 40, cy: 40, rx: 30, ry: 35 },
    { cx: 40, cy: 40, rx: 36, ry: 39 },
  ]

  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.7"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {loops.map((l, i) => (
        <ellipse key={i} cx={l.cx} cy={l.cy} rx={l.rx} ry={l.ry} />
      ))}
    </svg>
  )
}
