export interface Tool {
  id: string
  name: string
  url: string
  description: string
  category: 'prodej' | 'asistenti' | 'analyza' | 'vzdelavani'
  platform: 'alzagen' | 'chatgpt' | 'notebooklm' | 'codepen'
  emoji: string
}

export const CATEGORIES: Record<string, { label: string; emoji: string }> = {
  prodej:      { label: 'Prodej & Simulace', emoji: '🎯' },
  asistenti:   { label: 'Asistenti',         emoji: '🤖' },
  analyza:     { label: 'Analýza',           emoji: '📊' },
  vzdelavani:  { label: 'Vzdělávání',        emoji: '📚' },
}

export const PLATFORMS: Record<string, { label: string; color: string; bg: string }> = {
  alzagen:    { label: 'AlzaGen',    color: '#FF6600', bg: '#FFF3E8' },
  chatgpt:    { label: 'ChatGPT',    color: '#10A37F', bg: '#E8F8F4' },
  notebooklm: { label: 'NotebookLM', color: '#4285F4', bg: '#E8F0FE' },
  codepen:    { label: 'CodePen',    color: '#0ebeff', bg: '#E3F8FF' },
}

export const tools: Tool[] = [
  {
    id: 'alzagen',
    name: 'AlzaGen',
    url: 'https://alzagen.alza.cz/',
    description: 'Interní a bezpečný AI nástroj. Obsahuje modul Wiki Vševěd, který zná celou firemní wiki.',
    category: 'asistenti',
    platform: 'alzagen',
    emoji: '🧠',
  },
  {
    id: 'alza-ps-partak',
    name: 'Alza PS Parťák',
    url: 'https://chatgpt.com/g/g-69844727134c8191a3b803b9f53ab735-alza-ps-partak',
    description: 'Tréninkový parťák pro prodej i vedení týmu. Simulace, koučink a okamžitá zpětná vazba.',
    category: 'prodej',
    platform: 'chatgpt',
    emoji: '🤝',
  },
  {
    id: 'prodejni-coach-5p',
    name: 'Prodejní Coach – 5P',
    url: 'https://chatgpt.com/g/g-69a47d10742481918080d44399ee6e5a-prodejni-coach-5p',
    description: 'Simuluje zákazníky dle metodiky 5P. Po simulaci dává zpětnou vazbu, skóre a doporučení pro zvýšení konverze.',
    category: 'prodej',
    platform: 'chatgpt',
    emoji: '🏆',
  },
  {
    id: 'alzakacka',
    name: 'Alzakačka',
    url: 'https://codepen.io/JakubCerny/full/GgZXpMo',
    description: 'Výpočet variabilní složky mzdy KP v CZK.',
    category: 'analyza',
    platform: 'codepen',
    emoji: '💰',
  },
  {
    id: 'apf-prehled',
    name: 'ApF přehled a benefity',
    url: 'https://notebooklm.google.com/notebook/26c928f7-a854-4a95-8663-8dd9f151be20',
    description: 'Návod a dotazy, jak na ApF.',
    category: 'vzdelavani',
    platform: 'notebooklm',
    emoji: '📋',
  },
  {
    id: 'apf-trenazer',
    name: 'ApF trenažér',
    url: 'https://chatgpt.com/g/g-69844c3826c081918cf866002cc42da3-ai-apf-trainer',
    description: 'Bezpečný nácvik akvizice OSVČ a SMB v rámci Alza pro firmy. Funguje jako simulovaný zákazník.',
    category: 'prodej',
    platform: 'chatgpt',
    emoji: '🎭',
  },
  {
    id: 'alza-asistent-sluzeb',
    name: 'Alza asistent prodeje služeb',
    url: 'https://chatgpt.com/g/g-695f54e6edc48191bcf1f257507738d2-alza-asistent-prodeje-sluzeb',
    description: 'Doporučuje nejvhodnější doplňkové služby.',
    category: 'asistenti',
    platform: 'chatgpt',
    emoji: '🛎️',
  },
  {
    id: 'trener-sluzeb',
    name: 'Trenér služeb',
    url: 'https://chatgpt.com/g/g-6971e68e98b08191b56f28d53387995f-alza-sluzby-expert',
    description: 'Vysvětlí, poradí, sehraje scénku – expert na prodej služeb.',
    category: 'prodej',
    platform: 'chatgpt',
    emoji: '🎓',
  },
  {
    id: 'ps-navigator',
    name: 'PS Navigátor',
    url: 'https://alzagen.alza.cz/?model=qa',
    description: 'Odpoví nejčastější dotazy spojené s reporty a operativou.',
    category: 'asistenti',
    platform: 'alzagen',
    emoji: '🧭',
  },
  {
    id: 'zaneta-p7',
    name: 'Žaneta – vševěd pro P7',
    url: 'https://notebooklm.google.com/notebook/33f161d4-b294-40f3-b5e9-4789b869bc98?addSource=true',
    description: 'Procesní vševěd pro P7.',
    category: 'asistenti',
    platform: 'notebooklm',
    emoji: '🌸',
  },
  {
    id: 'paybox-guru',
    name: 'Paybox GURU',
    url: 'https://notebooklm.google.com/notebook/ea45acb4-28ac-4cef-813a-50d76652eb1f',
    description: 'Technický a servisný poradca pri riešení problémov s Payboxom.',
    category: 'asistenti',
    platform: 'notebooklm',
    emoji: '💳',
  },
  {
    id: 'asistent-ap',
    name: 'Asistent pro AP',
    url: 'https://notebooklm.google.com/notebook/2b8b9c8d-aaea-4e52-901e-55de9dc4f07f',
    description: 'Odborný pomocník a sprievodca systémom Alza Pointov.',
    category: 'asistenti',
    platform: 'notebooklm',
    emoji: '⭐',
  },
  {
    id: 'datovy-analytik',
    name: 'Datový analytik',
    url: 'https://chatgpt.com/g/g-695697b5b29c8191852eba8f43aa19e7-ps-business-data-analyst',
    description: 'Business analýza dat z Olap reportu, AW reportu a BSC.',
    category: 'analyza',
    platform: 'chatgpt',
    emoji: '📊',
  },
]
