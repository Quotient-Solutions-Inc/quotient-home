'use client'

import { useTheme } from '@/lib/ThemeContext'

export default function QCalledIt() {
  const { theme } = useTheme()
  const isB = theme === 'B'

  return (
    <section className={`relative ${
      isB ? 'bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y' : 'border-b border-border-thin py-20 px-10 max-md:px-6'
    }`}>
      <div className={isB ? '' : 'max-w-content mx-auto'}>
        {/* Header with context */}
        <div className="mb-10">
          <span className={`block text-[11px] uppercase mb-4 ${
            isB ? 'font-mono tracking-[0.08em] text-tb-primary' : 'font-mono tracking-eyebrow text-gray-500'
          }`}>
            Q Called It
          </span>
          <h2 className={`font-semibold tracking-[-0.02em] leading-[1.2] mb-3 max-w-[520px] ${
            isB
              ? 'font-headline font-bold text-[32px] lg:text-[48px] uppercase text-tb-dark leading-[0.95]'
              : 'text-[28px] text-brand-black'
          }`}>
            Q is right 7 out of 10 times and wins 3x what it loses.
          </h2>
          <p className={`text-[15px] leading-relaxed max-w-[560px] ${
            isB ? 'text-tb-dark/70' : 'text-gray-500'
          }`}>
            ROI reflects what a bet placed at Q&apos;s call time, at market odds,
            would have returned at resolution.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-3 mb-4">
          <ProofCard
            question="Will US or Israel strike Iran by December 31, 2026?"
            roi="+34.2%"
            forecast="Yes"
            marketOdds="75%"
            callDate="Feb 18"
            isB={isB}
          />
          <ProofCard
            question="US strikes Iran by December 31, 2026?"
            roi="+36.1%"
            forecast="Yes"
            marketOdds="74%"
            callDate="Feb 18"
            isB={isB}
          />
          <ProofCard
            question="U.S. strike on Somalia by February 21?"
            roi="+35.1%"
            forecast="Yes"
            marketOdds="74%"
            callDate="Feb 18"
            isB={isB}
          />
        </div>

        <div className="flex justify-end">
          <span className={`text-xs cursor-pointer transition-colors ${
            isB
              ? 'font-mono text-gray-400 hover:text-tb-primary'
              : 'font-mono text-gray-400 hover:text-gray-600'
          }`}>
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
  isB,
}: {
  question: string
  roi: string
  forecast: string
  marketOdds: string
  callDate: string
  isB: boolean
}) {
  return (
    <div className={`p-5 ${
      isB ? 'border border-tb-border rounded-tb-card bg-white relative overflow-hidden' : 'bg-white border border-border-thin rounded-sm'
    }`}>
      <div className={`inline-flex items-center gap-1.5 border rounded-sm px-2 py-0.5 text-[10px] uppercase tracking-wide mb-3 ${
        isB ? 'font-mono' : 'font-mono'
      } bg-green-50 border-green-200 text-green-700`}>
        &#10003; Resolved Yes
      </div>
      <div className={`text-sm font-medium leading-snug mb-4 min-h-[40px] ${
        isB ? 'font-headline text-tb-dark' : 'text-brand-black'
      }`}>
        {question}
      </div>
      <div className={`text-[30px] font-medium text-green-700 leading-none mb-1 ${
        isB ? 'font-mono' : 'font-mono'
      }`}>
        {roi}
      </div>
      <div className={`text-[11px] text-gray-400 mb-4 font-mono`}>ROI</div>
      <div className={`h-px mb-3.5 ${isB ? 'bg-tb-border' : 'bg-border-thin'}`} />
      <div className="flex flex-col gap-1.5">
        <MetaRow label="Q forecasted" value={forecast} green isB={isB} />
        <MetaRow label="Market was" value={marketOdds} isB={isB} />
        <MetaRow label="Called" value={callDate} isB={isB} />
      </div>
    </div>
  )
}

function MetaRow({
  label,
  value,
  green = false,
  isB = false,
}: {
  label: string
  value: string
  green?: boolean
  isB?: boolean
}) {
  return (
    <div className={`flex justify-between text-[11px] font-mono`}>
      <span className="text-gray-400 uppercase tracking-wide">{label}</span>
      <span className={green ? 'text-green-700 font-medium' : 'text-gray-600'}>
        {value}
      </span>
    </div>
  )
}
