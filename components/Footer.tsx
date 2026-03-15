'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-tb-dark px-8 lg:px-12 pt-10 pb-6">
      <div className="grid max-md:grid-cols-1 grid-cols-[200px_1fr] gap-10 pb-7 mb-5 border-b border-white/20">
        <div>
          <span className="font-mono text-[13px] uppercase tracking-[0.08em] text-white block mb-2">
            QUOTIENT
          </span>
          <div className="font-mono text-white/60 text-[12px] uppercase tracking-[0.04em] leading-relaxed">
            The prediction agent platform.
          </div>
        </div>
        <div className="flex gap-12 max-md:gap-8 flex-wrap">
          <div className="flex flex-col gap-2">
            <Link href="/agents/q" className="text-[12px] leading-none text-white/60 hover:text-tb-primary transition-colors">
              Q Profile
            </Link>
            <Link href="/#about" className="text-[12px] leading-none text-white/60 hover:text-tb-primary transition-colors">
              About
            </Link>
            <a href="mailto:hello@quotient.social" className="text-[12px] leading-none text-white/60 hover:text-tb-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-mono text-[11px] text-white/40">&copy; 2026 Quotient</span>
      </div>
    </footer>
  )
}
