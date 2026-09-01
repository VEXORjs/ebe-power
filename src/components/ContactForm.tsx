import { useState, type FormEvent } from 'react'
import { CircleCheck, Send, TriangleAlert } from 'lucide-react'
import { company } from '../content/site'
import { Button } from './ui'

type State = 'idle' | 'sending' | 'sent' | 'error'

export function ContactForm({ power }: { power?: string }) {
  const [state, setState] = useState<State>('idle')
  const [consent, setConsent] = useState(false)
  const [error, setError] = useState('')

  const initialMessage = power
    ? `Dzień dobry,\n\nPotrzebuję agregatu o mocy około ${power} kVA. Proszę o ofertę i termin dostawy.\n\nOdbiorniki / przeznaczenie:\n\n`
    : ''

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const values = Object.fromEntries(data.entries()) as Record<string, string>

    if (!values.consent) {
      setError('Zaznacz zgodę na przetwarzanie danych, aby wysłać zapytanie.')
      return
    }
    if (!values.name || !values.email || !values.message) {
      setError('Wypełnij pola: imię i nazwisko, e-mail, wiadomość.')
      return
    }
    setError('')
    setState('sending')

    const body = [
      `Imię i nazwisko: ${values.name}`,
      values.company ? `Firma: ${values.company}` : '',
      `Telefon: ${values.phone ?? '-'}`,
      `E-mail: ${values.email}`,
      values.power ? `Szukana moc: ${values.power}` : '',
      '',
      values.message,
    ]
      .filter(Boolean)
      .join('\n')

    try {
      if (company.formEndpoint) {
        const res = await fetch(company.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ ...values, subject: `Zapytanie ze strony ${company.name}` }),
        })
        if (!res.ok) throw new Error('Błąd wysyłki')
      } else {
        const subject = encodeURIComponent(`Zapytanie o agregat — ${company.name}`)
        window.location.href = `mailto:${company.email}?subject=${subject}&body=${encodeURIComponent(body)}`
      }
      setState('sent')
      form.reset()
    } catch {
      setState('error')
    }
  }

  if (state === 'sent') {
    return (
      <div className="card-dark flex flex-col items-start gap-4 p-8">
        <CircleCheck className="h-10 w-10 text-accent" />
        <h3 className="font-display text-2xl font-extrabold tracking-wide uppercase">
          Dziękujemy za zapytanie
        </h3>
        <p className="text-sm leading-relaxed text-steel">
          {company.formEndpoint
            ? 'Wiadomość została wysłana. Odpowiadamy w ciągu jednego dnia roboczego.'
            : 'Otworzyliśmy Twój program pocztowy z gotową wiadomością — wyślij ją, żebyśmy mogli odpowiedzieć.'}
          {'  '}W pilnych sprawach zadzwoń:{' '}
          <a href={company.phoneHref} className="font-semibold text-accent">
            {company.phone}
          </a>
        </p>
        <Button variant="outline" onClick={() => setState('idle')}>
          Wyślij kolejne zapytanie
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card-dark space-y-5 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Imię i nazwisko *" name="name" autoComplete="name" />
        <Field label="Firma" name="company" autoComplete="organization" />
        <Field label="Telefon" name="phone" type="tel" autoComplete="tel" />
        <Field label="E-mail *" name="email" type="email" autoComplete="email" />
      </div>

      <div>
        <label className="mb-2 block text-xs tracking-[0.12em] text-steel uppercase" htmlFor="power">
          Szukana moc agregatu
        </label>
        <select
          id="power"
          name="power"
          defaultValue={power ?? ''}
          className="h-11 w-full rounded-xl border border-line bg-white px-3 text-sm text-light focus:border-accent focus:outline-none"
        >
          <option value="">Nie wiem — potrzebuję pomocy w doborze</option>
          <option value="do 10 kW">do 10 kW (przenośny)</option>
          <option value="10–50 kVA">10–50 kVA</option>
          <option value="50–100 kVA">50–100 kVA</option>
          <option value="100–300 kVA">100–300 kVA</option>
          <option value="300–1000 kVA">300–1000 kVA</option>
          <option value="powyżej 1000 kVA">powyżej 1000 kVA</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-xs tracking-[0.12em] text-steel uppercase" htmlFor="message">
          Wiadomość *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          defaultValue={initialMessage}
          placeholder="Zastosowanie, lista odbiorników, miejsce montażu, oczekiwany termin…"
          className="w-full rounded-xl border border-line bg-white px-3 py-3 text-sm text-light placeholder:text-steel/80 focus:border-accent focus:outline-none"
        />
      </div>

      <label className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-steel">
        <input
          type="checkbox"
          name="consent"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-[#12a05f]"
        />
        <span>
          Wyrażam zgodę na przetwarzanie moich danych osobowych przez {company.legalName} w celu
          odpowiedzi na zapytanie. Zapoznałam/em się z{' '}
          <a href="/polityka-prywatnosci" className="text-accent underline">
            polityką prywatności
          </a>
          .
        </span>
      </label>

      {error && (
        <p className="flex items-center gap-2 border border-red-500/40 bg-red-500/10 p-3 text-xs text-red-300">
          <TriangleAlert className="h-4 w-4 shrink-0" />
          {error}
        </p>
      )}

      <Button type="submit" size="lg" disabled={state === 'sending'} className="w-full sm:w-auto">
        <Send className="h-4 w-4" />
        {state === 'sending' ? 'Wysyłanie…' : 'Wyślij zapytanie'}
      </Button>

      {!company.formEndpoint && (
        <p className="text-[11px] text-steel">
          Po kliknięciu otworzy się okno Twojego
          programu pocztowego z gotową wiadomością.
        </p>
      )}
      {state === 'error' && (
        <p className="text-xs text-red-300">
          Nie udało się wysłać formularza. Zadzwoń do nas: {company.phone}
        </p>
      )}
    </form>
  )
}

function Field({
  label,
  name,
  type = 'text',
  autoComplete,
}: {
  label: string
  name: string
  type?: string
  autoComplete?: string
}) {
  return (
    <div>
      <label className="mb-2 block text-xs tracking-[0.12em] text-steel uppercase" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        className="h-11 w-full rounded-xl border border-line bg-white px-3 text-sm text-light focus:border-accent focus:outline-none"
      />
    </div>
  )
}
