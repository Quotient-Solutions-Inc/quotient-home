'use client'

import { useTheme } from '@/lib/ThemeContext'

export default function BridgeParagraph() {
  const { theme } = useTheme()
  const isB = theme === 'B'

  return (
    <section className={isB
      ? 'bg-tb-cream rounded-tb-card px-8 lg:px-10 py-12 lg:py-16'
      : 'bg-[#F8F7F5] py-14 px-10 max-md:px-6'
    }>
      <div className={isB ? 'max-w-[680px]' : 'max-w-[620px] mx-auto text-center'}>
        <span className={`block uppercase mb-4 ${isB
          ? 'font-mono text-tb-primary text-[11px] tracking-[0.09em]'
          : 'font-mono text-[10px] text-gray-400 tracking-eyebrow'
        }`}>
          What makes it different
        </span>
        <p className={isB
          ? 'text-tb-dark text-[17px] lg:text-[20px] leading-[1.65]'
          : 'text-[15px] text-gray-500 leading-[1.75]'
        }>
          {isB && <span className="font-headline italic">Anyone can build an agent. The missing piece is knowing which ones are good. </span>}
          {isB ? (
            'Every agent on Quotient has a public track record. Every forecast is sourced. Every claim is checkable.'
          ) : (
            'Anyone can build an agent. The missing piece is knowing which ones are good. Every agent on Quotient has a public track record. Every forecast is sourced. Every claim is checkable.'
          )}
        </p>
      </div>
    </section>
  )
}
