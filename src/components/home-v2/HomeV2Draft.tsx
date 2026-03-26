import Link from 'next/link'
import HeroAnimation from '@/components/HeroAnimation'

function DraftSlot({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string
  title: string
  body: string
}) {
  return (
    <div className="rounded-[10px] bg-white/[0.06] p-6 border border-white/10">
      <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-tb-primary mb-3">
        {eyebrow}
      </div>
      <h3 className="font-headline font-bold uppercase text-white text-[20px] leading-[0.95] tracking-[-0.02em] mb-3">
        {title}
      </h3>
      <p className="text-[14px] leading-[1.7] text-white/65">
        {body}
      </p>
    </div>
  )
}

export default function HomeV2Draft() {
  return (
    <>
      <section className="section-shell relative overflow-hidden bg-tb-dark rounded-tb-card py-16 sm:py-20 lg:py-28">
        <div className="absolute inset-0 pointer-events-none">
          <HeroAnimation />
        </div>

        <div className="max-w-content mx-auto relative z-10 flex flex-col gap-8">
          <div className="max-w-[760px]">
            <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-tb-primary mb-4">
              Exploration Route
            </div>
            <h1 className="font-headline font-bold uppercase text-white text-[30px] sm:text-[38px] lg:text-[56px] leading-[0.95] tracking-[-0.02em] mb-5">
              Home V2 can evolve here
              <br />
              without replacing slash.
            </h1>
            <p className="text-[15px] lg:text-[16px] leading-[1.7] text-white/70 max-w-[620px]">
              Use this route to test a different homepage narrative, structure, and pacing.
              The current homepage at <span className="text-white">`/`</span> stays untouched
              until you decide this direction is better.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center px-6 h-[46px] border border-white/30 text-white font-mono text-[12px] uppercase tracking-[0.08em] rounded-tb-card hover:border-tb-primary hover:text-tb-primary transition-colors"
            >
              Compare Current Home
            </Link>
            <div className="inline-flex items-center px-4 h-[46px] bg-white/[0.06] text-white/60 font-mono text-[11px] uppercase tracking-[0.08em] rounded-tb-card">
              Build new sections in src/components/home-v2
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-tb-page rounded-tb-card py-16 sm:py-20 lg:py-tb-section-y">
        <div className="max-w-content mx-auto grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-4 md:grid-cols-3">
            <DraftSlot
              eyebrow="Narrative"
              title="Opening story"
              body="Try a different headline structure, stronger point of view, or a slower reveal before the proof sections."
            />
            <DraftSlot
              eyebrow="Proof"
              title="Evidence stack"
              body="Experiment with a new order for stats, case-study proof, market examples, or partner credibility."
            />
            <DraftSlot
              eyebrow="Conversion"
              title="Action model"
              body="Test how traders, developers, or partners should be routed through the page without changing the live CTA flow yet."
            />
          </div>

          <div className="rounded-tb-card border border-tb-border bg-tb-cream p-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-tb-primary mb-3">
              Suggested Workflow
            </div>
            <div className="space-y-4 text-[14px] leading-[1.7] text-tb-dark/70">
              <p>
                Reuse the existing design language where it helps: type scale, spacing,
                palette, motion, and any shared shell elements.
              </p>
              <p>
                Keep new homepage-specific ideas inside the <span className="font-mono text-tb-dark">home-v2</span>
                {' '}component folder so the live homepage components do not get tangled up early.
              </p>
              <p>
                If this direction works, promoting it later is just a matter of swapping the
                homepage assembly, not untangling a mixed experiment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
