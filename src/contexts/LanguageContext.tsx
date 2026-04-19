'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { Lang } from '@/lib/i18n'

interface LanguageContextType {
  lang: Lang
  setLang: (l: Lang) => void
}

const LanguageContext = createContext<LanguageContextType>({ lang: 'cs', setLang: () => {} })

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('cs')

  useEffect(() => {
    const saved = localStorage.getItem('alzaai_lang') as Lang
    if (saved && ['cs', 'sk', 'hu', 'en'].includes(saved)) {
      setLangState(saved)
    }
  }, [])

  function setLang(l: Lang) {
    setLangState(l)
    localStorage.setItem('alzaai_lang', l)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
