import { useState } from 'react'
import { Plus } from 'lucide-react'

/** Rozwijane pytania i odpowiedzi (FAQ) — tylko jeden element otwarty naraz. */
export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-accent"
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg font-bold tracking-wide uppercase sm:text-xl">
                {item.q}
              </span>
              <span
                className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center border border-line-2 text-accent transition-transform duration-300 ${
                  isOpen ? 'rotate-45 border-accent bg-accent text-white' : ''
                }`}
              >
                <Plus className="h-4 w-4" />
              </span>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ${
                isOpen ? 'grid-rows-[1fr] pb-7 opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pr-10 text-sm leading-relaxed text-steel sm:text-base">{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
