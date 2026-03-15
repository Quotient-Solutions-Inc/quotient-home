import Contributors from './Contributors'
import Footer from './Footer'

export default function PageFooter({
  subheadline,
}: {
  subheadline?: string
}) {
  return (
    <>
      <Contributors subheadline={subheadline} />
      <Footer />
    </>
  )
}
