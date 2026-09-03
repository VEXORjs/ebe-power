import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

/* =============================================================================
 *  Motyw jasny / ciemny
 * -----------------------------------------------------------------------------
 *  • Źródło prawdy to klasa `dark` na <html> (Tailwind: @custom-variant dark).
 *  • Wybór użytkownika trafia do localStorage pod kluczem `ebe-theme`;
 *    brak wpisu = „auto” (podążaj za ustawieniem systemowym).
 *  • Skrypt inline w index.html ustawia klasę ZANIM załaduje się React,
 *    dzięki czemu przy odświeżeniu strony nie ma mignięcia jasnego tła.
 * ========================================================================== */

export type Theme = 'light' | 'dark'
export type ThemePreference = Theme | 'auto'

export const THEME_STORAGE_KEY = 'ebe-theme'

const THEME_COLORS: Record<Theme, string> = {
  light: '#f5faf7',
  dark: '#0b1210',
}

function readStoredPreference(): ThemePreference {
  try {
    const raw = window.localStorage.getItem(THEME_STORAGE_KEY)
    return raw === 'light' || raw === 'dark' ? raw : 'auto'
  } catch {
    return 'auto'
  }
}

function systemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function resolveTheme(pref: ThemePreference): Theme {
  return pref === 'auto' ? systemTheme() : pref
}

/** Nakłada motyw na dokument (klasa + kolor paska przeglądarki). */
function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.classList.toggle('dark', theme === 'dark')
  root.style.colorScheme = theme
  document.head
    .querySelector<HTMLMetaElement>('meta[name="theme-color"]')
    ?.setAttribute('content', THEME_COLORS[theme])
}

type ThemeContextValue = {
  /** Aktualnie wyrenderowany motyw. */
  theme: Theme
  /** Co wybrał użytkownik (`auto` = zgodnie z systemem). */
  preference: ThemePreference
  setPreference: (pref: ThemePreference) => void
  /** Przełącza jasny ↔ ciemny (zapisuje jawny wybór). */
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreferenceState] = useState<ThemePreference>(() =>
    typeof window === 'undefined' ? 'auto' : readStoredPreference(),
  )
  const [theme, setTheme] = useState<Theme>(() =>
    typeof window === 'undefined' ? 'light' : resolveTheme(readStoredPreference()),
  )

  /* Nakładamy motyw, gdy zmieni się preferencja. */
  useEffect(() => {
    const next = resolveTheme(preference)
    setTheme(next)
    applyTheme(next)
  }, [preference])

  /* W trybie „auto” reagujemy na zmianę ustawienia systemowego. */
  useEffect(() => {
    if (preference !== 'auto') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      const next = systemTheme()
      setTheme(next)
      applyTheme(next)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [preference])

  /* Synchronizacja między kartami przeglądarki. */
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === THEME_STORAGE_KEY) setPreferenceState(readStoredPreference())
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const setPreference = useCallback((pref: ThemePreference) => {
    try {
      if (pref === 'auto') window.localStorage.removeItem(THEME_STORAGE_KEY)
      else window.localStorage.setItem(THEME_STORAGE_KEY, pref)
    } catch {
      /* tryb prywatny / zablokowany storage — motyw zadziała do odświeżenia */
    }
    setPreferenceState(pref)
  }, [])

  const toggle = useCallback(() => {
    const next: Theme = document.documentElement.classList.contains('dark') ? 'light' : 'dark'
    const root = document.documentElement
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!reduceMotion) {
      /* Krótkie, płynne przejście kolorów — klasa zdejmowana po animacji. */
      root.classList.add('theme-transition')
      window.setTimeout(() => root.classList.remove('theme-transition'), 350)
    }
    setPreference(next)
  }, [setPreference])

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, preference, setPreference, toggle }),
    [theme, preference, setPreference, toggle],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme() wymaga <ThemeProvider> wyżej w drzewie')
  return ctx
}
