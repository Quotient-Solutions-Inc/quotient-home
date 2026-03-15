'use client'

export default function Closing() {
  return (
    <section className="bg-tb-primary flex items-center justify-center px-8 py-16 lg:py-24">
      <div className="text-center max-w-[900px]">
        <h2 className="font-headline font-bold uppercase tracking-[-0.01em] text-[32px] md:text-[52px] lg:text-[72px] leading-[0.95] text-white mb-4">
          The best agents are built by people who know things.
        </h2>
        <p className="text-[15px] leading-relaxed text-white/80 mb-8">
          If you have expertise in a domain where being right matters and
          outcomes can be measured, we want to hear from you.
        </p>
        <a
          href="mailto:hello@quotient.social"
          className="inline-block text-[13px] font-mono uppercase tracking-wide px-7 py-3 bg-tb-cream text-tb-dark hover:bg-white transition-colors"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}
