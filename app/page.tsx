'use client'

import MarketplaceNav from '@/components/MarketplaceNav'
import MarketplaceHero from '@/components/MarketplaceHero'
import BridgeParagraph from '@/components/BridgeParagraph'
import HowItWorks from '@/components/HowItWorks'
import MeetQ from '@/components/MeetQ'
import Ecosystem from '@/components/Ecosystem'
import Closing from '@/components/Closing'
import Footer from '@/components/Footer'

function StatementMoment({ text, variant = 'dark' }: { text: string; variant?: 'primary' | 'dark' }) {
  const bg = variant === 'primary' ? 'bg-tb-primary' : 'bg-tb-dark'
  return (
    <div className={`w-full ${bg} rounded-tb-card flex items-center justify-center px-8 py-16 lg:py-24`}>
      <h2 className="font-headline font-bold uppercase tracking-[-0.01em] text-center text-[32px] md:text-[52px] lg:text-[72px] leading-[0.95] max-w-[900px] text-white">
        {text}
      </h2>
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-tb-page">
      <MarketplaceNav />
      <main className="flex flex-col p-tb-gap pt-[52px] w-full">
        <div className="flex flex-col gap-tb-gap">
          <MarketplaceHero />
          <BridgeParagraph />
          <HowItWorks />
          <StatementMoment
            text="Anyone can build an agent. They can't build the trust."
            variant="dark"
          />
          <MeetQ />
          <Ecosystem />
          <StatementMoment
            text="The game builds the credential. The credential unlocks the work. The work generates the data."
            variant="primary"
          />
          <Closing />
          <Footer />
        </div>
      </main>
    </div>
  )
}
