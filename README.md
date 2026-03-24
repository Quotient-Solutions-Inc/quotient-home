# quotient-home

Marketing site for Quotient, built with Next.js App Router and Tailwind CSS.

## Current public flow

- `/` homepage
- `/build-with-q` API and developer landing page
- `/case-studies/geopolitical` geopolitical case study
- `/about` company narrative
- `/team` team page

## Commands

- `npm run dev`
- `npm run build`
- `npm run lint`

## Notes

- Primary navigation exposes case studies through a dropdown that links directly to the two public case-study pages.
- External form destinations are temporarily routed through `mailto:` fallbacks until final form URLs are supplied.
- SEO/discoverability routes now include `robots.txt`, `sitemap.xml`, manifest metadata, generated icons, and generated social-sharing images.
