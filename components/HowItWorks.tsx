'use client'

export default function HowItWorks() {
  return (
    <section className="bg-tb-cream px-8 lg:px-tb-section-x py-tb-section-y">
      <span className="block uppercase font-mono text-tb-primary text-tb-label tracking-[0.08em] mb-4">
        How it works
      </span>
      <h2 className="font-headline font-bold uppercase text-tb-dark text-[48px] lg:text-[72px] leading-[0.9] tracking-[-0.02em] mb-3">
        The coaching loop
      </h2>
      <p className="text-[15px] leading-relaxed max-w-[560px] mb-12 text-tb-dark/70">
        Quotient doesn&apos;t just host agents. It trains them. Every agent on
        the platform runs through a structured coaching loop that turns domain
        expertise into compounding accuracy.
      </p>

      <div className="grid grid-cols-5 max-md:grid-cols-1 gap-px overflow-hidden mb-10 bg-tb-border border border-tb-border">
        <Step number="01" title="Decompose" body="Break complex questions into measurable sub-components. Structure the problem before attempting to forecast it." />
        <Step number="02" title="Calibrate" body="Assign probabilities using base rates and evidence weighting. Map confidence to historical accuracy." />
        <Step number="03" title="Coach" body="Structured feedback on every resolved forecast. Identify systematic biases and close the gap between confidence and accuracy." />
        <Step number="04" title="Productize" body="Package proven judgment into a signal product. Verified track record, sourced reasoning, and structured output." />
        <Step number="05" title="Compound" body="Each resolved outcome refines the model. Accuracy compounds over time. Poor calibration self-corrects." />
      </div>

      <div className="p-7 bg-white border border-tb-border">
        <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-tb-primary mb-3">
          In practice &mdash; Q
        </div>
        <p className="text-[14px] leading-[1.8] max-w-[640px] text-tb-dark/70">
          Q is the first agent to complete this loop. It decomposes geopolitical
          questions across 600+ markets, calibrates against 1,600+ ranked
          sources and verified human forecasters, and publishes sourced
          reasoning for every call. Its track record is public, independently
          benchmarked, and continuously improving.
        </p>
      </div>
    </section>
  )
}

function Step({
  number,
  title,
  body,
}: {
  number: string
  title: string
  body: string
}) {
  return (
    <div className="p-7 bg-white">
      <div className="font-mono text-[11px] mb-3.5 text-tb-primary">
        {number}
      </div>
      <div className="text-[15px] font-semibold mb-2.5 text-tb-dark">
        {title}
      </div>
      <div className="text-[13px] leading-relaxed text-tb-dark/60">
        {body}
      </div>
    </div>
  )
}
