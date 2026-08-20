import * as MarqueeModule from 'react-fast-marquee'
import clsx from 'clsx'

// react-fast-marquee ships as CJS; Vite's interop can nest the component
// under an extra `default`, so resolve to the actual component defensively.
const Marquee = MarqueeModule.default?.default ?? MarqueeModule.default ?? MarqueeModule
import { Dot } from './ui/Pill'
import { tickers } from '../data/mock'

export function Ticker() {
  return (
    <div className="border-y border-border bg-surface">
      <div className="flex items-stretch">
        <div className="flex shrink-0 items-center gap-2 border-r border-border bg-bg px-4 py-3 sm:px-5">
          <Dot />
          <span className="hidden text-[11px] font-medium uppercase tracking-[0.12em] text-text-secondary sm:inline">
            Index Feeds &middot; Pyth Oracle High-Frequency
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-text-secondary sm:hidden">
            Index Feeds
          </span>
        </div>
        <Marquee speed={40} gradient={false} className="py-3">
          {tickers.concat(tickers).map((t, i) => {
            const up = t.changePct >= 0
            return (
              <div key={i} className="mx-6 flex items-center gap-2 text-[13px]">
                <span className="font-semibold">{t.symbol}</span>
                <span className="tabular-nums text-text-secondary">
                  {t.price.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    maximumFractionDigits: t.price < 10 ? 4 : 2,
                  })}
                </span>
                <span
                  className={clsx(
                    'tabular-nums',
                    up ? 'text-accent-green' : 'text-accent-red',
                  )}
                >
                  {up ? '+' : ''}
                  {t.changePct}%
                </span>
              </div>
            )
          })}
        </Marquee>
      </div>
    </div>
  )
}
