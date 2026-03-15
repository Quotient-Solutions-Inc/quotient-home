import { NextResponse } from 'next/server'
import { getDriver } from '@/lib/neo4j'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const QUERY = `
MATCH (p:Prediction:Forecast)-[:ON_MARKET]->(m:Market)-[]-(e:Event)-[]-(t:Tag)
WHERE NOT t.name IN ['culture', 'celebrities']
  AND p.oddsBackfillAt IS NOT NULL
  AND p.delta24h IS NOT NULL
  AND p.probability IS NOT NULL
  AND p.yesOddsAtCreation > 0.2
  AND p.yesOddsAtCreation < 0.8
  AND abs(p.probability - p.yesOddsAtCreation) >= 0.2
  AND m.volume24hr > 20000
  AND p.createdAt > datetime() - duration({days: 14})
WITH m, p ORDER BY p.createdAt ASC
WITH m, collect(p)[0] AS p
WITH p,
  CASE WHEN p.probability > p.yesOddsAtCreation
    THEN p.yesOddsAtCreation
    ELSE 1 - p.yesOddsAtCreation
  END AS entryPrice,
  CASE WHEN p.probability > p.yesOddsAtCreation
    THEN p.delta24h
    ELSE -p.delta24h
  END AS d24
WITH p, entryPrice,
  CASE
    WHEN (d24 / entryPrice) <= -0.20 THEN -20.0
    ELSE round((d24 / entryPrice) * 100, 2)
  END AS roi24h
RETURN
  count(*) AS totalTrades,
  round(avg(roi24h), 2) AS avgRoi,
  round(toFloat(sum(CASE WHEN roi24h > 0 THEN 1 ELSE 0 END)) / count(*), 3) AS winRate,
  round(avg(CASE WHEN roi24h > 0 THEN roi24h END), 2) AS avgWin,
  round(avg(CASE WHEN roi24h <= 0 THEN roi24h END), 2) AS avgLoss
`

export async function GET() {
  try {
    const driver = getDriver()
    const session = driver.session({ database: process.env.NEO4J_DATABASE || 'neo4j' })

    try {
      const result = await session.run(QUERY)
      const record = result.records[0]

      if (!record) {
        return NextResponse.json({ error: 'No data returned' }, { status: 404 })
      }

      const stats = {
        totalTrades: toNumber(record.get('totalTrades')),
        avgRoi: toNumber(record.get('avgRoi')),
        winRate: toNumber(record.get('winRate')),
        avgWin: toNumber(record.get('avgWin')),
        avgLoss: toNumber(record.get('avgLoss')),
      }

      return NextResponse.json(stats)
    } finally {
      await session.close()
    }
  } catch (err) {
    console.error('Q stats query error:', err)
    return NextResponse.json(
      { error: 'Failed to fetch Q stats' },
      { status: 500 }
    )
  }
}

function toNumber(val: unknown): number {
  if (val === null || val === undefined) return 0
  if (typeof val === 'number') return val
  if (typeof val === 'object' && val !== null && 'toNumber' in val) {
    return (val as { toNumber: () => number }).toNumber()
  }
  return Number(val)
}
