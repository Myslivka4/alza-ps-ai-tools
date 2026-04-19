'use client'

import { useLang } from '@/contexts/LanguageContext'
import { LANGS } from '@/lib/i18n'

export function LanguageSwitcher() {
  const { lang, setLang } = useLang()
  return (
    <div className="flex gap-1">
      {LANGS.map(({ code, flag, label }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className="flex items-center gap-0.5 px-2 py-1 rounded-lg text-xs font-semibold transition-all"
          style={lang === code
            ? { backgroundColor: '#aaff00', color: '#222464' }
            : { color: 'rgba(255,255,255,0.5)' }
          }
        >
          <span>{flag}</span>
          <span className="ml-0.5">{label}</span>
        </button>
      ))}
    </div>
  )
}
