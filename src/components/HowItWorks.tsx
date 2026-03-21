import Image from 'next/image'

export default function HowItWorks() {
  return (
    <section className='bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-20 lg:py-24'>
      <div>
        <span className="block uppercase mb-4 font-mono text-tb-primary text-[11px] tracking-[0.08em]">
          How Q Works
        </span>
        <h2 className='font-headline font-bold text-tb-dark text-[24px] lg:text-[36px] leading-[0.95] tracking-[-0.02em] mb-10 uppercase'>
          AN AI SUPERFORECASTER.<br />BUILT TO STAY AHEAD.
        </h2>

        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-[8px]">
          {/* Card 1: Informed at scale */}
          <div
            className="rounded-[10px] p-7 flex flex-col bg-white"
            style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
          >
            <h3 className="text-[18px] font-semibold mb-3 text-tb-dark">
              Informed at scale
            </h3>
            <p className="text-[14px] leading-relaxed text-tb-dark/60">
              1,600+ global sources across news, data, and events tracked around the clock across geographies and markets.
            </p>
            {/* LOGOS — dark versions on light card */}
            <div className="mt-auto pt-6">
              <div className="flex gap-6 items-center">
                <Image
                  src="/logos/reuters.png"
                  alt="Reuters"
                  width={100}
                  height={28}
                  className="h-7 w-auto opacity-50"
                />
                <Image
                  src="/logos/cnet.png"
                  alt="CNET"
                  width={80}
                  height={24}
                  className="h-6 w-auto opacity-50"
                />
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-tb-dark/50">
                  +more
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Refined by agentic teams */}
          <div
            className="rounded-[10px] p-7 flex flex-col bg-white"
            style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
          >
            <h3 className="text-[18px] font-semibold mb-3 text-tb-dark">
              Refined by agentic teams
            </h3>
            <p className="text-[14px] leading-relaxed text-tb-dark/60">
              A team of agents finds where the market is wrong using structured reasoning, calibrated probability, and iterative refinement.
            </p>
          </div>

          {/* Card 3: Sharpened by humans */}
          <div
            className="rounded-[10px] p-7 flex flex-col bg-white"
            style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
          >
            <h3 className="text-[18px] font-semibold mb-3 text-tb-dark">
              Sharpened by humans
            </h3>
            <p className="text-[14px] leading-relaxed text-tb-dark/60">
              Human contributors review Q&apos;s forecasts and expand the context graph. The leaderboard surfaces the most accurate forecasters over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
