import { Loader2 } from 'lucide-react'

export default function LoadingSpinner({ message, progress }) {
  const progressPercent = progress ?? 0

  return (
    <div className="flex flex-col items-center gap-8 py-4 animate-fade-in">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-4 border-brand-100" />
        <div className="absolute inset-0 h-16 w-16 animate-spin rounded-full border-4 border-transparent border-t-brand-600" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="h-7 w-7 animate-pulse text-brand-600" />
        </div>
      </div>

      <div className="w-full max-w-md space-y-4 text-center">
        <p className="text-sm font-semibold text-slate-800">{message}</p>

        <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500 transition-all duration-700 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="text-xs font-medium text-slate-400">{progressPercent}% complete</p>
      </div>
    </div>
  )
}
