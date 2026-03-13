import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-brand-black text-white border-b-2 border-brand-black">
      <div className="flex items-center justify-between px-10 max-md:px-6 h-12">
        {/* Left: Brand + Nav Links */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wide">
            <span className="w-2 h-2 bg-brand-red-orange block" />
            <span className="font-wordmark text-sm normal-case tracking-normal">Quotient</span>
          </Link>
          <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-wide max-md:hidden">
            <Link href="/signal" className="text-gray-400 hover:text-white transition-colors">
              For Traders
            </Link>
            <Link href="/platforms" className="text-gray-400 hover:text-white transition-colors">
              For Platforms
            </Link>
            <Link href="/api" className="text-gray-400 hover:text-white transition-colors">
              For Agents
            </Link>
          </div>
        </div>

        {/* Right: Auth + CTA */}
        <div className="flex items-center gap-6">
          <Link
            href="/login"
            className="text-gray-400 hover:text-white text-xs font-mono uppercase tracking-wide transition-colors max-md:hidden"
          >
            Log in
          </Link>
          <button className="bg-brand-red-orange text-white text-xs font-mono uppercase tracking-wide px-4 py-2 hover:opacity-90 transition-opacity">
            Get access
          </button>
        </div>
      </div>
    </nav>
  )
}
