import Nav from '@/components/Nav'
import MarketplaceHero from '@/components/MarketplaceHero'
import Performance from '@/components/Performance'
import InsideAForecast from '@/components/InsideAForecast'
import WhatPowersQ from '@/components/WhatPowersQ'
import PutQToWork from '@/components/PutQToWork'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className='min-h-screen bg-tb-page'>
      <Nav />
      <main className="flex flex-col p-tb-gap pt-[52px] w-full">
        <div className="flex flex-col gap-tb-gap">
          <MarketplaceHero />
          <Performance />
          <InsideAForecast />
          <WhatPowersQ />
          <PutQToWork />
          <Footer />
        </div>
      </main>
    </div>
  )
}
