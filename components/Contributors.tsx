'use client'

export default function Contributors({
  subheadline = 'The signal gets sharper with you.',
}: {
  subheadline?: string
}) {
  return (
    <div className="bg-tb-cream py-12 px-8 lg:px-tb-section-x">
      <div className="flex items-center justify-between gap-10 max-md:flex-col max-md:items-start">
        <div>
          <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-tb-primary mb-2.5">
            Contributors
          </span>
          <h2 className="text-[26px] font-semibold tracking-[-0.01em] text-tb-dark mb-2">
            {subheadline}
          </h2>
          <p className="text-sm leading-relaxed max-w-[480px] text-tb-dark/60">
            Verified forecasters earn influence in Q&apos;s context graph. Track
            record is the only credential that matters.
          </p>
        </div>
        <div className="flex-shrink-0">
          <button className="font-mono text-xs uppercase px-5 py-2.5 border tracking-[0.08em] border-tb-dark text-tb-dark/60 hover:border-tb-primary hover:text-tb-primary transition-colors">
            Contribute to earn
          </button>
        </div>
      </div>
    </div>
  )
}
