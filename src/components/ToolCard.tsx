'use client'

import { Tool, PLATFORMS } from '@/lib/tools'
import { trackInteraction } from '@/lib/supabase'
import { getSessionId } from '@/lib/session'
import type { ToolRating } from '@/lib/supabase'
import type { Lang } from '@/lib/i18n'

interface Props {
  tool: Tool
  rating?: ToolRating
  onRate: (tool: Tool) => void
  lang: Lang
  openLabel: string
  rateLabel: string
}

export function ToolCard({ tool, rating, onRate, lang, openLabel, rateLabel }: Props) {
  const platform = PLATFORMS[tool.platform]

  function handleOpen() {
    window.open(tool.url, '_blank', 'noopener,noreferrer')
    trackInteraction(tool.id, tool.name, getSessionId())
  }

  const avg = rating?.average ?? 0
  const count = rating?.count ?? 0

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <span className="text-3xl leading-none">{tool.emoji}</span>
        <span
          className="text-[10px] font-semibold px-2 py-1 rounded-full shrink-0"
          style={{ color: platform.color, backgroundColor: platform.bg }}
        >
          {platform.label}
        </span>
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-1">
          {tool.name}
        </h3>
        <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">
          {tool.descriptions[lang]}
        </p>
      </div>

      <button
        onClick={() => onRate(tool)}
        className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-amber-500 transition-colors"
      >
        <StarDisplay value={avg} />
        {count > 0 ? (
          <span className="text-gray-400">{avg.toFixed(1)} <span className="text-gray-300">({count})</span></span>
        ) : (
          <span className="text-gray-300">{rateLabel}</span>
        )}
      </button>

      <button
        onClick={handleOpen}
        className="w-full py-2.5 rounded-xl text-sm font-bold transition-all active:scale-95 hover:brightness-110"
        style={{ backgroundColor: '#aaff00', color: '#222464' }}
      >
        {openLabel}
      </button>
    </div>
  )
}

function StarDisplay({ value }: { value: number }) {
  return (
    <span className="flex">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= Math.round(value) ? 'text-amber-400' : 'text-gray-200'}>★</span>
      ))}
    </span>
  )
}
