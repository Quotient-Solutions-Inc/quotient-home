export default function QuotientLogo({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Quotient"
    >
      <rect width="100" height="100" fill="black" />
      <circle cx="42" cy="42" r="38" fill="white" />
      <rect x="58" y="58" width="42" height="42" fill="black" />
    </svg>
  )
}
