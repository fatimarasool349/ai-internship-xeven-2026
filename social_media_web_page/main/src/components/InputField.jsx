import { AlertCircle } from 'lucide-react'

export default function InputField({
  label,
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  id,
  helperText,
  icon,
}) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="space-y-2">
      <label
        htmlFor={inputId}
        className="flex items-center gap-2 text-sm font-medium text-slate-700"
      >
        {icon && <span className="text-brand-600">{icon}</span>}
        <span>{label}</span>
        <span className="text-rose-500">*</span>
      </label>

      <div className="relative">
        {icon && (
          <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </div>
        )}

        <input
          id={inputId}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            w-full rounded-xl border bg-white py-3.5
            ${icon ? 'pl-11 pr-4' : 'px-4'}
            text-slate-900 placeholder:text-slate-400
            transition-all duration-200
            focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20
            disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400
            ${
              error
                ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-500/20'
                : 'border-slate-200 hover:border-brand-300/80'
            }
          `}
        />
      </div>

      {helperText && !error && (
        <p className="text-xs text-slate-500">{helperText}</p>
      )}

      {error && (
        <p className="flex items-center gap-2 text-sm text-rose-600 animate-fade-in">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {error}
        </p>
      )}
    </div>
  )
}
