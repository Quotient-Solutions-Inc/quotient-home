'use client'

export default function OpenModalButton() {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event('open-quotient-modal'))}
      className="text-[13px] uppercase px-6 py-3 bg-tb-primary text-white font-mono tracking-[0.08em] hover:bg-tb-cta-hover transition-colors"
    >
      Get access
    </button>
  )
}
