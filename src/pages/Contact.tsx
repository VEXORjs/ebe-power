import { useSearchParams } from 'react-router-dom'
import { Clock, Mail, MapPin, Phone, Wrench } from 'lucide-react'
import { company, products } from '../content/site'
import { PageHero } from '../components/PageHero'
import { ContactForm } from '../components/ContactForm'
import { Seo } from '../components/Seo'
import { Container, SectionHeading } from '../components/ui'
import { Reveal } from '../components/Reveal'

export function Contact() {
  const [params] = useSearchParams()
  const power = params.get('moc') ? `${params.get('moc')} kVA` : undefined
  const modelId = params.get('model')
  const model = products.find((p) => p.id === modelId)

  return (
    <>
      <Seo
        title="Kontakt — EBE POWER, agregaty prądotwórcze"
        description="Zapytaj o agregat prądotwórczy: dobór mocy, wycena, termin dostawy, serwis. Telefon, e-mail i formularz kontaktowy EBE POWER."
        path="/kontakt"
      />
      <PageHero
        crumb="Kontakt"
        eyebrow="Zapytaj o ofertę"
        title="Opisz nam swoje zasilanie. Odpowiemy w jeden dzień."
        lead="Im więcej szczegółów, tym celniejsza wycena. Wystarczy lista odbiorników, miejsce montażu i oczekiwany termin — resztę policzymy sami."
        image="/images/product-stationary.jpg"
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr]">
            {/* --- Dane i formularz --- */}
            <div>
              <Reveal>
                <SectionHeading
                  eyebrow="Formularz"
                  title="Wyślij zapytanie"
                  lead={
                    model
                      ? `Pytasz o: ${model.name} (${model.range}). Dopisz szczegóły, a odpowiemy z wyceną.`
                      : 'Zostaw namiary i opis potrzeb — zadzwonimy z konkretną propozycją lub odpowiemy mailowo.'
                  }
                />
              </Reveal>
              <Reveal delay={80}>
                <div className="mt-8">
                  <ContactForm power={power} />
                </div>
              </Reveal>
            </div>

            {/* --- Dane kontaktowe --- */}
            <aside className="space-y-6 lg:sticky lg:top-28 lg:h-fit">
              <Reveal>
                <div className="card-dark p-7">
                  <h2 className="font-display text-xl font-extrabold tracking-wide uppercase">
                    Dane kontaktowe
                  </h2>
                  <ul className="mt-6 space-y-5 text-sm">
                    <li>
                      <p className="text-[11px] tracking-[0.16em] text-steel uppercase">Biuro / sprzedaż</p>
                      <a
                        href={company.phoneHref}
                        className="font-display mt-1 flex items-center gap-3 text-xl font-bold text-light transition-colors hover:text-accent"
                      >
                        <Phone className="h-4 w-4 text-accent" />
                        {company.phone}
                      </a>
                      <a
                        href={`mailto:${company.email}`}
                        className="mt-2 flex items-center gap-3 text-steel transition-colors hover:text-accent"
                      >
                        <Mail className="h-4 w-4 text-accent" />
                        {company.email}
                      </a>
                    </li>
                    {company.phoneSecondary && (
                    <li className="border-t border-line pt-5">
                      <p className="text-[11px] tracking-[0.16em] text-steel uppercase">Serwis / awarie</p>
                      <a
                        href={`tel:${company.phoneSecondary.replace(/\s/g, '')}`}
                        className="font-display mt-1 flex items-center gap-3 text-xl font-bold text-accent"
                      >
                        <Wrench className="h-4 w-4" />
                        {company.phoneSecondary}
                      </a>
                      <a
                        href={`mailto:${company.emailService}`}
                        className="mt-2 flex items-center gap-3 text-steel transition-colors hover:text-accent"
                      >
                        <Mail className="h-4 w-4 text-accent" />
                        {company.emailService}
                      </a>
                      <p className="mt-2 text-xs text-steel">Dyżur całodobowy, 7 dni w tygodniu.</p>
                    </li>
                    )}
                    <li className="border-t border-line pt-5">
                      <p className="text-[11px] tracking-[0.16em] text-steel uppercase">Adres firmy</p>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.mapQuery)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 flex items-start gap-3 text-light transition-colors hover:text-accent"
                      >
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>
                          {company.street}
                          <br />
                          {company.postal} {company.city}
                          <br />
                          <span className="text-steel">{company.region}</span>
                        </span>
                      </a>
                    </li>
                    <li className="border-t border-line pt-5">
                      <p className="text-[11px] tracking-[0.16em] text-steel uppercase">Siedziba</p>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.mapQueryHq)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 flex items-start gap-3 text-light transition-colors hover:text-accent"
                      >
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>
                          {company.hq}
                          <br />
                          {company.postal} {company.city}
                          <br />
                          <span className="text-steel">{company.region}</span>
                        </span>
                      </a>
                    </li>
                    <li className="border-t border-line pt-5">
                      <p className="flex items-center gap-2 text-[11px] tracking-[0.16em] text-steel uppercase">
                        <Clock className="h-3.5 w-3.5 text-accent" />
                        Godziny otwarcia
                      </p>
                      <dl className="mt-3 space-y-2">
                        {company.hours.map((h) => (
                          <div key={h.days} className="flex justify-between gap-4 text-sm">
                            <dt className="text-steel">{h.days}</dt>
                            <dd className="tabular text-light">{h.time}</dd>
                          </div>
                        ))}
                      </dl>
                    </li>
                  </ul>
                </div>
              </Reveal>

              {company.mapEmbed && (
                <Reveal delay={80}>
                  <div className="overflow-hidden border border-line">
                    <iframe
                      title={`Mapa — ${company.name}`}
                      src={company.mapEmbed}
                      className="h-64 w-full grayscale-[0.4]"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </Reveal>
              )}

              <Reveal delay={120}>
                <div className="rounded-3xl border border-line bg-panel p-6">
                  <p className="text-[11px] tracking-[0.16em] text-steel uppercase">Dane firmy</p>
                  <dl className="mt-4 space-y-2 text-xs text-steel">
                    <div className="flex justify-between gap-4">
                      <dt>Firma</dt>
                      <dd className="text-right text-light">{company.legalName}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt>NIP</dt>
                      <dd className="tabular text-light">{company.nip}</dd>
                    </div>
                    {company.regon && (
                      <div className="flex justify-between gap-4">
                        <dt>REGON</dt>
                        <dd className="tabular text-light">{company.regon}</dd>
                      </div>
                    )}
                    {company.krs && (
                      <div className="flex justify-between gap-4">
                        <dt>KRS</dt>
                        <dd className="tabular text-light">{company.krs}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </section>
    </>
  )
}
