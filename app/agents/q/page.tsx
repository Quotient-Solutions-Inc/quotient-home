'use client'

import NavWithModal from '@/components/NavWithModal'
import QTabBar from '@/components/QTabBar'
import SignalFeed from '@/components/SignalFeed'
import ForYou from '@/components/ForYou'
import Contributors from '@/components/Contributors'
import Footer from '@/components/Footer'
import OpenModalButton from '@/components/OpenModalButton'
import RecentTrades from '@/components/RecentTrades'
import { useQStats } from '@/lib/useQData'

function QHeroStats() {
  const { stats, loading } = useQStats()

  if (loading || !stats) {
    return (
      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-px overflow-hidden bg-tb-border rounded-tb-card mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white p-7">
            <div className="font-mono text-[36px] font-semibold leading-none mb-1 text-tb-dark animate-pulse">—</div>
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

  return (
    <div className="grid grid-cols-3 max-md:grid-cols-1 gap-px overflow-hidden bg-tb-border rounded-tb-card mb-8">
      {[
        { value: winPct, label: 'Win Rate' },
        { value: winLossRatio, label: 'Win/Loss Ratio' },
        { value: `${stats.totalTrades}`, label: 'Active Trades' },
      ].map((stat) => (
        <div key={stat.label} className="bg-white p-7">
          <div className="font-mono text-[36px] font-semibold leading-none mb-1 text-tb-dark">
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

export default function QAgentPage() {
  return (
    <div className="min-h-screen">
      <NavWithModal />
      <QTabBar />

      {/* Q Hero with trades sidebar */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px]">
          {/* Left: Hero content */}
          <div className="pt-16 pb-20 max-md:pt-12 px-8 lg:px-tb-section-x">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 flex items-center justify-center font-blackletter text-3xl text-tb-dark">
                  <span>Q</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-[0.08em] text-gray-400">
                    Prediction Agent
                  </span>
                </div>
              </div>

              <h1 className="font-headline font-bold text-[clamp(3rem,7vw,6rem)] leading-[0.85] uppercase text-tb-dark tracking-[-0.03em] mb-6">
                Q<br />
                <span className="text-tb-primary">Geopolitical</span><br />
                Forecasting
              </h1>
              <p className="font-headline text-[16px] text-gray-500 leading-relaxed max-w-[540px] mb-9">
                Agentic analysis combined with verified human judgment across 600+
                geopolitical prediction markets. Sourced evidence. Auditable reasoning. Updated
                7-8 times a day.
              </p>

              <QHeroStats />

              <div className="flex flex-wrap gap-3">
                <OpenModalButton />
              </div>
            </div>
          </div>

          {/* Right: Recent trades feed */}
          <div className="bg-tb-dark border-l border-tb-border max-lg:border-t max-lg:border-l-0">
            <RecentTrades variant="hero" />
          </div>
        </div>
      </section>

      <SignalFeed />
      <ForYou />
      <Contributors />
      <Footer />
    </div>
  )
}
