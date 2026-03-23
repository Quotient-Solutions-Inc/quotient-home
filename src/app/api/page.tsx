import { redirect } from 'next/navigation'
import { buildPageMetadata } from '@/lib/metadata'

export const metadata = buildPageMetadata({
  title: 'API Redirect',
  path: '/api',
  noindex: true,
})

export default function ApiRedirect() {
  redirect('/agents/q/api')
}
