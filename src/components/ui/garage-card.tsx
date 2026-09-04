import {
  MapPin,
  Clock,
  Star,
  Phone,
  Wrench,
} from "lucide-react"

type Props = {
  name: string
  distance: string
  time: string
  rating: string
  description: string
  partner?: boolean
}

export function GarageCard({
  name,
  distance,
  time,
  rating,
  description,
  partner,
}: Props) {
  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        transition
        duration-200
        hover:border-blue-200
        hover:shadow-md
      "
    >

      <div className="flex">

        {/* INFORMATIONS */}
        <div className="flex-1 p-5">

          <div className="mb-2 flex items-center gap-2">

            <h4 className="font-semibold text-slate-900">
              {name}
            </h4>

            {partner && (
              <span className="rounded-md bg-green-100 px-2 py-1 text-[10px] font-semibold text-green-700">
                PARTENAIRE
              </span>
            )}

          </div>


          {/* INFOS */}
          <div className="mb-3 flex flex-wrap gap-4 text-xs text-slate-500">

            <span className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {distance}
            </span>

            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {time}
            </span>

            <span className="flex items-center gap-1 text-amber-500">
              <Star className="h-3.5 w-3.5 fill-current" />
              {rating}
            </span>

          </div>


          <p className="text-xs leading-5 text-slate-500">
            {description}
          </p>

        </div>


        {/* ACTIONS */}
        <div className="flex w-[115px] flex-col justify-center gap-2 border-l border-slate-100 p-3">

          <button
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-lg
              bg-[#145DA0]
              px-3
              py-2.5
              text-xs
              font-semibold
              text-white
              transition
              hover:bg-[#0f4b82]
            "
          >

            <Wrench className="h-3.5 w-3.5" />

            Demander

          </button>


          <button
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-lg
              border
              border-blue-200
              px-3
              py-2.5
              text-xs
              font-semibold
              text-[#145DA0]
              transition
              hover:bg-blue-50
            "
          >

            <Phone className="h-3.5 w-3.5" />

            Appeler

          </button>

        </div>

      </div>

    </div>
  )
}