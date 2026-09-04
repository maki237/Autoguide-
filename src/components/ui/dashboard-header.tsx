import { Bell, X } from "lucide-react"

interface DashboardHeaderProps {
  userName: string
  showNotifications: boolean
  onToggleNotifications: () => void
}

export function DashboardHeader({
  userName,
  showNotifications,
  onToggleNotifications,
}: DashboardHeaderProps) {
  return (
    <>
      <header className="relative mb-6 flex items-start justify-between gap-5 overflow-hidden rounded-3xl bg-[#123b5d] p-5 text-white shadow-[0_18px_45px_rgba(18,59,93,0.18)] sm:mb-7 sm:p-7">
        <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-24 right-24 h-48 w-48 rounded-full bg-[#2f86bf]/30 blur-2xl" />

        <div className="relative">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8dd3ff]">
            Espace automobiliste
          </p>

          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Bonjour {userName} 👋
          </h1>

          <p className="mt-2 text-sm text-white/70 md:text-base">
            Prête pour votre prochain trajet ?
          </p>
        </div>

        {/* NOTIFICATIONS */}

        <button
          type="button"
          onClick={onToggleNotifications}
          aria-label="Afficher les notifications"
          className="
            relative
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-white/20
            bg-white/10
            text-white
            shadow-none
            transition
            hover:border-white/40
            hover:bg-white/20
          "
          title="Notifications"
        >
          <Bell size={20} />

          <span
            className="
              absolute
              -right-1
              -top-1
              flex
              h-5
              w-5
              items-center
              justify-center
              rounded-full
              bg-[#ef9f27]
              text-[10px]
              font-bold
              text-white
            "
          >
            2
          </span>
        </button>
      </header>

      {/* PANNEAU NOTIFICATIONS */}

      {showNotifications && (
        <div
          className="
            mb-6
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-5
            shadow-sm
          "
        >
          <div className="flex items-center justify-between">

            <h3 className="font-bold text-slate-800">
              Notifications
            </h3>

            <button
              type="button"
              onClick={onToggleNotifications}
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-lg
                text-slate-400
                transition
                hover:bg-slate-100
                hover:text-slate-700
              "
            >
              <X size={17} />
            </button>

          </div>

          <div className="mt-4 space-y-2">

            <div
              className="
                rounded-xl
                bg-[#F8FAFC]
                p-3
                text-sm
                text-slate-600
              "
            >
              🚗 Pensez à effectuer la révision de votre véhicule.
            </div>

            <div
              className="
                rounded-xl
                bg-[#F8FAFC]
                p-3
                text-sm
                text-slate-600
              "
            >
              🔧 Un garage certifié est disponible près de vous.
            </div>

          </div>
        </div>
      )}
    </>
  )
}