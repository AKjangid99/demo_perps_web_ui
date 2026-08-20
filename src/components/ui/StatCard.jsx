import clsx from 'clsx'

export function StatCard({ label, value, delta, deltaTone = 'neutral' }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-4 sm:p-5">
      <div className="text-[11px] font-medium uppercase tracking-[0.15em] text-text-tertiary">
        {label}
      </div>
      <div className="mt-2 text-2xl font-bold tracking-tight tabular-nums sm:text-3xl">
        {value}
      </div>
      <div
        className={clsx(
          'mt-1 text-[13px] tabular-nums',
          deltaTone === 'up' && 'text-accent-green',
          deltaTone === 'down' && 'text-accent-red',
          deltaTone === 'neutral' && 'text-text-secondary',
        )}
      >
        {delta}
      </div>
    </div>
  )
}
