'use client'

import { useTheme } from '@/lib/ThemeContext'

export default function LiveSignal() {
  const { theme } = useTheme()
  const isB = theme === 'B'

  return (
    <section className={`border-b relative ${
      isB
        ? 'bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y'
        : 'bg-surface-off border-border-thin py-20 px-10 max-md:px-6'
    }`}>
      <div className={isB ? '' : 'max-w-content mx-auto'}>
        {/* Context header */}
        <div className="mb-10">
          <span className={`block text-[11px] uppercase mb-4 ${
            isB ? 'font-mono tracking-[0.08em] text-gray-500' : 'font-mono tracking-eyebrow text-gray-500'
          }`}>
            Live Signal
          </span>
          <h2 className={`font-semibold tracking-[-0.02em] leading-[1.2] mb-3 max-w-[520px] ${
            isB
              ? 'font-headline font-bold text-[clamp(2rem,4vw,3.5rem)] uppercase text-tb-dark leading-[0.9]'
              : 'text-[28px] text-brand-black'
          }`}>
            The spread is the signal.
          </h2>
          <p className={`text-[15px] leading-relaxed max-w-[560px] ${
            isB ? 'font-headline text-gray-500' : 'text-gray-500'
          }`}>
            When Q and the market disagree, Q has been right ~70% of the time. Wide spreads have historically been the strongest entry signal.
          </p>
        </div>

        {/* Signal badge + link row */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className={`w-[7px] h-[7px] rounded-full animate-pulse ${isB ? 'bg-tb-primary' : 'bg-red-500'}`} />
            <span className={`text-[11px] uppercase ${
              isB ? 'font-mono tracking-[0.08em] text-gray-500' : 'font-mono tracking-eyebrow text-gray-500'
            }`}>
              Signal divergence · updated daily
            </span>
          </div>
          <span className={`text-xs cursor-pointer transition-colors max-md:hidden ${
            isB ? 'font-mono text-gray-400 hover:text-tb-primary' : 'font-mono text-gray-400 hover:text-gray-600'
          }`}>
            Explore all markets &rarr;
          </span>
        </div>

        {/* Signal table */}
        <div className={`overflow-hidden ${
          isB ? 'border border-tb-border rounded-tb-card' : 'border border-border-thin rounded-sm'
        }`}>
          {/* Table header */}
          <div className={`grid grid-cols-[1fr_80px_80px_90px_200px] max-md:grid-cols-[1fr_80px_80px] gap-4 border-b px-5 py-3 ${
            isB ? 'bg-white border-tb-border' : 'bg-surface-off border-border-thin'
          }`}>
            <span className={`text-[10px] uppercase tracking-wide text-gray-400 ${isB ? 'font-mono' : 'font-mono'}`}>Market</span>
            <span className={`text-[10px] uppercase tracking-wide text-gray-400 ${isB ? 'font-mono' : 'font-mono'}`}>Market odds</span>
            <span className={`text-[10px] uppercase tracking-wide text-gray-400 ${isB ? 'font-mono' : 'font-mono'}`}>Q says</span>
            <span className={`text-[10px] uppercase tracking-wide text-gray-400 max-md:hidden ${isB ? 'font-mono' : 'font-mono'}`}>Spread</span>
            <span className={`text-[10px] uppercase tracking-wide text-gray-400 max-md:hidden ${isB ? 'font-mono' : 'font-mono'}`}>Top signal</span>
          </div>

          <SignalRow market="Will the US impose new tariffs on China by Q2 2026?" marketOdds="62%" qSays="78%" spread="+16" spreadType="hi" signal="Q sees policy signals market hasn't priced" isB={isB} />
          <SignalRow market="Fed rate cut before September 2026?" marketOdds="44%" qSays="51%" spread="+7" spreadType="med" signal="Forecaster consensus shifting hawkish" isB={isB} />
          <SignalRow market="Ukraine ceasefire agreement by December 2026?" marketOdds="28%" qSays="41%" spread="+13" spreadType="hi" signal="Diplomatic channel activity elevated" isB={isB} />
          <SignalRow market="Bitcoin above $150k by end of 2026?" marketOdds="31%" qSays="24%" spread="-7" spreadType="med" signal="Macro headwinds underweighted by market" last isB={isB} />
        </div>
      </div>
    </section>
  )
}

function SignalRow({
  market,
  marketOdds,
  qSays,
  spread,
  spreadType,
  signal,
  last = false,
  isB = false,
}: {
  market: string
  marketOdds: string
  qSays: string
  spread: string
  spreadType: 'hi' | 'med'
  signal: string
  last?: boolean
  isB?: boolean
}) {
  const mono = 'font-mono'
  const spreadColors =
    spreadType === 'hi'
      ? 'bg-orange-50 text-orange-600'
      : isB ? 'bg-red-50 text-tb-primary' : 'bg-blue-50 text-brand-blue'

  return (
    <div
      className={`grid grid-cols-[1fr_80px_80px_90px_200px] max-md:grid-cols-[1fr_80px_80px] gap-4 items-center bg-white px-5 py-4 ${
        last ? '' : `border-b ${isB ? 'border-tb-border' : 'border-border-thin'}`
      }`}
    >
      <div className={`text-[13px] font-medium leading-snug ${isB ? 'font-headline text-tb-dark' : 'text-brand-black'}`}>
        {market}
      </div>
      <div className={`${mono} text-xs text-gray-500`}>{marketOdds}</div>
      <div className={`${mono} text-[13px] font-medium ${isB ? 'text-tb-primary' : 'text-brand-blue'}`}>
        {qSays}
      </div>
      <div className="max-md:hidden">
        <span className={`${mono} text-xs font-medium px-2 py-0.5 rounded-sm ${spreadColors}`}>
          {spread}
        </span>
      </div>
      <div className={`text-xs italic leading-snug max-md:hidden ${isB ? 'font-headline text-gray-500' : 'text-gray-500'}`}>
        {signal}
      </div>
    </div>
  )
}
