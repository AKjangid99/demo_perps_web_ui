import { Wifi, BatteryFull, SignalHigh } from 'lucide-react'
import clsx from 'clsx'

export function PhoneFrame({ children, className, screenClassName }) {
  return (
    <div
      className={clsx(
        'relative w-[280px] shrink-0 rounded-[2.5rem] border border-white/15 bg-gradient-to-b from-[#2a2a2e] to-[#141416] p-2.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] ring-1 ring-white/10',
        className,
      )}
    >
      {/* notch / pill */}
      <div className="pointer-events-none absolute left-1/2 top-3 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-[#141416]" />
      <div
        className={clsx(
          'relative overflow-hidden rounded-[2rem] bg-surface ring-1 ring-white/5',
          screenClassName,
        )}
      >
        <StatusBar />
        {children}
      </div>
    </div>
  )
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pb-1 pt-3 text-[11px] font-semibold text-text-primary">
      <span className="tabular-nums">9:41</span>
      <div className="flex items-center gap-1">
        <SignalHigh size={13} strokeWidth={2.5} />
        <Wifi size={13} strokeWidth={2.5} />
        <BatteryFull size={15} strokeWidth={2} />
      </div>
    </div>
  )
}
