'use client'

import Link from 'next/link'

export default function NavWithModal() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-tb-dark h-[44px] flex items-stretch px-4">
      <Link href="/" className="flex items-center">
        <span className="font-mono text-tb-label uppercase tracking-[0.08em] text-white">
          QUOTIENT
        </span>
      </Link>
      <div className="flex-1" />
      <div className="hidden md:flex items-stretch gap-0">
        <Link
          href="/"
          className="flex items-center px-4 font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.06em] text-white/80 hover:text-white transition-opacity"
        >
          Back to Home
        </Link>
        <Link
          href="#pricing"
          className="flex items-center px-5 bg-tb-primary text-white font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.08em] hover:bg-tb-cta-hover transition-colors"
        >
          Get Access
        </Link>
      </div>
      {/* Mobile */}
      <Link
        href="#pricing"
        className="md:hidden flex items-center px-4 bg-tb-primary text-white font-mono text-[11px] uppercase tracking-[0.08em]"
      >
        Get Access
      </Link>
    </nav>
  )
}
