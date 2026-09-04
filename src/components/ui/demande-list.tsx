import { useState } from "react"

import {
  DemandeCard,
  type Demande,
} from "./demande-card"

interface DemandeListProps {
  onNotification?: (message: string) => void
}

const initialDemandes: Demande[] = [
  {
    id: 1,
    client: "Marie L.",
    quartier: "Bastos, Yaoundé",
    distance: 2.4,
    temps: 8,
    panne: "Batterie",
    vehicule: "Toyota Corolla · 2018",
    description:
      "Ma voiture ne démarre plus depuis quelques minutes. Je suis garée près d'une station-service.",
    latitude: "3.8846",
    longitude: "11.5147",
    estimation: "8 000 - 15 000",
    urgent: true,
    status: "pending",
  },

  {
    id: 2,
    client: "Paul B.",
    quartier: "Mvan, Yaoundé",
    distance: 5.1,
    temps: 15,
    panne: "Crevaison",
    vehicule: "Hyundai Tucson · 2020",
    description:
      "J'ai crevé un pneu et je suis actuellement au bord de la route.",
    latitude: "3.8260",
    longitude: "11.5230",
    estimation: "10 000 - 20 000",
    urgent: false,
    status: "pending",
  },

  {
    id: 3,
    client: "Kevin M.",
    quartier: "Essos, Yaoundé",
    distance: 6.8,
    temps: 19,
    panne: "Surchauffe",
    vehicule: "Peugeot 308 · 2017",
    description:
      "Le moteur chauffe beaucoup et j'ai préféré m'arrêter avant de continuer.",
    latitude: "3.8700",
    longitude: "11.5400",
    estimation: "15 000 - 30 000",
    urgent: false,
    status: "pending",
  },
]

export function DemandeList({
  onNotification,
}: DemandeListProps) {

  const [demandes, setDemandes] =
    useState<Demande[]>(initialDemandes)

  const pendingCount = demandes.filter(
    (demande) => demande.status === "pending"
  ).length

  const accept = (id: number) => {

    setDemandes((current) =>
      current.map((demande) =>
        demande.id === id
          ? {
              ...demande,
              status: "accepted",
            }
          : demande
      )
    )

    onNotification?.(
      "Intervention acceptée. Le client a été informé."
    )
  }

  const refuse = (id: number) => {

    setDemandes((current) =>
      current.map((demande) =>
        demande.id === id
          ? {
              ...demande,
              status: "refused",
            }
          : demande
      )
    )

    onNotification?.(
      "La demande a été refusée."
    )
  }

  const navigate = (id: number) => {

    const demande = demandes.find(
      (item) => item.id === id
    )

    if (!demande) return

    onNotification?.(
      `Navigation vers ${demande.quartier} démarrée.`
    )
  }

  const call = (id: number) => {

    const demande = demandes.find(
      (item) => item.id === id
    )

    if (!demande) return

    onNotification?.(
      `Appel du client ${demande.client}...`
    )
  }

  return (
    <section>

      {/* TITRE */}

      <div className="mb-5 flex items-end justify-between">

        <div>

          <div className="flex items-center gap-3">

            <h2 className="text-2xl font-bold text-slate-900">
              Demandes à proximité
            </h2>

            {pendingCount > 0 && (
              <span className="rounded-full bg-red-50 px-3 py-1 text-[11px] font-bold text-red-600">
                {pendingCount} nouvelle
                {pendingCount > 1 ? "s" : ""}
              </span>
            )}

          </div>

          <p className="mt-1 text-sm text-slate-500">
            Les automobilistes ayant besoin d'une assistance dans votre zone.
          </p>

        </div>

        <button
          type="button"
          onClick={() =>
            onNotification?.("Toutes les demandes sont affichées dans cette liste.")
          }
          className="
            rounded-xl
            border
            border-slate-200
            bg-white
            px-4
            py-2
            text-xs
            font-semibold
            text-slate-600
            transition
            hover:border-blue-200
            hover:bg-blue-50
            hover:text-[#1677C8]
          "
        >
          Voir toutes les demandes
        </button>

      </div>

      {/* CARTES */}

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">

        {demandes.map((demande) => (
          <DemandeCard
            key={demande.id}
            demande={demande}
            onAccept={accept}
            onRefuse={refuse}
            onNavigate={navigate}
            onCall={call}
          />
        ))}

      </div>

    </section>
  )
}