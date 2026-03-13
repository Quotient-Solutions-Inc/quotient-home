'use client'

import NavWithModal from '@/components/NavWithModal'
import QTabBar from '@/components/QTabBar'
import SignalFeed from '@/components/SignalFeed'
import ForYou from '@/components/ForYou'
import Contributors from '@/components/Contributors'
import Footer from '@/components/Footer'
import OpenModalButton from '@/components/OpenModalButton'
import { useTheme } from '@/lib/ThemeContext'

export default function QAgentPage() {
  const { theme } = useTheme()
  const isB = theme === 'B'

  return (
    <div className="min-h-screen">
      <NavWithModal />
      <QTabBar />

      {/* Q Hero */}
      <section className="relative overflow-hidden">
        <div className={`pt-16 pb-20 max-md:pt-12 ${
          isB ? 'px-8 lg:px-tb-section-x' : 'max-w-content mx-auto px-10 max-md:px-6'
        }`}>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-10 h-10 flex items-center justify-center ${
                isB
                  ? 'font-blackletter text-3xl text-tb-dark'
                  : 'bg-brand-black rounded-sm'
              }`}>
                {isB ? (
                  <span>Q</span>
                ) : (
                  <span className="font-mono text-white text-[14px] font-medium">Q</span>
                )}
              </div>
              <div>
                <span className={`text-[10px] uppercase ${
                  isB
                    ? 'font-mono tracking-[0.08em] text-gray-400'
                    : 'font-mono tracking-eyebrow text-gray-400'
                }`}>
                  Prediction Agent
                </span>
              </div>
            </div>

            {isB ? (
              <>
                <h1 className="font-headline font-bold text-[clamp(3rem,7vw,6rem)] leading-[0.85] uppercase text-tb-dark tracking-[-0.03em] mb-6">
                  Q<br />
                  <span className="text-tb-primary">Geopolitical</span><br />
                  Forecasting
                </h1>
                <p className="font-headline text-[16px] text-gray-500 leading-relaxed max-w-[540px] mb-9">
                  Agentic analysis combined with verified human judgment across 600+
                  geopolitical prediction markets. Sourced evidence. Auditable reasoning. Updated
                  7-8 times a day.
                </p>
              </>
            ) : (
              <>
                <h1 className="text-[42px] max-md:text-[32px] font-normal leading-[1.12] tracking-[-0.02em] mb-6">
                  <span className="font-headline">Q</span>
                  <span className="text-gray-300 font-headline mx-2">|</span>
                  <span className="font-headline text-brand-blue">
                    Geopolitical Forecasting Agent
                  </span>
                </h1>
                <p className="text-[16px] text-gray-500 leading-relaxed max-w-[540px] mb-9">
                  Agentic analysis combined with verified human judgment across 600+
                  geopolitical prediction markets. Sourced evidence. Auditable reasoning. Updated
                  7-8 times a day.
                </p>
              </>
            )}

            <div className="flex flex-wrap gap-3">
              <OpenModalButton />
            </div>
          </div>
        </div>
      </section>

      <SignalFeed />
      <ForYou />
      <Contributors />
      <Footer />
    </div>
  )
}
