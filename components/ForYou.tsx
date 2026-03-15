'use client'

import Link from 'next/link'

export default function ForYou() {
  return (
    <section className="bg-tb-cream px-8 lg:px-tb-section-x py-tb-section-y border-b border-tb-border">
      <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-gray-500 mb-4">
        Who it&apos;s for
      </span>
      <h2 className="font-headline font-bold text-[clamp(2rem,4vw,3.5rem)] uppercase text-tb-dark leading-[0.9] tracking-[-0.02em] mb-2">
        Three paths to the signal.
      </h2>
      <p className="text-[15px] leading-relaxed font-headline text-gray-500 mb-10">
        Q serves different users differently. Choose the path that fits how you work.
      </p>

      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4">
        <PathCard
          eyebrow="For Traders"
          headline="Get an edge. Trade with conviction."
          desc="Q's forecast, reasoning, and spread vs. market odds on every market. Updated daily."
          primaryCta="Subscribe"
          primaryHref="/agents/q/signal#pricing"
        />
        <PathCard
          eyebrow="For Platforms & Wallets"
          headline="More context. More trading volume."
          desc="Integrate Q's signal layer into your existing markets. More context for traders means more volume for you."
          primaryCta="Get in touch"
          primaryHref="mailto:hello@quotient.social"
        />
        <PathCard
          eyebrow="For Agents"
          headline="Structured signal for autonomous pipelines."
          desc="Structured JSON endpoints with sourced evidence and confidence scores. Built for autonomous pipelines."
          primaryCta="Start building"
          primaryHref="/agents/q/api"
        />
      </div>
    </section>
  )
}

function PathCard({
  eyebrow,
  headline,
  desc,
  primaryCta,
  primaryHref,
}: {
  eyebrow: string
  headline: string
  desc: string
  primaryCta: string
  primaryHref: string
}) {
  return (
    <div className="border border-tb-border p-8 flex flex-col">
      <span className="block font-mono text-[10px] uppercase tracking-[0.08em] text-gray-400 mb-3">
        {eyebrow}
      </span>
      <h3 className="font-headline text-[18px] font-semibold text-tb-dark leading-[1.25] mb-3 tracking-[-0.01em]">
        {headline}
      </h3>
      <p className="font-headline text-[13px] text-gray-500 leading-relaxed mb-6">
        {desc}
      </p>
      <div className="mt-auto">
        <Link
          href={primaryHref}
          className="text-center text-[11px] uppercase px-5 py-2.5 bg-tb-dark text-white font-mono tracking-[0.08em] hover:opacity-90 transition-opacity"
        >
          {primaryCta}
        </Link>
      </div>
    </div>
  )
}
