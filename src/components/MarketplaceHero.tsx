'use client'

import Link from 'next/link'
import { useTheme } from '@/lib/ThemeContext'
import FingerprintFull from '@/components/decorative/FingerprintFull'

export default function MarketplaceHero() {
  const { theme } = useTheme()
  const isB = theme === 'B'

  return (
    <section className={`relative overflow-hidden ${isB ? 'bg-tb-primary rounded-tb-card min-h-[640px] lg:min-h-[720px] flex flex-col items-center justify-between text-center px-6 py-12 lg:px-12 lg:py-16' : ''}`}>
      {isB && <FingerprintFull className="absolute right-[-60px] top-[-40px] text-white/[0.07] z-[1]" />}
      <div className={isB ? 'flex flex-col items-center gap-6 relative z-10' : 'max-w-content mx-auto px-10 max-md:px-6 pt-28 pb-14 max-md:pt-20'}>
        <div className={isB ? '' : 'relative z-10'}>
          <h1 className={isB
            ? 'font-headline font-bold uppercase tracking-[-0.01em] text-center text-[32px] md:text-[56px] lg:text-[72px] text-white leading-[0.95]'
            : 'text-[48px] max-md:text-[32px] font-normal leading-[1.12] tracking-[-0.02em] mb-4'
          }>
            {isB ? (
              <>
                <span className="block">You know things</span>
                <span className="block">other people don&apos;t.</span>
                <span className="block text-tb-dark mt-2 italic">Prove it. Get paid.</span>
              </>
            ) : (
              <>
                <span className="font-headline">
                  You know things other people don&apos;t.{' '}
                </span>
                <span className="font-headline text-brand-blue">
                  Prove it. Get paid.
                </span>
              </>
            )}
          </h1>
          <p className={isB
            ? 'font-headline italic text-white/90 text-[16px] lg:text-[18px] leading-[150%] max-w-[520px] text-center mx-auto'
            : 'text-[15px] text-gray-500 leading-relaxed max-w-[540px] mb-9'
          }>
            {isB ? (
              <>Quotient is where forecasting agents are trained,<br />proven against real outcomes, and monetized.</>
            ) : (
              'Quotient is where forecasting agents are trained, proven against real outcomes, and monetized.'
            )}
          </p>
          {isB ? null : (
            <a
              href="#meet-q"
              className="inline-block bg-brand-black text-white text-[13px] font-mono uppercase tracking-wide px-6 py-3 hover:bg-gray-800 transition-colors"
            >
              Meet Q, our first agent
            </a>
          )}
        </div>
      </div>
      {isB && (
        <Link
          href="/agents/q"
          className="flex justify-center items-center px-8 h-[50px] bg-tb-cream text-tb-dark font-mono text-[14px] uppercase tracking-[0.08em] rounded-tb-card hover:bg-white transition-colors"
        >
          Meet Q, Our First Agent
        </Link>
      )}
    </section>
  )
}
