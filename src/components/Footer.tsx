'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from '@/lib/ThemeContext'

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

function SubstackSubscribe({ isB }: { isB: boolean }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('https://quotient.substack.com/api/v1/free?nojs=true', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ email, first_url: 'https://quotient.substack.com/', first_referrer: '', current_url: 'https://quotient.substack.com/', current_referrer: window.location.href }),
        mode: 'no-cors',
      })
      // no-cors means we can't read the response, but the request goes through
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={`font-mono text-[11px] uppercase tracking-[0.08em] ${isB ? 'text-tb-primary' : 'text-brand-blue'}`}>
        Subscribed — check your inbox.
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
        className={`font-mono text-[11px] uppercase tracking-[0.04em] px-3 py-2 w-full outline-none transition-colors ${isB
          ? 'bg-white/[0.06] border border-white/20 text-white/80 placeholder:text-white/30 focus:border-tb-primary rounded-l-[6px]'
          : 'bg-gray-900 border border-gray-700 text-gray-300 placeholder:text-gray-600 focus:border-gray-500'
        }`}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className={`font-mono text-[11px] uppercase tracking-[0.08em] px-4 py-2 whitespace-nowrap transition-colors ${isB
          ? 'bg-transparent border border-white/30 text-white/70 hover:border-white/60 hover:text-white rounded-r-[6px]'
          : 'bg-brand-red-orange text-white hover:opacity-90'
        } ${status === 'loading' ? 'opacity-60' : ''}`}
      >
        {status === 'loading' ? '...' : 'Subscribe'}
      </button>
    </form>
  )
}

export default function Footer() {
  const { theme } = useTheme()
  const isB = theme === 'B'

  return (
    <footer className={isB
      ? 'bg-tb-dark rounded-tb-card px-8 lg:px-tb-section-x pt-14 pb-10 relative overflow-hidden'
      : 'bg-brand-black pt-14 pb-10 px-10 max-md:px-6'
    }>
      <div className={isB ? '' : 'max-w-content mx-auto'}>
        <div className={`grid max-md:grid-cols-1 gap-10 pb-10 mb-8 ${isB
          ? 'grid-cols-[200px_1fr] border-b border-white/20'
          : 'grid-cols-[180px_1fr] border-b border-gray-800'
        }`}>
          <div>
            {isB ? (
              <>
                <span className="font-mono text-[13px] uppercase tracking-[0.08em] text-white block mb-2">
                  QUOTIENT
                </span>
                <div className="font-mono text-white/60 text-[12px] uppercase tracking-[0.04em] leading-relaxed mb-5">
                  The platform for building,<br />proving, and monetizing<br />prediction agents.
                </div>
                <SubstackSubscribe isB />
              </>
            ) : (
              <>
                <div className="flex items-center gap-2 mb-2">
                  <Image src="/logo-mark.png" alt="Quotient" width={22} height={18} className="invert" />
                  <span className="font-wordmark text-sm text-white">Quotient</span>
                </div>
                <div className="text-[12px] text-gray-600 leading-relaxed mb-5">Turn judgment into a product.</div>
                <SubstackSubscribe isB={false} />
              </>
            )}
          </div>
          <div className="grid grid-cols-4 max-md:grid-cols-2 gap-8 max-md:gap-4 flex-1">
            <div className="flex flex-col gap-3">
              <FooterLabel isB={isB}>Agents</FooterLabel>
              <FooterLink href="/agents/q/signal" isB={isB}>Q Trading Agent</FooterLink>
              <span className={`text-[11px] ${isB ? 'text-white/20' : 'text-gray-700'}`}>More coming soon</span>
            </div>
            <div className="flex flex-col gap-3">
              <FooterLabel isB={isB}>Access Q</FooterLabel>
              <FooterLink href="/agents/q/signal" isB={isB}>Signal For Traders</FooterLink>
              <FooterLink href="/agents/q/api" isB={isB}>For Platforms</FooterLink>
              <FooterLink href="/agents/q/api" isB={isB}>For Agents</FooterLink>
              <FooterLink href="/agents/q/api" isB={isB}>API</FooterLink>
            </div>
            <div className="flex flex-col gap-3">
              <FooterLabel isB={isB}>Contribute</FooterLabel>
              <FooterLink href="#" isB={isB}>Mobile app</FooterLink>
              <FooterLink href="#" isB={isB}>Farcaster mini app</FooterLink>
            </div>
            <div className="flex flex-col gap-3">
              <FooterLabel isB={isB}>Company</FooterLabel>
              <FooterLink href="/about" isB={isB}>About</FooterLink>
              <FooterLink href="/pricing" isB={isB}>Pricing</FooterLink>
              <FooterLink href="mailto:hello@quotient.social" isB={isB}>Contact</FooterLink>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center relative z-10">
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
