import Link from 'next/link'
import OpenModalButton from './OpenModalButton'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-content mx-auto px-10 max-md:px-6 pt-28 pb-20 max-md:pt-20">
        <div className="relative z-10">
          {/* Headline */}
          <h1 className="text-[48px] max-md:text-[34px] font-normal leading-[1.12] tracking-[-0.02em] mb-6">
            <span className="font-headline">World events prediction markets are noisy.</span>
            <br />
            <span className="font-headline text-[48px] max-md:text-[34px] text-brand-blue">Quotient finds the signal.</span>
          </h1>

          {/* Subhead */}
          <p className="text-[16px] text-gray-500 leading-relaxed max-w-[540px] mb-9">
            Agentic analysis, verified human judgment, and actionable intelligence
            across prediction markets, commodities, and global equity portfolios.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <OpenModalButton />
            <Link
              href="/signal"
              className="text-gray-500 text-[13px] font-mono uppercase tracking-wide px-6 py-3 border border-border-thin hover:border-gray-400 transition-colors"
            >
              Explore Signal
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
