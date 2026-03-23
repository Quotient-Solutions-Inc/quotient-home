import Nav from '@/components/Nav'
import MarketplaceHero from '@/components/MarketplaceHero'
import Performance from '@/components/Performance'
import InsideAForecast from '@/components/InsideAForecast'
import WhatPowersQ from '@/components/WhatPowersQ'
import PutQToWork from '@/components/PutQToWork'
import Footer from '@/components/Footer'
import { buildPageMetadata } from '@/lib/metadata'

export const metadata = buildPageMetadata({
  title: 'Prediction Agent Platform',
  description:
    'Quotient turns global signals into high-conviction forecasts, track records, and APIs for traders, builders, and agents.',
  path: '/',
})

export default function Home() {
  return (
    <div className='min-h-screen bg-tb-page pt-[44px]'>
      <Nav />
      <main id="main-content" className="flex flex-col p-tb-gap pt-0 w-full">
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
