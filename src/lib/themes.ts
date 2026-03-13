/**
 * Theme configuration for Quotient dual-theme system.
 *
 * Theme A — Editorial / Bloomberg-meets-Economist
 *   Clean, flat, bordered sections. Serif headlines, mono labels.
 *
 * Theme B — Warm / Card-based / peak6trials-inspired
 *   Rounded card tiles on cream page bg. Bold red hero sections.
 *   Same fonts as A but at dramatically different scales.
 */

export type ThemeKey = 'A' | 'B'

export interface ThemeConfig {
  key: ThemeKey
  label: string
}

export const themeA: ThemeConfig = {
  key: 'A',
  label: 'Editorial',
}

export const themeB: ThemeConfig = {
  key: 'B',
  label: 'Warm',
}

export const themes: Record<ThemeKey, ThemeConfig> = { A: themeA, B: themeB }
