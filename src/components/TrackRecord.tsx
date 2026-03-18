'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

// FORECAST ACCURACY — update when new data is available
const FORECAST_ACCURACY = 85.1

// SIMULATED CALL STATS — update when new data is available
const SIMULATED_STATS = {
  winRate: "72.2%",
  avgROI: "+11.66%",
}

// CLAUDE STATS
const CLAUDE_STATS = {
  winRate: "43.5%",
  avgROI: "~4.6%",
}

function AnimatedNumber({ value, suffix = '%' }: { value: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 1500
          const startTime = performance.now()

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setDisplayValue(eased * value)

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="font-mono text-[56px] lg:text-[72px] font-bold leading-none text-tb-dark tracking-[-0.02em]">
      {displayValue.toFixed(1)}{suffix}
    </div>
  )
}

export default function TrackRecord() {
  return (
    <section
      id="track-record"
      className='bg-[#EDEDEA] rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y'
    >
      <div>
        {/* Eyebrow */}
        <span className="block uppercase mb-4 font-mono text-tb-primary text-[11px] tracking-[0.08em]">
          Track Record
        </span>

        {/* Section headline - ALL CAPS, smaller than hero */}
        <h2 className='font-headline font-bold text-tb-dark text-[24px] lg:text-[36px] leading-[0.95] tracking-[-0.02em] mb-10 uppercase'>
          Q&apos;S PERFORMANCE, VERIFIED.
        </h2>

        {/* Vertically stacked full-width cards */}
        <div className="flex flex-col gap-6 mb-8">
          {/* Forecast Accuracy card - full width, compact padding */}
          <div
            className="rounded-[10px] p-6 bg-white"
            style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
          >
            {/* Title - matches HowItWorks card headlines: text-[18px] font-semibold */}
            <h3 className="text-[18px] font-semibold mb-3 text-tb-dark">
              Forecast Accuracy
            </h3>
            {/* Large stat */}
            <AnimatedNumber value={FORECAST_ACCURACY} />
            {/* One line explainer */}
            <p className="text-[14px] text-tb-dark/60 mt-3">
              How often Q&apos;s forecast matched the eventual market outcome.
            </p>
          </div>

          {/* Q vs. Frontier AI Models card - full width */}
          <div
            className="rounded-[10px] p-6 bg-white"
            style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
          >
            {/* Title - matches HowItWorks card headlines: text-[18px] font-semibold */}
            <h3 className="text-[18px] font-semibold mb-6 text-tb-dark">
              Q vs. Frontier AI Models
            </h3>

            {/* Table-style comparison */}
            <div className="rounded-[8px] overflow-hidden border border-tb-dark/10 bg-[#F5F5F3]">
              {/* Header row */}
              <div className="grid grid-cols-[1fr_1fr_1fr] bg-[#EAEAE8] border-b border-tb-dark/10">
                <div className="p-4"></div>
                <div className="p-4 text-center">
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-tb-dark/50">Win Rate</span>
                </div>
                <div className="p-4 text-center">
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-tb-dark/50">Avg ROI</span>
                </div>
              </div>

              {/* Q row */}
              <div className="grid grid-cols-[1fr_1fr_1fr] bg-[#F5F5F3] border-b border-tb-dark/10">
                <div className="p-4 flex items-center">
                  <span className="text-[16px] font-bold text-tb-dark">Q</span>
                </div>
                <div className="p-4 text-center">
                  <span className="font-mono text-[24px] font-bold text-tb-dark">{SIMULATED_STATS.winRate}</span>
                </div>
                <div className="p-4 text-center">
                  <span className="font-mono text-[24px] font-bold text-green-600">{SIMULATED_STATS.avgROI}</span>
                </div>
              </div>

              {/* Claude Opus 4.6 row */}
              <div className="grid grid-cols-[1fr_1fr_1fr] bg-[#F5F5F3]">
                <div className="p-4 flex items-center">
                  <span className="text-[14px] text-tb-dark/60">Claude Opus 4.6</span>
                </div>
                <div className="p-4 text-center">
                  <span className="font-mono text-[18px] text-tb-dark/40">{CLAUDE_STATS.winRate}</span>
                </div>
                <div className="p-4 text-center">
                  <span className="font-mono text-[18px] text-tb-dark/40">{CLAUDE_STATS.avgROI}</span>
                </div>
              </div>
            </div>

            {/* Footnotes */}
            <div className="mt-4 space-y-1">
              <p className="text-[10px] text-tb-dark/40">
                Q figures reflect simulated calls using a 24-hour exit window.
              </p>
              <p className="text-[10px] text-tb-dark/40">
                Claude Opus 4.6 figures from PredictionArena, Polymarket platform.
              </p>
            </div>
          </div>
        </div>

        <Link
          href="/agents/q/track-record"
          className="inline-block text-[13px] font-mono uppercase tracking-[0.08em] transition-colors text-tb-primary hover:text-tb-cta-hover"
        >
          See More of Q&apos;s Track Record &rarr;
        </Link>
      </div>
    </section>
  )
}
