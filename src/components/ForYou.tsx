'use client'

import Link from 'next/link'
import { useTheme } from '@/lib/ThemeContext'
import FingerprintWhorl from '@/components/decorative/FingerprintWhorl'

export default function ForYou() {
  const { theme } = useTheme()
  const isB = theme === 'B'

  return (
    <section className={`border-b relative ${
      isB ? 'bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y' : 'border-border-thin py-20 px-10 max-md:px-6'
    }`}>
      <div className={isB ? '' : 'max-w-content mx-auto'}>
        <span className={`block text-[11px] uppercase mb-4 ${
          isB
            ? 'font-mono tracking-[0.08em] text-gray-500'
            : 'font-mono tracking-eyebrow text-gray-500'
        }`}>
          Who it&apos;s for
        </span>
        <h2 className={`font-semibold tracking-[-0.02em] mb-2 leading-[1.2] ${
          isB
            ? 'font-headline font-bold text-[clamp(2rem,4vw,3.5rem)] uppercase text-tb-dark leading-[0.9]'
            : 'text-[28px] text-brand-black'
        }`}>
          Three paths to the signal.
        </h2>
        <p className={`text-[15px] leading-relaxed mb-10 ${
          isB ? 'font-headline text-gray-500' : 'text-gray-500'
        }`}>
          Q serves different users differently. Choose the path that fits how you work.
        </p>

        <div className={`grid max-md:grid-cols-1 gap-5 ${isB ? 'grid-cols-3 gap-4' : 'grid-cols-3'}`}>
          <PathCard
            eyebrow="For Traders"
            headline="Get an edge. Trade with conviction."
            desc="Q's forecast, reasoning, and spread vs. market odds on every market. Updated daily."
            primaryCta="Subscribe"
            primaryHref="/agents/q/signal#pricing"
            learnHref="/agents/q/signal"
            isB={isB}
          />
          <PathCard
            eyebrow="For Platforms & Wallets"
            headline="More context. More trading volume."
            desc="Integrate Q's signal layer into your existing markets. More context for traders means more volume for you."
            primaryCta="Get in touch"
            primaryHref="mailto:hello@quotient.social"
            learnHref="/agents/q/platforms"
            isB={isB}
          />
          <PathCard
            eyebrow="For Agents"
            headline="Structured signal for autonomous pipelines."
            desc="Structured JSON endpoints with sourced evidence and confidence scores. Built for autonomous pipelines."
            primaryCta="Start building"
            primaryHref="/agents/q/api"
            learnHref="/agents/q/api"
            isB={isB}
          />
        </div>
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
  learnHref,
  isB,
}: {
  eyebrow: string
  headline: string
  desc: string
  primaryCta: string
  primaryHref: string
  learnHref: string
  isB: boolean
}) {
  return (
    <div className={`p-7 flex flex-col ${
      isB
        ? 'border border-tb-border rounded-tb-card p-8 relative overflow-hidden'
        : 'border border-border-thin rounded-sm bg-white'
    }`}>
      {isB && <FingerprintWhorl className="absolute -right-3 -top-3 text-tb-dark/[0.04] z-[1]" />}
      <span className={`block text-[10px] uppercase mb-3 ${
        isB
          ? 'font-mono tracking-[0.08em] text-gray-400'
          : 'font-mono tracking-eyebrow text-gray-400'
      }`}>
        {eyebrow}
      </span>
      <h3 className={`text-[18px] font-semibold leading-[1.25] mb-3 tracking-[-0.01em] ${
        isB ? 'font-headline text-tb-dark' : 'text-brand-black'
      }`}>
        {headline}
      </h3>
      <p className={`text-[13px] leading-relaxed mb-6 ${
        isB ? 'font-headline text-gray-500' : 'text-gray-500'
      }`}>
        {desc}
      </p>
      <div className="mt-auto flex items-center gap-4">
        <Link
          href={primaryHref}
          className={`text-center text-[11px] uppercase px-5 py-2.5 min-w-[150px] transition-colors ${
            isB
              ? 'bg-tb-dark text-white font-mono tracking-[0.08em] hover:opacity-90'
              : 'bg-brand-black text-white font-mono tracking-wide hover:bg-gray-800'
          }`}
        >
          {primaryCta}
        </Link>
        <Link
          href={learnHref}
          className={`text-[11px] transition-colors whitespace-nowrap ${
            isB
              ? 'font-mono text-gray-400 hover:text-tb-primary'
              : 'font-mono text-gray-400 hover:text-brand-black'
          }`}
        >
          Learn more &rarr;
        </Link>
      </div>
    </div>
  )
}
