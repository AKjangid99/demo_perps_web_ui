import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { PrimaryButton } from './ui/Button'

const links = ['Markets', 'Terminal', 'Margin', 'Security', 'Documentation']

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
        <div className="flex items-center gap-6">
          <a href="#" className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight">NIX</span>
            <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-text-secondary">
              Perps
            </span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <a
                key={l}
                href="#"
                className="text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {l}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#"
            className="text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            Web Terminal
          </a>
          <PrimaryButton size="sm">Get App</PrimaryButton>
        </div>

        <button
          className="text-text-primary md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-bg px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l}
                href="#"
                className="text-sm text-text-secondary"
                onClick={() => setOpen(false)}
              >
                {l}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-3">
              <a href="#" className="text-sm text-text-secondary">
                Web Terminal
              </a>
              <PrimaryButton size="sm">Get App</PrimaryButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
