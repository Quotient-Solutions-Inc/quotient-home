'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import QTabBar from '@/components/QTabBar'
import CodeBlock from '@/components/CodeBlock'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function ApiPage() {
  return (
    <div className='min-h-screen bg-tb-page pt-[44px]'>
      <Nav />
      <QTabBar />

      <main className="flex flex-col p-tb-gap pt-0 w-full">
        <div className="flex flex-col gap-tb-gap">
          <ApiHeroB />
          <WhoItsFor />
          <CoreEndpoints />
          <FlexiblePayment />
          <FAQ
            title="API questions"
            items={faqItems}
          />
          <Footer />
        </div>
      </main>
    </div>
  )
}

const faqItems = [
  { q: "What's the rate limit?", a: 'Default rate limit is 100 requests/minute. Volume tiers are available for platforms and agents making high-frequency calls.' },
  { q: 'How does x402 payment work?', a: 'x402 is a micropayment protocol for HTTP APIs. Your agent sends a payment header with each request. No API key management required. We support USDC on Base.' },
  { q: 'How fresh is the data?', a: 'Q updates 7-8 times per day. Breaking news triggers intraday updates on affected markets.' },
  { q: 'Can I access historical data?', a: 'Yes. The /v1/intelligence endpoint includes historical forecast data and resolved market track records.' },
  { q: 'Is there a sandbox environment?', a: 'Yes. sandbox.quotient.social mirrors production with a fixed dataset. Free to use. No payment required.' },
]

function ApiHeroB() {
  return (
    <section className="bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-12 lg:py-16">
      <h1 className="font-headline font-bold text-[32px] lg:text-[48px] leading-[0.95] uppercase text-tb-dark tracking-[-0.02em] mb-4">
        Q&apos;s intelligence layer, via API
      </h1>
      <p className="text-[15px] leading-relaxed max-w-[560px] mb-8 text-tb-dark/70">
        Structured JSON, confidence scores, and sourced evidence across 600+
        geopolitical prediction markets. Built for platforms, wallets, and agents.
      </p>
      <div className="flex gap-3 mb-10">
        <a
          href="https://docs.quotient.social"
          className="inline-block text-[13px] font-mono uppercase tracking-[0.08em] px-7 py-3 bg-tb-dark text-white rounded-tb-card hover:bg-tb-dark/90 transition-colors"
        >
          Start building
        </a>
        <a
          href="https://docs.quotient.social"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[13px] font-mono uppercase tracking-[0.08em] px-7 py-3 border border-tb-dark/20 text-tb-dark rounded-tb-card hover:border-tb-dark/40 transition-colors"
        >
          Read the docs &rarr;
        </a>
      </div>
      <CodeBlock />
    </section>
  )
}

function WhoItsFor() {
  const [activeTab, setActiveTab] = useState<'platforms' | 'agents'>('platforms')

  return (
    <section className='bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y'>
      <div>
        <span className="block text-[11px] uppercase mb-4 font-mono tracking-[0.08em] text-tb-primary">Who it&apos;s for</span>
        <h2 className='font-headline font-bold uppercase text-tb-dark text-[32px] lg:text-[48px] leading-[0.95] tracking-[-0.02em] mb-8'>Built for every layer of the stack</h2>

        {/* Tabs */}
        <div className="flex gap-0 mb-8">
          {[
            { key: 'platforms' as const, label: 'Platforms & Wallets' },
            { key: 'agents' as const, label: 'Agents & Developers' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`font-mono text-[11px] uppercase tracking-[0.08em] px-6 py-3 transition-colors cursor-pointer ${
                activeTab === tab.key
                  ? 'bg-tb-primary text-white rounded-t-[10px]'
                  : 'bg-white/60 text-tb-dark/40 rounded-t-[10px] hover:text-tb-dark'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {activeTab === 'platforms' ? (
          <div className="p-8 bg-white rounded-[10px]">
            <h3 className="text-[20px] font-semibold mb-3 text-tb-dark">
              Increase trading volume with verified intelligence
            </h3>
            <p className="text-[15px] leading-relaxed mb-6 text-tb-dark/70">
              Prediction market platforms and crypto wallets can embed Q&apos;s signal directly alongside markets.
              Give your users conviction to trade, backed by sourced evidence.
            </p>
            <div className="grid grid-cols-3 max-md:grid-cols-1 gap-[8px] mb-6">
              {[
                { title: 'Embed signal', desc: 'Display Q\'s forecast, spread, and key factors alongside each market.' },
                { title: 'Drive volume', desc: 'Users trade more when they have conviction. Q provides the evidence.' },
                { title: 'White-label ready', desc: 'Full API access to build custom integrations for your platform.' },
              ].map((item) => (
                <div key={item.title} className="p-5 bg-tb-cream rounded-[10px]">
                  <div className="font-mono text-[11px] font-bold uppercase tracking-[0.08em] mb-2 text-tb-primary">
                    {item.title}
                  </div>
                  <div className="text-[13px] leading-relaxed text-tb-dark/60">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
            <a
              href="mailto:hello@quotient.social"
              className="inline-block text-[13px] font-mono uppercase tracking-[0.08em] transition-colors text-tb-primary hover:text-tb-cta-hover"
            >
              Contact for platform integration &rarr;
            </a>
          </div>
        ) : (
          <div className="p-8 bg-white rounded-[10px]">
            <h3 className="text-[20px] font-semibold mb-3 text-tb-dark">
              Verified signal for your reasoning pipeline
            </h3>
            <p className="text-[15px] leading-relaxed mb-6 text-tb-dark/70">
              Agents reasoning about news and geopolitics need a signal layer they can trust.
              Q gives your pipeline structured, sourced, accountable intelligence.
            </p>
            <div className="grid grid-cols-3 max-md:grid-cols-1 gap-[8px] mb-6">
              {[
                { title: 'Structured JSON', desc: 'Clean data format with confidence scores, sources, and evidence chains.' },
                { title: 'Auto-discoverable', desc: 'llms.txt, MCP server, and agent skill directory listings included.' },
                { title: 'Agent-native payment', desc: 'x402 micropayments — no API key management. Pay per call with USDC on Base.' },
              ].map((item) => (
                <div key={item.title} className="p-5 bg-tb-cream rounded-[10px]">
                  <div className="font-mono text-[11px] font-bold uppercase tracking-[0.08em] mb-2 text-tb-primary">
                    {item.title}
                  </div>
                  <div className="text-[13px] leading-relaxed text-tb-dark/60">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
            <a
              href="https://docs.quotient.social"
              className="inline-block text-[13px] font-mono uppercase tracking-[0.08em] transition-colors text-tb-primary hover:text-tb-cta-hover"
            >
              Read the docs &rarr;
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

function CoreEndpoints() {
  return (
    <section className='bg-tb-dark rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y'>
      <div>
        <span className="block text-[11px] uppercase mb-4 font-mono tracking-[0.08em] text-tb-primary">Endpoints</span>
        <h2 className='font-headline font-bold uppercase text-tb-cream text-[32px] lg:text-[48px] leading-[0.95] tracking-[-0.01em] mb-4'>Core endpoints</h2>
        <p className="text-[15px] leading-relaxed max-w-[560px] mb-8 text-tb-cream/70">
          Three endpoints cover most use cases. Start with /v1/markets to orient, then pull signal detail per market.
        </p>
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-[8px]">
          {[
            { method: 'GET', path: '/v1/markets', desc: 'All active markets with current odds, Q forecast, and spread. Filterable by category, spread magnitude, platform, and resolution date.' },
            { method: 'GET', path: '/v1/signals/:id', desc: "Full intelligence package for a single market. Q\u2019s forecast, spread, key factors, sourced signals, forecaster attribution." },
            { method: 'GET', path: '/v1/intelligence', desc: "Q\u2019s source rankings, forecaster weights, and evidence chains. For deeper reasoning pipelines." },
          ].map((ep) => (
            <div key={ep.path} className='bg-white/[0.06] rounded-[10px] p-6'>
              <div className="font-mono text-[11px] mb-2 text-tb-primary">{ep.method}</div>
              <div className="font-mono text-[13px] font-medium mb-3 text-tb-cream">{ep.path}</div>
              <div className="text-[13px] leading-relaxed text-tb-cream/50">{ep.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FlexiblePayment() {
  return (
    <section className='bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y'>
      <div>
        <span className="block text-[11px] uppercase mb-4 font-mono tracking-[0.08em] text-tb-primary">Pricing</span>
        <h2 className='font-headline font-bold uppercase text-tb-dark text-[32px] lg:text-[48px] leading-[0.95] tracking-[-0.02em] mb-4'>Flexible payment</h2>
        <p className="text-[15px] leading-relaxed max-w-[560px] mb-8 text-tb-dark/70">
          Agent-native via x402. Human-friendly via Stripe.
        </p>
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-[8px]">
          {[
            { tier: 'Per-call', price: '$0.01', unit: 'per request', desc: 'x402 micropayments for agentic workflows. No API key needed. USDC on Base.', cta: 'Start building' },
            { tier: 'Subscription', price: '$99', unit: 'per month', desc: 'Unlimited calls. Stripe billing for developers and small teams. API key access.', cta: 'Subscribe' },
            { tier: 'Volume', price: 'Custom', unit: 'per month', desc: 'For platforms, wallets, and high-frequency agents. Dedicated support and SLAs.', cta: 'Contact us' },
          ].map((plan) => (
            <div key={plan.tier} className='bg-white rounded-[10px] p-6'>
              <div className="font-mono text-[11px] font-bold uppercase tracking-[0.08em] mb-3 text-tb-primary">
                {plan.tier}
              </div>
              <div className="font-mono text-[28px] font-bold leading-none mb-1 text-tb-dark">
                {plan.price}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-[0.08em] mb-4 text-tb-dark/40">
                {plan.unit}
              </div>
              <div className="text-[13px] leading-relaxed mb-5 text-tb-dark/60">
                {plan.desc}
              </div>
              <a
                href={plan.tier === 'Volume' ? 'mailto:hello@quotient.social' : 'https://docs.quotient.social'}
                className="inline-block text-[13px] font-mono uppercase tracking-[0.08em] transition-colors text-tb-primary hover:text-tb-cta-hover"
              >
                {plan.cta} &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
