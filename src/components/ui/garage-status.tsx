import {
  CheckCircle2,
  Clock3,
} from "lucide-react"

interface GarageStatusProps {
  available: boolean
  onToggle: (value: boolean) => void
}

export function GarageStatus({
  available,
  onToggle,
}: GarageStatusProps) {
  return (
    <button
      type="button"
      aria-pressed={available}
      aria-label={available ? "Passer indisponible" : "Passer disponible"}
      onClick={() => onToggle(!available)}
      className="
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-slate-200
        bg-white
        px-4
        py-3
        text-left
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:shadow-md
      "
    >

      <div>

        <p className="text-sm font-bold text-slate-800">
          Statut d'intervention
        </p>

        <div className="mt-1 flex items-center gap-1.5">

          {available ? (
            <>
              <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />

              <span className="text-xs font-medium text-green-600">
                Disponible pour intervenir
              </span>
            </>
          ) : (
            <>
              <Clock3 className="h-3.5 w-3.5 text-slate-400" />

              <span className="text-xs font-medium text-slate-500">
                Indisponible actuellement
              </span>
            </>
          )}

        </div>

      </div>

      {/* SWITCH */}

      <div
        className={`
          relative
          h-7
          w-12
          shrink-0
          rounded-full
          p-1
          transition-colors
          duration-300
          ${available ? "bg-[#1677C8]" : "bg-slate-300"}
        `}
      >
        <span
          className={`
            block
            h-5
            w-5
            rounded-full
            bg-white
            shadow-sm
            transition-transform
            duration-300
            ${available ? "translate-x-5" : "translate-x-0"}
          `}
        />
      </div>

    </button>
  )
}