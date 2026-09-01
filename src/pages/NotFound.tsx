import { ArrowRight } from 'lucide-react'
import { Seo } from '../components/Seo'
import { Button, Container } from '../components/ui'

export function NotFound() {
  return (
    <>
      <Seo title="Strona nie znaleziona | EBE POWER" description="Nie znaleziono strony." path="/404" />
      <section className="grid-lines relative flex min-h-[70vh] items-center border-b border-line">
        <Container className="py-24 text-center">
          <p className="font-display text-[18vw] leading-none font-extrabold text-steel/60 sm:text-[12rem]">
            404
          </p>
          <h1 className="font-display mt-4 text-3xl font-extrabold tracking-tight uppercase sm:text-5xl">
            Ta strona nie ma zasilania
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm text-steel sm:text-base">
            Adres, którego szukasz, nie istnieje lub został przeniesiony. Wróć na stronę główną albo
            przejdź do oferty.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button to="/" size="lg">
              Strona główna
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button to="/oferta" size="lg" variant="outline">
              Oferta
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
