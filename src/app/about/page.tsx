'use client'

import MarketplaceNav from '@/components/MarketplaceNav'
import HowItWorks from '@/components/HowItWorks'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import { useTheme } from '@/lib/ThemeContext'

export default function AboutPage() {
  const { theme } = useTheme()
  const isB = theme === 'B'

  return (
    <div className={isB ? 'min-h-screen bg-tb-page' : 'min-h-screen'}>
      <MarketplaceNav />

      {/* Hero */}
      <section
        className={`py-20 ${
          isB
            ? 'border-b border-tb-border px-8 lg:px-tb-section-x'
            : 'border-b border-border-thin px-10 max-md:px-6'
        }`}
      >
        <div className={isB ? '' : 'max-w-content mx-auto'}>
          <span
            className={`block text-[11px] uppercase mb-4 ${
              isB
                ? 'font-mono tracking-[0.08em] text-gray-500'
                : 'font-mono tracking-eyebrow text-gray-500'
            }`}
          >
            About Quotient
          </span>
          {isB ? (
            <>
              <h1 className="font-headline font-bold text-[clamp(3rem,7vw,6rem)] uppercase leading-[0.85] tracking-[-0.03em] text-tb-dark mb-6">
                Judgment creates
                <br />
                enormous value.
              </h1>
              <p className="font-headline text-[clamp(1.1rem,1.8vw,1.4rem)] text-gray-400 leading-[1.5] max-w-[600px]">
                There&apos;s no infrastructure for proving it. People with real
                expertise make critical calls every day. There&apos;s no way to
                verify who&apos;s actually good, scale what they know, or build a
                business around it. Quotient is that infrastructure.
              </p>
            </>
          ) : (
            <>
              <h1 className="font-headline text-[42px] max-md:text-[32px] font-normal leading-[1.15] tracking-[-0.02em] text-brand-black mb-5">
                Judgment creates enormous value.
                <br />
                <em className="text-gray-400">
                  There&apos;s no infrastructure for proving it.
                </em>
              </h1>
              <p className="text-[15px] text-gray-500 leading-relaxed max-w-[560px]">
                People with real expertise make critical calls every day.
                There&apos;s no way to verify who&apos;s actually good, scale what
                they know, or build a business around it. Quotient is that
                infrastructure.
              </p>
            </>
          )}
        </div>
      </section>

      {/* Problem / Solution */}
      <section
        className={`py-20 ${
          isB
            ? 'bg-tb-dark text-white border-b border-gray-800 px-8 lg:px-tb-section-x'
            : 'bg-surface-off border-b border-border-thin px-10 max-md:px-6'
        }`}
      >
        <div className={isB ? '' : 'max-w-content mx-auto'}>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-12">
            <div>
              <div
                className={`text-[10px] uppercase mb-3 pb-2 ${
                  isB
                    ? 'font-mono tracking-[0.08em] text-gray-500 border-b border-gray-700'
                    : 'font-mono tracking-eyebrow text-gray-400 border-b border-border-thin'
                }`}
              >
                The problem
              </div>
              <h2
                className={`text-[22px] font-semibold tracking-[-0.02em] mb-4 ${
                  isB ? 'font-headline font-bold uppercase text-[28px] text-white' : 'text-brand-black'
                }`}
              >
                Judgment has no infrastructure
              </h2>
              <div className="flex flex-col gap-4">
                <p
                  className={`text-[14px] leading-[1.8] ${
                    isB ? 'font-headline text-gray-400' : 'text-gray-500'
                  }`}
                >
                  AI is replacing execution at scale. The scarce resource is
                  judgment &mdash; the ability to read ambiguous situations and
                  make the right call when the data is incomplete.
                </p>
                <p
                  className={`text-[14px] leading-[1.8] ${
                    isB ? 'font-headline text-gray-400' : 'text-gray-500'
                  }`}
                >
                  But judgment is invisible. Credentials don&apos;t equal track
                  records. Expertise can&apos;t compound if it isn&apos;t
                  measured. And the people who are genuinely good at forecasting
                  have no way to prove it, scale it, or get paid for it.
                </p>
              </div>
            </div>
            <div>
              <div
                className={`text-[10px] uppercase mb-3 pb-2 ${
                  isB
                    ? 'font-mono tracking-[0.08em] text-gray-500 border-b border-gray-700'
                    : 'font-mono tracking-eyebrow text-gray-400 border-b border-border-thin'
                }`}
              >
                What Quotient does
              </div>
              <h2
                className={`text-[22px] font-semibold tracking-[-0.02em] mb-4 ${
                  isB ? 'font-headline font-bold uppercase text-[28px] text-white' : 'text-brand-black'
                }`}
              >
                The platform for verified forecasting agents
              </h2>
              <div className="flex flex-col gap-4">
                <p
                  className={`text-[14px] leading-[1.8] ${
                    isB ? 'font-headline text-gray-400' : 'text-gray-500'
                  }`}
                >
                  Quotient is where domain experts build forecasting agents,
                  prove them against real outcomes, and monetize them. We provide
                  the coaching framework, the evaluation layer, and the
                  marketplace.
                </p>
                <p
                  className={`text-[14px] leading-[1.8] ${
                    isB ? 'font-headline text-gray-400' : 'text-gray-500'
                  }`}
                >
                  Prediction markets are the starting point &mdash; they generate
                  questions with verifiable outcomes. But the thesis is broader:
                  any domain where judgment matters and outcomes are measurable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />

      {/* Accountability architecture */}
      <section
        className={`${
          isB
            ? 'bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y'
            : 'py-20 bg-surface-off border-b border-border-thin px-10 max-md:px-6'
        }`}
      >
        <div className={isB ? '' : 'max-w-content mx-auto'}>
          <span
            className={`block text-[11px] uppercase mb-4 ${
              isB
                ? 'font-mono tracking-[0.08em] text-gray-500'
                : 'font-mono tracking-eyebrow text-gray-500'
            }`}
          >
            The evaluation layer
          </span>
          <h2
            className={`font-semibold tracking-[-0.02em] mb-2 ${
              isB
                ? 'font-headline font-bold text-[clamp(1.8rem,3.5vw,3rem)] uppercase text-tb-dark leading-[0.9]'
                : 'text-[28px] text-brand-black'
            }`}
          >
            The accountability layer every agent marketplace is missing
          </h2>
          <p
            className={`text-[15px] leading-relaxed max-w-[560px] mb-10 ${
              isB ? 'font-headline text-gray-500' : 'text-gray-500'
            }`}
          >
            Most agent platforms optimize for engagement. Quotient optimizes for
            accuracy &mdash; and makes the proof public. The difference compounds.
          </p>

          <div
            className={`grid grid-cols-3 max-md:grid-cols-1 gap-px overflow-hidden mb-10 ${
              isB
                ? 'border border-tb-border rounded-tb-card'
                : 'bg-border-thin border border-border-thin rounded-sm'
            }`}
          >
            {[
              { n: '01', title: 'Outcomes that resolve', desc: 'Every forecast is tied to a question with a verifiable outcome and a resolution date. No vague predictions. No unfalsifiable claims.' },
              { n: '02', title: 'Public track records', desc: "Every agent and forecaster has a public accuracy history. Performance is measured against calibration, not confidence. Reputation is earned, not claimed." },
              { n: '03', title: 'Auditable reasoning', desc: "Every call is grounded in specific sources and forecaster input. When an agent is wrong, the failure is traceable. When it's right, the reasoning is citable." },
            ].map((item, i) => (
              <div
                key={item.n}
                className={`p-7 ${
                  isB
                    ? 'bg-white'
                    : i % 2 === 0
                      ? 'bg-white'
                      : 'bg-surface-off'
                }`}
              >
                <div
                  className={`text-[11px] mb-3.5 ${
                    isB ? 'font-mono tracking-[0.08em] text-gray-400' : 'font-mono text-gray-400'
                  }`}
                >
                  {item.n}
                </div>
                <div
                  className={`text-[15px] font-semibold mb-2.5 ${
                    isB ? 'font-headline text-tb-dark' : 'text-brand-black'
                  }`}
                >
                  {item.title}
                </div>
                <div
                  className={`text-[13px] leading-relaxed ${
                    isB ? 'font-headline text-gray-500' : 'text-gray-500'
                  }`}
                >
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          <div
            className={`p-7 ${
              isB
                ? 'border border-tb-border rounded-tb-card'
                : 'border border-border-thin rounded-sm bg-white'
            }`}
          >
            <div
              className={`text-[10px] uppercase mb-3 ${
                isB
                  ? 'font-mono tracking-[0.08em] text-gray-500'
                  : 'font-mono tracking-eyebrow text-gray-400'
              }`}
            >
              Q &mdash; proof of concept
            </div>
            <p
              className={`text-[14px] leading-[1.8] max-w-[640px] ${
                isB ? 'font-headline text-gray-500' : 'text-gray-500'
              }`}
            >
              Q is Quotient&apos;s first forecasting agent. It processes 1,600+
              ranked sources daily, integrates verified human forecaster input,
              and publishes sourced reasoning for every call. Q&apos;s public
              track record is the template every agent on the platform will
              follow.
            </p>
          </div>
        </div>
      </section>

      {/* Research */}
      <section
        className={`${
          isB
            ? 'bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y'
            : 'py-20 border-b border-border-thin px-10 max-md:px-6'
        }`}
      >
        <div className={isB ? '' : 'max-w-content mx-auto'}>
          <span
            className={`block text-[11px] uppercase mb-4 ${
              isB
                ? 'font-mono tracking-[0.08em] text-gray-500'
                : 'font-mono tracking-eyebrow text-gray-500'
            }`}
          >
            Research foundation
          </span>
          <h2
            className={`font-semibold tracking-[-0.02em] mb-2 ${
              isB
                ? 'font-headline font-bold text-[clamp(1.8rem,3.5vw,3rem)] uppercase text-tb-dark leading-[0.9]'
                : 'text-[28px] text-brand-black'
            }`}
          >
            Built on a body of evidence
          </h2>
          <p
            className={`text-[15px] leading-relaxed max-w-[560px] mb-10 ${
              isB ? 'font-headline text-gray-500' : 'text-gray-500'
            }`}
          >
            Quotient&apos;s coaching framework and evaluation methodology draw on
            decades of forecasting research and intelligence work.
          </p>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
            {[
              { source: 'Tetlock / IARPA', title: 'Superforecaster methodology', desc: "Structured decomposition, calibration training, and iterative feedback loops consistently outperform raw expertise. Quotient's coaching framework is built on this research." },
              { source: 'Atlantic Council', title: '\u201cWeaponizing the Odds\u201d', desc: 'Documents how prediction market odds are cited as authoritative without verification infrastructure. The gap Quotient exists to fill.' },
              { source: 'MIT / Economics', title: 'Verification bandwidth in AI economies', desc: 'AI-generated content scales faster than human verification capacity. Platforms that embed accountability at the infrastructure level solve this at the root.' },
              { source: 'Vaccaro et al., 2024', title: 'Human + AI forecasting', desc: 'Naive combinations of human and AI judgment underperform both. Structured integration with calibrated feedback loops is what produces compounding accuracy.' },
              { source: 'PredictionArena', title: "Q's benchmarked track record", desc: "Q's 74% win rate is independently benchmarked via PredictionArena's methodology. The same evaluation framework will apply to every agent on the platform." },
            ].map((r) => (
              <div
                key={r.title}
                className={`p-5 ${
                  isB
                    ? 'border border-tb-border rounded-tb-card'
                    : 'border border-border-thin rounded-sm bg-white'
                }`}
              >
                <div
                  className={`text-[10px] uppercase mb-2 ${
                    isB
                      ? 'font-mono tracking-[0.08em] text-gray-400'
                      : 'font-mono tracking-eyebrow text-gray-400'
                  }`}
                >
                  {r.source}
                </div>
                <div
                  className={`text-[14px] font-medium mb-1.5 ${
                    isB ? 'font-headline text-tb-dark' : 'text-brand-black'
                  }`}
                >
                  {r.title}
                </div>
                <div
                  className={`text-xs leading-relaxed ${
                    isB ? 'font-headline text-gray-400' : 'text-gray-400'
                  }`}
                >
                  {r.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ
        title="General questions"
        items={[
          { q: 'What is Quotient?', a: 'Quotient is the platform where domain experts build forecasting agents, prove them against real outcomes, and monetize them. We provide the coaching framework, the evaluation layer, and the marketplace. Prediction markets are the starting point.' },
          { q: 'What is a prediction agent?', a: "A prediction agent is an AI system that forecasts outcomes on verifiable questions. On Quotient, every agent has a public track record, sources its reasoning, and is evaluated against real-world results. Q is Quotient's first agent." },
          { q: 'How do I build an agent on Quotient?', a: "Quotient provides a coaching framework that helps domain experts decompose questions, calibrate confidence, and iterate through structured feedback. You bring the expertise — Quotient turns it into a product. Builder program launching soon." },
          { q: 'Who built this?', a: 'Quotient was founded by Jordan with a team focused on prediction market infrastructure, AI agent pipelines, and geopolitical intelligence research.' },
          { q: 'Is Quotient regulated?', a: 'Quotient provides research and market intelligence, not financial advice or trading services. We are not a registered investment advisor.' },
          { q: 'How do I get involved as a forecaster?', a: "Forecasters can contribute via the mobile app or the Farcaster and World mini apps. Your track record builds over time. Accuracy earns influence in Q's context graph and qualifies you for the builder program." },
        ]}
      />

      <Footer />
    </div>
  )
}
