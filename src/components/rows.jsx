import clsx from 'clsx'
import { GhostButton } from './ui/Button'

function fmtUsd(n, opts = {}) {
  return n.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    ...opts,
  })
}

function fmtSigned(n) {
  const sign = n >= 0 ? '+' : '-'
  return `${sign}${fmtUsd(Math.abs(n))}`
}

export function PositionRow({ position, showClose = false }) {
  const up = position.pnl >= 0
  return (
    <div className="rounded-xl border border-border bg-surface-2 p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-semibold">{position.symbol}</span>
          <span
            className={clsx(
              'rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase',
              position.side === 'LONG'
                ? 'bg-accent-green/15 text-accent-green'
                : 'bg-accent-red/15 text-accent-red',
            )}
          >
            {position.side}
          </span>
        </div>
        <div className="text-right">
          <div
            className={clsx(
              'text-[13px] font-semibold tabular-nums',
              up ? 'text-accent-green' : 'text-accent-red',
            )}
          >
            {fmtSigned(position.pnl)}
          </div>
          <div
            className={clsx(
              'text-[11px] tabular-nums',
              up ? 'text-accent-green' : 'text-accent-red',
            )}
          >
            {up ? '+' : ''}
            {position.pnlPct}%
          </div>
        </div>
      </div>
      <div className="mt-2.5 grid grid-cols-3 gap-2 text-[10px]">
        <Meta label="Entry" value={fmtUsd(position.entry, { maximumFractionDigits: 0 })} />
        <Meta label="Mark" value={fmtUsd(position.mark, { maximumFractionDigits: 0 })} />
        <Meta label="Liq." value={fmtUsd(position.liq, { maximumFractionDigits: 0 })} />
      </div>
      {showClose && (
        <GhostButton size="sm" className="mt-3 w-full" as="button">
          Close Position
        </GhostButton>
      )}
    </div>
  )
}

function Meta({ label, value }) {
  return (
    <div>
      <div className="text-text-tertiary">{label}</div>
      <div className="mt-0.5 font-medium tabular-nums text-text-secondary">{value}</div>
    </div>
  )
}

export function BalanceRow({ balance }) {
  return (
    <div className="flex items-center justify-between py-2.5">
      <div className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-2 text-[11px] font-bold">
          {balance.asset.slice(0, 1)}
        </div>
        <div>
          <div className="text-[13px] font-semibold">{balance.asset}</div>
          <div className="text-[11px] tabular-nums text-text-tertiary">
            {balance.amount}
          </div>
        </div>
      </div>
      <div className="text-[13px] font-medium tabular-nums">
        {fmtUsd(balance.usdValue)}
      </div>
    </div>
  )
}
