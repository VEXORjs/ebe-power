import { Link } from 'react-router-dom'
import { Clock, ExternalLink, Mail, MapPin, Phone } from 'lucide-react'
import { company, nav, products, services } from '../content/site'
import { Container } from './ui'
import { Logo, LogoMark } from './Logo'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-ink-2">
      <div className="hazard h-1.5 w-full" />
      <Container className="pt-16 pb-28 lg:pb-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Marka */}
          <div>
            <div className="flex items-center gap-3">
              <LogoMark className="h-10 w-20" />
              <span className="font-display text-2xl font-extrabold tracking-[0.14em] text-light">
                EBE<span className="text-accent">POWER</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-steel">
              Sprzedaż agregatów prądotwórczych od {String(company.founded)} roku. Dobór mocy, dostawa,
              montaż, automatykę i serwis realizujemy jednym zespołem.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.mapQuery)}`}
                target="_blank"
                rel="noreferrer"
                className="flex gap-3 text-steel transition-colors hover:text-accent"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  {company.street}
                  <br />
                  {company.postal} {company.city}
                </span>
              </a>
              <a href={company.phoneHref} className="flex items-center gap-3 text-steel transition-colors hover:text-accent">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                {company.phone}
              </a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-3 text-steel transition-colors hover:text-accent">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                {company.email}
              </a>
            </div>
          </div>

          {/* Nawigacja */}
          <div>
            <h3 className="font-display text-sm font-bold tracking-[0.2em] text-light uppercase">Strona</h3>
            <ul className="mt-5 space-y-3 text-sm text-steel">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition-colors hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
              {company.shopUrl && (
                <li>
                  <a
                    href={company.shopUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-accent transition-colors hover:text-light"
                  >
                    Sklep internetowy
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </li>
              )}
              <li>
                <Link to="/polityka-prywatnosci" className="transition-colors hover:text-accent">
                  Polityka prywatności
                </Link>
              </li>
            </ul>
          </div>

          {/* Oferta */}
          <div>
            <h3 className="font-display text-sm font-bold tracking-[0.2em] text-light uppercase">Oferta</h3>
            <ul className="mt-5 space-y-3 text-sm text-steel">
              {products.map((p) => (
                <li key={p.id}>
                  <Link to="/oferta" className="transition-colors hover:text-accent">
                    {p.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/oferta#kalkulator" className="transition-colors hover:text-accent">
                  Kalkulator doboru mocy
                </Link>
              </li>
              <li className="pt-1 text-xs text-steel/70">{services.length} usług towarzyszących</li>
            </ul>
          </div>

          {/* Godziny */}
          <div>
            <h3 className="font-display text-sm font-bold tracking-[0.2em] text-light uppercase">
              Godziny otwarcia
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-steel">
              {company.hours.map((h) => (
                <li key={h.days} className="flex items-baseline justify-between gap-4 border-b border-line/60 pb-2">
                  <span>{h.days}</span>
                  <span className="tabular text-light">{h.time}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center gap-2 text-xs text-accent">
              <Clock className="h-4 w-4" />
              Pogotowie energetyczne — całą dobę
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 text-xs text-steel md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {company.legalName}. Wszelkie prawa zastrzeżone.
          </p>
          <p className="tabular">
            NIP: {company.nip}
            {company.regon && <> · REGON: {company.regon}</>}
            {company.krs && <> · KRS: {company.krs}</>}
          </p>
        </div>
      </Container>
    </footer>
  )
}
