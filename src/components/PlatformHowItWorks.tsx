export default function PlatformHowItWorks() {
  const steps = [
    {
      n: '01',
      title: 'Decompose',
      desc: 'Break complex questions into measurable sub-forecasts.',
    },
    {
      n: '02',
      title: 'Calibrate',
      desc: 'Score every source. Weight every input. Assign probabilities.',
    },
    {
      n: '03',
      title: 'Coach',
      desc: 'Human forecasters with verified track records sharpen the call.',
    },
    {
      n: '04',
      title: 'Productize',
      desc: 'Publish structured signal with sourced evidence and confidence scores.',
    },
    {
      n: '05',
      title: 'Compound',
      desc: 'Resolved markets feed back in. Accuracy earns influence. The system learns.',
    },
  ]

  return (
    <section
      id="how-it-works"
      className="border-b border-border-thin py-20 px-10 max-md:px-6"
    >
      <div className="max-w-content mx-auto">
        <span className="block font-mono text-[11px] text-gray-500 uppercase tracking-eyebrow mb-4">
          How it works
        </span>
        <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-brand-black mb-12 leading-[1.2]">
          From expertise to product in five steps.
        </h2>

        {/* Horizontal step flow */}
        <div className="grid grid-cols-5 max-md:grid-cols-1 gap-0">
          {steps.map((step, i) => (
            <div key={step.n} className="relative flex flex-col items-center text-center px-4 max-md:px-0 max-md:py-5">
              {/* Connector line (between steps, not after last) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-[15px] left-[calc(50%+16px)] right-[-50%] h-px bg-gray-200" />
              )}

              {/* Step number circle */}
              <div className="relative z-10 w-[30px] h-[30px] rounded-full border border-gray-200 bg-white flex items-center justify-center mb-4">
                <span className="font-mono text-[10px] text-gray-400">
                  {step.n}
                </span>
              </div>

              <div className="text-[15px] font-semibold text-brand-black mb-1.5">
                {step.title}
              </div>
              <div className="text-[12px] text-gray-500 leading-relaxed">
                {step.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
