import { redirect } from 'next/navigation'
import { buildPageMetadata } from '@/lib/metadata'

export const metadata = buildPageMetadata({
  title: 'Signal Redirect',
  path: '/signal',
  noindex: true,
})

export default function SignalRedirect() {
  redirect('/')
}
