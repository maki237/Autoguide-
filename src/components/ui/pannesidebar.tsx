import { useState } from "react"
import type { ReactNode } from "react"
import {
  LayoutDashboard,
  Car,
  History,
  Settings,
  LogOut,
  AlertTriangle,
} from "lucide-react"

interface PanneSidebarProps {
  activePage?: string
  onNavigate?: (page: string) => void
}

export function PanneSidebar({
  activePage,
  onNavigate,
}: PanneSidebarProps) {
  // État interne : fonctionne seul si aucun parent ne gère la page active
  const [internalPage, setInternalPage] = useState("dashboard")

  const currentPage = activePage ?? internalPage

  const handleNavigate = (page: string) => {
    setInternalPage(page)
    onNavigate?.(page)
  }

  const menuItems = [
    {
      id: "dashboard",
      label: "Tableau de bord",
      icon: LayoutDashboard,
    },
    {
      id: "missions",
      label: "Missions",
      icon: Car,
    },
    {
      id: "historique",
      label: "Historique",
      icon: History,
    },
    {
      id: "parametres",
      label: "Paramètres",
      icon: Settings,
    },
  ]

  return (
    <aside className="flex h-screen w-[255px] flex-col border-r border-slate-200 bg-white">
      {/* LOGO */}
      <div className="px-8 py-7">
        <h1 className="text-2xl font-bold tracking-tight text-[#145DA0]">
          AutoGuide<span className="text-[#F5A623]">+</span>
        </h1>
      </div>

      {/* UTILISATEUR */}
      <div className="mx-4 mb-6 flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-[#145DA0]">
          <Car className="h-5 w-5" />
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-800">Conducteur</p>

          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <p className="text-xs text-slate-500">Automobiliste</p>
          </div>
        </div>
      </div>

      {/* MENU */}
      <nav className="flex flex-col gap-1.5 px-4">
        {menuItems.map((item) => {
          const Icon = item.icon
          const active = currentPage === item.id

          return (
            <SidebarItem
              key={item.id}
              icon={<Icon className="h-5 w-5" />}
              label={item.label}
              active={active}
              onClick={() => handleNavigate(item.id)}
            />
          )
        })}
      </nav>

      {/* BAS */}
      <div className="mt-auto px-4 pb-5">
        <button
          type="button"
          onClick={() => handleNavigate("panne")}
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
          type="button"
          onClick={() => handleNavigate("logout")}
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
            hover:text-red-600
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
  active = false,
  onClick,
}: {
  icon: ReactNode
  label: string
  active?: boolean
  onClick?: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        flex
        items-center
        gap-4
        rounded-xl
        px-4
        py-3
        text-left
        text-sm
        font-medium
        transition
        ${
          active
            ? "bg-[#145DA0] text-white shadow-md shadow-blue-200/50"
            : "text-slate-600 hover:bg-blue-50 hover:text-[#145DA0]"
        }
      `}
    >
      {icon}
      {label}
    </button>
  )
}
