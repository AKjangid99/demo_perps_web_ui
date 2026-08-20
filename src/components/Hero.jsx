import { Download, QrCode } from 'lucide-react'
import { PrimaryButton, GhostButton } from './ui/Button'
import { Pill, Dot } from './ui/Pill'
import { StatCard } from './ui/StatCard'
import { PhoneFrame } from './PhoneFrame'
import { ChartScreen, MarketsScreen, PortfolioScreen } from './screens'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(61,127,255,0.12),transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-6 sm:pt-20">
        <div className="flex flex-col items-center text-center">
          <Pill>
            <Dot />
            NIX Mobile v2.8 Live &middot; Arbitrum &amp; Base
          </Pill>
          <h1 className="mt-6 max-w-3xl text-[32px] font-bold leading-[1.05] tracking-[-0.02em] sm:text-5xl lg:text-[56px]">
            The perpetuals exchange engineered for mobile.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-text-secondary">
            Non-custodial trading up to 50x leverage. Sub-millisecond sequencing,
            zero-knowledge settlement, and institutional depth in an austere mobile
            client.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton size="lg" icon={Download}>
              Download iOS &amp; Android
            </PrimaryButton>
            <GhostButton size="lg" icon={QrCode}>
              QR Access
            </GhostButton>
          </div>
        </div>

        {/* stats */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
          <StatCard label="24H Volume" value="$1.42B" delta="+14.8% vs 7d" deltaTone="up" />
          <StatCard label="Sequencing" value="<10ms" delta="Sub-second finality" />
          <StatCard label="Max Leverage" value="50x" delta="Cross & Isolated" />
          <StatCard label="Gas Cost" value="$0.00" delta="Protocol sponsored" />
        </div>

        {/* phone mockups */}
        <div className="relative mt-16 flex flex-col items-center justify-center gap-8 lg:mt-20 lg:flex-row lg:gap-0">
          <div className="lg:absolute lg:left-1/2 lg:-translate-x-[125%] lg:rotate-[-6deg] lg:scale-90">
            <PhoneFrame>
              <MarketsScreen />
            </PhoneFrame>
          </div>
          <div className="relative z-10 lg:scale-105">
            <PhoneFrame>
              <ChartScreen />
            </PhoneFrame>
          </div>
          <div className="lg:absolute lg:left-1/2 lg:translate-x-[25%] lg:rotate-[6deg] lg:scale-90">
            <PhoneFrame>
              <PortfolioScreen />
            </PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  )
}
