import {
  LayoutDashboard,
  Wrench,
  History,
  Settings,
  LogOut,
  AlertTriangle,
  UserRound,
  MapPin,
  Phone,
  Building2,
  Bell,
} from "lucide-react"

interface GaragisteSidebarProps {
  activePage?: string
  onNavigate?: (page: string) => void
}

export function GaragisteSidebar({
  activePage = "dashboard",
  onNavigate,
}: GaragisteSidebarProps) {
  const menuItems = [
    {
      id: "dashboard",
      label: "Tableau de bord",
      icon: LayoutDashboard,
    },
    {
      id: "missions",
      label: "Mes interventions",
      icon: Wrench,
    },
    {
      id: "historique",
      label: "Historique",
      icon: History,
    },
    {
      id: "profile",
      label: "Profil du garage",
      icon: Building2,
    },
    {
      id: "parametres",
      label: "Paramètres",
      icon: Settings,
    },
  ]

  return (
    <aside
      className="
        sticky
        top-0
        hidden
        lg:flex
        h-screen
        min-h-screen
        w-[280px]
        shrink-0
        flex-col
        overflow-y-auto
        border-r
        border-slate-200/80
        bg-[#071B33]
        px-4
        py-6
      "
    >
      {/* =====================================================
          LOGO
      ===================================================== */}

      <div className="px-3 pb-5">
        <div className="flex items-center gap-2">
          {/* Icône logo */}

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1677C8] text-white shadow-lg shadow-blue-950/30">
            <Wrench className="h-5 w-5" />
          </div>

          {/* Nom */}

          <div>
            <div className="text-xl font-bold tracking-tight text-white">
              AutoGuide<span className="text-[#45B7FF]">+</span>
            </div>

            <p className="text-[11px] text-slate-400">
              Espace partenaire
            </p>
          </div>
        </div>

        <p className="mt-1 ml-12 text-[11px] text-slate-400">
          Garagiste
        </p>
      </div>

      {/* =====================================================
          PROFIL RAPIDE
      ===================================================== */}

      <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
        <div className="flex items-center gap-3">
          {/* Avatar */}

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#45B7FF]/15 text-[#7DD3FC]">
            <UserRound className="h-5 w-5" />
          </div>

          {/* Informations */}

          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-white">
              Garage Excellence
            </p>

            <div className="mt-0.5 flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-green-500" />

              <span className="text-[11px] text-emerald-300">
                Garage vérifié
              </span>
            </div>
          </div>
        </div>

        {/* Localisation */}

        <div className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-300">
          <MapPin className="h-3.5 w-3.5 shrink-0" />

          <span>Bastos, Yaoundé</span>
        </div>
      </div>

      {/* Séparateur */}

      <div className="my-5 border-t border-white/10" />

      {/* =====================================================
          MENU PRINCIPAL
      ===================================================== */}

      <nav
        className="space-y-1.5"
        aria-label="Navigation garagiste"
      >
        <p className="px-4 pb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/35">
          Activité
        </p>

        {menuItems.map((item) => {
          const Icon = item.icon

          const active = activePage === item.id

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate?.(item.id)}
              className={`
                group
                flex
                w-full
                items-center
                gap-3
                rounded-xl
                px-4
                py-3
                text-left
                text-sm
                font-medium
                transition-all
                duration-300

                ${
                  active
                    ? "bg-[#1677C8] text-white shadow-md shadow-blue-950/30"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }
              `}
            >
              <Icon
                className={`
                  h-[18px]
                  w-[18px]
                  shrink-0
                  transition-transform
                  duration-300

                  ${
                    active
                      ? ""
                      : "group-hover:scale-110"
                  }
                `}
              />

              <span>{item.label}</span>
            </button>
          )
        })}

        <button
          type="button"
          onClick={() => onNavigate?.("notifications")}
          className={`group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-all ${
            activePage === "notifications"
              ? "bg-[#1677C8] text-white shadow-md shadow-blue-950/30"
              : "text-slate-300 hover:bg-white/10 hover:text-white"
          }`}
        >
          <Bell className="h-[18px] w-[18px]" />
          <span>Notifications & alertes</span>
          <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
            3
          </span>
        </button>

        <p className="px-4 pb-2 pt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-white/35">
          Mon garage
        </p>

        <button
          type="button"
          onClick={() => onNavigate?.("services")}
          className={`group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-all ${
            activePage === "services"
              ? "bg-[#1677C8] text-white shadow-md shadow-blue-950/30"
              : "text-slate-300 hover:bg-white/10 hover:text-white"
          }`}
        >
          <Wrench className="h-[18px] w-[18px]" />
          <span>Services proposés</span>
        </button>

        <button
          type="button"
          onClick={() => onNavigate?.("zone")}
          className={`group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-all ${
            activePage === "zone"
              ? "bg-[#1677C8] text-white shadow-md shadow-blue-950/30"
              : "text-slate-300 hover:bg-white/10 hover:text-white"
          }`}
        >
          <MapPin className="h-[18px] w-[18px]" />
          <span>Zone & horaires</span>
        </button>
      </nav>

      {/* =====================================================
          ESPACE FLEXIBLE
      ===================================================== */}

      <div className="flex-1" />

      {/* =====================================================
          CONTACT SUPPORT
      ===================================================== */}

      <div className="mb-4 rounded-xl border border-white/10 bg-white/5 p-3">
        <div className="flex items-start gap-2">
          <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#7DD3FC]">
            <Phone className="h-3.5 w-3.5" />
          </div>

          <div>
            <p className="text-xs font-semibold text-white">
              Besoin d'aide ?
            </p>

            <p className="mt-1 text-[11px] leading-4 text-slate-300">
              Notre équipe AutoGuide+ est disponible pour vous
              accompagner.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() =>
            onNavigate?.("support")
          }
          className="
            mt-3
            flex
            items-center
            gap-1.5
            text-xs
            font-semibold
            text-[#7DD3FC]
            transition
            hover:text-white
            hover:underline
          "
        >
          <Phone className="h-3.5 w-3.5" />

          Contacter le support
        </button>
      </div>

      {/* =====================================================
          BOUTON URGENCE
      ===================================================== */}

      <button
        type="button"
        onClick={() =>
          onNavigate?.("emergency")
        }
        className="
          group
          mb-3
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-[#D92D20]
          px-4
          py-3
          text-sm
          font-semibold
          text-white
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:bg-red-700
          hover:shadow-lg
          hover:shadow-red-200
        "
      >
        <AlertTriangle
          className="
            h-4
            w-4
            transition-transform
            duration-300
            group-hover:rotate-12
          "
        />

        Je suis en panne
      </button>

      {/* =====================================================
          DÉCONNEXION
      ===================================================== */}

      <button
        type="button"
        onClick={() =>
          onNavigate?.("logout")
        }
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
          text-slate-400
          transition-all
          duration-300
          hover:bg-white/10
          hover:text-red-600
        "
      >
        <LogOut className="h-4 w-4" />

        Déconnexion
      </button>
    </aside>
  )
}
