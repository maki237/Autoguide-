import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import logo from "@/assets/LOGO.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-[1100] border-b border-slate-200/80 bg-white/95 text-slate-900 backdrop-blur-md">

      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-5 lg:px-8">

        {/* LOGO */}

        <Link
          to="/"
          className="flex items-center gap-2.5"
        >
          <img
            src={logo}
            alt="AutoGuide+"
            className="h-12 w-12 object-contain sm:h-14 sm:w-14"
          />

          <span className="hidden text-lg font-bold tracking-tight text-[#145DA0] sm:inline sm:text-xl">
            AutoGuide+
          </span>
        </Link>


        {/* NAVIGATION */}

        <nav className="hidden items-center gap-8 md:flex">

          <a
            href="#solutions"
            className="text-sm text-slate-600 transition hover:text-[#1468A8]"
          >
            Solutions
          </a>

          <a
            href="#garages"
            className="text-sm text-slate-600 transition hover:text-[#1468A8]"
          >
            Garages
          </a>

          <a
            href="#fonctionnement"
            className="text-sm text-slate-600 transition hover:text-[#1468A8]"
          >
            Comment ça marche
          </a>

          <a
            href="#aide"
            className="text-sm text-slate-600 transition hover:text-[#1468A8]"
          >
            Aide
          </a>

        </nav>


        {/* ACTIONS */}

        <div className="flex items-center gap-3">

          <Link
            to="/login"
            onClick={closeMenu}
            className="hidden text-sm font-medium text-slate-600 transition hover:text-[#1468A8] sm:block"
          >
            Se connecter
          </Link>

          <Link
            to="/login"
            className="
              rounded-xl
              bg-[#1468A8]
              px-4
              py-2.5
              text-sm
              font-semibold
              text-white
              shadow-sm
              transition
              hover:-translate-y-0.5
              hover:bg-[#12598F]
              hover:shadow-md
            "
          >
            <span className="sm:hidden">Démarrer</span>
            <span className="hidden sm:inline">Commencer</span>
          </Link>

          <button
            type="button"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="rounded-xl border border-slate-200 p-2 text-slate-700 md:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

        </div>

      </div>

      {isOpen && (
        <nav className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {[
              ["#solutions", "Solutions"],
              ["#garages", "Garages"],
              ["#fonctionnement", "Comment ça marche"],
              ["#aide", "Aide"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-[#1468A8]"
              >
                {label}
              </a>
            ))}
            <Link
              to="/login"
              onClick={closeMenu}
              className="mt-2 rounded-xl bg-[#1468A8] px-3 py-2.5 text-center text-sm font-semibold text-white"
            >
              Se connecter
            </Link>
          </div>
        </nav>
      )}

    </header>
  )
}