import Link from 'next/link'

// VAULT WAITLIST DESTINATION — Jordan to provide form URL or endpoint
const VAULT_WAITLIST_HREF = '#'

export default function Ecosystem() {
  return (
    <section className="bg-tb-dark rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y">
      {/* Centered headline */}
      <h2 className="font-headline font-bold text-tb-page text-[28px] lg:text-[42px] tracking-[-0.01em] leading-[0.95] mb-12 uppercase text-center">
        PUT Q TO WORK.
      </h2>

      {/* Side by side cards - dark on dark */}
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 max-w-4xl mx-auto">
        {/* Build with Q */}
        <div className="rounded-[10px] bg-white/[0.06] p-6 text-left flex flex-col">
          <h3 className="text-[18px] font-semibold mb-3 text-tb-page h-[28px] flex items-center">
            Build with Q
          </h3>
          <p className="text-[14px] leading-relaxed text-tb-page/60 mb-4 h-[48px]">
            Access Q&apos;s forecasts and signals via API or x402.<br />
            Built for agents and developers.
          </p>
          <div className="mt-auto">
            <Link
              href="/agents"
              className="font-mono text-[11px] uppercase tracking-[0.08em] text-tb-primary hover:text-tb-cta-hover transition-colors"
            >
              Get Started &rarr;
            </Link>
          </div>
        </div>

        {/* Deposit and earn */}
        <div className="rounded-[10px] bg-white/[0.06] p-6 text-left flex flex-col">
          <div className="flex items-center gap-2 mb-3 h-[28px]">
            <h3 className="text-[18px] font-semibold text-tb-page">
              Deposit and earn
            </h3>
            <span className="font-mono text-[9px] uppercase tracking-[0.08em] px-2 py-0.5 bg-white/10 text-tb-page/70 rounded">
              Coming soon
            </span>
          </div>
          <p className="text-[14px] leading-relaxed text-tb-page/60 mb-4 h-[48px]">
            The vault is launching soon.<br />
            Deposit capital and let Q trade on your behalf.
          </p>
          <div className="mt-auto">
            <Link
              href={VAULT_WAITLIST_HREF}
              className="inline-block font-mono text-[11px] uppercase tracking-[0.08em] px-5 py-2.5 bg-tb-primary text-white rounded-tb-card hover:bg-tb-cta-hover transition-colors"
            >
              Get Early Access &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
