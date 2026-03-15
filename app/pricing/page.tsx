'use client'

import MarketplaceNav from '@/components/MarketplaceNav'
import Footer from '@/components/Footer'
import { useTheme } from '@/lib/ThemeContext'

export default function PricingPage() {
  const { theme } = useTheme()
  const isB = theme === 'B'
  const mono = isB ? 'font-mono tracking-[0.08em]' : 'font-mono'

  return (
    <div className={isB ? 'min-h-screen bg-tb-page' : 'min-h-screen'}>
      <MarketplaceNav />

      {/* Pricing */}
      <section className={`border-b ${
        isB ? 'bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y border-tb-border' : 'border-border-thin py-20 px-10 max-md:px-6'
      }`}>
        <div className={isB ? '' : 'max-w-content mx-auto'}>
          <span className={`block text-[11px] uppercase mb-4 ${
            isB ? 'font-mono tracking-[0.08em] text-gray-500' : 'font-mono tracking-eyebrow text-gray-500'
          }`}>Pricing</span>
          {isB ? (
            <h1 className="font-headline font-bold text-[clamp(2.5rem,6vw,5rem)] leading-[0.85] uppercase text-tb-dark tracking-[-0.03em] mb-5">
              Simple. Transparent.<br />Three ways in.
            </h1>
          ) : (
            <h1 className="font-headline text-[42px] max-md:text-[32px] font-normal leading-[1.15] tracking-[-0.02em] text-brand-black mb-5">
              Simple. Transparent.<br />Three ways in.
            </h1>
          )}
          <p className={`text-[15px] leading-relaxed max-w-[560px] mb-10 ${
            isB ? 'font-headline text-gray-500' : 'text-gray-500'
          }`}>
            Start free. Upgrade when the signal is working for you. Enterprise pricing for platforms is scoped separately.
          </p>

          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4 mb-4">
            {/* Free */}
            <div className={`p-7 flex flex-col ${
              isB ? 'border border-tb-border rounded-tb-card bg-white' : 'border border-border-thin rounded-sm bg-white'
            }`}>
              <div className={`${mono} text-[10px] uppercase tracking-wide text-gray-400 mb-2`}>Free</div>
              <div className={`text-[32px] font-semibold tracking-[-0.02em] leading-none mb-1 ${
                isB ? 'font-headline text-tb-dark' : 'text-brand-black'
              }`}>$0</div>
              <div className={`${mono} text-[11px] text-gray-300 mb-4`}>no credit card</div>
              <div className={`text-[13px] leading-relaxed mb-5 ${
                isB ? 'font-headline text-gray-400' : 'text-gray-400'
              }`}>Newsletter, mobile app, and 2 live markets in Signal. The free preview that earns trust.</div>
              <div className={`h-px mb-5 ${isB ? 'bg-tb-border' : 'bg-border-thin'}`} />
              <div className="flex flex-col gap-2 mb-6">
                {['2 live markets in Signal dashboard', 'Weekly Substack digest', 'Mobile app (Farcaster + World)', 'Forecaster leaderboard', 'Q Called It archive (public)'].map((f) => (
                  <div key={f} className={`text-[12px] ${isB ? 'font-headline text-gray-400' : 'text-gray-400'}`}>{f}</div>
                ))}
              </div>
              <div className="mt-auto">
                <button className={`w-full text-center text-xs uppercase px-5 py-2.5 border transition-colors ${
                  isB
                    ? 'font-mono tracking-[0.08em] border-tb-border text-gray-500 hover:border-tb-primary hover:text-tb-dark'
                    : 'font-mono tracking-wide rounded-sm border-border-thin text-gray-500 hover:border-gray-400 hover:text-brand-black'
                }`}>
                  Get started free
                </button>
              </div>
            </div>

            {/* Signal — featured */}
            <div className={`p-7 flex flex-col ${
              isB ? 'bg-tb-dark border border-tb-border rounded-tb-card' : 'bg-brand-black rounded-sm'
            }`}>
              <div className={`${mono} text-[10px] uppercase tracking-wide mb-2 ${
                isB ? 'text-tb-primary' : 'text-gray-600'
              }`}>Signal</div>
              <div className={`text-[32px] font-semibold tracking-[-0.02em] leading-none mb-1 ${
                isB ? 'font-headline text-gray-200' : 'text-gray-200'
              }`}>$[X]</div>
              <div className={`${mono} text-[11px] text-gray-600 mb-4`}>/month · cancel anytime</div>
              <div className={`text-[13px] leading-relaxed mb-5 ${
                isB ? 'font-headline text-gray-500' : 'text-gray-500'
              }`}>Full access to Signal. Every market, every factor, all the evidence. Updated daily.</div>
              <div className="h-px bg-gray-800 mb-5" />
              <div className="flex flex-col gap-2 mb-6">
                {['All 600+ live markets', 'Full key factors per market', 'Sourced evidence chains', 'Historical track record', 'Email alerts on spread changes', 'Early access to new markets'].map((f) => (
                  <div key={f} className={`text-[12px] ${isB ? 'font-headline text-gray-500' : 'text-gray-500'}`}>{f}</div>
                ))}
              </div>
              <div className="mt-auto">
                <button className={`w-full text-center text-xs uppercase px-5 py-2.5 border transition-colors ${
                  isB
                    ? 'font-mono tracking-[0.08em] border-gray-700 text-gray-400 hover:border-tb-primary hover:text-gray-200'
                    : 'font-mono tracking-wide rounded-sm border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-200'
                }`}>
                  Subscribe
                </button>
              </div>
            </div>

            {/* Platform / API */}
            <div className={`p-7 flex flex-col ${
              isB ? 'border border-tb-border rounded-tb-card bg-white' : 'border border-border-thin rounded-sm bg-white'
            }`}>
              <div className={`${mono} text-[10px] uppercase tracking-wide text-gray-400 mb-2`}>Platform / API</div>
              <div className={`text-[32px] font-semibold tracking-[-0.02em] leading-none mb-1 ${
                isB ? 'font-headline text-tb-dark' : 'text-brand-black'
              }`}>Custom</div>
              <div className={`${mono} text-[11px] text-gray-300 mb-4`}>volume-based</div>
              <div className={`text-[13px] leading-relaxed mb-5 ${
                isB ? 'font-headline text-gray-400' : 'text-gray-400'
              }`}>For platforms integrating signal into their markets, and developers building on the API at scale.</div>
              <div className={`h-px mb-5 ${isB ? 'bg-tb-border' : 'bg-border-thin'}`} />
              <div className="flex flex-col gap-2 mb-6">
                {['Full API access', 'Volume pricing on API calls', 'Co-branding options', 'Dedicated integration support', 'SLA and uptime guarantees', 'Custom market coverage requests'].map((f) => (
                  <div key={f} className={`text-[12px] ${isB ? 'font-headline text-gray-400' : 'text-gray-400'}`}>{f}</div>
                ))}
              </div>
              <div className="mt-auto">
                <button className={`w-full text-center text-xs uppercase px-5 py-2.5 border transition-colors ${
                  isB
                    ? 'font-mono tracking-[0.08em] border-tb-border text-gray-500 hover:border-tb-primary hover:text-tb-dark'
                    : 'font-mono tracking-wide rounded-sm border-border-thin text-gray-500 hover:border-gray-400 hover:text-brand-black'
                }`}>
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature comparison */}
      <section className={`border-b ${
        isB ? 'bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y border-tb-border' : 'bg-surface-off border-border-thin py-20 px-10 max-md:px-6'
      }`}>
        <div className={isB ? '' : 'max-w-content mx-auto'}>
          <h2 className={`font-semibold tracking-[-0.02em] mb-6 ${
            isB
              ? 'font-headline font-bold text-[clamp(2rem,4vw,3.5rem)] uppercase text-tb-dark leading-[0.9]'
              : 'text-[28px] text-brand-black'
          }`}>Feature comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr className={`border-b-2 ${isB ? 'border-tb-dark' : 'border-border-thin'}`}>
                  <th className={`text-left py-3 pr-4 ${mono} text-[10px] text-gray-400 uppercase tracking-wide font-normal w-[40%]`}>Feature</th>
                  <th className={`text-center py-3 px-3 ${mono} text-[10px] text-gray-400 uppercase tracking-wide font-normal`}>Free</th>
                  <th className={`text-center py-3 px-3 ${mono} text-[10px] uppercase tracking-wide font-medium ${
                    isB ? 'text-tb-primary' : 'text-brand-black'
                  }`}>Signal</th>
                  <th className={`text-center py-3 px-3 ${mono} text-[10px] text-gray-400 uppercase tracking-wide font-normal`}>Platform</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Live markets in Signal', free: '2', signal: '600+', platform: '600+' },
                  { feature: 'Key factors per market', free: '–', signal: '✓', platform: '✓' },
                  { feature: 'Sourced evidence chains', free: '–', signal: '✓', platform: '✓' },
                  { feature: 'Email alerts on spread changes', free: '–', signal: '✓', platform: '✓' },
                  { feature: 'API access', free: '–', signal: '–', platform: '✓' },
                  { feature: 'Substack + mobile app', free: '✓', signal: '✓', platform: '✓' },
                ].map((row, i) => (
                  <tr key={row.feature} className={i < 5 ? `border-b ${isB ? 'border-tb-border' : 'border-surface-light'}` : ''}>
                    <td className={`py-3 pr-4 ${isB ? 'font-headline text-gray-500' : 'text-gray-500'}`}>{row.feature}</td>
                    <td className={`text-center py-3 px-3 ${row.free === '–' ? 'text-gray-300' : 'text-gray-400'}`}>{row.free}</td>
                    <td className={`text-center py-3 px-3 ${
                      row.signal === '✓' ? 'text-green-700'
                      : row.signal === '–' ? 'text-gray-300'
                      : isB ? 'text-tb-primary font-medium' : 'text-brand-black font-medium'
                    }`}>{row.signal}</td>
                    <td className={`text-center py-3 px-3 ${
                      row.platform === '✓' ? 'text-green-700'
                      : row.platform === '–' ? 'text-gray-300'
                      : isB ? 'text-tb-dark font-medium' : 'text-brand-black font-medium'
                    }`}>{row.platform}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
