'use client'

import NavWithModal from '@/components/NavWithModal'
import QTabBar from '@/components/QTabBar'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import { useTheme } from '@/lib/ThemeContext'

export default function PlatformsPage() {
  const { theme } = useTheme()
  const isB = theme === 'B'
  const mono = isB ? 'font-mono' : 'font-mono'

  return (
    <div className="min-h-screen">
      <NavWithModal />
      <QTabBar />

      {/* Hero */}
      <section className={`border-b ${
        isB ? 'border-tb-border bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y' : 'border-border-thin py-20 px-10 max-md:px-6'
      }`}>
        <div className={isB ? '' : 'max-w-content mx-auto'}>
          <span className={`block text-[11px] uppercase mb-4 ${
            isB ? 'font-mono tracking-[0.08em] text-gray-400' : 'font-mono tracking-eyebrow text-gray-400'
          }`}>
            For platforms &amp; wallets
          </span>
          {isB ? (
            <h1 className="font-headline font-bold text-[clamp(2.5rem,6vw,5rem)] leading-[0.85] uppercase text-tb-dark tracking-[-0.03em] mb-5">
              More context.<br />More trading volume.
            </h1>
          ) : (
            <h1 className="font-headline text-[42px] max-md:text-[32px] font-normal leading-[1.15] tracking-[-0.02em] text-brand-black mb-5">
              More context.<br />More trading volume.
            </h1>
          )}
          <p className={`text-[15px] leading-relaxed max-w-[560px] mb-8 ${
            isB ? 'font-headline text-gray-500' : 'text-gray-500'
          }`}>
            Traders who understand why a market is priced the way it is make larger bets, more often. Quotient&apos;s signal layer integrates directly into your existing markets. No rebuild required.
          </p>
          <div className="flex gap-3 mb-12">
            <a
              href="mailto:hello@quotient.social"
              className={`text-xs uppercase px-5 py-2.5 transition-colors ${
                isB
                  ? 'bg-tb-dark text-white font-mono tracking-[0.08em] hover:bg-tb-cta-hover'
                  : 'bg-brand-black text-white font-mono tracking-wide hover:bg-gray-800'
              }`}
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className={`border-b ${
        isB ? 'border-tb-border bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y' : 'bg-surface-off border-border-thin py-20 px-10 max-md:px-6'
      }`}>
        <div className={isB ? '' : 'max-w-content mx-auto'}>
          <span className={`block text-[11px] uppercase mb-4 ${
            isB ? 'font-mono tracking-[0.08em] text-gray-500' : 'font-mono tracking-eyebrow text-gray-500'
          }`}>
            Integration
          </span>
          <h2 className={`font-semibold tracking-[-0.02em] mb-2 ${
            isB
              ? 'font-headline font-bold text-[clamp(2rem,4vw,3.5rem)] uppercase text-tb-dark leading-[0.9]'
              : 'text-[28px] text-brand-black'
          }`}>How it integrates</h2>
          <p className={`text-[15px] leading-relaxed max-w-[560px] mb-10 ${
            isB ? 'font-headline text-gray-500' : 'text-gray-500'
          }`}>
            Quotient surfaces alongside your existing markets. Your users see richer context. Your platform sees deeper engagement.
          </p>
          <div className={`grid grid-cols-3 max-md:grid-cols-1 gap-px overflow-hidden mb-10 ${
            isB ? 'border border-tb-border rounded-tb-card' : 'bg-border-thin border border-border-thin rounded-sm'
          }`}>
            <div className={`p-7 flex flex-col items-center justify-center text-center ${
              isB ? 'bg-white border-r border-tb-border' : 'bg-blue-50'
            }`}>
              <div className={`${mono} text-[11px] uppercase ${isB ? 'tracking-[0.08em] text-gray-400' : 'tracking-wide text-brand-blue'} mb-2`}>Step 1</div>
              <div className={`${mono} text-[14px] font-medium ${isB ? 'text-tb-dark' : 'text-brand-blue'}`}>Quotient API</div>
            </div>
            <div className={`p-7 flex flex-col items-center justify-center text-center ${isB ? 'bg-white border-r border-tb-border' : 'bg-white'}`}>
              <div className={`${mono} text-[11px] text-gray-400 uppercase ${isB ? 'tracking-[0.08em]' : 'tracking-wide'} mb-2`}>Step 2</div>
              <div className={`${mono} text-[14px] text-gray-500 font-medium`}>Your platform UI</div>
            </div>
            <div className={`p-7 flex flex-col items-center justify-center text-center ${isB ? 'bg-white' : 'bg-white'}`}>
              <div className={`${mono} text-[11px] text-gray-400 uppercase ${isB ? 'tracking-[0.08em]' : 'tracking-wide'} mb-2`}>Step 3</div>
              <div className={`${mono} text-[14px] text-gray-500 font-medium`}>Trader sees signal</div>
            </div>
          </div>
          <div className={`grid grid-cols-3 max-md:grid-cols-1 gap-px overflow-hidden ${
            isB ? 'border border-tb-border rounded-tb-card' : 'bg-border-thin border border-border-thin rounded-sm'
          }`}>
            {[
              { title: 'You keep your brand', body: 'You control presentation. We provide the data layer. Surface it however fits your UX.' },
              { title: 'No rebuild required', body: "Signal doesn't require changes to your market mechanics. It sits alongside independently as a read-only data layer." },
              { title: 'Traders get the full picture', body: "Forecast, spread, key factors, source ranking, directional call. Structured JSON your platform can render." },
            ].map((s, i) => (
              <div key={s.title} className={`p-7 ${isB ? 'bg-white' : i % 2 === 1 ? 'bg-surface-off' : 'bg-white'}`}>
                <div className={`text-[15px] font-semibold mb-2.5 ${isB ? 'font-headline text-tb-dark' : 'text-brand-black'}`}>{s.title}</div>
                <div className={`text-[13px] leading-relaxed ${isB ? 'font-headline text-gray-500' : 'text-gray-500'}`}>{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligence package */}
      <section className={`border-b ${
        isB ? 'border-tb-border bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y' : 'border-border-thin py-20 px-10 max-md:px-6'
      }`}>
        <div className={isB ? '' : 'max-w-content mx-auto'}>
          <span className={`block text-[11px] uppercase mb-4 ${
            isB ? 'font-mono tracking-[0.08em] text-gray-500' : 'font-mono tracking-eyebrow text-gray-500'
          }`}>
            Intelligence package
          </span>
          <h2 className={`font-semibold tracking-[-0.02em] mb-2 ${
            isB
              ? 'font-headline font-bold text-[clamp(2rem,4vw,3.5rem)] uppercase text-tb-dark leading-[0.9]'
              : 'text-[28px] text-brand-black'
          }`}>What your users see</h2>
          <p className={`text-[15px] leading-relaxed max-w-[560px] mb-10 ${
            isB ? 'font-headline text-gray-500' : 'text-gray-500'
          }`}>
            Each market gets a structured intelligence package your platform can surface however it fits your UX.
          </p>
          <div className={`grid grid-cols-3 max-md:grid-cols-1 gap-px overflow-hidden ${
            isB ? 'border border-tb-border rounded-tb-card' : 'bg-border-thin border border-border-thin rounded-sm'
          }`}>
            {[
              { n: '01', title: "Q's directional call", body: 'A plain-language Yes or No call with confidence level.' },
              { n: '02', title: 'Spread indicator', body: "The gap between Q's estimate and market odds — wide means divergence." },
              { n: '03', title: 'Key factors', body: 'The 2–4 sourced factors Q weighted most, so traders can check the work.' },
              { n: '04', title: 'Commodity + equity mapping', body: 'Geopolitical events mapped to commodity and portfolio impact.' },
              { n: '05', title: 'Historical track record', body: "Q's resolved-market accuracy, surfaced per market." },
              { n: '06', title: 'Forecaster attribution', body: 'Which human forecasters contributed, ranked by track record.' },
            ].map((s, i) => (
              <div key={s.n} className={`p-7 ${isB ? 'bg-white' : i % 2 === 0 ? 'bg-surface-off' : 'bg-white'}`}>
                <div className={`text-[11px] mb-3.5 ${isB ? 'font-mono text-gray-400' : 'font-mono text-gray-300'}`}>{s.n}</div>
                <div className={`text-[15px] font-semibold mb-2.5 ${isB ? 'font-headline text-tb-dark' : 'text-brand-black'}`}>{s.title}</div>
                <div className={`text-[13px] leading-relaxed ${isB ? 'font-headline text-gray-500' : 'text-gray-500'}`}>{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After contrast */}
      <section className={`border-b ${isB ? 'border-tb-border' : 'border-border-thin'}`}>
        <div className={`grid grid-cols-2 max-md:grid-cols-1 ${isB ? '' : 'max-w-content mx-auto'}`}>
          {/* Before — muted */}
          <div className={`py-20 px-10 max-md:px-6 ${isB ? 'bg-gray-50' : 'bg-[#F5F5F3]'}`}>
            <span className={`block text-[10px] uppercase mb-4 ${
              isB ? 'font-mono tracking-[0.08em] text-gray-400' : 'font-mono tracking-eyebrow text-gray-400'
            }`}>
              Without Quotient
            </span>
            <h2 className={`text-[24px] font-semibold tracking-[-0.02em] text-gray-400 mb-8 ${isB ? 'font-headline' : ''}`}>Why markets underperform</h2>
            <div className="flex flex-col gap-4">
              {['Low liquidity amplifies noise.', 'No verification layer — odds reflect sentiment, not analysis.', "Traders know the price but not the why."].map((item, i) => (
                <div key={i} className={`flex gap-3 items-start text-[13px] text-gray-400 ${isB ? 'font-headline' : ''}`}>
                  <span className={`flex-shrink-0 w-5 h-5 border border-gray-300 rounded-sm flex items-center justify-center text-[10px] text-gray-300 mt-0.5 ${isB ? 'font-mono' : 'font-mono'}`}>{i + 1}</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          {/* After — brand */}
          <div className={`py-20 px-10 max-md:px-6 ${isB ? 'bg-tb-dark' : 'bg-brand-black'}`}>
            <span className={`block text-[10px] uppercase mb-4 ${
              isB ? 'font-mono tracking-[0.08em] text-tb-primary' : 'font-mono tracking-eyebrow text-brand-blue'
            }`}>
              With Quotient
            </span>
            <h2 className={`text-[24px] font-semibold tracking-[-0.02em] text-white mb-8 ${isB ? 'font-headline' : ''}`}>What Quotient adds</h2>
            <div className="flex flex-col gap-4">
              {['Verified track records replace opinion with accountability.', 'Sourced evidence gives traders a basis for conviction.', 'Institutional-grade intelligence at the market level.'].map((item, i) => (
                <div key={i} className={`flex gap-3 items-start text-[13px] text-gray-400 ${isB ? 'font-headline' : ''}`}>
                  <span className={`flex-shrink-0 w-5 h-5 border rounded-sm flex items-center justify-center text-[10px] mt-0.5 ${
                    isB ? 'border-tb-primary text-tb-primary font-mono' : 'border-brand-blue text-brand-blue font-mono'
                  }`}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pilot CTA */}
      <section className={`border-b ${
        isB ? 'border-tb-border bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y' : 'border-border-thin py-20 px-10 max-md:px-6'
      }`}>
        <div className={`text-center ${isB ? 'max-w-[600px] mx-auto' : 'max-w-[560px] mx-auto'}`}>
          <span className={`block text-[11px] uppercase mb-4 ${
            isB ? 'font-mono tracking-[0.08em] text-gray-500' : 'font-mono tracking-eyebrow text-gray-500'
          }`}>Enterprise pilot</span>
          <h2 className={`font-semibold tracking-[-0.02em] mb-3 ${
            isB
              ? 'font-headline font-bold text-[clamp(2rem,4vw,3.5rem)] uppercase text-tb-dark leading-[0.9]'
              : 'text-[28px] text-brand-black'
          }`}>Ready to add signal to your markets?</h2>
          <p className={`text-[15px] leading-relaxed mb-8 ${
            isB ? 'font-headline text-gray-500' : 'text-gray-500'
          }`}>
            We work with platforms directly to scope integration. Pilots typically run 30-60 days. No long-term commitment required.
          </p>
          <button className={`text-sm uppercase px-8 py-3.5 transition-colors ${
            isB
              ? 'bg-tb-dark text-white font-mono tracking-[0.08em] hover:bg-tb-cta-hover'
              : 'bg-brand-black text-white font-mono tracking-wide hover:bg-gray-800'
          }`}>
            Get in touch
          </button>
        </div>
      </section>

      <FAQ
        title="Platform questions"
        items={[
          { q: 'How does the integration work technically?', a: 'Quotient provides a REST API with endpoints per market, per signal, and per intelligence package. You call our API and render the data in your UI. Integration typically takes 1-2 engineering days.' },
          { q: 'Does this affect our existing market mechanics?', a: "No. Quotient's signal is a read-only data layer. It doesn't interact with your order book, liquidity pool, or market resolution logic." },
          { q: 'What markets are covered?', a: '600+ geopolitical prediction markets with active coverage on Polymarket and Kalshi. New markets are added weekly.' },
          { q: 'How is pricing structured for platforms?', a: 'Platform pricing is based on API call volume and market coverage scope. No public pricing. Reach out to discuss scope and volume.' },
          { q: 'Can we white-label the signal?', a: 'Yes, with attribution requirements. The intelligence can be presented under your brand with a "Powered by Quotient" mark.' },
        ]}
      />

      <Footer />
    </div>
  )
}
