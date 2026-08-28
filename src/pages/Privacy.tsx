import { company } from '../content/site'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { Container } from '../components/ui'

export function Privacy() {
  return (
    <>
      <Seo
        title="Polityka prywatności | EBE POWER"
        description="Zasady przetwarzania danych osobowych i wykorzystania plików cookies na stronie EBE POWER."
        path="/polityka-prywatnosci"
      />
      <PageHero crumb="Polityka prywatności" title="Polityka prywatności i cookies" />

      <section className="py-16 sm:py-20">
        <Container width="narrow">
          <div className="space-y-8 text-sm leading-relaxed text-steel">
            <p className="text-light">
              <strong>Uwaga:</strong> poniższy tekst jest szablonem informacyjnym. Przed
              uruchomieniem strony zastąp go dokumentem przygotowanym dla {company.legalName} —
              najlepiej przez osobę odpowiedzialną za ochronę danych.
            </p>

            <div>
              <h2 className="font-display text-2xl font-extrabold tracking-wide text-light uppercase">
                1. Administrator danych
              </h2>
              <p className="mt-3">
                Administratorem danych osobowych przesłanych przez formularz kontaktowy jest{' '}
                {company.legalName}, {company.street}, {company.postal} {company.city}, NIP:{' '}
                {company.nip}. Kontakt: {company.email}, {company.phone}.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-extrabold tracking-wide text-light uppercase">
                2. Cel i podstawa przetwarzania
              </h2>
              <p className="mt-3">
                Dane przetwarzamy wyłącznie w celu odpowiedzi na zapytanie ofertowe oraz — po
                wyrażeniu osobnej zgody — w celach marketingowych. Podstawą przetwarzania jest art. 6
                ust. 1 lit. b oraz lit. f RODO (prawnie uzasadniony interes: obsługa zapytań
                ofertowych).
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-extrabold tracking-wide text-light uppercase">
                3. Odbiorcy danych
              </h2>
              <p className="mt-3">
                Dane mogą być przekazywane podmiotom obsługującym naszą infrastrukturę IT oraz firmom
                kurierskim i serwisowym — wyłącznie w zakresie niezbędnym do realizacji zamówienia.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-extrabold tracking-wide text-light uppercase">
                4. Twoje prawa
              </h2>
              <p className="mt-3">
                Masz prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia
                przetwarzania, przenoszenia danych oraz wniesienia sprzeciwu, a także prawo skargi do
                Prezesa Urzędu Ochrony Danych Osobowych.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-extrabold tracking-wide text-light uppercase">
                5. Pliki cookies
              </h2>
              <p className="mt-3">
                Strona korzysta z niezbędnych plików cookies oraz — jeśli zostaną włączone —
                analitycznych. Zgodę na cookies analityczne można wycofać w każdej chwili w
                ustawieniach przeglądarki.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-extrabold tracking-wide text-light uppercase">
                6. Zmiany polityki
              </h2>
              <p className="mt-3">
                O zmianach w polityce prywatności poinformujemy, publikując nową wersję na tej
                stronie.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
