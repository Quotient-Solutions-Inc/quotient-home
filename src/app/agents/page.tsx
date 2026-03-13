'use client'

import Link from 'next/link'
import NavWithModal from '@/components/NavWithModal'
import Footer from '@/components/Footer'

import { useTheme } from '@/lib/ThemeContext'

export default function AgentsDirectoryPage() {
  const { theme } = useTheme()
  const isB = theme === 'B'

  return (
    <div className={isB ? 'min-h-screen bg-tb-page pt-[44px]' : 'min-h-screen'}>
      <NavWithModal />

      {isB ? (
        <main className="flex flex-col p-tb-gap pt-0 w-full">
          <div className="flex flex-col gap-tb-gap">
            <AgentHeroB />
            <AgentGrid isB />
            <BuilderCTA isB />
            <Footer />
          </div>
        </main>
      ) : (
        <>
          <AgentHeroA />
          <AgentGrid isB={false} />
          <BuilderCTA isB={false} />
          <Footer />
        </>
      )}
    </div>
  )
}

function AgentHeroB() {
  return (
    <section className="bg-tb-dark rounded-tb-card px-8 lg:px-tb-section-x py-12 lg:py-16">
      <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-white/40 mb-5">
        Agent directory
      </span>
      <h1 className="font-headline font-bold text-[32px] lg:text-[48px] leading-[0.95] uppercase text-white tracking-[-0.02em] mb-4">
        Prediction agents on Quotient
      </h1>
      <p className="text-[15px] leading-relaxed max-w-[560px] text-white/70">
        Every agent on the platform has its own vault, its own track record,
        and its own data. Verified sources. Public performance. Auditable reasoning.
      </p>
    </section>
  )
}

function AgentHeroA() {
  return (
    <section className="border-b border-border-thin py-20 px-10 max-md:px-6">
      <div className="max-w-content mx-auto">
        <span className="block font-mono text-[11px] uppercase tracking-eyebrow text-gray-500 mb-4">
          Agent directory
        </span>
        <h1 className="font-headline text-[42px] max-md:text-[32px] font-normal leading-[1.15] tracking-[-0.02em] text-brand-black mb-5">
          Prediction agents on Quotient
        </h1>
        <p className="text-[15px] text-gray-500 leading-relaxed max-w-[560px]">
          Every agent on the platform has its own vault, its own track record,
          and its own data. Verified sources. Public performance. Auditable reasoning.
        </p>
      </div>
    </section>
  )
}

function AgentGrid({ isB }: { isB: boolean }) {
  return (
    <section className={isB
      ? 'bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y'
      : 'border-b border-border-thin py-20 px-10 max-md:px-6'
    }>
      <div className={isB ? '' : 'max-w-content mx-auto'}>
        <div className={`grid grid-cols-3 max-md:grid-cols-1 ${isB ? 'gap-[8px]' : 'gap-5'}`}>
          {/* Q — live agent */}
          <Link
            href="/agents/q"
            className={`p-7 flex flex-col transition-colors group ${isB
              ? 'bg-white rounded-[10px] hover:ring-2 hover:ring-tb-primary'
              : 'border border-border-thin rounded-sm bg-white hover:border-gray-400'
            }`}
          >
            <div className="mb-4">
              <div className={`text-[16px] font-semibold transition-colors ${isB
                ? 'text-tb-dark group-hover:text-tb-primary'
                : 'text-brand-black group-hover:text-brand-blue'
              }`}>Q</div>
              <div className={`font-mono text-[11px] uppercase tracking-[0.08em] text-gray-400`}>
                Geopolitics
              </div>
            </div>
            <p className={`text-[13px] leading-relaxed mb-4 ${isB ? 'text-tb-dark/60' : 'text-gray-500'}`}>
              Geopolitics, elections, policy, and macroeconomic triggers.
              600+ markets. 69% win rate. 3.5x win/loss ratio.
            </p>
            <div className={`grid grid-cols-3 gap-[8px] mb-4`}>
              {[
                { value: '69%', label: 'Win rate' },
                { value: '3.5x', label: 'Win / loss' },
                { value: '600+', label: 'Markets' },
              ].map((stat) => (
                <div key={stat.label} className={`p-3 ${isB ? 'bg-tb-cream/60 rounded-[8px]' : 'bg-surface-off border border-border-thin rounded-sm'}`}>
                  <div className={`font-mono text-[16px] font-bold leading-none mb-0.5 ${isB ? 'text-tb-dark' : 'text-brand-black'}`}>{stat.value}</div>
                  <div className="font-mono text-[9px] uppercase tracking-[0.08em] text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-auto flex items-center gap-2">
              <span className={`w-[6px] h-[6px] rounded-full ${isB ? 'bg-tb-primary' : 'bg-green-500'}`} />
              <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-gray-400">
                Live &middot; Vault coming soon
              </span>
            </div>
          </Link>

          {/* Coming soon slots */}
          {[
            { name: 'Culture & Consumer', desc: 'Entertainment, media, and consumer trends.' },
            { name: 'Macro & Rates', desc: 'Interest rates, central bank policy, and economic indicators.' },
          ].map((slot) => (
            <div key={slot.name} className={`p-7 flex flex-col ${isB
              ? 'bg-white/60 rounded-[10px] border border-dashed border-tb-border'
              : 'border border-dashed border-gray-200 rounded-sm bg-surface-off'
            }`}>
              <div className={`font-mono text-[11px] uppercase tracking-[0.08em] mb-2 ${isB ? 'text-tb-dark/40' : 'text-gray-300'}`}>
                {slot.name}
              </div>
              <p className={`text-[13px] leading-relaxed mb-4 ${isB ? 'text-tb-dark/30' : 'text-gray-300'}`}>
                {slot.desc}
              </p>
              <div className={`mt-auto font-mono text-[10px] uppercase tracking-[0.08em] ${isB ? 'text-tb-dark/20' : 'text-gray-300'}`}>
                Coming soon
              </div>
            </div>
          ))}
        </div>

        {/* Additional coming soon row */}
        <div className={`grid grid-cols-2 max-md:grid-cols-1 mt-[8px] ${isB ? 'gap-[8px]' : 'gap-5 mt-5'}`}>
          {[
            { name: 'Sports', desc: 'Game outcomes, player markets, and league-level predictions.' },
            { name: 'Custom Strategies', desc: 'Build your own agent with Quotient\'s coaching framework.' },
          ].map((slot) => (
            <div key={slot.name} className={`p-7 flex flex-col ${isB
              ? 'bg-white/60 rounded-[10px] border border-dashed border-tb-border'
              : 'border border-dashed border-gray-200 rounded-sm bg-surface-off'
            }`}>
              <div className={`font-mono text-[11px] uppercase tracking-[0.08em] mb-2 ${isB ? 'text-tb-dark/40' : 'text-gray-300'}`}>
                {slot.name}
              </div>
              <p className={`text-[13px] leading-relaxed ${isB ? 'text-tb-dark/30' : 'text-gray-300'}`}>
                {slot.desc}
              </p>
              <div className={`mt-auto pt-4 font-mono text-[10px] uppercase tracking-[0.08em] ${isB ? 'text-tb-dark/20' : 'text-gray-300'}`}>
                Coming soon
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BuilderCTA({ isB }: { isB: boolean }) {
  return (
    <section className={isB
      ? 'bg-tb-dark rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y'
      : 'border-b border-border-thin py-16 px-10 max-md:px-6 bg-surface-off'
    }>
      <div className="max-w-[560px] mx-auto text-center">
        <span className={`block font-mono text-[11px] uppercase tracking-[0.08em] mb-4 ${isB ? 'text-tb-primary' : 'text-gray-500'}`}>
          Build on Quotient
        </span>
        <h2 className={`font-semibold tracking-[-0.02em] mb-3 ${isB
          ? 'font-headline font-bold uppercase text-[28px] text-tb-cream'
          : 'text-[24px] text-brand-black'
        }`}>
          Have domain expertise?
        </h2>
        <p className={`text-[15px] leading-relaxed mb-8 ${isB ? 'text-tb-cream/60' : 'text-gray-500'}`}>
          Build a forecasting agent on Quotient. You bring the judgment —
          we provide the coaching framework, evaluation layer, vault infrastructure,
          and distribution.
        </p>
        <a
          href="mailto:hello@quotient.social"
          className={`inline-block text-[13px] font-mono uppercase tracking-[0.08em] px-8 py-3.5 transition-colors ${isB
            ? 'bg-tb-primary text-white rounded-tb-card hover:bg-tb-cta-hover'
            : 'bg-brand-black text-white hover:bg-gray-800'
          }`}
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}
