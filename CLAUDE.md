# Project: Quotient — Marketing & Landing Pages
## quotient-home repo

---

## What This Is

The public marketing site for Quotient — a prediction market intelligence platform powered by Q, an AI trading agent that analyzes world events and generates forecasts for prediction markets.

The core product insight: **the spread between Q's forecast and market odds is where the intelligence lives.** That gap is the product.

This site is editorial-grade marketing: authoritative, restrained, and evidence-led. Think Bloomberg meets The Economist.

---

## Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Fonts:** Google Fonts (Newsreader, DM Mono, Inter) + Instrument Sans for wordmark
- **Deploy:** Vercel (auto-deploy on push to main)

---

## Page Routes

| Route | Purpose |
|-------|---------|
| `/` | Homepage — Hero, Track Record preview, How It Works, Ecosystem CTA, Footer |
| `/agents/q/track-record` | Q's Track Record — SignalLinesAnimation, QCallsFeed table, QCalledIt section, Vault CTA |
| `/agents` | Build with Q — Developer/API landing page with GridBlocksAnimation, endpoints, use cases |
| `/agents/q/api` | API Documentation — Code examples, FAQs, detailed endpoint docs |
| `/about` | About page — Company info, FAQs |
| `/team` | Team page |
| `/pricing` | Pricing page |
| `/api` | Redirects to `/agents/q/api` |
| `/platforms` | Redirects to `/agents/q/api` |
| `/signal` | Redirects to `/agents/q/track-record` |
| `/agents/q` | Redirects to `/agents/q/track-record` |

---

## Components

| Component | Used By | Purpose |
|-----------|---------|---------|
| `Nav.tsx` | All pages | Fixed top nav with wordmark, links, mobile menu, CTA button |
| `Footer.tsx` | All pages | Dark footer with nav columns, Substack subscribe, social links |
| `MarketplaceHero.tsx` | Homepage | Dark hero section with HeroAnimation, headline, CTAs |
| `HeroAnimation.tsx` | MarketplaceHero | Canvas particle animation for homepage hero |
| `TrackRecord.tsx` | Homepage | Preview section linking to full track record |
| `HowItWorks.tsx` | Homepage | Three-step explanation of Q's process |
| `Ecosystem.tsx` | Homepage | "Put Q to Work" CTA section with two cards |
| `QCallsFeed.tsx` | Track Record | Table of Q's open forecasts with mock data |
| `QCalledIt.tsx` | Track Record | Past resolved calls showcase |
| `SignalLinesAnimation.tsx` | Track Record | Canvas animation — converging signal lines |
| `GridBlocksAnimation.tsx` | Build with Q | Canvas animation — particles assembling into grid |
| `CodeBlock.tsx` | API Docs | Syntax-highlighted code examples |
| `QTabBar.tsx` | API Docs | Tab navigation between code examples |
| `FAQ.tsx` | About, API Docs | Expandable FAQ accordion |

---

## Nav Structure

**Desktop:**
- Wordmark (links to `/`)
- Track Record → `/agents/q/track-record`
- Build with Q → `/agents`
- About → `/about`
- Get Early Access (CTA button) → Vault waitlist

**Mobile:**
- Wordmark + Get Early Access button + hamburger menu
- Dropdown: Track Record, Build with Q, About

---

## Color Tokens (Tailwind)

Primary palette used across the site (`tb-*` prefix in `tailwind.config.js`):

| Token | Hex | Usage |
|-------|-----|-------|
| `tb-primary` | `#F35B28` | CTAs, accents, eyebrow labels |
| `tb-dark` | `#1C1A17` | Dark sections (hero, footer), text |
| `tb-page` | `#FAFAF7` | Light page backgrounds |
| `tb-cream` | `#EDEDEA` | Cards, table headers on light pages |
| `tb-data` | `#3B98E6` | Data highlights |
| `tb-border` | `#D9D9D9` | Borders, dividers |
| `tb-muted` | `#888880` | Muted text |
| `tb-lavender` | `#C596FE` | Accent color |
| `tb-cta-hover` | `#FF6B3D` | CTA hover state |

Additional hardcoded colors in components:
- `#FAFAF7` — Light section backgrounds
- `#EDEDEA` — Card backgrounds
- `#F35B28` — Orange CTA sections
- `rgba(28, 26, 23, *)` — Animation strokes on light backgrounds

---

## Typography

| Role | Font | CSS Class |
|------|------|-----------|
| Headlines | Newsreader | `font-headline` |
| Eyebrows/Labels | DM Mono | `font-mono` + uppercase |
| Body | Inter | `font-body` |
| Wordmark | Instrument Sans | `font-wordmark` |

Eyebrow pattern: `font-mono text-[11px] uppercase tracking-[0.08em] text-tb-primary`

---

## Placeholder Comments — Jordan To Provide

| Location | What's Needed |
|----------|---------------|
| `src/components/Nav.tsx:6` | Vault waitlist form URL or endpoint |
| `src/components/MarketplaceHero.tsx:6` | Vault waitlist form URL or endpoint |
| `src/components/Ecosystem.tsx:3` | Vault waitlist form URL or endpoint |
| `src/app/agents/q/track-record/page.tsx:8` | Vault waitlist form URL or endpoint |
| `src/components/QCallsFeed.tsx:1` | API endpoint to replace mock forecast data |
| `src/app/agents/page.tsx:6` | Final API docs URL (currently `https://dev.quotient.social`) |

All vault waitlist links currently point to `#` as a placeholder.

---

## Design Patterns

- **Section backgrounds:** Alternate between `#FAFAF7` (light) and `#1C1A17` (dark)
- **Card styling:** `rounded-[10px]` with `boxShadow: '0 1px 4px rgba(0,0,0,0.08)'`
- **Section padding:** `px-8 lg:px-tb-section-x py-tb-section-y`
- **Animations:** Canvas-based, 200px height, CSS mask for left/right edge fade
- **CTA buttons:** Orange fill (`bg-tb-primary`) or white outline on orange backgrounds

---

## Commit Workflow

After each meaningful change, commit in small logical chunks. Keep commit messages short and descriptive.

---

## Reference Files

The `/reference` folder contains HTML wireframes and UI pattern references from initial planning. These are historical context — the implemented site has evolved beyond them.
