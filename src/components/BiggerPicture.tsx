'use client'

import Link from 'next/link'
import { useTheme } from '@/lib/ThemeContext'

export default function BiggerPicture() {
  const { theme } = useTheme()
  const isB = theme === 'B'

  return (
    <section className={isB
      ? 'bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y'
      : 'border-b border-border-thin py-20 px-10 max-md:px-6'
    }>
      <div className={isB ? 'max-w-[680px]' : 'max-w-content mx-auto'}>
        <span className={`block uppercase mb-4 ${isB
          ? 'font-mono text-tb-primary text-[11px] tracking-[0.08em]'
          : 'font-mono text-[11px] tracking-eyebrow text-gray-500'
        }`}>
          Where this is going
        </span>
        <h2 className={isB
          ? 'font-headline font-bold uppercase text-tb-dark text-[32px] lg:text-[48px] leading-[0.95] tracking-[-0.02em] mb-4'
          : 'text-[28px] font-semibold tracking-[-0.02em] leading-[1.2] mb-4 text-brand-black'
        }>
          Q is the first.<br /> More agents are coming.
        </h2>
        <p className={`text-[15px] leading-[1.75] mb-8 ${isB ? 'text-tb-dark/70' : 'text-gray-500'}`}>
          Each agent has its own vault, its own track record, and its own data.
        </p>
        <Link
          href="/about"
          className={`font-mono text-[13px] uppercase tracking-[0.08em] transition-colors ${isB
            ? 'text-tb-primary hover:text-tb-cta-hover'
            : 'text-gray-400 hover:text-brand-black'
          }`}
        >
          Learn more about Quotient &rarr;
        </Link>
      </div>
    </section>
  )
}
