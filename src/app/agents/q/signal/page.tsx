import NavWithModal from '@/components/NavWithModal'
import QTabBar from '@/components/QTabBar'
import QCalledIt from '@/components/QCalledIt'
import LiveSignal from '@/components/LiveSignal'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function SignalPage() {
  return (
    <div className='min-h-screen bg-tb-page pt-[44px]'>
      <NavWithModal />
      <QTabBar />

      <main className="flex flex-col p-tb-gap pt-0 w-full">
        <div className="flex flex-col gap-tb-gap">
          <SignalHero />
          <QCalledIt />
          <LiveSignal />
          <SignalPricing />
          <FAQ
            title="Common questions"
            items={[
              { q: 'What markets does Signal cover?', a: 'Signal covers 600+ geopolitical prediction markets — elections, policy, and macroeconomic triggers. We prioritize markets on Polymarket and Kalshi where thinly traded conditions create the most mispricing opportunity.' },
              { q: "How is Q's forecast different from the market odds?", a: "Market odds reflect crowd consensus, which is often driven by sentiment, recency bias, and low liquidity. Q's forecast is built from a structured evidence pipeline calibrated by human forecasters with verified track records. The gap between the two is the signal." },
              { q: 'How often is the signal updated?', a: "Signal updates daily. Markets with breaking developments may update intraday. You'll receive email alerts if a spread changes materially on a market you're watching." },
              { q: "What's included in the free tier?", a: 'The free tier includes 2 live markets in the Signal dashboard, weekly Substack digest, mobile app access (Farcaster and World mini apps), and access to the forecaster leaderboard. No credit card required.' },
              { q: 'Is this financial advice?', a: 'Quotient provides market intelligence, not financial advice. Signal is a research tool. All trading decisions are your own.' },
            ]}
          />
          <Footer />
        </div>
      </main>
    </div>
  )
}

function SignalHero() {
  const mono = 'font-mono'

  return (
    <section className='bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y'>
      <div className='text-center'>
        <span className="block text-[11px] uppercase mb-4 font-mono tracking-[0.08em] text-tb-primary">
          Signal
        </span>
        <h1 className="font-headline font-bold text-[32px] lg:text-[48px] leading-[0.95] uppercase text-tb-dark tracking-[-0.02em] mb-5">
          Trade on Q&apos;s intelligence
        </h1>
        <p className="text-[15px] leading-relaxed max-w-[560px] mx-auto mb-8 text-tb-dark/70">
          Signal gives you Q&apos;s forecast, the spread against market odds, the key
          factors driving the call, and the sourced evidence behind it. Everything
          you need to form a view and trade with conviction.
        </p>

        {/* Signal preview table */}
        <div className="overflow-hidden text-left border border-tb-border rounded-tb-card">
          <div className="flex items-center justify-between px-5 py-3 border-b bg-white border-tb-border">
            <span className="text-[11px] uppercase font-mono tracking-[0.08em] text-gray-400">
              Live signal &middot; 3 markets (free preview)
            </span>
            <span className={`${mono} text-[11px] text-gray-400 max-md:hidden`}>
              Subscribe to unlock all 600+ markets
            </span>
          </div>
          <div className="grid grid-cols-[1fr_80px_80px_70px_200px] max-md:grid-cols-[1fr_80px_80px] gap-4 border-b px-5 py-2.5 bg-white border-tb-border">
            <span className={`${mono} text-[10px] text-gray-400 uppercase tracking-wide`}>Market</span>
            <span className={`${mono} text-[10px] text-gray-400 uppercase tracking-wide`}>Market odds</span>
            <span className={`${mono} text-[10px] text-gray-400 uppercase tracking-wide`}>Q says</span>
            <span className={`${mono} text-[10px] text-gray-400 uppercase tracking-wide max-md:hidden`}>Spread</span>
            <span className={`${mono} text-[10px] text-gray-400 uppercase tracking-wide max-md:hidden`}>Top signal</span>
          </div>
          <div className="grid grid-cols-[1fr_80px_80px_70px_200px] max-md:grid-cols-[1fr_80px_80px] gap-4 items-center bg-white px-5 py-4 border-b border-tb-border">
            <div className="text-[13px] font-medium leading-snug font-headline text-tb-dark">Will Russia capture Kostyantynivka by June 30?</div>
            <div className={`${mono} text-xs text-gray-400`}>72% YES</div>
            <div className={`${mono} text-[13px] font-medium text-tb-primary`}>NO &middot; 15%</div>
            <div className="max-md:hidden"><span className={`${mono} text-xs font-medium px-2 py-0.5 rounded-sm bg-orange-50 text-orange-600`}>56 pts</span></div>
            <div className="text-xs italic leading-snug max-md:hidden font-headline text-gray-500">Frontline Situation as of March 4, 2026</div>
          </div>
          <div className="grid grid-cols-[1fr_80px_80px_70px_200px] max-md:grid-cols-[1fr_80px_80px] gap-4 items-center bg-white px-5 py-4 border-b border-tb-border">
            <div className="text-[13px] font-medium leading-snug font-headline text-tb-dark">US x Cuba military clash in 2026?</div>
            <div className={`${mono} text-xs text-gray-400`}>54% NO</div>
            <div className={`${mono} text-[13px] font-medium text-tb-primary`}>NO &middot; 4%</div>
            <div className="max-md:hidden"><span className={`${mono} text-xs font-medium px-2 py-0.5 rounded-sm bg-red-50 text-tb-primary`}>50 pts</span></div>
            <div className="text-xs italic leading-snug max-md:hidden font-headline text-gray-500">The Coming Showdown Over Cuba</div>
          </div>
          {/* Blurred/gated row */}
          <div className="grid grid-cols-[1fr_80px_80px_70px_200px] max-md:grid-cols-[1fr_80px_80px] gap-4 items-center bg-white px-5 py-4 opacity-40 blur-[3px] select-none">
            <div className="text-[13px] font-medium text-brand-black">████████████████████████</div>
            <div className="font-mono text-xs text-gray-400">██%</div>
            <div className="font-mono text-[13px] text-brand-blue">██</div>
            <div className="max-md:hidden"><span className="font-mono text-xs px-2 py-0.5 rounded-sm bg-orange-50 text-orange-600">██</span></div>
            <div className="text-xs text-gray-400 max-md:hidden">██████████████</div>
          </div>
          <div className="flex items-center justify-between px-5 py-3.5 border-t bg-white border-tb-border">
            <span className={`${mono} text-[11px] text-gray-400`}>597 more markets gated</span>
            <button className="text-[11px] uppercase px-4 py-2 transition-colors bg-tb-dark text-white font-mono tracking-[0.08em] hover:bg-tb-cta-hover">
              Subscribe to unlock
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function SignalPricing() {
  return (
    <section id="pricing" className='bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y'>
      <div className='text-center'>
        <span className="block text-[11px] uppercase mb-4 font-mono tracking-[0.08em] text-gray-500">
          Pricing
        </span>
        <h2 className="font-semibold tracking-[-0.02em] mb-10 font-headline font-bold text-[32px] lg:text-[48px] uppercase text-tb-dark leading-[0.95]">
          Simple pricing
        </h2>
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4 text-left">
          <PricingCol tier="Free" price="$0" freq="forever" features={['2 live markets', 'Weekly Substack digest', 'Mobile app access', 'Forecaster leaderboard']} cta="Get started free" />
          <PricingCol tier="Signal" price="$[X]" freq="/month" features={['All 600+ markets', 'Key factors per market', 'Sourced evidence chain', 'Historical track record', 'Q Called It archive', 'Spread change alerts']} cta="Subscribe" featured />
          <PricingCol tier="Signal + Equities" price="$[Y]" freq="/month" features={['Everything in Signal', 'Commodity impact mapping', 'Global equity signals', 'Portfolio alerts']} cta="Subscribe" />
        </div>
      </div>
    </section>
  )
}

function PricingCol({
  tier, price, freq, features, cta, featured = false,
}: {
  tier: string; price: string; freq: string; features: string[]; cta: string; featured?: boolean
}) {
  return (
    <div className={`p-7 flex flex-col ${
      featured
        ? 'bg-tb-dark rounded-tb-card'
        : 'border border-tb-border rounded-tb-card bg-white'
    }`}>
      <div className={`font-mono text-[10px] uppercase tracking-[0.08em] mb-2 ${featured ? 'text-gray-600' : 'text-gray-400'}`}>{tier}</div>
      <div className={`text-[32px] font-semibold tracking-[-0.02em] leading-none mb-1 ${featured ? 'text-gray-200' : 'text-tb-dark'}`}>{price}</div>
      <div className={`font-mono text-[11px] mb-5 ${featured ? 'text-gray-600' : 'text-gray-400'}`}>{freq}</div>
      <div className={`h-px mb-5 ${featured ? 'bg-gray-800' : 'bg-tb-border'}`} />
      <div className="flex flex-col gap-2 mb-6">
        {features.map((f) => (
          <div key={f} className={`text-[12px] ${featured ? 'text-gray-500' : 'text-gray-400'}`}>{f}</div>
        ))}
      </div>
      <div className="mt-auto">
        <button className={`w-full text-center text-xs font-mono uppercase px-5 py-2.5 transition-colors ${
          featured
            ? 'tracking-[0.08em] border border-gray-700 text-gray-400 hover:border-tb-primary hover:text-white'
            : 'tracking-[0.08em] border border-tb-border text-gray-500 hover:border-tb-primary hover:text-tb-dark'
        }`}>
          {cta}
        </button>
      </div>
    </div>
  )
}
