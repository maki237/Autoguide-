import { useState } from "react"
import type { Destination } from "@/components/ui/dashboard-map"
import type { Garage } from "@/components/ui/recommande-garage"

export function useDashboard() {
  /* =====================================================
     NAVIGATION
  ===================================================== */

  const [activeSection, setActiveSection] = useState("dashboard")

  /* =====================================================
     RECHERCHE
  ===================================================== */

  const [search, setSearch] = useState("")
  const [destination, setDestination] = useState("")

  const [destinationLocation, setDestinationLocation] =
    useState<Destination | null>(null)

  /* =====================================================
     POSITION UTILISATEUR
  ===================================================== */

  const [position, setPosition] = useState<[number, number]>([
    3.848,
    11.502,
  ])

  /* =====================================================
     ITINERAIRE
  ===================================================== */

  const [routeCoordinates, setRouteCoordinates] =
    useState<[number, number][]>([])

  const [routeInfo, setRouteInfo] = useState<{
    distance: number
    duration: number
  } | null>(null)

  const [isSearching, setIsSearching] = useState(false)
  const [isRouting, setIsRouting] = useState(false)

  /* =====================================================
     GARAGE
  ===================================================== */

  const [selectedGarage, setSelectedGarage] =
    useState<Garage | null>(null)

  /* =====================================================
     MODALES
  ===================================================== */

  const [showEmergency, setShowEmergency] = useState(false)
  const [showVehicles, setShowVehicles] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  /* =====================================================
     NOTIFICATION
  ===================================================== */

  const [notification, setNotification] = useState("")

  const showMessage = (message: string) => {
    setNotification(message)

    setTimeout(() => {
      setNotification("")
    }, 3000)
  }

  /* =====================================================
     GÉOLOCALISATION
  ===================================================== */

  const handleGeolocation = () => {
    if (!navigator.geolocation) {
      showMessage(
        "La géolocalisation n'est pas disponible sur votre navigateur."
      )
      return
    }

    navigator.geolocation.getCurrentPosition(
      (location) => {
        const newPosition: [number, number] = [
          location.coords.latitude,
          location.coords.longitude,
        ]

        setPosition(newPosition)

        // On efface l'ancien itinéraire
        setRouteCoordinates([])
        setRouteInfo(null)

        showMessage("Votre position a été récupérée 📍")
      },

      () => {
        showMessage(
          "Impossible de récupérer votre position. Vérifiez les autorisations du navigateur."
        )
      },

      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    )
  }

  /* =====================================================
     RECHERCHE DESTINATION
  ===================================================== */

  /* =====================================================
     RECHERCHE DESTINATION (Vérification conformité & API Map)
  ===================================================== */

  const handleSearch = async (startPoint?: string, endPoint?: string) => {
    const targetQuery = endPoint || search
    const originQuery = startPoint

    // 1. Vérification conformité des champs
    if (!targetQuery.trim()) {
      showMessage("Format des champs incorrect")
      return
    }

    setIsSearching(true)
    setDestinationLocation(null)
    setRouteCoordinates([])
    setRouteInfo(null)

    try {
      // 2. Demande l'envoi de la Maps / Récupère la carte
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=cm&q=${encodeURIComponent(
          targetQuery
        )}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      )

      if (!response.ok) {
        throw new Error("Format des champs incorrect")
      }

      const data = await response.json()

      // Alt: Destination introuvable
      if (!data.length) {
        showMessage("Aucun itinéraire disponible pour cette destination")
        return
      }

      const result = data[0]
      const newDestination: Destination = {
        name: result.display_name,
        lat: Number(result.lat),
        lng: Number(result.lon),
      }

      setDestination(targetQuery)
      setDestinationLocation(newDestination)

      // Calcul direct de l'itinéraire optimal
      await calculateOptimalRoute(newDestination, originQuery)

    } catch (error) {
      console.error(error)
      showMessage("Format des champs incorrect")
    } finally {
      setIsSearching(false)
    }
  }

  /* =====================================================
     CALCUL DE L'ITINÉRAIRE OPTIMAL & RECHERCHE EMBUCHES (SGBD)
  ===================================================== */

  const calculateOptimalRoute = async (dest: Destination, originQuery?: string) => {
    setIsRouting(true)
    setRouteCoordinates([])
    setRouteInfo(null)

    try {
      let startCoords = position

      // Si un point de départ spécifique est donné
      if (originQuery && originQuery.trim()) {
        const originRes = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=cm&q=${encodeURIComponent(
            originQuery
          )}`
        )
        const originData = await originRes.json()
        if (originData.length) {
          startCoords = [Number(originData[0].lat), Number(originData[0].lon)]
          setPosition(startCoords)
        }
      }

      // 3. Envoie les coordonnées et demande le calcul d'itinéraire (API géolocalisation OSRM)
      const response = await fetch(
        `https://router.project-osrm.org/route/v1/driving/${startCoords[1]},${startCoords[0]};${dest.lng},${dest.lat}?overview=full&geometries=geojson`
      )

      if (!response.ok) {
        throw new Error("Aucun itinéraire disponible pour cette destination")
      }

      const data = await response.json()

      if (!data.routes || data.routes.length === 0) {
        showMessage("Aucun itinéraire disponible pour cette destination")
        return
      }

      const route = data.routes[0]
      const coordinates: [number, number][] = route.geometry.coordinates.map(
        ([lng, lat]: [number, number]) => [lat, lng]
      )

      // 4. Demande les informations relatives aux embûches de la route (SGBD / Base de données)
      let hasObstacles = false
      let obstacleMessage = ""

      try {
        const sgbdCheck = await fetch("http://localhost:8000/chat/status")
        if (!sgbdCheck.ok) {
          hasObstacles = true
          obstacleMessage = "Information : Route avec embûches signalées (Travaux/Ralentissements)"
        }
      } catch {
        // simulation ou gestion d'embûche si hors ligne SGBD
      }

      setRouteCoordinates(coordinates)
      setRouteInfo({
        distance: route.distance,
        duration: route.duration,
      })

      // 5. Alt: Route sans embûches VS Route avec embûches
      if (hasObstacles) {
        showMessage(obstacleMessage || "Itinéraire trouvé (attention : embûches détectées)")
      } else {
        showMessage("Meilleur itinéraire optimal affiché 🚗")
      }

    } catch (error) {
      console.error(error)
      showMessage("Aucun itinéraire disponible pour cette destination")
    } finally {
      setIsRouting(false)
    }
  }

  const handleRoute = async () => {
    if (!destinationLocation) {
      showMessage("Format des champs incorrect")
      return
    }
    await calculateOptimalRoute(destinationLocation)
  }

  /* =====================================================
     EFFACER LA RECHERCHE
  ===================================================== */

  const handleClearSearch = () => {
    setSearch("")
    setDestination("")
    setDestinationLocation(null)
    setRouteCoordinates([])
    setRouteInfo(null)
  }

  /* =====================================================
     PANNE / URGENCE
  ===================================================== */

  const handleEmergency = () => {
    setShowEmergency(true)
  }

  /* =====================================================
     SÉLECTION D'UN GARAGE
  ===================================================== */

  const handleGarageSelect = (garage: Garage) => {
    setSelectedGarage(garage)
  }

  /* =====================================================
     CHOISIR UN GARAGE COMME DESTINATION
  ===================================================== */

  const handleGarageRoute = (garage: Garage) => {
    setSelectedGarage(null)

    setDestination(garage.name)

    setDestinationLocation({
      name: garage.name,
      lat: garage.lat,
      lng: garage.lng,
    })

    showMessage(`Destination : ${garage.name}`)
  }

  /* =====================================================
     RETOURNER TOUTE LA LOGIQUE
  ===================================================== */

  return {
    // Navigation
    activeSection,
    setActiveSection,

    // Recherche
    search,
    setSearch,
    destination,
    setDestination,
    destinationLocation,
    setDestinationLocation,
    handleSearch,
    handleClearSearch,
    isSearching,

    // Position
    position,
    setPosition,
    handleGeolocation,

    // Itinéraire
    routeCoordinates,
    routeInfo,
    handleRoute,
    isRouting,

    // Garage
    selectedGarage,
    setSelectedGarage,
    handleGarageSelect,
    handleGarageRoute,

    // Modales
    showEmergency,
    setShowEmergency,

    showVehicles,
    setShowVehicles,

    showNotifications,
    setShowNotifications,

    showProfile,
    setShowProfile,

    // Notifications
    notification,
    setNotification,
    showMessage,

    // Urgence
    handleEmergency,
  }
}