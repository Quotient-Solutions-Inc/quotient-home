import { NextResponse } from 'next/server'
import { runQuery } from '@/lib/neo4j'

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
WITH m, p,
  CASE WHEN p.probability > p.yesOddsAtCreation
    THEN p.yesOddsAtCreation
    ELSE 1 - p.yesOddsAtCreation
  END AS entryPrice,
  CASE WHEN p.probability > p.yesOddsAtCreation
    THEN p.delta24h
    ELSE -p.delta24h
  END AS d24
RETURN
  m.question AS question,
  CASE WHEN p.probability > p.yesOddsAtCreation THEN 'YES' ELSE 'NO' END AS call,
  round(p.yesOddsAtCreation, 3) AS marketOddsAtEntry,
  round(p.probability, 3) AS qEstimate,
  round(abs(p.probability - p.yesOddsAtCreation) * 100, 1) AS spread,
  round(entryPrice, 3) AS entryPrice,
  round(CASE
    WHEN (d24 / entryPrice) <= -0.20 THEN -20.0
    ELSE (d24 / entryPrice) * 100
  END, 2) AS roi24h,
  p.createdAt AS calledAt
ORDER BY p.createdAt DESC
`

export async function GET() {
  try {
    const records = await runQuery(QUERY)

    const trades = records.map((record) => ({
      question: record.get('question'),
      call: record.get('call'),
      marketOddsAtEntry: record.get('marketOddsAtEntry'),
      qEstimate: record.get('qEstimate'),
      spread: record.get('spread'),
      entryPrice: record.get('entryPrice'),
      roi24h: record.get('roi24h'),
      calledAt: String(record.get('calledAt')),
    }))

    return NextResponse.json(trades)
  } catch (err) {
    console.error('Q trades query error:', err)
    return NextResponse.json(
      { error: 'Failed to fetch Q trades' },
      { status: 500 }
    )
  }
}
