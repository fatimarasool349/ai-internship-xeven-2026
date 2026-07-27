import { Loader2, Sparkles } from 'lucide-react'

export default function GenerateButton({ onClick, disabled, loading }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        w-full rounded-xl px-6 py-4 text-base font-semibold text-white
        bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500
        shadow-lg shadow-brand-500/30
        transition-all duration-200
        hover:from-brand-700 hover:via-brand-600 hover:to-accent-600 hover:shadow-brand-500/40 hover:-translate-y-0.5
        active:translate-y-0
        focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2
        disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:shadow-brand-500/30
        ${loading ? 'cursor-wait' : ''}
      `}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2.5">
          <Loader2 className="h-5 w-5 animate-spin" />
          Generating...
        </span>
      ) : (
        <span className="flex items-center justify-center gap-2">
          <Sparkles className="h-5 w-5" />
          Generate Content
        </span>
      )}
    </button>
  )
}
