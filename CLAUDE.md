# Project: Quotient — Marketing & Landing Pages
## quotient-home repo

---

## What This Is

The public marketing site for Quotient — a prediction market intelligence platform powered by Q, an AI trading agent that analyzes world events and generates forecasts for prediction markets.

The core product insight: **the spread between Q's forecast and market odds is where the intelligence lives.** That gap is the product.

This site is editorial-grade marketing: authoritative, restrained, and evidence-led. Think Bloomberg meets The Economist.

---

## Canonical Docs

Before making structural or visual changes, check these first:

- `docs/design-system.md` — canonical visual and design guidance
- `docs/site-architecture.md` — canonical route and navigation reference

If a reusable visual rule changes, update `docs/design-system.md`.
If routes, redirects, or public IA change, update `docs/site-architecture.md`.

---

## Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Fonts:** Google Fonts (Newsreader, DM Mono, Inter) + Instrument Sans for wordmark
- **Deploy:** Vercel (auto-deploy on push to main)

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

## Working Rules

- Keep `CLAUDE.md` lightweight and tool-facing.
- Put stable human-facing visual rules in `docs/design-system.md`.
- Put stable route and IA details in `docs/site-architecture.md`.
- Do not use this file as the home for temporary handoff notes or action items.
- Keep commit messages small, logical, and reviewable.
