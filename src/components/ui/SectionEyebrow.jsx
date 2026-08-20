export function SectionEyebrow({ icon: Icon, children }) {
  return (
    <div className="inline-flex items-center gap-2 text-text-tertiary">
      {Icon && <Icon size={14} strokeWidth={2} className="text-accent-blue" />}
      <span className="text-[11px] font-medium uppercase tracking-[0.15em]">
        {children}
      </span>
    </div>
  )
}
