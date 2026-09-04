import { useState } from "react"
import {
  Wrench,
  CalendarDays,
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  ChevronDown,
  Car,
  MapPin,
  Clock3,
} from "lucide-react"

type BreakdownRecord = {
  id: number
  date: string
  problem: string
  garage: string
  location: string
  description: string
  cost: string
  status: "Résolue" | "En cours"
}

const breakdownRecords: BreakdownRecord[] = [
  {
    id: 1,
    date: "20 Août 2026",
    problem: "Batterie déchargée",
    garage: "Garage Auto Plus",
    location: "Yaoundé, Bastos",
    description:
      "Batterie faible et démarrage impossible. Batterie rechargée et contrôlée.",
    cost: "35 000 FCFA",
    status: "Résolue",
  },
  {
    id: 2,
    date: "12 Août 2026",
    problem: "Pneu crevé",
    garage: "Garage Express",
    location: "Yaoundé, Mvan",
    description:
      "Crevaison du pneu avant droit. Remplacement du pneu effectué.",
    cost: "45 000 FCFA",
    status: "Résolue",
  },
  {
    id: 3,
    date: "28 Juillet 2026",
    problem: "Surchauffe moteur",
    garage: "Auto Service Cameroun",
    location: "Yaoundé, Elig-Essono",
    description:
      "Surchauffe détectée. Contrôle du système de refroidissement et remplacement du liquide.",
    cost: "60 000 FCFA",
    status: "Résolue",
  },
  {
    id: 4,
    date: "14 Juillet 2026",
    problem: "Problème de freinage",
    garage: "Garage Central Yaoundé",
    location: "Yaoundé, Nlongkak",
    description:
      "Bruit au freinage et usure des plaquettes avant.",
    cost: "75 000 FCFA",
    status: "Résolue",
  },
]

export function MaintenanceSection() {
  const [selectedVehicle, setSelectedVehicle] =
    useState("Toyota Corolla - NW 123 AB")

  const [showVehicles, setShowVehicles] = useState(false)

  const vehicles = [
    "Toyota Corolla - NW 123 AB",
    "Toyota Yaris - LT 456 AB",
    "Honda Civic - CE 789 AB",
  ]

  const resolvedBreakdowns = breakdownRecords.filter(
    (record) => record.status === "Résolue"
  ).length

  const totalCost = breakdownRecords.reduce((total, record) => {
    const value = Number(
      record.cost.replace(/\s/g, "").replace("FCFA", "")
    )

    return total + value
  }, 0)

  return (
    <section className="w-full">

      {/* =====================================================
          EN-TÊTE
      ===================================================== */}

      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">

        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FAEEDA] text-[#EF9F27]">
              <AlertTriangle size={22} />
            </div>

            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Historique des pannes
              </h1>

              <p className="mt-1 text-sm text-slate-500 md:text-base">
                Retrouvez toutes les pannes signalées et les interventions
                réalisées sur votre véhicule.
              </p>
            </div>
          </div>
        </div>

        {/* =================================================
            SELECTEUR VEHICULE
        ================================================= */}

        <div className="relative w-full md:w-[290px]">

          <button
            type="button"
            onClick={() => setShowVehicles(!showVehicles)}
            className="
              flex
              w-full
              items-center
              justify-between
              rounded-xl
              border
              border-slate-300
              bg-white
              px-4
              py-3
              text-sm
              font-semibold
              text-slate-700
              transition
              hover:border-[#1468A8]
            "
          >
            <span className="flex items-center gap-2">
              <Car
                size={18}
                className="text-[#1468A8]"
              />

              {selectedVehicle}
            </span>

            <ChevronDown
              size={18}
              className="text-slate-400"
            />
          </button>

          {showVehicles && (
            <div
              className="
                absolute
                left-0
                right-0
                top-full
                z-30
                mt-2
                overflow-hidden
                rounded-xl
                border
                border-slate-200
                bg-white
                shadow-lg
              "
            >
              {vehicles.map((vehicle) => (
                <button
                  key={vehicle}
                  type="button"
                  onClick={() => {
                    setSelectedVehicle(vehicle)
                    setShowVehicles(false)
                  }}
                  className="
                    flex
                    w-full
                    items-center
                    px-4
                    py-3
                    text-left
                    text-sm
                    transition
                    hover:bg-[#E6F1FB]
                    hover:text-[#1468A8]
                  "
                >
                  {vehicle}
                </button>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* =====================================================
          STATISTIQUES DES PANNES
      ===================================================== */}

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {/* TOTAL PANNES */}

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-[#FAEEDA]
              text-[#EF9F27]
            "
          >
            <AlertTriangle size={20} />
          </div>

          <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Total des pannes
          </p>

          <p className="mt-2 text-4xl font-bold text-slate-900">
            {breakdownRecords.length}
          </p>

        </div>

        {/* PANNES RESOLUES */}

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-[#EAF3DE]
              text-[#639922]
            "
          >
            <CheckCircle2 size={20} />
          </div>

          <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Pannes résolues
          </p>

          <p className="mt-2 text-4xl font-bold text-slate-900">
            {resolvedBreakdowns}
          </p>

        </div>

        {/* DERNIERE PANNE */}

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-[#E6F1FB]
              text-[#1468A8]
            "
          >
            <CalendarDays size={20} />
          </div>

          <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Dernière panne
          </p>

          <p className="mt-4 text-xl font-bold text-slate-900">
            {breakdownRecords[0]?.date}
          </p>

        </div>

        {/* DEPENSES */}

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-slate-100
                text-slate-700
              "
            >
              <Wrench size={20} />
            </div>

            <ShieldCheck
              size={22}
              className="text-[#639922]"
            />

          </div>

          <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Dépenses réparations
          </p>

          <p className="mt-2 text-2xl font-bold text-slate-900">
            {totalCost.toLocaleString("fr-FR")} FCFA
          </p>

        </div>

      </div>

      {/* =====================================================
          DERNIERE PANNE
      ===================================================== */}

      {breakdownRecords.length > 0 && (
        <section className="mt-8">

          <div className="mb-5">

            <h2 className="text-xl font-bold text-slate-900">
              Dernière panne signalée
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Consultez les informations de votre dernière intervention.
            </p>

          </div>

          <div className="rounded-2xl border border-orange-100 bg-orange-50/60 p-5">

            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FAEEDA] text-[#EF9F27]">
                  <AlertTriangle size={23} />
                </div>

                <div>

                  <h3 className="font-bold text-slate-900">
                    {breakdownRecords[0].problem}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {breakdownRecords[0].description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-500">

                    <span className="flex items-center gap-1">
                      <CalendarDays size={14} />
                      {breakdownRecords[0].date}
                    </span>

                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {breakdownRecords[0].location}
                    </span>

                    <span className="flex items-center gap-1">
                      <Clock3 size={14} />
                      Intervention terminée
                    </span>

                  </div>

                </div>

              </div>

              <div className="shrink-0">

                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[#EAF3DE]
                    px-4
                    py-2
                    text-xs
                    font-bold
                    text-[#639922]
                  "
                >
                  <CheckCircle2 size={15} />
                  Résolue
                </span>

              </div>

            </div>

          </div>

        </section>
      )}

      {/* =====================================================
          HISTORIQUE DES PANNES
      ===================================================== */}

      <section className="mt-8">

        <div className="mb-5">

          <h2 className="text-xl font-bold text-slate-900">
            Historique des pannes
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Retrouvez les différentes pannes rencontrées et les réparations
            effectuées.
          </p>

        </div>

        <div
          className="
            overflow-hidden
            rounded-2xl
            border
            border-slate-200
            bg-white
            shadow-sm
          "
        >

          {/* =================================================
              DESKTOP
          ================================================= */}

          <div className="hidden md:block">

            <div
              className="
                grid
                grid-cols-[130px_1.2fr_1.3fr_1.2fr_130px_120px]
                gap-4
                border-b
                border-slate-200
                bg-slate-50
                px-6
                py-4
                text-xs
                font-semibold
                uppercase
                tracking-wider
                text-slate-500
              "
            >
              <span>Date</span>
              <span>Panne</span>
              <span>Garage</span>
              <span>Localisation</span>
              <span>Montant</span>
              <span>Statut</span>
            </div>

            {breakdownRecords.map((record) => (
              <div
                key={record.id}
                className="
                  grid
                  grid-cols-[130px_1.2fr_1.3fr_1.2fr_130px_120px]
                  gap-4
                  border-b
                  border-slate-100
                  px-6
                  py-5
                  last:border-b-0
                  transition
                  hover:bg-slate-50
                "
              >

                <div className="text-sm text-slate-600">
                  {record.date}
                </div>

                <div>

                  <div className="flex items-center gap-2">

                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                      <Wrench size={15} />
                    </div>

                    <p className="text-sm font-semibold text-slate-800">
                      {record.problem}
                    </p>

                  </div>

                  <p className="mt-2 text-xs leading-5 text-slate-400">
                    {record.description}
                  </p>

                </div>

                <div className="text-sm text-slate-600">
                  {record.garage}
                </div>

                <div className="flex items-start gap-1 text-sm text-slate-600">
                  <MapPin
                    size={15}
                    className="mt-0.5 shrink-0 text-slate-400"
                  />
                  {record.location}
                </div>

                <div className="text-sm font-semibold text-slate-800">
                  {record.cost}
                </div>

                <div>

                  <span
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-full
                      bg-[#EAF3DE]
                      px-3
                      py-1
                      text-xs
                      font-semibold
                      text-[#639922]
                    "
                  >
                    <CheckCircle2 size={13} />
                    {record.status}
                  </span>

                </div>

              </div>
            ))}

          </div>

          {/* =================================================
              MOBILE
          ================================================= */}

          <div className="divide-y divide-slate-100 md:hidden">

            {breakdownRecords.map((record) => (
              <div
                key={record.id}
                className="p-5"
              >

                <div className="flex items-start justify-between gap-4">

                  <div className="flex items-start gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                      <AlertTriangle size={18} />
                    </div>

                    <div>

                      <p className="text-sm font-semibold text-slate-800">
                        {record.problem}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {record.date}
                      </p>

                    </div>

                  </div>

                  <span
                    className="
                      shrink-0
                      rounded-full
                      bg-[#EAF3DE]
                      px-2
                      py-1
                      text-xs
                      font-semibold
                      text-[#639922]
                    "
                  >
                    {record.status}
                  </span>

                </div>

                <div className="mt-4 space-y-2 text-sm text-slate-600">

                  <p>
                    <span className="font-medium">
                      Garage :
                    </span>{" "}
                    {record.garage}
                  </p>

                  <p className="flex items-start gap-1">

                    <MapPin
                      size={15}
                      className="mt-0.5 shrink-0 text-slate-400"
                    />

                    <span>
                      <span className="font-medium">
                        Lieu :
                      </span>{" "}
                      {record.location}
                    </span>

                  </p>

                  <p>
                    <span className="font-medium">
                      Description :
                    </span>{" "}
                    {record.description}
                  </p>

                  <p>
                    <span className="font-medium">
                      Réparation :
                    </span>{" "}
                    {record.cost}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

    </section>
  )
}