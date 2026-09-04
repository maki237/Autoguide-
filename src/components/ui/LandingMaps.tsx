import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet"

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
  },
  {
    id: 2,
    name: "Garage Central",
    position: [3.856, 11.520] as [number, number],
    description: "Réparation et entretien automobile",
  },
  {
    id: 3,
    name: "Garage Express",
    position: [3.835, 11.495] as [number, number],
    description: "Intervention rapide",
  },
]

const driverPosition: [number, number] = [3.848, 11.502]
const destination: [number, number] = [3.8843, 11.5021]

export default function LandingMap() {
  return (
    <div className="w-full h-full overflow-hidden rounded-2xl">
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

        <Polyline
          positions={[driverPosition, [3.862, 11.509], destination]}
          pathOptions={{ color: "#1468A8", weight: 5, opacity: 0.9 }}
        />

        <Marker position={driverPosition} icon={defaultIcon}>
          <Popup>Votre position : Yaoundé</Popup>
        </Marker>

        <Marker position={destination} icon={defaultIcon}>
          <Popup>Destination : Bastos</Popup>
        </Marker>

        {garages.map((garage) => (
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