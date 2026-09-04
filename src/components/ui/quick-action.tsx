import {
  AlertTriangle,
  Route,
  Wrench,
} from "lucide-react"

type QuickActionsProps = {
  onRoute: () => void
  onEmergency: () => void
  onGarage: () => void
}

export function QuickActions({
  onRoute,
  onEmergency,
  onGarage,
}: QuickActionsProps) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">

      {/* ================================
          ITINÉRAIRE
      ================================= */}

      <button
        type="button"
        onClick={onRoute}
        className="
          group
          rounded-2xl
          border
          border-slate-200
          bg-white
          min-h-[140px] p-5
          text-left
          shadow-sm
          transition-all
          hover:-translate-y-1
          hover:border-[#9BC8E8]
          hover:shadow-md
        "
      >
        <div
          className="
            mb-5
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-[#E6F1FB]
            text-[#1468A8]
            transition
            group-hover:scale-105
          "
        >
          <Route size={21} />
        </div>

        <p className="font-bold text-slate-800">
          Calculer un itinéraire
        </p>

        <p className="mt-1 text-sm text-slate-500">
          Trouver le meilleur trajet au Cameroun
        </p>
      </button>

      {/* ================================
          PANNE
      ================================= */}

      <button
        type="button"
        onClick={onEmergency}
        className="
          group
          rounded-2xl
          bg-[#EF9F27]
          min-h-[140px] p-5
          text-left
          text-white
          shadow-sm
          transition-all
          hover:-translate-y-1
          hover:bg-[#D98C16]
          hover:shadow-md
        "
      >
        <div
          className="
            mb-5
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-white/20
            text-white
          "
        >
          <AlertTriangle size={21} />
        </div>

        <p className="font-bold">
          Signaler une panne
        </p>

        <p className="mt-1 text-sm text-white/80">
          Obtenir de l'aide rapidement
        </p>
      </button>

      {/* ================================
          GARAGE
      ================================= */}

      <button
        type="button"
        onClick={onGarage}
        className="
          group
          rounded-2xl
          border
          border-slate-200
          bg-white
          min-h-[140px] p-5
          text-left
          shadow-sm
          transition-all
          hover:-translate-y-1
          hover:border-[#AFCB91]
          hover:shadow-md
        "
      >
        <div
          className="
            mb-5
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-[#EAF3DE]
            text-[#639922]
            transition
            group-hover:scale-105
          "
        >
          <Wrench size={21} />
        </div>

        <p className="font-bold text-slate-800">
          Trouver un garage
        </p>

        <p className="mt-1 text-sm text-slate-500">
          Garages certifiés autour de vous
        </p>
      </button>

    </div>
  )
}