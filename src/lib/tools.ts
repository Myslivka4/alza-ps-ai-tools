import type { Lang } from './i18n'

export interface Tool {
  id: string
  name: string
  url: string
  descriptions: Record<Lang, string>
  category: 'prodej' | 'asistenti' | 'analyza' | 'vzdelavani'
  platform: 'alzagen' | 'chatgpt' | 'notebooklm' | 'codepen' | 'webapp'
  emoji: string
}

export const CATEGORIES: Record<string, { emoji: string }> = {
  prodej:     { emoji: '🎯' },
  asistenti:  { emoji: '🤖' },
  analyza:    { emoji: '📊' },
  vzdelavani: { emoji: '📚' },
}

export const PLATFORMS: Record<string, { label: string; color: string; bg: string }> = {
  alzagen:    { label: 'AlzaGen',    color: '#FF6600', bg: '#FFF3E8' },
  chatgpt:    { label: 'ChatGPT',    color: '#10A37F', bg: '#E8F8F4' },
  notebooklm: { label: 'NotebookLM', color: '#4285F4', bg: '#E8F0FE' },
  codepen:    { label: 'CodePen',    color: '#0ebeff', bg: '#E3F8FF' },
  webapp:     { label: 'Web App',    color: '#7C3AED', bg: '#EDE9FE' },
}

export const tools: Tool[] = [
  {
    id: 'alzagen',
    name: 'AlzaGen',
    url: 'https://alzagen.alza.cz/',
    descriptions: {
      cs: 'Interní a bezpečný AI nástroj. Obsahuje modul Wiki Vševěd, který zná celou firemní wiki.',
      sk: 'Interný a bezpečný AI nástroj. Obsahuje modul Wiki Vševed, ktorý pozná celú firemnú wiki.',
      hu: 'Belső és biztonságos AI eszköz. Wiki Mindentudó modullal, amely ismeri a teljes vállalati wikit.',
      en: 'Internal and secure AI tool. Includes a Wiki All-Knowing module with the full company wiki.',
    },
    category: 'asistenti',
    platform: 'alzagen',
    emoji: '🧠',
  },
  {
    id: 'sales-panel',
    name: 'Sales Panel',
    url: 'https://sales-panel.netlify.app/',
    descriptions: {
      cs: 'Nahrajte denní hlášení a okamžitě získejte přehledné grafy a statistiky. Kalkulačka mzdy spočítá vaše provize a plánovač cílů vás udrží na správné cestě k vašim metám.',
      sk: 'Nahrajte denné hlásenie a okamžite získajte prehľadné grafy a štatistiky. Kalkulačka mzdy vypočíta vaše provízie a plánovač cieľov vás udrží na správnej ceste k vašim cieľom.',
      hu: 'Töltse fel a napi jelentést, és azonnal áttekinthető grafikonokat és statisztikákat kap. A bérkalkulátor kiszámítja a jutalékait, a célkövető segít a helyes úton maradni.',
      en: 'Upload your daily report and instantly get clear charts and statistics. The salary calculator computes your commissions and the goal planner keeps you on track towards your targets.',
    },
    category: 'analyza',
    platform: 'webapp',
    emoji: '📈',
  },
  {
    id: 'alza-ps-partak',
    name: 'Alza PS Parťák',
    url: 'https://chatgpt.com/g/g-69844727134c8191a3b803b9f53ab735-alza-ps-partak',
    descriptions: {
      cs: 'Tréninkový parťák pro prodej i vedení týmu. Simulace, koučink a okamžitá zpětná vazba.',
      sk: 'Tréningový parťák pre predaj aj vedenie tímu. Simulácie, koučing a okamžitá spätná väzba.',
      hu: 'Edzőpartner értékesítéshez és csapatvezetéshez. Szimulációk, coaching és azonnali visszajelzés.',
      en: 'Training partner for sales and team management. Simulations, coaching and instant feedback.',
    },
    category: 'prodej',
    platform: 'chatgpt',
    emoji: '🤝',
  },
  {
    id: 'prodejni-coach-5p',
    name: 'Prodejní Coach – 5P',
    url: 'https://chatgpt.com/g/g-69a47d10742481918080d44399ee6e5a-prodejni-coach-5p',
    descriptions: {
      cs: 'Simuluje zákazníky dle metodiky 5P. Po simulaci dává zpětnou vazbu, skóre a doporučení pro zvýšení konverze.',
      sk: 'Simuluje zákazníkov podľa metodiky 5P. Po simulácii dáva spätnú väzbu, skóre a odporúčania.',
      hu: '5P módszertan szerinti ügyfélszimulációk. Visszajelzés, pontszám és konverzió-javítási javaslatok.',
      en: 'Simulates customers using the 5P methodology. Provides feedback, scores and conversion tips after each simulation.',
    },
    category: 'prodej',
    platform: 'chatgpt',
    emoji: '🏆',
  },
  {
    id: 'alzakacka',
    name: 'Alzakačka',
    url: 'https://codepen.io/JakubCerny/full/GgZXpMo',
    descriptions: {
      cs: 'Výpočet variabilní složky mzdy KP v CZK.',
      sk: 'Výpočet variabilnej zložky mzdy KP v CZK.',
      hu: 'KP változó bérrész kiszámítása CZK-ban.',
      en: 'Calculation of the variable wage component for KP in CZK.',
    },
    category: 'analyza',
    platform: 'codepen',
    emoji: '💰',
  },
  {
    id: 'apf-prehled',
    name: 'ApF přehled a benefity',
    url: 'https://notebooklm.google.com/notebook/26c928f7-a854-4a95-8663-8dd9f151be20',
    descriptions: {
      cs: 'Návod a dotazy, jak na ApF.',
      sk: 'Návod a otázky, ako na ApF.',
      hu: 'Útmutató és kérdések az ApF-ről.',
      en: 'Guide and Q&A about ApF.',
    },
    category: 'vzdelavani',
    platform: 'notebooklm',
    emoji: '📋',
  },
  {
    id: 'apf-trenazer',
    name: 'ApF trenažér',
    url: 'https://chatgpt.com/g/g-69844c3826c081918cf866002cc42da3-ai-apf-trainer',
    descriptions: {
      cs: 'Bezpečný nácvik akvizice OSVČ a SMB v rámci Alza pro firmy. Funguje jako simulovaný zákazník.',
      sk: 'Bezpečný nácvik akvizície OSVČ a SMB v rámci Alza pre firmy. Funguje ako simulovaný zákazník.',
      hu: 'Biztonságos akvizíciós gyakorlat OSVČ és SMB ügyfelekkel az Alza pro firmy keretében.',
      en: 'Safe acquisition training for OSVČ and SMB clients within Alza pro firmy. Acts as a simulated customer.',
    },
    category: 'prodej',
    platform: 'chatgpt',
    emoji: '🎭',
  },
  {
    id: 'alza-asistent-sluzeb',
    name: 'Alza asistent prodeje služeb',
    url: 'https://chatgpt.com/g/g-695f54e6edc48191bcf1f257507738d2-alza-asistent-prodeje-sluzeb',
    descriptions: {
      cs: 'Doporučuje nejvhodnější doplňkové služby.',
      sk: 'Odporúča najvhodnejšie doplnkové služby.',
      hu: 'A legmegfelelőbb kiegészítő szolgáltatásokat ajánlja.',
      en: 'Recommends the most suitable add-on services.',
    },
    category: 'asistenti',
    platform: 'chatgpt',
    emoji: '🛎️',
  },
  {
    id: 'trener-sluzeb',
    name: 'Trenér služeb',
    url: 'https://chatgpt.com/g/g-6971e68e98b08191b56f28d53387995f-alza-sluzby-expert',
    descriptions: {
      cs: 'Vysvětlí, poradí, sehraje scénku – expert na prodej služeb.',
      sk: 'Vysvetlí, poradí, zahrá scénku – expert na predaj služieb.',
      hu: 'Megmagyaráz, tanácsot ad, jelenetet játszik – szolgáltatásértékesítési szakértő.',
      en: 'Explains, advises, plays out scenarios – expert on selling services.',
    },
    category: 'prodej',
    platform: 'chatgpt',
    emoji: '🎓',
  },
  {
    id: 'ps-navigator',
    name: 'PS Navigátor',
    url: 'https://alzagen.alza.cz/?model=qa',
    descriptions: {
      cs: 'Odpoví nejčastější dotazy spojené s reporty a operativou.',
      sk: 'Odpovie na najčastejšie otázky spojené s reportmi a operatívou.',
      hu: 'Megválaszolja a riportokkal és operatívával kapcsolatos leggyakoribb kérdéseket.',
      en: 'Answers the most frequent questions related to reports and daily operations.',
    },
    category: 'asistenti',
    platform: 'alzagen',
    emoji: '🧭',
  },
  {
    id: 'zaneta-p7',
    name: 'Žaneta – vševěd pro P7',
    url: 'https://notebooklm.google.com/notebook/33f161d4-b294-40f3-b5e9-4789b869bc98?addSource=true',
    descriptions: {
      cs: 'Procesní vševěd pro P7.',
      sk: 'Procesný vševed pre P7.',
      hu: 'Folyamat-mindentudó P7-hez.',
      en: 'Process expert for P7.',
    },
    category: 'asistenti',
    platform: 'notebooklm',
    emoji: '🌸',
  },
  {
    id: 'paybox-guru',
    name: 'Paybox GURU',
    url: 'https://notebooklm.google.com/notebook/ea45acb4-28ac-4cef-813a-50d76652eb1f',
    descriptions: {
      cs: 'Technický a servisný poradca pri riešení problémov s Payboxom.',
      sk: 'Technický a servisný poradca pri riešení problémov s Payboxom.',
      hu: 'Technikai és szerviz tanácsadó Paybox problémák megoldásához.',
      en: 'Technical and service advisor for solving Paybox issues.',
    },
    category: 'asistenti',
    platform: 'notebooklm',
    emoji: '💳',
  },
  {
    id: 'asistent-ap',
    name: 'Asistent pro AP',
    url: 'https://notebooklm.google.com/notebook/2b8b9c8d-aaea-4e52-901e-55de9dc4f07f',
    descriptions: {
      cs: 'Odborný pomocník a sprievodca systémom Alza Pointov.',
      sk: 'Odborný pomocník a sprievodca systémom Alza Pointov.',
      hu: 'Szakmai segítő és útmutató az Alza Pontok rendszeréhez.',
      en: 'Expert helper and guide for the Alza Points system.',
    },
    category: 'asistenti',
    platform: 'notebooklm',
    emoji: '⭐',
  },
  {
    id: 'datovy-analytik',
    name: 'Datový analytik',
    url: 'https://chatgpt.com/g/g-695697b5b29c8191852eba8f43aa19e7-ps-business-data-analyst',
    descriptions: {
      cs: 'Business analýza dat z Olap reportu, AW reportu a BSC.',
      sk: 'Business analýza dát z Olap reportu, AW reportu a BSC.',
      hu: 'Üzleti adatelemzés OLAP, AW és BSC riportokból.',
      en: 'Business data analysis from OLAP reports, AW reports and BSC.',
    },
    category: 'analyza',
    platform: 'chatgpt',
    emoji: '📊',
  },
]
