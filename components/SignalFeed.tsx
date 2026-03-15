'use client'

import Link from 'next/link'
import { useTheme } from '@/lib/ThemeContext'

export default function SignalFeed() {
  const { theme } = useTheme()
  const isB = theme === 'B'

  return (
    <section className={isB ? 'py-16 px-8 lg:px-tb-section-x' : 'py-16 px-10 max-md:px-6'}>
      <div className={isB ? '' : 'max-w-content mx-auto'}>
        <div className={`overflow-hidden ${
          isB
            ? 'border border-tb-border rounded-tb-card'
            : 'border border-border-thin rounded-sm shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)]'
        }`}>
          {/* Unified header */}
          <div className={`flex items-center justify-between px-5 py-3 border-b ${
            isB ? 'border-tb-border bg-white' : 'border-border-thin bg-surface-off'
          }`}>
            <div className="flex items-center gap-2.5">
              <span className={`w-[7px] h-[7px] rounded-full animate-pulse ${isB ? 'bg-tb-primary' : 'bg-green-500'}`} />
              <span className={`text-[11px] text-gray-400 uppercase ${
                isB ? 'font-mono tracking-[0.08em]' : 'font-mono tracking-eyebrow'
              }`}>
                What Q is watching
              </span>
            </div>
            <span className={`text-[11px] text-gray-300 font-mono`}>
              Updated 12 min ago
            </span>
          </div>

          {/* Featured market — hero card */}
          <div className={`bg-white border-b ${isB ? 'border-tb-border' : 'border-border-thin'}`}>
            <div className="grid grid-cols-[1fr_380px] max-md:grid-cols-1">
              {/* Featured content — left */}
              <div className={`p-6 border-r max-md:border-r-0 max-md:border-b ${isB ? 'border-tb-border' : 'border-border-thin'}`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-[10px] uppercase font-medium px-1.5 py-0.5 rounded-sm ${
                    isB
                      ? 'font-mono tracking-[0.08em] text-tb-primary bg-red-50'
                      : 'font-mono tracking-eyebrow text-brand-red-orange bg-orange-50'
                  }`}>
                    Featured
                  </span>
                  <span className={`text-[10px] text-gray-300 font-mono`}>
                    Updated 2h ago
                  </span>
                </div>
                <h3 className={`text-[22px] max-md:text-[18px] font-semibold leading-snug mb-4 ${
                  isB ? 'font-headline text-tb-dark' : 'text-brand-black'
                }`}>
                  Will Iran close the Strait of Hormuz by March 31?
                </h3>
                <div className="flex items-center gap-3 mb-1">
                  <span className={`text-[22px] font-bold leading-none ${
                    isB ? 'font-mono text-tb-dark' : 'font-mono text-brand-black'
                  }`}>
                    100%
                  </span>
                  <span className={`text-[13px] text-gray-400 font-mono`}>
                    &middot; $5.7M vol
                  </span>
                </div>
                <div className={`text-[12px] text-green-600 mb-5 font-mono`}>
                  Q said Yes &middot;{' '}
                  <span className="text-gray-400">10 pt spread</span>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-2 text-[13px] text-gray-500 leading-snug">
                    <span className="text-green-600 font-mono text-[12px] mt-0.5 flex-shrink-0">
                      ↑
                    </span>
                    The grim choice facing the Trump administration: Economic or
                    naval collapse?
                  </div>
                  <div className="flex items-start gap-2 text-[13px] text-gray-500 leading-snug">
                    <span className="text-red-500 font-mono text-[12px] mt-0.5 flex-shrink-0">
                      ↓
                    </span>
                    Severe economic pressure (oil past $100, gas up 50 cents,
                    Strait of Hormuz disrupted) creates strong incentive for
                    Trump to declare victory quickly
                  </div>
                  <div className="flex items-start gap-2 text-[13px] text-gray-500 leading-snug">
                    <span className="text-green-600 font-mono text-[12px] mt-0.5 flex-shrink-0">
                      ↑
                    </span>
                    Aramco sees &lsquo;catastrophic consequences&rsquo; for oil
                    markets if Hormuz strait remains blocked
                  </div>
                </div>
              </div>

              {/* Related markets — right sidebar */}
              <div className={`flex flex-col ${isB ? 'bg-white' : 'bg-surface-off'}`}>
                <div className={`px-5 py-3 border-b ${isB ? 'border-tb-border' : 'border-border-thin'}`}>
                  <span className={`text-[10px] uppercase text-gray-400 ${
                    isB ? 'font-mono tracking-[0.08em]' : 'font-mono tracking-eyebrow'
                  }`}>
                    Related markets
                  </span>
                </div>
                <RelatedMarket
                  question="Will the Iranian regime fall by March 31?"
                  direction="NO"
                  market="5%"
                  q="12%"
                  factor="Hegseth vows US will 'go as far as we need' to topple Iranian regime"
                  updated="4h ago"
                  isB={isB}
                />
                <RelatedMarket
                  question="Will the Iranian regime fall by June 30?"
                  direction="NO"
                  market="22%"
                  q="20%"
                  factor="Trump pushes back on mounting criticism about his Iran war battle plan"
                  updated="6h ago"
                  isB={isB}
                />
                <RelatedMarket
                  question="US x Iran ceasefire by March 15?"
                  direction="NO"
                  market="6%"
                  q="6%"
                  factor="Trump Advisers Urge Him to Find Iran Exit Ramp, Fearing Political Backlash"
                  updated="3h ago"
                  last
                  isB={isB}
                />
              </div>
            </div>
          </div>

          {/* Signal feed rows */}
          <div className="bg-white">
            <SignalRow question="Will Russia capture Kostyantynivka by December 31, 2026?" direction="YES" spread={36} factor="Market significantly underpricing — Q sees 88% vs 52% odds" updated="1h ago" isB={isB} />
            <SignalRow question="US x Iran ceasefire by June 30?" direction="NO" spread={28} factor="Ceasefire probability dropping — 10 analysts tracking" updated="2h ago" isB={isB} />
            <SignalRow question="US x Iran ceasefire by May 31?" direction="NO" spread={23} factor="Near-term ceasefire window closing fast" updated="2h ago" isB={isB} />
            <SignalRow question="Will Israel launch a major ground offensive in Lebanon by March 31?" direction="YES" spread={22} factor="Q sees 78% probability vs market at 56% — significant gap" updated="5h ago" isB={isB} />
            <SignalRow question="Masoud Pezeshkian out by December 31?" direction="NO" spread={22} factor="Regime stability overestimated by markets" updated="8h ago" isB={isB} />
            <SignalRow question="Russia x Ukraine ceasefire by end of 2026?" direction="NO" spread={19} factor="20 analysts tracking — diplomatic signals remain weak" updated="3h ago" isB={isB} />
            <SignalRow question="Will Iran strike Mina Al-Ahmadi Refinery by March 31?" direction="NO" spread={19} factor="Infrastructure targeting risk priced too high" updated="6h ago" isB={isB} />
            <SignalRow question="Will France, UK, or Germany strike Iran by June 30?" direction="NO" spread={18} factor="European military intervention probability remains low" updated="4h ago" last isB={isB} />
          </div>

          {/* Feed footer */}
          <div className={`px-5 py-3 flex items-center justify-between border-t ${
            isB ? 'bg-white border-tb-border' : 'bg-surface-off border-border-thin'
          }`}>
            <span className={`text-[10px] text-gray-500 font-mono`}>
              Showing 8 of 600+ markets tracked by Q
            </span>
            <Link
              href="/agents/q/signal"
              className={`text-[11px] text-gray-400 transition-colors ${
                isB ? 'font-mono hover:text-tb-primary' : 'font-mono hover:text-brand-black'
              }`}
            >
              View full signal &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Related market in featured sidebar ── */

function RelatedMarket({
  question,
  direction,
  market,
  q,
  factor,
  updated,
  last = false,
  isB = false,
}: {
  question: string
  direction: 'YES' | 'NO'
  market: string
  q: string
  factor: string
  updated: string
  last?: boolean
  isB?: boolean
}) {
  const mono = 'font-mono'
  return (
    <div
      className={`px-5 py-4 transition-colors hover:bg-gray-50/50 ${last ? '' : `border-b ${isB ? 'border-tb-border' : 'border-border-thin'}`}`}
    >
      <div className={`text-[14px] font-semibold leading-snug mb-2 ${isB ? 'font-headline text-tb-dark' : 'text-brand-black'}`}>
        {question}
      </div>
      <div className="flex items-center gap-2 mb-2">
        <span
          className={`${mono} text-[11px] font-medium px-1.5 py-0.5 rounded-sm ${
            direction === 'YES'
              ? 'bg-green-50 text-green-700'
              : 'bg-red-50 text-red-600'
          }`}
        >
          {direction}
        </span>
        <span className={`${mono} text-[11px] text-gray-400`}>{market}</span>
        <span className={`${mono} text-[11px] text-gray-300`}>&middot;</span>
        <span className={`${mono} text-[11px] ${isB ? 'text-tb-primary' : 'text-brand-blue'}`}>Q {q}</span>
      </div>
      <div className={`flex items-start gap-1.5 text-[12px] text-gray-400 leading-snug ${isB ? 'font-headline' : ''}`}>
        <span
          className={`${mono} text-[11px] mt-0.5 flex-shrink-0 ${
            direction === 'NO' ? 'text-red-500' : 'text-green-600'
          }`}
        >
          {direction === 'NO' ? '↓' : '↑'}
        </span>
        <span className="flex-1">{factor}</span>
      </div>
      <div className={`${mono} text-[10px] text-gray-300 mt-2`}>{updated}</div>
    </div>
  )
}

/* ── Signal feed row ── */

function SignalRow({
  question,
  direction,
  spread,
  factor,
  updated,
  last = false,
  isB = false,
}: {
  question: string
  direction: 'YES' | 'NO'
  spread: number
  factor: string
  updated: string
  last?: boolean
  isB?: boolean
}) {
  const mono = 'font-mono'
  return (
    <div
      className={`px-5 py-4 flex items-start gap-5 max-md:flex-col max-md:gap-2 transition-colors hover:bg-gray-50/70 ${
        last ? '' : `border-b ${isB ? 'border-tb-border' : 'border-border-thin'}`
      }`}
    >
      {/* Market question + call badge */}
      <div className="flex items-start gap-3 flex-1 min-w-0">
        <span
          className={`${mono} text-[11px] font-medium px-1.5 py-0.5 rounded-sm flex-shrink-0 mt-0.5 ${
            direction === 'YES'
              ? 'bg-green-50 text-green-700'
              : 'bg-red-50 text-red-600'
          }`}
        >
          {direction}
        </span>
        <div className="min-w-0">
          <div className={`text-[13px] font-medium leading-snug ${isB ? 'font-headline text-tb-dark' : 'text-brand-black'}`}>
            {question}
          </div>
          <div className={`text-[12px] text-gray-400 leading-snug mt-1 ${isB ? 'font-headline' : ''}`}>
            {factor}
          </div>
        </div>
      </div>

      {/* Spread pill + timestamp */}
      <div className="flex items-center gap-3 flex-shrink-0 max-md:pl-7">
        <span
          className={`${mono} text-[12px] font-medium px-2.5 py-1 rounded-sm ${
            spread >= 25
              ? 'bg-orange-50 text-orange-600'
              : spread >= 20
                ? isB ? 'bg-red-50 text-tb-primary' : 'bg-blue-50 text-brand-blue'
                : 'bg-gray-50 text-gray-500'
          }`}
        >
          {spread} pt spread
        </span>
        <span className={`${mono} text-[10px] text-gray-300 whitespace-nowrap`}>
          {updated}
        </span>
      </div>
    </div>
  )
}
