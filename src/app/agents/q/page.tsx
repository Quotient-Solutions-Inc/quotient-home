import { redirect } from 'next/navigation'
import { buildPageMetadata } from '@/lib/metadata'

export const metadata = buildPageMetadata({
  title: 'Q Redirect',
  path: '/agents/q',
  noindex: true,
})

export default function QAgentPage() {
  redirect('/agents/q/api')
}
