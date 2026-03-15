'use client'

export default function LiveSignal() {
  return (
    <section className="bg-tb-cream px-8 lg:px-tb-section-x py-tb-section-y border-b border-tb-border">
      <div className="mb-10">
        <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-gray-500 mb-4">
          Live Signal
        </span>
        <h2 className="font-headline font-bold text-[clamp(2rem,4vw,3.5rem)] uppercase text-tb-dark leading-[0.9] tracking-[-0.02em] mb-3 max-w-[520px]">
          The spread is the signal.
        </h2>
        <p className="text-[15px] leading-relaxed max-w-[560px] font-headline text-gray-500">
          When Q and the market disagree, Q has been right ~70% of the time. Wide spreads have historically been the strongest entry signal.
        </p>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="w-[7px] h-[7px] rounded-full animate-pulse bg-tb-primary" />
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-gray-500">
            Signal divergence · updated daily
          </span>
        </div>
        <span className="font-mono text-xs text-gray-400 hover:text-tb-primary cursor-pointer transition-colors max-md:hidden">
          Explore all markets &rarr;
        </span>
      </div>

      <div className="border border-tb-border overflow-hidden">
        <div className="grid grid-cols-[1fr_80px_80px_90px_200px] max-md:grid-cols-[1fr_80px_80px] gap-4 border-b px-5 py-3 bg-white border-tb-border">
          <span className="font-mono text-[10px] uppercase tracking-wide text-gray-400">Market</span>
          <span className="font-mono text-[10px] uppercase tracking-wide text-gray-400">Market odds</span>
          <span className="font-mono text-[10px] uppercase tracking-wide text-gray-400">Q says</span>
          <span className="font-mono text-[10px] uppercase tracking-wide text-gray-400 max-md:hidden">Spread</span>
          <span className="font-mono text-[10px] uppercase tracking-wide text-gray-400 max-md:hidden">Top signal</span>
        </div>

        <SignalRow market="Will the US impose new tariffs on China by Q2 2026?" marketOdds="62%" qSays="78%" spread="+16" spreadType="hi" signal="Q sees policy signals market hasn't priced" />
        <SignalRow market="Fed rate cut before September 2026?" marketOdds="44%" qSays="51%" spread="+7" spreadType="med" signal="Forecaster consensus shifting hawkish" />
        <SignalRow market="Ukraine ceasefire agreement by December 2026?" marketOdds="28%" qSays="41%" spread="+13" spreadType="hi" signal="Diplomatic channel activity elevated" />
        <SignalRow market="Bitcoin above $150k by end of 2026?" marketOdds="31%" qSays="24%" spread="-7" spreadType="med" signal="Macro headwinds underweighted by market" last />
      </div>
    </section>
  )
}

function SignalRow({
  market, marketOdds, qSays, spread, spreadType, signal, last = false,
}: {
  market: string; marketOdds: string; qSays: string; spread: string
  spreadType: 'hi' | 'med'; signal: string; last?: boolean
}) {
  const spreadColors =
    spreadType === 'hi'
      ? 'bg-orange-50 text-orange-600'
      : 'bg-purple-50 text-tb-primary'

  return (
    <div className={`grid grid-cols-[1fr_80px_80px_90px_200px] max-md:grid-cols-[1fr_80px_80px] gap-4 items-center bg-white px-5 py-4 ${
      last ? '' : 'border-b border-tb-border'
    }`}>
      <div className="font-headline text-[13px] font-medium leading-snug text-tb-dark">{market}</div>
      <div className="font-mono text-xs text-gray-500">{marketOdds}</div>
      <div className="font-mono text-[13px] font-medium text-tb-primary">{qSays}</div>
      <div className="max-md:hidden">
        <span className={`font-mono text-xs font-medium px-2 py-0.5 rounded-sm ${spreadColors}`}>{spread}</span>
      </div>
      <div className="font-headline text-xs italic leading-snug text-gray-500 max-md:hidden">{signal}</div>
    </div>
  )
}
