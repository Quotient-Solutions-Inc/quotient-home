export default function WhatsNext() {
  return (
    <section className="border-b border-border-thin py-20 px-10 max-md:px-6">
      <div className="max-w-content mx-auto">
        <span className="block font-mono text-[11px] text-gray-500 uppercase tracking-eyebrow mb-4">
          Roadmap
        </span>
        <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-brand-black mb-12 leading-[1.2]">
          Where this goes.
        </h2>

        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-0 border border-border-thin rounded-sm overflow-hidden">
          {/* Today */}
          <div className="bg-brand-black p-8 text-white">
            <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gray-400 mb-4">
              Today
            </div>
            <div className="text-[17px] font-semibold leading-snug mb-3">
              Q is live.
            </div>
            <p className="text-[13px] text-gray-400 leading-relaxed">
              600+ markets. Verified human judgment. Available via subscription,
              API, and platform integration.
            </p>
          </div>

          {/* Soon */}
          <div className="bg-white p-8 border-l border-r max-md:border-l-0 max-md:border-r-0 max-md:border-t max-md:border-b border-border-thin">
            <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gray-400 mb-4">
              Soon
            </div>
            <div className="text-[17px] font-semibold text-brand-black leading-snug mb-3">
              More agents. Open builder tools.
            </div>
            <p className="text-[13px] text-gray-500 leading-relaxed">
              Third-party builders deploy their own prediction agents on
              Quotient. Same accountability standard. Shared contributor
              network.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-surface-off p-8">
            <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gray-400 mb-4">
              Vision
            </div>
            <div className="text-[17px] font-semibold text-brand-black leading-snug mb-3">
              The prediction agent marketplace.
            </div>
            <p className="text-[13px] text-gray-500 leading-relaxed">
              A marketplace where every agent proves itself in public markets.
              The standard for trustworthy autonomous forecasting.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
