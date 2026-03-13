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
      {isB && <FingerprintArc className="absolute right-[-40px] top-[-20px] text-tb-dark/[0.04] z-[1]" />}
      <div className={isB ? 'relative z-10' : 'max-w-content mx-auto'}>
        <span
          className={`block uppercase mb-4 ${isB
            ? 'font-mono text-tb-primary text-tb-label tracking-[0.08em]'
            : 'font-mono text-[11px] tracking-eyebrow text-gray-500'
          }`}
        >
          How it works
        </span>
        <h2
          className={isB
            ? 'font-headline font-bold uppercase text-tb-dark text-[48px] lg:text-[72px] leading-[0.9] tracking-[-0.02em] mb-3'
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

        <div
          className={`grid grid-cols-5 max-md:grid-cols-1 gap-px overflow-hidden mb-10 ${isB
            ? 'bg-tb-border rounded-tb-card border border-tb-border'
            : 'bg-border-thin border border-border-thin rounded-sm'
          }`}
        >
          <Step number="01" title="Decompose" body="Break complex questions into measurable sub-components. Structure the problem before attempting to forecast it." isB={isB} />
          <Step number="02" title="Calibrate" body="Assign probabilities using base rates and evidence weighting. Map confidence to historical accuracy." isB={isB} />
          <Step number="03" title="Coach" body="Structured feedback on every resolved forecast. Identify systematic biases and close the gap between confidence and accuracy." isB={isB} />
          <Step number="04" title="Productize" body="Package proven judgment into a signal product. Verified track record, sourced reasoning, and structured output." isB={isB} />
          <Step number="05" title="Compound" body="Each resolved outcome refines the model. Accuracy compounds over time. Poor calibration self-corrects." isB={isB} />
        </div>

        <div
          className={`p-7 ${isB
            ? 'bg-white border border-tb-border rounded-tb-card'
            : 'border border-border-thin rounded-sm bg-white'
          }`}
        >
          <div
            className={`text-[10px] uppercase mb-3 ${isB
              ? 'font-mono tracking-[0.08em] text-tb-primary'
              : 'font-mono tracking-eyebrow text-gray-400'
            }`}
          >
            In practice &mdash; Q
          </div>
          <p className={`text-[14px] leading-[1.8] max-w-[640px] ${isB ? 'text-tb-dark/70' : 'text-gray-500'}`}>
            Q is the first agent to complete this loop. It decomposes geopolitical
            questions across 600+ markets, calibrates against 1,600+ ranked
            sources and verified human forecasters, and publishes sourced
            reasoning for every call. Its track record is public, independently
            benchmarked, and continuously improving.
          </p>
        </div>
      </div>
    </section>
  )
}

function Step({
  number,
  title,
  body,
  isB,
}: {
  number: string
  title: string
  body: string
  isB: boolean
}) {
  return (
    <div className={`p-7 ${isB ? 'bg-white' : 'bg-surface-off'}`}>
      <div className={`text-[11px] mb-3.5 font-mono ${isB ? 'text-tb-primary' : 'text-gray-400'}`}>
        {number}
      </div>
      <div className={`text-[15px] font-semibold mb-2.5 ${isB ? 'text-tb-dark' : 'text-brand-black'}`}>
        {title}
      </div>
      <div className={`text-[13px] leading-relaxed ${isB ? 'text-tb-dark/60' : 'text-gray-500'}`}>
        {body}
      </div>
    </div>
  )
}
