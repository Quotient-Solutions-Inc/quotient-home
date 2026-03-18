'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tabs = [
  { label: 'Track Record', href: '/agents/q/track-record' },
  { label: 'API', href: '/agents/q/api' },
]

export default function QTabBar() {
  const pathname = usePathname()

  return (
    <div className="sticky z-40 border-b top-[44px] bg-white border-tb-border">
      <div className='px-8 lg:px-tb-section-x'>
        <div className="flex items-center gap-8 max-md:gap-4 overflow-x-auto -mb-px">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`
                  font-mono text-[11px] uppercase whitespace-nowrap py-3 border-b-2 transition-colors
                  tracking-[0.08em]
                  ${
                    isActive
                      ? 'border-tb-primary text-tb-dark'
                      : 'border-transparent text-gray-400 hover:text-tb-dark'
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
