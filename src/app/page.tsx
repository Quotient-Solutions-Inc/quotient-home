import Nav from '@/components/Nav'
import MarketplaceHero from '@/components/MarketplaceHero'
import TrackRecord from '@/components/TrackRecord'
import Ecosystem from '@/components/Ecosystem'
import BiggerPicture from '@/components/BiggerPicture'
import Closing from '@/components/Closing'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className='min-h-screen bg-tb-page'>
      <Nav />
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
    </div>
  )
}
