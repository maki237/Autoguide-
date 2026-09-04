import { useNavigate } from "react-router-dom"

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
    lng: 11.510,
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

  return (
    <div className="min-h-screen bg-[#eef4f8] text-slate-800">

      <div className="flex min-h-screen">

        {/* =================================================
            SIDEBAR
        ================================================= */}

        <DashboardSidebar
          activeSection={dashboard.activeSection}

          onSectionChange={dashboard.setActiveSection}

          onEmergency={dashboard.handleEmergency}

          onVehicles={() =>
            dashboard.setShowVehicles(true)
          }

          onProfile={() =>
            dashboard.setShowProfile(true)
          }

          onLogout={() =>
            navigate("/login")
          }
        />


        {/* =================================================
            CONTENU PRINCIPAL
        ================================================= */}

        <main
          className="
            min-w-0
            flex-1
            overflow-y-auto
            p-4
            sm:p-6
            xl:p-8
          "
        >

          {/* =================================================
              HEADER
          ================================================= */}

          <DashboardHeader
            userName={userName}
            showNotifications={
              dashboard.showNotifications
            }

            onToggleNotifications={() =>
              dashboard.setShowNotifications(
                !dashboard.showNotifications
              )
            }
          />


          {/* =================================================
              TABLEAU DE BORD
          ================================================= */}

          {dashboard.activeSection === "dashboard" && (
            <>

              {/* =================================================
                  RECHERCHE
              ================================================= */}

              <DashboardSearch
                search={dashboard.search}

                destination={dashboard.destination}

                onSearchChange={
                  dashboard.setSearch
                }

                onSearch={
                  dashboard.handleSearch
                }

                onClear={
                  dashboard.handleClearSearch
                }
              />


              {/* =================================================
                  RECHERCHE EN COURS
              ================================================= */}

              {dashboard.isSearching && (
                <div
                  className="
                    mb-5
                    rounded-xl
                    bg-[#E6F1FB]
                    px-4
                    py-3
                    text-sm
                    text-[#1468A8]
                  "
                >
                  🔎 Recherche de la destination...
                </div>
              )}


              {/* =================================================
                  INFORMATIONS ITINERAIRE
              ================================================= */}

              {dashboard.routeInfo && (
                <div
                  className="
                    mb-5
                    grid
                    grid-cols-1
                    gap-3
                    sm:grid-cols-2
                  "
                >

                  {/* DISTANCE */}

                  <div
                    className="
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      p-4
                      shadow-sm
                    "
                  >
                    <p className="text-xs text-slate-400">
                      Distance
                    </p>

                    <p
                      className="
                        mt-1
                        text-xl
                        font-bold
                        text-[#1468A8]
                      "
                    >
                      {dashboard.routeInfo.distance >= 1000
                        ? `${(
                            dashboard.routeInfo.distance / 1000
                          ).toFixed(1)} km`
                        : `${Math.round(
                            dashboard.routeInfo.distance
                          )} m`}
                    </p>
                  </div>


                  {/* DUREE */}

                  <div
                    className="
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      p-4
                      shadow-sm
                    "
                  >
                    <p className="text-xs text-slate-400">
                      Durée estimée
                    </p>

                    <p
                      className="
                        mt-1
                        text-xl
                        font-bold
                        text-[#639922]
                      "
                    >
                      {Math.round(
                        dashboard.routeInfo.duration / 60
                      )}{" "}
                      min
                    </p>
                  </div>

                </div>
              )}


              {/* =================================================
                  ACTIONS RAPIDES
              ================================================= */}

              <div className="mb-6">
              <QuickActions
                onRoute={
                  dashboard.handleRoute
                }

                onEmergency={
                  dashboard.handleEmergency
                }

                onGarage={() =>
                  dashboard.setSelectedGarage(
                    garages[0]
                  )
                }
              />
              </div>


              {/* =================================================
                  VEHICULE
              ================================================= */}

              <VehicleCard
                onClick={() =>
                  dashboard.setShowVehicles(true)
                }
              />


              {/* =================================================
                  TRAJETS + GARAGES
              ================================================= */}

              <div
                className="
                  mt-6
                  grid
                  grid-cols-1
                  gap-5
                  xl:grid-cols-2
                "
              >
                <RecentTrips />

                <RecommendedGarages
                  garages={garages}

                  onSelect={
                    dashboard.setSelectedGarage
                  }
                />
              </div>

            </>
          )}


          {/* =================================================
              HISTORIQUE DE PANNE
          ================================================= */}

          {dashboard.activeSection === "historique" && (
            <MaintenanceSection />
          )}


          {/* =================================================
              PARAMETRES
          ================================================= */}

          {dashboard.activeSection === "parametres" && (
            <SettingsSection />
          )}

        </main>


        {/* =================================================
            CARTE
            UNIQUEMENT SUR LE DASHBOARD
        ================================================= */}

        {dashboard.activeSection === "dashboard" && (
          <DashboardMap
            position={dashboard.position}

            destination={
              dashboard.destinationLocation
            }

            garages={garages}

            routeCoordinates={
              dashboard.routeCoordinates
            }

            onGarageSelect={
              dashboard.setSelectedGarage
            }

            onGeolocation={
              dashboard.handleGeolocation
            }
          />
        )}

      </div>


      {/* =================================================
          NOTIFICATION
      ================================================= */}

      <Notification
        message={dashboard.notification}

        onClose={() =>
          dashboard.setNotification("")
        }
      />

    </div>
  )
}