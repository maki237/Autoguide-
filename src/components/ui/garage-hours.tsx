import { Clock3 } from "lucide-react"

interface GarageHoursProps {
  hours: Record<string, string>
  setHours: React.Dispatch<
    React.SetStateAction<Record<string, string>>
  >
}

export function GarageHours({
  hours,
  setHours,
}: GarageHoursProps) {
  return (
    <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="mb-5 flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FAEEDA] text-[#EF9F27]">
          <Clock3 size={20} />
        </div>

        <div>
          <h2 className="font-bold text-slate-900">
            Horaires d'ouverture
          </h2>

          <p className="text-sm text-slate-500">
            Indiquez les horaires pendant lesquels votre garage est disponible.
          </p>
        </div>

      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">

        {Object.entries(hours).map(([day, value]) => (

          <div
            key={day}
            className="rounded-xl border border-slate-200 bg-slate-50 p-3"
          >

            <div className="mb-2 flex items-center justify-between">

              <span className="text-sm font-semibold capitalize text-slate-800">
                {day}
              </span>

              <span className="text-xs text-slate-400">
                Horaire
              </span>

            </div>

            <input
              type="text"
              value={value}
              onChange={(e) =>
                setHours((current) => ({
                  ...current,
                  [day]: e.target.value,
                }))
              }
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#1468A8]"
            />

          </div>

        ))}

      </div>

    </section>
  )
}