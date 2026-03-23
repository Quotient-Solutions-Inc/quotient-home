import { redirect } from 'next/navigation'
import { buildPageMetadata } from '@/lib/metadata'

export const metadata = buildPageMetadata({
  title: 'Pricing Redirect',
  path: '/pricing',
  noindex: true,
})

export default function PricingPage() {
  redirect('/agents/q/api#pricing')
}
