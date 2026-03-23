import { redirect } from 'next/navigation'
import { buildPageMetadata } from '@/lib/metadata'

export const metadata = buildPageMetadata({
  title: 'Agents Redirect',
  path: '/agents',
  noindex: true,
})

export default function AgentsPage() {
  redirect('/agents/q/api')
}
