'use client'

import { useState, useEffect, useMemo } from 'react'
import { tools, CATEGORIES } from '@/lib/tools'
import type { Tool } from '@/lib/tools'
import { fetchAllRatings } from '@/lib/supabase'
import type { ToolRating } from '@/lib/supabase'
import { ToolCard } from '@/components/ToolCard'
import { RatingModal } from '@/components/RatingModal'
import { SearchBar } from '@/components/SearchBar'
import { CategoryFilter } from '@/components/CategoryFilter'

export default function Home() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('vse')
  const [ratingTool, setRatingTool] = useState<Tool | null>(null)
  const [ratings, setRatings] = useState<Record<string, ToolRating>>({})

  useEffect(() => {
    fetchAllRatings().then(setRatings)
  }, [])

  const categoryCounts = useMemo(() =>
    Object.fromEntries(
      Object.keys(CATEGORIES).map((cat) => [cat, tools.filter((t) => t.category === cat).length])
    ), []
  )

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return tools.filter((t) => {
      const matchCat = activeCategory === 'vse' || t.category === activeCategory
      const matchSearch = !q || t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q)
      return matchCat && matchSearch
    })
  }, [search, activeCategory])

  function handleRatingClose(submitted: boolean, newRating?: number) {
    if (submitted && ratingTool && newRating) {
      setRatings((prev) => {
        const existing = prev[ratingTool.id]
        if (!existing) return { ...prev, [ratingTool.id]: { average: newRating, count: 1 } }
        const newCount = existing.count + 1
        const newAvg = Math.round(((existing.average * existing.count + newRating) / newCount) * 10) / 10
        return { ...prev, [ratingTool.id]: { average: newAvg, count: newCount } }
      })
    }
    setRatingTool(null)
  }

  return (
    <main className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="px-4 pt-12 pb-5" style={{ backgroundColor: '#222464' }}>
        <div className="flex items-center gap-3 mb-1">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#aaff00' }}>
            <span className="font-black text-sm" style={{ color: '#222464' }}>AI</span>
          </div>
          <div>
            <h1 className="text-white font-bold text-xl leading-tight">Alza PS AI Tools</h1>
            <p className="text-xs" style={{ color: '#aaff0099' }}>{tools.length} nástrojů k dispozici</p>
          </div>
        </div>
      </div>

      {/* Search + filters */}
      <div className="px-4 py-3 sticky top-0 z-10" style={{ backgroundColor: '#222464', borderBottom: '1px solid #2d2f80' }}>
        <div className="mb-3">
          <SearchBar value={search} onChange={setSearch} />
        </div>
        <CategoryFilter
          active={activeCategory}
          onChange={setActiveCategory}
          counts={categoryCounts}
        />
      </div>

      {/* Tool grid */}
      <div className="px-4 py-4" style={{ backgroundColor: '#1a1b50' }}>
        {filtered.length === 0 ? (
          <div className="text-center py-16" style={{ color: '#ffffff66' }}>
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-sm">Žádný nástroj nenalezen</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {filtered.map((tool) => (
              <ToolCard
                key={tool.id}
                tool={tool}
                rating={ratings[tool.id]}
                onRate={setRatingTool}
              />
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-4 pb-8 text-center text-xs" style={{ backgroundColor: '#1a1b50', color: '#ffffff33' }}>
        Alza PS AI Tools
      </div>

      {/* Rating modal */}
      {ratingTool && (
        <RatingModal tool={ratingTool} onClose={handleRatingClose} />
      )}
    </main>
  )
}
