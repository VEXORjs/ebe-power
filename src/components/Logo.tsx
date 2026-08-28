import { Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { company } from '../content/site'

export function LogoMark({ className = 'h-10 w-10' }: { className?: string }) {
  return (
   <img
      src="images/logo.jpeg"
      alt={`${company.name} — logo`}
      className={className}
    />
  )
}

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link to="/" onClick={onClick} className="group flex items-center gap-3" aria-label={`${company.name} — strona główna`}>
      <LogoMark />
      <span className="font-display flex flex-col leading-none">
        <span className="text-[22px] font-extrabold tracking-[0.14em] text-light">
          EBE<span className="text-accent">POWER</span>
        </span>
        <span className="mt-1 text-[9px] font-semibold tracking-[0.3em] text-steel uppercase">
          Agregaty prądotwórcze
        </span>
      </span>
    </Link>
  )
}
