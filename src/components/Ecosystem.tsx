'use client'

import Link from 'next/link'
import { useTheme } from '@/lib/ThemeContext'

const cards = [
  {
    eyebrow: 'VAULT',
    title: 'Deposit capital.',
    body: 'Q trades prediction markets and distributes returns proportionally.',
    cta: { text: 'Join waitlist', href: 'mailto:hello@quotient.social', action: 'link' as const },
    primary: true,
  },
  {
    eyebrow: 'SIGNAL',
    title: "Q\u2019s signal. Your strategy.",
    body: "Access Q\u2019s forecasts, spread alerts, and sourced reasoning across 600+ markets.",
    cta: { text: 'Subscribe to Signal', href: '/agents/q/signal', action: 'link' as const },
    primary: false,
  },
  {
    eyebrow: 'API',
    title: "Build with Q\u2019s data.",
    body: 'Structured signal via API for platforms, wallets, and agents building trading pipelines.',
    cta: { text: 'View API docs', href: '/agents/q/api', action: 'link' as const },
    primary: false,
  },
]

export default function Ecosystem() {
  const { theme } = useTheme()
  const isB = theme === 'B'

  if (isB) {
    return (
      <section className="bg-tb-dark rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y">
        <span className="font-mono text-tb-primary text-[11px] uppercase tracking-[0.08em] mb-4 block">
          Get Started
        </span>
        <h2 className="font-headline font-bold text-tb-cream text-[32px] lg:text-[48px] uppercase tracking-[-0.01em] leading-[0.95] mb-10">
          Put Q to work.
        </h2>
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-[8px]">
          {cards.map((card) => (
            <div
              key={card.eyebrow}
              className={`rounded-[10px] p-7 flex flex-col ${
                card.primary ? 'bg-tb-primary' : 'bg-white/[0.06]'
              }`}
            >
              <span className={`font-mono text-[11px] uppercase tracking-[0.08em] mb-3 ${
                card.primary ? 'text-white/60' : 'text-tb-primary'
              }`}>
                {card.eyebrow}
              </span>
              <h3 className={`text-[15px] font-semibold mb-2 ${
                card.primary ? 'text-white' : 'text-tb-cream'
              }`}>
                {card.title}
              </h3>
              <p className={`text-[13px] leading-relaxed mb-5 flex-1 ${
                card.primary ? 'text-white/70' : 'text-tb-cream/50'
              }`}>
                {card.body}
              </p>
              {card.primary ? (
                <Link
                  href={card.cta.href}
                  className="w-fit font-mono text-[11px] uppercase tracking-[0.08em] px-5 py-2.5 bg-tb-cream text-tb-dark rounded-tb-card hover:bg-white transition-colors"
                >
                  {card.cta.text}
                </Link>
              ) : (
                <Link
                  href={card.cta.href}
                  className="w-fit font-mono text-[11px] text-tb-primary hover:text-tb-cta-hover transition-colors"
                >
                  {card.cta.text} &rarr;
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>
    )
  }

  // Theme A (preserved for reference)
  return (
    <section className="bg-surface-off border-b border-border-thin py-20 px-10 max-md:px-6">
      <div className="max-w-content mx-auto">
        <span className="block font-mono text-[11px] text-gray-500 uppercase tracking-eyebrow mb-4">
          Get started
        </span>
        <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-brand-black mb-10 leading-[1.2]">
          Put Q to work.
        </h2>
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-5">
          {cards.map((card) => (
            <div key={card.eyebrow} className="border border-border-thin rounded-sm p-7 bg-white flex flex-col">
              <span className="font-mono text-[10px] uppercase tracking-eyebrow text-gray-400 mb-2">
                {card.eyebrow}
              </span>
              <h3 className="text-[17px] font-semibold text-brand-black leading-[1.25] mb-2 tracking-[-0.01em]">
                {card.title}
              </h3>
              <p className="text-[13px] text-gray-500 leading-relaxed mb-5 flex-1">{card.body}</p>
              <div className="mt-auto">
                <Link href={card.cta.href} className="font-mono text-[11px] text-gray-400 hover:text-brand-black transition-colors">
                  {card.cta.text} &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
