import { useEffect } from "react"

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Polyline,
  useMap,
} from "react-leaflet"

import L from "leaflet"

import "leaflet/dist/leaflet.css"

import markerIcon from "leaflet/dist/images/marker-icon.png"
import markerShadow from "leaflet/dist/images/marker-shadow.png"


/* =========================================================
   ICON LEAFLET
========================================================= */

const defaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,

  iconSize: [25, 41],

  iconAnchor: [12, 41],
})

L.Marker.prototype.options.icon =
  defaultIcon


/* =========================================================
   TYPES
========================================================= */

export type Destination = {
  name: string
  lat: number
  lng: number
}


export type Garage = {
  id: number
  name: string
  distance: string
  rating: number
  reviews: number
  type: string
  lat: number
  lng: number
}


type DashboardMapProps = {

  position: [
    number,
    number
  ]

  destination:
    Destination | null

  garages:
    Garage[]

  routeCoordinates:
    [number, number][]

  onGarageSelect:
    (garage: Garage) => void

  onGeolocation:
    () => void
}


/* =========================================================
   CONTROLE DE LA CARTE
========================================================= */

function MapController({
  position,
  destination,
}: {
  position: [number, number]
  destination: Destination | null
}) {

  const map = useMap()


  useEffect(() => {

    if (destination) {

      const bounds =
        L.latLngBounds([
          position,

          [
            destination.lat,
            destination.lng,
          ],
        ])


      map.fitBounds(
        bounds,
        {
          padding: [
            50,
            50,
          ],
        }
      )

    } else {

      map.setView(
        position,
        14
      )

    }

  }, [
    position,
    destination,
    map,
  ])


  return null
}


/* =========================================================
   BOUTON RECENTRER
========================================================= */

function RecenterButton({
  position,
}: {
  position: [number, number]
}) {

  const map = useMap()


  return (

    <button
      type="button"

      onClick={() =>
        map.setView(
          position,
          14
        )
      }

      className="
        absolute
        bottom-5
        right-5
        z-[1000]
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
        bg-white
        text-slate-600
        shadow-lg
        transition
        hover:bg-[#E6F1FB]
        hover:text-[#1468A8]
      "

      title="Recentrer la carte"
    >

      📍

    </button>
  )
}


/* =========================================================
   CARTE
========================================================= */

export function DashboardMap({

  position,

  destination,

  garages,

  routeCoordinates,

  onGarageSelect,

  onGeolocation,

}: DashboardMapProps) {


  return (

    <aside
      className="
        hidden
        w-[380px]
        shrink-0
        p-5
        xl:block
      "
    >

      <div
        className="
          relative
          h-full
          min-h-[700px]
          overflow-hidden
          rounded-2xl
          border
          border-slate-200
          bg-white
          shadow-sm
        "
      >


        {/* =================================================
            MAP
        ================================================= */}

        <MapContainer

          center={
            position
          }

          zoom={13}

          className="
            h-full
            w-full
          "

        >


          {/* =================================================
              OPEN STREET MAP
          ================================================= */}

          <TileLayer

            attribution="
              &copy;
              OpenStreetMap contributors
            "

            url="
              https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
            "

          />


          {/* =================================================
              CONTROLE
          ================================================= */}

          <MapController

            position={
              position
            }

            destination={
              destination
            }

          />


          {/* =================================================
              POSITION UTILISATEUR
          ================================================= */}

          <Marker
            position={
              position
            }
          >

            <Popup>

              📍

              <strong>
                Votre position
              </strong>

            </Popup>

          </Marker>


          {/* =================================================
              DESTINATION
          ================================================= */}

          {destination && (

            <Marker

              position={[
                destination.lat,
                destination.lng,
              ]}

            >

              <Popup>

                <strong>
                  📍 Destination
                </strong>

                <br />

                {destination.name}

              </Popup>

            </Marker>

          )}


          {/* =================================================
              GARAGES
          ================================================= */}

          {garages.map(
            (garage) => (

              <Marker

                key={
                  garage.id
                }

                position={[
                  garage.lat,
                  garage.lng,
                ]}

                eventHandlers={{
                  click: () =>
                    onGarageSelect(
                      garage
                    ),
                }}

              >

                <Popup>

                  <strong>
                    {garage.name}
                  </strong>

                  <br />

                  ⭐{" "}
                  {garage.rating}

                  <br />

                  📍{" "}
                  {garage.distance}

                </Popup>

              </Marker>

            )
          )}


          {/* =================================================
              ITINERAIRE
          ================================================= */}

          {routeCoordinates.length >
            0 && (

            <Polyline

              positions={
                routeCoordinates
              }

              pathOptions={{
                color:
                  "#1468A8",

                weight:
                  6,

                opacity:
                  0.85,
              }}

            />

          )}


          {/* =================================================
              RECENTRER
          ================================================= */}

          <RecenterButton

            position={
              position
            }

          />

        </MapContainer>


        {/* =================================================
            BOUTON MA POSITION
        ================================================= */}

        <button

          type="button"

          onClick={
            onGeolocation
          }

          className="
            absolute
            left-5
            top-5
            z-[1000]
            flex
            items-center
            gap-2
            rounded-xl
            bg-white
            px-4
            py-3
            text-sm
            font-medium
            text-slate-700
            shadow-lg
            transition
            hover:bg-[#E6F1FB]
            hover:text-[#1468A8]
          "

        >

          📍

          Ma position

        </button>


        {/* =================================================
            BADGE GARAGES
        ================================================= */}

        <div

          className="
            absolute
            bottom-5
            left-5
            z-[1000]
            rounded-xl
            border
            border-slate-200
            bg-white/95
            px-4
            py-3
            shadow-lg
            backdrop-blur
          "

        >

          <div
            className="
              flex
              items-center
              gap-2
            "
          >

            <div
              className="
                h-2
                w-2
                rounded-full
                bg-[#639922]
              "
            />

            <span
              className="
                text-xs
                font-medium
                text-slate-600
              "
            >
              Garages disponibles
            </span>

          </div>

        </div>

      </div>

    </aside>
  )
}