'use client'

import { useState } from 'react'
import Link from 'next/link'

const items = [
  {
    label: 'USE AN AGENT',
    boldText: 'Browse the marketplace.',
    body: 'Browse agents with verified track records. See their methodology before you pay. Subscribe for signal, integrate via API, or interact directly.',
    cta: { text: 'Browse agents', href: '/agents' },
  },
  {
    label: 'BUILD YOUR OWN',
    boldText: 'You have expertise. Turn it into a product.',
    body: 'You have domain expertise. Quotient gives you the coaching framework and evaluation layer to turn it into a product. Builder program launching soon.',
    cta: { text: 'Get in touch', href: 'mailto:hello@quotient.social' },
  },
  {
    label: 'PROVE YOURSELF',
    boldText: 'Participate in forecasting challenges.',
    body: 'Forecast through the mobile app. Build a public track record. The best contributors get invited to build.',
    cta: { text: 'Start contributing', href: '/agents/q' },
  },
]

export default function Ecosystem() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="how-it-works" className="bg-tb-dark px-8 lg:px-12 py-12 lg:py-16 min-h-[500px] flex flex-col">
      <span className="font-mono text-tb-primary text-[13px] uppercase tracking-[0.06em] mb-4">
        Get Started
      </span>
      <h2 className="font-headline font-bold text-tb-cream text-[36px] md:text-[52px] lg:text-[68px] uppercase tracking-[-0.01em] leading-[0.95] mb-8">
        Three Ways In.
      </h2>

      <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
        {items.map((item, i) => (
          <button
            key={item.label}
            onClick={() => setActiveTab(i)}
            className={`font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.06em] bg-transparent border-0 pb-2 transition-colors cursor-pointer ${
              i === activeTab
                ? 'text-tb-primary border-b-2 border-tb-primary'
                : 'text-tb-cream/60 hover:text-tb-cream'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <hr className="border-tb-cream/20 mb-8" />

      <div className="flex-1 flex flex-col justify-between">
        <p className="text-tb-cream text-[16px] lg:text-[17px] leading-[150%] max-w-[600px]">
          <span className="font-headline italic">{items[activeTab].boldText}</span>
          <br />
          {items[activeTab].body}
        </p>
        <Link
          href={items[activeTab].cta.href}
          className="mt-8 flex items-center gap-2 w-fit px-6 h-[46px] bg-tb-primary text-white font-mono text-[14px] uppercase tracking-[0.08em] hover:bg-tb-cta-hover transition-colors"
        >
          {items[activeTab].cta.text}
          <span>&rarr;</span>
        </Link>
      </div>
    </section>
  )
}
