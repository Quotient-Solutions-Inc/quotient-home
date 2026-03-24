// MOCK DATA — replace with API call from Jordan
// Shows open forecasts with high ROI — not simulated trades
const MOCK_FORECASTS: Forecast[] = [
  { market: 'Will Russia capture Kostyantynivka by June 30?', direction: 'NO', entry: 0.72, currentROI: '+22%', status: 'OPEN' },
  { market: 'US x Cuba military clash in 2026?', direction: 'NO', entry: 0.54, currentROI: '+18%', status: 'OPEN' },
  { market: 'Will the US impose new tariffs on China by Q2 2026?', direction: 'YES', entry: 0.42, currentROI: '+14%', status: 'OPEN' },
  { market: 'Will Russia and Ukraine reach a ceasefire by June 2026?', direction: 'NO', entry: 0.61, currentROI: '+11%', status: 'OPEN' },
]

// Prop types for forecast data
export interface Forecast {
  market: string
  direction: 'YES' | 'NO'
  entry: number
  currentROI: string
  status: 'OPEN' | 'CLOSED'
}

export interface QCallsFeedProps {
  forecasts: Forecast[]
}

export default function QCallsFeed({ forecasts }: QCallsFeedProps) {
  // Filter to show only open forecasts for now
  // Structure supports Open / Closed / All filter states for future implementation
  const displayedForecasts = forecasts.filter(f => f.status === 'OPEN')

  return (
    <div className='px-8 lg:px-tb-section-x pb-tb-section-y'>
      <div className="max-w-content mx-auto">
      {/* Eyebrow */}
      <span className="block uppercase mb-4 font-mono text-tb-primary text-[11px] tracking-[0.08em]">
        Track Record
      </span>

      {/* Headline */}
      <h1 className="font-headline font-bold text-tb-dark text-[28px] lg:text-[48px] leading-[0.95] tracking-[-0.02em] mb-4 uppercase">
        Q&apos;S PERFORMANCE
      </h1>

      {/* Subhead */}
      <p className="text-tb-dark/70 text-[15px] lg:text-[16px] leading-[1.7] mb-10">
        Q&apos;s calls, open and resolved. Every forecast is public.
      </p>

      {/* OPEN FORECASTS DATA — Jordan to wire live data */}
      <div
        className="overflow-hidden rounded-[10px] bg-white"
        style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
      >
        {/* Table header */}
        <div className="grid grid-cols-[1fr_80px_100px_90px_70px] max-md:grid-cols-[1fr_70px_70px] gap-4 px-5 py-3 border-b border-tb-dark/10 bg-tb-cream">
          <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-tb-dark/50">Market</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-tb-dark/50">Direction</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-tb-dark/50 max-md:hidden">Entry Odds</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-tb-dark/50">Current ROI</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-tb-dark/50 max-md:hidden">Status</span>
        </div>

        {/* Forecast rows */}
        {displayedForecasts.map((forecast, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1fr_80px_100px_90px_70px] max-md:grid-cols-[1fr_70px_70px] gap-4 items-center px-5 py-4 ${
              i < displayedForecasts.length - 1 ? 'border-b border-tb-dark/10' : ''
            } bg-white`}
          >
            <span className="text-[13px] leading-snug text-tb-dark">
              {forecast.market}
            </span>
            <span className="font-mono text-[12px] font-medium text-tb-dark">
              {forecast.direction}
            </span>
            <span className="font-mono text-[12px] text-tb-dark/40 max-md:hidden">
              {Math.round(forecast.entry * 100)}%
            </span>
            <span className={`font-mono text-[13px] font-medium ${
              forecast.currentROI.startsWith('+') ? 'text-green-600' : 'text-tb-dark/40'
            }`}>
              {forecast.currentROI}
            </span>
            <span className="max-md:hidden">
              <span className="font-mono text-[10px] uppercase tracking-[0.08em] px-2 py-0.5 rounded-sm bg-blue-50 text-blue-600">
                {forecast.status}
              </span>
            </span>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

// Export default mock data for use in pages
export const DEFAULT_MOCK_FORECASTS = MOCK_FORECASTS
