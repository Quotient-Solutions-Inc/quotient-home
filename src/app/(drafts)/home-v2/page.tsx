import Nav from '@/components/Nav'
import HomeV2Content from '@/components/home-v2/HomeV2Draft'
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
    <div className="h-screen overflow-hidden flex flex-col bg-white pt-[44px]">
      <Nav />
      <main className="flex-1 min-h-0 flex flex-col px-4 pb-4">
        <HomeV2Content />
      </main>
      <footer className="flex-shrink-0 flex items-center justify-between px-10 py-3 bg-white border-t border-gray-100">
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#9ca3af] font-medium">
          © 2026 Quotient Inc.
        </span>
        <div className="flex items-center gap-7">
          <a href="https://x.com/QuotientEng" className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#9ca3af] font-medium hover:text-tb-dark transition-colors">X</a>
          <a href="https://warpcast.com/quotient" className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#9ca3af] font-medium hover:text-tb-dark transition-colors">Farcaster</a>
          <a href="https://quotient.substack.com" className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#9ca3af] font-medium hover:text-tb-dark transition-colors">Substack</a>
        </div>
      </footer>
    </div>
  )
}
