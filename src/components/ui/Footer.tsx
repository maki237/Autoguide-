import logo from "@/assets/LOGO.png"

export default function Footer() {
  return (
    <footer
      id="aide"
      className="mt-12 border-t border-slate-200 bg-[#F1F3F5]"
    >

      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 md:flex-row md:items-center md:justify-between lg:px-8">

        {/* LOGO */}

        <div className="flex items-center gap-2">

          <img
            src={logo}
            alt="AutoGuide+"
            className="h-8 w-8 object-contain"
          />

          <span className="font-bold text-[#145DA0]">
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