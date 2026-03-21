import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import GridBlocksAnimation from '@/components/GridBlocksAnimation'

// DOCS LINK — Jordan to provide URL
const DOCS_HREF = 'https://dev.quotient.social'

export default function BuildWithQPage() {
  return (
    <div className='min-h-screen bg-tb-page pt-[44px]'>
      <Nav />

      <main className="flex flex-col p-tb-gap pt-0 w-full">
        <div className="flex flex-col gap-tb-gap">
          {/* Section 1: Hero + Available Data */}
          <section className='bg-tb-page rounded-tb-card'>
            <GridBlocksAnimation />
            <HeroAndAvailableData />
          </section>

          {/* Section 2: Core Endpoints */}
          <EndpointOverview />

          {/* Section 3: What You Can Build */}
          <WhatYouCanBuild />

          {/* Section 4: Get in Touch CTA */}
          <GetInTouchCTA />

          <Footer />
        </div>
      </main>
    </div>
  )
}

function HeroAndAvailableData() {
  return (
    <div className='px-8 lg:px-tb-section-x pb-tb-section-y'>
      <div className="max-w-content mx-auto">
      {/* Hero */}
      <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-tb-primary mb-4">
        For Agents and Developers
      </span>
      <h1 className="font-headline font-bold text-[28px] lg:text-[48px] leading-[0.95] text-tb-dark tracking-[-0.02em] mb-4 uppercase">
        BUILD WITH Q&apos;S INTELLIGENCE.
      </h1>
      <p className="text-[15px] lg:text-[16px] leading-[1.7] text-tb-dark/70 mb-12">
        Access Q&apos;s forecasts, signals, and evidence chains.
      </p>

      {/* Available Data */}
      <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-tb-primary mb-6">
        Available Data
      </span>
      <div className="grid grid-cols-5 max-md:grid-cols-2 gap-3">
        {[
          { title: 'Covered Markets', desc: 'Markets with forecast status' },
          { title: 'Divergence Signals', desc: 'Markets where Q diverges from market odds' },
          { title: 'Intelligence Briefings', desc: 'Full intelligence briefing per market' },
          { title: 'Analyst Signals', desc: 'Paginated analyst signals' },
          { title: 'Equities Impact', desc: 'Equities affected by Q forecasted markets' },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-tb-cream rounded-[10px] p-5"
            style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
          >
            <h3 className="text-[16px] font-semibold mb-2 text-tb-dark">
              {item.title}
            </h3>
            <p className="text-[14px] leading-relaxed text-tb-dark/60">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

function EndpointOverview() {
  return (
    <section className='bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y'>
      <div className="max-w-content mx-auto">
        <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-tb-primary mb-4">
          Developer Access
        </span>
        <h2 className="font-headline font-bold text-[28px] lg:text-[36px] leading-[0.95] text-tb-dark tracking-[-0.02em] mb-4 uppercase">
          CORE ENDPOINTS
        </h2>
        <p className="text-[15px] lg:text-[16px] leading-[1.7] text-tb-dark/70 mb-8">
          Structured JSON, confidence scores, and sourced evidence across all tracked markets.
        </p>
        <div className="flex flex-col gap-4">
          {[
            {
              endpoint: '/v1/markets',
              desc: 'List all active markets with current Q forecasts and market odds'
            },
            {
              endpoint: '/v1/signals/:id',
              desc: 'Get detailed signal for a specific market including factors and evidence'
            },
            {
              endpoint: '/v1/intelligence',
              desc: 'Aggregate intelligence feed across all markets with filtering'
            },
          ].map((item) => (
            <div
              key={item.endpoint}
              className="flex items-start gap-4 p-4 bg-white rounded-[10px]"
              style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
            >
              <code className="font-mono text-[13px] text-tb-primary bg-tb-primary/10 px-3 py-1 rounded whitespace-nowrap">
                {item.endpoint}
              </code>
              <p className="text-[14px] leading-relaxed text-tb-dark/70">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          {/* DOCS LINK — Jordan to provide URL */}
          <Link
            href={DOCS_HREF}
            className="font-mono text-[13px] uppercase tracking-[0.08em] transition-colors text-tb-primary hover:text-tb-cta-hover"
          >
            View full API documentation &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}

function WhatYouCanBuild() {
  const examples = [
    {
      title: 'Trading Agents',
      desc: 'Autonomous agents that trade on Q\'s signals with custom risk parameters.',
    },
    {
      title: 'Research Agents',
      desc: 'AI assistants that incorporate Q\'s forecasts and evidence into analysis workflows.',
    },
    {
      title: 'Market Intelligence Dashboards',
      desc: 'Custom dashboards that surface Q\'s insights for specific domains or portfolios.',
    },
  ]

  return (
    <section className='bg-tb-page rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y'>
      <div className="max-w-content mx-auto">
        <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-tb-primary mb-4">
          Use Cases
        </span>
        <h2 className="font-headline font-bold text-[28px] lg:text-[36px] leading-[0.95] text-tb-dark tracking-[-0.02em] mb-8 uppercase">
          WHAT YOU CAN BUILD
        </h2>
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-3">
          {examples.map((item) => (
            <div
              key={item.title}
              className="rounded-[10px] p-6 bg-tb-cream"
              style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
            >
              <h3 className="text-[16px] font-semibold mb-2 text-tb-dark">
                {item.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-tb-dark/60">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function GetInTouchCTA() {
  return (
    <section className='bg-tb-primary rounded-tb-card flex items-center justify-center px-8 max-md:px-6 py-16 lg:py-24 relative overflow-hidden'>
      <div className='text-center max-w-[680px] relative z-10'>
        <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-white/80 mb-4">
          Get Started
        </span>
        <h2 className='font-headline font-bold tracking-[-0.01em] text-[28px] lg:text-[40px] leading-[0.95] text-white mb-6 uppercase'>
          READY TO BUILD?
        </h2>
        <p className="text-[15px] leading-relaxed mb-8 text-white/90">
          Everything you need is in the documentation.
        </p>
        {/* DOCS LINK — Jordan to provide URL */}
        <Link
          href={DOCS_HREF}
          className="inline-block text-[13px] font-mono uppercase tracking-[0.08em] px-7 py-3 border border-tb-page text-white bg-transparent rounded-tb-card hover:bg-tb-page hover:text-tb-dark transition-all duration-200 ease-out"
        >
          View API Docs &rarr;
        </Link>
      </div>
    </section>
  )
}
