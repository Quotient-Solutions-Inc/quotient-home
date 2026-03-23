# Quotient Home Site Architecture

## Purpose

This repo is a Next.js App Router marketing site for Quotient. The current public flow emphasizes three things:

- Homepage narrative and proof
- Public case studies
- Q API / developer adoption

## Stack

- Framework: Next.js 14 App Router
- Runtime: React 18
- Styling: Tailwind CSS
- Fonts: Newsreader, DM Mono, Inter, Instrument Sans

## Shared Site Shell

- `src/app/layout.tsx`
  - Global metadata, fonts, and global CSS
- `src/components/Nav.tsx`
  - Primary nav links: case studies dropdown, build with Q, about
  - Early-access CTA currently falls back to `mailto:`
- `src/components/Footer.tsx`
  - Reused site footer with product/company/social links
  - Includes Substack subscribe form

## Route Inventory

### Rendered pages

| Route | Purpose |
| --- | --- |
| `/` | Main marketing landing page |
| `/about` | Company / platform narrative |
| `/team` | Team page |
| `/agents/q/api` | Q API landing page |
| `/agents/q/case-studies/geopolitical` | Public geopolitical case study |
| `/agents/q/case-studies/culture` | Public culture case study |

### Redirect-only routes

| Route | Redirect target |
| --- | --- |
| `/agents` | `/agents/q/api` |
| `/agents/q` | `/agents/q/api` |
| `/agents/q/track-record` | `/` |
| `/signal` | `/` |
| `/pricing` | `/agents/q/api#pricing` |
| `/api` | `/agents/q/api` |
| `/platforms` | `/agents/q/api` |

## Site Flow

```text
Home (/)
  -> Case Studies (dropdown)
  -> Build with Q (/agents -> /agents/q/api)
  -> About (/about)
  -> Early access / contact / Substack

Case Studies
  -> Geopolitical (/agents/q/case-studies/geopolitical)
  -> Culture (/agents/q/case-studies/culture)

Q API (/agents/q/api)
  -> Docs
  -> Pricing
  -> Integration inquiry

About (/about)
  -> Team
  -> Builder / contributor narrative
```

## Notes

- The former standalone pricing page now redirects to the API pricing section to avoid shipping placeholder pricing.
- Case studies are part of the public primary navigation via a dropdown that forces a child-page choice instead of a generic index page.
- The former track-record route now redirects to the homepage because the proof surface lives in the homepage sections.
- Early-access destinations are currently `mailto:` fallbacks and should be replaced with final form URLs when available.
- Discoverability routes include `robots.txt`, `sitemap.xml`, manifest metadata, generated icons, and generated social-sharing images.
