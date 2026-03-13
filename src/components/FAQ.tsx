'use client'

import { useState } from 'react'

export default function FAQ({
  title,
  items,
}: {
  title: string
  items: { q: string; a: string }[]
}) {
  return (
    <section className='bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y'>
      <div>
        <h2 className='font-headline font-bold uppercase text-tb-dark text-[36px] lg:text-[52px] leading-[0.9] tracking-[-0.01em] mb-8'>
          {title}
        </h2>
        <div className="flex flex-col">
          {items.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="cursor-pointer border-b border-tb-border"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center py-4 gap-4">
        <span className="text-[15px] font-medium text-tb-dark">
          {q}
        </span>
        <span className="font-mono text-xs flex-shrink-0 text-gray-300">
          {open ? '−' : '+'}
        </span>
      </div>
      {open && (
        <div className="text-sm leading-relaxed pb-4 pr-8 text-tb-dark/60">
          {a}
        </div>
      )}
    </div>
  )
}
