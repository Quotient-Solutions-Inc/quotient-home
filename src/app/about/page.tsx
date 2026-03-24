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
    <section className="section-shell bg-tb-dark rounded-tb-card py-16 lg:py-24">
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
    <section className='section-shell bg-tb-page rounded-tb-card py-16 sm:py-20 lg:py-tb-section-y'>
      <div className="max-w-content mx-auto text-center">
        <span className="block text-[11px] uppercase mb-3 font-mono tracking-[0.08em] text-tb-primary">
          Our Thinking
        </span>
        <h2 className='font-headline font-bold uppercase text-tb-dark text-[24px] lg:text-[36px] leading-[0.95] tracking-[-0.02em] mb-8'>
          Why Quotient Exists
        </h2>
        <div className="flex max-md:flex-col rounded-[10px] overflow-hidden border border-tb-border max-w-[900px] mx-auto">
          {/* Left panel - dark */}
          <div className="flex-1 p-7 bg-tb-dark">
            <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-white/40 mb-3">
              The problem
            </div>
            <div className="text-[15px] font-medium text-white mb-2">
              Prediction markets have no intelligence layer.
            </div>
            <p className="text-[12px] leading-[1.7] text-white/50">
              Markets are thinly traded and easily manipulated. Media cites their odds as fact. The spread between what odds say and what evidence supports is real, but most traders can never see it.
            </p>
          </div>
          {/* Right panel - light */}
          <div className="flex-1 p-7 bg-white">
            <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-tb-primary mb-3">
              Quotient
            </div>
            <div className="text-[15px] font-medium text-tb-dark mb-2">
              Q finds the spread before the crowd does.
            </div>
            <p className="text-[12px] leading-[1.7] text-tb-dark/50">
              Quotient combines AI superforecasting with human judgment to identify mispriced markets. 85.1% forecast accuracy. Brier score of 0.076. Every resolved market makes Q sharper.
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
      num: 1,
      title: 'Forecast',
      desc: 'Q analyzes markets, sources context, and assigns probabilities with structured confidence.',
    },
    {
      num: 2,
      title: 'Review',
      desc: 'Contributors surface context, flag errors, and add signal that Q may have missed.',
    },
    {
      num: 3,
      title: 'Learn',
      desc: 'Every resolved market feeds back into the system. Q gets sharper with each outcome.',
    },
  ]

  return (
    <section className='section-shell bg-tb-cream rounded-tb-card py-16 sm:py-20 lg:py-tb-section-y'>
      <div className="max-w-content mx-auto">
        <span className="block text-[11px] uppercase mb-3 font-mono tracking-[0.08em] text-tb-primary">
          The Improvement Loop
        </span>
        <h2 className='font-headline font-bold uppercase text-tb-dark text-[24px] lg:text-[36px] leading-[0.95] tracking-[-0.02em] mb-2'>
          How Quotient Gets Better
        </h2>
        <p className="text-[15px] leading-[1.7] max-w-[560px] mb-8 text-tb-dark/60">
          Quotient improves through a loop of forecasting, review, and feedback. Each cycle tightens the signal.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-0 items-stretch">
          {steps.map((step, i) => (
            <>
              <div key={step.num} className='bg-white rounded-[10px] p-6 h-full' style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-[4px] bg-tb-primary flex items-center justify-center">
                    <span className="text-white text-[13px] font-semibold">{step.num}</span>
                  </div>
                  <div>
                    <div className="text-[15px] font-semibold mb-1 text-tb-dark">
                      {step.title}
                    </div>
                    <div className="text-[13px] leading-relaxed text-tb-dark/60">
                      {step.desc}
                    </div>
                  </div>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div key={`arrow-${i}`} className="hidden md:flex items-center justify-center px-3">
                  <span className="text-tb-dark/30 text-[18px]">&rarr;</span>
                </div>
              )}
            </>
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
    <section className='section-shell bg-tb-dark rounded-tb-card py-16 sm:py-20 lg:py-tb-section-y'>
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
    <section className='section-shell bg-tb-page rounded-tb-card py-16 sm:py-20 lg:py-tb-section-y'>
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
