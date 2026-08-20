import { Shield, Zap, AlertTriangle, Fingerprint } from 'lucide-react'
import { SectionEyebrow } from './ui/SectionEyebrow'
import { PhoneFrame } from './PhoneFrame'
import { PortfolioScreen, AccountScreen } from './screens'

const bullets = [
  { icon: Zap, text: 'One-tap instant position closure with aggregated market depth' },
  {
    icon: AlertTriangle,
    text: 'Real-time automated liquidation warnings (BTC est. $94,940)',
  },
  { icon: Fingerprint, text: 'Hardware passkey & Face ID authentication via WebAuthn' },
]

export function MarginSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* image left */}
        <div className="relative flex items-center justify-center gap-4">
          <div className="rotate-[-4deg]">
            <PhoneFrame className="w-[240px]">
              <AccountScreen />
            </PhoneFrame>
          </div>
          <div className="hidden rotate-[4deg] sm:block">
            <PhoneFrame className="w-[240px]">
              <PortfolioScreen />
            </PhoneFrame>
          </div>
        </div>

        {/* text right */}
        <div>
          <SectionEyebrow icon={Shield}>Risk &amp; Capital Efficiency</SectionEyebrow>
          <h2 className="mt-4 text-[28px] font-bold leading-tight tracking-[-0.02em] sm:text-4xl">
            Comprehensive margin clarity. Complete self-custody.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            Multi-asset collateral vaults let you deposit USDC, BTC, ETH, or SOL into a
            single margin account. Inspect unrealized PnL, liquidation buffer metrics,
            and account health at a glance.
          </p>

          <div className="mt-7 rounded-2xl border border-border bg-surface p-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-[11px] uppercase tracking-[0.15em] text-text-tertiary">
                  Active Account
                </div>
                <div className="mt-1 text-sm font-semibold">ankur.eth</div>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.15em] text-text-tertiary">
                  Free Margin
                </div>
                <div className="mt-1 text-sm font-semibold tabular-nums">$16,253.00</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.15em] text-text-tertiary">
                <span>Collateral Usage</span>
                <span className="tabular-nums text-text-secondary">38.6% in use</span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-surface-2">
                <div className="h-full rounded-full bg-accent-blue" style={{ width: '38.6%' }} />
              </div>
            </div>
          </div>

          <ul className="mt-6 space-y-4">
            {bullets.map((b) => (
              <li key={b.text} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-border bg-surface-2">
                  <b.icon size={13} className="text-accent-blue" />
                </span>
                <span className="text-sm leading-relaxed text-text-secondary">
                  {b.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
