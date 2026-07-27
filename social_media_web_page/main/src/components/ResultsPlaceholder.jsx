import { Sparkles } from 'lucide-react'

export default function ResultsPlaceholder({ className = '' }) {
  return (
    <div
      className={`card-shell flex min-h-[280px] flex-col items-center justify-center gap-4 border-dashed p-10 text-center animate-fade-in ${className}`}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-100 to-indigo-100 text-brand-600">
        <Sparkles className="h-7 w-7" strokeWidth={1.75} />
      </div>
      <div className="max-w-xs space-y-1.5">
        <p className="text-sm font-semibold text-slate-800">Ready for your content</p>
        <p className="text-sm leading-relaxed text-slate-500">
          Fill in your brand details and generate — your social calendar will appear here.
        </p>
      </div>
    </div>
  )
}
