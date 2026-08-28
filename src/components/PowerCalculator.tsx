import { useMemo, useState } from 'react'
import { ArrowRight, Gauge, RotateCcw, TriangleAlert } from 'lucide-react'
import { calcLoads, type CalcLoad } from '../content/site'
import { Button, IconBadge } from './ui'

const STANDARD_SIZES = [
  8, 10, 13, 15, 20, 25, 30, 40, 50, 60, 80, 100, 125, 150, 200, 250, 300, 400, 500, 600, 800, 1000,
  1250, 1500, 2000,
]

const COS_PHI = 0.8

/**
 * Dobór mocy agregatu:
 *  - moc pracy ciągłej = suma odbiorników × współczynnik jednoczesności,
 *  - uwzględniamy największy prąd rozruchowy (silniki, sprężarki, pompy),
 *  - dodajemy rezerwę mocy i przeliczamy kW → kVA (cos φ = 0,8),
 *  - dobieramy najbliższą standardową moc agregatu "w górę".
 */
export function PowerCalculator() {
  const [loads, setLoads] = useState<CalcLoad[]>(() => calcLoads.map((l) => ({ ...l })))
  const [diversity, setDiversity] = useState(0.8)
  const [reserve, setReserve] = useState(0.2)

  const toggle = (id: string) =>
    setLoads((prev) => prev.map((l) => (l.id === id ? { ...l, on: !l.on } : l)))

  const setKw = (id: string, kw: number) =>
    setLoads((prev) => prev.map((l) => (l.id === id ? { ...l, kw: Math.max(0, kw) } : l)))

  const result = useMemo(() => {
    const active = loads.filter((l) => l.on && l.defaultKw > 0)
    const sum = active.reduce((acc, l) => acc + (l.defaultKw ?? 0), 0)
    const running = sum * diversity

    const biggestSurge = active.reduce(
      (max, l) => {
        const extra = (l.defaultKw ?? 0) * (l.surge - 1)
        return extra > max.extra ? { extra, label: l.label } : max
      },
      { extra: 0, label: '—' },
    )

    const peak = running + biggestSurge.extra
    const withReserve = peak * (1 + reserve)
    const kva = withReserve / COS_PHI
    const recommended = STANDARD_SIZES.find((s) => s >= kva) ?? Math.ceil(kva / 100) * 100

    const utilisation = recommended > 0 ? (running / (recommended * COS_PHI)) * 100 : 0

    const category =
      recommended <= 15
        ? { name: 'Agregaty przenośne', id: 'przenosne' }
        : recommended <= 100
          ? { name: 'Agregaty stacjonarne', id: 'stacjonarne' }
          : { name: 'Agregaty przemysłowe i kontenerowe', id: 'przemyslowe' }

    return {
      sum,
      running,
      peak,
      kva,
      recommended,
      utilisation,
      category,
      surge: biggestSurge,
    }
  }, [loads, diversity, reserve])

  const reset = () => {
    setLoads(calcLoads.map((l) => ({ ...l })))
    setDiversity(0.8)
    setReserve(0.2)
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr]">
      {/* Wejście */}
      <div className="card-dark p-6 sm:p-8">
        <div className="flex items-center gap-4">
          <IconBadge>
            <Gauge className="h-6 w-6" />
          </IconBadge>
          <div>
            <h3 className="font-display text-xl font-bold tracking-wide uppercase">
              Twoje odbiorniki
            </h3>
            <p className="mt-1 text-xs text-steel">
              Zaznacz urządzenia i wpisz ich moc znamionową (z tabliczki lub specyfikacji).
            </p>
          </div>
        </div>

        <div className="mt-7 space-y-2">
          {loads.map((l) => (
            <label
              key={l.id}
              className={`flex cursor-pointer items-center gap-4 border px-4 py-3 transition-colors ${
                l.on ? 'border-accent/50 bg-accent/5' : 'border-line hover:border-line-2'
              }`}
            >
              <input
                type="checkbox"
                checked={l.on}
                onChange={() => toggle(l.id)}
                className="h-5 w-5 shrink-0 accent-[#ffc61a]"
              />
              <span className="flex-1 text-sm text-light">
                {l.label}
                {l.surge > 1 && (
                  <span className="ml-2 text-[11px] text-steel">rozruch ×{l.surge}</span>
                )}
              </span>
              <span className="flex items-center gap-1.5">
                <input
                  type="number"
                  min={0}
                  step={0.1}
                  value={l.defaultKw}
                  onChange={(e) => setKw(l.id, Number(e.target.value))}
                  onClick={(e) => e.stopPropagation()}
                  className="tabular h-9 w-20 border border-line bg-ink px-2 text-right text-sm text-light focus:border-accent focus:outline-none"
                  aria-label={`Moc dla: ${l.label}`}
                />
                <span className="text-xs text-steel">kW</span>
              </span>
            </label>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div>
            <div className="flex items-baseline justify-between">
              <label className="text-xs tracking-[0.12em] text-steel uppercase">Jednoczesność</label>
              <span className="tabular text-sm font-bold text-accent">{Math.round(diversity * 100)}%</span>
            </div>
            <input
              type="range"
              min={0.5}
              max={1}
              step={0.05}
              value={diversity}
              onChange={(e) => setDiversity(Number(e.target.value))}
              className="mt-3 w-full accent-[#ffc61a]"
            />
            <p className="mt-2 text-[11px] text-steel">Jaka część urządzeń pracuje jednocześnie.</p>
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <label className="text-xs tracking-[0.12em] text-steel uppercase">Rezerwa mocy</label>
              <span className="tabular text-sm font-bold text-accent">{Math.round(reserve * 100)}%</span>
            </div>
            <input
              type="range"
              min={0}
              max={0.5}
              step={0.05}
              value={reserve}
              onChange={(e) => setReserve(Number(e.target.value))}
              className="mt-3 w-full accent-[#ffc61a]"
            />
            <p className="mt-2 text-[11px] text-steel">Zapas na rozbudowę i starzenie silnika.</p>
          </div>
        </div>

        <button
          onClick={reset}
          className="mt-6 inline-flex items-center gap-2 text-xs text-steel transition-colors hover:text-accent"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Zresetuj kalkulator
        </button>
      </div>

      {/* Wynik */}
      <div className="lg:sticky lg:top-28 lg:h-fit">
        <div className="border border-accent/30 bg-gradient-to-b from-accent/10 to-transparent p-6 sm:p-8">
          <p className="eyebrow">
            <span className="h-px w-8 bg-accent" />
            Wynik doboru
          </p>

          <div className="mt-6 space-y-4">
            <Row label="Suma mocy odbiorników" value={`${fmt(result.sum)} kW`} />
            <Row label="Moc pracy ciągłej (po jednoczesności)" value={`${fmt(result.running)} kW`} />
            <Row
              label={`Udar rozruchowy — ${result.surge.label}`}
              value={`+${fmt(result.surge.extra)} kW`}
            />
            <Row label="Moc szczytowa" value={`${fmt(result.peak)} kW`} highlight />
            <Row label="Wymagana moc agregatu" value={`${fmt(result.kva)} kVA`} highlight />
          </div>

          <div className="mt-7 border-t border-line pt-6">
            <p className="text-xs tracking-[0.14em] text-steel uppercase">Rekomendowany agregat</p>
            <p className="font-display mt-2 text-5xl leading-none font-extrabold text-accent">
              {result.recommended} <span className="text-2xl">kVA</span>
            </p>
            <p className="mt-2 text-sm text-light">
              {result.category.name} ({recommendedRange(result.recommended)})
            </p>

            <div className="mt-6">
              <div className="flex items-baseline justify-between text-xs">
                <span className="text-steel">Obciążenie przy typowej pracy</span>
                <span className="tabular font-bold text-light">{Math.round(result.utilisation)}%</span>
              </div>
              <div className="mt-2 h-2 w-full bg-ink">
                <div
                  className={`h-full ${result.utilisation < 30 ? 'bg-accent-2' : 'bg-accent'}`}
                  style={{ width: `${Math.min(result.utilisation, 100)}%` }}
                />
              </div>
            </div>

            {result.utilisation < 30 && (
              <p className="mt-4 flex gap-3 border border-accent-2/40 bg-accent-2/10 p-3 text-xs leading-relaxed text-light">
                <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-accent-2" />
                Agregat będzie niedociążony. Przy długotrwałej pracy poniżej 30% obciążenia rośnie
                ryzyko odkładania się nagaru w silniku — rozważ mniejszą jednostkę lub pracę
                naprzemienną.
              </p>
            )}
          </div>

          <Button
            to={`/kontakt?zrodlo=kalkulator&moc=${result.recommended}`}
            size="lg"
            className="mt-8 w-full"
          >
            Zapytaj o agregat {result.recommended} kVA
            <ArrowRight className="h-5 w-5" />
          </Button>
          <p className="mt-4 text-[11px] leading-relaxed text-steel">
            Kalkulator daje wynik orientacyjny (przyjęto cos φ = 0,8). Ostateczny dobór potwierdzamy
            po rozmowie technicznej i analizie rozdzielni.
          </p>
        </div>
      </div>
    </div>
  )
}

function Row({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-line/70 pb-3">
      <span className={`text-xs ${highlight ? 'text-light' : 'text-steel'}`}>{label}</span>
      <span className={`tabular text-sm font-bold ${highlight ? 'text-accent' : 'text-light'}`}>{value}</span>
    </div>
  )
}

function fmt(n: number) {
  return (Math.round(n * 10) / 10).toLocaleString('pl-PL', {
    minimumFractionDigits: n % 1 === 0 ? 0 : 1,
    maximumFractionDigits: 1,
  })
}

function recommendedRange(kva: number) {
  if (kva <= 15) return '2 – 12 kW'
  if (kva <= 100) return '10 – 100 kVA'
  return '100 – 2000 kVA'
}
