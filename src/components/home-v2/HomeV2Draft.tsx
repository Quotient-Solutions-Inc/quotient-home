'use client'

import { APP_HREF } from '@/lib/links'

const MARKETS = [
  {
    tag: 'Polymarket · Geopolitics',
    title: 'US x Iran ceasefire by May 31?',
    qSays: '14%',
    market: '60%',
    spread: '46 pts',
  },
  {
    tag: 'Polymarket · Geopolitics',
    title: 'Diaz-Canel out as President of Cuba by June 30?',
    qSays: '9%',
    market: '44%',
    spread: '35 pts',
  },
  {
    tag: 'Polymarket · Culture',
    title: 'Will the US confirm aliens exist before 2027?',
    qSays: '7%',
    market: '16%',
    spread: '9 pts',
  },
]

const CARD_DELAYS = ['0.2s', '0.45s', '0.7s']

function MarketCard({
  tag,
  title,
  qSays,
  market,
  spread,
  delay,
}: (typeof MARKETS)[number] & { delay: string }) {
  return (
    <div
      className="flex-1 min-w-0 mx-1 opacity-0"
      style={{
        animation: `hv2-slideUp 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay} forwards`,
      }}
    >
    <div
      className="group/card h-full bg-white/[0.04] border border-white/[0.12] hover:border-white/[0.22] rounded-[10px] flex flex-col overflow-hidden hover:-translate-y-[2px] transition-all duration-[250ms] ease-in-out"
    >
      <div className="flex-1 px-3 pt-3 pb-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <span className="font-mono text-[8px] lg:text-[9px] font-medium tracking-[0.1em] uppercase bg-white/[0.07] text-white/40 px-2 py-[3px] rounded-full truncate">
            {tag}
          </span>
        </div>
        <div className="text-[14px] lg:text-[15px] font-medium text-white/85 leading-[1.4] min-h-[42px] mt-1.5 mb-1">
          {title}
        </div>
        <div className="flex items-center justify-center gap-6 mt-0 mb-0">
          <div className="flex flex-col gap-[3px] items-center">
            <div className="font-mono text-[8px] lg:text-[9px] font-medium tracking-[0.1em] uppercase text-white/[0.28]">
              Q says
            </div>
            <div className="text-[clamp(16px,2vw,24px)] font-medium tabular-nums leading-none whitespace-nowrap text-tb-primary">
              {qSays}
            </div>
          </div>
          <div className="flex flex-col items-center gap-[3px]">
            <span className="font-mono text-[8px] lg:text-[9px] font-light tracking-[0.08em] text-white/[0.30] whitespace-nowrap">
              {spread}
            </span>
            <span className="text-[8px] text-white/[0.12]">vs</span>
          </div>
          <div className="flex flex-col gap-[3px] items-center">
            <div className="font-mono text-[8px] lg:text-[9px] font-medium tracking-[0.1em] uppercase text-white/[0.28]">
              Market
            </div>
            <div className="text-[clamp(16px,2vw,24px)] font-medium tabular-nums leading-none whitespace-nowrap text-white/45">
              {market}
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-2.5 pb-3 flex justify-center border-t border-white/[0.06]">
        <button className="bg-transparent text-white/40 font-mono text-[10px] uppercase tracking-[0.15em] px-7 py-2 rounded-md border border-white/[0.18] cursor-pointer group-hover/card:bg-[#e65c38] group-hover/card:border-[#e65c38] group-hover/card:text-white transition-all duration-[250ms] ease-in-out">
          Trade
        </button>
      </div>
    </div>
    </div>
  )
}

export default function HomeV2Content() {
  return (
    <div className="bg-tb-dark flex-1 rounded-[22px] flex flex-col relative overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
      {/* Background effects */}
      <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[50%] h-[40%] bg-tb-primary/[0.08] rounded-full blur-[140px] pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Hero — top 55% */}
      <div className="flex-[0_0_55%] flex flex-col items-center justify-center px-6 pt-8 text-center relative z-20">
        <div
          className="font-mono text-[10px] uppercase tracking-[0.25em] font-medium text-tb-primary mb-5 flex items-center gap-3.5 opacity-0"
          style={{ animation: 'hv2-fadeUp 0.6s ease-out forwards' }}
        >
          <span className="w-[30px] h-px bg-tb-primary/40" />
          AI Superforecasting for Prediction Markets
          <span className="w-[30px] h-px bg-tb-primary/40" />
        </div>

        <h1
          className="font-headline text-[clamp(52px,7.5vw,96px)] leading-[0.95] text-surface-light tracking-[-0.03em] mb-4 opacity-0"
          style={{ animation: 'hv2-fadeUp 0.6s ease-out 0.1s forwards' }}
        >
          Spot mispriced markets.
          <br />
          <span className="text-white/45">Trade with an edge.</span>
        </h1>

        <a
          href={APP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 border border-white/20 text-surface-light bg-white/5 font-mono text-[13px] uppercase tracking-[0.08em] px-7 py-3 rounded-tb-card cursor-pointer hover:border-white/50 hover:bg-white/10 transition-all opacity-0 group"
          style={{ animation: 'hv2-fadeUp 0.6s ease-out 0.2s forwards' }}
        >
          Explore the app
          <span className="transition-transform group-hover:translate-x-[3px]">→</span>
        </a>
      </div>

      {/* Floating panel — bottom 45% */}
      <div className="flex-[0_0_45%] w-full flex items-end justify-center px-4 lg:px-12 relative z-10">
        <div className="w-full max-w-[960px] min-w-0 h-[95%] bg-[rgba(28,26,23,0.85)] backdrop-blur-xl border border-white/10 border-b-0 rounded-t-[10px] shadow-[0_-20px_60px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden">
          {/* Panel topbar */}
          <div className="h-11 border-b border-white/[0.07] flex items-center justify-between px-6 flex-shrink-0 bg-white/[0.02]">
            <div className="flex items-center gap-2 font-mono text-[9px] font-medium tracking-[0.12em] uppercase text-[#4ade80]">
              ↑ Mispriced opportunities
            </div>
            <div className="flex items-center gap-[7px] font-mono text-[9px] font-medium tracking-[0.12em] uppercase text-white/40">
              <div
                className="w-1.5 h-1.5 rounded-full bg-[#4ade80] shadow-[0_0_6px_rgba(74,222,128,0.6)]"
                style={{ animation: 'hv2-pulse 2s infinite' }}
              />
              Live
            </div>
          </div>

          {/* Cards row */}
          <div className="flex-1 flex items-stretch gap-0 px-2 lg:px-4 pt-3 pb-2 min-w-0 overflow-hidden">
            {MARKETS.map((m, i) => (
              <MarketCard key={i} {...m} delay={CARD_DELAYS[i]} />
            ))}
          </div>

          {/* Disclaimer */}
          <div className="px-6 pt-2 pb-3 text-center border-t border-white/[0.05]">
            <p className="text-[9px] text-white/[0.15] leading-[1.7] tracking-[0.01em]">
              Q provides forecasts, not trading advice. Insights like this surface every day. You decide how to use this information. Always do your own research.{' '}
              <a href={APP_HREF} className="text-tb-primary/50 hover:text-tb-primary transition-colors">
                See what&apos;s live now →
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
