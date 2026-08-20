import clsx from 'clsx'

export function Pill({ children, className }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium',
        className,
      )}
    >
      {children}
    </span>
  )
}

export function Dot({ className = 'bg-accent-green' }) {
  return (
    <span className="relative flex h-2 w-2">
      <span
        className={clsx(
          'absolute inline-flex h-full w-full animate-ping rounded-full opacity-60',
          className,
        )}
      />
      <span className={clsx('relative inline-flex h-2 w-2 rounded-full', className)} />
    </span>
  )
}
