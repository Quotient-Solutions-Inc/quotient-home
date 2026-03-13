'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from '@/lib/ThemeContext'

export default function Modal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const { theme } = useTheme()

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open) return null

  const isB = theme === 'B'

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-6 ${isB ? 'bg-black/70 backdrop-blur-sm' : 'bg-black/60'}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className={`w-[720px] max-w-full max-h-[90vh] overflow-y-auto relative ${isB
          ? 'bg-tb-dark text-white p-10 max-md:p-6 rounded-tb-card'
          : 'bg-white rounded-sm p-10 max-md:p-6'
        }`}
      >
        <button
          onClick={onClose}
          className={`absolute top-4 right-5 font-mono text-lg transition-colors ${isB
            ? 'text-white/40 hover:text-white/80'
            : 'text-gray-300 hover:text-gray-600'
          }`}
        >
          &times;
        </button>

        <div className={`font-mono text-[10px] uppercase mb-2 ${isB
          ? 'tracking-[0.08em] text-tb-primary'
          : 'tracking-eyebrow text-gray-400'
        }`}>
          Get access
        </div>
        <h2 className={`text-[22px] font-semibold tracking-[-0.02em] mb-1.5 ${isB
          ? 'font-headline font-bold uppercase text-[28px] text-tb-cream'
          : 'text-brand-black'
        }`}>
          Choose your path
        </h2>
        <p className={`text-[13px] mb-7 ${isB ? 'text-tb-cream/60' : 'text-gray-400'}`}>
          Select how you want to use Quotient.
        </p>

        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-3 mb-5">
          <ModalTile
            label="For Traders" name="Signal access"
            desc="Q's forecast, reasoning, and spread vs. market odds on every market. Updated daily."
            primaryCta="Subscribe" primaryHref="/agents/q/signal#pricing"
            learnHref="/agents/q/signal" onClose={onClose} isB={isB}
          />
          <ModalTile
            label="For Platforms & Wallets" name="Platform integration"
            desc="Integrate Q's signal layer directly into your markets. Enterprise pilot available."
            primaryCta="Get in touch" primaryHref="mailto:hello@quotient.social"
            learnHref="/agents/q/platforms" onClose={onClose} isB={isB}
          />
          <ModalTile
            label="For Agents" name="API access"
            desc="REST API with agentic tool-use compatibility. x402 micropayments or Stripe."
            primaryCta="Start building" primaryHref="/agents/q/api"
            learnHref="/agents/q/api" onClose={onClose} isB={isB}
          />
        </div>

        <div className={`font-mono text-[10px] leading-relaxed ${isB ? 'text-white/40' : 'text-gray-300'}`}>
          Start with the free preview via{' '}
          <Link href="/agents/q/signal" className={`underline transition-colors ${isB ? 'hover:text-white/70' : 'hover:text-gray-500'}`} onClick={onClose}>
            newsletter access
          </Link>{' '}
          or the mobile app.
        </div>
      </div>
    </div>
  )
}

function ModalTile({
  label, name, desc, primaryCta, primaryHref, learnHref, onClose, isB,
}: {
  label: string; name: string; desc: string; primaryCta: string
  primaryHref: string; learnHref: string; onClose: () => void; isB: boolean
}) {
  return (
    <div className={`p-5 flex flex-col ${isB
      ? 'border border-white/10 rounded-tb-card'
      : 'border border-border-thin rounded-sm'
    }`}>
      <div className={`font-mono text-[10px] uppercase mb-2 ${isB
        ? 'tracking-[0.08em] text-tb-primary'
        : 'tracking-eyebrow text-gray-400'
      }`}>
        {label}
      </div>
      <div className={`text-[15px] font-semibold mb-1.5 ${isB ? 'text-tb-cream' : 'text-brand-black'}`}>
        {name}
      </div>
      <div className={`text-xs leading-relaxed mb-5 ${isB ? 'text-tb-cream/60' : 'text-gray-400'}`}>
        {desc}
      </div>
      <div className="mt-auto flex flex-col gap-2.5">
        <Link
          href={primaryHref} onClick={onClose}
          className={`text-center text-[11px] font-mono uppercase px-4 py-2.5 transition-colors ${isB
            ? 'bg-tb-primary text-white tracking-[0.08em] rounded-tb-card hover:bg-tb-cta-hover'
            : 'bg-brand-black text-white tracking-wide hover:bg-gray-800'
          }`}
        >
          {primaryCta}
        </Link>
        <Link
          href={learnHref} onClick={onClose}
          className={`font-mono text-[11px] text-center transition-colors ${isB
            ? 'text-tb-cream/50 hover:text-tb-primary'
            : 'text-gray-400 hover:text-brand-black'
          }`}
        >
          Learn more &rarr;
        </Link>
      </div>
    </div>
  )
}
