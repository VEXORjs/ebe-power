import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { Container } from './ui'

/** Nagłówek podstron — ciemny pas z tłem, taśmą ostrzegawczą i okruszkami. */
export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  crumb,
  children,
}: {
  eyebrow?: string
  title: string
  lead?: string
  image?: string
  crumb: string
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-ink-2">
      {image && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
        </>
      )}
      <div className="grid-lines absolute inset-0" />
      <Container className="relative py-16 sm:py-24">
        <nav className="flex items-center gap-2 text-xs text-steel">
          <Link to="/" className="transition-colors hover:text-accent">
            Start
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-light">{crumb}</span>
        </nav>

        {eyebrow && (
          <div className="eyebrow mt-8">
            <span className="h-px w-8 bg-accent" />
            {eyebrow}
          </div>
        )}
        <h1 className="font-display mt-4 max-w-4xl text-4xl leading-[0.95] font-extrabold tracking-tight uppercase sm:text-5xl lg:text-7xl">
          {title}
        </h1>
        {lead && <p className="mt-6 max-w-2xl text-base leading-relaxed text-steel sm:text-lg">{lead}</p>}
        {children}
      </Container>
      <div className="hazard h-1.5 w-full" />
    </section>
  )
}
