import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ContributorLeaderboard from '@/components/ContributorLeaderboard'
import { buildPageMetadata } from '@/lib/metadata'

export const metadata = buildPageMetadata({
  title: 'About',
  description:
    'Learn how Quotient combines structured AI reasoning, broad source coverage, and contributor signal to improve market forecasts.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-tb-page pt-[44px]'>
      <Nav />

      <main id="main-content" className="flex flex-col p-tb-gap pt-0 w-full">
        <div className="flex flex-col gap-tb-gap">
          <AboutHero />
          <WhatQuotientIs />
          <ImprovementLoop />
          <WhereThisIsGoing />
          <ContributorLeaderboard />
          <WhyThisTeam />
          <Footer />
        </div>
      </main>
    </div>
  )
}

function AboutHero() {
  return (
    <section className="bg-tb-dark rounded-tb-card px-8 lg:px-tb-section-x py-16 lg:py-24">
      <div className="max-w-content mx-auto">
        {/* Content with 3px orange left border */}
        <div className="border-l-[3px] border-tb-primary pl-5">
          <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-tb-primary mb-3">
            About Quotient
          </span>
          <h1 className="font-headline font-bold text-[32px] lg:text-[48px] leading-[0.95] text-white uppercase tracking-[-0.02em] mb-4 max-w-[640px]">
            Turns market noise<br />
            into actionable<br />
            trading strategies.
          </h1>
          <p className="text-[15px] leading-relaxed text-white/70 max-w-[560px]">
            We combine broad source coverage, structured AI reasoning, and human contributor signal to surface where consensus breaks down.
          </p>
        </div>
      </div>
    </section>
  )
}

function WhatQuotientIs() {
  return (
    <section className='bg-tb-page rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y'>
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-12 max-md:gap-8 max-w-[900px]">
          <div>
            <div className="font-mono text-[10px] uppercase mb-3 pb-2 tracking-[0.08em] text-tb-dark/50 border-b border-tb-border">
              The problem
            </div>
            <p className="text-[15px] leading-[1.8] text-tb-dark/70">
              People with real expertise make critical calls every day, but there&apos;s no way to verify who&apos;s actually good, scale what they know, or build a business around it.
            </p>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase mb-3 pb-2 tracking-[0.08em] text-tb-dark/50 border-b border-tb-border">
              Quotient
            </div>
            <p className="text-[15px] leading-[1.8] text-tb-dark/70 mb-4">
              Build a forecasting agent. Prove it against real outcomes. Monetize it through signal subscriptions, API access, and managed vaults.
            </p>
            <p className="text-[15px] leading-[1.8] text-tb-dark/70">
              Q is the first agent &mdash; geopolitics, 85% win rate across 700+ markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ImprovementLoop() {
  const steps = [
    {
      n: '01',
      title: 'Forecast',
      desc: 'Q analyzes markets, sources context, and assigns probabilities with structured confidence.',
    },
    {
      n: '02',
      title: 'Review',
      desc: 'Contributors surface context, flag errors, and add signal that Q may have missed.',
    },
    {
      n: '03',
      title: 'Learn',
      desc: 'Every resolved market feeds back into the system. Q gets sharper with each outcome.',
    },
  ]

  return (
    <section className='bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y'>
      <div className="max-w-content mx-auto">
        <span className="block text-[11px] uppercase mb-3 font-mono tracking-[0.08em] text-tb-primary">
          The Improvement Loop
        </span>
        <h2 className='font-headline font-bold uppercase text-tb-dark text-[24px] lg:text-[36px] leading-[0.95] tracking-[-0.02em] mb-2'>
          How Quotient Gets Better
        </h2>
        <p className="text-[15px] leading-[1.7] max-w-[560px] mb-8 text-tb-dark/60">
          Quotient improves through a loop of forecasting, review, and feedback &mdash; each cycle tightening the signal.
        </p>

        <div className="flex items-start max-md:flex-col gap-4">
          {steps.map((step, i) => (
            <div key={step.n} className="flex items-start flex-1">
              <div className='bg-white rounded-[10px] p-6 flex-1' style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
                <div className="font-mono text-[11px] uppercase tracking-[0.08em] mb-2 text-tb-primary">
                  {step.n}
                </div>
                <div className="text-[16px] font-semibold mb-2 text-tb-dark">
                  {step.title}
                </div>
                <div className="text-[14px] leading-relaxed text-tb-dark/60">
                  {step.desc}
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="flex-shrink-0 px-3 py-6 max-md:hidden">
                  <svg className="w-6 h-6 text-tb-dark/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhereThisIsGoing() {
  const phases = [
    {
      phase: 'Today',
      title: 'Q',
      items: ['One agent, one domain, a verified track record, and a vault in development.'],
    },
    {
      phase: 'Soon',
      title: 'More agents',
      items: ['New domains, new builders, same coaching loop and evaluation framework.'],
    },
    {
      phase: 'Vision',
      title: 'The agent marketplace',
      items: ['Any domain where judgment matters — each agent with its own vault, track record, and data.'],
    },
  ]

  return (
    <section className='bg-tb-dark rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y'>
      <div className="max-w-content mx-auto">
        <span className="block text-[11px] uppercase mb-3 font-mono tracking-[0.08em] text-tb-primary">
          Roadmap
        </span>
        <h2 className='font-headline font-bold uppercase text-white text-[24px] lg:text-[36px] leading-[0.95] tracking-[-0.02em] mb-8'>
          Where This Is Going
        </h2>
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-[8px]">
          {phases.map((item) => (
            <div key={item.phase} className='bg-white/[0.06] rounded-[10px] p-6'>
              <div className="font-mono text-[11px] font-bold uppercase tracking-[0.08em] mb-1 text-tb-primary">
                {item.phase}
              </div>
              <div className="text-[16px] font-semibold mb-4 text-white">
                {item.title}
              </div>
              <div className="flex flex-col gap-2">
                {item.items.map((line) => (
                  <div key={line} className="text-[13px] leading-relaxed text-white/50">
                    {line}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyThisTeam() {
  return (
    <section className='bg-tb-page rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y'>
      <div className="max-w-content mx-auto">
        <span className="block text-[11px] uppercase mb-3 font-mono tracking-[0.08em] text-tb-primary">
          Why This Team
        </span>
        <h2 className='font-headline font-bold uppercase text-tb-dark text-[24px] lg:text-[36px] leading-[0.95] tracking-[-0.02em] mb-6'>
          Built by People Who Understand Intelligence, Infrastructure, and Markets
        </h2>
        <Link
          href="/team"
          className="inline-block text-[13px] font-mono uppercase tracking-[0.08em] px-7 py-3 bg-tb-dark text-white rounded-tb-card hover:bg-tb-dark/90 transition-colors"
        >
          Meet the team &rarr;
        </Link>
      </div>
    </section>
  )
}
