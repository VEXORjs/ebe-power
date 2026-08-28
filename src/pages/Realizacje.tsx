import { Gallery } from '../components/Gallery'
import { PageHero } from '../components/PageHero'
import { CtaBand } from '../components/CtaBand'
import { Seo } from '../components/Seo'
import { Container } from '../components/ui'
import { Counter, Reveal } from '../components/Reveal'
import { projects, stats } from '../content/site'

export function Realizacje() {
  return (
    <>
      <Seo
        title="Realizacje — dostarczone agregaty prądotwórcze | EBE POWER"
        description="Wybrane realizacje EBE POWER: zasilanie rezerwowe zakładów produkcyjnych, agregaty budowlane, eventy i placówki medyczne."
        path="/realizacje"
      />
      <PageHero
        crumb="Realizacje"
        eyebrow="Portfolio"
        title="Agregaty, które już pracują w Polsce"
        lead="Każda realizacja to inna skala problemu: inna moc, inne przyłącze, inny czas reakcji. Wybrane projekty z ostatnich lat — z opisem zakresu, który za nimi stoi."
        image="/images/real-1.jpg"
      />

      <section className="border-b border-line bg-ink-2 py-10">
        <Container>
          <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dd className="font-display text-4xl font-extrabold text-accent">
                  <Counter to={s.value} />
                  <span className="text-2xl">{s.suffix}</span>
                </dd>
                <dt className="mt-2 text-xs leading-tight text-steel">{s.label}</dt>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Reveal>
          <Gallery />
        </Reveal>
        <Container className="mt-10">
          <p className="text-xs text-steel">
            Wyświetlanych realizacji: {projects.length}. Zdjęcia i opisy mają charakter
            poglądowy — uzupełnij je o własne projekty w pliku{' '}
            <code className="text-accent">src/content/site.ts</code>.
          </p>
        </Container>
      </section>

      <CtaBand
        title="Chcesz podobną realizację u siebie?"
        lead="Opisz nam miejsce montażu i odbiorniki. Przygotujemy propozycję wraz z terminem dostawy i kosztem montażu."
      />
    </>
  )
}
