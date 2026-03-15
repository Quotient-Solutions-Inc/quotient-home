'use client'

import Link from 'next/link'
import FingerprintFull from '@/components/decorative/FingerprintFull'
import RecentTrades from '@/components/RecentTrades'
import { useQStats } from '@/lib/useQData'

function StatsLine() {
  const { stats, loading } = useQStats()

  if (loading || !stats) {
    return (
      <p className="font-mono text-[12px] uppercase tracking-[0.06em] text-white/60">
        Loading stats...
      </p>
    )
  }

  const winPct = Math.round(stats.winRate * 100)
  const winLossRatio =
    stats.avgLoss !== 0
      ? Math.abs(stats.avgWin / stats.avgLoss).toFixed(1)
      : '—'

  return (
    <p className="font-mono text-[12px] uppercase tracking-[0.06em] text-white/60">
      {winPct}% Win Rate &middot; {winLossRatio}x Win-to-Loss Ratio
    </p>
  )
}

export default function MarketplaceHero() {
  return (
    <section className="relative overflow-hidden bg-tb-primary rounded-tb-card min-h-[640px] lg:min-h-[720px]">
      <FingerprintFull className="absolute right-[-60px] top-[-40px] text-white/[0.07] z-[1]" />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] h-full min-h-[640px] lg:min-h-[720px]">
        {/* Left: Hero content */}
        <div className="flex flex-col justify-between px-8 lg:px-12 py-12 lg:py-16 relative z-10">
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="font-headline font-bold uppercase tracking-[-0.01em] text-[32px] md:text-[56px] lg:text-[72px] text-white leading-[0.95] mb-4">
              <span className="block">Q trades</span>
              <span className="block">prediction</span>
              <span className="block">markets.</span>
              <span className="block text-tb-dark mt-2 italic">You collect</span>
              <span className="block text-tb-dark italic">the returns.</span>
            </h1>
            <p className="font-headline italic text-white/90 text-[16px] lg:text-[18px] leading-[150%] max-w-[520px] mb-3">
              It finds where the odds are wrong and trades on the gap.
            </p>
            <StatsLine />
          </div>
          <div className="mt-8">
            <Link
              href="/agents/q"
              className="inline-flex justify-center items-center px-8 h-[50px] bg-tb-cream text-tb-dark font-mono text-[14px] uppercase tracking-[0.08em] rounded-tb-card hover:bg-white transition-colors"
            >
              Get Access
            </Link>
          </div>
        </div>

        {/* Right: Recent trades feed */}
        <div className="bg-tb-dark/40 backdrop-blur-sm border-l border-white/10 max-lg:border-t max-lg:border-l-0 rounded-r-tb-card max-lg:rounded-r-none max-lg:rounded-b-tb-card">
          <RecentTrades variant="hero" />
        </div>
      </div>
    </section>
  )
}
