'use client'

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="px-6 py-2.5 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors"
    >
      Print Certificate
    </button>
  )
}
