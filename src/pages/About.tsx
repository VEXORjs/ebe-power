import { Award, BadgeCheck, HeartHandshakeIcon, ShieldCheck, Target, Users } from 'lucide-react'
import { advantages, company, process, stats } from '../content/site'
import { PageHero } from '../components/PageHero'
import { CtaBand } from '../components/CtaBand'
import { Seo } from '../components/Seo'
import { Button, Container, IconBadge, SectionHeading } from '../components/ui'
import { Counter, Reveal } from '../components/Reveal'

const values = [
  {
    icon: <Target className="h-6 w-6" />,
    title: 'Technika przed sprzedażą',
    lead: 'Najpierw liczymy i sprawdzamy rozdzielnię, potem proponujemy urządzenie. Jeśli tańszy agregat wystarczy — powiemy o tym.',
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'Odpowiedzialność do końca',
    lead: 'Ten sam zespół odpowiada za dobór, montaż i serwis. Nie ma “proszę dzwonić do producenta”.',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Zespół praktyków',
    lead: 'Elektromechanicy i automatycy z uprawnieniami SEP, którzy na co dzień stoją przy urządzeniach, nie w Excelu.',
  },
  {
    icon: <HeartHandshakeIcon className="h-6 w-6" />,
    title: 'Dostępność, gdy gaśnie światło',
    lead: 'Pogotowie energetyczne 24/7, także w weekendy i święta. Awaria nie wybiera godziny otwarcia biura.',
  },
]

const timeline = [
  { year: String(company.founded), title: 'Start firmy', lead: 'Serwis i sprzedaż pierwszych agregatów dla firm budowlanych w regionie.' },
  { year: '2016', title: 'Własny serwis i magazyn', lead: 'Uruchomienie zaplecza serwisowego, stanowiska prób obciążeniowych i magazynu części.' },
  { year: '2020', title: 'Projekty przemysłowe', lead: 'Pierwsze realizacje kontenerowe powyżej 500 kVA i integracje z automatyką SZR.' },
  { year: '2024', title: 'Pogotowie energetyczne 24/7', lead: 'Całodobowy dyżur serwisowy i rozbudowa floty urządzeń dostępnych od ręki.' },
]

export function About() {
  return (
    <>
      <Seo
        title="O firmie — EBE POWER, agregaty prądotwórcze"
        description="EBE POWER — zespół elektromechaników i automatyków. Sprzedaż, dobór mocy, montaż i serwis agregatów prądotwórczych od 2 kW do 2 MW."
        path="/o-firmie"
      />
      <PageHero
        crumb="O firmie"
        eyebrow="EBE POWER"
        title="Firma zrobiona z praktyków, nie z katalogu"
        lead={`Działamy od ${company.founded} roku. Sprzedajemy, dobieramy, montujemy i serwisujemy agregaty prądotwórcze — i bierzemy odpowiedzialność za to, co robimy.`}
        image="/images/about-warehouse.jpg"
      />

      {/* ================= HISTORIA ================= */}
      <section className="border-b border-line py-20 sm:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div className="space-y-5 text-sm leading-relaxed text-steel sm:text-base">
                <p>
                  Zaczynaliśmy od serwisu urządzeń budowlanych. To najlepsza szkoła, bo widać tam
                  wszystko: co wytrzymuje, co pęka, co jest marketingiem, a co realną mocą. Dziś
                  sprzedajemy agregaty od 2&nbsp;kW do 2&nbsp;MW, ale wciąż zaczynamy od tego samego
                  pytania: <span className="text-light">co dokładnie ma zasilać ten agregat?</span>
                </p>
                <p>
                  Mamy własne zaplecze serwisowe i stanowisko prób obciążeniowych, więc każde
                  urządzenie — nowe czy używane — przechodzi u nas rozruch i realny test, zanim trafi
                  do klienta. Montujemy, integrujemy z automatyką zaniku sieci, szkolimy obsługę i
                  zostajemy na przeglądy.
                </p>
                <p>
                  Pracujemy w całej Polsce, z klientami z przemysłu, budownictwa, ochrony zdrowia,
                  rolnictwa i branży eventowej. Niezależnie od skali, zasada jest ta sama: rzetelna
                  kalkulacja, uczciwa wycena i sprzęt, który odpala, gdy zgaśnie sieć.
                </p>
              </div>

              <dl className="mt-10 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-line bg-panel px-4 py-5">
                    <dd className="font-display text-3xl font-extrabold text-accent">
                      <Counter to={s.value} />
                      <span className="text-lg">{s.suffix}</span>
                    </dd>
                    <dt className="mt-1 text-[11px] leading-tight text-steel">{s.label}</dt>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={100}>
              <div className="grid gap-5">
                <img
                  src="/images/team.jpg"
                  alt="Zespół serwisu EBE POWER"
                  loading="lazy"
                  className="aspect-[4/3] w-full border border-line object-cover"
                />
                <div className="card-dark p-6">
                  <div className="flex items-center gap-3">
                    <Award className="h-6 w-6 text-accent" />
                    <p className="font-display text-lg font-bold tracking-wide uppercase">
                      Uprawnienia i dokumentacja
                    </p>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-steel">
                    <li className="flex gap-2">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      Uprawnienia SEP (E + D) do 1 kV oraz powyżej 1 kV
                    </li>
                    <li className="flex gap-2">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      Stanowisko prób obciążeniowych — test każdego urządzenia
                    </li>
                    <li className="flex gap-2">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      Dokumentacja odbiorowa i protokoły pomiarowe
                    </li>
                    <li className="flex gap-2">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      Ubezpieczenie OC działalności serwisowej
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ================= WARTOŚCI ================= */}
      <section className="border-b border-line bg-ink-2 py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Zasady"
              title="Czym się kierujemy"
              lead="Kilka prostych reguł, które trzymają jakość od pierwszej rozmowy po ostatni przegląd."
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="card-dark h-full p-7">
                  <IconBadge>{v.icon}</IconBadge>
                  <h3 className="font-display mt-5 text-xl font-bold tracking-wide uppercase">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel">{v.lead}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="border-b border-line py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Historia" title="Jak do tego doszło" />
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 80}>
                <div className="border-t-2 border-accent pt-5">
                  <p className="font-display text-4xl leading-none font-extrabold text-accent">{t.year}</p>
                  <h3 className="font-display mt-3 text-lg font-bold tracking-wide uppercase">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel">{t.lead}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= PROCES ================= */}
      <section className="border-b border-line bg-ink-2 py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Współpraca" title="Jak wygląda proces" />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 70}>
                <div className="h-full border-l-2 border-accent/40 pl-5">
                  <span className="font-display text-xs font-bold tracking-[0.2em] text-accent">{p.step}</span>
                  <h3 className="font-display mt-2 text-lg font-bold leading-tight tracking-wide uppercase">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel">{p.lead}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mt-12">
              <Button to="/kontakt" size="lg">
                Umów rozmowę techniczną
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ================= ZALETY ================= */}
      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="W skrócie" title="Dlaczego klienci do nas wracają" />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((a, i) => (
              <Reveal key={a.title} delay={i * 60}>
                <div className="card-dark h-full p-6">
                  <h3 className="font-display text-lg font-bold leading-tight tracking-wide uppercase">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel">{a.lead}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Porozmawiajmy o Twoim zasilaniu"
        lead="Bez zobowiązań policzymy moc i powiemy, czy agregat w ogóle jest Ci potrzebny."
      />
    </>
  )
}
