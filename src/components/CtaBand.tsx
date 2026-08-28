import { ArrowRight, Phone } from 'lucide-react'
import { company } from '../content/site'
import { Button, Container } from './ui'

/** Żółty pas z wezwaniem do działania — stosowany na końcu każdej podstrony. */
export function CtaBand({
  title = 'Potrzebujesz agregatu? Policzmy moc i dobierzmy urządzenie.',
  lead = 'Opisz nam swoje odbiorniki lub prześlij zdjęcia tablicy rozdzielczej — przygotujemy wycenę i termin dostawy w ciągu jednego dnia roboczego.',
}: {
  title?: string
  lead?: string
}) {
  return (
    <section className="relative overflow-hidden bg-accent text-ink">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #070b12 0 2px, transparent 2px 14px)',
        }}
      />
      <Container className="relative py-16 sm:py-20">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl leading-[1] font-extrabold tracking-tight uppercase sm:text-5xl">
              {title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/75 sm:text-base">{lead}</p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button to="/kontakt" size="lg" className="bg-ink text-light hover:bg-ink-2">
              Zapytaj o wycenę
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button href={company.phoneHref} size="lg" variant="dark" className="border-ink/30 text-ink hover:border-ink hover:text-ink">
              <Phone className="h-5 w-5" />
              {company.phone}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
