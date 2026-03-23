# quotient-home

Marketing site for Quotient, built with Next.js App Router and Tailwind CSS.

## Current public flow

- `/` homepage
- `/about` company narrative
- `/team` team page
- `/agents` redirects to the Q API landing page
- `/agents/q` redirects to the Q API landing page
- `/agents/q/api` API and developer landing page
- `/agents/q/case-studies/geopolitical` geopolitical case study
- `/agents/q/case-studies/culture` culture case study
- `/agents/q/track-record` redirects to `/`
- `/signal` redirects to `/`
- `/api` and `/platforms` redirect to the API page
- `/pricing` redirects to the API pricing section

## Commands

- `npm run dev`
- `npm run build`
- `npm run lint`

## Notes

- Primary navigation exposes case studies through a dropdown that links directly to the two public case-study pages.
- External form destinations are temporarily routed through `mailto:` fallbacks until final form URLs are supplied.
- SEO/discoverability routes now include `robots.txt`, `sitemap.xml`, manifest metadata, generated icons, and generated social-sharing images.
