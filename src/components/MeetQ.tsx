'use client'

import Link from 'next/link'
import { useTheme } from '@/lib/ThemeContext'

export default function MeetQ() {
  const { theme } = useTheme()
  const isB = theme === 'B'

  if (isB) return <MeetQB />
  return <MeetQA />
}

/* ── Theme B ─────────────────────────────────── */
function MeetQB() {
  return (
    <section id="meet-q" className="bg-tb-dark rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y">
      {/* Top zone: identity + stats */}
      <div className="mb-10">
        <span className="block font-mono text-tb-primary text-[11px] uppercase tracking-[0.08em] mb-4">
          Featured agent
        </span>
        <h2 className="font-headline font-bold uppercase text-tb-cream text-[32px] lg:text-[48px] leading-[0.95] tracking-[-0.01em] mb-4">
          Q forecasts geopolitics
        </h2>
        <p className="text-[15px] leading-relaxed max-w-[520px] text-tb-cream/70 mb-10">
          Agentic research combined with verified human judgment across 600+
          geopolitical prediction markets. Updated 7–8 times a day.
        </p>

        {/* Stats row — prominent, clean */}
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-[8px]">
          {[
            { value: '~70%', label: 'Accuracy' },
            { value: <>3&times;</>, label: 'Win / Loss ratio' },
            { value: '600+', label: 'Active markets' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/[0.06] rounded-[10px] p-7">
              <div className="font-mono text-[32px] font-bold leading-none mb-2 text-tb-cream">
                {stat.value}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-tb-cream/40">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom zone: actions */}
      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-[8px]">
        {[
          { title: 'Trade with conviction', desc: "Full signal dashboard with Q's reasoning on every market.", link: '/agents/q/signal', cta: 'Get started' },
          { title: 'Add intelligence to your platform', desc: "Integrate Q's signal layer into your markets via API.", link: '/agents/q/platforms', cta: 'Learn more' },
          { title: "Build on Q's data", desc: 'Structured endpoints for autonomous agents and developer pipelines.', link: '/agents/q/api', cta: 'Start building' },
        ].map((card) => (
          <div key={card.title} className="bg-white/[0.06] rounded-[10px] p-7 flex flex-col">
            <h3 className="text-[15px] font-semibold text-tb-cream mb-2">{card.title}</h3>
            <p className="text-[13px] leading-relaxed text-tb-cream/50 mb-4 flex-1">
              {card.desc}
            </p>
            <Link href={card.link} className="font-mono text-[11px] text-tb-primary hover:text-tb-cta-hover transition-colors">
              {card.cta} &rarr;
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link
          href="/agents/q"
          className="inline-block text-[13px] font-mono uppercase tracking-[0.08em] px-7 py-3 bg-tb-primary text-white rounded-tb-card hover:bg-tb-cta-hover transition-colors"
        >
          Go to Q&apos;s full profile &rarr;
        </Link>
      </div>
    </section>
  )
}

/* ── Theme A ─────────────────────────────────── */
function MeetQA() {
  return (
    <section id="meet-q" className="py-20 px-10 max-md:px-6">
      <div className="max-w-content mx-auto">
        <div className="bg-[#F8F8F6] border border-border-thin rounded-sm p-10 max-md:p-7 mb-10">
          <span className="block font-mono text-[11px] uppercase tracking-eyebrow text-brand-blue mb-4">
            Featured agent
          </span>
          <h2 className="text-[30px] font-headline font-normal tracking-[-0.02em] text-brand-black mb-3 leading-[1.2]">
            Q forecasts geopolitics
          </h2>
          <p className="text-[15px] leading-relaxed max-w-[520px] mb-8 text-gray-500">
            Agentic research combined with verified human judgment across 600+
            geopolitical prediction markets. Updated 7–8 times a day.
          </p>

          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-px overflow-hidden mb-8 bg-border-thin rounded-sm">
            {[
              { value: '~70%', label: 'Accuracy' },
              { value: <>3&times;</>, label: 'Win/loss ratio' },
              { value: '600+', label: 'Active markets' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white p-7">
                <div className="font-mono text-[28px] font-semibold leading-none mb-1 text-brand-black">
                  {stat.value}
                </div>
                <div className="font-mono text-[11px] uppercase tracking-eyebrow text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="font-mono text-[11px] uppercase tracking-eyebrow text-gray-400 mb-5">
            What you can do with Q
          </div>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-5 mb-8">
            {[
              { title: 'Trade with conviction.', desc: "Full signal dashboard with Q's reasoning on every market.", link: '/agents/q/signal', cta: 'Get started' },
              { title: 'Add intelligence to your platform.', desc: "Integrate Q's signal layer into your markets via API.", link: '/agents/q/platforms', cta: 'Learn more' },
              { title: "Build on Q's data.", desc: 'Structured endpoints for autonomous agents and developer pipelines.', link: '/agents/q/api', cta: 'Start building' },
            ].map((card) => (
              <div key={card.title} className="border border-border-thin rounded-sm p-6 bg-white">
                <h3 className="text-[15px] font-semibold mb-2 text-brand-black">{card.title}</h3>
                <p className="text-[13px] leading-relaxed mb-3 text-gray-500">
                  {card.desc}
                </p>
                <Link href={card.link} className="font-mono text-[11px] text-gray-400 hover:text-brand-black transition-colors">
                  {card.cta} &rarr;
                </Link>
              </div>
            ))}
          </div>

          <Link
            href="/agents/q"
            className="inline-block text-[13px] font-mono uppercase tracking-wide px-7 py-3 bg-brand-black text-white hover:bg-gray-800 transition-colors"
          >
            Go to Q&apos;s full profile &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
