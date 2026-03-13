'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Modal from './Modal'
import { useTheme } from '@/lib/ThemeContext'

/* ─── Theme A ─── Editorial black bar with wordmark ─── */
function NavA({
  onOpenModal,
}: {
  onOpenModal: () => void
}) {
  return (
    <nav className="sticky top-0 z-50 bg-brand-black text-white border-b-2 border-brand-black">
      <div className="flex items-center justify-between px-10 max-md:px-6 h-12">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 mr-16">
            <Image
              src="/logo-mark.png"
              alt="Quotient"
              width={27}
              height={22}
              className="invert"
            />
            <span className="font-wordmark text-sm tracking-normal text-white">
              Quotient
            </span>
          </Link>
          <div className="flex items-center gap-10 font-mono text-xs uppercase tracking-wide max-md:hidden">
            <Link
              href="/#how-it-works"
              className="text-gray-400 hover:text-white transition-colors"
            >
              How It Works
            </Link>
            <div className="relative group">
              <Link
                href="/agents"
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
              >
                Agents
                <svg className="w-3 h-3 mt-px opacity-50" fill="none" viewBox="0 0 12 12">
                  <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <div className="absolute top-full left-0 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-150">
                <div className="bg-brand-black border border-gray-800 rounded-sm py-2 min-w-[180px] shadow-lg">
                  <Link href="/agents/q" className="block px-4 py-2 text-[11px] font-mono uppercase tracking-wide text-gray-400 hover:text-white hover:bg-gray-900 transition-colors">
                    Q &middot; Geopolitics
                  </Link>
                  <div className="px-4 py-2 text-[11px] font-mono uppercase tracking-wide text-gray-600">
                    More agents soon
                  </div>
                </div>
              </div>
            </div>
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
            <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/login" className="text-gray-400 hover:text-white text-xs font-mono uppercase tracking-wide transition-colors max-md:hidden">
            Log in
          </Link>
          <button onClick={onOpenModal} className="bg-brand-red-orange text-white text-xs font-mono uppercase tracking-wide px-4 py-2 hover:opacity-90 transition-opacity">
            Get access
          </button>
        </div>
      </div>
    </nav>
  )
}

/* ─── Theme B ─── Slim dark nav, DM Mono wordmark, warm accent ─── */
function NavB({
  onOpenModal,
}: {
  onOpenModal: () => void
}) {
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
          onClick={onOpenModal}
          className="flex items-center px-5 bg-tb-primary text-white font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.08em] hover:bg-tb-cta-hover transition-colors"
        >
          Meet Q
        </button>
      </div>
      {/* Mobile CTA */}
      <button
        onClick={onOpenModal}
        className="md:hidden flex items-center px-4 bg-tb-primary text-white font-mono text-[11px] uppercase tracking-[0.08em]"
      >
        Meet Q
      </button>
    </nav>
  )
}

export default function MarketplaceNav() {
  const [modalOpen, setModalOpen] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const handler = () => setModalOpen(true)
    window.addEventListener('open-quotient-modal', handler)
    return () => window.removeEventListener('open-quotient-modal', handler)
  }, [])

  return (
    <>
      {theme === 'A' ? (
        <NavA onOpenModal={() => setModalOpen(true)} />
      ) : (
        <NavB onOpenModal={() => setModalOpen(true)} />
      )}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
