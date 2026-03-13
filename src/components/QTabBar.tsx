'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/lib/ThemeContext'

const tabs = [
  { label: 'Signal', href: '/agents/q/signal' },
  { label: 'API', href: '/agents/q/api' },
]

export default function QTabBar() {
  const pathname = usePathname()
  const { theme } = useTheme()
  const isB = theme === 'B'

  return (
    <div
      className={`sticky z-40 border-b ${
        isB
          ? 'top-[44px] bg-white border-tb-border'
          : 'top-12 bg-white border-border-thin'
      }`}
    >
      <div className={isB ? 'px-8 lg:px-tb-section-x' : 'max-w-content mx-auto px-10 max-md:px-6'}>
        <div className="flex items-center gap-8 max-md:gap-4 overflow-x-auto -mb-px">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`
                  font-mono text-[11px] uppercase whitespace-nowrap py-3 border-b-2 transition-colors
                  ${isB ? 'tracking-[0.08em]' : 'tracking-wide'}
                  ${
                    isActive
                      ? isB
                        ? 'border-tb-primary text-tb-dark'
                        : 'border-brand-black text-brand-black'
                      : isB
                        ? 'border-transparent text-gray-400 hover:text-tb-dark'
                        : 'border-transparent text-gray-400 hover:text-brand-black'
                  }
                `}
              >
                {tab.label}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
