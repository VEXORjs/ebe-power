import { Link } from 'react-router-dom'
import { Calculator, Phone } from 'lucide-react'
import { company } from '../content/site'

/** Dolny pasek szybkiego kontaktu na urządzeniach mobilnych. */
export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-panel/95 backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-2">
        <a
          href={company.phoneHref}
          className="flex h-14 items-center justify-center gap-2 border-r border-line text-sm font-semibold text-light"
        >
          <Phone className="h-4 w-4 text-accent" />
          Zadzwoń
        </a>
        <Link
          to="/kontakt"
          className="font-display flex h-14 items-center justify-center gap-2 bg-accent text-sm font-bold tracking-[0.1em] uppercase text-white"
        >
          <Calculator className="h-4 w-4" />
          Wycena
        </Link>
      </div>
    </div>
  )
}
