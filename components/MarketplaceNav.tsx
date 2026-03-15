'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Modal from './Modal'

export default function MarketplaceNav() {
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const handler = () => setModalOpen(true)
    window.addEventListener('open-quotient-modal', handler)
    return () => window.removeEventListener('open-quotient-modal', handler)
  }, [])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-tb-dark h-[44px] flex items-stretch px-4">
        <Link href="/" className="flex items-center">
          <span className="font-mono text-tb-label uppercase tracking-[0.08em] text-white">
            QUOTIENT
          </span>
        </Link>
        <div className="flex-1" />
        <div className="hidden md:flex items-stretch gap-0">
          <Link
            href="/#how-it-works"
            className="flex items-center px-4 font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.06em] text-white/80 hover:text-white transition-opacity"
          >
            How It Works
          </Link>
          <div className="relative group flex items-stretch">
            <Link
              href="/agents"
              className="flex items-center px-4 font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.06em] text-white/80 hover:text-white transition-opacity"
            >
              Agents
            </Link>
            <div className="absolute top-full left-0 pt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-150">
              <div className="bg-tb-dark border border-white/20 rounded-tb-card py-2 min-w-[180px] shadow-lg">
                <Link href="/agents/q" className="block px-4 py-2 text-[11px] font-mono uppercase tracking-[0.06em] text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                  Q &middot; Geopolitics
                </Link>
                <div className="px-4 py-2 text-[11px] font-mono uppercase tracking-[0.06em] text-white/30">
                  More agents soon
                </div>
              </div>
            </div>
          </div>
          <Link
            href="/about"
            className="flex items-center px-4 font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.06em] text-white/80 hover:text-white transition-opacity"
          >
            About
          </Link>
          <Link
            href="/pricing"
            className="flex items-center px-4 font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.06em] text-white/80 hover:text-white transition-opacity"
          >
            Pricing
          </Link>
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center px-5 bg-tb-primary text-white font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.08em] hover:bg-tb-cta-hover transition-colors"
          >
            Meet Q
          </button>
        </div>
        {/* Mobile CTA */}
        <button
          onClick={() => setModalOpen(true)}
          className="md:hidden flex items-center px-4 bg-tb-primary text-white font-mono text-[11px] uppercase tracking-[0.08em]"
        >
          Meet Q
        </button>
      </nav>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
