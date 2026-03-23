import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

// Case study data structure for easy updates
interface CaseStudy {
  label: string
  marketQuestion: string
  qForecast: number
  marketOdds: number
  outcome: string
  returnIfFollowed: string
  takeaway: string
  evidenceBullets: string[]
  fullForecastLink?: string
}

// JORDAN: Update case study data here
const caseStudies: CaseStudy[] = [
  {
    label: 'CASE STUDY 1',
    marketQuestion: 'Will Iran close the Strait of Hormuz by [DATE]?', // JORDAN: Replace with actual market question
    qForecast: 91,
    marketOdds: 60,
    outcome: 'NO', // JORDAN: Replace with actual outcome
    returnIfFollowed: '+51%', // JORDAN: Replace with actual return
    takeaway: 'Q identified critical signals in regional military positioning and diplomatic channels that the market was underweighting. The 31-point spread represented a significant opportunity.', // JORDAN: Replace with actual analysis
    evidenceBullets: [
      'Iranian naval exercises showed defensive posturing, not offensive preparation', // JORDAN: Replace
      'Diplomatic back-channels indicated de-escalation signals', // JORDAN: Replace
      'Economic incentives strongly favored keeping shipping lanes open', // JORDAN: Replace
    ],
    fullForecastLink: '#', // JORDAN: Replace with actual link
  },
]

const metrics = [
  { value: '700+', label: 'MARKETS' },
  { value: '1,600+', label: 'SOURCES' },
  { value: '250+', label: 'ARTICLES/DAY' },
  { value: '85%', label: 'WIN RATE' },
  { value: '900+', label: 'CONTRIBUTORS' },
]

function CaseStudyCard({ study }: { study: CaseStudy }) {
  const spread = Math.abs(study.qForecast - study.marketOdds)
  const direction = study.qForecast > study.marketOdds ? 'higher' : 'lower'

  return (
    <div className="space-y-6">
      {/* Label */}
      <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-tb-primary">
        {study.label}
      </div>

      {/* Market Question */}
      <h3 className="font-headline font-bold text-[24px] lg:text-[28px] leading-[1.1] text-tb-dark uppercase">
        {study.marketQuestion}
      </h3>

      {/* Comparison Block */}
      <div className="bg-white rounded-[10px] p-6" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Q Forecast */}
          <div className="bg-tb-card-inner rounded-[8px] p-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-tb-dark/50 mb-2">
              Q Forecast
            </div>
            <div className="font-headline font-bold text-[36px] lg:text-[44px] leading-none text-tb-dark">
              {study.qForecast}%
            </div>
          </div>

          {/* Market Odds */}
          <div className="bg-tb-card-inner rounded-[8px] p-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-tb-dark/50 mb-2">
              Market Odds
            </div>
            <div className="font-headline font-bold text-[36px] lg:text-[44px] leading-none text-tb-dark/60">
              {study.marketOdds}%
            </div>
          </div>
        </div>

        {/* Spread indicator */}
        <div className="flex items-center gap-2 pt-2 border-t border-tb-border/30">
          <span className="font-mono text-[13px] text-tb-primary font-semibold">
            Q was {spread} points {direction} than the market
          </span>
        </div>
      </div>

      {/* Outcome Row */}
      <div className="bg-white rounded-[10px] p-6 grid grid-cols-2 gap-4" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-tb-dark/50 mb-1">
            Outcome
          </div>
          <div className="font-mono text-[18px] font-semibold text-tb-dark">
            {study.outcome}
          </div>
        </div>
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-tb-dark/50 mb-1">
            Return if followed
          </div>
          <div className="font-mono text-[18px] font-semibold text-tb-primary">
            {study.returnIfFollowed}
          </div>
        </div>
      </div>

      {/* Takeaway */}
      <div>
        <div className="font-semibold text-[15px] text-tb-dark mb-2">Takeaway</div>
        <p className="text-[15px] leading-relaxed text-tb-dark/70">
          {study.takeaway}
        </p>
      </div>

      {/* Why Q saw it differently */}
      <div>
        <div className="font-semibold text-[15px] text-tb-dark mb-3">Why Q saw it differently</div>
        <ul className="space-y-2">
          {study.evidenceBullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-tb-primary mt-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-[15px] leading-relaxed text-tb-dark/70">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      {study.fullForecastLink && (
        <Link
          href={study.fullForecastLink}
          className="inline-flex items-center font-mono text-[13px] uppercase tracking-[0.08em] text-tb-primary hover:text-tb-cta-hover transition-colors"
        >
          Read the full forecast
          <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      )}
    </div>
  )
}

export default function GeopoliticalCaseStudiesPage() {
  return (
    <div className="min-h-screen bg-tb-page pt-[44px]">
      <Nav />

      <main id="main-content" className="flex flex-col p-tb-gap pt-0 w-full">
        <div className="flex flex-col gap-tb-gap">
          {/* Hero - Dark section */}
          <section className="bg-tb-dark rounded-tb-card px-8 lg:px-tb-section-x py-16 lg:py-24">
            <div className="max-w-content mx-auto">
              {/* Content with 3px orange left border */}
              <div className="border-l-[3px] border-tb-primary pl-5">
                {/* Eyebrow */}
                <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-tb-primary mb-3">
                  Case Studies · Geopolitical
                </div>

                {/* Headline */}
                <h1 className="font-headline font-bold text-[32px] lg:text-[48px] leading-[0.95] text-white uppercase tracking-[-0.02em] mb-4 max-w-[640px]">
                  How Q Identified Mispriced Markets Before the Crowd
                </h1>

                {/* Subhead */}
                <p className="text-[15px] leading-relaxed text-white/70 max-w-[560px]">
                  A closer look at the calls, evidence, and outcomes behind Q&apos;s strongest reads.
                </p>
              </div>
            </div>
          </section>

          {/* Case Studies - Cream section */}
          <section className="bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-16 lg:py-20">
            <div className="max-w-content mx-auto">
              <div className="space-y-16">
                {caseStudies.map((study, i) => (
                  <CaseStudyCard key={i} study={study} />
                ))}
              </div>
            </div>
          </section>

          {/* By the Numbers - Cream section */}
          <section className="bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-16 lg:py-20">
            <div className="max-w-content mx-auto">
              {/* Eyebrow */}
              <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-tb-primary mb-3">
                By the Numbers
              </div>

              {/* Metrics grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-[10px] p-5 text-center"
                    style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
                  >
                    <div className="font-headline font-bold text-[28px] lg:text-[32px] leading-none text-tb-dark mb-1">
                      {metric.value}
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-tb-dark/50">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA - Dark section */}
          <section className="bg-tb-primary rounded-tb-card px-8 lg:px-tb-section-x py-16 lg:py-20">
            <div className="max-w-content mx-auto text-center">
              <h2 className="font-headline font-bold text-[24px] lg:text-[32px] leading-[0.95] text-white uppercase mb-6">
                Want to see how Q thinks in real time?
              </h2>

              <div className="flex items-center justify-center gap-6 flex-wrap">
                <Link
                  href="https://quotient.social"
                  className="inline-block font-mono text-[13px] uppercase tracking-[0.08em] px-7 py-3 border border-white text-white bg-transparent rounded-tb-card hover:bg-white hover:text-tb-dark transition-all"
                >
                  Log in to Quotient
                  <span className="ml-2">&rarr;</span>
                </Link>
                <Link
                  href="/agents/q/case-studies/culture"
                  className="font-mono text-[13px] uppercase tracking-[0.08em] text-white/80 hover:text-white transition-colors"
                >
                  Next case study: Culture &rarr;
                </Link>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </div>
  )
}
