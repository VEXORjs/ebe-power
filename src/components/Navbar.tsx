import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowRight, Clock, Mail, Menu, Phone, ShoppingCart, X } from 'lucide-react'
import { company, nav } from '../content/site'
import { Logo } from './Logo'
import { ThemeToggle } from './ThemeToggle'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      {/* Pasek z danymi kontaktowymi */}
      <div
        className={`hidden border-b border-line/70 bg-ink-2 lg:block ${
          scrolled ? 'h-0 overflow-hidden opacity-0' : 'h-11 opacity-100'
        } transition-all duration-300`}
      >
        <div className="mx-auto flex h-11 w-full max-w-7xl items-center justify-between px-8 text-xs text-steel">
          <div className="flex items-center gap-6">
            <a href={company.phoneHref} className="flex items-center gap-2 transition-colors hover:text-accent">
              <Phone className="h-3.5 w-3.5 text-accent" />
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-2 transition-colors hover:text-accent">
              <Mail className="h-3.5 w-3.5 text-accent" />
              {company.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-accent" />
            Pon–Pt {company.hours[0].time} · Pogotowie serwisowe 24/7
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? 'border-b border-line bg-panel/90 shadow-[0_10px_30px_-24px_rgba(12,60,40,0.6)] backdrop-blur-md dark:shadow-[0_10px_30px_-20px_rgba(0,0,0,0.8)]' : 'border-b border-transparent bg-panel/70 backdrop-blur'
        }`}
      >
        <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-5 sm:px-8">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `font-display relative px-4 py-2 text-[15px] font-semibold tracking-[0.08em] uppercase transition-colors ${
                    isActive ? 'text-accent' : 'text-light/85 hover:text-accent'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            {company.shopUrl && (
              <a
                href={company.shopUrl}
                target="_blank"
                rel="noreferrer"
                className="font-display relative flex items-center gap-1.5 px-4 py-2 text-[15px] font-semibold tracking-[0.08em] text-accent uppercase transition-colors hover:text-light"
              >
                <ShoppingCart className="h-4 w-4" />
                Sklep
              </a>
            )}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <ThemeToggle />
            <a
              href={company.phoneHref}
              className="font-display flex items-center gap-2 text-[15px] font-semibold tracking-wide text-light transition-colors hover:text-accent"
            >
              <Phone className="h-4 w-4 text-accent" />
              {company.phone}
            </a>
            <Link
              to="/kontakt"
              className="font-display inline-flex h-11 items-center gap-2 rounded-full bg-accent px-6 text-sm font-bold tracking-[0.12em] uppercase text-white shadow-[0_10px_24px_-10px_rgba(18,160,95,0.8)] transition-all hover:-translate-y-0.5 hover:bg-accent-2"
            >
              Zapytaj o wycenę
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line-2 text-light transition-colors hover:border-accent hover:text-accent"
              aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobilne */}
      <div
        className={`fixed inset-0 z-40 bg-ink lg:hidden ${open ? 'visible opacity-100' : 'invisible opacity-0'} transition-opacity duration-300`}
      >
        <div className="grid-lines flex h-full flex-col justify-between px-6 pt-28 pb-10">
          <nav className="flex flex-col">
            {nav.map((item, i) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `font-display flex items-center justify-between border-b border-line py-5 text-3xl font-extrabold tracking-wide uppercase ${
                    isActive ? 'text-accent' : 'text-light'
                  }`
                }
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {item.label}
                <ArrowRight className="h-6 w-6 text-accent" />
              </NavLink>
            ))}
          </nav>

          <div className="space-y-4">
            {company.shopUrl && (
              <a
                href={company.shopUrl}
                target="_blank"
                rel="noreferrer"
                className="font-display flex items-center justify-between border border-line-2 px-5 py-4 text-lg font-bold text-accent"
              >
                <span className="flex items-center gap-3">
                  <ShoppingCart className="h-5 w-5" />
                  Sklep online
                </span>
                <span className="text-sm font-semibold tracking-wide text-steel normal-case">
                  sklep.ebe-power.pl
                </span>
              </a>
            )}
            <a
              href={company.phoneHref}
              className="font-display flex items-center gap-3 border border-line-2 px-5 py-4 text-lg font-bold text-accent"
            >
              <Phone className="h-5 w-5" />
              {company.phone}
            </a>
            <Link
              to="/kontakt"
              className="font-display flex h-14 items-center justify-center rounded-full bg-accent text-base font-bold tracking-[0.12em] uppercase text-white"
            >
              Zapytaj o wycenę
            </Link>
            <p className="text-center text-xs text-steel">
              {company.street}, {company.postal} {company.city}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
