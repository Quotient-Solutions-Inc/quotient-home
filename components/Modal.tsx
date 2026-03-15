'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Modal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
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

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="bg-tb-dark text-white p-10 max-md:p-6 w-[720px] max-w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-5 font-mono text-lg text-white/40 hover:text-white/80 transition-colors"
        >
          &times;
        </button>

        <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-tb-primary mb-2">
          Get access
        </div>
        <h2 className="font-headline font-bold uppercase text-[28px] text-tb-cream tracking-[-0.02em] mb-1.5">
          Choose your path
        </h2>
        <p className="text-[13px] text-tb-cream/60 mb-7">
          Select how you want to use Quotient.
        </p>

        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-3 mb-5">
          <ModalTile
            label="For Traders" name="Signal access"
            desc="Q's forecast, reasoning, and spread vs. market odds on every market."
            primaryCta="Subscribe" primaryHref="/agents/q#pricing"
            onClose={onClose}
          />
          <ModalTile
            label="For Platforms" name="Platform integration"
            desc="Integrate Q's signal layer directly into your markets."
            primaryCta="Get in touch" primaryHref="mailto:hello@quotient.social"
            onClose={onClose}
          />
          <ModalTile
            label="For Developers" name="API access"
            desc="REST API with agentic tool-use compatibility. x402 or Stripe."
            primaryCta="Start building" primaryHref="https://docs.quotient.social"
            onClose={onClose}
          />
        </div>
      </div>
    </div>
  )
}

function ModalTile({
  label, name, desc, primaryCta, primaryHref, onClose,
}: {
  label: string; name: string; desc: string; primaryCta: string
  primaryHref: string; onClose: () => void
}) {
  return (
    <div className="p-5 flex flex-col border border-white/10">
      <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-tb-primary mb-2">
        {label}
      </div>
      <div className="text-[15px] font-semibold text-tb-cream mb-1.5">{name}</div>
      <div className="text-xs leading-relaxed text-tb-cream/60 mb-5">{desc}</div>
      <div className="mt-auto">
        <Link
          href={primaryHref} onClick={onClose}
          className="block text-center text-[11px] font-mono uppercase px-4 py-2.5 bg-tb-primary text-white tracking-[0.08em] hover:bg-tb-cta-hover transition-colors"
        >
          {primaryCta}
        </Link>
      </div>
    </div>
  )
}
