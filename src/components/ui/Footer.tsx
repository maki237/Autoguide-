import logo from "@/assets/LOGO.png"

export default function Footer() {
  return (
    <footer
      id="aide"
      className="border-t border-slate-300 bg-[#F1F3F5]"
    >

      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 md:flex-row md:items-center md:justify-between lg:px-8">

        {/* LOGO */}

        <div className="flex items-center gap-3">

          <img
            src={logo}
            alt="AutoGuide+"
            className="h-12 w-12 object-contain sm:h-14 sm:w-14"
          />

          <span className="text-lg font-bold tracking-tight text-[#145DA0]">
            AutoGuide+
          </span>

        </div>


        {/* LIENS */}

        <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500">

          <a href="#" className="hover:text-blue-600">
            Conditions
          </a>

          <a href="#" className="hover:text-blue-600">
            Confidentialité
          </a>

          <a href="#" className="hover:text-blue-600">
            À propos
          </a>

          <a href="#" className="hover:text-blue-600">
            Contact
          </a>

        </div>


        <p className="text-xs text-slate-400">
          © 2026 AutoGuide+. Tous droits réservés.
        </p>

      </div>

    </footer>
  )
}