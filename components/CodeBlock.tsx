"use client"

import { useState } from "react"

interface Props {
  code: string
  language?: string
}

export default function CodeBlock({ code, language = "text" }: Props) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (e) {
      // ignore
    }
  }

  return (
    <div className="relative my-4">
      <button
        onClick={copy}
        className="absolute right-2 top-2 z-10 rounded bg-orange-500 text-white px-3 py-1 text-sm hover:opacity-90"
      >
        {copied ? "Copied" : "Copy"}
      </button>

      <pre className="overflow-auto rounded-lg bg-slate-900 text-white p-4 text-sm">
        <code>
{code}
        </code>
      </pre>
    </div>
  )
}
