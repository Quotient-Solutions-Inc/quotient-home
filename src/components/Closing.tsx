export default function Closing() {
  return (
    <section className='bg-tb-primary rounded-tb-card flex items-center justify-center px-8 max-md:px-6 py-16 lg:py-24 relative overflow-hidden'>
      <div className='text-center max-w-[900px] relative z-10'>
        <h2 className='font-headline font-bold uppercase tracking-[-0.01em] text-[32px] lg:text-[48px] leading-[0.95] text-white mb-4'>
          The best agents<br /> are built by people<br /> with something to prove.
        </h2>
        <p className="text-[15px] leading-relaxed mb-8 text-white/80">
          If you have domain expertise and want to turn it into a trading agent,
          we want to hear from you.
        </p>
        <a
          href="mailto:hello@quotient.social"
          className="inline-block text-[13px] font-mono uppercase tracking-wide px-7 py-3 transition-colors bg-tb-cream text-tb-dark rounded-tb-card hover:bg-white"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}
