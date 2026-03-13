/** Large fingerprint watermark — ~52 concentric ellipses. 420×580 default. */
export default function FingerprintFull({ className = '' }: { className?: string }) {
  const ellipses: { rx: number; ry: number }[] = []
  const cx = 210
  const cy = 290
  for (let i = 0; i < 52; i++) {
    ellipses.push({
      rx: 8 + i * 3.9,
      ry: 10 + i * 5.4,
    })
  }

  return (
    <svg
      width="420"
      height="580"
      viewBox="0 0 420 580"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {ellipses.map((e, i) => (
        <ellipse key={i} cx={cx} cy={cy} rx={e.rx} ry={e.ry} />
      ))}
    </svg>
  )
}
