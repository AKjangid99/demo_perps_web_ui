import clsx from 'clsx'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-150 whitespace-nowrap select-none'

const sizes = {
  md: 'px-5 py-2.5 text-sm',
  sm: 'px-4 py-2 text-[13px]',
  lg: 'px-6 py-3 text-[15px]',
}

export function PrimaryButton({
  children,
  variant = 'white',
  size = 'md',
  className,
  icon: Icon,
  as: Comp = 'a',
  ...props
}) {
  return (
    <Comp
      className={clsx(
        base,
        sizes[size],
        variant === 'white' &&
          'bg-white text-black hover:bg-white/90',
        variant === 'blue' &&
          'bg-accent-blue text-white hover:bg-accent-blue/90',
        variant === 'green' && 'bg-accent-green text-black hover:bg-accent-green/90',
        className,
      )}
      {...props}
    >
      {Icon && <Icon size={16} strokeWidth={2} />}
      {children}
    </Comp>
  )
}

export function GhostButton({
  children,
  size = 'md',
  className,
  icon: Icon,
  as: Comp = 'a',
  ...props
}) {
  return (
    <Comp
      className={clsx(
        base,
        sizes[size],
        'border border-border bg-transparent text-text-primary hover:bg-surface-2',
        className,
      )}
      {...props}
    >
      {Icon && <Icon size={16} strokeWidth={2} />}
      {children}
    </Comp>
  )
}
