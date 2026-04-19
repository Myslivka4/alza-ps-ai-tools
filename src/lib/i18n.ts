export type Lang = 'cs' | 'sk' | 'hu' | 'en'

export const LANGS: { code: Lang; flag: string; label: string }[] = [
  { code: 'cs', flag: '🇨🇿', label: 'CS' },
  { code: 'sk', flag: '🇸🇰', label: 'SK' },
  { code: 'hu', flag: '🇭🇺', label: 'HU' },
  { code: 'en', flag: '🇬🇧', label: 'EN' },
]

export const translations = {
  cs: {
    subtitle: (n: number) => `${n} nástrojů k dispozici`,
    search: 'Hledat nástroj...',
    openTool: 'Otevřít nástroj',
    rate: 'Ohodnotit',
    ratingTitle: 'Hodnotíte',
    ratingFeedback: 'Co by se dalo zlepšit? (volitelné)',
    submitRating: 'Odeslat hodnocení',
    skip: 'Přeskočit',
    thanks: 'Díky za hodnocení!',
    sending: 'Odesílám...',
    noResults: 'Žádný nástroj nenalezen',
    categories: {
      vse: 'Vše',
      prodej: 'Prodej & Simulace',
      asistenti: 'Asistenti',
      analyza: 'Analýza',
      vzdelavani: 'Vzdělávání',
    },
  },
  sk: {
    subtitle: (n: number) => `${n} nástrojov k dispozícii`,
    search: 'Hľadať nástroj...',
    openTool: 'Otvoriť nástroj',
    rate: 'Hodnotiť',
    ratingTitle: 'Hodnotíte',
    ratingFeedback: 'Čo by sa dalo zlepšiť? (voliteľné)',
    submitRating: 'Odoslať hodnotenie',
    skip: 'Preskočiť',
    thanks: 'Ďakujeme za hodnotenie!',
    sending: 'Odosielam...',
    noResults: 'Žiadny nástroj nenájdený',
    categories: {
      vse: 'Všetky',
      prodej: 'Predaj & Simulácie',
      asistenti: 'Asistenti',
      analyza: 'Analýza',
      vzdelavani: 'Vzdelávanie',
    },
  },
  hu: {
    subtitle: (n: number) => `${n} eszköz elérhető`,
    search: 'Eszköz keresése...',
    openTool: 'Eszköz megnyitása',
    rate: 'Értékelés',
    ratingTitle: 'Értékeli',
    ratingFeedback: 'Mit lehetne javítani? (opcionális)',
    submitRating: 'Értékelés küldése',
    skip: 'Kihagyás',
    thanks: 'Köszönjük az értékelést!',
    sending: 'Küldés...',
    noResults: 'Nem található eszköz',
    categories: {
      vse: 'Összes',
      prodej: 'Értékesítés & Szimuláció',
      asistenti: 'Asszisztensek',
      analyza: 'Elemzés',
      vzdelavani: 'Oktatás',
    },
  },
  en: {
    subtitle: (n: number) => `${n} tools available`,
    search: 'Search tools...',
    openTool: 'Open tool',
    rate: 'Rate',
    ratingTitle: 'Rating',
    ratingFeedback: 'What could be improved? (optional)',
    submitRating: 'Submit rating',
    skip: 'Skip',
    thanks: 'Thanks for your rating!',
    sending: 'Sending...',
    noResults: 'No tools found',
    categories: {
      vse: 'All',
      prodej: 'Sales & Simulation',
      asistenti: 'Assistants',
      analyza: 'Analytics',
      vzdelavani: 'Education',
    },
  },
} satisfies Record<Lang, {
  subtitle: (n: number) => string
  search: string
  openTool: string
  rate: string
  ratingTitle: string
  ratingFeedback: string
  submitRating: string
  skip: string
  thanks: string
  sending: string
  noResults: string
  categories: Record<string, string>
}>
