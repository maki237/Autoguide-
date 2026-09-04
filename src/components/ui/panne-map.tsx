import {
  MapPin,
  Navigation,
  Plus,
  Minus,
  Crosshair,
} from "lucide-react"

export function PanneMap() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#EAF2F8]">

      {/* FAUSSE CARTE */}
      <div className="absolute inset-0">

        {/* ROUTES */}
        <div className="absolute left-[15%] top-0 h-full w-[3px] rotate-[18deg] bg-white" />

        <div className="absolute left-[45%] top-[-10%] h-[120%] w-[4px] rotate-[-12deg] bg-white" />

        <div className="absolute left-0 top-[40%] h-[3px] w-full rotate-[8deg] bg-white" />

        <div className="absolute left-0 top-[65%] h-[4px] w-full rotate-[-5deg] bg-white" />

        {/* ZONES */}
        <div className="absolute left-[8%] top-[15%] h-32 w-44 rounded-full bg-green-100/60" />

        <div className="absolute bottom-[10%] right-[12%] h-40 w-52 rounded-full bg-green-100/50" />

        <div className="absolute right-[20%] top-[25%] h-24 w-32 rounded-full bg-blue-100/70" />

      </div>


      {/* POSITION */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          flex
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
        "
      >

        <div className="absolute h-16 w-16 animate-ping rounded-full bg-blue-400/20" />

        <div className="relative flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-[#145DA0] shadow-lg">

          <Navigation className="h-4 w-4 fill-white text-white" />

        </div>

      </div>


      {/* POPUP POSITION */}
      <div
        className="
          absolute
          left-[12%]
          top-[8%]
          w-[270px]
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-4
          shadow-lg
        "
      >

        <div className="flex gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#145DA0]">

            <Crosshair className="h-5 w-5" />

          </div>

          <div>

            <p className="text-sm font-semibold text-slate-800">
              Vous êtes ici
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Votre position actuelle
            </p>

          </div>

        </div>

      </div>


      {/* CONTRÔLES CARTE */}
      <div className="absolute bottom-6 right-6 flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md">

        <button className="flex h-11 w-11 items-center justify-center border-b border-slate-200 text-slate-600 hover:bg-slate-50">
          <Plus className="h-5 w-5" />
        </button>

        <button className="flex h-11 w-11 items-center justify-center text-slate-600 hover:bg-slate-50">
          <Minus className="h-5 w-5" />
        </button>

      </div>


      {/* GARAGES SUR LA CARTE */}
      <GarageMarker
        top="35%"
        left="28%"
      />

      <GarageMarker
        top="60%"
        left="62%"
      />

      <GarageMarker
        top="25%"
        left="70%"
      />

    </div>
  )
}


function GarageMarker({
  top,
  left,
}: {
  top: string
  left: string
}) {
  return (
    <div
      className="absolute"
      style={{ top, left }}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#145DA0] text-white shadow-lg">
        <MapPin className="h-4 w-4 fill-white" />
      </div>
    </div>
  )
}