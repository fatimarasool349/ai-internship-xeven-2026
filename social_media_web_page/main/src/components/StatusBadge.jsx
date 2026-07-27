const STATUS_CONFIG = {
  idle: { label: 'Ready', color: 'bg-slate-100 text-slate-600 ring-slate-200/80' },
  uploading: { label: 'Uploading', color: 'bg-amber-50 text-amber-800 ring-amber-200/80' },
  initializing: { label: 'Initializing', color: 'bg-brand-50 text-brand-700 ring-brand-200/80' },
  running: { label: 'Running', color: 'bg-brand-50 text-brand-700 ring-brand-200/80' },
  success: { label: 'Complete', color: 'bg-emerald-50 text-emerald-800 ring-emerald-200/80' },
  failed: { label: 'Failed', color: 'bg-rose-50 text-rose-800 ring-rose-200/80' },
}

export default function StatusBadge({ status = 'idle' }) {
  const config = STATUS_CONFIG[status] || STATUS_CONFIG.idle
  const isActive = status === 'uploading' || status === 'running' || status === 'initializing'

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${config.color}`}
    >
      {isActive && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-40" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
        </span>
      )}
      {status === 'success' && (
        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      )}
      {status === 'failed' && (
        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      )}
      {config.label}
    </span>
  )
}
