export function getSessionId(): string {
  if (typeof window === 'undefined') return ''
  let id = localStorage.getItem('alzaai_session')
  if (!id) {
    id = crypto.randomUUID()
    localStorage.setItem('alzaai_session', id)
  }
  return id
}
