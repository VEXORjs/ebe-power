import { useMemo, useState } from 'react'
import { X } from 'lucide-react'
import { projects, projectCategories } from '../content/site'
import { Container } from './ui'
import { Reveal } from './Reveal'

/** Galeria realizacji z filtrem kategorii i prostym podglądem zdjęcia. */
export function Gallery() {
  const [category, setCategory] = useState<string>('Wszystkie')
  const [active, setActive] = useState<string | null>(null)

  const list = useMemo(
    () => (category === 'Wszystkie' ? projects : projects.filter((p) => p.category === category)),
    [category],
  )

  const current = projects.find((p) => p.image === active)

  return (
    <Container>
      <div className="mb-10 flex flex-wrap gap-3">
        {projectCategories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`font-display h-10 border px-5 text-xs font-bold tracking-[0.12em] uppercase transition-all ${
              category === c
                ? 'border-accent bg-accent text-white'
                : 'border-line-2 text-steel hover:border-accent hover:text-accent'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {list.map((p, i) => (
          <Reveal key={p.title} delay={i * 70}>
            <button
              onClick={() => setActive(p.image)}
              className="group block w-full overflow-hidden border border-line text-left transition-colors hover:border-accent"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06251a]/80 via-[#06251a]/10 to-transparent" />
                <span className="font-display absolute top-4 left-4 bg-accent px-3 py-1 text-[11px] font-bold tracking-[0.14em] uppercase text-white">
                  {p.category}
                </span>
                <span className="tabular absolute top-4 right-4 rounded-full bg-panel/90 px-3 py-1 text-[11px] font-semibold text-light">
                  {p.year}
                </span>
              </div>
              <div className="bg-panel p-6">
                <h3 className="font-display text-xl font-bold tracking-wide uppercase">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel">{p.scope}</p>
                <p className="mt-4 text-xs font-semibold tracking-[0.1em] text-accent uppercase">{p.unit}</p>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {active && current && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#06251a]/90 p-4 backdrop-blur"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
        >
          <button
            className="absolute top-6 right-6 flex h-11 w-11 items-center justify-center border border-white/40 bg-white/10 text-white backdrop-blur hover:border-mint hover:text-mint"
            onClick={() => setActive(null)}
            aria-label="Zamknij podgląd"
          >
            <X className="h-5 w-5" />
          </button>
          <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={current.image} alt={current.title} className="max-h-[75vh] w-full object-contain" />
            <figcaption className="mt-4 text-center text-sm text-white/80">
              <span className="font-display text-lg font-bold tracking-wide text-white uppercase">
                {current.title}
              </span>
              <br />
              {current.unit} · {current.scope}
            </figcaption>
          </figure>
        </div>
      )}
    </Container>
  )
}
