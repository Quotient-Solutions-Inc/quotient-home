'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PRODUCT_HREF } from '@/lib/links'
import EarlyAccessModal from './EarlyAccessModal'

// SVG Icons
function DashboardIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="3" y="3" width="7" height="9" />
      <rect x="14" y="3" width="7" height="5" />
      <rect x="14" y="12" width="7" height="9" />
      <rect x="3" y="16" width="7" height="5" />
    </svg>
  )
}

function TerminalIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <polyline points="4,17 10,11 4,5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  )
}

function BoltIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
    </svg>
  )
}

const CARDS = [
  {
    icon: DashboardIcon,
    eyebrow: 'Explore Directly',
    title: "View Q's intelligence",
    body: 'Log in to explore live forecasts, signal divergence, market reasoning, and recent calls.',
    cta: 'Open Quotient →',
    href: PRODUCT_HREF,
  },
  {
    icon: TerminalIcon,
    eyebrow: 'For Developers and Agents',
    title: 'Build with the API',
    body: 'Access forecasts, signals, and structured market intelligence through endpoints for apps, workflows, and agents.',
    cta: 'View Docs →',
    href: '/build-with-q',
  },
  {
    icon: BoltIcon,
    eyebrow: 'For Traders',
    title: 'Run a trading agent',
    body: "Use Q's signals as input into your own strategy and build automated trading workflows.",
    cta: 'Get Early Access →',
    opensModal: true,
  },
]

export default function PutQToWork() {
  const [earlyAccessOpen, setEarlyAccessOpen] = useState(false)

  return (
    <>
      <section className="bg-tb-dark rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y">
        <div className="max-w-content mx-auto">
        {/* Centered headline */}
        <h2 className="font-headline font-bold text-tb-page text-[28px] lg:text-[42px] tracking-[-0.01em] leading-[0.95] mb-12 uppercase text-center">
          PUT Q TO WORK.
        </h2>

        {/* Three cards */}
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4 max-w-4xl mx-auto">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-[10px] bg-white/[0.06] p-6 text-left flex flex-col"
            >
              {/* Icon */}
              <div className="text-tb-page/60 mb-4">
                <card.icon />
              </div>

              {/* Eyebrow */}
              <span className="block font-mono text-[10px] uppercase tracking-[0.08em] text-tb-page/50 mb-2">
                {card.eyebrow}
              </span>

              {/* Title */}
              <h3 className="text-[16px] font-semibold mb-3 text-tb-page">
                {card.title}
              </h3>

              {/* Body */}
              <p className="text-[14px] leading-relaxed text-tb-page/60 mb-6 flex-1">
                {card.body}
              </p>

              {/* CTA */}
              <div className="mt-auto">
                {card.opensModal ? (
                  <button
                    onClick={() => setEarlyAccessOpen(true)}
                    className="font-mono text-[11px] uppercase tracking-[0.08em] text-tb-primary hover:text-tb-cta-hover transition-colors"
                  >
                    {card.cta}
                  </button>
                ) : (
                  <Link
                    href={card.href!}
                    className="font-mono text-[11px] uppercase tracking-[0.08em] text-tb-primary hover:text-tb-cta-hover transition-colors"
                  >
                    {card.cta}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>
      <EarlyAccessModal isOpen={earlyAccessOpen} onClose={() => setEarlyAccessOpen(false)} />
    </>
  )
}
