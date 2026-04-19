'use client'

import { useState } from 'react'
import { Tool } from '@/lib/tools'
import { submitRating } from '@/lib/supabase'
import { getSessionId } from '@/lib/session'

interface Props {
  tool: Tool
  onClose: (submitted: boolean, rating?: number) => void
}

export function RatingModal({ tool, onClose }: Props) {
  const [stars, setStars] = useState(0)
  const [hovered, setHovered] = useState(0)
  const [feedback, setFeedback] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  async function handleSubmit() {
    if (!stars) return
    setSubmitting(true)
    await submitRating(tool.id, tool.name, stars, feedback, getSessionId())
    setDone(true)
    setTimeout(() => onClose(true, stars), 1200)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center"
      onClick={(e) => e.target === e.currentTarget && onClose(false)}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative w-full max-w-lg bg-white rounded-t-3xl px-6 pt-5 pb-10 shadow-2xl animate-slide-up">
        {/* Handle */}
        <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-5" />

        {done ? (
          <div className="flex flex-col items-center gap-3 py-6">
            <span className="text-5xl">🎉</span>
            <p className="text-lg font-semibold text-gray-800">Díky za hodnocení!</p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{tool.emoji}</span>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Hodnotíte</p>
                <h3 className="font-semibold text-gray-900">{tool.name}</h3>
              </div>
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-3 mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <button
                  key={i}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => setStars(i)}
                  className="text-4xl transition-transform active:scale-90"
                >
                  <span className={i <= (hovered || stars) ? 'text-amber-400' : 'text-gray-200'}>
                    ★
                  </span>
                </button>
              ))}
            </div>

            {/* Feedback */}
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Co by se dalo zlepšit? (volitelné)"
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none mb-4"
            />

            <button
              onClick={handleSubmit}
              disabled={!stars || submitting}
              className="w-full py-3 rounded-xl font-bold text-sm transition-all active:scale-95 disabled:opacity-40"
              style={{ backgroundColor: '#aaff00', color: '#222464' }}
            >
              {submitting ? 'Odesílám...' : 'Odeslat hodnocení'}
            </button>
            <button
              onClick={() => onClose(false)}
              className="w-full mt-2 py-2 text-sm text-gray-400"
            >
              Přeskočit
            </button>
          </>
        )}
      </div>
    </div>
  )
}
