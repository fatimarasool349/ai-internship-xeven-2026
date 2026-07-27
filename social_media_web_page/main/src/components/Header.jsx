import { Zap } from 'lucide-react'

export default function Header() {
  return (
    <header className="mb-2 text-center animate-fade-in">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-200/60 bg-white/80 px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm backdrop-blur-sm">
        <Zap className="h-4 w-4 text-brand-600" strokeWidth={2.25} />
        Powered by CrewAI + RAG
      </div>
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        AI Social Media{' '}
        <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500 bg-clip-text text-transparent">
          Content Generator
        </span>
      </h1>
      <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
        Generate AI-powered social media content using Brand Knowledge (RAG) and CrewAI.
      </p>
    </header>
  )
}
