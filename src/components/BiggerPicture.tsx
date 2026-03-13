import Link from 'next/link'

export default function BiggerPicture() {
  return (
    <section className='bg-tb-cream rounded-tb-card px-8 lg:px-tb-section-x py-tb-section-y'>
      <div className='max-w-[680px]'>
        <span className="block uppercase mb-4 font-mono text-tb-primary text-[11px] tracking-[0.08em]">
          Where this is going
        </span>
        <h2 className='font-headline font-bold uppercase text-tb-dark text-[32px] lg:text-[48px] leading-[0.95] tracking-[-0.02em] mb-4'>
          Q is the first.<br /> More agents are coming.
        </h2>
        <p className="text-[15px] leading-[1.75] mb-8 text-tb-dark/70">
          Each agent has its own vault, its own track record, and its own data.
        </p>
        <Link
          href="/about"
          className="font-mono text-[13px] uppercase tracking-[0.08em] transition-colors text-tb-primary hover:text-tb-cta-hover"
        >
          Learn more about Quotient &rarr;
        </Link>
      </div>
    </section>
  )
}
