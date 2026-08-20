import { Cpu } from 'lucide-react'
import { SectionEyebrow } from './ui/SectionEyebrow'
import { PhoneFrame } from './PhoneFrame'
import { ChartScreen, OrderTicketScreen } from './screens'

const items = [
  {
    label: 'Pro-Grade Candlestick Feed',
    desc: 'Sub-millisecond tick data straight from the matching engine.',
  },
  {
    label: 'Atomic Order Sheets',
    desc: 'Order tickets that settle without exposing price or liquidity.',
  },
  {
    label: 'Instant Routing Continuum',
    desc: 'Continuous routing engine that absorbs liquidity shocks.',
  },
]

export function ExecutionSection() {
  return (
    <section className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* text left */}
          <div className="order-2 lg:order-1">
            <SectionEyebrow icon={Cpu}>Execution Engine</SectionEyebrow>
            <h2 className="mt-4 text-[28px] font-bold leading-tight tracking-[-0.02em] sm:text-4xl">
              Sub-second execution. Zero mempool exploits.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              Engineered with off-chain zero-knowledge matching and on-chain batch
              verification. Place limit orders directly off the live chart, with zero
              front-running risk and deterministic millisecond settlement.
            </p>

            <div className="mt-8 divide-y divide-border border-y border-border">
              {items.map((it) => (
                <div key={it.label} className="py-4">
                  <div className="text-[12px] font-semibold uppercase tracking-[0.1em]">
                    {it.label}
                  </div>
                  <div className="mt-1 text-sm text-text-secondary">{it.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* image right */}
          <div className="order-1 flex items-center justify-center gap-4 lg:order-2">
            <div className="rotate-[-4deg]">
              <PhoneFrame className="w-[240px]">
                <ChartScreen />
              </PhoneFrame>
            </div>
            <div className="hidden rotate-[4deg] sm:block">
              <PhoneFrame className="w-[240px]">
                <OrderTicketScreen />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
