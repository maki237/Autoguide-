import { useNavigate } from "react-router-dom"
import { X, MapPin, Star, Car } from "lucide-react"

import { DashboardSidebar } from "@/components/ui/dashborad-sidebar"
import { DashboardHeader } from "@/components/ui/dashboard-header"
import { DashboardSearch } from "@/components/ui/dashboard-search"
import { QuickActions } from "@/components/ui/quick-action"
import { VehicleCard } from "@/components/ui/vehicle-card"
import { RecentTrips } from "@/components/ui/recent-trips"

import { MaintenanceSection } from "@/components/ui/breakdown-historysection"
import { SettingsSection } from "@/components/ui/setting-section"

import {
  RecommendedGarages,
  type Garage,
} from "@/components/ui/recommande-garage"

import { DashboardMap } from "@/components/ui/dashboard-map"
import { Notification } from "@/components/ui/notification"

import { VehiclesSection } from "@/components/ui/vehicules-section"
import { ProfileSection } from "@/components/ui/profile-section"
import { LiveChatWidget } from "@/components/ui/LiveChatWidget"

import { useDashboard } from "@/Hooks/use-dashboard"

/* =====================================================
   GARAGES
===================================================== */

const garages: Garage[] = [
  {
    id: 1,
    name: "Garage Central Yaoundé",
    distance: "2,4 km",
    rating: 4.8,
    reviews: 120,
    type: "Mécanique générale",
    lat: 3.848,
    lng: 11.502,
  },
  {
    id: 2,
    name: "Auto Express",
    distance: "3,1 km",
    rating: 4.6,
    reviews: 85,
    type: "Diagnostic automobile",
    lat: 3.855,
    lng: 11.51,
  },
  {
    id: 3,
    name: "MecaPro",
    distance: "4,2 km",
    rating: 4.5,
    reviews: 67,
    type: "Réparation automobile",
    lat: 3.838,
    lng: 11.495,
  },
]

/* =====================================================
   MODAL GÉNÉRIQUE
   — utilisée pour Véhicules et Profil en attendant/à la
   place de composants dédiés
===================================================== */

function Modal({
  title,
  onClose,
  children,
}: {
  title: string
  onClose: () => void
  children: React.ReactNode
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">{title}</h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {children}
      </div>
    </div>
  )
}

/* =====================================================
   DASHBOARD
===================================================== */

export default function Dashboard() {
  const navigate = useNavigate()

  const dashboard = useDashboard()
  const storedUser = localStorage.getItem("user")
  let userName = "conductrice"

  if (storedUser) {
    try {
      const user = JSON.parse(storedUser) as {
        fullName?: string
        name?: string
      }
      const name = user.fullName || user.name

      if (name?.trim()) {
        userName = name.trim()
      }
    } catch {
      userName = "conductrice"
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("access_token")
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <div className="min-h-screen bg-[#F7FBFF] text-slate-800">
      <div className="flex min-h-screen">
        {/* =================================================
            SIDEBAR
        ================================================= */}

        <DashboardSidebar
          activeSection={dashboard.activeSection}
          onSectionChange={dashboard.setActiveSection}
          onEmergency={dashboard.handleEmergency}
          onVehicles={() => dashboard.setShowVehicles(true)}
          onProfile={() => dashboard.setShowProfile(true)}
          onLogout={handleLogout}
        />

        {/* =================================================
            CONTENU PRINCIPAL
        ================================================= */}

        <main className="min-w-0 flex-1 overflow-y-auto bg-[radial-gradient(circle_at_top_right,rgba(83,50,216,0.18),transparent_34rem)] bg-[#F7FBFF] p-4 sm:p-6 xl:p-8">
          {/* HEADER */}

          <DashboardHeader
            userName={userName}
            showNotifications={dashboard.showNotifications}
            onToggleNotifications={() =>
              dashboard.setShowNotifications(!dashboard.showNotifications)
            }
          />

          {/* TABLEAU DE BORD */}

          {(dashboard.activeSection === "dashboard" || dashboard.activeSection === "chat") && (
            <>
              <DashboardSearch
                search={dashboard.search}
                destination={dashboard.destination}
                onSearchChange={dashboard.setSearch}
                onSearch={dashboard.handleSearch}
                onClear={dashboard.handleClearSearch}
              />

              {dashboard.isSearching && (
                <div className="mb-5 rounded-xl bg-[#E6F1FB] px-4 py-3 text-sm text-[#1468A8]">
                  🔎 Recherche de la destination...
                </div>
              )}

              {dashboard.routeInfo && (
                <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="text-xs text-slate-400">Distance</p>
                    <p className="mt-1 text-xl font-bold text-[#1468A8]">
                      {dashboard.routeInfo.distance >= 1000
                        ? `${(dashboard.routeInfo.distance / 1000).toFixed(1)} km`
                        : `${Math.round(dashboard.routeInfo.distance)} m`}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="text-xs text-slate-400">Durée estimée</p>
                    <p className="mt-1 text-xl font-bold text-[#639922]">
                      {Math.round(dashboard.routeInfo.duration / 60)} min
                    </p>
                  </div>
                </div>
              )}

              <div className="mb-6">
                <QuickActions
                  onRoute={dashboard.handleRoute}
                  onEmergency={dashboard.handleEmergency}
                  onGarage={() => dashboard.setSelectedGarage(garages[0])}
                />
              </div>

              <VehicleCard onClick={() => dashboard.setShowVehicles(true)} />

              {/* Détail du garage sélectionné */}

              {dashboard.selectedGarage && (
                <div className="mt-6 flex items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[#1468A8]">
                      <Car className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="font-semibold text-slate-900">
                        {dashboard.selectedGarage.name}
                      </p>

                      <p className="mt-0.5 text-xs text-slate-500">
                        {dashboard.selectedGarage.type}
                      </p>

                      <div className="mt-2 flex items-center gap-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />
                          {dashboard.selectedGarage.distance}
                        </span>

                        <span className="flex items-center gap-1">
                          <Star className="h-3.5 w-3.5 text-amber-400" />
                          {dashboard.selectedGarage.rating} (
                          {dashboard.selectedGarage.reviews} avis)
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => dashboard.setSelectedGarage(null)}
                    aria-label="Fermer le détail du garage"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}

              <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-2">
                <RecentTrips />

                <RecommendedGarages
                  garages={garages}
                  onSelect={dashboard.setSelectedGarage}
                />
              </div>
            </>
          )}

          {/* HISTORIQUE */}

          {dashboard.activeSection === "historique" && (
            <MaintenanceSection />
          )}

          {/* PARAMETRES */}

          {dashboard.activeSection === "parametres" && <SettingsSection />}
        </main>

        {/* CARTE — uniquement sur le dashboard */}

        {(dashboard.activeSection === "dashboard" || dashboard.activeSection === "chat") && (
          <DashboardMap
            position={dashboard.position}
            destination={dashboard.destinationLocation}
            garages={garages}
            routeCoordinates={dashboard.routeCoordinates}
            onGarageSelect={dashboard.setSelectedGarage}
            onGeolocation={dashboard.handleGeolocation}
          />
        )}
      </div>

      {/* =================================================
          MODAL VÉHICULES
          — à remplacer par ton composant dédié si tu en as
          déjà un (ex: VehiclesSection)
      ================================================= */}

      {dashboard.showVehicles && (
        <Modal
          title="Mes véhicules"
          onClose={() => dashboard.setShowVehicles(false)}
        >
          <VehiclesSection />
        </Modal>
      )}

      {/* =================================================
          MODAL PROFIL
          — à remplacer par ton composant dédié si tu en as
          déjà un (ex: ProfileSection)
      ================================================= */}

      {dashboard.showProfile && (
        <Modal
          title="Mon profil"
          onClose={() => dashboard.setShowProfile(false)}
        >
          <ProfileSection />
        </Modal>
      )}

          {/* NOTIFICATION */}

      <Notification
        message={dashboard.notification}
        onClose={() => dashboard.setNotification("")}
      />

      {/* LIVE CHAT AUTOMOBILISTE */}
      <LiveChatWidget
        currentUserId="auto-1"
        currentUserName={userName}
        currentUserRole="automobiliste"
        isOpenDefault={dashboard.activeSection === "chat"}
      />
    </div>
  )
}

