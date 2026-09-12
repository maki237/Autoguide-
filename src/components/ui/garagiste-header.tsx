import { Bell } from "lucide-react"

import { GarageStatus } from "./garage-status"

interface GaragisteHeaderProps {
  available: boolean
  onToggle: (value: boolean) => void
  onNotifications?: () => void
  activePage?: string
  onNavigate?: (page: string) => void
}

export function GaragisteHeader({
  available,
  onToggle,
  onNotifications,
  activePage = "dashboard",
  onNavigate,
}: GaragisteHeaderProps) {
  return (
    <header className="border-b border-slate-200/80 bg-white/95 px-5 py-5 backdrop-blur md:px-8 md:py-6">

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="mb-1 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1677C8]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]" />
            Espace partenaire
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Espace Garagiste
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Gérez vos interventions et suivez vos performances.
          </p>
        </div>

        <div className="flex items-center justify-between gap-3 sm:justify-end">

          <button
            type="button"
            aria-label="Voir les notifications"
            onClick={onNotifications}
            className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-[#145DA0]"
          >
            <Bell className="h-5 w-5" />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
          </button>

          <GarageStatus
            available={available}
            onToggle={onToggle}
          />
        </div>

      </div>

      <select
        aria-label="Navigation du garage"
        value={activePage}
        onChange={(event) => onNavigate?.(event.target.value)}
        className="mt-4 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-semibold text-slate-700 shadow-sm lg:hidden"
      >
        <option value="dashboard">Tableau de bord</option>
        <option value="missions">Mes interventions</option>
        <option value="historique">Historique</option>
        <option value="profile">Profil du garage</option>
        <option value="services">Services proposés</option>
        <option value="zone">Zone & horaires</option>
        <option value="notifications">Notifications & alertes</option>
        <option value="parametres">Paramètres</option>
        <option value="support">Support</option>
        <option value="emergency">Assistance urgente</option>
      </select>

    </header>
  )
}