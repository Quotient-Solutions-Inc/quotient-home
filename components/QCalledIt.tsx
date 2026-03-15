'use client'

export default function QCalledIt() {
  return (
    <section className="bg-tb-cream px-8 lg:px-tb-section-x py-tb-section-y">
      <div className="mb-10">
        <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-gray-500 mb-4">
          Q Called It
        </span>
        <h2 className="font-headline font-bold text-[clamp(1.8rem,3.5vw,2.5rem)] tracking-[-0.02em] text-tb-dark leading-[1.1] mb-3 max-w-[520px]">
          Q is right 7 out of 10 times and wins 3× what it loses.
        </h2>
        <p className="text-[15px] text-gray-500 leading-relaxed max-w-[560px]">
          ROI reflects what a bet placed at Q&apos;s call time, at market odds,
          would have returned at resolution.
        </p>
      </div>

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
        <span className="font-mono text-xs text-gray-400 hover:text-tb-primary cursor-pointer transition-colors">
          View all resolved markets &rarr;
        </span>
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
    <div className="border border-tb-border bg-white p-5">
      <div className="inline-flex items-center gap-1.5 border rounded-sm px-2 py-0.5 text-[10px] uppercase tracking-wide font-mono bg-green-50 border-green-200 text-green-700 mb-3">
        &#10003; Resolved Yes
      </div>
      <div className="font-headline text-sm font-medium leading-snug text-tb-dark mb-4 min-h-[40px]">
        {question}
      </div>
      <div className="font-mono text-[30px] font-medium text-green-700 leading-none mb-1">
        {roi}
      </div>
      <div className="font-mono text-[11px] text-gray-400 mb-4">ROI</div>
      <div className="h-px bg-tb-border mb-3.5" />
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
