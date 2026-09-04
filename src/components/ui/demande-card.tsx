import {
  Check,
  Clock3,
  MapPin,
  Navigation,
  Phone,
  Car,
  X,
  AlertTriangle,
} from "lucide-react"

export interface Demande {
  id: number
  client: string
  quartier: string
  distance: number
  temps: number
  panne: string
  vehicule: string
  description: string
  latitude: string
  longitude: string
  estimation: string
  urgent: boolean
  status: "pending" | "accepted" | "refused"
}

interface DemandeCardProps {
  demande: Demande
  onAccept: (id: number) => void
  onRefuse: (id: number) => void
  onNavigate: (id: number) => void
  onCall: (id: number) => void
}

export function DemandeCard({
  demande,
  onAccept,
  onRefuse,
  onNavigate,
  onCall,
}: DemandeCardProps) {

  const accepted = demande.status === "accepted"
  const refused = demande.status === "refused"

  return (
    <article
      className={`
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        bg-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl

        ${
          demande.urgent && !accepted
            ? "border-orange-200"
            : accepted
              ? "border-green-300"
              : "border-slate-200"
        }

        ${refused ? "opacity-60" : ""}
      `}
    >

      {/* BARRE URGENCE */}

      {demande.urgent && !accepted && !refused && (
        <div className="flex items-center gap-2 bg-orange-50 px-5 py-2 text-xs font-bold text-orange-700">

          <AlertTriangle className="h-4 w-4" />

          Intervention urgente

        </div>
      )}

      {/* ACCEPTÉ */}

      {accepted && (
        <div className="flex items-center justify-between bg-green-700 px-5 py-2 text-xs font-semibold text-white">

          <span>
            ✓ Intervention acceptée
          </span>

          <span>
            En route
          </span>

        </div>
      )}

      <div className="p-5">

        {/* CLIENT */}

        <div className="flex items-start justify-between gap-4">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#1677C8]">
              <Car className="h-5 w-5" />
            </div>

            <div>

              <h3 className="font-bold text-slate-900">
                {demande.client}
              </h3>

              <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                <MapPin className="h-3.5 w-3.5" />
                {demande.quartier}
              </p>

            </div>

          </div>

          <span className="shrink-0 rounded-lg bg-red-50 px-3 py-2 text-xs font-bold text-red-600">
            {demande.panne}
          </span>

        </div>

        {/* VEHICULE */}

        <div className="mt-4 rounded-xl bg-slate-50 p-3">

          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
            Véhicule
          </p>

          <p className="mt-1 text-sm font-semibold text-slate-700">
            {demande.vehicule}
          </p>

        </div>

        {/* DESCRIPTION */}

        <div className="mt-3 rounded-xl border border-slate-100 bg-white p-3">

          <p className="text-xs leading-5 text-slate-600">
            « {demande.description} »
          </p>

        </div>

        {/* INFORMATIONS */}

        <div className="mt-4 grid grid-cols-3 gap-2">

          <div className="rounded-xl bg-slate-50 p-3">

            <MapPin className="h-4 w-4 text-[#1677C8]" />

            <p className="mt-1 text-xs font-bold text-slate-700">
              {demande.distance} km
            </p>

            <p className="text-[10px] text-slate-400">
              distance
            </p>

          </div>

          <div className="rounded-xl bg-slate-50 p-3">

            <Clock3 className="h-4 w-4 text-orange-500" />

            <p className="mt-1 text-xs font-bold text-slate-700">
              ~{demande.temps} min
            </p>

            <p className="text-[10px] text-slate-400">
              trajet
            </p>

          </div>

          <div className="rounded-xl bg-slate-50 p-3">

            <Navigation className="h-4 w-4 text-green-600" />

            <p className="mt-1 text-xs font-bold text-slate-700">
              GPS
            </p>

            <p className="text-[10px] text-slate-400">
              position
            </p>

          </div>

        </div>

        {/* COORDONNEES */}

        <div className="mt-3 flex items-center gap-2 text-[10px] text-slate-400">

          <MapPin className="h-3 w-3" />

          {demande.latitude} N, {demande.longitude} E

        </div>

        {/* PRIX */}

        <div className="mt-4 flex items-center justify-between rounded-xl bg-blue-50 px-4 py-3">

          <div>

            <p className="text-[10px] font-semibold uppercase text-slate-400">
              Estimation intervention
            </p>

            <p className="mt-1 text-sm font-bold text-[#145DA0]">
              {demande.estimation}
            </p>

          </div>

          <span className="text-[10px] text-slate-400">
            FCFA
          </span>

        </div>

        {/* ACTIONS */}

        {!accepted && !refused && (
          <div className="mt-5">

            <div className="mb-3 grid grid-cols-2 gap-3">

              <button
                type="button"
                onClick={() => onCall(demande.id)}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-blue-200
                  py-3
                  text-sm
                  font-semibold
                  text-[#1677C8]
                  transition
                  hover:bg-blue-50
                "
              >
                <Phone className="h-4 w-4" />
                Appeler
              </button>

              <button
                type="button"
                onClick={() => onRefuse(demande.id)}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-slate-200
                  py-3
                  text-sm
                  font-semibold
                  text-slate-500
                  transition
                  hover:border-red-200
                  hover:bg-red-50
                  hover:text-red-600
                "
              >
                <X className="h-4 w-4" />
                Refuser
              </button>

            </div>

            <button
              type="button"
              onClick={() => onAccept(demande.id)}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#1677C8]
                py-3.5
                text-sm
                font-bold
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#145DA0]
                hover:shadow-lg
                hover:shadow-blue-200
              "
            >
              <Check className="h-4 w-4" />
              Accepter l'intervention
            </button>

          </div>
        )}

        {/* ACCEPTÉ */}

        {accepted && (
          <div className="mt-5">

            <button
              type="button"
              onClick={() => onNavigate(demande.id)}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-green-700
                py-3.5
                text-sm
                font-bold
                text-white
                transition-all
                hover:-translate-y-0.5
                hover:bg-green-800
                hover:shadow-lg
              "
            >
              <Navigation className="h-4 w-4" />

              Naviguer vers le client
            </button>

            <button
              type="button"
              onClick={() => onCall(demande.id)}
              className="
                mt-2
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-slate-200
                py-2.5
                text-xs
                font-semibold
                text-slate-600
                hover:bg-slate-50
              "
            >
              <Phone className="h-3.5 w-3.5" />

              Appeler le client
            </button>

          </div>
        )}

        {/* REFUS */}

        {refused && (
          <div className="mt-5 rounded-xl bg-red-50 py-3 text-center text-sm font-semibold text-red-500">
            Demande refusée
          </div>
        )}

      </div>

    </article>
  )
}