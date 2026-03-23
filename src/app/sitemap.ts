import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/site'

const routes = [
  '/',
  '/about',
  '/team',
  '/agents',
  '/agents/q',
  '/agents/q/case-studies/geopolitical',
  '/agents/q/case-studies/culture',
  '/agents/q/api',
  '/api',
  '/platforms',
  '/pricing',
  '/signal',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }))
}
