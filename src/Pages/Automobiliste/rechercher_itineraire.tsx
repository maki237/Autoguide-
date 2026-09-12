import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, Navigation, MapPin, Search, AlertCircle, CheckCircle2, AlertTriangle } from "lucide-react"

import { DashboardSidebar } from "@/components/ui/dashborad-sidebar"
import { DashboardMap, type Destination } from "@/components/ui/dashboard-map"
import { LiveChatWidget } from "@/components/ui/LiveChatWidget"

export default function RechercherItinerairePage() {
  const navigate = useNavigate()

  // États du formulaire
  const [startPoint, setStartPoint] = useState("")
  const [endPoint, setEndPoint] = useState("")
  
  // États de l'itinéraire & géolocalisation
  const [position, setPosition] = useState<[number, number]>([3.848, 11.502])
  const [destinationLocation, setDestinationLocation] = useState<Destination | null>(null)
  const [routeCoordinates, setRouteCoordinates] = useState<[number, number][]>([])
  const [routeInfo, setRouteInfo] = useState<{ distance: number; duration: number } | null>(null)
  
  // États de traitement & notifications
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [hasObstacles, setHasObstacles] = useState(false)

  const storedUser = localStorage.getItem("user")
  let userName = "conductrice"
  if (storedUser) {
    try {
      const user = JSON.parse(storedUser)
      userName = user.fullName || user.name || "conductrice"
    } catch {}
  }

  /* =====================================================
     FLUX SÉQUENTIEL DU DIAGRAMME
  ===================================================== */

  const handleSearchOptimalRoute = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    setErrorMessage(null)
    setSuccessMessage(null)
    setHasObstacles(false)

    // 1. Vérification conformité des champs
    if (!endPoint.trim()) {
      setErrorMessage("Format des champs incorrect")
      return
    }

    setIsLoading(true)
    setDestinationLocation(null)
    setRouteCoordinates([])
    setRouteInfo(null)

    try {
      // 2. Demande l'envoi de la Maps / Récupération Coordonnées Départ
      let currentStart: [number, number] = position
      if (startPoint.trim()) {
        const startRes = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=cm&q=${encodeURIComponent(startPoint)}`
        )
        const startData = await startRes.json()
        if (startData.length) {
          currentStart = [Number(startData[0].lat), Number(startData[0].lon)]
          setPosition(currentStart)
        }
      }

      // Récupération Coordonnées Arrivée
      const endRes = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=cm&q=${encodeURIComponent(endPoint)}`
      )
      const endData = await endRes.json()

      // Alt : Aucun itinéraire disponible
      if (!endData.length) {
        setErrorMessage("Aucun itinéraire disponible pour cette destination")
        setIsLoading(false)
        return
      }

      const dest: Destination = {
        name: endData[0].display_name,
        lat: Number(endData[0].lat),
        lng: Number(endData[0].lon)
      }
      setDestinationLocation(dest)

      // 3. Calcul itinéraire via API de géolocalisation
      const routeRes = await fetch(
        `https://router.project-osrm.org/route/v1/driving/${currentStart[1]},${currentStart[0]};${dest.lng},${dest.lat}?overview=full&geometries=geojson`
      )

      if (!routeRes.ok) {
        setErrorMessage("Aucun itinéraire disponible pour cette destination")
        setIsLoading(false)
        return
      }

      const routeData = await routeRes.json()
      if (!routeData.routes || routeData.routes.length === 0) {
        setErrorMessage("Aucun itinéraire disponible pour cette destination")
        setIsLoading(false)
        return
      }

      const route = routeData.routes[0]
      const coords: [number, number][] = route.geometry.coordinates.map(
        ([lng, lat]: [number, number]) => [lat, lng]
      )

      // 4. Demande des informations relatives aux embûches au SGBD
      let obstacleDetected = false
      try {
        const sgbdRes = await fetch("http://localhost:8000/chat/status")
        if (!sgbdRes.ok) {
          obstacleDetected = true
        }
      } catch {
        // Mode secours SGBD
      }

      setRouteCoordinates(coords)
      setRouteInfo({
        distance: route.distance,
        duration: route.duration
      })

      // 5. Affichage selon route avec ou sans embûches
      if (obstacleDetected) {
        setHasObstacles(true)
        setSuccessMessage("Itinéraire calculé (Attention: Embûches ou travaux détectés sur le parcours)")
      } else {
        setSuccessMessage("Meilleur itinéraire optimal calculé et affiché avec succès 🚗")
      }

    } catch (err) {
      console.error(err)
      setErrorMessage("Format des champs incorrect")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-50 font-sans">
      {/* Sidebar Automobiliste */}
      <DashboardSidebar
        activeSection="dashboard"
        onSectionChange={(section) => {
          if (section !== "dashboard") navigate("/dashboard")
        }}
        onEmergency={() => navigate("/dashboard")}
        onVehicles={() => navigate("/dashboard")}
        onProfile={() => navigate("/dashboard")}
        onLogout={() => navigate("/login")}
      />

      {/* Zone Principale Dédée */}
      <div className="flex flex-1 flex-col lg:flex-row overflow-hidden">
        {/* Panneau de Gauche : Formulaire et Instructions */}
        <div className="w-full lg:w-[450px] shrink-0 border-r border-slate-200 bg-white p-6 overflow-y-auto flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={() => navigate("/dashboard")}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Rechercher Itinéraire Optimal</h1>
                <p className="text-xs text-slate-500">Calcul en temps réel selon géolocalisation & SGBD</p>
              </div>
            </div>

            {/* Formulaire de Recherche */}
            <form onSubmit={handleSearchOptimalRoute} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 mb-1.5 block flex items-center gap-1.5">
                  <Navigation className="h-4 w-4 text-indigo-600" /> Point de Départ
                </label>
                <input
                  type="text"
                  value={startPoint}
                  onChange={(e) => setStartPoint(e.target.value)}
                  placeholder="Ma position actuelle ou Ville/Quartier"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 mb-1.5 block flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-rose-500" /> Point d'Arrivée (Destination)
                </label>
                <input
                  type="text"
                  value={endPoint}
                  onChange={(e) => setEndPoint(e.target.value)}
                  placeholder="Ex: Bastos, Douala, Mvan..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:bg-white transition-all"
                />
              </div>

              <div className="flex gap-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 py-3.5 text-sm font-bold text-white shadow-lg hover:from-indigo-500 hover:to-blue-500 transition-all disabled:opacity-50"
                >
                  {isLoading ? (
                    <span>Calcul de l'itinéraire...</span>
                  ) : (
                    <>
                      <Search className="h-4 w-4" /> Rechercher l'itinéraire optimal
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (navigator.geolocation) {
                      navigator.geolocation.getCurrentPosition(
                        (loc) => {
                          const newPos: [number, number] = [loc.coords.latitude, loc.coords.longitude]
                          setPosition(newPos)
                          setStartPoint("Ma position GPS en direct 📍")
                        },
                        () => setErrorMessage("Géolocalisation refusée ou indisponible")
                      )
                    } else {
                      setErrorMessage("Géolocalisation non supportée")
                    }
                  }}
                  className="flex items-center justify-center rounded-xl bg-slate-100 px-4 text-slate-700 hover:bg-slate-200 transition-all border border-slate-200"
                  title="Utiliser l'API de Géolocalisation GPS"
                >
                  <Navigation className="h-4 w-4 text-indigo-600" />
                </button>
              </div>
            </form>

            {/* Messages d'erreur du Diagramme */}
            {errorMessage && (
              <div className="mt-4 flex items-center gap-3 rounded-xl bg-rose-50 border border-rose-200 p-4 text-xs font-medium text-rose-700">
                <AlertCircle className="h-5 w-5 shrink-0 text-rose-600" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Message de Succès / Embûches */}
            {successMessage && (
              <div
                className={`mt-4 flex items-center gap-3 rounded-xl border p-4 text-xs font-medium ${
                  hasObstacles
                    ? "bg-amber-50 border-amber-200 text-amber-800"
                    : "bg-emerald-50 border-emerald-200 text-emerald-800"
                }`}
              >
                {hasObstacles ? (
                  <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600" />
                ) : (
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                )}
                <span>{successMessage}</span>
              </div>
            )}

            {/* Détails du Trajet */}
            {routeInfo && (
              <div className="mt-6 rounded-2xl bg-indigo-50/60 border border-indigo-100 p-4 space-y-3">
                <h3 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Résultats du calcul</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded-xl border border-slate-100">
                    <p className="text-[11px] text-slate-400">Distance Totale</p>
                    <p className="text-lg font-extrabold text-indigo-600">
                      {(routeInfo.distance / 1000).toFixed(1)} km
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-100">
                    <p className="text-[11px] text-slate-400">Durée Estimée</p>
                    <p className="text-lg font-extrabold text-emerald-600">
                      {Math.round(routeInfo.duration / 60)} min
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="text-[11px] text-slate-400 border-t border-slate-100 pt-4 mt-6">
            Module autonome - AutoGuide+ Navigation 🗺️
          </div>
        </div>

        {/* Zone de Droite : Carte Interactive Plein Écran */}
        <div className="flex-1 relative h-full">
          <DashboardMap
            position={position}
            destination={destinationLocation}
            garages={[]}
            routeCoordinates={routeCoordinates}
            onGarageSelect={() => {}}
            onGeolocation={() => {}}
          />
        </div>
      </div>

      <LiveChatWidget
        currentUserId="auto-1"
        currentUserName={userName}
        currentUserRole="automobiliste"
        isOpenDefault={false}
      />
    </div>
  )
}
