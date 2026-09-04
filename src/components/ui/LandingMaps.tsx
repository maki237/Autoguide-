import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet"
import { useState } from "react"
import { Check, Route as RouteIcon, SlidersHorizontal } from "lucide-react"

import L from "leaflet"
import "leaflet/dist/leaflet.css"

import markerIcon from "leaflet/dist/images/marker-icon.png"
import markerShadow from "leaflet/dist/images/marker-shadow.png"

// Configuration de l'icône Leaflet
const defaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

const garages = [
  {
    id: 1,
    name: "Garage Auto Plus",
    position: [3.848, 11.502] as [number, number],
    description: "Garage automobile disponible",
    available: true,
  },
  {
    id: 2,
    name: "Garage Central",
    position: [3.856, 11.520] as [number, number],
    description: "Réparation et entretien automobile",
    available: true,
  },
  {
    id: 3,
    name: "Garage Express",
    position: [3.835, 11.495] as [number, number],
    description: "Intervention rapide",
    available: false,
  },
]

const driverPosition: [number, number] = [3.848, 11.502]
const destination: [number, number] = [3.8843, 11.5021]

export default function LandingMap() {
  const [showRoute, setShowRoute] = useState(true)
  const [onlyAvailable, setOnlyAvailable] = useState(false)

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl">
      <div className="absolute right-3 top-3 z-[1000] flex flex-wrap justify-end gap-2">
        <button
          type="button"
          onClick={() => setShowRoute((visible) => !visible)}
          className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-2 text-xs font-semibold shadow-sm transition ${
            showRoute
              ? "border-blue-200 bg-[#1468A8] text-white"
              : "border-white/80 bg-white/95 text-slate-600"
          }`}
        >
          <RouteIcon className="h-3.5 w-3.5" />
          Itinéraire
        </button>
        <button
          type="button"
          onClick={() => setOnlyAvailable((visible) => !visible)}
          className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-2 text-xs font-semibold shadow-sm transition ${
            onlyAvailable
              ? "border-green-200 bg-green-600 text-white"
              : "border-white/80 bg-white/95 text-slate-600"
          }`}
        >
          {onlyAvailable ? <Check className="h-3.5 w-3.5" /> : <SlidersHorizontal className="h-3.5 w-3.5" />}
          Disponibles
        </button>
      </div>
      <MapContainer
        center={driverPosition}
        zoom={13}
        scrollWheelZoom={true}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {showRoute && (
          <Polyline
            positions={[driverPosition, [3.862, 11.509], destination]}
            pathOptions={{ color: "#1468A8", weight: 5, opacity: 0.9 }}
          />
        )}

        <Marker position={driverPosition} icon={defaultIcon}>
          <Popup>Votre position : Yaoundé</Popup>
        </Marker>

        <Marker position={destination} icon={defaultIcon}>
          <Popup>Destination : Bastos</Popup>
        </Marker>

        {garages
          .filter((garage) => !onlyAvailable || garage.available)
          .map((garage) => (
          <Marker
            key={garage.id}
            position={garage.position}
            icon={defaultIcon}
          >
            <Popup>
              <div className="space-y-1">
                <h3 className="font-semibold">
                  {garage.name}
                </h3>

                <p className="text-sm text-gray-600">
                  {garage.description}
                </p>
              </div>
            </Popup>
          </Marker>
          ))}
      </MapContainer>
    </div>
  )
}