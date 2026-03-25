'use client'

import Link from 'next/link'
import { CONTACT_HREF } from '@/lib/links'
import HeroAnimation from './HeroAnimation'

function FooterLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-[10px] uppercase mb-1 tracking-[0.08em] text-tb-dark/50">
      {children}
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  if (href.startsWith('mailto:')) {
    return (
      <a href={href} className="text-[12px] leading-none transition-colors text-tb-dark/60 hover:text-tb-primary">
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className="text-[12px] leading-none transition-colors text-tb-dark/60 hover:text-tb-primary">
      {children}
    </Link>
  )
}

function SubstackSubscribe() {
  return (
    <a
      href="https://quotient.substack.com/subscribe"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center font-mono text-[11px] uppercase tracking-[0.08em] px-4 py-2 whitespace-nowrap transition-colors bg-transparent border border-tb-dark/30 text-tb-dark/70 hover:border-tb-primary hover:text-tb-primary rounded-[6px]"
    >
      Subscribe on Substack →
    </a>
  )
}

// Light footer variant for subpages (cream background with inverted animation)
export default function FooterLight() {
  return (
    <footer className='section-shell bg-tb-cream rounded-tb-card pt-12 sm:pt-14 pb-10 relative overflow-hidden'>
      {/* Inverted particle animation background (dark particles on light bg) - forms the divider line */}
      <div className="absolute inset-0 pointer-events-none">
        <HeroAnimation inverted footerMode />
      </div>
      <div className="max-w-content mx-auto relative z-10">
        {/* Main grid with generous gap between brand block and nav columns */}
        <div className="grid md:grid-cols-[200px_1fr] gap-10 lg:gap-24 pb-10 max-md:pb-8 mb-8">
          {/* Left: Brand block */}
          <div>
            {/* Dark SVG wordmark for light background */}
            <img
              src="/logos/quotient-wordmark.svg"
              alt="Quotient"
              className="h-5 w-auto mb-2"
            />
            <div className="font-mono text-tb-dark/60 text-[12px] uppercase tracking-[0.04em] leading-relaxed mb-5">
              Superforecasting for<br />prediction market traders.
            </div>
            <SubstackSubscribe />
          </div>

          {/* Right: Nav columns - pushed further right with ml-auto and larger gap */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 ml-auto max-md:ml-0">
            {/* Product Column */}
            <div className="flex flex-col gap-3">
              <FooterLabel>Product</FooterLabel>
              <FooterLink href="/case-studies/geopolitical">Geopolitical Case Study</FooterLink>
              <FooterLink href="/build-with-q">Build with Q</FooterLink>
              <FooterLink href="https://dev.quotient.social/docs#tag/markets/GET/api/v1/markets">API Docs</FooterLink>
            </div>

            {/* Company Column */}
            <div className="flex flex-col gap-3">
              <FooterLabel>Company</FooterLabel>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/team">Team</FooterLink>
              <FooterLink href={CONTACT_HREF}>Contact</FooterLink>
            </div>

            {/* Contributors Column */}
            <div className="flex flex-col gap-3">
              <FooterLabel>Contributors</FooterLabel>
              <FooterLink href="https://signal.quotient.social">Signal</FooterLink>
              <FooterLink href="https://farcaster.xyz/miniapps/i0_1abYbjySF/signal-by-quotient">Farcaster</FooterLink>
              <FooterLink href="https://world.org/mini-app?app_id=app_fcc649404ebe858f0e95cf53a800ec3e">World App</FooterLink>
            </div>

            {/* Social Column */}
            <div className="flex flex-col gap-3">
              <FooterLabel>Social</FooterLabel>
              <FooterLink href="https://x.com/QuotientHQ">X</FooterLink>
              <FooterLink href="https://farcaster.xyz/quotient">Farcaster</FooterLink>
              <FooterLink href="https://quotient.substack.com/">Substack</FooterLink>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex max-md:flex-col max-md:gap-3 max-md:items-start justify-between items-center relative z-10">
          <span className="font-mono text-[11px] text-tb-dark/40">&copy; 2026 Quotient</span>
          <div className="flex gap-4 max-md:gap-3 max-md:flex-wrap">
            <Link href="https://x.com/QuotientHQ" className="font-mono text-tb-dark/40 text-[11px] uppercase tracking-[0.08em] hover:text-tb-dark transition-colors">X</Link>
            <Link href="https://farcaster.xyz/quotient" className="font-mono text-tb-dark/40 text-[11px] uppercase tracking-[0.08em] hover:text-tb-dark transition-colors">Farcaster</Link>
            <Link href="https://quotient.substack.com/" className="font-mono text-tb-dark/40 text-[11px] uppercase tracking-[0.08em] hover:text-tb-dark transition-colors">Substack</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
