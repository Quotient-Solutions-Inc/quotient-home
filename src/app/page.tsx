'use client'

import { useTheme } from '@/lib/ThemeContext'
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
      <h2 className="font-headline font-bold uppercase tracking-[-0.01em] text-center text-[32px] lg:text-[48px] leading-[0.95] max-w-[900px] text-white">
        {text}
      </h2>
    </div>
  )
}

export default function Home() {
  const { theme } = useTheme()
  const isB = theme === 'B'

  return (
    <div className={isB ? 'min-h-screen bg-tb-page' : 'min-h-screen'}>
      <MarketplaceNav />
      {isB ? (
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
            <Closing />
            <Footer />
          </div>
        </main>
      ) : (
        <>
          <MarketplaceHero />
          <BridgeParagraph />
          <HowItWorks />
          <MeetQ />
          <Ecosystem />
          <Closing />
          <Footer />
        </>
      )}
    </div>
  )
}
