'use client'

import { useState } from 'react'
import { useTheme } from '@/lib/ThemeContext'

export default function FAQ({
  title,
  items,
}: {
  title: string
  items: { q: string; a: string }[]
}) {
  const { theme } = useTheme()
  const isB = theme === 'B'

  return (
    <section
      className={isB
        ? 'bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y'
        : 'bg-surface-off border-b border-border-thin py-20 px-10 max-md:px-6'
      }
    >
      <div className={isB ? '' : 'max-w-content mx-auto'}>
        <h2
          className={isB
            ? 'font-headline font-bold uppercase text-tb-dark text-[36px] lg:text-[52px] leading-[0.9] tracking-[-0.01em] mb-8'
            : 'text-[28px] font-semibold tracking-[-0.02em] text-brand-black mb-6'
          }
        >
          {title}
        </h2>
        <div className="flex flex-col">
          {items.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} isB={isB} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ q, a, isB }: { q: string; a: string; isB: boolean }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`cursor-pointer border-b ${isB ? 'border-tb-border' : 'border-border-thin'}`}
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center py-4 gap-4">
        <span className={`text-[15px] font-medium ${isB ? 'text-tb-dark' : 'text-brand-black'}`}>
          {q}
        </span>
        <span className="font-mono text-xs flex-shrink-0 text-gray-300">
          {open ? '−' : '+'}
        </span>
      </div>
      {open && (
        <div className={`text-sm leading-relaxed pb-4 pr-8 ${isB ? 'text-tb-dark/60' : 'text-gray-500'}`}>
          {a}
        </div>
      )}
    </div>
  )
}
