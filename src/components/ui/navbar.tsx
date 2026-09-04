import { Link } from "react-router-dom"
import logo from "@/assets/LOGO.png"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-[1100] border-b border-slate-100 bg-white/90 backdrop-blur-md">

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

          <span className="text-lg font-bold tracking-tight text-[#145DA0] sm:text-xl">
            AutoGuide+
          </span>
        </Link>


        {/* NAVIGATION */}

        <nav className="hidden items-center gap-8 md:flex">

          <a
            href="#solutions"
            className="text-sm text-slate-600 transition hover:text-blue-600"
          >
            Solutions
          </a>

          <a
            href="#garages"
            className="text-sm text-slate-600 transition hover:text-blue-600"
          >
            Garages
          </a>

          <a
            href="#fonctionnement"
            className="text-sm text-slate-600 transition hover:text-blue-600"
          >
            Comment ça marche
          </a>

          <a
            href="#aide"
            className="text-sm text-slate-600 transition hover:text-blue-600"
          >
            Aide
          </a>

        </nav>


        {/* ACTIONS */}

        <div className="flex items-center gap-3">

          <Link
            to="/login"
            className="hidden text-sm font-medium text-slate-600 transition hover:text-blue-600 sm:block"
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

        </div>

      </div>

    </header>
  )
}