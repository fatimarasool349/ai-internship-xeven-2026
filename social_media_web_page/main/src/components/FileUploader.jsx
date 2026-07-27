import { useCallback, useRef, useState } from 'react'
import { AlertCircle, FileCheck, FileText, Upload, X } from 'lucide-react'

const ACCEPTED_TYPES = {
  'application/pdf': '.pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': '.docx',
  'text/plain': '.txt',
}

const ACCEPTED_EXTENSIONS = ['.pdf', '.docx', '.txt']

function formatFileSize(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function isValidFile(file) {
  const ext = '.' + file.name.split('.').pop().toLowerCase()
  return ACCEPTED_EXTENSIONS.includes(ext) || Object.keys(ACCEPTED_TYPES).includes(file.type)
}

export default function FileUploader({ selectedFile, onFileSelect, error, disabled = false }) {
  const inputRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleFile = useCallback(
    (file) => {
      if (!file || !isValidFile(file)) return
      onFileSelect(file)
    },
    [onFileSelect]
  )

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault()
      setIsDragging(false)
      if (disabled) return
      const file = e.dataTransfer.files[0]
      handleFile(file)
    },
    [disabled, handleFile]
  )

  const handleDragOver = (e) => {
    e.preventDefault()
    if (!disabled) setIsDragging(true)
  }

  const handleDragLeave = () => setIsDragging(false)

  const handleInputChange = (e) => {
    const file = e.target.files[0]
    handleFile(file)
  }

  const handleRemove = () => {
    onFileSelect(null)
    if (inputRef.current) inputRef.current.value = ''
  }

  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
        <FileText className="h-[18px] w-[18px] text-brand-600" />
        Brand Knowledge Upload
        <span className="text-rose-500">*</span>
      </label>

      {!selectedFile ? (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => !disabled && inputRef.current?.click()}
          className={`
            relative flex min-h-[160px] w-full cursor-pointer flex-col items-center justify-center
            rounded-xl border-2 border-dashed px-6 py-8 transition-all duration-200
            ${disabled ? 'cursor-not-allowed bg-slate-50 opacity-50' : ''}
            ${
              isDragging
                ? 'scale-[1.01] border-brand-400 bg-brand-50/60'
                : error
                  ? 'border-rose-300 bg-rose-50/30 hover:border-rose-400'
                  : 'border-slate-200 bg-slate-50/40 hover:border-brand-300 hover:bg-brand-50/30'
            }
          `}
        >
          <input
            ref={inputRef}
            type="file"
            accept=".pdf,.docx,.txt"
            onChange={handleInputChange}
            disabled={disabled}
            className="hidden"
          />

          <div className="flex flex-col items-center gap-3 text-center">
            <div
              className={`rounded-2xl p-3.5 ${
                isDragging ? 'bg-brand-100 text-brand-600' : 'bg-white text-brand-600 shadow-sm ring-1 ring-slate-100'
              }`}
            >
              <Upload className="h-8 w-8" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-700">
                Drag & drop your Brand Knowledge document
              </p>
              <p className="mt-1 text-xs text-slate-500">
                or click to browse · PDF, DOCX, or TXT
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex animate-slide-up items-center gap-4 rounded-xl border border-emerald-200/80 bg-gradient-to-r from-emerald-50/80 to-white p-4">
          <div className="shrink-0 rounded-xl bg-emerald-100 p-2.5">
            <FileCheck className="h-6 w-6 text-emerald-600" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-slate-900">{selectedFile.name}</p>
            <p className="mt-0.5 text-xs text-slate-500">{formatFileSize(selectedFile.size)}</p>
          </div>
          {!disabled && (
            <button
              type="button"
              onClick={handleRemove}
              className="shrink-0 rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-rose-50 hover:text-rose-500"
              aria-label="Remove file"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      )}

      {error && (
        <p className="flex animate-fade-in items-center gap-1.5 text-sm text-rose-600">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {error}
        </p>
      )}
    </div>
  )
}
