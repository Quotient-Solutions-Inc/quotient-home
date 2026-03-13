'use client'

import Link from 'next/link'
import { useTheme } from '@/lib/ThemeContext'

const headlineStats = [
  { value: '69.2%', label: 'Avg win rate' },
  { value: '+8.77%', label: 'Avg return' },
  { value: '14.27%', label: 'Avg win' },
  { value: '-4.11%', label: 'Avg loss' },
  { value: '26', label: 'Trades (7pp+)' },
]

const recentTrades = [
  { market: 'Will the US impose new tariffs on China by Q2 2026?', direction: 'YES', entry: '42%', return24h: '+12.3%', result: 'WIN' as const },
  { market: 'Will Russia and Ukraine reach a ceasefire by June 2026?', direction: 'NO', entry: '61%', return24h: '+8.7%', result: 'WIN' as const },
  { market: 'Will the EU approve new sanctions on Iran by May 2026?', direction: 'YES', entry: '38%', return24h: '+15.1%', result: 'WIN' as const },
]

export default function TrackRecord() {
  const { theme } = useTheme()
  const isB = theme === 'B'

  return (
    <section
      id="track-record"
      className={isB
        ? 'bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y'
        : 'border-b border-border-thin py-20 px-10 max-md:px-6'
      }
    >
      <div className={isB ? '' : 'max-w-content mx-auto'}>
        <span className={`block uppercase mb-4 ${isB
          ? 'font-mono text-tb-primary text-[11px] tracking-[0.08em]'
          : 'font-mono text-[11px] tracking-eyebrow text-gray-500'
        }`}>
          Track record
        </span>
        <h2 className={isB
          ? 'font-headline font-bold uppercase text-tb-dark text-[32px] lg:text-[48px] leading-[0.95] tracking-[-0.02em] mb-3'
          : 'text-[28px] font-semibold tracking-[-0.02em] text-brand-black mb-3 leading-[1.2]'
        }>
          Q&apos;s performance, verified.
        </h2>
        <p className={`text-[15px] leading-relaxed max-w-[560px] mb-10 ${isB ? 'text-tb-dark/70' : 'text-gray-500'}`}>
          Every trade is public, and Q&apos;s edge compounds with the spread. At 15pp+, the win rate reaches 79% with +15% returns.
        </p>

        {/* Headline stats row */}
        <div className={`grid grid-cols-5 max-md:grid-cols-2 gap-[8px] mb-10`}>
          {headlineStats.map((stat) => (
            <div key={stat.label} className={isB
              ? 'bg-white rounded-[10px] p-5'
              : 'bg-surface-off border border-border-thin rounded-sm p-5'
            }>
              <div className={`font-mono text-[28px] lg:text-[32px] font-bold leading-none mb-1 ${
                isB
                  ? stat.value.startsWith('-') ? 'text-gray-400' : 'text-tb-dark'
                  : stat.value.startsWith('-') ? 'text-gray-400' : 'text-brand-black'
              }`}>
                {stat.value}
              </div>
              <div className={`font-mono text-[11px] uppercase tracking-[0.08em] ${isB ? 'text-tb-dark/40' : 'text-gray-400'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Recent trades */}
        <div className={`overflow-hidden mb-6 ${isB
          ? 'border border-tb-border rounded-[10px]'
          : 'border border-border-thin rounded-sm'
        }`}>
          {/* Table header */}
          <div className={`grid grid-cols-[1fr_70px_70px_90px_70px] max-md:grid-cols-[1fr_70px_70px] gap-4 px-5 py-3 border-b ${isB
            ? 'bg-white border-tb-border'
            : 'bg-surface-off border-border-thin'
          }`}>
            <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-gray-400">Market</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-gray-400">Direction</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-gray-400 max-md:hidden">Entry</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-gray-400">Return</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-gray-400 max-md:hidden">Result</span>
          </div>
          {/* Trade rows */}
          {recentTrades.map((trade, i) => (
            <div key={i} className={`grid grid-cols-[1fr_70px_70px_90px_70px] max-md:grid-cols-[1fr_70px_70px] gap-4 items-center px-5 py-3.5 ${
              i < recentTrades.length - 1 ? `border-b ${isB ? 'border-tb-border' : 'border-border-thin'}` : ''
            } bg-white`}>
              <span className={`text-[13px] leading-snug ${isB ? 'text-tb-dark' : 'text-brand-black'}`}>
                {trade.market}
              </span>
              <span className={`font-mono text-[12px] font-medium ${isB ? 'text-tb-dark' : 'text-brand-black'}`}>
                {trade.direction}
              </span>
              <span className="font-mono text-[12px] text-gray-400 max-md:hidden">
                {trade.entry}
              </span>
              <span className={`font-mono text-[13px] font-medium ${
                trade.result === 'WIN' ? 'text-green-600' : 'text-gray-400'
              }`}>
                {trade.return24h}
              </span>
              <span className="max-md:hidden">
                <span className={`font-mono text-[10px] uppercase tracking-[0.08em] px-2 py-0.5 rounded-sm ${
                  trade.result === 'WIN'
                    ? 'bg-green-50 text-green-600'
                    : 'bg-gray-100 text-gray-400'
                }`}>
                  {trade.result}
                </span>
              </span>
            </div>
          ))}
        </div>

        <Link
          href="/agents/q/signal"
          className={`inline-block text-[13px] font-mono uppercase tracking-[0.08em] transition-colors ${isB
            ? 'text-tb-primary hover:text-tb-cta-hover'
            : 'text-gray-400 hover:text-brand-black'
          }`}
        >
          See Q&apos;s full track record &rarr;
        </Link>
      </div>
    </section>
  )
}
