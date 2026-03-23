# Quotient Design System

## Purpose

This document is the canonical human-facing reference for the visual system used across the Quotient site.

Use it when:

- adding a new section or page
- editing layout, typography, or spacing
- changing buttons, cards, icons, or motion
- reviewing whether a new component fits the existing visual language

If a reusable visual rule changes, update this document in the same change.

## Design Direction

The site should feel:

- editorial
- restrained
- evidence-led
- confident, not flashy

The closest reference point is an intelligence or financial publication rather than a consumer startup landing page.

## Color System

### Core section backgrounds

- Light page background: `bg-tb-page` `#FAFAF7`
- Light alt background: `bg-tb-cream` `#EDEDEA`
- Dark background: `bg-tb-dark` `#1C1A17`
- Matte orange section background: `bg-tb-primary-matte` `#D55023`

### Core accents

- Primary orange accent: `text-tb-primary` `#F35B28`
- CTA hover orange: `#FF6B3D`
- Borders/dividers: `tb-border`
- Muted text: `tb-muted`

### Card treatments

- Cards on light backgrounds: `bg-white` with `boxShadow: '0 1px 4px rgba(0,0,0,0.08)'`
- Cards on dark backgrounds: `bg-white/[0.06]`
- Cards on orange backgrounds: `bg-white/[0.08]`

## Typography Hierarchy

### 1. Eyebrow

`font-mono text-[11px] uppercase tracking-[0.08em] text-tb-primary`

### 2. Section headline

`font-headline font-bold text-[24px] lg:text-[36px] leading-[0.95] tracking-[-0.02em] uppercase`

### 3. Section subhead

`text-[15px] leading-[1.7] text-tb-dark/60 max-w-[560px]`

### 4. Block label

`text-[15px] font-semibold text-tb-dark`

### 5. Block description

`text-[13px] text-tb-dark/50`

### 6. Card title

`text-[16px] font-semibold text-tb-dark`

### 7. Card body

`text-[14px] leading-relaxed text-tb-dark/60`

### 8. Footnote

`text-[10px] text-tb-dark/40`

### 9. CTA link

`font-mono text-[13px] uppercase tracking-[0.08em] text-tb-primary`

## Layout Rules

- Every major section should wrap content in `max-w-content mx-auto`.
- Data-heavy modules such as charts and tables should usually be left-aligned and constrained to `max-w-[720px]`.
- Card grids can use the full content width.
- Labels and descriptions should usually sit outside data cards; cards should emphasize the data itself.
- Section backgrounds should alternate rhythmically. Avoid stacking multiple heavy dark sections unless there is a clear reason.

## Buttons and CTAs

- Primary CTA sizing should stay consistent: `font-mono text-[13px] uppercase tracking-[0.08em] px-7 py-3 rounded-tb-card`
- On dark or orange backgrounds, default to outline-at-rest and filled-on-hover.
- On light backgrounds, default to filled orange with white text.
- CTA styles should look intentional and repeatable, not bespoke per section.

## Cards

- Default radius: `rounded-[10px]` or the shared rounded token used by the page
- Default shadow on light cards: `0 1px 4px rgba(0,0,0,0.08)`
- Cards should be visually quiet enough that the content carries the emphasis

## Icons

- Use inline SVGs
- Prefer stroke-based icons
- Standard pattern: `fill="none"`, `strokeWidth="1.5"`, `strokeLinecap="round"`
- Avoid emoji and decorative icon styles that feel playful or consumer-app-like

## Motion

- Motion should be decorative or explanatory, not attention-seeking
- Canvas animations should stay behind content
- Live/pulse dots should be used sparingly and only when they communicate a real state
- Transitions should generally stay at or under 200ms
- Reduced-motion preferences must be respected

## Accessibility Expectations

- Decorative motion should not be required to understand content
- Focus states must remain clearly visible
- Interactive elements must use semantic controls
- Color choices must preserve readable contrast

## Page-Level Patterns

### Homepage

- Broad narrative arc
- Strong editorial hero
- Evidence/proof sections embedded into the flow
- Clear CTA paths without excessive branching

### Case studies

- Story-driven proof pages
- Specific market context
- Clear explanation of what Q saw and why it mattered

### Build with Q / API

- More productized and technical
- Still visually aligned with the rest of the site
- Structured information, examples, and CTA clarity

## Maintenance Rules

- If a visual rule is reusable, document it here.
- If a rule is temporary or one-off, do not promote it into this file.
- If a page breaks a documented rule intentionally, the exception should be explicit in the PR or commit context.
