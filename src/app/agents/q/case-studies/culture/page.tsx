'use client'

import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

// Timeline data
const timeline = [
  { date: 'Nov 8, 2025', event: 'Kim announces she did not pass the July 2025 bar exam.', price: '—' },
  { date: 'Nov 10, 2025', event: 'Polymarket lists the market.', price: '~19%' },
  { date: 'Feb 6, 2026', event: '@shira publishes "Go Kim!" — calls Yes.', price: '[TBD]%', contributor: 'shira', highlight: 'green' },
  { date: 'Feb 7, 2026', event: '@ruminations publishes counter-take — calls No.', price: '[TBD]%', contributor: 'jordan', highlight: 'red' },
  { date: 'Feb 24, 2026', event: 'California bar exam administered.', price: '[TBD]%' },
  { date: 'Mar 21, 2026', event: 'Today. No confirmation she sat for the exam.', price: '14%' },
  { date: 'May 3, 2026', event: 'Market resolves.', price: '?', isResolution: true },
]

// Takes data with full content
const takes = [
  {
    id: 'shira',
    position: 'YES' as const,
    handle: '@shira',
    date: 'Feb 6, 2026',
    title: 'Yes. She passes the bar on her next attempt. Go Kim!',
    sources: ['complex.com'],
    fullText: `Kim Kardashian has been working toward becoming a lawyer for years and has been unusually transparent about the process. She completed a six-year legal apprenticeship and sat for the California bar exam in July 2025. She did not pass on her first attempt, but she has been clear that studying was a serious commitment for her and not just a side project.

In an interview with Complex, she explained that people she deeply respects reached out to normalize the setback. Barack Obama told her Michelle Obama did not pass on her first try. Others reminded her that Hillary Clinton and Kamala Harris also failed initially. Her takeaway was simple: it's not the end, but it is a signal to work harder.

Given her track record of working hard, access to top-tier resources, and willingness to publicly own mistakes and improve, the odds favor her passing on a future attempt. Go Kim!`,
    inlineSources: [{ text: 'complex.com', url: 'https://complex.com' }],
    marketPrice: '[TBD]',
    call: 'Yes',
    imageAlt: 'Kim Kardashian in professional attire',
    imageSrc: '/images/case-studies/kim-k-yes.webp',
  },
  {
    id: 'ruminations',
    position: 'NO' as const,
    handle: '@ruminations',
    date: 'Feb 7, 2026',
    title: "All's Fair in Love and Bar Exams",
    sources: ['calbar.ca.gov', 'tmz.com', 'instagram.com'],
    fullText: `Kim Kardashian is studying for the California bar through the law office/judge's chamber path. She did not attend law school.

She failed the baby bar three times before passing on her fourth attempt in 2021.

She failed the actual bar exam for the first time in July 2025.

Here's how her category performed on that exam: 15 total takers. 13 were first-timers, 2 were repeaters. 10 of the first-timers passed (76.9%). The two repeaters failed.

For context, the overall first-timer pass rate was 78.2%. The overall repeater pass rate was 13.8%. Even among CA ABA-approved law school grads, repeaters passed at just 22.8%. For unaccredited programs, under 3%.

She is attempting one of the hardest bar exams in the country through its least common path, as a repeater.

Kim is smart, with grit and resources. However, many smart people with grit and resources fail the CA bar exam, including licensed attorneys and graduates from top law schools. She may pass, but I think the odds should be lower than 19.5%.`,
    inlineSources: [
      { text: 'instagram.com', url: 'https://instagram.com' },
      { text: 'tmz.com', url: 'https://tmz.com' },
      { text: 'calbar.ca.gov', url: 'https://calbar.ca.gov' },
    ],
    marketPrice: '[TBD]',
    call: 'No',
    imageAlt: 'Illustration representing bar exam challenge',
    imageSrc: '/images/case-studies/kim-k-no.webp',
  },
]

// Q Analysis metrics (TBD placeholders)
const qMetrics = [
  { label: 'Q Forecast', value: '[TBD]%' },
  { label: 'Market Odds', value: '14%' },
  { label: 'Spread', value: '[TBD]' },
  { label: 'Confidence', value: '[TBD]' },
]

// After resolution questions with icons
const afterResolution = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Who called it?',
    description: '@shira said Yes. @ruminations said No.',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: 'Did Q beat the crowd?',
    description: "Q's synthesis vs. market odds at close.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Pipeline outside geo?',
    description: 'Same system, new domain.',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="6" r="2" />
        <circle cx="12" cy="18" r="2" />
        <line x1="8" y1="6" x2="16" y2="6" />
        <line x1="7" y1="8" x2="11" y2="16" />
        <line x1="17" y1="8" x2="13" y2="16" />
      </svg>
    ),
    title: 'Normal people, useful signal?',
    description: 'Structured curiosity vs. expertise.',
  },
]

function TakeCard({ take }: { take: typeof takes[0] }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white rounded-[10px] overflow-hidden flex flex-col h-full" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
      {/* Take image */}
      <div className="h-[180px] bg-tb-card-inner overflow-hidden flex-shrink-0">
        <img
          src={take.imageSrc}
          alt={take.imageAlt}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        {/* Position tag */}
        <div className={`inline-block px-2 py-1 rounded-[4px] font-mono text-[11px] uppercase tracking-[0.08em] mb-3 self-start ${
          take.position === 'YES'
            ? 'bg-green-100 text-green-700'
            : 'bg-red-100 text-red-700'
        }`}>
          {take.position}
        </div>

        {/* Author & date */}
        <div className="flex items-center gap-2 mb-2">
          {/* PFP placeholder */}
          <div className="w-5 h-5 rounded-full bg-tb-card-inner flex items-center justify-center">
            <span className="text-[8px] text-tb-dark/50">{take.handle[1].toUpperCase()}</span>
          </div>
          <span className="text-[13px] font-semibold text-tb-dark">{take.handle}</span>
          <span className="text-[10px] text-tb-muted">&middot; {take.date}</span>
        </div>

        {/* Title - fixed height container to ensure alignment */}
        <div className="text-[16px] font-semibold text-tb-dark leading-snug mb-2 min-h-[48px]">
          {take.title}
        </div>

        {/* Sources - visible BEFORE expanding */}
        <div className="text-[11px] text-tb-dark/50 mb-4">
          Sources: {take.sources.join(', ')}
        </div>

        {/* Expandable content */}
        <div
          id={`${take.id}-full-take`}
          className={`overflow-hidden transition-all duration-300 ${expanded ? 'max-h-[600px]' : 'max-h-0'}`}
        >
          <div className="text-[14px] leading-relaxed text-tb-dark/70 whitespace-pre-line mb-4">
            {take.fullText}
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {take.inlineSources.map((src, i) => (
              <a
                key={i}
                href={src.url}
                target="_blank"
                rel="noopener"
                className="text-[11px] text-tb-primary hover:text-tb-cta-hover"
              >
                ↗ {src.text}
              </a>
            ))}
          </div>
        </div>

        {/* Spacer to push button and meta to bottom */}
        <div className="flex-1" />

        {/* Prominent expand button */}
        <button
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-controls={`${take.id}-full-take`}
          className="bg-tb-primary text-white px-4 py-2 rounded-[6px] font-mono text-[12px] uppercase tracking-[0.06em] hover:bg-tb-cta-hover transition-colors mb-4 self-start"
        >
          {expanded ? 'COLLAPSE ▴' : 'READ FULL TAKE ▾'}
        </button>

        {/* Meta strip */}
        <div className="flex items-center gap-4 pt-3 border-t border-tb-border/30 text-[11px]">
          <div>
            <span className="font-mono uppercase tracking-[0.08em] text-tb-dark/50">Market </span>
            <span className="text-tb-dark">{take.marketPrice}%</span>
          </div>
          <div>
            <span className="font-mono uppercase tracking-[0.08em] text-tb-dark/50">Call </span>
            <span className={take.call === 'Yes' ? 'text-green-600' : 'text-red-600'}>{take.call}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CultureCaseStudiesPage() {
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
                  Case Study · Culture Markets · Experiment
                </div>

                {/* Headline */}
                <h1 className="font-headline font-bold text-[32px] lg:text-[48px] leading-[0.95] text-white uppercase tracking-[-0.02em] mb-4 max-w-[640px]">
                  The Kim Kardashian Case Study
                </h1>

                {/* Subhead */}
                <p className="text-[15px] leading-relaxed text-white/70 max-w-[560px] mb-6">
                  An experiment: can Quotient&apos;s pipeline, sources, structured reasoning, human signal, produce useful intelligence on a culture market?
                </p>

                {/* Metadata */}
                <div className="flex items-center gap-4 text-[12px] font-mono uppercase tracking-[0.08em]">
                  <span className="text-white/50">Polymarket</span>
                  <span className="text-white/30">|</span>
                  <span className="text-white/50">Resolves May 3, 2026</span>
                  <span className="text-white/30">|</span>
                  <span className="flex items-center gap-1.5 text-green-400">
                    <span className="w-2 h-2 rounded-full bg-green-400 motion-safe:animate-pulse" />
                    LIVE
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* The Market - Cream section */}
          <section className="bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-16 lg:py-20">
            <div className="max-w-content mx-auto">
              {/* Eyebrow */}
              <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-tb-primary mb-3">
                The Market
              </div>

              {/* Market question */}
              <h2 className="font-headline font-bold text-[24px] lg:text-[28px] leading-[1.1] text-tb-dark uppercase mb-6">
                Will Kim Kardashian Pass the Bar Exam?
              </h2>

              {/* Comparison block */}
              <div className="bg-white rounded-[10px] p-6 mb-6 grid grid-cols-2 gap-4 max-w-[720px]" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-tb-muted mb-1">
                    Current Odds
                  </div>
                  <div className="font-headline font-bold text-[36px] leading-none text-tb-dark">
                    14%
                  </div>
                  <div className="text-[11px] text-tb-muted">Yes &middot; as of March 21, 2026</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-tb-muted mb-1">
                    Volume
                  </div>
                  <div className="font-headline font-bold text-[36px] leading-none text-tb-dark">
                    $38K
                  </div>
                </div>
              </div>

              {/* Timeline block label */}
              <h3 className="text-[15px] font-semibold text-tb-dark mb-3">How we got here</h3>

              {/* Timeline - compact design */}
              <div className="bg-white rounded-[10px] overflow-hidden max-w-[720px]" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
                {timeline.map((row, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-[90px_1fr_50px] gap-3 px-4 py-2.5 border-b border-tb-border/20 last:border-b-0 ${
                      row.highlight === 'green' ? 'bg-green-50/50' : ''
                    } ${
                      row.highlight === 'red' ? 'bg-red-50/50' : ''
                    }`}
                  >
                    <div className={`font-mono text-[12px] ${
                      row.isResolution ? 'text-tb-primary font-semibold' :
                      row.highlight === 'green' ? 'text-green-700 font-semibold' :
                      row.highlight === 'red' ? 'text-red-700 font-semibold' :
                      'text-tb-dark/60'
                    }`}>
                      {row.date}
                    </div>
                    <div className={`text-[12px] ${
                      row.isResolution ? 'text-tb-primary' : 'text-tb-dark/80'
                    }`}>
                      {row.contributor && (
                        <span className="inline-block w-4 h-4 rounded-full bg-tb-card-inner mr-1.5 align-middle text-[8px] text-center leading-4 text-tb-dark/50">
                          {row.contributor[0].toUpperCase()}
                        </span>
                      )}
                      {row.event}
                    </div>
                    <div className={`font-mono text-[12px] text-right ${
                      row.isResolution ? 'text-tb-primary' : 'text-tb-dark/40'
                    }`}>
                      {row.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* The Takes - Cream section */}
          <section className="bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-16 lg:py-20">
            <div className="max-w-content mx-auto">
              {/* Eyebrow */}
              <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-tb-primary mb-3">
                The Takes
              </div>

              {/* Headline */}
              <h2 className="font-headline font-bold text-[24px] lg:text-[28px] leading-[1.1] text-tb-dark uppercase mb-3">
                Two Views. One Market.
              </h2>

              {/* Context */}
              <p className="text-[15px] leading-relaxed text-tb-dark/70 max-w-[560px] mb-8">
                Two contributors. Same evidence. Opposite calls. You don&apos;t need to be an expert &mdash; you just need to think it through.
              </p>

              {/* Takes cards - constrained width */}
              <div className="grid md:grid-cols-2 gap-6 max-w-[720px]">
                {takes.map((take) => (
                  <TakeCard key={take.id} take={take} />
                ))}
              </div>

              {/* Single shared CTA below both cards */}
              <div className="text-center mt-8 max-w-[720px]">
                <p className="text-[13px] text-tb-dark/50 mb-3">View their full takes on Quotient</p>
                <Link
                  href="https://www.quotient.social"
                  className="inline-block font-mono text-[13px] uppercase tracking-[0.08em] px-7 py-3 border border-tb-dark text-tb-dark bg-transparent rounded-tb-card hover:bg-tb-dark hover:text-white transition-all"
                >
                  Log in to Quotient &rarr;
                </Link>
              </div>
            </div>
          </section>

          {/* Q's Analysis - Light section */}
          <section className="bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-16 lg:py-20">
            <div className="max-w-content mx-auto">
              {/* Eyebrow */}
              <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-tb-primary mb-3">
                Q&apos;s Analysis
              </div>

              {/* Headline */}
              <h2 className="font-headline font-bold text-[24px] lg:text-[28px] leading-[1.1] text-tb-dark uppercase mb-6">
                Where Q Lands
              </h2>

              {/* Metrics grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {qMetrics.map((metric, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-[10px] p-5"
                    style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
                  >
                    <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-tb-dark/50 mb-2">
                      {metric.label}
                    </div>
                    <div className="font-headline font-bold text-[28px] leading-none text-tb-dark">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Pulse dot label - subtle, below metrics */}
              <div className="flex items-center gap-2 text-tb-dark/60 text-[13px]">
                <span className="w-2 h-2 rounded-full bg-green-400 motion-safe:animate-pulse" />
                Follow Q&apos;s live take on this market
              </div>
            </div>
          </section>

          {/* What We'll Measure - Light section */}
          <section className="bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-16 lg:py-20">
            <div className="max-w-content mx-auto">
              {/* Eyebrow */}
              <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-tb-primary mb-3">
                After Resolution
              </div>

              {/* Headline - using font-headline, NOT body font */}
              <h2 className="font-headline font-bold text-[24px] lg:text-[28px] leading-[1.1] text-tb-dark uppercase mb-8">
                What We&apos;ll Measure
              </h2>

              {/* Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {afterResolution.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-[10px] p-5 min-h-[140px] flex flex-col"
                    style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
                  >
                    <div className="text-tb-primary mb-3">
                      {item.icon}
                    </div>
                    <div className="text-[16px] font-semibold text-tb-dark mb-2">
                      {item.title}
                    </div>
                    <div className="text-[14px] leading-relaxed text-tb-dark/70">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA - BRIGHT orange section */}
          <section className="bg-tb-primary rounded-tb-card px-8 lg:px-tb-section-x py-16 lg:py-20">
            <div className="max-w-content mx-auto text-center">
              <h2 className="font-headline font-bold text-[24px] lg:text-[28px] leading-[0.95] text-white uppercase mb-2">
                This market resolves May 3, 2026.
              </h2>
              <p className="text-[15px] text-white/80 mb-8">
                Follow along to see how it shakes out.
              </p>

              {/* Centered row with both elements */}
              <div className="flex items-center justify-center gap-6 flex-wrap">
                <Link
                  href="https://quotient.social"
                  className="inline-block font-mono text-[13px] uppercase tracking-[0.08em] px-7 py-3 border border-white text-white bg-transparent rounded-tb-card hover:bg-white hover:text-tb-dark transition-all"
                >
                  Log in to Quotient &rarr;
                </Link>
                <Link
                  href="/agents/q/case-studies/geopolitical"
                  className="font-mono text-[13px] uppercase tracking-[0.08em] text-white/80 hover:text-white transition-colors"
                >
                  Next: Geopolitical &rarr;
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
