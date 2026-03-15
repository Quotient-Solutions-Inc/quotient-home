'use client'

import Link from 'next/link'
import NavWithModal from '@/components/NavWithModal'
import QCalledIt from '@/components/QCalledIt'
import Footer from '@/components/Footer'
import { useQStats, useQTrades } from '@/lib/useQData'

/* ── Q Hero Stats Row ── */
function QHeroStats() {
  const { stats, loading } = useQStats()

  if (loading || !stats) {
    return (
      <div className="flex items-center gap-6 py-4 mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="pr-6 border-r border-tb-border last:border-r-0 last:pr-0">
            <div className="font-mono text-[28px] font-semibold leading-none mb-1 text-tb-dark animate-pulse">—</div>
            <div className="font-mono text-[10px] uppercase tracking-wide text-gray-400">Loading</div>
          </div>
        ))}
      </div>
    )
  }

  const winPct = `${Math.round(stats.winRate * 100)}%`
  const winLossRatio =
    stats.avgLoss !== 0
      ? `${Math.abs(stats.avgWin / stats.avgLoss).toFixed(1)}×`
      : '—'

  const statItems = [
    { value: winPct, label: 'Win Rate' },
    { value: winLossRatio, label: 'Win/Loss Ratio' },
    { value: `${stats.totalTrades}`, label: 'Active Trades' },
  ]

  return (
    <div className="flex flex-wrap items-center gap-6 py-4 mb-8">
      {statItems.map((stat, i) => (
        <div
          key={stat.label}
          className={`pr-6 ${i < statItems.length - 1 ? 'border-r border-tb-border' : ''}`}
        >
          <div className="font-mono text-[28px] font-semibold leading-none mb-1 text-tb-dark">
            {stat.value}
          </div>
          <div className="font-mono text-[10px] uppercase tracking-wide text-gray-400">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}

/* ── Recent Calls Table ── */
function RecentCallsSection() {
  const { trades, loading, error } = useQTrades()

  return (
    <section className="px-8 lg:px-tb-section-x py-tb-section-y">
      <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-gray-500 mb-4">
        Recent Calls · Last 14 Days
      </span>
      <p className="text-[13px] text-gray-400 leading-relaxed max-w-[640px] mb-6">
        These are trades that would have been placed with the active Q strategy
        — buy when Q&apos;s forecast diverges 20+ points from market odds. ROI
        reflects 24h price movement.
      </p>

      {loading ? (
        <div className="py-12 text-center">
          <span className="font-mono text-[12px] text-gray-400 animate-pulse">Loading calls...</span>
        </div>
      ) : error || trades.length === 0 ? (
        <div className="py-12 text-center">
          <span className="font-mono text-[12px] text-gray-400">No calls available</span>
        </div>
      ) : (
        <>
          <div className="border border-tb-border overflow-hidden">
            {trades.map((trade, i) => (
              <div
                key={`${trade.question}-${i}`}
                className={`px-5 py-4 flex items-start gap-4 max-md:flex-col max-md:gap-2 ${
                  i < trades.length - 1 ? 'border-b border-tb-border' : ''
                } hover:bg-gray-50/70 transition-colors`}
              >
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <span
                    className={`font-mono text-[10px] font-medium px-1.5 py-0.5 rounded-sm flex-shrink-0 mt-0.5 ${
                      trade.call === 'YES'
                        ? 'bg-green-50 text-green-700'
                        : 'bg-red-50 text-red-600'
                    }`}
                  >
                    {trade.call}
                  </span>
                  <span className="text-[13px] text-tb-dark leading-snug">
                    {trade.question}
                  </span>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0 max-md:pl-7">
                  <span className="font-mono text-[11px] text-gray-400">
                    {trade.spread.toFixed(0)}pt
                  </span>
                  <span
                    className={`font-mono text-[11px] font-medium ${
                      trade.roi24h > 0
                        ? 'text-green-600'
                        : trade.roi24h < 0
                          ? 'text-red-400'
                          : 'text-gray-400'
                    }`}
                  >
                    {trade.roi24h > 0 ? '+' : ''}
                    {trade.roi24h.toFixed(1)}%
                  </span>
                  <span className="font-mono text-[10px] text-gray-300 whitespace-nowrap">
                    {formatTimeAgo(trade.calledAt)}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3">
            <span className="font-mono text-[11px] text-gray-400">
              {trades.length} call{trades.length !== 1 ? 's' : ''} in last 14 days
            </span>
          </div>
        </>
      )}
    </section>
  )
}

/* ── How Q Works ── */
function HowQWorks() {
  const cells = [
    { title: '1,600+ sources', desc: 'Ranked by reliability and domain relevance' },
    { title: 'Multi-agent pipeline', desc: 'Decomposition, evidence weighing, synthesis' },
    { title: 'Human forecasters', desc: 'Verified track records, weighted by accuracy' },
    { title: 'Continuous learning', desc: 'Every resolution improves the model' },
  ]

  return (
    <section id="approach" className="px-8 lg:px-tb-section-x py-tb-section-y">
      <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-gray-500 mb-4">
        The Approach
      </span>
      <p className="text-[15px] text-gray-600 leading-[1.75] max-w-[640px] mb-10">
        Q runs a multi-agent research pipeline across 600+ geopolitical
        prediction markets. It decomposes complex questions, weighs evidence
        from 1,600+ ranked sources, and integrates input from verified human
        forecasters. Every call is published with sourced reasoning. Resolved
        outcomes feed back into the model — accuracy compounds over time.
      </p>
      <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 border border-tb-border overflow-hidden">
        {cells.map((cell, i) => (
          <div
            key={cell.title}
            className={`p-6 bg-white ${
              i < cells.length - 1 ? 'max-sm:border-b max-md:border-b md:border-r border-tb-border' : ''
            }`}
          >
            <div className="font-mono text-[12px] font-medium text-tb-dark mb-1.5">
              {cell.title}
            </div>
            <div className="text-[12px] text-gray-400 leading-relaxed">
              {cell.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── Who It's For ── */
function WhoItsFor() {
  const cards = [
    {
      eyebrow: 'Traders',
      headline: 'Get an edge.',
      desc: "Q's forecast, reasoning, and spread vs. market odds on every market.",
      cta: 'Subscribe',
      href: '#pricing',
    },
    {
      eyebrow: 'Platforms & Wallets',
      headline: 'More context, more volume.',
      desc: "Integrate Q's signal layer into your existing markets via API.",
      cta: 'Get in touch',
      href: 'mailto:hello@quotient.social',
    },
    {
      eyebrow: 'Developers & Agents',
      headline: 'Structured signal for pipelines.',
      desc: 'REST API with sourced evidence and confidence scores. x402 or Stripe.',
      cta: 'View docs',
      href: 'https://docs.quotient.social',
    },
  ]

  return (
    <section className="bg-tb-cream px-8 lg:px-tb-section-x py-tb-section-y">
      <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-gray-500 mb-8">
        Who It&apos;s For
      </span>
      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4">
        {cards.map((card) => (
          <div
            key={card.eyebrow}
            className="border border-tb-border bg-white p-7 flex flex-col"
          >
            <span className="block font-mono text-[10px] uppercase tracking-[0.08em] text-gray-400 mb-3">
              {card.eyebrow}
            </span>
            <h3 className="font-headline text-[18px] font-semibold text-tb-dark leading-[1.25] mb-2">
              {card.headline}
            </h3>
            <p className="text-[13px] text-gray-500 leading-relaxed mb-6">
              {card.desc}
            </p>
            <div className="mt-auto">
              <Link
                href={card.href}
                className="inline-block text-center text-[11px] uppercase px-5 py-2.5 bg-tb-dark text-white font-mono tracking-[0.08em] hover:opacity-90 transition-opacity"
              >
                {card.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── Pricing ── */
function Pricing() {
  return (
    <section id="pricing" className="px-8 lg:px-tb-section-x py-tb-section-y">
      <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-gray-500 mb-8">
        Pricing
      </span>
      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4">
        {/* Free */}
        <div className="border border-tb-border p-7 flex flex-col">
          <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-gray-400 mb-2">Free</div>
          <div className="font-headline text-[32px] font-semibold tracking-[-0.02em] leading-none text-tb-dark mb-1">$0</div>
          <div className="font-mono text-[11px] text-gray-300 mb-4">no credit card</div>
          <div className="flex flex-col gap-1.5 mb-6">
            {['2 live markets', 'Weekly digest', 'Mobile app'].map((f) => (
              <div key={f} className="text-[12px] text-gray-400">{f}</div>
            ))}
          </div>
          <div className="mt-auto">
            <button className="w-full text-center text-[11px] uppercase px-5 py-2.5 border border-tb-border font-mono tracking-[0.08em] text-gray-500 hover:border-tb-primary hover:text-tb-dark transition-colors">
              Get started free
            </button>
          </div>
        </div>

        {/* Full Access — featured */}
        <div className="border border-tb-border border-l-4 border-l-tb-primary p-7 flex flex-col">
          <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-tb-primary mb-2">Full Access</div>
          <div className="font-headline text-[32px] font-semibold tracking-[-0.02em] leading-none text-tb-dark mb-1">$[X]</div>
          <div className="font-mono text-[11px] text-gray-300 mb-4">/month</div>
          <div className="flex flex-col gap-1.5 mb-6">
            {[
              'All 600+ markets',
              'Key factors',
              'Sourced evidence',
              'Alerts',
            ].map((f) => (
              <div key={f} className="text-[12px] text-gray-400">{f}</div>
            ))}
          </div>
          <div className="mt-auto">
            <button className="w-full text-center text-[11px] uppercase px-5 py-2.5 bg-tb-primary text-white font-mono tracking-[0.08em] hover:bg-tb-cta-hover transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Platform / API */}
        <div className="border border-tb-border p-7 flex flex-col">
          <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-gray-400 mb-2">Platform / API</div>
          <div className="font-headline text-[32px] font-semibold tracking-[-0.02em] leading-none text-tb-dark mb-1">Custom</div>
          <div className="font-mono text-[11px] text-gray-300 mb-4">volume-based</div>
          <div className="flex flex-col gap-1.5 mb-6">
            {[
              'Full API access',
              'Volume pricing',
              'Contact us',
            ].map((f) => (
              <div key={f} className="text-[12px] text-gray-400">{f}</div>
            ))}
          </div>
          <div className="mt-auto">
            <a
              href="mailto:hello@quotient.social"
              className="block w-full text-center text-[11px] uppercase px-5 py-2.5 border border-tb-border font-mono tracking-[0.08em] text-gray-500 hover:border-tb-primary hover:text-tb-dark transition-colors"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Main Page ── */
export default function QAgentPage() {
  return (
    <div className="min-h-screen bg-tb-page">
      <NavWithModal />
      <main className="pt-[44px]">
        {/* ── Q Hero ── */}
        <section className="px-8 lg:px-tb-section-x pt-16 pb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-tb-dark flex items-center justify-center">
              <span className="font-mono text-white text-[14px] font-medium">Q</span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-gray-400">
              Prediction Agent · Geopolitics
            </span>
          </div>

          <h1 className="font-headline font-bold text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] tracking-[-0.02em] text-tb-dark mb-5">
            Q finds mispriced geopolitical markets.
          </h1>
          <p className="text-[16px] text-gray-500 leading-relaxed max-w-[580px] mb-6">
            Agentic analysis combined with verified human judgment across 600+
            geopolitical prediction markets. Sourced evidence. Auditable
            reasoning. Updated 7-8 times a day.
          </p>

          <QHeroStats />

          <div className="flex flex-wrap gap-3">
            <Link
              href="#pricing"
              className="inline-flex items-center px-6 py-3 bg-tb-primary text-white font-mono text-[13px] uppercase tracking-[0.08em] hover:bg-tb-cta-hover transition-colors"
            >
              Get Access
            </Link>
            <Link
              href="#approach"
              className="inline-flex items-center px-6 py-3 border border-tb-border text-tb-dark font-mono text-[13px] uppercase tracking-[0.08em] hover:border-gray-400 transition-colors"
            >
              How It Works &darr;
            </Link>
          </div>
        </section>

        {/* ── Recent Calls ── */}
        <RecentCallsSection />

        {/* ── Q Called It ── */}
        <QCalledIt />

        {/* ── How Q Works ── */}
        <HowQWorks />

        {/* ── Who It's For ── */}
        <WhoItsFor />

        {/* ── Pricing ── */}
        <Pricing />

        {/* ── Footer ── */}
        <Footer />
      </main>
    </div>
  )
}

/* ── Helpers ── */
function formatTimeAgo(dateStr: string): string {
  if (!dateStr) return ''
  try {
    const date = new Date(dateStr)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60))
    if (diffHrs < 1) return 'just now'
    if (diffHrs < 24) return `${diffHrs}h ago`
    const diffDays = Math.floor(diffHrs / 24)
    return `${diffDays}d ago`
  } catch {
    return ''
  }
}
