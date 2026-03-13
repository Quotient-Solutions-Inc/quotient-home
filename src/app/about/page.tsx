'use client'

import Link from 'next/link'
import NavWithModal from '@/components/NavWithModal'
import HowItWorks from '@/components/HowItWorks'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import { useTheme } from '@/lib/ThemeContext'

export default function AboutPage() {
  const { theme } = useTheme()
  const isB = theme === 'B'

  return (
    <div className={isB ? 'min-h-screen bg-tb-page pt-[44px]' : 'min-h-screen'}>
      <NavWithModal />

      {isB ? (
        <main className="flex flex-col p-tb-gap pt-0 w-full">
          <div className="flex flex-col gap-tb-gap">
            <AboutHeroB />
            <ProveItSection isB />
            <WhereThisIsGoing isB />
            <CoachingLoopCompressed isB />
            <FAQ title="General questions" items={faqItems} />
            <Footer />
          </div>
        </main>
      ) : (
        <>
          <AboutHeroA />
          <ProveItSection isB={false} />
          <WhereThisIsGoing isB={false} />
          <HowItWorks />
          <FAQ title="General questions" items={faqItems} />
          <Footer />
        </>
      )}
    </div>
  )
}

const faqItems = [
  { q: 'What is Quotient?', a: 'Quotient is a platform for building, proving, and monetizing prediction market trading agents. We provide the coaching framework, the evaluation layer, and the marketplace. Q is the first agent — more are coming.' },
  { q: 'What is a prediction agent?', a: "A prediction agent is an AI system that forecasts outcomes on verifiable questions. On Quotient, every agent has a public track record, sources its reasoning, and is evaluated against real-world results. Q is Quotient\u2019s first agent, covering geopolitics." },
  { q: 'How do I build an agent on Quotient?', a: "Quotient provides a coaching framework that helps domain experts decompose questions, calibrate confidence, and iterate through structured feedback. You bring the expertise \u2014 Quotient turns it into a product. Builder program launching soon." },
  { q: 'Who built this?', a: 'Quotient was founded by Jordan with a team focused on prediction market infrastructure, AI agent pipelines, and geopolitical intelligence research.' },
  { q: 'Is Quotient regulated?', a: 'Quotient provides research and market intelligence, not financial advice or trading services. We are not a registered investment advisor.' },
  { q: 'How do I get involved as a forecaster?', a: "Forecasters can contribute via the mobile app or the Farcaster and World mini apps. Your track record builds over time. Accuracy earns influence in Q\u2019s context graph and qualifies you for the builder program." },
]

/* ─── Hero B ─── Dark brown hero ─── */
function AboutHeroB() {
  return (
    <section className="bg-tb-dark rounded-tb-card px-8 lg:px-tb-section-x py-16 lg:py-24 text-center">
      <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-white/40 mb-6">
        About Quotient
      </span>
      <h1 className="font-headline font-bold text-[32px] lg:text-[56px] leading-[0.95] uppercase text-white tracking-[-0.02em] max-w-[800px] mx-auto">
        Where judgment becomes a product.
      </h1>
    </section>
  )
}

/* ─── Hero A ─── */
function AboutHeroA() {
  return (
    <section className="border-b border-border-thin py-20 px-10 max-md:px-6">
      <div className="max-w-content mx-auto">
        <span className="block font-mono text-[11px] uppercase tracking-eyebrow text-gray-500 mb-4">
          About Quotient
        </span>
        <h1 className="font-headline text-[42px] max-md:text-[32px] font-normal leading-[1.15] tracking-[-0.02em] text-brand-black mb-5">
          Where judgment becomes a product.
        </h1>
        <p className="text-[15px] text-gray-500 leading-relaxed max-w-[560px]">
          Quotient turns domain expertise into a verified, monetizable product.
          Build a forecasting agent. Prove it against real-world outcomes.
          Earn from people who need to be right.
        </p>
      </div>
    </section>
  )
}

/* ─── Problem / Solution two-column ─── */
function ProveItSection({ isB }: { isB: boolean }) {
  return (
    <section className={isB
      ? 'bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y'
      : 'bg-surface-off border-b border-border-thin py-20 px-10 max-md:px-6'
    }>
      <div className={isB ? '' : 'max-w-content mx-auto'}>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-12">
          <div>
            <div className={`text-[10px] uppercase mb-3 pb-2 ${isB
              ? 'font-mono tracking-[0.08em] text-gray-500 border-b border-tb-border'
              : 'font-mono tracking-eyebrow text-gray-400 border-b border-border-thin'
            }`}>The problem</div>
            <h2 className={`font-semibold tracking-[-0.02em] mb-4 ${isB
              ? 'font-headline font-bold uppercase text-[28px] text-tb-dark'
              : 'text-[22px] text-brand-black'
            }`}>Judgment is invisible</h2>
            <div className="flex flex-col gap-4">
              <p className={`text-[14px] leading-[1.8] ${isB ? 'text-tb-dark/60' : 'text-gray-500'}`}>
                People with real expertise make critical calls every day, but
                there&apos;s no way to verify who&apos;s actually good, scale
                what they know, or build a business around it.
              </p>
              <p className={`text-[14px] leading-[1.8] ${isB ? 'text-tb-dark/60' : 'text-gray-500'}`}>
                Credentials signal potential. Track records prove performance.
                The best forecasters in the world have no infrastructure for either.
              </p>
            </div>
          </div>
          <div>
            <div className={`text-[10px] uppercase mb-3 pb-2 ${isB
              ? 'font-mono tracking-[0.08em] text-gray-500 border-b border-tb-border'
              : 'font-mono tracking-eyebrow text-gray-400 border-b border-border-thin'
            }`}>Quotient</div>
            <h2 className={`font-semibold tracking-[-0.02em] mb-4 ${isB
              ? 'font-headline font-bold uppercase text-[28px] text-tb-dark'
              : 'text-[22px] text-brand-black'
            }`}>Build an agent. Prove it. Earn.</h2>
            <div className="flex flex-col gap-4">
              <p className={`text-[14px] leading-[1.8] ${isB ? 'text-tb-dark/60' : 'text-gray-500'}`}>
                Build forecasting agents, prove them against real outcomes,
                and monetize them through signal subscriptions, API access,
                and managed vaults.
              </p>
              <p className={`text-[14px] leading-[1.8] ${isB ? 'text-tb-dark/60' : 'text-gray-500'}`}>
                Q is the first agent — geopolitics. 69% win rate across 600+
                prediction markets. More agents and domains are coming.
                <Link href="/agents/q/signal" className={`ml-1 font-mono text-[11px] uppercase tracking-[0.08em] ${isB ? 'text-tb-primary hover:text-tb-cta-hover' : 'text-brand-blue hover:underline'}`}>
                  See Q&apos;s track record &rarr;
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Where This Is Going / Roadmap ─── */
function WhereThisIsGoing({ isB }: { isB: boolean }) {
  return (
    <section className={isB
      ? 'bg-tb-dark rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y'
      : 'border-b border-border-thin py-20 px-10 max-md:px-6'
    }>
      <div className={isB ? '' : 'max-w-content mx-auto'}>
        <span className={`block text-[11px] uppercase mb-4 ${isB
          ? 'font-mono tracking-[0.08em] text-tb-primary'
          : 'font-mono tracking-eyebrow text-gray-500'
        }`}>Roadmap</span>
        <h2 className={isB
          ? 'font-headline font-bold uppercase text-white text-[32px] lg:text-[48px] leading-[0.95] tracking-[-0.02em] mb-8'
          : 'text-[28px] font-semibold tracking-[-0.02em] text-brand-black mb-8 leading-[1.2]'
        }>Where this is going</h2>
        <div className={`grid grid-cols-3 max-md:grid-cols-1 ${isB ? 'gap-[8px]' : 'gap-4'}`}>
          {[
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
          ].map((item) => (
            <div key={item.phase} className={isB
              ? 'bg-white/[0.06] rounded-[10px] p-6'
              : 'border border-border-thin rounded-sm bg-white p-6'
            }>
              <div className={`font-mono text-[11px] font-bold uppercase tracking-[0.08em] mb-1 ${isB ? 'text-tb-primary' : 'text-brand-blue'}`}>
                {item.phase}
              </div>
              <div className={`text-[16px] font-semibold mb-4 ${isB ? 'text-white' : 'text-brand-black'}`}>
                {item.title}
              </div>
              <div className="flex flex-col gap-2">
                {item.items.map((line) => (
                  <div key={line} className={`text-[13px] leading-relaxed ${isB ? 'text-white/50' : 'text-gray-500'}`}>
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

/* ─── Coaching Loop Compressed ─── */
function CoachingLoopCompressed({ isB }: { isB: boolean }) {
  const steps = [
    { n: '01', label: 'Define', desc: 'Break complex questions into verifiable components.' },
    { n: '02', label: 'Calibrate', desc: 'Assign probabilities with structured confidence.' },
    { n: '03', label: 'Coach', desc: 'Iterate through feedback against real outcomes.' },
    { n: '04', label: 'Productize', desc: 'Package judgment into signal, API, and vaults.' },
    { n: '05', label: 'Compound', desc: 'Each resolved market makes the next forecast better.' },
  ]

  return (
    <section className={isB
      ? 'bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y'
      : 'border-b border-border-thin py-20 px-10 max-md:px-6'
    }>
      <div className={isB ? '' : 'max-w-content mx-auto'}>
        <span className={`block text-[11px] uppercase mb-4 ${isB
          ? 'font-mono tracking-[0.08em] text-tb-primary'
          : 'font-mono tracking-eyebrow text-gray-500'
        }`}>The coaching loop</span>
        <h2 className={isB
          ? 'font-headline font-bold uppercase text-tb-dark text-[32px] lg:text-[48px] leading-[0.95] tracking-[-0.02em] mb-3'
          : 'text-[28px] font-semibold tracking-[-0.02em] text-brand-black mb-3 leading-[1.2]'
        }>How agents improve</h2>
        <p className={`text-[15px] leading-relaxed max-w-[600px] mb-8 ${isB ? 'text-tb-dark/70' : 'text-gray-500'}`}>
          Every agent on the platform runs through a structured coaching loop
          that turns domain expertise into compounding accuracy.
        </p>
        <div className={`grid grid-cols-5 max-md:grid-cols-1 ${isB ? 'gap-[8px]' : 'gap-4'}`}>
          {steps.map((step) => (
            <div key={step.n} className={isB
              ? 'bg-white rounded-[10px] p-5'
              : 'border border-border-thin rounded-sm bg-white p-5'
            }>
              <div className={`font-mono text-[10px] uppercase tracking-[0.08em] mb-2 ${isB ? 'text-tb-primary' : 'text-gray-400'}`}>
                {step.n}
              </div>
              <div className={`text-[14px] font-semibold mb-1.5 ${isB ? 'text-tb-dark' : 'text-brand-black'}`}>
                {step.label}
              </div>
              <div className={`text-[12px] leading-relaxed ${isB ? 'text-tb-dark/50' : 'text-gray-400'}`}>
                {step.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
