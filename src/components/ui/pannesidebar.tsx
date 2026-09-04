import {
  LayoutDashboard,
  Car,
  History,
  Settings,
  LogOut,
  AlertTriangle,
} from "lucide-react"

export function PanneSidebar() {
  return (
    <aside className="flex h-screen w-[255px] flex-col border-r border-slate-200 bg-white">

      {/* LOGO */}
      <div className="px-8 py-7">

        <h1 className="text-2xl font-bold tracking-tight text-[#145DA0]">
          AutoGuide+
        </h1>

      </div>


      {/* UTILISATEUR */}
      <div className="mx-4 mb-6 flex items-center gap-3 rounded-2xl bg-slate-50 p-4">

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-[#145DA0]">
          <Car className="h-5 w-5" />
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-800">
            Conducteur
          </p>

          <p className="text-xs text-slate-500">
            Automobiliste
          </p>
        </div>

      </div>


      {/* MENU */}
      <nav className="flex flex-col gap-2 px-4">

        <SidebarItem
          icon={<LayoutDashboard className="h-5 w-5" />}
          label="Tableau de bord"
        />

        <SidebarItem
          icon={<Car className="h-5 w-5" />}
          label="Missions"
        />

        <SidebarItem
          icon={<History className="h-5 w-5" />}
          label="Historique"
        />

        <SidebarItem
          icon={<Settings className="h-5 w-5" />}
          label="Paramètres"
        />

      </nav>


      {/* BAS */}
      <div className="mt-auto px-4 pb-5">

        <button
          className="
            mb-4
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-[#F5A623]
            px-4
            py-3
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-[#e89513]
          "
        >
          <AlertTriangle className="h-4 w-4" />

          Je suis en panne
        </button>


        <button
          className="
            flex
            w-full
            items-center
            gap-3
            rounded-xl
            px-4
            py-3
            text-sm
            font-medium
            text-slate-600
            transition
            hover:bg-slate-50
          "
        >
          <LogOut className="h-5 w-5" />

          Déconnexion
        </button>

      </div>

    </aside>
  )
}


function SidebarItem({
  icon,
  label,
}: {
  icon: React.ReactNode
  label: string
}) {
  return (
    <button
      className="
        flex
        items-center
        gap-4
        rounded-xl
        px-4
        py-3
        text-left
        text-sm
        font-medium
        text-slate-600
        transition
        hover:bg-blue-50
        hover:text-[#145DA0]
      "
    >
      {icon}

      {label}
    </button>
  )
}