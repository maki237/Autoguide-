import { MapPin, Search, X, Navigation } from "lucide-react"
import { useState } from "react"

type DashboardSearchProps = {
  search: string
  destination: string
  onSearchChange: (value: string) => void
  onSearch: (startPoint?: string, endPoint?: string) => void
  onClear: () => void
}

export function DashboardSearch({
  search,
  destination,
  onSearchChange,
  onSearch,
  onClear,
}: DashboardSearchProps) {
  const [startPoint, setStartPoint] = useState("")

  const handleSearchSubmit = () => {
    onSearch(startPoint, search)
  }

  return (
    <>
      {/* ================================
          FORMULAIRE POINT DE DÉPART & D'ARRIVÉE
      ================================= */}

      <div className="relative mb-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          
          {/* Champ Point de départ */}
          <div className="relative flex-1">
            <Navigation className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500 h-4 w-4" />
            <input
              type="text"
              value={startPoint}
              onChange={(e) => setStartPoint(e.target.value)}
              placeholder="Point de départ (Ex : Ma position ou Yaoundé...)"
              className="w-full rounded-xl bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-800 outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500/20 border border-slate-200"
            />
          </div>

          {/* Champ Point d'arrivée */}
          <div className="relative flex-1">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-rose-500 h-4 w-4" />
            <input
              type="text"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearchSubmit()
              }}
              placeholder="Point d'arrivée (Ex : Bastos, Mvan...)"
              className="w-full rounded-xl bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-800 outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500/20 border border-slate-200"
            />
          </div>

          {/* Bouton Rechercher Itinéraire */}
          <button
            type="button"
            onClick={handleSearchSubmit}
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:from-indigo-500 hover:to-blue-500 transition-all sm:w-auto"
          >
            <Search className="h-4 w-4" />
            Rechercher itinéraire
          </button>
        </div>
      </div>

      {/* ================================
          DESTINATION
      ================================= */}

      {destination && (
        <div
          className="
            mb-5
            flex
            items-center
            gap-3
            rounded-xl
            border
            border-[#BBD9EF]
            bg-[#E6F1FB]
            px-4
            py-3
            text-sm
            text-[#1468A8]
          "
        >
          <MapPin size={18} />

          <span>
            Destination :
            <strong className="ml-1">
              {destination}
            </strong>
          </span>

          <button
            type="button"
            onClick={onClear}
            className="
              ml-auto
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-lg
              transition
              hover:bg-white/60
            "
            title="Effacer la destination"
          >
            <X size={17} />
          </button>
        </div>
      )}
    </>
  )
}