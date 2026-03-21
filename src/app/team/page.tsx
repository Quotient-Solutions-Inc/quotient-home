import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

// TEAM CONTENT — add headshots, names, titles, bios

export default function TeamPage() {
  return (
    <div className='min-h-screen bg-tb-page pt-[44px]'>
      <Nav />

      <main className="flex flex-col p-tb-gap pt-0 w-full">
        <div className="flex flex-col gap-tb-gap">
          <section className="bg-tb-dark rounded-tb-card px-8 lg:px-tb-section-x py-12 lg:py-16">
            <div className="max-w-content mx-auto">
              <div className='max-w-[640px]'>
                <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-tb-primary mb-3">
                  Team
                </span>
                <h1 className="font-headline font-bold text-[24px] lg:text-[36px] leading-[0.95] text-white tracking-[-0.02em] mb-2">
                  The team behind Quotient
                </h1>
                <p className="text-[15px] leading-[1.7] text-white/60">
                  Building the intelligence layer for prediction markets.
                </p>
              </div>
            </div>
          </section>

          <section className='bg-tb-page rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y'>
            <div className="max-w-content mx-auto">
            <div className="text-center py-16">
              {/* TEAM CONTENT — add headshots, names, titles, bios */}
              <p className="text-[15px] text-tb-dark/50 font-mono uppercase tracking-[0.08em]">
                Team content coming soon
              </p>
            </div>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </div>
  )
}
