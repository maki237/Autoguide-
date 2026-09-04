import { Car, ChevronRight } from "lucide-react"

type VehicleCardProps = {
  onClick: () => void
}

export function VehicleCard({
  onClick,
}: VehicleCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-4 flex w-full items-center justify-between rounded-2xl border border-[#b8d4e7] bg-gradient-to-r from-white to-[#f2f8fc] p-4 shadow-sm transition hover:border-[#7fb5d8] hover:shadow-md sm:p-5"
    >

      <div className="flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#dceef9] text-[#1468A8]">
          <Car size={21} />
        </div>

        <div className="text-left">

          <p className="font-bold text-slate-800">
            Mon véhicule
          </p>

          <p className="text-sm text-slate-500">
            Toyota Corolla • Essence • Actif
          </p>

        </div>

      </div>

      <ChevronRight
        size={20}
        className="text-slate-400"
      />

    </button>
  )
}