# PS AI Tools – Project Context

## Co je to za projekt
PWA (Progressive Web App) = mobilní aplikace bez App Store, dostupná přes prohlížeč.
Slouží jako rozcestník AI nástrojů pro prodejní síť Alza PS.
Zaměstnanci si ji přidají na plochu telefonu a mají všechny AI nástroje na jednom místě.

## Živá aplikace
- **URL:** https://alza-ps-ai-tools.vercel.app
- **QR stránka:** https://alza-ps-ai-tools.vercel.app/qr
- **GitHub:** https://github.com/Myslivka4/alza-ps-ai-tools
- **Vercel:** vercel.com – projekt alza-ps-ai-tools (účet Myslivka4)
- **Supabase:** supabase.com – projekt alza-ps-ai-tools (org: Alza PS)

## Tech stack
- **Frontend:** Next.js 15 + React 19 + TypeScript + Tailwind CSS
- **Hosting:** Vercel (free tier, auto-deploy z GitHub při každém push)
- **Databáze:** Supabase (free tier, PostgreSQL)
- **PWA:** manifest.json + meta tagy (bez service workeru)
- **i18n:** vlastní řešení v src/lib/i18n.ts (CS/SK/HU/EN)

## Barevné schéma (Alza brand)
- Tmavá navy: `#222464`
- Ještě tmavší pozadí: `#1a1b50`
- Limetková zelená (CTA): `#aaff00`
- Karty nástrojů: bílé `#ffffff`

## Struktura projektu
```
src/
  app/
    layout.tsx          – PWA metadata, ClientLayout wrapper
    page.tsx            – Hlavní stránka (grid nástrojů)
    globals.css         – Globální styly + animace
    qr/page.tsx         – QR kód stránka pro sdílení
  components/
    ToolCard.tsx        – Karta jednoho nástroje
    RatingModal.tsx     – Modal pro hvězdičkové hodnocení
    SearchBar.tsx       – Vyhledávací pole
    CategoryFilter.tsx  – Filtry kategorií
    LanguageSwitcher.tsx – Přepínač jazyků (CS/SK/HU/EN)
    ClientLayout.tsx    – Client wrapper pro LanguageProvider
  contexts/
    LanguageContext.tsx – React context pro jazyk
  lib/
    tools.ts            – Data všech 14 nástrojů (vícejazyčné)
    i18n.ts             – Překlady UI textů do 4 jazyků
    supabase.ts         – Supabase client (volitelný)
    session.ts          – Anonymní session ID (localStorage)
public/
  manifest.json         – PWA manifest
  icon-192.svg          – Ikona aplikace
  icon-512.svg          – Ikona aplikace
supabase-schema.sql     – SQL pro vytvoření tabulek
.env.local.example      – Šablona pro Supabase credentials
```

## Supabase tabulky
- `tool_interactions` – záznamy kdy kdo otevřel jaký nástroj
- `tool_ratings` – hvězdičková hodnocení + textová zpětná vazba
- View `tool_stats` – agregovaný přehled (open_count, unique_users, avg_rating)

## Environment variables (Vercel)
```
NEXT_PUBLIC_SUPABASE_URL=https://zgnnsdlriwevzcdganfz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
```
Bez těchto proměnných aplikace funguje, jen se neukládají data.

## Nástroje v aplikaci (14 celkem)
| ID | Název | Platforma | Kategorie |
|----|-------|-----------|-----------|
| alzagen | AlzaGen | alzagen | asistenti |
| alza-ps-partak | Alza PS Parťák | chatgpt | prodej |
| prodejni-coach-5p | Prodejní Coach – 5P | chatgpt | prodej |
| simulator-prodeje | Simulátor prodeje | chatgpt | prodej |
| alzakacka | Alzakačka | codepen | analyza |
| apf-prehled | ApF přehled a benefity | notebooklm | vzdelavani |
| apf-trenazer | ApF trenažér | chatgpt | prodej |
| alza-asistent-sluzeb | Alza asistent prodeje služeb | chatgpt | asistenti |
| trener-sluzeb | Trenér služeb | chatgpt | prodej |
| ps-navigator | PS Navigátor | alzagen | asistenti |
| zaneta-p7 | Žaneta – vševěd pro P7 | notebooklm | asistenti |
| paybox-guru | Paybox GURU | notebooklm | asistenti |
| asistent-ap | Asistent pro AP | notebooklm | asistenti |
| datovy-analytik | Datový analytik | chatgpt | analyza |

## Jak přidat nový nástroj
Upravit `src/lib/tools.ts` – přidat objekt do pole `tools[]`:
```typescript
{
  id: 'unikatni-id',
  name: 'Název nástroje',
  url: 'https://...',
  descriptions: {
    cs: 'Český popis',
    sk: 'Slovenský popis',
    hu: 'Magyar leírás',
    en: 'English description',
  },
  category: 'prodej' | 'asistenti' | 'analyza' | 'vzdelavani',
  platform: 'alzagen' | 'chatgpt' | 'notebooklm' | 'codepen',
  emoji: '🔧',
}
```
Pak: `git add -A && git commit -m "Add: nazev nastroje" && git push`

## Deploy workflow
1. Upravit soubory lokálně
2. `git add -A && git commit -m "popis změny" && git push`
3. Vercel automaticky nasadí za ~1 minutu
4. Uživatelé vidí změnu při příštím otevření aplikace

## Co ještě není implementováno (plánované funkce)
- [ ] Přihlašování zaměstnanců (Azure AD SSO nebo magic link)
- [ ] Řazení nástrojů dle popularity (open_count ze Supabase)
- [ ] Časové sledování (jak dlouho uživatel strávil v nástroji)
- [ ] Stránka /stats s přehledem využití
- [ ] Push notifikace / týdenní souhrn
- [ ] Vercel Analytics (@vercel/analytics již v package.json)

## Známé limity
- Session ID v localStorage není skutečná identita – bez auth nelze přesně identifikovat uživatele
- Ikona na ploše telefonu se neaktualizuje automaticky – uživatel musí odstranit a přidat znovu
- ChatGPT, NotebookLM, AlzaGen jsou externí – obsah jejich konverzací nelze logovat
- Firemní proxy Alzy blokuje vercel.com dashboard – spravovat z domova nebo na mobilu
