'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode
} from 'react'
import { type ThemeKey } from './themes'

interface ThemeContextValue {
  theme: ThemeKey
  toggle: () => void
  setTheme: (key: ThemeKey) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Default to Theme B (production). Theme A code preserved in components for reference.
  const [theme, setThemeState] = useState<ThemeKey>('B')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const setTheme = useCallback((key: ThemeKey) => {
    setThemeState(key)
  }, [])

  const toggle = useCallback(() => {
    setThemeState((prev) => (prev === 'A' ? 'B' : 'A'))
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggle, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme() must be used within a <ThemeProvider>')
  }
  return ctx
}
