# Quotient Home Site Architecture

## Purpose

This repo is a Next.js App Router marketing site for Quotient. It presents one live agent, `Q`, and funnels users into three product surfaces:

- Signal subscription
- API access
- Future vault / builder interest

## Stack

- Framework: Next.js 14 App Router
- Runtime: React 18
- Styling: Tailwind CSS
- Fonts: Newsreader, DM Mono, Inter, Instrument Sans

## Shared Site Shell

- `src/app/layout.tsx`
  - Global metadata for the entire site
  - Loads fonts and global CSS
- `src/components/Nav.tsx`
  - Fixed top nav on every major page
  - Primary nav links: `/agents`, `/about`, `/#track-record`
  - Desktop dropdown exposes `Q · Geopolitics`
- `src/components/Footer.tsx`
  - Reused across the site
  - Links to Signal, API, Pricing, About, Farcaster, World, Contact
  - Includes Substack subscribe form posting to Substack directly

## Route Inventory

### Rendered pages

| Route | Purpose |
| --- | --- |
| `/` | Main marketing landing page |
| `/about` | Company / platform narrative |
| `/pricing` | Pricing comparison page |
| `/agents` | Agent directory |
| `/agents/q/signal` | Q Signal landing page |
| `/agents/q/api` | Q API landing page |

### Redirect-only routes

| Route | Redirect target |
| --- | --- |
| `/agents/q` | `/agents/q/signal` |
| `/signal` | `/agents/q/signal` |
| `/api` | `/agents/q/api` |
| `/platforms` | `/agents/q/api` |

## Site Flow

```text
Home (/)
  -> Track Record anchor
  -> Agents (/agents)
  -> About (/about)
  -> Q Signal (/agents/q/signal)
  -> Q API (/agents/q/api)
  -> Contact / waitlist / Substack

Agents (/agents)
  -> Q Signal (/agents/q/signal)
  -> Builder contact

About (/about)
  -> Q Signal (/agents/q/signal)
  -> Builder / contributor interest

Pricing (/pricing)
  -> Free signup intent
  -> Signal subscription intent
  -> Platform/API contact intent

Q Signal (/agents/q/signal)
  -> Subscribe
  -> Review proof and live-signal preview

Q API (/agents/q/api)
  -> Docs
  -> Platform integration inquiry
  -> Developer / agent adoption
```

## Page-By-Page Content

### `/`

File: `src/app/page.tsx`

This is the main landing page. It is a stacked marketing funnel built from reusable sections:

1. `MarketplaceHero`
   - Headline: `Q trades prediction markets. You collect the returns.`
   - Core claim: Q finds mispriced odds and trades the gap
   - CTA: `Get access` -> `/agents/q`
2. `TrackRecord`
   - Performance framing and proof stats
   - Sample recent trades table
   - CTA: `See Q's full track record` -> `/agents/q/signal`
3. `Ecosystem`
   - Three-product card layout:
     - Vault
     - Signal
     - API
4. `BiggerPicture`
   - Positions Q as the first agent in a broader marketplace
   - CTA to `/about`
5. `Closing`
   - Builder-facing CTA
6. `Footer`

Primary intent:

- Establish trust with performance
- Route traders into Signal
- Route builders and platforms into API or contact

### `/about`

File: `src/app/about/page.tsx`

This page explains the company thesis and platform model.

Sections:

1. Hero
   - `Where judgment becomes a product.`
2. Problem / solution split
   - Problem: judgment is invisible
   - Solution: build an agent, prove it, earn
   - Inline CTA to `/agents/q/signal`
3. Roadmap
   - Today: Q
   - Soon: more agents
   - Vision: marketplace
4. Coaching loop
   - Define
   - Calibrate
   - Coach
   - Productize
   - Compound
5. General FAQ
6. Footer

Primary intent:

- Explain Quotient as platform infrastructure, not just one product page
- Convert experts and forecasters into future builders or contributors

### `/pricing`

File: `src/app/pricing/page.tsx`

This is a standalone pricing comparison page with two major sections:

1. Pricing cards
   - Free
   - Signal
   - Platform / API
2. Feature comparison table
   - Compares live markets, key factors, evidence chains, alerts, API access, mobile/substack

Primary intent:

- Clarify the packaging of the same core intelligence into separate access tiers

Current note:

- Pricing includes placeholders like `$[X]` and `$[Y]`, so this page is partly production-like marketing copy and partly staging content.

### `/agents`

File: `src/app/agents/page.tsx`

This is the directory page for current and future agents.

Sections:

1. Agent directory hero
2. Agent grid
   - One live card for `Q`
   - Four coming-soon placeholders:
     - Culture & Consumer
     - Macro & Rates
     - Sports
     - Custom Strategies
3. Builder CTA
4. Footer

Primary intent:

- Show that Q is the first entry in a broader multi-agent catalog
- Capture inbound interest from future builders

### `/agents/q/signal`

File: `src/app/agents/q/signal/page.tsx`

This is the main product page for traders using Q's signal. It includes the shared `QTabBar`, which switches between Signal and API.

Sections:

1. Signal hero
   - Value proposition: forecast, spread, factors, evidence
   - Preview table with two visible sample markets and one gated blurred row
   - CTA: subscribe to unlock
2. `QCalledIt`
   - Resolved examples with ROI and call details
3. `LiveSignal`
   - Current spread table with sample live opportunities
4. Signal pricing
   - Free
   - Signal
   - Signal + Equities
5. FAQ
6. Footer

Primary intent:

- Convert visitors into Signal subscribers
- Prove legitimacy through resolved examples and spread-based framing

### `/agents/q/api`

File: `src/app/agents/q/api/page.tsx`

This is the developer and platform landing page for Q's API. It also uses the shared `QTabBar`.

Sections:

1. API hero
   - Value proposition for structured JSON and evidence
   - CTAs to docs
   - Interactive code sample tabs: curl, Python, Node
2. `WhoItsFor`
   - Two-tab switcher:
     - Platforms & Wallets
     - Agents & Developers
3. `CoreEndpoints`
   - `/v1/markets`
   - `/v1/signals/:id`
   - `/v1/intelligence`
4. `FlexiblePayment`
   - Per-call
   - Subscription
   - Volume
5. API FAQ
6. Footer

Primary intent:

- Convert technical buyers into API usage or integration conversations

## Redirect Behavior

The route design intentionally collapses older or shorter marketing URLs into the two canonical Q product pages.

- `/agents/q` redirects to Signal
- `/signal` redirects to Signal
- `/api` redirects to API
- `/platforms` redirects to API

This means the public information architecture is effectively centered on:

- One homepage
- One about page
- One pricing page
- One agents index
- Two canonical Q product pages

## Component Architecture

### Home-only sections

- `src/components/MarketplaceHero.tsx`
- `src/components/TrackRecord.tsx`
- `src/components/Ecosystem.tsx`
- `src/components/BiggerPicture.tsx`
- `src/components/Closing.tsx`

### Q shared components

- `src/components/QTabBar.tsx`
  - Shared local navigation for Q
- `src/components/QCalledIt.tsx`
  - Resolved outcomes proof block
- `src/components/LiveSignal.tsx`
  - Live market spread preview
- `src/components/CodeBlock.tsx`
  - Interactive API examples

### Shared UI primitives

- `src/components/FAQ.tsx`
  - Collapsible FAQ block used on About, Signal, and API
- `src/components/Footer.tsx`
  - Shared footer with outbound and internal links

## Information Architecture Summary

The site is not a general-purpose content site. It is a focused conversion funnel around a single agent, `Q`.

The hierarchy is:

1. Brand and thesis
2. Proof and performance
3. Product access
4. Platform vision

In practice, most internal paths converge on one of two commercial endpoints:

- `Signal` for traders
- `API` for platforms, wallets, and developers

## Current Gaps / Notes

- `Q` does not have a unique overview page. `/agents/q` immediately redirects into `/agents/q/signal`.
- Several CTAs are visual only and do not yet wire into app-native signup flows.
- Pricing still contains placeholder values on some pages.
- The site is marketing-heavy and mostly static. There is no internal CMS, data fetching layer, or server-side content model in this repo.
