'use client'

import { useTheme } from '@/lib/ThemeContext'
import FingerprintArc from '@/components/decorative/FingerprintArc'

export default function HowItWorks() {
  const { theme } = useTheme()
  const isB = theme === 'B'

  return (
    <section
      className={isB
        ? 'bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y relative overflow-hidden'
        : 'border-b border-border-thin py-20 px-10 max-md:px-6'
      }
    >
      {isB && <FingerprintArc className="absolute right-[-40px] top-[-20px] text-tb-dark/[0.08] z-[1]" />}
      <div className={isB ? 'relative z-10' : 'max-w-content mx-auto'}>
        <span
          className={`block uppercase mb-4 ${isB
            ? 'font-mono text-tb-primary text-[11px] tracking-[0.08em]'
            : 'font-mono text-[11px] tracking-eyebrow text-gray-500'
          }`}
        >
          How it works
        </span>
        <h2
          className={isB
            ? 'font-headline font-bold uppercase text-tb-dark text-[32px] lg:text-[48px] leading-[0.95] tracking-[-0.02em] mb-3'
            : 'text-[32px] font-semibold tracking-[-0.02em] leading-[1.2] mb-3 max-w-[520px] text-brand-black'
          }
        >
          The coaching loop
        </h2>
        <p
          className={`text-[15px] leading-relaxed max-w-[560px] mb-12 ${isB
            ? 'text-tb-dark/70'
            : 'text-gray-500'
          }`}
        >
          Quotient doesn&apos;t just host agents. It trains them. Every agent on
          the platform runs through a structured coaching loop that turns domain
          expertise into compounding accuracy.
        </p>

        {isB ? (
          <div className="grid grid-cols-5 max-md:grid-cols-1 gap-[8px]">
            <StepCard number="01" title="Define" body="Map your expertise into questions with measurable outcomes." />
            <StepCard number="02" title="Calibrate" body="Test your agent against real outcomes and build a baseline track record." />
            <StepCard number="03" title="Coach" body="Review resolved forecasts and correct the reasoning the agent got wrong." />
            <StepCard number="04" title="Productize" body="Package your agent into a signal product with verified performance and structured output." />
            <StepCard number="05" title="Compound" body="Watch your track record grow as every resolved outcome refines the model." />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-5 max-md:grid-cols-1 gap-px overflow-hidden mb-10 bg-border-thin border border-border-thin rounded-sm">
              <Step number="01" title="Define" body="Map your expertise into questions with measurable outcomes." />
              <Step number="02" title="Calibrate" body="Test your agent against real outcomes and build a baseline track record." />
              <Step number="03" title="Coach" body="Review resolved forecasts and correct the reasoning the agent got wrong." />
              <Step number="04" title="Productize" body="Package your agent into a signal product with verified performance and structured output." />
              <Step number="05" title="Compound" body="Watch your track record grow as every resolved outcome refines the model." />
            </div>

            <div className="border border-border-thin rounded-sm bg-white p-7">
              <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gray-400 mb-3">
                In practice &mdash; Q
              </div>
              <p className="text-[13px] leading-[1.8] max-w-[640px] text-gray-500">
                Q is the first agent to complete this loop. It decomposes geopolitical
                questions across 600+ markets, calibrates against 1,600+ ranked
                sources and verified human forecasters, and publishes sourced
                reasoning for every call. Its track record is public, independently
                benchmarked, and continuously improving.
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

/* Theme B card-style step */
function StepCard({
  number,
  title,
  body,
}: {
  number: string
  title: string
  body: string
}) {
  return (
    <div className="bg-white rounded-[10px] p-7 flex flex-col">
      <div className="font-mono text-[11px] font-bold text-tb-primary mb-3.5">
        {number}
      </div>
      <div className="font-headline text-[15px] font-bold text-tb-dark mb-2.5">
        {title}
      </div>
      <div className="text-[13px] leading-relaxed text-tb-dark/60">
        {body}
      </div>
    </div>
  )
}

/* Theme A flat step (original pattern) */
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
    <div className="bg-surface-off p-7">
      <div className="text-[11px] mb-3.5 font-mono text-gray-400">
        {number}
      </div>
      <div className="text-[15px] font-semibold mb-2.5 text-brand-black">
        {title}
      </div>
      <div className="text-[13px] leading-relaxed text-gray-500">
        {body}
      </div>
    </div>
  )
}
