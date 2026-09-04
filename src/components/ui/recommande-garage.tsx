import {
  MapPin,
  Star,
  Wrench,
} from "lucide-react"

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

type RecommendedGaragesProps = {
  garages: Garage[]
  onSelect: (garage: Garage) => void
}

export function RecommendedGarages({
  garages,
  onSelect,
}: RecommendedGaragesProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

      <div className="mb-5 flex items-center justify-between">

        <div>
          <h2 className="text-lg font-bold text-slate-800">
            Garages recommandés
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Professionnels proches de votre position
          </p>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF3DE] text-[#639922]">
          <Wrench size={18} />
        </div>

      </div>

      <div className="space-y-2">

        {garages.map((garage) => (
          <button
            type="button"
            key={garage.id}
            onClick={() => onSelect(garage)}
            className="flex w-full items-center gap-4 rounded-xl p-3 text-left transition hover:bg-[#F8FAFC]"
          >

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF3DE] text-[#639922]">
              <Wrench size={19} />
            </div>

            <div className="min-w-0 flex-1">

              <p className="font-semibold text-slate-800">
                {garage.name}
              </p>

              <div className="mt-1 flex items-center gap-2 text-sm">

                <span className="flex items-center gap-1 text-[#639922]">
                  <Star
                    size={13}
                    fill="currentColor"
                  />
                  {garage.rating}
                </span>

                <span className="text-slate-400">
                  ({garage.reviews} avis)
                </span>

              </div>

              <p className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                <MapPin size={12} />
                {garage.distance}
              </p>

            </div>

          </button>
        ))}

      </div>

    </section>
  )
}