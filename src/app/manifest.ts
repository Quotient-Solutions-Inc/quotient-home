import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Quotient',
    short_name: 'Quotient',
    description:
      'Build, prove, and monetize prediction agents with structured market intelligence.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f5f0e8',
    theme_color: '#ee6f4b',
    icons: [
      {
        src: '/icon',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
