import Nav from '@/components/Nav'
import MarketplaceHero from '@/components/MarketplaceHero'
import TrackRecord from '@/components/TrackRecord'
import HowItWorks from '@/components/HowItWorks'
import Ecosystem from '@/components/Ecosystem'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className='min-h-screen bg-tb-page'>
      <Nav />
      <main className="flex flex-col p-tb-gap pt-[52px] w-full">
        <div className="flex flex-col gap-tb-gap">
          <MarketplaceHero />
          <TrackRecord />
          <HowItWorks />
          <Ecosystem />
          <Footer />
        </div>
      </main>
    </div>
  )
}
