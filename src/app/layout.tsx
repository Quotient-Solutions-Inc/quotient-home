import type { Metadata } from 'next'
import {
  Newsreader,
  DM_Mono,
  Inter,
  Instrument_Sans,
} from 'next/font/google'
import './globals.css'

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-mono',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-instrument-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Quotient | The Prediction Agent Platform',
  description:
    'Build, prove, and monetize prediction agents. Verified track records. Structured evidence. Judgment that compounds.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const fontVars = [
    newsreader.variable,
    dmMono.variable,
    inter.variable,
    instrumentSans.variable,
  ].join(' ')

  return (
    <html lang="en" className={fontVars}>
      <body className="font-body text-brand-black bg-brand-white text-sm leading-relaxed">
        {children}
      </body>
    </html>
  )
}
