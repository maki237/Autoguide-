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

  const handleSearch = async () => {
    if (!search.trim()) {
      showMessage("Veuillez saisir une destination.")
      return
    }

    setIsSearching(true)

    setDestinationLocation(null)
    setRouteCoordinates([])
    setRouteInfo(null)

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=cm&q=${encodeURIComponent(
          search
        )}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      )

      if (!response.ok) {
        throw new Error("Erreur lors de la recherche.")
      }

      const data = await response.json()

      if (!data.length) {
        showMessage(
          "Destination introuvable. Essayez un nom plus précis."
        )
        return
      }

      const result = data[0]

      const newDestination: Destination = {
        name: result.display_name,
        lat: Number(result.lat),
        lng: Number(result.lon),
      }

      setDestination(search)
      setDestinationLocation(newDestination)

      showMessage(`Destination trouvée : ${search}`)
    } catch (error) {
      console.error(error)

      showMessage(
        "Impossible de rechercher cette destination."
      )
    } finally {
      setIsSearching(false)
    }
  }

  /* =====================================================
     CALCUL DE L'ITINERAIRE
  ===================================================== */

  const handleRoute = async () => {
    if (!destinationLocation) {
      showMessage(
        "Veuillez d'abord rechercher une destination."
      )
      return
    }

    setIsRouting(true)
    setRouteCoordinates([])
    setRouteInfo(null)

    try {
      const response = await fetch(
        `https://router.project-osrm.org/route/v1/driving/${position[1]},${position[0]};${destinationLocation.lng},${destinationLocation.lat}?overview=full&geometries=geojson`
      )

      if (!response.ok) {
        throw new Error("Erreur lors du calcul.")
      }

      const data = await response.json()

      if (!data.routes || data.routes.length === 0) {
        throw new Error("Aucun itinéraire trouvé.")
      }

      const route = data.routes[0]

      const coordinates: [number, number][] =
        route.geometry.coordinates.map(
          ([lng, lat]: [number, number]) => [lat, lng]
        )

      setRouteCoordinates(coordinates)

      setRouteInfo({
        distance: route.distance,
        duration: route.duration,
      })

      showMessage(
        "Itinéraire calculé avec succès 🚗"
      )
    } catch (error) {
      console.error(error)

      showMessage(
        "Impossible de calculer l'itinéraire."
      )
    } finally {
      setIsRouting(false)
    }
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