'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function NavWithModal() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-tb-dark h-[44px] flex items-stretch px-4">
        <Link href="/" className="flex items-center">
          <span className="font-mono text-[13px] uppercase tracking-[0.08em] text-white">QUOTIENT</span>
        </Link>
        <div className="flex-1" />
        {/* Desktop nav */}
        <div className="hidden lg:flex items-stretch gap-0">
          <div className="relative group flex items-stretch">
            <Link href="/agents" className="flex items-center px-4 font-mono text-[13px] uppercase tracking-[0.06em] text-white/80 hover:text-white transition-opacity">
              Agents
            </Link>
            <div className="absolute top-full left-0 pt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-150">
              <div className="bg-tb-dark border border-white/20 rounded-tb-card py-2 min-w-[180px] shadow-lg">
                <Link href="/agents/q/signal" className="block px-4 py-2 text-[11px] font-mono uppercase tracking-[0.06em] text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                  Q &middot; Geopolitics
                </Link>
                <div className="px-4 py-2 text-[11px] font-mono uppercase tracking-[0.06em] text-white/30">More agents soon</div>
              </div>
            </div>
          </div>
          <Link href="/about" className="flex items-center px-4 font-mono text-[13px] uppercase tracking-[0.06em] text-white/80 hover:text-white transition-opacity">
            About
          </Link>
          <Link href="/#track-record" className="flex items-center px-5 bg-tb-primary text-white font-mono text-[13px] uppercase tracking-[0.08em] hover:bg-tb-cta-hover transition-colors">
            Get Access
          </Link>
        </div>
        {/* Mobile: hamburger + CTA */}
        <div className="lg:hidden flex items-stretch gap-0">
          <Link href="/#track-record" className="flex items-center px-4 bg-tb-primary text-white font-mono text-[11px] uppercase tracking-[0.08em]">
            Get Access
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center px-3 text-white/80"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="fixed top-[44px] left-0 right-0 z-40 bg-tb-dark border-t border-white/10 lg:hidden">
          <div className="flex flex-col py-2">
            <Link
              href="/agents"
              onClick={() => setMobileOpen(false)}
              className="px-6 py-3 font-mono text-[13px] uppercase tracking-[0.06em] text-white/80 hover:text-white hover:bg-white/5 transition-colors"
            >
              Agents
            </Link>
            <Link
              href="/agents/q/signal"
              onClick={() => setMobileOpen(false)}
              className="px-6 py-3 pl-10 font-mono text-[11px] uppercase tracking-[0.06em] text-white/50 hover:text-white hover:bg-white/5 transition-colors"
            >
              Q &middot; Geopolitics
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="px-6 py-3 font-mono text-[13px] uppercase tracking-[0.06em] text-white/80 hover:text-white hover:bg-white/5 transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
