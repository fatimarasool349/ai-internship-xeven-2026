import { AlertTriangle, RotateCcw } from 'lucide-react'

export default function ErrorAlert({ message, onRetry }) {
  return (
    <div className="card-shell animate-slide-up border-rose-200/80 bg-gradient-to-br from-rose-50/90 to-white p-5">
      <div className="flex gap-3">
        <div className="shrink-0">
          <div className="rounded-xl bg-rose-100 p-2.5">
            <AlertTriangle className="h-5 w-5 text-rose-600" />
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold text-rose-900">Something went wrong</h3>
          <p className="mt-1 text-sm text-rose-700/90">{message}</p>
          {onRetry && (
            <button
              type="button"
              onClick={onRetry}
              className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-rose-200 bg-white px-4 py-2 text-sm font-medium text-rose-800 transition-colors hover:border-rose-300 hover:bg-rose-50"
            >
              <RotateCcw className="h-4 w-4" />
              Retry
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
