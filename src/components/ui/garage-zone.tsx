import { MapPin } from "lucide-react"

interface GarageZoneProps {
  radius: number
  setRadius: (value: number) => void
}

export function GarageZone({
  radius,
  setRadius,
}: GarageZoneProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="mb-5 flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E6F1FB] text-[#1468A8]">
          <MapPin size={20} />
        </div>

        <div>
          <h2 className="font-bold text-slate-900">
            Zone d'intervention
          </h2>

          <p className="text-sm text-slate-500">
            Définissez la distance maximale pour recevoir des demandes.
          </p>
        </div>

      </div>

      <div className="flex items-center justify-between">

        <span className="text-sm font-medium text-slate-600">
          Rayon d'action
        </span>

        <span className="text-lg font-bold text-[#1468A8]">
          {radius} km
        </span>

      </div>

      <input
        type="range"
        min="5"
        max="100"
        value={radius}
        onChange={(e) => setRadius(Number(e.target.value))}
        className="mt-5 w-full cursor-pointer accent-[#1468A8]"
      />

      <div className="mt-2 flex justify-between text-xs text-slate-400">
        <span>5 km</span>
        <span>100 km</span>
      </div>

    </section>
  )
}