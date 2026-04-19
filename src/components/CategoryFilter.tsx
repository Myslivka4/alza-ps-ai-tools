'use client'

import { CATEGORIES } from '@/lib/tools'

interface Props {
  active: string
  onChange: (cat: string) => void
  counts: Record<string, number>
  labels: Record<string, string>
  allLabel: string
}

export function CategoryFilter({ active, onChange, counts, labels, allLabel }: Props) {
  const all = [
    { id: 'vse', label: allLabel, emoji: '✨' },
    ...Object.entries(CATEGORIES).map(([id, { emoji }]) => ({ id, label: labels[id] ?? id, emoji })),
  ]

  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
      {all.map(({ id, label, emoji }) => {
        const isActive = active === id
        const count = id === 'vse' ? Object.values(counts).reduce((a, b) => a + b, 0) : (counts[id] ?? 0)
        return (
          <button
            key={id}
            onClick={() => onChange(id)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all"
            style={isActive
              ? { backgroundColor: '#aaff00', color: '#222464' }
              : { backgroundColor: '#2d2f80', color: '#ffffffcc', border: '1px solid #3d3f9a' }
            }
          >
            <span>{emoji}</span>
            <span>{label}</span>
            <span className="text-[10px]" style={{ opacity: 0.6 }}>{count}</span>
          </button>
        )
      })}
    </div>
  )
}
