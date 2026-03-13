import Link from 'next/link'

export default function MarketplaceHero() {
  return (
    <section className="relative overflow-hidden bg-tb-primary rounded-tb-card min-h-[480px] md:min-h-[640px] lg:min-h-[720px] flex flex-col justify-end px-8 lg:px-tb-section-x py-12 lg:py-16">
      <div className='flex flex-col gap-6 relative z-10 max-w-[720px]'>
        <div className='flex flex-col w-full'>
          <h1 className='font-headline font-bold uppercase tracking-[-0.01em] text-[32px] md:text-[56px] lg:text-[72px] text-white leading-[0.95] mb-6'>
            <span className="block">Q trades</span>
            <span className="block">prediction markets.</span>
            <span className="block text-tb-dark mt-2 italic">You collect</span>
            <span className="block text-tb-dark italic">the returns.</span>
          </h1>
          <div className="flex flex-col gap-2 mb-8">
            <p className="font-headline italic text-white/90 text-[16px] lg:text-[18px] leading-[150%]">
              It finds where the odds are wrong and trades on the gap.
            </p>
            <p className="font-mono text-[12px] lg:text-[13px] uppercase tracking-[0.06em] text-white/60">
              69% win rate &middot; 3.5x win-to-loss ratio
            </p>
          </div>
          <div className='flex gap-3'>
            <Link
              href="/agents/q"
              className='px-8 h-[50px] flex items-center bg-tb-cream text-tb-dark font-mono text-[14px] uppercase tracking-[0.08em] rounded-tb-card hover:bg-white transition-colors'
            >
              Get access
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
