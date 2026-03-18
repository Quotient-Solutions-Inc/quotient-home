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
            <div className='max-w-[680px]'>
              <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-tb-primary mb-5">
                Team
              </span>
              <h1 className="font-headline font-bold text-[32px] lg:text-[48px] leading-[0.95] text-white tracking-[-0.02em] mb-4">
                The team behind Quotient
              </h1>
              <p className="text-[15px] leading-relaxed text-white/70">
                Building the intelligence layer for prediction markets.
              </p>
            </div>
          </section>

          <section className='bg-tb-page rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y'>
            <div className="text-center py-16">
              {/* TEAM CONTENT — add headshots, names, titles, bios */}
              <p className="text-[15px] text-tb-dark/50 font-mono uppercase tracking-[0.08em]">
                Team content coming soon
              </p>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </div>
  )
}
