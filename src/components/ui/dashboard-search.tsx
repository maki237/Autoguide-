import { MapPin, Search, X } from "lucide-react"

type DashboardSearchProps = {
  search: string
  destination: string
  onSearchChange: (value: string) => void
  onSearch: () => void
  onClear: () => void
}

export function DashboardSearch({
  search,
  destination,
  onSearchChange,
  onSearch,
  onClear,
}: DashboardSearchProps) {
  return (
    <>
      {/* ================================
          BARRE DE RECHERCHE
      ================================= */}

      <div
        className="
          relative
          mb-4
          rounded-2xl
          border
          border-slate-200
          bg-white
          shadow-sm
        "
      >
        <Search
          className="
            absolute
            left-5
            top-1/2
            -translate-y-1/2
            text-slate-400
          "
          size={21}
        />

        <input
          type="text"
          value={search}
          onChange={(e) =>
            onSearchChange(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch()
            }
          }}
          placeholder="Ex : Bastos, Mvan, Bonamoussadi..."
          className="
            w-full
            rounded-2xl
            bg-transparent
            py-4
            pl-14
            pr-36
            text-slate-800
            outline-none
            placeholder:text-slate-400
            focus:ring-2
            focus:ring-[#1468A8]/10
          "
        />

        <button
          type="button"
          onClick={onSearch}
          className="
            absolute
            bottom-2
            right-2
            top-2
            rounded-xl
            bg-[#1468A8]
            px-3 text-sm sm:px-5
            font-semibold
            text-white
            transition
            hover:bg-[#0F568D]
          "
        >
          Rechercher
        </button>
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