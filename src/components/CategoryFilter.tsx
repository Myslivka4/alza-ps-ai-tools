'use client'

import { CATEGORIES } from '@/lib/tools'

interface Props {
  active: string
  onChange: (cat: string) => void
  counts: Record<string, number>
}

export function CategoryFilter({ active, onChange, counts }: Props) {
  const all = [
    { id: 'vse', label: 'Vše', emoji: '✨' },
    ...Object.entries(CATEGORIES).map(([id, { label, emoji }]) => ({ id, label, emoji })),
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
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
              isActive
                ? 'bg-[#FF6600] text-white shadow-sm'
                : 'bg-white text-gray-600 border border-gray-200'
            }`}
          >
            <span>{emoji}</span>
            <span>{label}</span>
            <span className={`text-[10px] ${isActive ? 'text-orange-100' : 'text-gray-400'}`}>
              {count}
            </span>
          </button>
        )
      })}
    </div>
  )
}
