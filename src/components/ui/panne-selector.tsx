import {
  Car,
  CircleGauge,
  Battery,
  Disc3,
  Zap,
  MoreHorizontal,
  Wrench,
} from "lucide-react"

import { GarageCard } from "./garage-card"

type Props = {
  selectedPanne: string
  onSelect: (panne: string) => void
}

const pannes = [
  {
    name: "Moteur",
    icon: Car,
  },
  {
    name: "Pneu crevé",
    icon: CircleGauge,
  },
  {
    name: "Batterie",
    icon: Battery,
  },
  {
    name: "Freins",
    icon: Disc3,
  },
  {
    name: "Électricité",
    icon: Zap,
  },
  {
    name: "Autre",
    icon: MoreHorizontal,
  },
]

export function PanneSelector({
  selectedPanne,
  onSelect,
}: Props) {
  return (
    <div className="p-8">

      {/* HEADER */}
      <div className="mb-7">

        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#145DA0]">

          <Wrench className="h-5 w-5" />

          ASSISTANCE RAPIDE

        </div>

        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Quel est votre problème ?
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          Sélectionnez la nature de votre panne pour identifier
          les réparateurs qualifiés à proximité.
        </p>

      </div>


      {/* PANNES */}
      <div className="grid grid-cols-3 gap-3">

        {pannes.map((panne) => {

          const Icon = panne.icon

          const active = selectedPanne === panne.name

          return (
            <button
              key={panne.name}
              onClick={() => onSelect(panne.name)}
              className={`
                flex
                h-[125px]
                flex-col
                items-center
                justify-center
                gap-3
                rounded-2xl
                border
                transition-all
                duration-200

                ${
                  active
                    ? "border-[#145DA0] bg-blue-50 text-[#145DA0] shadow-sm"
                    : "border-slate-200 bg-white text-slate-800 hover:border-blue-200 hover:bg-blue-50/40"
                }
              `}
            >

              <div
                className={`
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full

                  ${
                    active
                      ? "bg-blue-100"
                      : "bg-slate-100"
                  }
                `}
              >

                <Icon className="h-5 w-5" />

              </div>

              <span className="text-sm font-semibold">
                {panne.name}
              </span>

            </button>
          )
        })}

      </div>


      {/* SÉPARATION */}
      <div className="my-7 border-t border-slate-200" />


      {/* GARAGES */}
      <div className="mb-4 flex items-center justify-between">

        <div>

          <h3 className="text-xl font-bold text-slate-900">
            Garages à proximité
          </h3>

          <p className="mt-1 text-xs text-slate-500">
            Résultats pour : {selectedPanne}
          </p>

        </div>

        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          3 résultats
        </span>

      </div>


      {/* LISTE */}
      <div className="space-y-4">

        <GarageCard
          name="Garage du Centre"
          distance="2,4 km"
          time="15 min"
          rating="4.8"
          description="Spécialiste pneumatique et remorquage léger."
          partner
        />

        <GarageCard
          name="Auto Services Express"
          distance="4,1 km"
          time="25 min"
          rating="4.2"
          description="Garage multimarque disponible pour intervention rapide."
        />

        <GarageCard
          name="Garage Excellence"
          distance="5,7 km"
          time="30 min"
          rating="4.6"
          description="Réparation automobile et diagnostic."
        />

      </div>

    </div>
  )
}