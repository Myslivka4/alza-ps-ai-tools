import { createClient } from '@supabase/supabase-js'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = url && key ? createClient(url, key) : null

export interface ToolRating {
  average: number
  count: number
}

export async function fetchAllRatings(): Promise<Record<string, ToolRating>> {
  if (!supabase) return {}
  const { data, error } = await supabase
    .from('tool_ratings')
    .select('tool_id, rating')
  if (error || !data) return {}

  const map: Record<string, { sum: number; count: number }> = {}
  for (const row of data) {
    if (!map[row.tool_id]) map[row.tool_id] = { sum: 0, count: 0 }
    map[row.tool_id].sum += row.rating
    map[row.tool_id].count += 1
  }
  return Object.fromEntries(
    Object.entries(map).map(([id, { sum, count }]) => [
      id,
      { average: Math.round((sum / count) * 10) / 10, count },
    ])
  )
}

export async function submitRating(
  toolId: string,
  toolName: string,
  rating: number,
  feedback: string,
  sessionId: string
) {
  if (!supabase) return
  await supabase.from('tool_ratings').insert({ tool_id: toolId, tool_name: toolName, rating, feedback, session_id: sessionId })
}

export async function trackInteraction(
  toolId: string,
  toolName: string,
  sessionId: string
) {
  if (!supabase) return
  await supabase.from('tool_interactions').insert({ tool_id: toolId, tool_name: toolName, session_id: sessionId })
}
