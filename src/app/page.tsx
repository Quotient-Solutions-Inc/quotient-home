'use client'

import { useTheme } from '@/lib/ThemeContext'
import MarketplaceNav from '@/components/MarketplaceNav'
import MarketplaceHero from '@/components/MarketplaceHero'
import TrackRecord from '@/components/TrackRecord'
import Ecosystem from '@/components/Ecosystem'
import BiggerPicture from '@/components/BiggerPicture'
import Closing from '@/components/Closing'
import Footer from '@/components/Footer'

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
            <TrackRecord />
            <Ecosystem />
            <BiggerPicture />
            <Closing />
            <Footer />
          </div>
        </main>
      ) : (
        <>
          <MarketplaceHero />
          <TrackRecord />
          <Ecosystem />
          <BiggerPicture />
          <Closing />
          <Footer />
        </>
      )}
    </div>
  )
}
