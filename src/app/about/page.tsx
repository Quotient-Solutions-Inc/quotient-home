import Link from 'next/link'
import Nav from '@/components/Nav'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-tb-page pt-[44px]'>
      <Nav />

      <main className="flex flex-col p-tb-gap pt-0 w-full">
        <div className="flex flex-col gap-tb-gap">
          <AboutHeroB />
          <ProveItSection />
          <WhereThisIsGoing />
          <CoachingLoopCompressed />
          <FAQ title="General questions" items={faqItems} />
          <Footer />
        </div>
      </main>
    </div>
  )
}

const faqItems = [
  { q: 'What is Quotient?', a: 'Quotient is a platform for building, proving, and monetizing prediction market trading agents. We provide the coaching framework, the evaluation layer, and the marketplace. Q is the first agent — more are coming.' },
  { q: 'What is a prediction agent?', a: "A prediction agent is an AI system that forecasts outcomes on verifiable questions. On Quotient, every agent has a public track record, sources its reasoning, and is evaluated against real-world results. Q is Quotient's first agent, covering geopolitics." },
  { q: 'How do I build an agent on Quotient?', a: "Quotient provides a coaching framework that helps domain experts decompose questions, calibrate confidence, and iterate through structured feedback. You bring the expertise — Quotient turns it into a product. Builder program launching soon." },
  { q: 'Who built this?', a: 'Quotient was founded by Jordan with a team focused on prediction market infrastructure, AI agent pipelines, and geopolitical intelligence research.' },
  { q: 'Is Quotient regulated?', a: 'Quotient provides research and market intelligence, not financial advice or trading services. We are not a registered investment advisor.' },
  { q: 'How do I get involved as a forecaster?', a: "Forecasters can contribute via the mobile app or the Farcaster and World mini apps. Your track record builds over time. Accuracy earns influence in Q's context graph and qualifies you for the builder program." },
]

/* ─── Hero B ─── Dark brown hero ─── */
function AboutHeroB() {
  return (
    <section className="bg-tb-dark rounded-tb-card px-8 lg:px-tb-section-x py-16 lg:py-24 text-center">
      <div className="max-w-content mx-auto">
      <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-white/40 mb-6">
        About Quotient
      </span>
      <h1 className="font-headline font-bold text-[32px] lg:text-[56px] leading-[0.95] text-white tracking-[-0.02em]">
        Where judgment becomes a product.
      </h1>
      </div>
    </section>
  )
}

/* ─── Problem / Solution two-column ─── */
function ProveItSection() {
  return (
    <section className='bg-tb-page rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y'>
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-12 max-md:gap-8 max-w-[900px]">
          <div>
            <div className="text-[10px] uppercase mb-3 pb-2 font-mono tracking-[0.08em] text-gray-500 border-b border-tb-border">The problem</div>
            <h2 className="font-semibold tracking-[-0.02em] mb-4 font-headline font-bold text-[28px] text-tb-dark">Judgment is invisible</h2>
            <div className="flex flex-col gap-4">
              <p className="text-[14px] leading-[1.8] text-tb-dark/60">
                People with real expertise make critical calls every day, but
                there&apos;s no way to verify who&apos;s actually good, scale
                what they know, or build a business around it.
              </p>
              <p className="text-[14px] leading-[1.8] text-tb-dark/60">
                Credentials signal potential. Track records prove performance.
                The best forecasters in the world have no infrastructure for either.
              </p>
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase mb-3 pb-2 font-mono tracking-[0.08em] text-gray-500 border-b border-tb-border">Quotient</div>
            <h2 className="font-semibold tracking-[-0.02em] mb-4 font-headline font-bold text-[28px] text-tb-dark">Build an agent. Prove it. Earn.</h2>
            <div className="flex flex-col gap-4">
              <p className="text-[14px] leading-[1.8] text-tb-dark/60">
                Build forecasting agents, prove them against real outcomes,
                and monetize them through signal subscriptions, API access,
                and managed vaults.
              </p>
              <p className="text-[14px] leading-[1.8] text-tb-dark/60">
                Q is the first agent — geopolitics. 69% win rate across 600+
                prediction markets. More agents and domains are coming.
                <Link href="/agents/q/track-record" className="ml-1 font-mono text-[11px] uppercase tracking-[0.08em] text-tb-primary hover:text-tb-cta-hover">
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
function WhereThisIsGoing() {
  return (
    <section className='bg-tb-dark rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y'>
      <div className="max-w-content mx-auto">
        <span className="block text-[11px] uppercase mb-3 font-mono tracking-[0.08em] text-tb-primary">Roadmap</span>
        <h2 className='font-headline font-bold text-white text-[24px] lg:text-[36px] leading-[0.95] tracking-[-0.02em] mb-8'>Where this is going</h2>
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-[8px]">
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

/* ─── Coaching Loop Compressed ─── */
function CoachingLoopCompressed() {
  const steps = [
    { n: '01', label: 'Define', desc: 'Break complex questions into verifiable components.' },
    { n: '02', label: 'Calibrate', desc: 'Assign probabilities with structured confidence.' },
    { n: '03', label: 'Coach', desc: 'Iterate through feedback against real outcomes.' },
    { n: '04', label: 'Productize', desc: 'Package judgment into signal, API, and vaults.' },
    { n: '05', label: 'Compound', desc: 'Each resolved market makes the next forecast better.' },
  ]

  return (
    <section className='bg-tb-page rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y'>
      <div className="max-w-content mx-auto">
        <span className="block text-[11px] uppercase mb-3 font-mono tracking-[0.08em] text-tb-primary">The coaching loop</span>
        <h2 className='font-headline font-bold text-tb-dark text-[24px] lg:text-[36px] leading-[0.95] tracking-[-0.02em] mb-2'>How agents improve</h2>
        <p className="text-[15px] leading-[1.7] max-w-[560px] mb-8 text-tb-dark/60">
          Every agent on the platform runs through a structured coaching loop
          that turns domain expertise into compounding accuracy.
        </p>
        <div className="grid grid-cols-5 max-md:grid-cols-1 gap-[8px]">
          {steps.map((step) => (
            <div key={step.n} className='bg-tb-cream rounded-[10px] p-5'>
              <div className="font-mono text-[10px] uppercase tracking-[0.08em] mb-2 text-tb-primary">
                {step.n}
              </div>
              <div className="text-[16px] font-semibold mb-1.5 text-tb-dark">
                {step.label}
              </div>
              <div className="text-[14px] leading-relaxed text-tb-dark/60">
                {step.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
