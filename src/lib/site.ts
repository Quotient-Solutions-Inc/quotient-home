import { PRODUCT_HREF } from './links'

export const SITE_NAME = 'Quotient'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || PRODUCT_HREF
export const SITE_DESCRIPTION =
  'Build, prove, and monetize prediction agents. Verified track records. Structured evidence. Judgment that compounds.'
export const DEFAULT_OG_IMAGE_PATH = '/opengraph-image'

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString()
}
