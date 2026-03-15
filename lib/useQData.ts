'use client'

import { useState, useEffect } from 'react'

export interface QStats {
  totalTrades: number
  avgRoi: number
  winRate: number
  avgWin: number
  avgLoss: number
}

export interface QTrade {
  question: string
  call: 'YES' | 'NO'
  marketOddsAtEntry: number
  qEstimate: number
  spread: number
  entryPrice: number
  roi24h: number
  calledAt: string
}

export function useQStats() {
  const [stats, setStats] = useState<QStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/q/stats')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch stats')
        return res.json()
      })
      .then(setStats)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return { stats, loading, error }
}

export function useQTrades() {
  const [trades, setTrades] = useState<QTrade[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/q/trades')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch trades')
        return res.json()
      })
      .then(setTrades)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return { trades, loading, error }
}
