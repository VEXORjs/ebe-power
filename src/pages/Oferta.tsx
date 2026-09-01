import { ArrowRight, Check, Phone, ShoppingCart } from 'lucide-react'
import { brands, company, faq, products, services } from '../content/site'
import { PageHero } from '../components/PageHero'
import { Accordion } from '../components/Accordion'
import { CtaBand } from '../components/CtaBand'
import { Seo } from '../components/Seo'
import { Button, Container, SectionHeading } from '../components/ui'
import { Reveal } from '../components/Reveal'

export function Oferta() {
  return (
    <>
      <Seo
        title="Oferta — agregaty prądotwórcze | EBE POWER"
        description="Agregaty przenośne 2–12 kW, stacjonarne 10–100 kVA, przemysłowe i kontenerowe 100–2000 kVA oraz używane po przeglądzie. Kalkulator doboru mocy i wycena."
        path="/oferta"
      />
      <PageHero
        crumb="Oferta"
        eyebrow="Sprzedaż agregatów"
        title="Agregaty prądotwórcze 2 kW – 2 MW"
        lead="Nowe i używane jednostki od sprawdzonych producentów. Każdą ofertę poprzedzamy kalkulacją mocy pod Twój profil odbiorników — możesz policzyć ją sam w kalkulatorze poniżej."
        image="/images/product-industrial.jpg"
      />

      {/* ================= SKLEP ONLINE ================= */}
      {company.shopUrl && (
        <section className="border-b border-line bg-accent/[0.06]">
          <Container className="flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-xl leading-tight font-extrabold tracking-wide uppercase">
                Wolisz kupić online? Zajrzyj do naszego sklepu
              </p>
              <p className="mt-2 text-sm leading-relaxed text-steel">
                Wybrane agregaty, akcesoria i części znajdziesz w sklepie internetowym{' '}
                <span className="font-semibold text-light">sklep.ebe-power.pl</span>.
              </p>
            </div>
            <Button href={company.shopUrl} external className="shrink-0">
              <ShoppingCart className="h-4 w-4" />
              Przejdź do sklepu
            </Button>
          </Container>
        </section>
      )}
      
      {/* ================= PRODUKTY ================= */}
      <section className="border-b border-line bg-ink-2 py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Kategorie"
              title="Cztery grupy urządzeń"
              lead="Każdą z nich konfigurujemy pod zastosowanie: obudowa, zbiornik, automatyką, monitoring."
            />
          </Reveal>

          <div className="mt-16 space-y-20">
            {products.map((p, i) => (
              <Reveal key={p.id} delay={i * 60}>
                <div
                  id={p.id}
                  className={`grid gap-10 lg:grid-cols-2 lg:items-center ${
                    i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div className="relative overflow-hidden border border-line">
                    <img src={p.image} alt={p.name} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                    <span className="font-display absolute top-4 left-4 bg-accent px-4 py-2 text-sm font-bold tracking-[0.12em] uppercase text-white">
                      {p.range}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-3xl leading-tight font-extrabold tracking-tight uppercase sm:text-4xl">
                      {p.name}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-steel sm:text-base">{p.lead}</p>

                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {p.features.map((f) => (
                        <li key={f} className="flex gap-2 text-sm text-light/85">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <dl className="mt-8 grid grid-cols-2 gap-px border border-line bg-line">
                      {p.specs.map((s) => (
                        <div key={s.label} className="rounded-xl bg-panel px-4 py-3">
                          <dt className="text-[11px] tracking-[0.12em] text-steel uppercase">{s.label}</dt>
                          <dd className="font-display mt-1 text-lg font-bold text-light">{s.value}</dd>
                        </div>
                      ))}
                    </dl>

                    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                      <span className="font-display text-xl font-extrabold text-accent">{p.priceFrom}</span>
                      <span className="text-xs text-steel">
                        Zastosowania: {p.applications.join(' · ')}
                      </span>
                    </div>

                    <div className="mt-7 flex flex-wrap gap-4">
                      <Button to={`/kontakt?model=${p.id}`}>
                        Zapytaj o ten model
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                      <Button href={company.phoneHref} variant="outline">
                        <Phone className="h-4 w-4" />
                        {company.phone}
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= USŁUGI ================= */}
      <section className="border-b border-line py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="W cenie każdej współpracy"
              title="Usługi towarzyszące"
              lead="Możesz wziąć sam agregat, ale większość klientów bierze całość — bo to jedna odpowiedzialność zamiast trzech."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <div className="card-dark h-full p-6">
                  <h3 className="font-display text-lg font-bold tracking-wide uppercase">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel">{s.lead}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= MARKI ================= */}
      <section className="border-b border-line bg-ink-2 py-16">
        <Container>
          <Reveal>
            <p className="text-center text-xs tracking-[0.2em] text-steel uppercase">
              Silniki, prądnice i sterowniki, które dostarczamy i serwisujemy
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
              {brands.map((b) => (
                <span
                  key={b}
                  className="font-display text-lg font-bold tracking-[0.14em] text-steel/70 uppercase transition-colors hover:text-accent"
                >
                  {b}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 sm:py-24">
        <Container width="narrow">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Pytania o zakup i dobór" align="center" />
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-12">
              <Accordion items={faq} />
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBand title="Nie wiesz, który model wybrać? My wiemy." />
    </>
  )
}
