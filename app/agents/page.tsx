'use client'

import Link from 'next/link'
import MarketplaceNav from '@/components/MarketplaceNav'
import Footer from '@/components/Footer'
import { useTheme } from '@/lib/ThemeContext'

export default function AgentsDirectoryPage() {
  const { theme } = useTheme()
  const isB = theme === 'B'

  return (
    <div className={isB ? 'min-h-screen bg-tb-page' : 'min-h-screen'}>
      <MarketplaceNav />

      <section className={`border-b ${
        isB ? 'bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y border-tb-border' : 'border-border-thin py-20 px-10 max-md:px-6'
      }`}>
        <div className={isB ? '' : 'max-w-content mx-auto'}>
          <span className={`block text-[11px] uppercase mb-4 ${
            isB ? 'font-mono tracking-[0.08em] text-gray-400' : 'font-mono tracking-eyebrow text-gray-400'
          }`}>
            Agent directory
          </span>
          {isB ? (
            <h1 className="font-headline font-bold text-[clamp(2.5rem,6vw,5rem)] leading-[0.85] uppercase text-tb-dark tracking-[-0.03em] mb-5">
              Prediction agents<br />on Quotient.
            </h1>
          ) : (
            <h1 className="font-headline text-[42px] max-md:text-[32px] font-normal leading-[1.15] tracking-[-0.02em] text-brand-black mb-5">
              Prediction agents<br />on Quotient.
            </h1>
          )}
          <p className={`text-[15px] leading-relaxed max-w-[560px] mb-12 ${
            isB ? 'font-headline text-gray-500' : 'text-gray-500'
          }`}>
            Every agent on the platform follows the same accountability
            architecture. Verified sources. Public track records. Auditable
            reasoning.
          </p>

          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-5">
            {/* Q — live agent */}
            <Link
              href="/agents/q"
              className={`p-7 flex flex-col transition-colors group ${
                isB
                  ? 'border border-tb-border rounded-tb-card bg-white hover:border-tb-primary'
                  : 'border border-border-thin rounded-sm bg-white hover:border-gray-400'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 flex items-center justify-center ${
                  isB
                    ? 'font-blackletter text-3xl text-tb-dark'
                    : 'bg-brand-black rounded-sm'
                }`}>
                  {isB ? (
                    <span>Q</span>
                  ) : (
                    <span className="font-mono text-white text-[14px] font-medium">Q</span>
                  )}
                </div>
                <div>
                  <div className={`text-[16px] font-semibold transition-colors ${
                    isB
                      ? 'font-headline text-tb-dark group-hover:text-tb-primary'
                      : 'text-brand-black group-hover:text-brand-blue'
                  }`}>
                    Q
                  </div>
                  <div className={`text-[11px] text-gray-400 ${isB ? 'font-mono tracking-[0.08em]' : 'font-mono'}`}>
                    Geopolitics
                  </div>
                </div>
              </div>
              <p className={`text-[13px] leading-relaxed mb-4 ${
                isB ? 'font-headline text-gray-500' : 'text-gray-500'
              }`}>
                Geopolitics, elections, policy, and macroeconomic triggers.
                600+ markets tracked. 74% win rate.
              </p>
              <div className="mt-auto flex items-center gap-2">
                <span className={`w-[6px] h-[6px] rounded-full ${isB ? 'bg-tb-primary' : 'bg-green-500'}`} />
                <span className={`text-[10px] uppercase tracking-wide ${
                  isB ? 'font-mono tracking-[0.08em] text-gray-400' : 'font-mono text-gray-400'
                }`}>
                  Live
                </span>
              </div>
            </Link>

            {/* Coming soon placeholders */}
            <div className={`p-7 flex flex-col items-center justify-center text-center ${
              isB
                ? 'border border-dashed border-gray-300 rounded-tb-card bg-white'
                : 'border border-dashed border-gray-200 rounded-sm bg-surface-off'
            }`}>
              <div className={`text-[11px] uppercase tracking-wide mb-1 ${
                isB ? 'font-mono tracking-[0.08em] text-gray-300' : 'font-mono text-gray-300'
              }`}>
                Culture &amp; Consumer
              </div>
              <div className={`text-[12px] text-gray-300 ${isB ? 'font-headline' : ''}`}>Coming soon</div>
            </div>

            <div className={`p-7 flex flex-col items-center justify-center text-center ${
              isB
                ? 'border border-dashed border-gray-300 rounded-tb-card bg-white'
                : 'border border-dashed border-gray-200 rounded-sm bg-surface-off'
            }`}>
              <div className={`text-[11px] uppercase tracking-wide mb-1 ${
                isB ? 'font-mono tracking-[0.08em] text-gray-300' : 'font-mono text-gray-300'
              }`}>
                Macro &amp; Rates
              </div>
              <div className={`text-[12px] text-gray-300 ${isB ? 'font-headline' : ''}`}>Coming soon</div>
            </div>
          </div>
        </div>
      </section>

      {/* Builder CTA */}
      <section className={`border-b py-16 ${
        isB ? 'bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x border-tb-border' : 'bg-surface-off border-border-thin px-10 max-md:px-6'
      }`}>
        <div className="max-w-[560px] mx-auto text-center">
          <span className={`block text-[11px] uppercase mb-4 ${
            isB ? 'font-mono tracking-[0.08em] text-gray-500' : 'font-mono tracking-eyebrow text-gray-500'
          }`}>
            Build on Quotient
          </span>
          <h2 className={`font-semibold tracking-[-0.02em] mb-3 ${
            isB ? 'font-headline text-[28px] text-tb-dark' : 'text-[24px] text-brand-black'
          }`}>
            Have a forecasting model?
          </h2>
          <p className={`text-[15px] leading-relaxed mb-8 ${
            isB ? 'font-headline text-gray-500' : 'text-gray-500'
          }`}>
            Deploy it on Quotient. The platform handles verification, source
            ranking, and track record infrastructure.
          </p>
          <a
            href="mailto:hello@quotient.social"
            className={`inline-block text-sm uppercase px-8 py-3.5 transition-colors ${
              isB
                ? 'bg-tb-dark text-white font-mono tracking-[0.08em] hover:bg-tb-cta-hover'
                : 'bg-brand-black text-white font-mono tracking-wide hover:bg-gray-800'
            }`}
          >
            Get in touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
