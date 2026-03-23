'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PRODUCT_HREF } from '@/lib/links'

// SVG Icons for "What's inside every forecast" section
function TargetIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}

function GridIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  )
}

function DocumentIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14,2 14,8 20,8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  )
}

// What's inside every forecast items
const FORECAST_ITEMS = [
  { icon: TargetIcon, title: 'The call', desc: 'What Q predicts, with a confidence level' },
  { icon: GridIcon, title: 'Key factors', desc: "Ranked and weighted evidence driving Q's view" },
  { icon: DocumentIcon, title: 'Full analysis', desc: 'Reasoning, assumptions, and scenario analysis' },
]

// Info button component
function InfoButton({ isHovered }: { isHovered: boolean }) {
  return (
    <span
      className={`inline-flex items-center justify-center w-4 h-4 rounded-full border text-[9px] font-medium transition-colors duration-150 ${
        isHovered
          ? 'border-tb-primary text-tb-primary'
          : 'border-tb-dark/30 text-tb-dark/40'
      }`}
    >
      i
    </span>
  )
}

// Tooltip component
function Tooltip({ children, visible }: { children: React.ReactNode; visible: boolean }) {
  if (!visible) return null
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-20">
      {/* Arrow */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-1.5 w-3 h-3 bg-tb-dark rotate-45" />
      {/* Tooltip body */}
      <div className="relative bg-tb-dark text-tb-page text-[12px] leading-relaxed px-3 py-2 rounded-[6px] w-[180px]">
        {children}
      </div>
    </div>
  )
}

// Metric tile component with hover tooltip
function MetricTile({
  label,
  value,
  valueColor,
  descriptor,
  tooltip,
  isEdge = false,
}: {
  label: string
  value: string
  valueColor: string
  descriptor: string
  tooltip: string
  isEdge?: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`relative flex-1 py-4 px-4 cursor-default ${isEdge ? 'bg-tb-primary/10' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center gap-1.5 mb-1">
        <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-tb-dark/50">
          {label}
        </span>
        <InfoButton isHovered={hovered} />
      </div>
      <span className={`block font-headline text-[24px] font-semibold mb-1 ${valueColor}`}>
        {value}
      </span>
      <span className="block text-[11px] text-tb-dark/40">
        {descriptor}
      </span>
      <Tooltip visible={hovered}>{tooltip}</Tooltip>
    </div>
  )
}

// Key factors data - no em dashes or hyphens
const KEY_FACTORS = [
  { weight: 'critical', percentage: '30%', text: 'Military posture mirrors June 2025 pre-strike configuration' },
  { weight: 'critical', percentage: '20%', text: 'Nuclear program degraded, no enrichment for 7 to 8 months' },
  { weight: 'significant', percentage: '15%', text: 'Trump one-month deadline plus Israeli officials warning of war' },
]

export default function InsideAForecast() {
  return (
    <section className="bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y">
      <div className="max-w-content mx-auto">
        {/* Eyebrow */}
        <span className="block uppercase mb-3 font-mono text-tb-primary text-[11px] tracking-[0.08em]">
          Inside a Q Forecast
        </span>

        {/* Headline */}
        <h2 className="font-headline font-bold text-tb-dark text-[24px] lg:text-[36px] leading-[0.95] tracking-[-0.02em] mb-2 uppercase">
          SEE WHAT Q ACTUALLY PRODUCES
        </h2>

        {/* Subhead */}
        <p className="text-[15px] leading-[1.7] text-tb-dark/60 max-w-[560px] mb-8">
          Each forecast includes a directional call, the key factors driving the view, and the full analysis reasoning behind.
        </p>

        {/* Example Forecast Card */}
        <div>
          <div
            className="rounded-tb-card overflow-hidden border border-tb-border"
            style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
          >
            {/* Section 1: Header - Dark background */}
            <div className="bg-tb-dark px-6 py-5">
              <span className="block font-mono text-[10px] uppercase tracking-[0.08em] text-tb-page/50 mb-2">
                Example Forecast · Feb 18, 2026
              </span>
              <h3 className="font-headline text-[18px] lg:text-[22px] font-medium text-tb-page leading-tight">
                Will US or Israel strike Iran by March 31, 2026?
              </h3>
            </div>

            {/* Section 2: Metrics row */}
            <div className="bg-tb-card-inner">
              <div className="flex max-md:flex-wrap">
                <MetricTile
                  label="Q's Call"
                  value="Yes"
                  valueColor="text-green-600"
                  descriptor="What Q predicts"
                  tooltip="This is the direction Q is betting. Yes or No. The probability comes separately."
                />
                <div className="w-px bg-tb-border max-md:hidden" />
                <MetricTile
                  label="Q's Forecast"
                  value="52%"
                  valueColor="text-tb-dark"
                  descriptor="Q's probability estimate"
                  tooltip="Q thinks there's a 52% chance this happens. This is Q's independent probability estimate."
                />
                <div className="w-px bg-tb-border max-md:hidden" />
                <MetricTile
                  label="Market Odds"
                  value="63%"
                  valueColor="text-tb-dark"
                  descriptor="What the crowd is pricing"
                  tooltip="What Polymarket was pricing when Q made this call. This is the crowd's view, not Q's."
                />
                <div className="w-px bg-tb-border max-md:hidden" />
                <MetricTile
                  label="Q's Edge"
                  value="11 pts"
                  valueColor="text-tb-primary"
                  descriptor="Gap vs. the market"
                  tooltip="The gap between Q's view and the market's. This is where the opportunity lives."
                  isEdge
                />
              </div>
            </div>

            {/* Section 3: Key Factors */}
            <div className="bg-tb-card-inner px-6 py-5 border-t border-tb-border">
              <span className="block font-mono text-[10px] uppercase tracking-[0.08em] text-tb-dark/50 mb-4">
                Key Factors
              </span>
              <div className="space-y-2">
                {KEY_FACTORS.map((factor, i) => (
                  <div
                    key={i}
                    className={`flex items-center bg-white rounded-[6px] border border-tb-border/50 py-3 px-4 border-l-2 ${
                      factor.weight === 'critical'
                        ? 'border-l-tb-primary'
                        : 'border-l-tb-dark/20'
                    }`}
                  >
                    <span
                      className={`inline-block w-[90px] flex-shrink-0 px-2 py-0.5 rounded text-[10px] uppercase tracking-[0.04em] font-medium text-center ${
                        factor.weight === 'critical'
                          ? 'bg-tb-primary/10 text-tb-primary'
                          : 'bg-tb-dark/5 text-tb-dark/50'
                      }`}
                    >
                      {factor.weight}
                    </span>
                    <span className="font-mono text-[12px] text-tb-dark/40 w-[40px] text-right flex-shrink-0 mx-3">
                      {factor.percentage}
                    </span>
                    <span className="text-[13px] text-tb-dark/80 flex-1">
                      {factor.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: Full Analysis */}
            <div className="bg-tb-card-inner px-6 py-5 border-t border-tb-border">
              <span className="block font-mono text-[10px] uppercase tracking-[0.08em] text-tb-dark/50 mb-4">
                Full Analysis
              </span>
              <p className="text-[14px] text-tb-dark/50 leading-relaxed italic mb-3">
                The current military posture closely mirrors the configuration observed before the June 2025 strikes. Combined with Iran&apos;s degraded nuclear capabilities and explicit deadline language from the administration, Q assesses near-term strike probability higher than the market is pricing...
              </p>
              <Link
                href={PRODUCT_HREF}
                className="group inline-flex items-center font-mono text-[11px] uppercase tracking-[0.08em] text-tb-primary hover:text-tb-cta-hover transition-colors duration-150"
              >
                Log in to read full analysis
                <span className="ml-1 transition-transform duration-150 group-hover:translate-x-0.5">&rarr;</span>
              </Link>
            </div>

            {/* What's inside every forecast - inside card */}
            <div className="bg-tb-cream px-6 py-5 border-t border-tb-border">
              <span className="block font-mono text-[10px] uppercase tracking-[0.08em] text-tb-dark/40 mb-5">
                WHAT&apos;S INSIDE EVERY FORECAST
              </span>
              <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6">
                {FORECAST_ITEMS.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="text-tb-primary flex-shrink-0 mt-0.5">
                      <item.icon />
                    </div>
                    <div>
                      <h4 className="font-headline text-[16px] font-semibold text-tb-dark mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[13px] leading-relaxed text-tb-dark/50">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
