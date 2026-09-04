import { AlertTriangle, MapPin } from "lucide-react"

export function EmergencyButton() {
  return (
    <button
      className="
        absolute
        bottom-8
        right-8
        flex
        items-center
        gap-4
        rounded-2xl
        bg-[#F5A623]
        px-6
        py-4
        text-white
        shadow-[0_10px_30px_rgba(245,166,35,0.30)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-[#e89513]
      "
    >

      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">

        <AlertTriangle className="h-5 w-5" />

      </div>


      <div className="text-left">

        <p className="text-sm font-bold">
          Je suis en panne ici
        </p>

        <p className="mt-1 flex items-center gap-1 text-xs text-white/80">

          <MapPin className="h-3 w-3" />

          Envoyer ma position aux secours

        </p>

      </div>

    </button>
  )
}