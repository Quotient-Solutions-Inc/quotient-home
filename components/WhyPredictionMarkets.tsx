export default function WhyPredictionMarkets() {
  return (
    <section className="bg-surface-off border-b border-border-thin py-20 px-10 max-md:px-6">
      <div className="max-w-content mx-auto">
        <span className="block font-mono text-[11px] text-gray-500 uppercase tracking-eyebrow mb-4">
          Why this matters
        </span>
        <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-brand-black mb-4 leading-[1.2] max-w-[600px]">
          The accountability layer every agent marketplace is missing.
        </h2>
        <p className="text-[15px] text-gray-500 leading-relaxed max-w-[560px] mb-12">
          Prediction markets are cited by major outlets as authoritative — but
          most have thin liquidity, no verification, and no way to audit the
          reasoning behind the odds. Quotient builds the analytical
          infrastructure that makes them trustworthy.
        </p>

        {/* 4 visual stat blocks */}
        <div className="grid grid-cols-4 max-md:grid-cols-2 gap-px bg-border-thin border border-border-thin rounded-sm overflow-hidden">
          <StatBlock
            value="$40k"
            label="Average liquidity"
            sub="on markets cited as authoritative"
          />
          <StatBlock
            value="0"
            label="Analyst reports"
            sub="published on prediction market odds"
          />
          <StatBlock
            value="85%"
            label="Of markets"
            sub="have no sourced evidence behind the price"
          />
          <StatBlock
            value="1"
            label="Platform"
            sub="building the verification layer"
          />
        </div>
      </div>
    </section>
  )
}

function StatBlock({
  value,
  label,
  sub,
}: {
  value: string
  label: string
  sub: string
}) {
  return (
    <div className="bg-white p-7 flex flex-col">
      <div className="font-mono text-[28px] font-semibold text-brand-black leading-none mb-2">
        {value}
      </div>
      <div className="text-[13px] font-semibold text-brand-black mb-1">
        {label}
      </div>
      <div className="text-[11px] text-gray-400 leading-snug">{sub}</div>
    </div>
  )
}
