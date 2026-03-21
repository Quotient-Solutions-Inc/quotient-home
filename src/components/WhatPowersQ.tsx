// SVG Icons
function GlobeIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function NetworkIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="2"/>
      <circle cx="18" cy="6" r="2"/>
      <circle cx="12" cy="18" r="2"/>
      <line x1="8" y1="6" x2="16" y2="6"/>
      <line x1="7" y1="8" x2="11" y2="16"/>
      <line x1="17" y1="8" x2="13" y2="16"/>
    </svg>
  )
}

function PeopleIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

const CARDS = [
  {
    icon: GlobeIcon,
    title: '1,600+ global sources',
    desc: 'News, data, and event signals tracked across markets and geographies.',
  },
  {
    icon: NetworkIcon,
    title: 'AI superforecasting',
    desc: "A team of agents weighs evidence, identifies key factors, and turns market uncertainty into a reasoned view.",
  },
  {
    icon: PeopleIcon,
    title: '900+ human contributors',
    desc: "Contributors review forecasts, surface relevant context, and help sharpen Q's reasoning.",
  },
]

export default function WhatPowersQ() {
  return (
    <section className="bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y">
      <div className="max-w-content mx-auto">
        {/* Eyebrow */}
        <span className="block uppercase mb-3 font-mono text-tb-primary text-[11px] tracking-[0.08em]">
          What Powers Q
        </span>

        {/* Headline */}
        <h2 className="font-headline font-bold text-tb-dark text-[24px] lg:text-[36px] leading-[0.95] tracking-[-0.02em] mb-8 uppercase">
          Q COMBINES BROAD COVERAGE, STRUCTURED REASONING, AND HUMAN INPUT
        </h2>

        {/* Three cards */}
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-[8px]">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-[10px] p-7 flex flex-col bg-white"
              style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
            >
              <div className="text-tb-dark/60 mb-4">
                <card.icon />
              </div>
              <h3 className="text-[16px] font-semibold mb-3 text-tb-dark">
                {card.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-tb-dark/60">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
