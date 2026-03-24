import type { Metadata } from 'next'
import {
  DEFAULT_OG_IMAGE_PATH,
  SITE_DESCRIPTION,
  SITE_NAME,
} from './site'

interface PageMetadataOptions {
  title: string
  description?: string
  path?: string
  noindex?: boolean
}

export function buildPageMetadata({
  title,
  description = SITE_DESCRIPTION,
  path,
  noindex = false,
}: PageMetadataOptions): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`

  return {
    title,
    description,
    alternates: path ? { canonical: path } : undefined,
    openGraph: {
      title: fullTitle,
      description,
      siteName: SITE_NAME,
      type: 'website',
      images: [
        {
          url: DEFAULT_OG_IMAGE_PATH,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} social sharing image`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [DEFAULT_OG_IMAGE_PATH],
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  }
}
