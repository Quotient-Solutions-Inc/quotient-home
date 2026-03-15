'use client'

import Link from 'next/link'
import MarketplaceNav from '@/components/MarketplaceNav'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-tb-page">
      <MarketplaceNav />
      <main className="pt-[44px]">
        {/* ── Section 1: Hero ── */}
        <section className="px-8 lg:px-tb-section-x py-20 lg:py-28">
          <div className="max-w-prose">
            <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-tb-primary mb-4">
              Prediction Agents
            </span>
            <h1 className="font-headline font-bold text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] tracking-[-0.02em] text-tb-dark mb-5">
              Quotient builds prediction agents that find mispriced markets.
            </h1>
            <p className="text-[16px] text-gray-500 leading-relaxed max-w-[580px] mb-3">
              We start with geopolitics. Q is our first agent — it analyzes 600+
              prediction markets, finds where the odds are wrong, and publishes
              sourced reasoning for every call.
            </p>
            <p className="font-mono text-[12px] text-gray-400 mb-8">
              Q is live. More agents coming.
            </p>
            <Link
              href="/agents/q"
              className="inline-flex items-center gap-1 px-6 py-3 bg-tb-primary text-white font-mono text-[13px] uppercase tracking-[0.08em] hover:bg-tb-cta-hover transition-colors"
            >
              Meet Q &rarr;
            </Link>
          </div>
        </section>

        {/* ── Section 2: How It Works ── */}
        <section className="bg-tb-cream px-8 lg:px-tb-section-x py-tb-section-y">
          <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-gray-500 mb-4">
            How It Works
          </span>
          <p className="text-[15px] text-gray-600 leading-[1.75] max-w-[640px] mb-10">
            Q processes 1,600+ ranked sources daily. Verified human forecasters
            with public track records sharpen every call. Every forecast is
            sourced — when Q is wrong, the failure is traceable. When it&apos;s right,
            the reasoning is citable. Resolved outcomes feed back into the model.
            Accuracy compounds.
          </p>
          <div className="grid grid-cols-3 max-md:grid-cols-1 border border-tb-border overflow-hidden">
            {[
              {
                title: 'Sourced evidence',
                desc: 'Every claim links to ranked primary sources.',
              },
              {
                title: 'Human calibration',
                desc: 'Verified forecasters with public track records.',
              },
              {
                title: 'Continuous improvement',
                desc: 'Every resolved outcome refines the model.',
              },
            ].map((cell, i) => (
              <div
                key={cell.title}
                className={`p-7 bg-white ${
                  i < 2 ? 'max-md:border-b md:border-r border-tb-border' : ''
                }`}
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-gray-400 mb-2">
                  {cell.title}
                </div>
                <div className="text-[13px] text-gray-500 leading-relaxed">
                  {cell.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 3: About ── */}
        <section id="about" className="px-8 lg:px-tb-section-x py-tb-section-y">
          <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-gray-500 mb-4">
            About Quotient
          </span>
          <p className="text-[15px] text-gray-600 leading-[1.75] max-w-[640px] mb-6">
            Judgment creates enormous value. There&apos;s no infrastructure for
            proving it. People with real expertise make critical calls every day
            — there&apos;s no way to verify who&apos;s actually good, scale what
            they know, or build a business around it. Quotient is that
            infrastructure. We start with prediction markets because they
            generate questions with verifiable outcomes. But the thesis is
            broader: any domain where judgment matters and outcomes are
            measurable.
          </p>
          <p className="font-mono text-[12px] text-gray-400">
            Founded by Jordan, Cameron, Matthew, Shira, and Kasra. Based in
            Austin and New York.
          </p>
        </section>

        {/* ── Section 4: CTA Banner ── */}
        <section className="bg-tb-dark px-8 lg:px-tb-section-x py-16 lg:py-24 text-center">
          <h2 className="font-headline text-[clamp(1.8rem,4vw,3rem)] text-white leading-[1.1] mb-6">
            See what Q is calling right now.
          </h2>
          <Link
            href="/agents/q"
            className="inline-flex items-center gap-1 px-6 py-3 bg-tb-primary text-white font-mono text-[13px] uppercase tracking-[0.08em] hover:bg-tb-cta-hover transition-colors"
          >
            Go to Q &rarr;
          </Link>
        </section>

        {/* ── Section 5: Footer ── */}
        <Footer />
      </main>
    </div>
  )
}
