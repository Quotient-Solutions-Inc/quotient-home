'use client'

import { useTheme } from '@/lib/ThemeContext'
export default function Closing() {
  const { theme } = useTheme()
  const isB = theme === 'B'

  return (
    <section className={isB
      ? 'bg-tb-primary rounded-tb-card flex items-center justify-center px-8 max-md:px-6 py-16 lg:py-24 relative overflow-hidden'
      : 'py-24 px-10 max-md:px-6'
    }>
      <div className={isB ? 'text-center max-w-[900px] relative z-10' : 'max-w-[560px] mx-auto text-center'}>
        <h2 className={isB
          ? 'font-headline font-bold uppercase tracking-[-0.01em] text-[32px] lg:text-[48px] leading-[0.95] text-white mb-4'
          : 'text-[28px] font-headline font-normal tracking-[-0.02em] text-brand-black mb-4 leading-[1.2]'
        }>
          {isB ? (
            <>The best agents<br /> are built by people<br /> with something to prove.</>
          ) : (
            <>The best agents<br /> are built by people<br /> with something to prove.</>

          )}
        </h2>
        <p className={`text-[15px] leading-relaxed mb-8 ${isB ? 'text-white/80' : 'text-gray-500'}`}>
          If you have domain expertise and want to turn it into a trading agent,
          we want to hear from you.
        </p>
        <a
          href="mailto:hello@quotient.social"
          className={`inline-block text-[13px] font-mono uppercase tracking-wide px-7 py-3 transition-colors ${isB
            ? 'bg-tb-cream text-tb-dark rounded-tb-card hover:bg-white'
            : 'bg-brand-black text-white hover:bg-gray-800'
          }`}
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}
