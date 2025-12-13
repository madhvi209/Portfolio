"use client"

import { useState } from "react"
import CodeBlock from "@/components/CodeBlock"

interface Item {
  title: string
  code: string
  language?: string
}

export default function CodeTabs({ items }: { items: Item[] }) {
  const [active, setActive] = useState(0)

  if (!items || items.length === 0) return null

  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-3">
        {items.map((it, i) => (
          <button
            key={it.title}
            onClick={() => setActive(i)}
            className={`px-3 py-1 rounded-lg font-semibold transition ${
              active === i
                ? "bg-gradient-to-r from-orange-400 to-orange-500 text-white"
                : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
            }`}
          >
            {it.title}
          </button>
        ))}
      </div>

      <div>
        <CodeBlock code={items[active].code} language={items[active].language} />
      </div>
    </div>
  )
}
