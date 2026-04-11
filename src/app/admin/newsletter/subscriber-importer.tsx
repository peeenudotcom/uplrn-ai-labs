'use client'

import { useState } from 'react'

interface ParsedRow {
  email: string
  name?: string | null
}

interface ImportResult {
  ok?: boolean
  received?: number
  valid?: number
  upserted?: number
  errored?: number
  errors?: { row: number; email: string; reason: string }[]
  error?: string
}

// Parse text input: supports multiple formats
//   email@domain.com
//   Name, email@domain.com
//   Name <email@domain.com>
//   email@domain.com, Name
// Handles CSV with header row (auto-detects "email" / "name" columns)
function parseText(input: string): ParsedRow[] {
  const lines = input
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean)
  if (lines.length === 0) return []

  // Detect if first line is a CSV header
  const first = lines[0].toLowerCase()
  const hasHeader = first.includes('email') || first.includes('name')

  let rows = lines
  let emailIdx = 0
  let nameIdx = -1

  if (hasHeader) {
    const headers = lines[0].split(',').map((h) => h.trim().toLowerCase())
    emailIdx = headers.findIndex((h) => h.includes('email') || h.includes('mail'))
    nameIdx = headers.findIndex((h) => h.includes('name'))
    if (emailIdx === -1) emailIdx = 0
    rows = lines.slice(1)
  }

  const out: ParsedRow[] = []
  for (const line of rows) {
    // "Name <email>" pattern
    const angleMatch = line.match(/^(.+?)\s*<([^>]+)>\s*$/)
    if (angleMatch) {
      out.push({ name: angleMatch[1].trim(), email: angleMatch[2].trim() })
      continue
    }

    // CSV / comma-separated
    if (line.includes(',')) {
      const parts = line.split(',').map((p) => p.trim().replace(/^"|"$/g, ''))
      if (hasHeader && parts.length > Math.max(emailIdx, nameIdx)) {
        out.push({
          email: parts[emailIdx] || '',
          name: nameIdx >= 0 ? parts[nameIdx] || null : null,
        })
        continue
      }
      // Fallback: assume email is the part with @, name is the other
      const emailPart = parts.find((p) => p.includes('@')) || parts[0]
      const namePart = parts.find((p) => !p.includes('@')) || null
      out.push({ email: emailPart, name: namePart })
      continue
    }

    // Plain email
    out.push({ email: line, name: null })
  }

  return out
}

export function SubscriberImporter() {
  const [text, setText] = useState('')
  const [parsed, setParsed] = useState<ParsedRow[]>([])
  const [importing, setImporting] = useState(false)
  const [result, setResult] = useState<ImportResult | null>(null)
  const [expanded, setExpanded] = useState(false)

  function handleTextChange(value: string) {
    setText(value)
    setResult(null)
    if (value.trim()) {
      setParsed(parseText(value))
    } else {
      setParsed([])
    }
  }

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const content = await file.text()
    handleTextChange(content)
  }

  async function handleImport() {
    if (parsed.length === 0) return
    setImporting(true)
    setResult(null)
    try {
      const res = await fetch('/api/admin/subscribers/import', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rows: parsed }),
      })
      const data = (await res.json()) as ImportResult
      setResult(data)
      if (data.ok) {
        // Clear the form after successful import
        setText('')
        setParsed([])
      }
    } catch (err) {
      setResult({ error: err instanceof Error ? err.message : 'Import failed' })
    } finally {
      setImporting(false)
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-between w-full text-left"
      >
        <div>
          <h2 className="text-lg font-bold text-slate-900">Import Subscribers</h2>
          <p className="text-sm text-slate-500 mt-0.5">
            Bulk add emails from a CSV file or paste a list
          </p>
        </div>
        <svg
          className={`h-5 w-5 text-slate-400 transition-transform ${expanded ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {expanded && (
        <div className="mt-5 space-y-4">
          {/* File upload */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Upload CSV or text file
            </label>
            <input
              type="file"
              accept=".csv,.txt"
              onChange={handleFile}
              className="block w-full text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-slate-900 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-slate-800"
            />
            <p className="text-xs text-slate-400 mt-1">
              Accepts CSV with headers (email, name columns) or plain text with one email per line
            </p>
          </div>

          {/* Or paste */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Or paste emails directly
            </label>
            <textarea
              value={text}
              onChange={(e) => handleTextChange(e.target.value)}
              rows={8}
              placeholder={`Supported formats:
email@example.com
Name, email@example.com
Name <email@example.com>

Or a CSV with headers:
name,email
Priya Sharma,priya@example.com
Rahul Singh,rahul@example.com`}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm font-mono focus:outline-none focus:border-[#e53935] focus:ring-2 focus:ring-[#e53935]/20"
            />
          </div>

          {/* Preview parsed rows */}
          {parsed.length > 0 && (
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900 mb-2">
                Parsed {parsed.length} row{parsed.length !== 1 ? 's' : ''}:
              </p>
              <div className="max-h-40 overflow-y-auto text-xs font-mono">
                {parsed.slice(0, 10).map((row, i) => (
                  <div key={i} className="py-0.5 text-slate-700">
                    {row.name ? `${row.name} <${row.email}>` : row.email}
                  </div>
                ))}
                {parsed.length > 10 && (
                  <div className="py-1 text-slate-400">
                    ...and {parsed.length - 10} more
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Import button */}
          {parsed.length > 0 && (
            <button
              onClick={handleImport}
              disabled={importing}
              className="w-full rounded-lg bg-[#e53935] text-white px-5 py-3 text-sm font-bold hover:bg-[#c62828] disabled:opacity-50"
            >
              {importing ? 'Importing...' : `Import ${parsed.length} Subscribers`}
            </button>
          )}

          {/* Result */}
          {result && !result.error && (
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
              <p className="font-semibold">✅ Import complete</p>
              <ul className="mt-2 space-y-0.5 text-xs">
                <li>Received: {result.received}</li>
                <li>Valid: {result.valid}</li>
                <li>Added or updated: {result.upserted}</li>
                {result.errored && result.errored > 0 && (
                  <li className="text-amber-700">Errors: {result.errored}</li>
                )}
              </ul>
              {result.errors && result.errors.length > 0 && (
                <details className="mt-3">
                  <summary className="cursor-pointer text-xs font-semibold">
                    See {result.errors.length} error{result.errors.length !== 1 ? 's' : ''}
                  </summary>
                  <ul className="mt-2 space-y-0.5 text-xs text-slate-600">
                    {result.errors.map((e, i) => (
                      <li key={i}>
                        Row {e.row}: {e.email || '(empty)'} — {e.reason}
                      </li>
                    ))}
                  </ul>
                </details>
              )}
              <p className="mt-3 text-xs">
                Refresh the page to see the updated subscriber count at the top.
              </p>
            </div>
          )}
          {result?.error && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
              <p className="font-semibold">Import failed</p>
              <p className="mt-1 text-xs">{result.error}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
