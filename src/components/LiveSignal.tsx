export default function LiveSignal() {
  return (
    <section className='relative bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y'>
      <div>
        {/* Context header */}
        <div className="mb-10">
          <span className="block text-[11px] uppercase mb-4 font-mono tracking-[0.08em] text-gray-500">
            Live Signal
          </span>
          <h2 className='font-semibold tracking-[-0.02em] leading-[1.2] mb-3 max-w-[520px] font-headline font-bold text-[32px] lg:text-[48px] uppercase text-tb-dark leading-[0.95]'>
            The spread is the signal.
          </h2>
          <p className="text-[15px] leading-relaxed max-w-[560px] text-tb-dark/70">
            When Q and the market disagree, Q has been right ~70% of the time. Wide spreads have historically been the strongest entry signal.
          </p>
        </div>

        {/* Signal badge + link row */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-[7px] h-[7px] rounded-full animate-pulse bg-tb-primary" />
            <span className="text-[11px] uppercase font-mono tracking-[0.08em] text-gray-500">
              Signal divergence · updated daily
            </span>
          </div>
          <span className="text-xs cursor-pointer transition-colors max-md:hidden font-mono text-gray-400 hover:text-tb-primary">
            Explore all markets &rarr;
          </span>
        </div>

        {/* Signal table */}
        <div className="overflow-hidden border border-tb-border rounded-tb-card">
          {/* Table header */}
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
}: {
  market: string
  marketOdds: string
  qSays: string
  spread: string
  spreadType: 'hi' | 'med'
  signal: string
  last?: boolean
}) {
  const mono = 'font-mono'
  const spreadColors =
    spreadType === 'hi'
      ? 'bg-orange-50 text-orange-600'
      : 'bg-red-50 text-tb-primary'

  return (
    <div
      className={`grid grid-cols-[1fr_80px_80px_90px_200px] max-md:grid-cols-[1fr_80px_80px] gap-4 items-center bg-white px-5 py-4 ${
        last ? '' : 'border-b border-tb-border'
      }`}
    >
      <div className="text-[13px] font-medium leading-snug font-headline text-tb-dark">
        {market}
      </div>
      <div className={`${mono} text-xs text-gray-500`}>{marketOdds}</div>
      <div className={`${mono} text-[13px] font-medium text-tb-primary`}>
        {qSays}
      </div>
      <div className="max-md:hidden">
        <span className={`${mono} text-xs font-medium px-2 py-0.5 rounded-sm ${spreadColors}`}>
          {spread}
        </span>
      </div>
      <div className="text-xs italic leading-snug max-md:hidden font-headline text-gray-500">
        {signal}
      </div>
    </div>
  )
}
