import clsx from 'clsx'
import {
  LineChart,
  ArrowLeftRight,
  Wallet,
  User,
  ChevronLeft,
  Star,
  ArrowDownToLine,
  ArrowUpFromLine,
  Send,
} from 'lucide-react'
import { CandleChart } from './CandleChart'
import { PositionRow, BalanceRow } from './rows'
import { markets, positions, balances, sparklines } from '../data/mock'

/* ----------------------------- shared bits ----------------------------- */

function Sparkline({ points, up }) {
  const w = 44
  const h = 18
  const max = Math.max(...points)
  const min = Math.min(...points)
  const range = max - min || 1
  const d = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * w
      const y = h - ((p - min) / range) * h
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(' ')
  return (
    <svg width={w} height={h} className="overflow-visible">
      <path
        d={d}
        fill="none"
        stroke={up ? '#22c55e' : '#ef4444'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function TabBar({ active = 'Trade' }) {
  const tabs = [
    { label: 'Markets', icon: LineChart },
    { label: 'Trade', icon: ArrowLeftRight },
    { label: 'Positions', icon: Wallet },
    { label: 'Account', icon: User },
  ]
  return (
    <div className="flex items-center justify-around border-t border-border bg-surface px-2 py-2.5">
      {tabs.map((t) => {
        const on = t.label === active
        return (
          <div
            key={t.label}
            className={clsx(
              'flex flex-col items-center gap-1',
              on ? 'text-accent-blue' : 'text-text-tertiary',
            )}
          >
            <t.icon size={17} strokeWidth={2} />
            <span className="text-[9px] font-medium">{t.label}</span>
          </div>
        )
      })}
    </div>
  )
}

function fmtUsd(n, opts = {}) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', ...opts })
}

/* ------------------------------ Chart screen ------------------------------ */

export function ChartScreen() {
  const timeframes = ['1H', '4H', '1D', '1W']
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-4 pb-2 pt-2">
        <div className="flex items-center gap-1.5">
          <ChevronLeft size={16} className="text-text-tertiary" />
          <span className="text-sm font-semibold">Bitcoin</span>
        </div>
        <Star size={15} className="text-text-tertiary" />
      </div>
      <div className="px-4">
        <div className="text-xl font-bold tabular-nums">$105,230.40</div>
        <div className="text-[12px] font-medium tabular-nums text-accent-green">
          +$1,289.10 &middot; +1.24%
        </div>
      </div>
      <div className="mt-2 flex gap-1 px-4">
        {timeframes.map((tf, i) => (
          <button
            key={tf}
            className={clsx(
              'rounded-md px-2.5 py-1 text-[11px] font-medium tabular-nums',
              i === 2
                ? 'bg-surface-2 text-text-primary'
                : 'text-text-tertiary',
            )}
          >
            {tf}
          </button>
        ))}
      </div>
      <div className="mt-1 px-2">
        <CandleChart height={190} />
      </div>
      <div className="px-4 pb-3 pt-1">
        <button className="w-full rounded-full bg-accent-blue py-2.5 text-[13px] font-semibold text-white">
          Trade
        </button>
      </div>
      <TabBar active="Markets" />
    </div>
  )
}

/* ----------------------------- Markets screen ----------------------------- */

export function MarketsScreen() {
  return (
    <div className="flex flex-col">
      <div className="px-4 pb-2 pt-2">
        <div className="text-sm font-semibold">Markets</div>
      </div>
      <div className="flex-1 px-3">
        {markets.map((m) => {
          const up = m.changePct >= 0
          return (
            <div
              key={m.symbol}
              className="flex items-center justify-between border-b border-border/60 px-1 py-2.5 last:border-b-0"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-[12px] font-semibold">{m.symbol}</span>
                  {m.leverage && (
                    <span className="rounded bg-surface-2 px-1 py-0.5 text-[9px] font-semibold text-text-secondary">
                      {m.leverage}
                    </span>
                  )}
                </div>
                <div className="mt-0.5 text-[10px] tabular-nums text-text-tertiary">
                  Vol {m.volume}
                </div>
              </div>
              <Sparkline points={sparklines[m.symbol]} up={up} />
              <div className="w-[74px] text-right">
                <div className="text-[12px] font-semibold tabular-nums">
                  {fmtUsd(m.price, { maximumFractionDigits: m.price < 10 ? 4 : 2 })}
                </div>
                <div
                  className={clsx(
                    'text-[10px] font-medium tabular-nums',
                    up ? 'text-accent-green' : 'text-accent-red',
                  )}
                >
                  {up ? '+' : ''}
                  {m.changePct}%
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <TabBar active="Markets" />
    </div>
  )
}

/* ---------------------------- Portfolio screen ---------------------------- */

export function PortfolioScreen() {
  const tabs = ['Positions (3)', 'Orders (3)', 'Fills (5)']
  return (
    <div className="flex flex-col">
      <div className="px-4 pb-1 pt-2">
        <div className="text-[11px] uppercase tracking-[0.12em] text-text-tertiary">
          Total Value
        </div>
        <div className="text-2xl font-bold tabular-nums">$26,546.25</div>
        <div className="text-[12px] font-medium tabular-nums text-accent-green">
          +$1,546.25 unrealized
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 px-4">
        <MiniStat label="Margin Used" value="$10,293" />
        <MiniStat label="Buying Power" value="$81,265" />
        <MiniStat label="Free Margin" value="$16,253" />
      </div>
      <div className="mt-3 flex gap-4 border-b border-border px-4 text-[11px]">
        {tabs.map((t, i) => (
          <div
            key={t}
            className={clsx(
              'pb-2 font-medium',
              i === 0
                ? 'border-b-2 border-accent-blue text-text-primary'
                : 'text-text-tertiary',
            )}
          >
            {t}
          </div>
        ))}
      </div>
      <div className="max-h-[280px] space-y-2.5 overflow-y-auto p-3 no-scrollbar">
        <PositionRow position={positions[0]} showClose />
        <PositionRow position={positions[1]} />
      </div>
    </div>
  )
}

function MiniStat({ label, value }) {
  return (
    <div className="rounded-lg border border-border bg-surface-2 p-2">
      <div className="text-[9px] uppercase tracking-wide text-text-tertiary">
        {label}
      </div>
      <div className="mt-1 text-[12px] font-semibold tabular-nums">{value}</div>
    </div>
  )
}

/* ----------------------------- Account screen ----------------------------- */

export function AccountScreen() {
  const usagePct = 38.6
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-3 px-4 pb-3 pt-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue to-purple-500 text-sm font-bold">
          a
        </div>
        <div>
          <div className="text-sm font-semibold">ankur.eth</div>
          <div className="text-[11px] tabular-nums text-text-tertiary">
            0x8f…4a2c
          </div>
        </div>
      </div>
      <div className="px-4">
        <div className="text-[11px] uppercase tracking-[0.12em] text-text-tertiary">
          Total Balance
        </div>
        <div className="text-2xl font-bold tabular-nums">$28,487.21</div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 px-4">
        <IconTab icon={ArrowDownToLine} label="Deposit" />
        <IconTab icon={ArrowUpFromLine} label="Withdraw" />
        <IconTab icon={Send} label="Transfer" />
      </div>
      <div className="mt-4 px-4">
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-text-tertiary">Margin</span>
          <span className="tabular-nums text-text-secondary">{usagePct}% used</span>
        </div>
        <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
          <div
            className="h-full rounded-full bg-accent-blue"
            style={{ width: `${usagePct}%` }}
          />
        </div>
      </div>
      <div className="mt-3 px-4 pb-4">
        <div className="mb-1 text-[11px] uppercase tracking-[0.12em] text-text-tertiary">
          Balances
        </div>
        <div className="divide-y divide-border">
          {balances.map((b) => (
            <BalanceRow key={b.asset} balance={b} />
          ))}
        </div>
      </div>
    </div>
  )
}

function IconTab({ icon: Icon, label }) {
  return (
    <div className="flex flex-col items-center gap-1.5 rounded-xl border border-border bg-surface-2 py-2.5">
      <Icon size={16} className="text-accent-blue" />
      <span className="text-[10px] font-medium text-text-secondary">{label}</span>
    </div>
  )
}

/* --------------------------- Order ticket screen --------------------------- */

export function OrderTicketScreen() {
  return (
    <div className="flex flex-col px-4 pb-4">
      <div className="flex items-center justify-between pb-3 pt-2">
        <span className="text-sm font-semibold">BTC-PERP</span>
        <span className="rounded bg-surface-2 px-1.5 py-0.5 text-[10px] font-semibold text-text-secondary">
          50x
        </span>
      </div>
      <div className="grid grid-cols-2 gap-1 rounded-lg bg-surface-2 p-1 text-[12px] font-medium">
        <button className="rounded-md bg-accent-blue py-1.5 text-white">Limit</button>
        <button className="rounded-md py-1.5 text-text-tertiary">Market</button>
      </div>

      <Field label="Price (USDC)" value="105,180.00" />
      <Field label="Quantity (BTC)" value="0.4200" />

      <div className="mt-3 grid grid-cols-4 gap-1.5">
        {['25%', '50%', '75%', '100%'].map((q, i) => (
          <button
            key={q}
            className={clsx(
              'rounded-md border border-border py-1.5 text-[11px] font-medium tabular-nums',
              i === 1 ? 'bg-surface-2 text-text-primary' : 'text-text-secondary',
            )}
          >
            {q}
          </button>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-[12px]">
        <span className="text-text-tertiary">Order Value</span>
        <span className="font-semibold tabular-nums">$44,175.60</span>
      </div>
      <div className="mt-1 flex items-center justify-between text-[12px]">
        <span className="text-text-tertiary">Est. Liq. Price</span>
        <span className="font-semibold tabular-nums text-text-secondary">$94,940.00</span>
      </div>

      <button className="mt-4 w-full rounded-full bg-accent-green py-2.5 text-[13px] font-semibold text-black">
        Buy BTC-PERP
      </button>
    </div>
  )
}

function Field({ label, value }) {
  return (
    <div className="mt-3">
      <div className="mb-1 text-[10px] uppercase tracking-wide text-text-tertiary">
        {label}
      </div>
      <div className="flex items-center justify-between rounded-lg border border-border bg-surface-2 px-3 py-2.5">
        <span className="text-[13px] font-medium tabular-nums">{value}</span>
      </div>
    </div>
  )
}
