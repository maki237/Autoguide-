import {
  ChevronRight,
  History,
  MapPin,
} from "lucide-react"

const trips = [
  {
    from: "Mvan",
    to: "Centre-ville",
    date: "Aujourd'hui • 08:30",
  },
  {
    from: "Bastos",
    to: "Odza",
    date: "Hier • 17:15",
  },
  {
    from: "Essos",
    to: "Nkolbisson",
    date: "12 août • 14:20",
  },
]

export function RecentTrips() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

      <div className="mb-5 flex items-center justify-between">

        <div>
          <h2 className="text-lg font-bold text-slate-800">
            Trajets récents
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Vos derniers déplacements
          </p>
        </div>

        <History
          size={20}
          className="text-[#1468A8]"
        />

      </div>

      <div className="space-y-2">

        {trips.map((trip) => (
          <button
            type="button"
            key={`${trip.from}-${trip.to}`}
            className="flex w-full items-center gap-4 rounded-xl p-3 text-left transition hover:bg-[#F8FAFC]"
          >

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E6F1FB] text-[#1468A8]">
              <MapPin size={18} />
            </div>

            <div className="min-w-0 flex-1">

              <p className="font-medium text-slate-800">
                {trip.from} → {trip.to}
              </p>

              <p className="text-sm text-slate-400">
                {trip.date}
              </p>

            </div>

            <ChevronRight
              size={18}
              className="text-slate-300"
            />

          </button>
        ))}

      </div>

    </section>
  )
}