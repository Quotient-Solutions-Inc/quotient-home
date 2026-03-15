'use client'

import Link from 'next/link'

export default function SignalFeed() {
  return (
    <section className="py-16 px-8 lg:px-tb-section-x">
      <div className="border border-tb-border overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-tb-border bg-white">
          <div className="flex items-center gap-2.5">
            <span className="w-[7px] h-[7px] rounded-full animate-pulse bg-tb-primary" />
            <span className="font-mono text-[11px] text-gray-400 uppercase tracking-[0.08em]">
              What Q is watching
            </span>
          </div>
          <span className="font-mono text-[11px] text-gray-300">
            Updated 12 min ago
          </span>
        </div>

        {/* Featured market */}
        <div className="bg-white border-b border-tb-border">
          <div className="grid grid-cols-[1fr_380px] max-md:grid-cols-1">
            <div className="p-6 border-r max-md:border-r-0 max-md:border-b border-tb-border">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-tb-primary bg-red-50 font-medium px-1.5 py-0.5 rounded-sm">
                  Featured
                </span>
                <span className="font-mono text-[10px] text-gray-300">Updated 2h ago</span>
              </div>
              <h3 className="font-headline text-[22px] max-md:text-[18px] font-semibold leading-snug text-tb-dark mb-4">
                Will Iran close the Strait of Hormuz by March 31?
              </h3>
              <div className="flex items-center gap-3 mb-1">
                <span className="font-mono text-[22px] font-bold leading-none text-tb-dark">100%</span>
                <span className="font-mono text-[13px] text-gray-400">&middot; $5.7M vol</span>
              </div>
              <div className="font-mono text-[12px] text-green-600 mb-5">
                Q said Yes &middot; <span className="text-gray-400">10 pt spread</span>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-2 text-[13px] text-gray-500 leading-snug">
                  <span className="text-green-600 font-mono text-[12px] mt-0.5 flex-shrink-0">↑</span>
                  The grim choice facing the Trump administration: Economic or naval collapse?
                </div>
                <div className="flex items-start gap-2 text-[13px] text-gray-500 leading-snug">
                  <span className="text-red-500 font-mono text-[12px] mt-0.5 flex-shrink-0">↓</span>
                  Severe economic pressure creates strong incentive for Trump to declare victory quickly
                </div>
              </div>
            </div>

            {/* Related markets */}
            <div className="flex flex-col bg-white">
              <div className="px-5 py-3 border-b border-tb-border">
                <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-gray-400">Related markets</span>
              </div>
              <RelatedMarket
                question="Will the Iranian regime fall by March 31?"
                direction="NO" market="5%" q="12%"
                factor="Hegseth vows US will 'go as far as we need' to topple Iranian regime"
                updated="4h ago"
              />
              <RelatedMarket
                question="Will the Iranian regime fall by June 30?"
                direction="NO" market="22%" q="20%"
                factor="Trump pushes back on mounting criticism about his Iran war battle plan"
                updated="6h ago"
              />
              <RelatedMarket
                question="US x Iran ceasefire by March 15?"
                direction="NO" market="6%" q="6%"
                factor="Trump Advisers Urge Him to Find Iran Exit Ramp"
                updated="3h ago" last
              />
            </div>
          </div>
        </div>

        {/* Signal rows */}
        <div className="bg-white">
          <SignalRow question="Will Russia capture Kostyantynivka by December 31, 2026?" direction="YES" spread={36} factor="Market significantly underpricing" updated="1h ago" />
          <SignalRow question="US x Iran ceasefire by June 30?" direction="NO" spread={28} factor="Ceasefire probability dropping" updated="2h ago" />
          <SignalRow question="US x Iran ceasefire by May 31?" direction="NO" spread={23} factor="Near-term ceasefire window closing fast" updated="2h ago" />
          <SignalRow question="Will Israel launch a major ground offensive in Lebanon by March 31?" direction="YES" spread={22} factor="Q sees 78% probability vs market at 56%" updated="5h ago" />
          <SignalRow question="Masoud Pezeshkian out by December 31?" direction="NO" spread={22} factor="Regime stability overestimated by markets" updated="8h ago" />
          <SignalRow question="Russia x Ukraine ceasefire by end of 2026?" direction="NO" spread={19} factor="Diplomatic signals remain weak" updated="3h ago" />
          <SignalRow question="Will Iran strike Mina Al-Ahmadi Refinery by March 31?" direction="NO" spread={19} factor="Infrastructure targeting risk priced too high" updated="6h ago" />
          <SignalRow question="Will France, UK, or Germany strike Iran by June 30?" direction="NO" spread={18} factor="European military intervention probability remains low" updated="4h ago" last />
        </div>

        {/* Footer */}
        <div className="px-5 py-3 flex items-center justify-between border-t bg-white border-tb-border">
          <span className="font-mono text-[10px] text-gray-500">Showing 8 of 600+ markets tracked by Q</span>
          <Link href="/agents/q" className="font-mono text-[11px] text-gray-400 hover:text-tb-primary transition-colors">
            View full signal &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}

function RelatedMarket({
  question, direction, market, q, factor, updated, last = false,
}: {
  question: string; direction: 'YES' | 'NO'; market: string; q: string
  factor: string; updated: string; last?: boolean
}) {
  return (
    <div className={`px-5 py-4 hover:bg-gray-50/50 transition-colors ${last ? '' : 'border-b border-tb-border'}`}>
      <div className="font-headline text-[14px] font-semibold leading-snug text-tb-dark mb-2">{question}</div>
      <div className="flex items-center gap-2 mb-2">
        <span className={`font-mono text-[11px] font-medium px-1.5 py-0.5 rounded-sm ${direction === 'YES' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'}`}>{direction}</span>
        <span className="font-mono text-[11px] text-gray-400">{market}</span>
        <span className="font-mono text-[11px] text-gray-300">&middot;</span>
        <span className="font-mono text-[11px] text-tb-primary">Q {q}</span>
      </div>
      <div className="flex items-start gap-1.5 text-[12px] text-gray-400 leading-snug font-headline">
        <span className={`font-mono text-[11px] mt-0.5 flex-shrink-0 ${direction === 'NO' ? 'text-red-500' : 'text-green-600'}`}>
          {direction === 'NO' ? '↓' : '↑'}
        </span>
        <span className="flex-1">{factor}</span>
      </div>
      <div className="font-mono text-[10px] text-gray-300 mt-2">{updated}</div>
    </div>
  )
}

function SignalRow({
  question, direction, spread, factor, updated, last = false,
}: {
  question: string; direction: 'YES' | 'NO'; spread: number
  factor: string; updated: string; last?: boolean
}) {
  return (
    <div className={`px-5 py-4 flex items-start gap-5 max-md:flex-col max-md:gap-2 hover:bg-gray-50/70 transition-colors ${last ? '' : 'border-b border-tb-border'}`}>
      <div className="flex items-start gap-3 flex-1 min-w-0">
        <span className={`font-mono text-[11px] font-medium px-1.5 py-0.5 rounded-sm flex-shrink-0 mt-0.5 ${direction === 'YES' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'}`}>{direction}</span>
        <div className="min-w-0">
          <div className="font-headline text-[13px] font-medium leading-snug text-tb-dark">{question}</div>
          <div className="font-headline text-[12px] text-gray-400 leading-snug mt-1">{factor}</div>
        </div>
      </div>
      <div className="flex items-center gap-3 flex-shrink-0 max-md:pl-7">
        <span className={`font-mono text-[12px] font-medium px-2.5 py-1 rounded-sm ${
          spread >= 25 ? 'bg-orange-50 text-orange-600'
          : spread >= 20 ? 'bg-purple-50 text-tb-primary'
          : 'bg-gray-50 text-gray-500'
        }`}>
          {spread} pt spread
        </span>
        <span className="font-mono text-[10px] text-gray-300 whitespace-nowrap">{updated}</span>
      </div>
    </div>
  )
}
