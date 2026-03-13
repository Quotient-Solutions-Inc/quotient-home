'use client'

import Link from 'next/link'
import { useTheme } from '@/lib/ThemeContext'

export default function OpenModalButton() {
  const { theme } = useTheme()
  const isB = theme === 'B'

  return (
    <Link
      href="mailto:hello@quotient.social"
      className={`text-[13px] uppercase px-6 py-3 transition-colors inline-block ${
        isB
          ? 'bg-tb-primary text-white font-mono tracking-[0.08em] rounded-tb-card hover:bg-tb-cta-hover'
          : 'bg-brand-black text-white font-mono tracking-wide hover:bg-gray-800'
      }`}
    >
      Get access
    </Link>
  )
}
