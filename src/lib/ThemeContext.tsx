'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react'
import { type ThemeKey } from './themes'

interface ThemeContextValue {
  theme: ThemeKey
  toggle: () => void
  setTheme: (key: ThemeKey) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

const STORAGE_KEY = 'quotient-theme'

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeKey>('A')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'A' || stored === 'B') {
      setThemeState(stored)
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme, mounted])

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
