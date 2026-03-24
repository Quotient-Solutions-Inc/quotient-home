'use client'

import Link from 'next/link'
import HeroAnimation from './HeroAnimation'
import { APP_HREF } from '@/lib/links'

export default function MarketplaceHero() {
  return (
    <section className="section-shell relative overflow-hidden bg-tb-dark rounded-tb-card py-16 sm:py-20 lg:py-28">
      {/* Full-spread particle animation behind all content */}
      <div className="absolute inset-0 pointer-events-none">
        <HeroAnimation />
      </div>

      {/* Content layer - all content left-aligned, evenly spaced */}
      <div className="max-w-content mx-auto relative z-10 flex flex-col items-start">
        {/* Eyebrow */}
        <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-tb-primary mb-8">
          Agentic Market Intelligence
        </span>

        {/* Headline - 3 lines, left aligned */}
        <h1 className="font-headline font-bold tracking-[-0.01em] text-[26px] sm:text-[30px] md:text-[44px] lg:text-[56px] text-tb-page leading-[1.0] uppercase mb-8">
          WE FIND THE SIGNAL.<br />
          YOU DECIDE<br />
          HOW BIG TO GO.
        </h1>

        {/* Animation line appears here via canvas - spacer for visual balance */}
        <div className="w-full h-[2px] mb-8" />

        {/* Subhead - uses body font Inter */}
        <p className="text-tb-page/70 text-[15px] lg:text-[16px] leading-[1.7] max-w-[560px] mb-8">
          Quotient turns global signals into high conviction forecasts, surfacing mispriced markets before the crowd catches up.
        </p>

        {/* Single CTA - white outline at rest, orange fill on hover */}
        <Link
          href={APP_HREF}
          className="px-6 sm:px-8 h-[48px] sm:h-[50px] flex items-center border border-tb-page text-tb-page font-mono text-[13px] sm:text-[14px] uppercase tracking-[0.08em] rounded-tb-card hover:bg-tb-primary hover:border-tb-primary transition-all duration-200 ease-out"
        >
          Launch
        </Link>
      </div>
    </section>
  )
}
