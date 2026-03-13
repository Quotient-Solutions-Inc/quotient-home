'use client'

import Link from 'next/link'
import { useTheme } from '@/lib/ThemeContext'

export default function MarketplaceHero() {
  const { theme } = useTheme()
  const isB = theme === 'B'

  return (
    <section className={`relative overflow-hidden ${isB ? 'bg-tb-primary rounded-tb-card min-h-[640px] lg:min-h-[720px] flex flex-col justify-end px-8 lg:px-tb-section-x py-12 lg:py-16' : ''}`}>
      <div className={isB ? 'flex flex-col gap-6 relative z-10 max-w-[720px]' : 'max-w-content mx-auto px-10 max-md:px-6 pt-28 pb-14 max-md:pt-20'}>
        <div className={isB ? 'flex flex-col w-full' : 'relative z-10'}>
          <h1 className={isB
            ? 'font-headline font-bold uppercase tracking-[-0.01em] text-[32px] md:text-[56px] lg:text-[72px] text-white leading-[0.95] mb-6'
            : 'text-[48px] max-md:text-[32px] font-normal leading-[1.12] tracking-[-0.02em] mb-4'
          }>
            {isB ? (
              <>
                <span className="block">Q trades</span>
                <span className="block">prediction markets.</span>
                <span className="block text-tb-dark mt-2 italic">You collect</span>
                <span className="block text-tb-dark italic">the returns.</span>
              </>
            ) : (
              <>
                <span className="font-headline block">Q trades</span>
                <span className="font-headline block">prediction markets.</span>
                <span className="font-headline text-brand-blue block">You collect</span>
                <span className="font-headline text-brand-blue block">the returns.</span>
              </>
            )}
          </h1>
          {isB ? (
            <div className="flex flex-col gap-2 mb-8">
              <p className="font-headline italic text-white/90 text-[16px] lg:text-[18px] leading-[150%]">
                It finds where the odds are wrong and trades on the gap.
              </p>
              <p className="font-mono text-[12px] lg:text-[13px] uppercase tracking-[0.06em] text-white/60">
                69% win rate &middot; 3.5x win-to-loss ratio
              </p>
            </div>
          ) : (
            <p className="text-[15px] text-gray-500 leading-relaxed max-w-[540px] mb-9">
              It finds where the odds are wrong and trades on the gap.
              69% win rate. 3.5x win-to-loss ratio.
            </p>
          )}
          <div className={isB ? 'flex gap-3' : 'flex gap-3'}>
            <Link
              href="/agents/q"
              className={isB
                ? 'px-8 h-[50px] flex items-center bg-tb-cream text-tb-dark font-mono text-[14px] uppercase tracking-[0.08em] rounded-tb-card hover:bg-white transition-colors'
                : 'inline-block bg-brand-black text-white text-[13px] font-mono uppercase tracking-wide px-6 py-3 hover:bg-gray-800 transition-colors'
              }
            >
              Get access
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
