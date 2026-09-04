import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

const destination = { lat: 3.8843, lng: 11.5021 }
const garage = { lat: 3.8768, lng: 11.5147 }

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

export default function OpenStreetMap() {
  return (
    <MapContainer
      center={[destination.lat, destination.lng]}
      zoom={13}
      scrollWheelZoom
      className="h-full w-full"
      aria-label="Carte interactive des itinéraires AutoGuide+"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[destination.lat, destination.lng]} icon={markerIcon}>
        <Popup>Destination : Bastos, Yaoundé</Popup>
      </Marker>
      <Marker position={[garage.lat, garage.lng]} icon={markerIcon}>
        <Popup>Garage de proximité</Popup>
      </Marker>
    </MapContainer>
  )
}
