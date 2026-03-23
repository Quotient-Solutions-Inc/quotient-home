# Launch Readiness Plan

This document captures the work needed to make the site easier to ship cleanly into a more technical team environment.

It is split into:

- work I can do confidently without needing product or legal decisions
- inputs I need from Shira
- items that likely need legal, brand, or internal approval
- expected end-user impact

## Goal

Bring the site to a state where it is:

- cleaner to review and merge
- more accessible
- better hardened for public launch
- easier for search engines and AI/search products to understand
- less likely to expose unfinished, misleading, or ambiguous content

## Work I Can Do Confidently Without Regrets

These are the changes I can make with low risk and strong upside.

### 1. Accessibility Baseline

- audit all public pages against obvious WCAG 2.2 AA issues
- replace non-semantic interactive elements with proper buttons/links
- add missing form labels and accessible names
- add `aria-expanded`, `aria-controls`, and related state where needed
- add proper dialog semantics and keyboard behavior for modals
- improve keyboard navigation and focus handling
- add reduced-motion handling for animated surfaces
- add a consistent visible focus treatment
- add a skip link and make landmark structure more reliable where needed

### 2. Public Flow Cleanup

- remove or hide accidental dead ends in the public flow
- hide, redirect, or `noindex` unfinished draft pages
- remove visible placeholder content from indexable/public paths
- make it clearer which routes are intentionally public

### 3. Metadata, SEO, and Discoverability

- add page-level titles and meta descriptions
- add canonical URLs
- add Open Graph metadata
- add Twitter/X card metadata
- add favicon support
- add site name metadata
- add sitemap generation
- add robots handling
- add baseline structured data
- add organization/site metadata that helps search engines and AI/search systems understand the site
- improve metadata consistency across key pages

### 4. Launch Hardening

- add baseline security headers
- tighten misleading UX states where the UI implies success without verification
- review public third-party embeds/scripts from a launch-readiness perspective
- flag or remove obvious trust-damaging loose ends

### 5. Documentation

- produce a concise launch checklist
- document what was changed
- document what still needs business or legal input
- leave the repo easier for teammates to review

## What I Need From Shira

These are the pieces I should not guess on.

### 1. Public Site Decisions

- canonical production domain
- which pages should be public now
- which pages are draft-only and should be hidden or de-indexed
- whether case studies should stay live, be hidden, or be removed from nav and search

### 2. Brand and Messaging

- approved company/site naming if there are exact preferences
- preferred homepage positioning/tagline
- any page titles or descriptions you feel strongly about
- whether there are claims that need internal review before publishing

### 3. Contact and Company Info

- preferred public contact email
- whether a company address or legal entity details should appear on-site
- who should receive accessibility or privacy inquiries

### 4. Metadata and Sharing Assets

- final favicon files, or permission to use a temporary derived one
- whether you want one global social card or page-specific social cards
- preferred social-sharing copy tone
- any approved imagery or brand assets to use for social cards

### 5. Geo / Market Targeting

- whether the site is US/English only for now
- whether you want any country, language, or regional targeting
- whether local/business-style location metadata is relevant

### 6. Third-Party Tooling

- analytics tools in production
- pixels or conversion tools in production
- embed providers in production
- newsletter or form providers that will be live at launch

### 7. Legal / Policy Inputs

- privacy policy draft, if one exists
- terms of use draft, if one exists
- cookie policy or consent requirements, if applicable
- accessibility statement draft, if one exists

## What Likely Needs Legal, Brand, or Internal Approval

These are not good candidates for silent guesswork.

- final privacy policy text
- final terms of use
- cookie disclosures or consent language
- accessibility statement wording
- final public product claims
- final pricing claims
- final company/legal naming if that matters externally

## Expected End-User Impact

This work is not purely backend. Some of it is invisible infrastructure, but some of it will be noticeable.

### Noticeable User-Facing Changes

- forms may look slightly different because accessible labels and focus states need to exist
- modals, dropdowns, and accordions may behave more predictably with keyboard and screen reader support
- some draft pages or unfinished routes may disappear from nav or become less publicly visible
- some copy may tighten up where labels, titles, or descriptions are currently vague
- motion may reduce automatically for users who prefer reduced motion
- shared links on X, Slack, iMessage, etc. will look more intentional once social metadata is in place

### Mostly Invisible Changes

- canonical metadata
- robots and sitemap support
- structured data
- security headers
- favicon/browser metadata
- crawler-facing metadata for search and AI/search systems
- `noindex` or indexing controls on draft pages

## Recommendation For Execution

### Phase 1: No-Regrets Pass

Do the technical and structural work that improves quality without requiring business or legal judgment:

- accessibility baseline
- public flow cleanup
- metadata foundation
- launch hardening

### Phase 2: Input-Dependent Pass

After Shira provides the missing inputs:

- finalize public page exposure
- finalize metadata copy
- finalize favicon and social card assets
- add policy links and approved policy pages
- apply any geo-targeting decisions

### Phase 3: Final Review

- manual accessibility QA
- metadata/share-preview QA
- search/indexing sanity check
- final team-facing handoff summary

## Summary

The highest-confidence work is the technical baseline: accessibility fixes, metadata infrastructure, route cleanup, indexing controls, and launch hardening.

The highest-dependency work is the business/legal/public-positioning layer: policy text, final public claims, canonical domain, public-vs-draft decisions, and final social/share assets.
