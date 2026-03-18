'use client'

import { useState } from 'react'
import Link from 'next/link'

// VAULT WAITLIST DESTINATION — Jordan to provide form URL or endpoint
const VAULT_WAITLIST_HREF = '#'

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-tb-page h-[44px] flex items-stretch px-4 border-b border-tb-border/30">
        <Link href="/" className="flex items-center">
          <img
            src="/logos/quotient-wordmark.svg"
            alt="Quotient"
            className="h-5 w-auto"
          />
        </Link>
        <div className="flex-1" />
        {/* Desktop nav */}
        <div className="hidden lg:flex items-stretch gap-0">
          <Link href="/agents/q/track-record" className="flex items-center px-4 font-mono text-[13px] uppercase tracking-[0.06em] text-tb-dark/70 hover:text-tb-dark transition-colors">
            Track Record
          </Link>
          <Link href="/agents" className="flex items-center px-4 font-mono text-[13px] uppercase tracking-[0.06em] text-tb-dark/70 hover:text-tb-dark transition-colors">
            Build with Q
          </Link>
          <Link href="/about" className="flex items-center px-4 font-mono text-[13px] uppercase tracking-[0.06em] text-tb-dark/70 hover:text-tb-dark transition-colors">
            About
          </Link>
          <Link href={VAULT_WAITLIST_HREF} className="flex items-center px-5 bg-tb-primary text-white font-mono text-[13px] uppercase tracking-[0.08em] rounded-tb-card hover:bg-tb-cta-hover transition-colors">
            Get Early Access
          </Link>
        </div>
        {/* Mobile: hamburger + CTA */}
        <div className="lg:hidden flex items-stretch gap-0">
          <Link href={VAULT_WAITLIST_HREF} className="flex items-center px-4 bg-tb-primary text-white font-mono text-[11px] uppercase tracking-[0.08em] rounded-tb-card">
            Get Early Access
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center px-3 text-tb-dark/70"
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
        <div className="fixed top-[44px] left-0 right-0 z-40 bg-tb-page border-t border-tb-border/30 lg:hidden">
          <div className="flex flex-col py-2">
            <Link
              href="/agents/q/track-record"
              onClick={() => setMobileOpen(false)}
              className="px-6 py-3 font-mono text-[13px] uppercase tracking-[0.06em] text-tb-dark/70 hover:text-tb-dark hover:bg-tb-dark/5 transition-colors"
            >
              Track Record
            </Link>
            <Link
              href="/agents"
              onClick={() => setMobileOpen(false)}
              className="px-6 py-3 font-mono text-[13px] uppercase tracking-[0.06em] text-tb-dark/70 hover:text-tb-dark hover:bg-tb-dark/5 transition-colors"
            >
              Build with Q
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="px-6 py-3 font-mono text-[13px] uppercase tracking-[0.06em] text-tb-dark/70 hover:text-tb-dark hover:bg-tb-dark/5 transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
