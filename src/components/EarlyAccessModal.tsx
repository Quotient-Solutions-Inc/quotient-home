'use client'

import { useEffect, useRef } from 'react'
import Script from 'next/script'

interface EarlyAccessModalProps {
  isOpen: boolean
  onClose: () => void
}

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void
    }
  }
}

export default function EarlyAccessModal({ isOpen, onClose }: EarlyAccessModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement | null
      document.body.style.overflow = 'hidden'
      // Load Tally embeds when modal opens
      if (window.Tally) {
        window.Tally.loadEmbeds()
      }
      window.setTimeout(() => {
        closeButtonRef.current?.focus()
      }, 0)
    } else {
      document.body.style.overflow = ''
      previousFocusRef.current?.focus()
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Close on escape key
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }

      if (e.key !== 'Tab' || !dialogRef.current) {
        return
      }

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, iframe, [tabindex]:not([tabindex="-1"])'
      )

      if (focusable.length === 0) {
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeydown)
    }
    return () => document.removeEventListener('keydown', handleKeydown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <>
      <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Modal card */}
        <div
          ref={dialogRef}
          className="relative bg-tb-cream rounded-tb-card w-full max-w-[560px] max-h-[90vh] overflow-auto"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="early-access-modal-title"
        >
          {/* Close button */}
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-tb-dark/10 hover:bg-tb-dark/20 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-4 h-4 text-tb-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Inner card with content */}
          <div className="bg-white rounded-tb-card m-3 sm:m-4 p-5 sm:p-6" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
            {/* Header */}
            <h2 id="early-access-modal-title" className="font-headline font-bold text-[24px] lg:text-[28px] leading-[0.95] uppercase text-tb-dark tracking-[-0.01em] mb-6">
              Quotient Early Access
            </h2>

            {/* Tally Form iframe */}
            <iframe
              data-tally-src="https://tally.so/embed/0QP4xB?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="373"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              title="Quotient Early Access"
            />
          </div>
        </div>
      </div>
    </>
  )
}
