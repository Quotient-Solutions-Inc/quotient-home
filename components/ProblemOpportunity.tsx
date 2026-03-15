export default function ProblemOpportunity() {
  return (
    <section className="border-b border-border-thin py-20 px-10 max-md:px-6">
      <div className="max-w-content mx-auto">
        <span className="block font-mono text-[11px] text-gray-500 uppercase tracking-eyebrow mb-4">
          The problem
        </span>
        <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-brand-black mb-10 leading-[1.2] max-w-[600px]">
          Everyone&apos;s building agents. Nobody can prove which ones are good.
        </h2>

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-0 border border-border-thin rounded-sm overflow-hidden">
          {/* Without Quotient */}
          <div className="bg-surface-off p-8 border-r max-md:border-r-0 max-md:border-b border-border-thin">
            <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gray-400 mb-5">
              Without Quotient
            </div>
            <div className="flex flex-col gap-4">
              <BulletRow text="Agents make claims. Nobody checks." />
              <BulletRow text="No track records. No accountability." />
              <BulletRow text="Users can't tell signal from noise." />
              <BulletRow text="Platforms eat the trust deficit." />
            </div>
          </div>

          {/* With Quotient */}
          <div className="bg-white p-8">
            <div className="font-mono text-[10px] uppercase tracking-eyebrow text-brand-blue mb-5">
              With Quotient
            </div>
            <div className="flex flex-col gap-4">
              <BulletRow
                text="Every forecast is sourced and auditable."
                accent
              />
              <BulletRow
                text="Verified track records prove accuracy over time."
                accent
              />
              <BulletRow
                text="Human forecasters sharpen every call."
                accent
              />
              <BulletRow
                text="Structured signal your users can actually trust."
                accent
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function BulletRow({ text, accent }: { text: string; accent?: boolean }) {
  return (
    <div className="flex items-start gap-3">
      <div
        className={`w-1.5 h-1.5 rounded-full mt-[5px] flex-shrink-0 ${
          accent ? 'bg-brand-blue' : 'bg-gray-300'
        }`}
      />
      <span
        className={`text-[14px] leading-snug ${
          accent ? 'text-brand-black' : 'text-gray-500'
        }`}
      >
        {text}
      </span>
    </div>
  )
}
