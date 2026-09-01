import { ArrowRight, Phone } from 'lucide-react'
import { company } from '../content/site'
import { Button, Container } from './ui'

/** Zielony pas z wezwaniem do działania — stosowany na końcu każdej podstrony. */
export function CtaBand({
  title = 'Potrzebujesz agregatu? Policzmy moc i dobierzmy urządzenie.',
  lead = 'Opisz nam swoje odbiorniki lub prześlij zdjęcia tablicy rozdzielczej — przygotujemy wycenę i termin dostawy w ciągu jednego dnia roboczego.',
}: {
  title?: string
  lead?: string
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0b7d4b] via-[#0c8a5a] to-[#0f766e] text-white">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: 'radial-gradient(40% 70% at 20% 20%, #ffffff 0%, transparent 70%), radial-gradient(40% 70% at 85% 0%, #ffffff 0%, transparent 70%)',
        }}
      />
      <Container className="relative py-16 sm:py-20">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl leading-[1] font-extrabold tracking-tight uppercase sm:text-5xl">
              {title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90 sm:text-base">{lead}</p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button to="/kontakt" size="lg" className="bg-white text-accent hover:bg-white/90">
              Zapytaj o wycenę
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button href={company.phoneHref} size="lg" variant="dark" className="border-white/50 bg-transparent text-white hover:border-white hover:text-white">
              <Phone className="h-5 w-5" />
              {company.phone}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
