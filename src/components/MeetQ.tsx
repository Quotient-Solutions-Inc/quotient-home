'use client'

import Link from 'next/link'
import { useTheme } from '@/lib/ThemeContext'

export default function MeetQ() {
  const { theme } = useTheme()
  const isB = theme === 'B'

  return (
    <section id="meet-q" className={isB
      ? 'bg-tb-dark rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y'
      : 'py-20 px-10 max-md:px-6'
    }>
      <div className={isB ? '' : 'max-w-content mx-auto'}>
        <div className={isB
          ? 'p-10 max-md:p-7 mb-10'
          : 'bg-[#F8F8F6] border border-border-thin rounded-sm p-10 max-md:p-7 mb-10'
        }>
          <span className={`block text-[11px] uppercase mb-4 ${isB
            ? 'font-mono tracking-[0.08em] text-tb-primary'
            : 'font-mono tracking-eyebrow text-brand-blue'
          }`}>
            Featured agent
          </span>
          <h2 className={isB
            ? 'font-headline font-bold uppercase text-tb-cream text-[36px] lg:text-[68px] leading-[0.9] tracking-[-0.01em] mb-3'
            : 'text-[30px] font-headline font-normal tracking-[-0.02em] text-brand-black mb-3 leading-[1.2]'
          }>
            Q forecasts geopolitics.
          </h2>
          <p className={`text-[15px] leading-relaxed max-w-[520px] mb-8 ${isB ? 'text-tb-cream/70' : 'text-gray-500'}`}>
            Agentic research combined with verified human judgment across 600+
            geopolitical prediction markets. Updated 7-8 times a day.
          </p>

          <div className={`grid grid-cols-3 max-md:grid-cols-1 gap-px overflow-hidden mb-8 ${isB
            ? 'bg-white/10 rounded-tb-card'
            : 'bg-border-thin rounded-sm'
          }`}>
            {[
              { value: '~70%', label: 'Accuracy' },
              { value: <>3&times;</>, label: 'Win/loss ratio' },
              { value: '600+', label: 'Active markets' },
            ].map((stat) => (
              <div key={stat.label} className={isB ? 'bg-tb-dark p-7' : 'bg-white p-7'}>
                <div className={`font-mono text-[36px] font-semibold leading-none mb-1 ${isB ? 'text-tb-cream' : 'text-brand-black'}`}>
                  {stat.value}
                </div>
                <div className={`font-mono text-[10px] uppercase tracking-wide ${isB ? 'text-tb-cream/50' : 'text-gray-400'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className={`font-mono text-[10px] uppercase mb-5 ${isB
            ? 'tracking-[0.08em] text-tb-cream/50'
            : 'tracking-eyebrow text-gray-400'
          }`}>
            What you can do with Q
          </div>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-5 mb-8">
            {[
              { title: 'Trade with conviction.', desc: "Full signal dashboard with Q's reasoning on every market.", link: '/agents/q/signal', cta: 'Get started' },
              { title: 'Add intelligence to your platform.', desc: "Integrate Q's signal layer into your markets via API.", link: '/agents/q/platforms', cta: 'Learn more' },
              { title: "Build on Q's data.", desc: 'Structured endpoints for autonomous agents and developer pipelines.', link: '/agents/q/api', cta: 'Start building' },
            ].map((card) => (
              <div key={card.title} className={isB
                ? 'border border-white/10 rounded-tb-card p-6'
                : 'border border-border-thin rounded-sm p-6 bg-white'
              }>
                <h3 className={`text-[15px] font-semibold mb-2 ${isB ? 'text-tb-cream' : 'text-brand-black'}`}>{card.title}</h3>
                <p className={`text-[13px] leading-relaxed mb-3 ${isB ? 'text-tb-cream/60' : 'text-gray-500'}`}>
                  {card.desc}
                </p>
                <Link href={card.link} className={`font-mono text-[11px] transition-colors ${isB
                  ? 'text-tb-cream/50 hover:text-tb-primary'
                  : 'text-gray-400 hover:text-brand-black'
                }`}>
                  {card.cta} &rarr;
                </Link>
              </div>
            ))}
          </div>

          <Link
            href="/agents/q"
            className={`inline-block text-[13px] font-mono uppercase tracking-wide px-7 py-3 transition-colors ${isB
              ? 'bg-tb-primary text-white rounded-tb-card hover:bg-tb-cta-hover'
              : 'bg-brand-black text-white hover:bg-gray-800'
            }`}
          >
            Go to Q&apos;s full profile &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
