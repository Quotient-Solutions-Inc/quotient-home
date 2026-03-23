import { redirect } from 'next/navigation'
import { buildPageMetadata } from '@/lib/metadata'

export const metadata = buildPageMetadata({
  title: 'Track Record Redirect',
  path: '/agents/q/track-record',
  noindex: true,
})

export default function TrackRecordPage() {
  redirect('/')
}
