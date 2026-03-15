export default function MarketsToWatch() {
  return (
    <section className="border-b border-border-thin py-16 px-10 max-md:px-6">
      <div className="max-w-content mx-auto">
        <div className="border border-border-thin rounded-sm overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-border-thin">
            <span className="font-mono text-[11px] text-gray-400 uppercase tracking-eyebrow">
              Markets to watch
            </span>
            <span className="font-mono text-[11px] text-gray-400 hover:text-brand-black transition-colors cursor-pointer">
              View all
            </span>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border-thin">
                  <th className="font-mono text-[10px] uppercase tracking-eyebrow text-gray-400 font-normal px-5 py-3">
                    Market
                  </th>
                  <th className="font-mono text-[10px] uppercase tracking-eyebrow text-gray-400 font-normal px-3 py-3">
                    Q says
                  </th>
                  <th className="font-mono text-[10px] uppercase tracking-eyebrow text-gray-400 font-normal px-3 py-3">
                    Q score
                  </th>
                  <th className="font-mono text-[10px] uppercase tracking-eyebrow text-gray-400 font-normal px-3 py-3 text-right">
                    Odds
                  </th>
                  <th className="font-mono text-[10px] uppercase tracking-eyebrow text-gray-400 font-normal px-3 py-3 text-right">
                    Spread ↓
                  </th>
                  <th className="font-mono text-[10px] uppercase tracking-eyebrow text-gray-400 font-normal px-3 py-3 text-right max-md:hidden">
                    Analysts
                  </th>
                  <th className="font-mono text-[10px] uppercase tracking-eyebrow text-gray-400 font-normal px-3 py-3 text-right max-md:hidden">
                    Activity
                  </th>
                  <th className="font-mono text-[10px] uppercase tracking-eyebrow text-gray-400 font-normal px-3 py-3 text-right max-md:hidden">
                    Liquidity
                  </th>
                </tr>
              </thead>
              <tbody>
                <MarketRow
                  question="Will Russia capture Kostyantynivka by December 31, 2026?"
                  direction="YES"
                  score={46}
                  odds="88%"
                  qOdds="52%"
                  spread="36 pts"
                  analysts="3 analysts"
                  activity={3}
                  maxActivity={33}
                  liquidity="$85"
                />
                <MarketRow
                  question="US x Iran ceasefire by June 30?"
                  direction="NO"
                  score={60}
                  odds="71%"
                  qOdds="42%"
                  spread="28 pts"
                  analysts="10 analysts"
                  activity={16}
                  maxActivity={33}
                  liquidity="$124K"
                />
                <MarketRow
                  question="US x Iran ceasefire by May 31?"
                  direction="NO"
                  score={59}
                  odds="65%"
                  qOdds="42%"
                  spread="23 pts"
                  analysts="10 analysts"
                  activity={17}
                  maxActivity={33}
                  liquidity="$111K"
                />
                <MarketRow
                  question="Will Israel launch a major ground offensive in Lebanon by March 31?"
                  direction="YES"
                  score={48}
                  odds="56%"
                  qOdds="78%"
                  spread="22 pts"
                  analysts="9 analysts"
                  activity={9}
                  maxActivity={33}
                  liquidity="$316K"
                />
                <MarketRow
                  question="Masoud Pezeshkian out by December 31?"
                  direction="NO"
                  score={46}
                  odds="54%"
                  qOdds="32%"
                  spread="22 pts"
                  analysts="1 analyst"
                  activity={1}
                  maxActivity={33}
                  liquidity="$915"
                />
                <MarketRow
                  question="Russia x Ukraine ceasefire by end of 2026?"
                  direction="NO"
                  score={60}
                  odds="42%"
                  qOdds="22%"
                  spread="19 pts"
                  analysts="20 analysts"
                  activity={33}
                  maxActivity={33}
                  liquidity="$80K"
                />
                <MarketRow
                  question="Will Iran strike Mina Al-Ahmadi Refinery by March 31?"
                  direction="NO"
                  score={57}
                  odds="37%"
                  qOdds="18%"
                  spread="19 pts"
                  analysts="4 analysts"
                  activity={5}
                  maxActivity={33}
                  liquidity="$2K"
                />
                <MarketRow
                  question="Will France, UK, or Germany strike Iran by June 30?"
                  direction="NO"
                  score={62}
                  odds="24%"
                  qOdds="6%"
                  spread="18 pts"
                  analysts="5 analysts"
                  activity={5}
                  maxActivity={33}
                  liquidity="$15K"
                  last
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

function MarketRow({
  question,
  direction,
  score,
  odds,
  qOdds,
  spread,
  analysts,
  activity,
  maxActivity,
  liquidity,
  last = false,
}: {
  question: string
  direction: 'YES' | 'NO'
  score: number
  odds: string
  qOdds: string
  spread: string
  analysts: string
  activity: number
  maxActivity: number
  liquidity: string
  last?: boolean
}) {
  const barWidth = Math.round((score / 100) * 100)
  const activityWidth = Math.round((activity / maxActivity) * 100)

  return (
    <tr className={last ? '' : 'border-b border-border-thin'}>
      <td className="px-5 py-4 text-[13px] text-brand-black font-medium leading-snug max-w-[360px]">
        {question}
      </td>
      <td className="px-3 py-4">
        <span
          className={`font-mono text-[11px] font-medium px-1.5 py-0.5 rounded-sm ${
            direction === 'YES'
              ? 'bg-green-50 text-green-700'
              : 'bg-red-50 text-red-600'
          }`}
        >
          {direction}
        </span>
      </td>
      <td className="px-3 py-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[12px] text-brand-black">{score}</span>
          <div className="w-[60px] h-[6px] bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-blue rounded-full"
              style={{ width: `${barWidth}%` }}
            />
          </div>
        </div>
      </td>
      <td className="px-3 py-4 text-right">
        <span className="font-mono text-[12px] text-brand-black">{odds}</span>
        <span className="font-mono text-[12px] text-gray-300"> &middot; </span>
        <span className="font-mono text-[12px] text-brand-blue">{qOdds}</span>
      </td>
      <td className="px-3 py-4 text-right font-mono text-[12px] text-brand-black">
        {spread}
      </td>
      <td className="px-3 py-4 text-right font-mono text-[12px] text-gray-400 max-md:hidden">
        {analysts}
      </td>
      <td className="px-3 py-4 text-right max-md:hidden">
        <div className="flex items-center justify-end gap-1.5">
          <span className="font-mono text-[12px] text-gray-400">{activity}</span>
          <div className="w-[40px] h-[5px] bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gray-400 rounded-full"
              style={{ width: `${activityWidth}%` }}
            />
          </div>
        </div>
      </td>
      <td className="px-3 py-4 text-right font-mono text-[12px] text-gray-400 max-md:hidden">
        {liquidity}
      </td>
    </tr>
  )
}
