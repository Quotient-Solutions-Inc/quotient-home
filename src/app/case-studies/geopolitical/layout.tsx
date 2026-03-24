import type { ReactNode } from 'react'
import { buildPageMetadata } from '@/lib/metadata'

export const metadata = buildPageMetadata({
  title: 'Geopolitical Case Study',
  description:
    'A closer look at the calls, evidence, and outcomes behind Q’s strongest geopolitical reads.',
  path: '/case-studies/geopolitical',
})

export default function GeopoliticalCaseStudyLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}
