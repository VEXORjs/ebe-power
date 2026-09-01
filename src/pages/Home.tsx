import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import {
  ArrowRight,
  ArrowDown,
  BadgeCheck,
  Calculator,
  Phone,
  Quote,
  ShieldCheck,
  ShoppingCart,
  Truck,
  Zap,
} from 'lucide-react'
import {
  advantages,
  applications,
  brands,
  company,
  faq,
  process,
  products,
  projects,
  services,
  stats,
  testimonials,
} from '../content/site'
import { Button, Container, IconBadge, SectionHeading } from '../components/ui'
import { Reveal, Counter } from '../components/Reveal'
import { Accordion } from '../components/Accordion'
import { CtaBand } from '../components/CtaBand'
import { Seo, LocalBusinessJsonLd } from '../components/Seo'
import { Gauge as GaugeIcon, Package, Settings2, FileText, Wrench } from 'lucide-react'

const serviceIcons: Record<string, ReactNode> = {
  gauge: <GaugeIcon className="h-6 w-6" />,
  package: <Package className="h-6 w-6" />,
  truck: <Truck className="h-6 w-6" />,
  wrench: <Wrench className="h-6 w-6" />,
  settings: <Settings2 className="h-6 w-6" />,
  file: <FileText className="h-6 w-6" />,
}

export function Home() {
  return (
    <>
      <Seo
        title="EBE POWER — agregaty prądotwórcze. Sprzedaż, dobór, serwis"
        description="Sprzedaż agregatów prądotwórczych od 2 kW do 2 MW. Dobór mocy, montaż, automatyka SZR i serwis 24/7. Sprawdź ofertę EBE POWER."
        path="/"
      />
      <LocalBusinessJsonLd
        name={company.name}
        legalName={company.legalName}
        phone={company.phone}
        email={company.email}
        street={company.street}
        postal={company.postal}
        city={company.city}
        description={company.short}
        image="/images/hero.jpg"
      />

      {/* ================= HERO ================= */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden border-b border-line">
        <img
          src="/images/hero.jpg"
          alt="Kontenerowy agregat prądotwórczy EBE POWER"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06251a]/95 via-[#06251a]/80 to-[#06251a]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06251a]/90 via-transparent to-[#06251a]/50" />
        <div className="grid-lines absolute inset-0 opacity-30" />

        <Container className="relative py-24">
          <Reveal>
            <div className="eyebrow text-teal">
              <span className="h-px w-10 bg-teal" />
              Agregaty prądotwórcze · sprzedaż · serwis
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display mt-6 max-w-4xl text-[13vw] leading-[0.88] font-extrabold tracking-tight text-white uppercase sm:text-6xl lg:text-8xl">
              Energia, która
              <br />
              <span className="bg-gradient-to-r from-[#4ade80] to-[#2dd4bf] bg-clip-text text-transparent">nie zatrzyma</span>
              <br />
              Twojego biznesu
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              Sprzedajemy agregaty prądotwórcze od 2&nbsp;kW do 2&nbsp;MW — od lekkich generatorów
              budowlanych po kontenerowe elektrownie dla przemysłu. Dobór mocy, dostawa, montaż,
              automatykę i serwis realizujemy jednym zespołem.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button to="/oferta" size="lg">
                Zobacz ofertę
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button to="/oferta#kalkulator" size="lg" variant="outline" className="border-white/40 bg-white/10 text-white backdrop-blur hover:border-white hover:bg-white/20 hover:text-white">
                <Calculator className="h-5 w-5" />
                Policz moc agregatu
              </Button>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-10 flex items-center gap-3 text-sm text-white/75">
              <Phone className="h-4 w-4 text-teal" />
              Lub zadzwoń:{' '}
              <a href={company.phoneHref} className="font-semibold text-white hover:text-teal">
                {company.phone}
              </a>
            </div>
          </Reveal>

          <a
            href="#o-nas"
            className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] tracking-[0.3em] text-white/60 uppercase transition-colors hover:text-white lg:flex"
          >
            Przewiń
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </Container>

        {/* Pasek liczb */}
        <div className="absolute inset-x-0 bottom-0 hidden border-t border-white/15 bg-white/10 backdrop-blur-md lg:block">
          <Container>
            <dl className="grid grid-cols-4 divide-x divide-white/15">
              {stats.map((s) => (
                <div key={s.label} className="flex items-baseline gap-3 px-2 py-5">
                  <dd className="font-display text-3xl font-extrabold text-white">
                    <Counter to={s.value} />
                    <span className="text-xl">{s.suffix}</span>
                  </dd>
                  <dt className="max-w-[140px] text-[11px] leading-tight text-white/70">{s.label}</dt>
                </div>
              ))}
            </dl>
          </Container>
        </div>
      </section>

      {/* ================= O NAS ================= */}
      <section id="o-nas" className="border-b border-line py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <div className="relative">
                <img
                  src="/images/about-warehouse.jpg"
                  alt="Magazyn i serwis agregatów prądotwórczych EBE POWER"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 border-l-2 border-t-2 border-accent sm:block" />
                <div className="absolute -top-4 -left-4 rounded-2xl bg-accent px-5 py-4 text-white">
                  <p className="font-display text-3xl leading-none font-extrabold">
                    {new Date().getFullYear() - company.founded}
                  </p>
                  <p className="mt-1 text-[10px] font-bold tracking-[0.16em] uppercase">lat w branży</p>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <SectionHeading
                  eyebrow="O firmie"
                  title={
                    <>
                      Nie sprzedajemy pudeł.
                      <br />
                      <span className="text-accent">Dostarczamy pewność zasilania.</span>
                    </>
                  }
                  lead={`${company.name} to zespół praktyków: elektromechaników i automatyków, którzy na co dzień dobierają, montują i serwisują agregaty prądotwórcze. Zaczynamy od analizy Twoich odbiorników, a kończymy na teście pod obciążeniem i szkoleniach obsługi.`}
                />
              </Reveal>
              <Reveal delay={100}>
                <ul className="mt-8 space-y-4">
                  {[
                    'Kalkulacja mocy z uwzględnieniem prądów rozruchowych i jednoczesności',
                    'Urządzenia od sprawdzonych producentów, dostępność części przez lata',
                    'Montaż, automatyka SZR i rozruch pod obciążeniem u klienta',
                    'Serwis gwarancyjny, przeglądy okresowe i pogotowie 24/7',
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-steel sm:text-base">
                      <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={180}>
                <div className="mt-9 flex flex-wrap gap-4">
                  <Button to="/o-firmie" variant="outline">
                    Poznaj firmę
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button to="/realizacje" variant="ghost">
                    Zobacz realizacje
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= OFERTA ================= */}
      <section className="border-b border-line bg-ink-2 py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <SectionHeading
                eyebrow="Oferta"
                title="Agregaty dopasowane do skali zadania"
                lead="Cztery grupy urządzeń — od generatora, który zmieści się w bagażniku, po kontenerową elektrownię zasilającą cały zakład."
              />
              <div className="flex flex-wrap gap-4">
                <Button to="/oferta" variant="outline" className="shrink-0">
                  Pełna oferta
                  <ArrowRight className="h-4 w-4" />
                </Button>
                {company.shopUrl && (
                  <Button href={company.shopUrl} external variant="ghost" className="shrink-0">
                    <ShoppingCart className="h-4 w-4" />
                    Sklep online
                  </Button>
                )}
              </div>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {products.map((p, i) => (
              <Reveal key={p.id} delay={i * 90}>
                <Link
                  to="/oferta"
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-panel shadow-[0_10px_30px_-22px_rgba(12,60,40,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_20px_44px_-22px_rgba(12,60,40,0.45)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent" />
                    <span className="font-display absolute top-4 left-4 bg-accent px-3 py-1 text-xs font-bold tracking-[0.12em] uppercase text-white">
                      {p.range}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-2xl font-extrabold tracking-wide uppercase">
                      {p.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-steel">{p.lead}</p>
                    <ul className="mt-5 space-y-2">
                      {p.features.slice(0, 3).map((f) => (
                        <li key={f} className="flex gap-2 text-xs text-light/80">
                          <Zap className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
                      <span className="text-xs font-semibold tracking-wide text-accent uppercase">
                        {p.priceFrom}
                      </span>
                      <span className="font-display inline-flex items-center gap-2 text-xs font-bold tracking-[0.14em] uppercase text-light transition-colors group-hover:text-accent">
                        Szczegóły
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= USŁUGI ================= */}
      <section className="border-b border-line py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Usługi"
              title="Wszystko poza samą sprzedażą"
              lead="Agregat to połowa sukcesu. Druga połowa to właściwy dobór, poprawny montaż i serwis, który działa wtedy, kiedy go potrzebujesz."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <div className="card-dark h-full p-7">
                  <IconBadge>{serviceIcons[s.icon]}</IconBadge>
                  <h3 className="font-display mt-5 text-xl font-bold tracking-wide uppercase">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel">{s.lead}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= ZASTOSOWANIA ================= */}
      <section className="border-b border-line bg-ink-2 py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Zastosowania"
              title="Zasilamy te miejsca, w których prąd musi być"
              lead="Od placu budowy przez linię produkcyjną po salę operacyjną. Każde z tych miejsc ma inne wymagania — dobieramy urządzenie pod nie."
              align="center"
            />
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((a, i) => (
              <Reveal key={a.title} delay={i * 60}>
                <div className="group relative aspect-[4/5] overflow-hidden border border-line">
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06251a]/90 via-[#06251a]/35 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-2xl font-extrabold tracking-wide text-white uppercase">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/80">{a.lead}</p>
                  </div>
                  <span className="absolute top-4 left-4 h-8 w-1 bg-accent" />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= DLACZEGO MY ================= */}
      <section className="border-b border-line py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <SectionHeading
                eyebrow="Dlaczego EBE POWER"
                title={
                  <>
                    Dobra rada techniczna
                    <br />
                    <span className="text-accent">jest tańsza niż przestój</span>
                  </>
                }
              />
              <div className="mt-8 space-y-4 text-sm leading-relaxed text-steel">
                <p>
                  Źle dobrany agregat to koszt, który wychodzi dopiero w momencie awarii: za mała moc
                  nie przyjmuje udarów rozruchowych, a przewymiarowany kopci i zużywa się przy małym
                  obciążeniu.
                </p>
                <p>
                  Dlatego zanim dostaniesz ofertę, rozmawiamy o Twoim profilu zużycia. To oszczędza
                  pieniądze nam obu — i działa, gdy naprawdę braknie sieci.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-8 w-8 text-accent" />
                  <span className="text-xs leading-tight text-steel">
                    Gwarancja
                    <br />
                    i serwis
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="h-8 w-8 text-accent" />
                  <span className="text-xs leading-tight text-steel">
                    Transport
                    <br />
                    i montaż
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-8 w-8 text-accent" />
                  <span className="text-xs leading-tight text-steel">
                    Pogotowie
                    <br />
                    24/7
                  </span>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2">
              {advantages.map((a, i) => (
                <Reveal key={a.title} delay={i * 70}>
                  <div className="h-full rounded-2xl border border-line border-l-4 border-l-accent/60 bg-panel p-6 transition-colors hover:border-l-accent">
                    <span className="font-display text-xs font-bold tracking-[0.2em] text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display mt-3 text-lg leading-tight font-bold tracking-wide uppercase">
                      {a.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-steel">{a.lead}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ================= PROCES ================= */}
      <section className="border-b border-line bg-ink-2 py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Jak pracujemy"
              title="Cztery kroki od zapytania do uruchomienia"
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 90}>
                <div className="relative h-full border-t-2 border-accent pt-6">
                  <span className="font-display text-5xl leading-none font-extrabold text-steel/60">
                    {p.step}
                  </span>
                  <h3 className="font-display mt-4 text-lg font-bold leading-tight tracking-wide uppercase">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel">{p.lead}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= REALIZACJE ================= */}
      <section className="border-b border-line py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <SectionHeading
                eyebrow="Realizacje"
                title="Agregaty, które już pracują"
                lead="Wybrane dostawy i uruchomienia z ostatnich lat — od budowy po szpital."
              />
              <Button to="/realizacje" variant="outline" className="shrink-0">
                Wszystkie realizacje
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="group relative aspect-[4/5] overflow-hidden border border-line">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06251a]/90 via-[#06251a]/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="font-display text-[11px] font-bold tracking-[0.16em] text-mint uppercase">
                      {p.category} · {p.year}
                    </span>
                    <h3 className="font-display mt-2 text-xl leading-tight font-extrabold tracking-wide text-white uppercase">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-xs text-white/75">{p.unit}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= OPINIE ================= */}
      <section className="border-b border-line bg-white py-20 text-light sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Opinie klientów"
              title="Co mówią ci, którym już zasililiśmy biznes"
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <figure className="flex h-full flex-col rounded-3xl border border-line bg-ink p-7 shadow-[0_16px_40px_-24px_rgba(12,60,40,0.4)]">
                  <Quote className="h-8 w-8 text-accent" />
                  <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-steel">
                    {t.text}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-line pt-5">
                    <p className="font-display text-lg font-extrabold tracking-wide uppercase">{t.name}</p>
                    <p className="mt-1 text-xs text-steel">{t.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= MARKI ================= */}
      <section className="border-b border-line py-16">
        <Container>
          <Reveal>
            <p className="text-center text-xs tracking-[0.2em] text-steel uppercase">
              Dostarczamy i serwisujemy urządzenia marek
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
              {brands.map((b) => (
                <span
                  key={b}
                  className="font-display text-lg font-bold tracking-[0.14em] text-steel uppercase transition-colors hover:text-accent"
                >
                  {b}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ================= FAQ ================= */}
      <section className="border-b border-line bg-ink-2 py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <SectionHeading eyebrow="FAQ" title="Najczęstsze pytania" />
              <p className="mt-6 text-sm text-steel">
                Nie znalazłeś odpowiedzi? Zadzwoń lub napisz — odpowiemy konkretnie, bez
                marketingowego bełkotu.
              </p>
              <Button href={company.phoneHref} variant="outline" className="mt-6">
                <Phone className="h-4 w-4" />
                {company.phone}
              </Button>
            </Reveal>
            <Reveal delay={100}>
              <Accordion items={faq} />
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
