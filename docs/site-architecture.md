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

| Route | Purpose |
| --- | --- |
| `/` | Main marketing landing page |
| `/build-with-q` | Q API landing page |
| `/case-studies/geopolitical` | Public geopolitical case study |
| `/about` | Company / platform narrative |
| `/team` | Team page |

## Site Flow

```text
Home (/)
  -> Case Studies (dropdown)
  -> Build with Q (/build-with-q)
  -> About (/about)
  -> Early access / contact / Substack

Case Studies
  -> Geopolitical (/case-studies/geopolitical)

Build with Q (/build-with-q)
  -> Docs
  -> Integration inquiry

About (/about)
  -> Team
  -> Builder / contributor narrative
```

## Notes

- The public IA is intentionally flat: home, build with Q, two case studies, about, and team.
- Case studies are part of the public primary navigation via a dropdown that forces a child-page choice instead of a generic index page.
- Early-access destinations are currently `mailto:` fallbacks and should be replaced with final form URLs when available.
- Discoverability routes include `robots.txt`, `sitemap.xml`, manifest metadata, generated icons, and generated social-sharing images.
