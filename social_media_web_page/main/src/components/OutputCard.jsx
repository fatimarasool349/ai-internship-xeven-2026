import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  CheckCircle2,
  Copy,
  RefreshCw,
  Trash2,
  CalendarDays,
  ChevronDown,
  Send,
  FileText,
} from "lucide-react";

export default function OutputCard({
  content,
  onRegenerate,
  onClear,
  loading,
}) {
  const [copied, setCopied] = useState(false);

  const [openCalendar, setOpenCalendar] = useState(true);
  const [openPublish, setOpenPublish] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const calendarContent = content.split("## ✅ Publish Confirmation")[0];

  const publishContent = content.split("## ✅ Publish Confirmation")[1];

  return (
    <div className="w-full overflow-hidden transition-shadow duration-300 bg-white border shadow-sm rounded-2xl border-slate-200 hover:shadow-md animate-slide-up">
      {" "}
      {/* HEADER */}
      {/* HEADER */}
      <div className="flex flex-col gap-5 px-6 py-5 bg-white border-b border-slate-200 sm:flex-row sm:items-center sm:justify-between">
        {/* Left */}
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-10 h-10 border border-indigo-100 rounded-xl bg-indigo-50">
            <CheckCircle2 className="w-5 h-5 text-indigo-600" />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Generated Content
            </h3>

            <p className="mt-0.5 text-sm text-slate-500">
              AI-generated social media strategy
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Copy */}
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center h-10 gap-2 px-4 text-sm font-medium transition-all duration-200 bg-white border rounded-lg border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
          >
            {copied ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Copied
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy
              </>
            )}
          </button>

          {/* Regenerate */}
          <button
            type="button"
            onClick={onRegenerate}
            disabled={loading}
            className="inline-flex items-center h-10 gap-2 px-4 text-sm font-medium text-white transition-all duration-200 bg-indigo-600 rounded-lg hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            Regenerate
          </button>

          {/* Clear */}
          <button
            type="button"
            onClick={onClear}
            className="inline-flex items-center h-10 gap-2 px-4 text-sm font-medium transition-all duration-200 bg-white border rounded-lg border-slate-200 text-slate-600 hover:border-red-200 hover:bg-red-50 hover:text-red-600"
          >
            <Trash2 className="w-4 h-4" />
            Clear
          </button>
        </div>
      </div>
      <div className="p-6 space-y-8">
        {/* CONTENT CALENDAR */}

        {/* Social Media Content Calendar */}
        <div className="overflow-hidden bg-white border shadow-sm border-slate-200 rounded-2xl">
          <button
            type="button"
            onClick={() => setOpenCalendar(!openCalendar)}
            className="flex items-center justify-between w-full px-6 py-4 transition-colors bg-white border-b border-l-4 border-slate-200 border-l-blue-600 hover:bg-slate-50"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50">
                <CalendarDays className="w-5 h-5 text-blue-600" />
              </div>

              <div className="text-left">
                <h4 className="text-base font-semibold text-slate-900">
                  Social Media Content Calendar
                </h4>

                <p className="text-sm text-slate-500">
                  AI-generated content schedule for all platforms
                </p>
              </div>
            </div>

            <ChevronDown
              className={`h-5 w-5 text-slate-500 transition-transform duration-300 ${
                openCalendar ? "rotate-180" : ""
              }`}
            />
          </button>

          {openCalendar && (
            <div className="p-6 bg-slate-50 animate-slide-down">
              <div className="overflow-x-auto bg-white shadow-sm rounded-xl border-slate-200">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={markdownComponents}
                >
                  {calendarContent}
                </ReactMarkdown>
              </div>
            </div>
          )}
        </div>

        {/* PUBLISH */}

        <div className="overflow-hidden bg-white border shadow-sm rounded-2xl border-slate-200">
          <button
            type="button"
            onClick={() => setOpenPublish(!openPublish)}
            className="flex items-center justify-between w-full px-6 py-4 transition-colors bg-white border-b border-l-4 border-slate-200 border-l-indigo-600 hover:bg-slate-50"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100">
                <CheckCircle2 className="w-5 h-5 text-indigo-600" />
              </div>

              <div className="text-left">
                <h4 className="text-base font-semibold text-slate-900">
                  Publish Confirmation
                </h4>

                <p className="text-sm text-slate-500">
                  Publishing status across all platforms
                </p>
              </div>
            </div>

            <ChevronDown
              className={`h-5 w-5 text-slate-500 transition-transform duration-300 ${
                openPublish ? "rotate-180" : ""
              }`}
            />
          </button>

          {openPublish && (
            <div className="p-6 bg-slate-50 animate-slide-down">
              <div className="overflow-x-auto bg-white border shadow-sm rounded-xl border-slate-200">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={markdownComponents}
                >
                  {publishContent}
                </ReactMarkdown>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const markdownComponents = {
  table: ({ children }) => (
    <div className="overflow-hidden bg-white border shadow-sm rounded-2xl border-slate-200">
      <div className="overflow-x-auto">
        <table className="min-w-[1100px] w-full border-collapse text-sm">
          {children}
        </table>
      </div>
    </div>
  ),

  thead: ({ children }) => (
    <thead className="sticky top-0 bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 backdrop-blur-sm">
      {children}
    </thead>
  ),

  tr: ({ children }) => (
    <tr className="transition-colors duration-200 even:bg-slate-50/40 hover:bg-indigo-50/50">
      {children}
    </tr>
  ),

  th: ({ children }) => (
    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left uppercase border-b border-slate-200 text-slate-600">
      {children}
    </th>
  ),

  td: ({ children }) => (
    <td className="px-6 py-5 leading-7 align-top border-b border-slate-100 text-slate-700">
      {children}
    </td>
  ),

  h1: ({ children }) => (
    <h1 className="mb-6 text-3xl font-bold text-slate-900">{children}</h1>
  ),

  h2: ({ children }) => (
    <h2 className="flex items-center gap-3 mt-2 mb-5 text-2xl font-bold text-slate-900">
      {children}
    </h2>
  ),

  h3: ({ children }) => (
    <h3 className="mt-5 mb-3 text-xl font-semibold text-slate-800">
      {children}
    </h3>
  ),

  p: ({ children }) => (
    <p className="mb-4 leading-7 text-slate-600">{children}</p>
  ),

  ul: ({ children }) => (
    <ul className="ml-6 space-y-2 list-disc text-slate-700">{children}</ul>
  ),
};
