'use client'

import NavWithModal from '@/components/NavWithModal'
import QTabBar from '@/components/QTabBar'
import CodeBlock from '@/components/CodeBlock'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import { useTheme } from '@/lib/ThemeContext'

export default function ApiPage() {
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
            For developers &amp; agents
          </span>
          {isB ? (
            <h1 className="font-headline font-bold text-[clamp(2.5rem,6vw,5rem)] leading-[0.85] uppercase text-tb-dark tracking-[-0.03em] mb-5">
              Geopolitical signal.<br />Built for agents.
            </h1>
          ) : (
            <h1 className="font-headline text-[42px] max-md:text-[32px] font-normal leading-[1.15] tracking-[-0.02em] text-brand-black mb-5">
              Geopolitical signal.<br />Built for agents.
            </h1>
          )}
          <p className={`text-[15px] leading-relaxed max-w-[580px] mb-8 ${
            isB ? 'font-headline text-gray-500' : 'text-gray-500'
          }`}>
            Agents reasoning about news and geopolitics need a verified signal layer. Q gives your pipeline structured, sourced, accountable intelligence on 600+ geopolitical prediction markets.
          </p>
          <div className="flex gap-3 mb-12">
            <a
              href="https://docs.quotient.social"
              className={`text-xs uppercase px-5 py-2.5 transition-colors ${
                isB
                  ? 'bg-tb-dark text-white font-mono tracking-[0.08em] hover:bg-tb-cta-hover'
                  : 'bg-brand-black text-white font-mono tracking-wide hover:bg-gray-800'
              }`}
            >
              Start building
            </a>
            <a
              href="https://docs.quotient.social"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs uppercase px-5 py-2.5 border transition-colors ${
                isB
                  ? 'text-gray-500 font-mono tracking-[0.08em] border-tb-border hover:border-tb-primary'
                  : 'text-gray-500 font-mono tracking-wide border-border-thin hover:border-gray-400'
              }`}
            >
              Read the docs ↗
            </a>
          </div>

          <CodeBlock />
        </div>
      </section>

      {/* Problem → Solution contrast */}
      <section className={`border-b ${isB ? 'border-tb-border' : 'border-border-thin'}`}>
        <div className={isB ? '' : 'max-w-content mx-auto'}>
          <div className={`py-16 ${isB ? 'px-8 lg:px-tb-section-x' : 'px-10 max-md:px-6'}`}>
            <h2 className={`font-semibold tracking-[-0.02em] mb-3 ${
              isB
                ? 'font-headline font-bold text-[clamp(2rem,4vw,3.5rem)] uppercase text-tb-dark leading-[0.9]'
                : 'text-[28px] text-brand-black'
            }`}>Most agents are reasoning on noise.</h2>
            <p className={`text-[15px] leading-relaxed max-w-[580px] ${
              isB ? 'font-headline text-gray-500' : 'text-gray-500'
            }`}>
              News pipelines surface volume without verification. Market odds reflect sentiment, not evidence.
            </p>
          </div>
          <div className="grid grid-cols-3 max-md:grid-cols-1">
            <div className={`p-7 ${isB ? 'bg-gray-50' : 'bg-[#F5F5F3]'}`}>
              <div className={`${mono} text-[11px] text-gray-400 mb-3.5`}>Without Quotient</div>
              <div className={`text-[15px] font-semibold text-gray-400 mb-2.5 ${isB ? 'font-headline' : ''}`}>Raw headlines</div>
              <div className={`text-[13px] text-gray-400 leading-relaxed ${isB ? 'font-headline' : ''}`}>High volume, no accountability or source ranking.</div>
            </div>
            <div className={`p-7 ${isB ? 'bg-gray-100' : 'bg-[#F0F0EE]'}`}>
              <div className={`${mono} text-[11px] text-gray-400 mb-3.5`}>Without Quotient</div>
              <div className={`text-[15px] font-semibold text-gray-400 mb-2.5 ${isB ? 'font-headline' : ''}`}>Raw market odds</div>
              <div className={`text-[13px] text-gray-400 leading-relaxed ${isB ? 'font-headline' : ''}`}>Crowd sentiment, easily manipulated, no evidence.</div>
            </div>
            <div className={`p-7 ${isB ? 'bg-tb-dark' : 'bg-brand-black'}`}>
              <div className={`${mono} text-[11px] mb-3.5 ${isB ? 'text-tb-primary' : 'text-brand-blue'}`}>With Quotient</div>
              <div className={`text-[15px] font-semibold text-white mb-2.5 ${isB ? 'font-headline' : ''}`}>Verified signal</div>
              <div className={`text-[13px] text-gray-400 leading-relaxed ${isB ? 'font-headline' : ''}`}>Sourced evidence, forecaster attribution, spread vs. odds.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Endpoints */}
      <section className={`border-b ${
        isB ? 'border-tb-border bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y' : 'border-border-thin py-20 px-10 max-md:px-6'
      }`}>
        <div className={isB ? '' : 'max-w-content mx-auto'}>
          <span className={`block text-[11px] uppercase mb-4 ${
            isB ? 'font-mono tracking-[0.08em] text-gray-500' : 'font-mono tracking-eyebrow text-gray-500'
          }`}>
            Endpoints
          </span>
          <h2 className={`font-semibold tracking-[-0.02em] mb-2 ${
            isB
              ? 'font-headline font-bold text-[clamp(2rem,4vw,3.5rem)] uppercase text-tb-dark leading-[0.9]'
              : 'text-[28px] text-brand-black'
          }`}>Core endpoints</h2>
          <p className={`text-[15px] leading-relaxed max-w-[560px] mb-10 ${
            isB ? 'font-headline text-gray-500' : 'text-gray-500'
          }`}>
            Three endpoints cover most agent use cases. Start with /v1/markets to orient, then pull signal detail per market.
          </p>
          <div className={`grid grid-cols-3 max-md:grid-cols-1 gap-px overflow-hidden ${
            isB ? 'border border-tb-border rounded-tb-card' : 'bg-border-thin border border-border-thin rounded-sm'
          }`}>
            {[
              { method: 'GET', path: '/v1/markets', desc: 'All active markets with current odds, Q forecast, and spread. Filterable by category, spread magnitude, platform, and resolution date.' },
              { method: 'GET', path: '/v1/signals/:id', desc: "Full intelligence package for a single market. Q's forecast, spread, key factors, sourced signals, forecaster attribution." },
              { method: 'GET', path: '/v1/intelligence', desc: "Raw context graph. Q's source rankings, forecaster weights, evidence chains. For agents building deeper reasoning pipelines." },
            ].map((ep, i) => (
              <div key={ep.path} className={`p-7 ${isB ? 'bg-white' : i % 2 === 0 ? 'bg-white' : 'bg-surface-off'}`}>
                <div className={`${mono} text-[11px] text-gray-400 mb-2`}>{ep.method}</div>
                <div className={`${mono} text-[13px] font-medium mb-3 ${isB ? 'text-tb-dark' : 'text-brand-black'}`}>{ep.path}</div>
                <div className={`text-[13px] leading-relaxed ${isB ? 'font-headline text-gray-500' : 'text-gray-500'}`}>{ep.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discovery + Payment */}
      <section className={`border-b ${
        isB ? 'border-tb-border bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y' : 'bg-surface-off border-border-thin py-20 px-10 max-md:px-6'
      }`}>
        <div className={`grid grid-cols-2 max-md:grid-cols-1 gap-12 ${isB ? '' : 'max-w-content mx-auto'}`}>
          <div>
            <h2 className={`text-[24px] font-semibold tracking-[-0.02em] mb-4 ${
              isB ? 'font-headline text-tb-dark' : 'text-brand-black'
            }`}>Auto-discoverable</h2>
            <p className={`text-[14px] leading-relaxed mb-5 ${
              isB ? 'font-headline text-gray-500' : 'text-gray-500'
            }`}>
              Quotient is registered across major agent skill directories. Your agent can find and use Quotient without manual configuration.
            </p>
            <div className="flex flex-col gap-3">
              {['llms.txt available at quotient.social/llms.txt', 'skill.md for OpenClaw and compatible frameworks', 'Listed on ClawHub and AgentSkills.io', 'MCP server available'].map((item) => (
                <div key={item} className={`flex gap-3 items-start text-[13px] ${isB ? 'font-headline text-gray-500' : 'text-gray-500'}`}>
                  <span className={`flex-shrink-0 w-5 h-5 border rounded-sm flex items-center justify-center text-[10px] text-gray-400 mt-0.5 ${
                    isB ? 'border-tb-border font-mono' : 'border-border-thin font-mono'
                  }`}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className={`text-[24px] font-semibold tracking-[-0.02em] mb-4 ${
              isB ? 'font-headline text-tb-dark' : 'text-brand-black'
            }`}>Flexible payment</h2>
            <p className={`text-[14px] leading-relaxed mb-5 ${
              isB ? 'font-headline text-gray-500' : 'text-gray-500'
            }`}>
              Pay per call or subscribe. Agent-native payment via x402. Human-friendly via Stripe.
            </p>
            <div className="flex flex-col gap-3">
              {['x402 micropayments for agentic workflows', 'Stripe credit card for developers', 'Volume tiers for high-frequency agent use'].map((item) => (
                <div key={item} className={`flex gap-3 items-start text-[13px] ${isB ? 'font-headline text-gray-500' : 'text-gray-500'}`}>
                  <span className={`flex-shrink-0 w-5 h-5 border rounded-sm flex items-center justify-center text-[10px] text-gray-400 mt-0.5 ${
                    isB ? 'border-tb-border font-mono' : 'border-border-thin font-mono'
                  }`}>$</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQ
        title="Developer questions"
        items={[
          { q: "What's the rate limit?", a: 'Default rate limit is 100 requests/minute. Volume tiers are available for agents making high-frequency calls.' },
          { q: 'How does x402 payment work?', a: 'x402 is a micropayment protocol for HTTP APIs. Your agent sends a payment header with each request. No API key management required. We support USDC on Base.' },
          { q: 'How fresh is the data?', a: 'Core signal data updates daily. Breaking news triggers intraday updates on affected markets.' },
          { q: 'Can I access historical data?', a: 'Yes. The /v1/intelligence endpoint includes historical forecast data and resolved market track records.' },
          { q: 'Is there a sandbox environment?', a: 'Yes. sandbox.quotient.social mirrors production with a fixed dataset. Free to use. No payment required.' },
        ]}
      />

      <Footer />
    </div>
  )
}
