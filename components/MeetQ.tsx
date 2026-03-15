'use client'

import Link from 'next/link'
import { useQStats } from '@/lib/useQData'

function MeetQStats() {
  const { stats, loading } = useQStats()

  const items = loading || !stats
    ? [
        { value: '—', label: 'Win Rate' },
        { value: '—', label: 'Win/Loss Ratio' },
        { value: '600+', label: 'Active Markets' },
      ]
    : [
        { value: `${Math.round(stats.winRate * 100)}%`, label: 'Win Rate' },
        {
          value: stats.avgLoss !== 0
            ? `${Math.abs(stats.avgWin / stats.avgLoss).toFixed(1)}×`
            : '—',
          label: 'Win/Loss Ratio',
        },
        { value: '600+', label: 'Active Markets' },
      ]

  return (
    <div className="grid grid-cols-3 max-md:grid-cols-1 gap-px overflow-hidden mb-8 bg-white/10 rounded-tb-card">
      {items.map((stat) => (
        <div key={stat.label} className="bg-tb-dark p-7">
          <div className="font-mono text-[36px] font-semibold leading-none mb-1 text-tb-cream">
            {stat.value}
          </div>
          <div className="font-mono text-[10px] uppercase tracking-wide text-tb-cream/50">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function MeetQ() {
  return (
    <section id="meet-q" className="bg-tb-dark rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y">
      <div className="p-10 max-md:p-7 mb-10">
        <span className="block text-[11px] uppercase mb-4 font-mono tracking-[0.08em] text-tb-primary">
          Featured agent
        </span>
        <h2 className="font-headline font-bold uppercase text-tb-cream text-[36px] lg:text-[68px] leading-[0.9] tracking-[-0.01em] mb-3">
          Q forecasts geopolitics.
        </h2>
        <p className="text-[15px] leading-relaxed max-w-[520px] mb-8 text-tb-cream/70">
          Agentic research combined with verified human judgment across 600+
          geopolitical prediction markets. Updated 7-8 times a day.
        </p>

        <MeetQStats />

        <div className="font-mono text-[10px] uppercase mb-5 tracking-[0.08em] text-tb-cream/50">
          What you can do with Q
        </div>
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-5 mb-8">
          {[
            { title: 'Trade with conviction.', desc: "Full signal dashboard with Q's reasoning on every market.", link: '/agents/q/signal', cta: 'Get started' },
            { title: 'Add intelligence to your platform.', desc: "Integrate Q's signal layer into your markets via API.", link: '/agents/q/platforms', cta: 'Learn more' },
            { title: "Build on Q's data.", desc: 'Structured endpoints for autonomous agents and developer pipelines.', link: '/agents/q/api', cta: 'Start building' },
          ].map((card) => (
            <div key={card.title} className="border border-white/10 rounded-tb-card p-6">
              <h3 className="text-[15px] font-semibold mb-2 text-tb-cream">{card.title}</h3>
              <p className="text-[13px] leading-relaxed mb-3 text-tb-cream/60">
                {card.desc}
              </p>
              <Link href={card.link} className="font-mono text-[11px] transition-colors text-tb-cream/50 hover:text-tb-primary">
                {card.cta} &rarr;
              </Link>
            </div>
          ))}
        </div>

        <Link
          href="/agents/q"
          className="inline-block text-[13px] font-mono uppercase tracking-wide px-7 py-3 transition-colors bg-tb-primary text-white rounded-tb-card hover:bg-tb-cta-hover"
        >
          Go to Q&apos;s full profile &rarr;
        </Link>
      </div>
    </section>
  )
}
