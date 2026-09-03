import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../theme'

/**
 * Przełącznik motywu jasny / ciemny.
 * Ikony słońca i księżyca płynnie się zamieniają (obrót + skalowanie);
 * przycisk ma czytelną etykietę dla czytników ekranu i stan `aria-pressed`.
 */
export function ThemeToggle({
  className = '',
  size = 'md',
}: {
  className?: string
  /** `md` — pasek nawigacji, `lg` — menu mobilne */
  size?: 'md' | 'lg'
}) {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'
  const label = isDark ? 'Włącz jasny motyw' : 'Włącz ciemny motyw'
  const dims = size === 'lg' ? 'h-14 w-14' : 'h-11 w-11'
  const icon = size === 'lg' ? 'h-6 w-6' : 'h-5 w-5'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      aria-pressed={isDark}
      className={`group relative inline-flex ${dims} shrink-0 items-center justify-center overflow-hidden rounded-full border border-line-2 bg-panel/70 text-light transition-all duration-200 hover:border-accent hover:text-accent hover:bg-panel ${className}`}
    >
      <Sun
        aria-hidden="true"
        data-theme-transition="none"
        className={`${icon} absolute transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
        }`}
      />
      <Moon
        aria-hidden="true"
        data-theme-transition="none"
        className={`${icon} absolute transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
        }`}
      />
    </button>
  )
}
