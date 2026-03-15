'use client'

import { useQTrades } from '@/lib/useQData'

export default function RecentTrades({ variant = 'hero' }: { variant?: 'hero' | 'card' }) {
  const { trades, loading, error } = useQTrades()

  const isHero = variant === 'hero'

  if (loading) {
    return (
      <div className={`flex flex-col ${isHero ? 'h-full' : ''}`}>
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/20">
          <span className="w-[7px] h-[7px] rounded-full animate-pulse bg-tb-cream" />
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-white/60">
            Recent Trades
          </span>
        </div>
        <div className="flex-1 flex items-center justify-center px-4 py-8">
          <span className="font-mono text-[12px] text-white/40 animate-pulse">Loading...</span>
        </div>
      </div>
    )
  }

  if (error || trades.length === 0) {
    return (
      <div className={`flex flex-col ${isHero ? 'h-full' : ''}`}>
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/20">
          <span className="w-[7px] h-[7px] rounded-full bg-tb-cream/50" />
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-white/60">
            Recent Trades
          </span>
        </div>
        <div className="flex-1 flex items-center justify-center px-4 py-8">
          <span className="font-mono text-[12px] text-white/40">No trades available</span>
        </div>
      </div>
    )
  }

  const displayTrades = trades.slice(0, 8)

  return (
    <div className={`flex flex-col ${isHero ? 'h-full' : ''}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/20">
        <div className="flex items-center gap-2">
          <span className="w-[7px] h-[7px] rounded-full animate-pulse bg-tb-cream" />
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-white/60">
            Recent Trades
          </span>
        </div>
        <span className="font-mono text-[10px] text-white/30">
          Last 14d
        </span>
      </div>

      {/* Trades list */}
      <div className={`flex-1 overflow-y-auto ${isHero ? 'max-h-[500px]' : ''}`}>
        {displayTrades.map((trade, i) => (
          <div
            key={`${trade.question}-${i}`}
            className={`px-4 py-3 ${i < displayTrades.length - 1 ? 'border-b border-white/10' : ''} hover:bg-white/[0.04] transition-colors`}
          >
            <div className="flex items-start gap-2 mb-1.5">
              <span
                className={`font-mono text-[10px] font-medium px-1.5 py-0.5 rounded-sm flex-shrink-0 mt-0.5 ${
                  trade.call === 'YES'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-red-500/20 text-red-400'
                }`}
              >
                {trade.call}
              </span>
              <span className="text-[12px] text-white/80 leading-snug line-clamp-2">
                {trade.question}
              </span>
            </div>
            <div className="flex items-center gap-3 pl-7">
              <span className="font-mono text-[11px] text-white/40">
                {(trade.spread).toFixed(0)}pt spread
              </span>
              <span
                className={`font-mono text-[11px] font-medium ${
                  trade.roi24h > 0 ? 'text-green-400' : trade.roi24h < 0 ? 'text-red-400' : 'text-white/40'
                }`}
              >
                {trade.roi24h > 0 ? '+' : ''}{trade.roi24h.toFixed(1)}% 24h
              </span>
              <span className="font-mono text-[10px] text-white/25">
                {formatTimeAgo(trade.calledAt)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-4 py-2.5 border-t border-white/10">
        <span className="font-mono text-[10px] text-white/30">
          {trades.length} trade{trades.length !== 1 ? 's' : ''} in window
        </span>
      </div>
    </div>
  )
}

function formatTimeAgo(dateStr: string): string {
  if (!dateStr) return ''
  try {
    const date = new Date(dateStr)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60))
    if (diffHrs < 1) return 'just now'
    if (diffHrs < 24) return `${diffHrs}h ago`
    const diffDays = Math.floor(diffHrs / 24)
    return `${diffDays}d ago`
  } catch {
    return ''
  }
}
