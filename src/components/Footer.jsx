import { Download } from 'lucide-react'
import { PrimaryButton } from './ui/Button'

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-lg text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
            Trade the edge. Anywhere.
          </h2>
          <PrimaryButton size="lg" icon={Download}>
            Download iOS &amp; Android
          </PrimaryButton>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-text-tertiary sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="font-bold tracking-tight text-text-primary">NIX</span>
            <span className="text-text-tertiary">Perps</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-text-secondary">Terms</a>
            <a href="#" className="hover:text-text-secondary">Privacy</a>
            <a href="#" className="hover:text-text-secondary">Docs</a>
          </div>
          <span className="tabular-nums">© 2026 NIX Labs</span>
        </div>
      </div>
    </footer>
  )
}
