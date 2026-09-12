 import {
  AlertTriangle,
  Car,
  History,
  LogOut,
  MapPin,
  MessageSquare,
  Navigation,
  Settings,
  UserRound,
 } from "lucide-react"

import { useNavigate } from "react-router-dom"
import logo from "@/assets/LOGO.png"

type DashboardSidebarProps = {
  activeSection: string
  onSectionChange: (section: string) => void
  onEmergency: () => void
  onVehicles: () => void
  onProfile: () => void
  onLogout: () => void
}

export function DashboardSidebar({
  activeSection,
  onSectionChange,
  onEmergency,
  onVehicles,
  onProfile,
  onLogout,
}: DashboardSidebarProps) {
  const navigate = useNavigate()
  /* =====================================================
     MENU PRINCIPAL
  ===================================================== */

  const menuItems = [
    {
      id: "dashboard",
      label: "Rechercher un itinéraire",
      icon: Navigation,
    },
    {
      id: "historique",
      label: "Historique de panne",
      icon: History,
    },
    {
      id: "garages",
      label: "Garages à proximité",
      icon: MapPin,
    },
    {
      id: "chat",
      label: "Chat en direct 💬",
      icon: MessageSquare,
    },
    {
      id: "parametres",
      label: "Paramètres",
      icon: Settings,
    },
  ]

  /* =====================================================
     NAVIGATION
  ===================================================== */

  const handleNavigation = (section: string) => {
    if (section === "dashboard") {
      navigate("/rechercher-itineraire")
      return
    }
    onSectionChange(section)
  }

  return (
    <aside
      className="
        hidden
        w-[270px]
        shrink-0
        flex-col
        justify-between
        border-r
        border-slate-200
        bg-white
        p-5
        lg:flex
      "
    >
      {/* =====================================================
          PARTIE HAUTE
      ===================================================== */}

      <div>
        {/* =================================================
            LOGO
        ================================================= */}

        <div className="mb-8 flex items-center gap-3 px-2">
          <img
            src={logo}
            alt="AutoGuide+"
            className="h-11 w-11 object-contain"
          />

          <div>
            <h1 className="text-xl font-bold text-slate-900">
              AutoGuide+
            </h1>

            <p className="text-[10px] text-slate-500">
              Votre compagnon de route
            </p>
          </div>
        </div>

        {/* =================================================
            PROFIL
        ================================================= */}

        <button
          type="button"
          onClick={onProfile}
          className="
            mb-6
            flex
            w-full
            items-center
            gap-3
            rounded-2xl
            p-3
            text-left
            transition-all
            hover:bg-white/10
          "
        >
          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-blue-50
              text-[#1468A8]
            "
          >
            <UserRound size={21} />
          </div>

          <div className="min-w-0">
            <p className="truncate font-semibold text-slate-900">
              Nina
            </p>

            <p className="text-xs text-slate-500">
              Conductrice
            </p>
          </div>
        </button>

        {/* =================================================
            BOUTON PANNE
        ================================================= */}

        <button
          type="button"
          onClick={onEmergency}
          className="
            mb-7
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-[#EF9F27]
            py-4
            font-semibold
            text-[#1468A8]
            shadow-sm
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:bg-[#D98C16]
            hover:shadow-md
            active:translate-y-0
          "
        >
          <AlertTriangle size={20} />

          <span>Je suis en panne</span>
        </button>

        {/* =================================================
            NAVIGATION PRINCIPALE
        ================================================= */}

        <nav
          className="space-y-2"
          aria-label="Navigation automobiliste"
        >
          <p className="px-4 pb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
            Assistance
          </p>

          {menuItems.map((item) => {
            const Icon = item.icon
            const active =
              item.id === "garages"
                ? activeSection === "dashboard"
                : activeSection === item.id

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigation(item.id === "garages" ? "dashboard" : item.id)}
                className={`
                  flex
                  w-full
                  items-center
                  gap-3
                  rounded-xl
                  px-4
                  py-3.5
                  text-left
                  transition-all
                  duration-200

                  ${
                    active
                      ? "bg-blue-50 font-semibold text-[#1468A8]"
                      : "text-slate-600 hover:bg-blue-50 hover:text-[#1468A8]"
                  }
                `}
              >
                <Icon
                  size={19}
                  className={
                    active
                      ? "text-[#8dd3ff]"
                      : "text-slate-400"
                  }
                />

                <span>{item.label}</span>
              </button>
            )
          })}

          <p className="px-4 pb-1 pt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
            Mon compte
          </p>

          <button
            type="button"
            onClick={onVehicles}
            className="
              flex
              w-full
              items-center
              gap-3
              rounded-xl
              px-4
              py-3.5
              text-left
              text-slate-600
              transition-all
              duration-200
              hover:bg-blue-50
              hover:text-[#1468A8]
            "
          >
            <Car
              size={19}
              className="text-slate-400"
            />

            <span>Mes véhicules</span>
          </button>

          <button
            type="button"
            onClick={onProfile}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-left text-slate-600 transition-all duration-200 hover:bg-blue-50 hover:text-[#1468A8]"
          >
            <UserRound size={19} className="text-slate-400" />
            <span>Gérer mon profil</span>
          </button>
        </nav>
      </div>

      {/* =====================================================
          DECONNEXION
      ===================================================== */}

      <button
        type="button"
        onClick={onLogout}
        className="
          flex
          items-center
          gap-3
          rounded-xl
          px-4
          py-3
          text-slate-600
          transition-all
          duration-200
          hover:bg-red-50
          hover:text-red-600
        "
      >
        <LogOut size={19} />

        <span>Déconnexion</span>
      </button>
    </aside>
  )
}