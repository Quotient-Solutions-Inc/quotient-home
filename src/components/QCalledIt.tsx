export default function QCalledIt() {
  return (
    <section className='relative bg-tb-page rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y'>
      <div className="max-w-content mx-auto">
        {/* Eyebrow */}
        <span className="block text-[11px] uppercase mb-3 font-mono tracking-[0.08em] text-tb-primary">
          Q Called It
        </span>

        {/* Headline */}
        <h2 className='font-headline font-bold text-[24px] lg:text-[36px] tracking-[-0.02em] leading-[0.95] mb-2 uppercase text-tb-dark'>
          Q IS RIGHT 7 OUT OF 10 TIMES<br />AND WINS 3X WHAT IT LOSES.
        </h2>

        {/* Subhead */}
        <p className="text-[15px] leading-[1.7] max-w-[560px] text-tb-dark/60 mb-8">
          ROI reflects what a bet placed at Q&apos;s call time, at market odds, would have returned at resolution.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-3 mb-4">
          <ProofCard
            question="Will US or Israel strike Iran by December 31, 2026?"
            roi="+34.2%"
            forecast="Yes"
            marketOdds="75%"
            callDate="Feb 18"
          />
          <ProofCard
            question="US strikes Iran by December 31, 2026?"
            roi="+36.1%"
            forecast="Yes"
            marketOdds="74%"
            callDate="Feb 18"
          />
          <ProofCard
            question="U.S. strike on Somalia by February 21?"
            roi="+35.1%"
            forecast="Yes"
            marketOdds="74%"
            callDate="Feb 18"
          />
        </div>

        <div className="flex justify-end">
          <span className="text-xs cursor-pointer transition-colors font-mono text-gray-400 hover:text-tb-primary">
            View all resolved markets &rarr;
          </span>
        </div>
      </div>
    </section>
  )
}

function ProofCard({
  question,
  roi,
  forecast,
  marketOdds,
  callDate,
}: {
  question: string
  roi: string
  forecast: string
  marketOdds: string
  callDate: string
}) {
  return (
    <div
      className="p-5 rounded-[10px] bg-white relative overflow-hidden"
      style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
    >
      <div className="inline-flex items-center gap-1.5 border rounded-sm px-2 py-0.5 text-[10px] uppercase tracking-wide mb-3 font-mono bg-green-50 border-green-200 text-green-700">
        &#10003; Resolved Yes
      </div>
      <div className="text-sm font-medium leading-snug mb-4 min-h-[40px] font-headline text-tb-dark">
        {question}
      </div>
      <div className="text-[30px] font-medium text-green-700 leading-none mb-1 font-mono">
        {roi}
      </div>
      <div className="text-[11px] text-gray-400 mb-4 font-mono">ROI</div>
      <div className="h-px mb-3.5 bg-tb-border" />
      <div className="flex flex-col gap-1.5">
        <MetaRow label="Q forecasted" value={forecast} green />
        <MetaRow label="Market was" value={marketOdds} />
        <MetaRow label="Called" value={callDate} />
      </div>
    </div>
  )
}

function MetaRow({
  label,
  value,
  green = false,
}: {
  label: string
  value: string
  green?: boolean
}) {
  return (
    <div className="flex justify-between text-[11px] font-mono">
      <span className="text-gray-400 uppercase tracking-wide">{label}</span>
      <span className={green ? 'text-green-700 font-medium' : 'text-gray-600'}>
        {value}
      </span>
    </div>
  )
}
