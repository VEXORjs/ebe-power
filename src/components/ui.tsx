import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

/* ---------------------------------------------------------------------------
 * Kontener sekcji
 * ------------------------------------------------------------------------ */
export function Container({
  children,
  className = '',
  width = 'default',
}: {
  children: ReactNode
  className?: string
  width?: 'default' | 'narrow' | 'wide'
}) {
  const max = width === 'narrow' ? 'max-w-3xl' : width === 'wide' ? 'max-w-[1500px]' : 'max-w-7xl'
  return <div className={`mx-auto w-full ${max} px-5 sm:px-8 ${className}`}>{children}</div>
}

/* ---------------------------------------------------------------------------
 * Etykieta / nagłówek sekcji
 * ------------------------------------------------------------------------ */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  light = false,
  className = '',
}: {
  eyebrow?: string
  title: ReactNode
  lead?: ReactNode
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}) {
  return (
    <div
      className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}
    >
      {eyebrow && (
        <div className={`eyebrow ${align === 'center' ? 'justify-center' : ''} mb-4`}>
          <span className="h-px w-8 bg-accent" />
          {eyebrow}
        </div>
      )}
      <h2
        className={`font-display text-4xl leading-[0.95] font-extrabold tracking-tight uppercase sm:text-5xl lg:text-6xl ${
          light ? 'text-ink' : 'text-light'
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${light ? 'text-ink/85' : 'text-steel'}`}>
          {lead}
        </p>
      )}
    </div>
  )
}

/* ---------------------------------------------------------------------------
 * Przycisk
 * ------------------------------------------------------------------------ */
type ButtonProps = {
  children: ReactNode
  to?: string
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'ghost' | 'dark'
  size?: 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  external?: boolean
}

const base =
  'font-display inline-flex items-center justify-center gap-2 font-bold uppercase tracking-[0.12em] transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50'

const sizes = {
  md: 'h-11 px-6 text-sm',
  lg: 'h-14 px-8 text-base',
}

const variants = {
  primary:
    'rounded-full bg-accent text-white shadow-[0_10px_24px_-10px_rgba(18,160,95,0.7)] hover:bg-accent-2 hover:-translate-y-0.5',
  outline: 'rounded-full border border-line-2 bg-panel/60 text-light hover:border-accent hover:text-accent hover:bg-panel',
  ghost: 'rounded-full text-light hover:text-accent',
  dark: 'rounded-full bg-white text-[#0c2119] border border-white/80 hover:border-white hover:bg-[#eaf4ee] hover:text-[#0a874a]',
}

export function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled,
  external,
}: ButtonProps) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a
        href={href}
        className={cls}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
      >
        {children}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={cls} disabled={disabled}>
      {children}
    </button>
  )
}

/* ---------------------------------------------------------------------------
 * Karta
 * ------------------------------------------------------------------------ */
export function Card({
  children,
  className = '',
  hover = true,
}: {
  children: ReactNode
  className?: string
  hover?: boolean
}) {
  return (
    <div
      className={`card-dark p-6 transition-all duration-300 ${
        hover ? 'hover:border-accent/60 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(12,60,40,0.45)] dark:hover:shadow-[0_18px_40px_-18px_rgba(0,0,0,0.8)]' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}

/* ---------------------------------------------------------------------------
 * Ikona w ramce
 * ------------------------------------------------------------------------ */
export function IconBadge({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10 text-accent ${className}`}
    >
      {children}
    </span>
  )
}
