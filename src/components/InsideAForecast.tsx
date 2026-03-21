import Link from 'next/link'

// SVG Icons
function TargetIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}

function GridIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  )
}

function DocumentIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14,2 14,8 20,8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  )
}

// Key factors data
const KEY_FACTORS = [
  { weight: 'critical', percentage: '30%', text: 'Military posture mirrors June 2025 pre-strike configuration' },
  { weight: 'critical', percentage: '20%', text: 'Nuclear program degraded — no enrichment for 7–8 months' },
  { weight: 'significant', percentage: '15%', text: "Trump's one-month deadline + Israeli officials warning of war" },
]

// "What makes up each forecast" cards
const FORECAST_COMPONENTS = [
  { icon: TargetIcon, title: 'The call', desc: "What Q predicts, with a confidence level" },
  { icon: GridIcon, title: 'Key factors', desc: "Ranked and weighted evidence driving Q's view" },
  { icon: DocumentIcon, title: 'Full analysis', desc: 'Reasoning, assumptions, and scenario analysis' },
]

export default function InsideAForecast() {
  return (
    <section className="bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y">
      <div className="max-w-content mx-auto">
        {/* Eyebrow */}
        <span className="block uppercase mb-3 font-mono text-tb-primary text-[11px] tracking-[0.08em]">
          Inside a Q Forecast
        </span>

        {/* Headline */}
        <h2 className="font-headline font-bold text-tb-dark text-[24px] lg:text-[36px] leading-[0.95] tracking-[-0.02em] mb-2 uppercase">
          SEE WHAT Q ACTUALLY PRODUCES
        </h2>

        {/* Subhead */}
        <p className="text-[15px] leading-[1.7] text-tb-dark/60 max-w-[560px] mb-8">
          Each forecast includes a directional call, the reasoning behind it, and the key factors driving the view.
        </p>

        {/* Example Forecast Card — constrained width */}
        <div className="mb-8">
          <div
            className="rounded-[10px] bg-white overflow-hidden"
            style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
          >
          {/* Card Header */}
          <div className="px-6 pt-6 pb-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-tb-dark/50">
              Example Forecast · Feb 18, 2026
            </span>
            <h3 className="text-[18px] lg:text-[20px] font-semibold text-tb-dark mt-2">
              Will US or Israel strike Iran by March 31, 2026?
            </h3>
          </div>

          {/* Metrics Row */}
          <div className="px-6 pb-6">
            <div className="grid grid-cols-4 max-md:grid-cols-2 gap-3">
              {/* Q's Call */}
              <div className="bg-tb-card-inner rounded-[8px] p-4">
                <span className="block font-mono text-[10px] uppercase tracking-[0.08em] text-tb-dark/50 mb-1">
                  Q&apos;s Call
                </span>
                <span className="block text-[24px] font-bold text-green-600 mb-1">
                  Yes
                </span>
                <span className="block text-[11px] text-tb-dark/40">
                  What Q predicts
                </span>
              </div>

              {/* Q's Confidence */}
              <div className="bg-tb-card-inner rounded-[8px] p-4">
                <span className="block font-mono text-[10px] uppercase tracking-[0.08em] text-tb-dark/50 mb-1">
                  Q&apos;s Confidence
                </span>
                <span className="block text-[24px] font-bold text-tb-dark mb-1">
                  52%
                </span>
                <span className="block text-[11px] text-tb-dark/40">
                  How likely Q thinks this is
                </span>
              </div>

              {/* Market Odds */}
              <div className="bg-tb-card-inner rounded-[8px] p-4">
                <span className="block font-mono text-[10px] uppercase tracking-[0.08em] text-tb-dark/50 mb-1">
                  Market Odds
                </span>
                <span className="block text-[24px] font-bold text-tb-dark mb-1">
                  63%
                </span>
                <span className="block text-[11px] text-tb-dark/40">
                  What the crowd is pricing
                </span>
              </div>

              {/* Q's Edge */}
              <div className="bg-tb-card-inner rounded-[8px] p-4">
                <span className="block font-mono text-[10px] uppercase tracking-[0.08em] text-tb-dark/50 mb-1">
                  Q&apos;s Edge
                </span>
                <span className="block text-[24px] font-bold text-tb-primary mb-1">
                  11 points
                </span>
                <span className="block text-[11px] text-tb-dark/40">
                  Gap vs. the market
                </span>
              </div>
            </div>
          </div>

          {/* Key Factors Section */}
          <div className="bg-tb-card-inner px-6 py-5">
            <span className="block font-mono text-[10px] uppercase tracking-[0.08em] text-tb-dark/50 mb-4">
              Key Factors
            </span>
            <div className="space-y-3">
              {KEY_FACTORS.map((factor, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span
                    className={`inline-block px-2 py-0.5 rounded text-[10px] uppercase tracking-[0.04em] font-medium ${
                      factor.weight === 'critical'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    {factor.weight}
                  </span>
                  <span className="font-mono text-[12px] text-tb-dark/40 w-[40px]">
                    {factor.percentage}
                  </span>
                  <span className="text-[13px] text-tb-dark/80 flex-1">
                    {factor.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Full Analysis Section */}
          <div className="px-6 py-5 border-t border-tb-dark/10">
            <span className="block font-mono text-[10px] uppercase tracking-[0.08em] text-tb-dark/50 mb-3">
              Full Analysis
            </span>
            <p className="text-[14px] text-tb-dark/70 leading-relaxed mb-4 line-clamp-3">
              The current military posture closely mirrors the configuration observed before the June 2025 strikes. Combined with Iran&apos;s degraded nuclear capabilities and explicit deadline language from the administration, Q assesses near-term strike probability higher than the market is pricing...
            </p>
            <Link
              href="#"
              className="inline-block text-[13px] font-mono uppercase tracking-[0.08em] transition-colors text-tb-primary hover:text-tb-cta-hover"
            >
              Read Full Analysis &rarr;
            </Link>
          </div>
          </div>
        </div>

        {/* "What makes up each forecast" heading + cards */}
        <h3 className="text-[15px] font-semibold text-tb-dark mb-6">
          What makes up each forecast
        </h3>
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4">
          {FORECAST_COMPONENTS.map((item) => (
            <div
              key={item.title}
              className="rounded-[10px] p-5 bg-white"
              style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
            >
              <div className="text-tb-dark/60 mb-3">
                <item.icon />
              </div>
              <h3 className="text-[16px] font-semibold text-tb-dark mb-2">
                {item.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-tb-dark/60">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
