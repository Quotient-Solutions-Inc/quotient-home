# Project: Quotient — Marketing & Landing Pages
## quotient-home repo | shirales/quotient-home

---

## What This Is

The public marketing site for Quotient — a prediction market intelligence platform that combines AI analysis with verified human forecaster judgment to produce a signal layer that makes world-events prediction markets trustworthy enough to act on.

The core product insight: **the spread between Q's forecast and market odds is where the intelligence lives.** That gap is the product.

This site is not a web app. It is editorial-grade marketing: authoritative, restrained, and evidence-led. Think Bloomberg meets The Economist. No hype. No animations for their own sake. Every word earns its place.

---

## Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Fonts:** Google Fonts (Newsreader, DM Mono, Inter) + Instrument Sans for wordmark
- **Deploy:** Vercel (auto-deploy on push to main)
- **No CMS initially** — hardcoded content is fine for v1

---

## Brand System

### Colors
| Token | Hex | Usage |
|---|---|---|
| White | `#FFFFFF` | Primary background |
| Black | `#000000` | Primary text |
| Gray | `#D9D9D9` | Secondary surfaces, dividers |
| Blue | `#3598E6` | Primary accent, links, data highlights |
| Red-Orange | `#F35B28` | Bold accent, CTAs |
| Lavender | `#C596FE` | Accent |
| Pale Blue | `#A6CEE3` | Soft accent |
| Chartreuse | `#F7FF86` | Highlight accent |

Philosophy: Minimal grayscale base. Color is used deliberately and sparingly — never decoratively.

### Typography
| Role | Font | Notes |
|---|---|---|
| Wordmark | Instrument Sans 400 | Logo use only |
| Headlines / Subheads | Newsreader 400 | Editorial serif, warmth + authority |
| Eyebrow labels | DM Mono 400 | Uppercase, monospaced — technical credibility |
| Body | Inter 400 | Clean, readable |

Eyebrow labels are always uppercase. Used for section labels like `PRODUCT`, `WHO IT'S FOR`, `THE SIGNAL`.

### Voice & Tone
- Short sentences. Direct. Evidence-led.
- No hype language, no superlatives, no "revolutionary"
- Copy is written for people who need to be right, not people who want to feel excited
- Brand attributes: **Measured. Selective. Professional. Enabling.**

---

## Target Audiences (inform copy hierarchy)

1. **Platforms & Wallets** — Primary commercial target (Polymarket, Kalshi). Want to increase trading volume and user conviction. Quotient integrates alongside their existing markets.
2. **Agents & Developers** — API/agentic distribution. Need verified signal layer vs. raw headlines. Self-serve via API, x402 or Stripe.
3. **Individual Traders & Analysts** — Direct subscribers. Domain experts with high conviction and no legitimate way to act on it. Signal is the paid product.

---

## Site Structure (v1)

Build pages in this order:

### 1. `/` — Homepage
Sections (in order):
- **Nav** — Wordmark left, minimal links right (Product, For Platforms, API, Sign In)
- **Hero** — Single declarative statement about what Quotient does. No subhead fluff. One CTA.
- **The Problem** — World events markets are thinly traded, easily manipulated, and cited as authoritative. The analytical infrastructure doesn't exist yet.
- **The Product** — Q's forecast vs. market odds. The spread is the signal. Show a mock data visualization of this gap.
- **Who It's For** — Three-column layout. One column per audience segment. DM Mono eyebrow labels.
- **Signal** — The paid subscription product. Brief. Link to sign up.
- **API / For Developers** — Short block. CTA to API docs.
- **Footer** — Minimal. Logo, nav links, legal.

### 2. `/for-platforms` — B2B landing page (build second)
### 3. `/api` — Developer-facing page (build third)

---

## Wireframe: Site Architecture (Source of Truth)

**File: `/reference/ref-wireframe.html`** — Read this before building any page. It is the complete, clickable wireframe for the entire site. It contains all pages, all sections, all copy, and all component patterns in their final intended layout.

### Pages in the wireframe

| Page ID | URL | Purpose |
|---|---|---|
| `page-home` | `quotient.social` | Main marketing homepage |
| `page-signal` | `/signal` | Individual subscriber product page |
| `page-platforms` | `/platforms` | B2B platforms & wallets page |
| `page-agents` | `dev.quotient.social` | Developer / API page |
| `page-about` | `/about` | About page |
| `page-pricing` | `/pricing` | Pricing page |

### Homepage section order (page-home)
1. **01 — Hero** — Main headline, sub, CTAs
2. **02 — How it works** — Product mechanism explanation
3. **03 — Q Called It** — Proof/evidence section with past calls
4. **04 — Live signal sample** — Gated preview of the actual product
5. **05 — For you (Audience split)** — Three audience columns
6. **Contributors banner** — Social proof strip
7. **Footer**

### Build order
Follow the wireframe's page structure exactly. Do not invent sections or reorder. The wireframe copy is placeholder — use the brand brief in this file for final copy. The wireframe layout and component structure are the spec.

---

## Visual Reference & Design Language

A `/reference` folder in the repo root contains HTML files that define the UI pattern language for this site. **Read these files before building any component.**

| File | What to steal |
|---|---|
| `ref-macro-dashboard.html` | Overall layout: `.system-frame` container, `.sys-header` nav bar pattern, 2-column main grid (content + dark sidebar), `.editorial-hero` section with meta-label + serif headline + prose |
| `ref-modal-alert.html` | Modal/overlay pattern, `.allocation-table` data table style, action footer with button pair |
| `ref-equities-table.html` | `.heatmap-container` grid of colored cells, sortable data table with monospaced values, `.signal-grid` 2x2 stat blocks |
| `ref-fixed-income-chart.html` | SVG inline chart pattern, `.duration-grid` 3-col stat cells, `.fi-table` auction results layout |
| `ref-event-log-feed.html` | `.log-entry` row pattern with timestamp/severity/source/message columns, `.tag` severity badges, live feed blinking indicator |

### Key UI Patterns to Adapt (with Quotient brand substitutions)

**Terminal frame:**
- Reference uses `border: 1px solid #0A0A0A` double-shadow frame → keep this exactly
- Reference uses `border-radius: 20px` on some frames → use sparingly, homepage should feel flat/editorial not app-like

**Header bar:**
- Reference: black bar, IBM Plex Mono, uppercase nav links in brackets `[ MACRO ]`
- Quotient adaptation: black bar, DM Mono, nav links without brackets — cleaner, less terminal-cosplay
- Keep the red dot `::before` accent on the wordmark — works perfectly for Quotient

**Type pairing:**
- Reference uses IBM Plex Serif (headlines) + IBM Plex Mono (labels) + Inter (body)
- Quotient substitution: Newsreader → IBM Plex Serif, DM Mono → IBM Plex Mono, Inter → Inter (same), Instrument Sans → wordmark only
- The rhythm is identical — just swap the font families

**Color substitution:**
- Reference `--accent-red: #DE4A2F` → Quotient `#F35B28` (Red-Orange, CTAs)
- Reference `--accent-blue: #2A6496` → Quotient `#3598E6` (Blue, data highlights)
- Reference black sidebar → keep black (`#000000`)
- Reference `--gray-light: #F4F4F4` → keep as-is

**Data cells (`.data-cell` pattern):**
- 4-column grid with 1px gap on `--border-thin` background = the gap creates grid lines
- Cell contains: mono label top, large serif number middle, mono metadata bottom
- This is the pattern for Quotient's "Q forecast vs market odds" spread display

**Dark sidebar:**
- Reference: black bg, colored top module (red accent), feed items below
- Quotient adaptation: use for live signal feed, Q forecast outputs, or CTA module
- The red sidebar accent module (`dark-motif`) maps perfectly to a Quotient signal alert

**Meta-labels (eyebrow text):**
- Reference: `.meta-label` — mono, uppercase, letter-spacing 0.1em, gray, border-bottom
- Use exactly this pattern for all Quotient section labels: `PRODUCT`, `THE SIGNAL`, `WHO IT'S FOR`

---

## Design Principles for Claude Code

- **No gradients** unless they are subtle grayscale
- **No stock photos** — data visualizations and typography carry the visual weight
- **Grid is everything** — use consistent column grids, generous whitespace
- **Mobile-first** — but this skews desktop-primary audience
- **Borders and rules** over shadows — editorial aesthetic
- **Monospaced elements** (DM Mono) signal data/technical precision wherever they appear
- All CTAs use Red-Orange `#F35B28` or Blue `#3598E6` — never both on the same section

---

## Dev Notes

- Keep components modular: one file per section (Hero.tsx, Problem.tsx, etc.)
- Use Tailwind custom config to register brand color tokens
- Fonts loaded via `next/font/google`
- Start with homepage only — get it pixel-perfect before adding pages
- Commit frequently with descriptive messages

---

## First Prompt to Use

> "Read CLAUDE.md fully. Then read all HTML files in /reference — these are your visual design system. Scaffold a Next.js 14 + Tailwind project for the Quotient marketing site. Set up the font stack and register brand colors in tailwind.config. Then build the homepage Nav and Hero section, adapting the terminal frame + editorial layout pattern from the reference files using Quotient's brand colors and typography. No lorem ipsum — use real copy from the brief."
