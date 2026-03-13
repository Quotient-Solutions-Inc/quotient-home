'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from '@/lib/ThemeContext'
import FingerprintRidge from '@/components/decorative/FingerprintRidge'

function FooterLabel({ children, isB }: { children: React.ReactNode; isB: boolean }) {
  return (
    <div className={`font-mono text-[10px] uppercase mb-1 ${isB
      ? 'tracking-[0.08em] text-white/50'
      : 'tracking-eyebrow text-gray-600'
    }`}>
      {children}
    </div>
  )
}

function FooterLink({ href, children, isB }: { href: string; children: React.ReactNode; isB: boolean }) {
  return (
    <Link href={href} className={`text-[12px] leading-none transition-colors ${isB
      ? 'text-white/60 hover:text-tb-primary'
      : 'text-gray-500 hover:text-white'
    }`}>
      {children}
    </Link>
  )
}

export default function Footer() {
  const { theme } = useTheme()
  const isB = theme === 'B'

  return (
    <footer className={isB
      ? 'bg-tb-dark rounded-tb-card px-8 lg:px-12 pt-10 pb-6 relative overflow-hidden'
      : 'bg-brand-black pt-10 pb-6 px-10 max-md:px-6'
    }>
      {isB && <FingerprintRidge className="absolute bottom-4 right-8 text-white/[0.06] z-[1]" />}
      <div className={isB ? '' : 'max-w-content mx-auto'}>
        <div className={`grid max-md:grid-cols-1 gap-10 pb-7 mb-5 ${isB
          ? 'grid-cols-[200px_1fr] border-b border-white/20'
          : 'grid-cols-[180px_1fr] border-b border-gray-800'
        }`}>
          <div>
            {isB ? (
              <>
                <span className="font-mono text-[13px] uppercase tracking-[0.08em] text-white block mb-2">
                  QUOTIENT
                </span>
                <div className="font-mono text-white/60 text-[12px] uppercase tracking-[0.04em] leading-relaxed">
                  The platform for building,<br />proving, and monetizing<br />prediction agents.
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2 mb-2">
                  <Image src="/logo-mark.png" alt="Quotient" width={22} height={18} className="invert" />
                  <span className="font-wordmark text-sm text-white">Quotient</span>
                </div>
                <div className="text-[12px] text-gray-600 leading-relaxed">Turn judgment into a product.</div>
              </>
            )}
          </div>
          <div className="flex gap-12 max-md:gap-8 flex-wrap">
            <div className="flex flex-col gap-2">
              <FooterLabel isB={isB}>Agents</FooterLabel>
              <FooterLink href="/agents/q" isB={isB}>Q: Geopolitical Forecasting</FooterLink>
              <div className={`flex flex-col gap-2 pl-3 border-l ${isB ? 'border-white/20' : 'border-gray-700'}`}>
                <FooterLink href="/agents/q/signal" isB={isB}>For Traders</FooterLink>
                <FooterLink href="/agents/q/platforms" isB={isB}>For Platforms &amp; Wallets</FooterLink>
                <FooterLink href="/agents/q/api" isB={isB}>For Developers</FooterLink>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <FooterLabel isB={isB}>Contribute</FooterLabel>
              <FooterLink href="#" isB={isB}>Mobile app</FooterLink>
              <FooterLink href="#" isB={isB}>Farcaster mini app</FooterLink>
              <FooterLink href="#" isB={isB}>World mini app</FooterLink>
            </div>
            <div className="flex flex-col gap-2">
              <FooterLabel isB={isB}>Company</FooterLabel>
              <FooterLink href="/about" isB={isB}>About</FooterLink>
              <FooterLink href="/pricing" isB={isB}>Pricing</FooterLink>
              <FooterLink href="#" isB={isB}>Substack</FooterLink>
              <FooterLink href="#" isB={isB}>X / Twitter</FooterLink>
              <FooterLink href="#" isB={isB}>Contact</FooterLink>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className={`font-mono text-[11px] ${isB ? 'text-white/40' : 'text-gray-700'}`}>&copy; 2026 Quotient</span>
          {isB && (
            <div className="flex gap-4">
              <Link href="#" className="font-mono text-white/40 text-[11px] uppercase tracking-[0.08em] hover:text-white transition-colors">X @quotient</Link>
              <Link href="#" className="font-mono text-white/40 text-[11px] uppercase tracking-[0.08em] hover:text-white transition-colors">Farcaster</Link>
              <Link href="#" className="font-mono text-white/40 text-[11px] uppercase tracking-[0.08em] hover:text-white transition-colors">Substack</Link>
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}
