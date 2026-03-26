import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import HomeV2Draft from '@/components/home-v2/HomeV2Draft'
import { buildPageMetadata } from '@/lib/metadata'

export const metadata = buildPageMetadata({
  title: 'Homepage Draft V2',
  description:
    'Exploratory draft route for homepage direction work. This route is not the live homepage.',
  path: '/home-v2',
  noindex: true,
})

export default function HomeV2Page() {
  return (
    <div className='min-h-screen bg-tb-page pt-[44px]'>
      <Nav />
      <main id="main-content" className="flex flex-col p-tb-gap pt-0 w-full">
        <div className="flex flex-col gap-tb-gap">
          <HomeV2Draft />
          <Footer />
        </div>
      </main>
    </div>
  )
}
