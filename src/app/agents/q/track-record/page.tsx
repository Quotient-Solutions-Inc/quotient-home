import Link from 'next/link'
import Nav from '@/components/Nav'
import SignalLinesAnimation from '@/components/SignalLinesAnimation'
import QCallsFeed, { DEFAULT_MOCK_FORECASTS } from '@/components/QCallsFeed'
import QCalledIt from '@/components/QCalledIt'
import Footer from '@/components/Footer'

// VAULT WAITLIST DESTINATION — Jordan to provide form URL or endpoint
const VAULT_WAITLIST_HREF = '#'

export default function TrackRecordPage() {
  return (
    <div className='min-h-screen bg-[#FAFAF7] pt-[44px]'>
      <Nav />

      <main className="flex flex-col p-tb-gap pt-0 w-full">
        <div className="flex flex-col gap-tb-gap">
          {/* Hero section with animation */}
          <section className='bg-[#FAFAF7] rounded-tb-card'>
            <SignalLinesAnimation />
            <QCallsFeed forecasts={DEFAULT_MOCK_FORECASTS} />
          </section>
          <QCalledIt />
          <VaultCTA />
          <Footer />
        </div>
      </main>
    </div>
  )
}

function VaultCTA() {
  return (
    <section className='bg-[#F35B28] rounded-tb-card flex items-center justify-center px-8 max-md:px-6 py-16 lg:py-24 relative overflow-hidden'>
      <div className='text-center max-w-[680px] relative z-10'>
        <h2 className='font-headline font-bold tracking-[-0.01em] text-[28px] lg:text-[40px] leading-[0.95] text-white mb-6 uppercase'>
          WHEN THE VAULT LAUNCHES,<br />
          Q TRADES ON ITS INTELLIGENCE.
        </h2>
        <p className="text-[15px] leading-relaxed mb-8 text-white/90">
          Every call on this page is Q&apos;s real intelligence.<br />
          When the vault opens, Q puts capital behind it.
        </p>
        {/* VAULT WAITLIST DESTINATION — Jordan to provide form URL or endpoint */}
        <Link
          href={VAULT_WAITLIST_HREF}
          className="inline-block text-[13px] font-mono uppercase tracking-[0.08em] px-7 py-3 border border-[#FAFAF7] text-white bg-transparent rounded-tb-card hover:bg-[#FAFAF7] hover:text-[#1C1A17] transition-all duration-200 ease-out"
        >
          Get Early Access &rarr;
        </Link>
      </div>
    </section>
  )
}
