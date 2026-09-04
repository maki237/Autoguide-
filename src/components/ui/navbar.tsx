import { Link } from "react-router-dom"
import logo from "@/assets/LOGO.png"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-[1100] border-b border-slate-100 bg-white/90 backdrop-blur-md">

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* LOGO */}

        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <img
            src={logo}
            alt="AutoGuide+"
            className="h-9 w-9 object-contain"
          />

          <span className="text-lg font-bold text-[#145DA0]">
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
              px-5
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
            Commencer
          </Link>

        </div>

      </div>

    </header>
  )
}