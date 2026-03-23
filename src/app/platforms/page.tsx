import { redirect } from 'next/navigation'
import { buildPageMetadata } from '@/lib/metadata'

export const metadata = buildPageMetadata({
  title: 'Platforms Redirect',
  path: '/platforms',
  noindex: true,
})

export default function PlatformsRedirect() {
  redirect('/agents/q/api')
}
