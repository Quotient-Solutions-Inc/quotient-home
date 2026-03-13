'use client'

import { useTheme } from '@/lib/ThemeContext'

export default function Contributors({
  subheadline = 'The signal gets sharper with you.',
}: {
  subheadline?: string
}) {
  const { theme } = useTheme()
  const isB = theme === 'B'

  return (
    <div
      className={isB
        ? 'bg-tb-cream rounded-tb-card py-12 px-8 lg:px-tb-section-x'
        : 'bg-gray-100 border-t border-border-thin py-12 px-10 max-md:px-6'
      }
    >
      <div className={`flex items-center justify-between gap-10 max-md:flex-col max-md:items-start ${isB ? '' : 'max-w-content mx-auto'}`}>
        <div>
          <span className={`block font-mono text-[11px] uppercase mb-2.5 ${isB
            ? 'tracking-[0.08em] text-tb-primary'
            : 'tracking-eyebrow text-gray-400'
          }`}>
            Contributors
          </span>
          <h2 className={`text-[26px] font-semibold tracking-[-0.01em] mb-2 ${isB ? 'text-tb-dark' : 'text-brand-black'}`}>
            {subheadline}
          </h2>
          <p className={`text-sm leading-relaxed max-w-[480px] ${isB ? 'text-tb-dark/60' : 'text-gray-500'}`}>
            Verified forecasters earn influence in Q&apos;s context graph. Track
            record is the only credential that matters.
          </p>
        </div>
        <div className="flex-shrink-0">
          <button
            className={`font-mono text-xs uppercase px-5 py-2.5 border whitespace-nowrap transition-colors ${isB
              ? 'tracking-[0.08em] border-tb-dark text-tb-dark/60 rounded-tb-card hover:border-tb-primary hover:text-tb-primary'
              : 'tracking-wide border-border-thin text-gray-500 rounded-sm hover:border-gray-400 hover:text-brand-black'
            }`}
          >
            Contribute to earn
          </button>
        </div>
      </div>
    </div>
  )
}
