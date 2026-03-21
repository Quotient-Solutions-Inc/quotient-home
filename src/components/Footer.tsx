'use client'

import { useState } from 'react'
import Link from 'next/link'

function FooterLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-[10px] uppercase mb-1 tracking-[0.08em] text-white/50">
      {children}
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-[12px] leading-none transition-colors text-white/60 hover:text-tb-primary">
      {children}
    </Link>
  )
}

function SubstackSubscribe() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      await fetch('https://quotient.substack.com/api/v1/free?nojs=true', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ email, first_url: 'https://quotient.substack.com/', first_referrer: '', current_url: 'https://quotient.substack.com/', current_referrer: window.location.href }),
        mode: 'no-cors',
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-tb-primary">
        Subscribed. Check your inbox.
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-0">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="YOUR EMAIL"
        required
        className="font-mono text-[11px] uppercase tracking-[0.04em] px-3 py-2 w-full outline-none transition-colors bg-white/[0.06] border border-white/20 text-white/80 placeholder:text-white/30 focus:border-tb-primary rounded-l-[6px]"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className={`font-mono text-[11px] uppercase tracking-[0.08em] px-4 py-2 whitespace-nowrap transition-colors bg-transparent border border-white/30 text-white/70 hover:border-white/60 hover:text-white rounded-r-[6px] ${status === 'loading' ? 'opacity-60' : ''}`}
      >
        {status === 'loading' ? '...' : 'Subscribe'}
      </button>
    </form>
  )
}

export default function Footer() {
  return (
    <footer className='bg-tb-dark rounded-tb-card px-8 lg:px-tb-section-x pt-14 pb-10 relative overflow-hidden'>
      <div className="max-w-content mx-auto">
        {/* Main grid with generous gap between brand block and nav columns */}
        <div className="grid max-md:grid-cols-1 gap-24 max-md:gap-10 pb-10 max-md:pb-8 mb-8 grid-cols-[200px_1fr] border-b border-white/20">
          {/* Left: Brand block */}
          <div>
            {/* White SVG wordmark - preserves negative space in Q */}
            <img
              src="/logos/quotient-wordmark-white.svg"
              alt="Quotient"
              className="h-5 w-auto mb-2"
            />
            <div className="font-mono text-white/60 text-[12px] uppercase tracking-[0.04em] leading-relaxed mb-5">
              AI-powered prediction<br />market intelligence.
            </div>
            <SubstackSubscribe />
          </div>

          {/* Right: Nav columns - pushed further right with ml-auto and larger gap */}
          <div className="grid grid-cols-4 max-md:grid-cols-2 gap-12 max-md:gap-x-8 max-md:gap-y-6 ml-auto max-md:ml-0">
            {/* Agentic Trading Column (renamed from Q) */}
            <div className="flex flex-col gap-3">
              <FooterLabel>Agentic Trading</FooterLabel>
              <FooterLink href="/agents/q/case-studies">Case Studies</FooterLink>
              <FooterLink href="/agents">Build with Q</FooterLink>
              <FooterLink href="/agents/q/api">API Docs</FooterLink>
              <FooterLink href="/agents/q/api#pricing">Pricing</FooterLink>
            </div>

            {/* Company Column */}
            <div className="flex flex-col gap-3">
              <FooterLabel>Company</FooterLabel>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/team">Team</FooterLink>
              <FooterLink href="mailto:hello@quotient.social">Contact</FooterLink>
            </div>

            {/* Contributors Column (renamed from Signal) */}
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
          <span className="font-mono text-[11px] text-white/40">&copy; 2026 Quotient</span>
          <div className="flex gap-4 max-md:gap-3 max-md:flex-wrap">
            <Link href="https://x.com/QuotientHQ" className="font-mono text-white/40 text-[11px] uppercase tracking-[0.08em] hover:text-white transition-colors">X</Link>
            <Link href="https://farcaster.xyz/quotient" className="font-mono text-white/40 text-[11px] uppercase tracking-[0.08em] hover:text-white transition-colors">Farcaster</Link>
            <Link href="https://quotient.substack.com/" className="font-mono text-white/40 text-[11px] uppercase tracking-[0.08em] hover:text-white transition-colors">Substack</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
