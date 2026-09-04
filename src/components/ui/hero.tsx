import { Link } from "react-router-dom"
import {
  MapPinned,
  CarFront,
  Wrench,
  ArrowRight,
  ShieldCheck,
} from "lucide-react"

import OpenStreetMap from "@/components/ui/OpenStreetMap"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7fbff]">

      {/* Décoration */}

      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-sky-100/40 blur-3xl" />


      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8 lg:py-24">

        {/* TEXTE */}

        <div className="max-w-xl">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-700 shadow-sm">

            <ShieldCheck className="h-4 w-4" />

            Pensé pour les routes de Yaoundé

          </div>


          <h1 className="max-w-2xl text-[clamp(2.5rem,6vw,4.8rem)] font-bold leading-[0.98] tracking-[-0.045em] text-slate-950">

            Votre compagnon

            <span className="mt-2 block text-[#1468A8]">
              votre route, autrement.
            </span>

          </h1>


          <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">

            Calculez vos itinéraires optimaux, trouvez rapidement
            un garage à proximité en cas de panne et voyagez
            en toute sérénité avec AutoGuide+.

          </p>


          {/* BOUTONS */}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

            <Link
              to="/login"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#1468A8]
                px-5
                py-3.5
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-blue-600/20
                transition
                hover:-translate-y-0.5
                hover:bg-blue-700
              "
            >

              <MapPinned className="h-4 w-4" />

              Calculer un itinéraire

              <ArrowRight className="h-4 w-4" />

            </Link>


            <Link
              to="/login"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#F59E0B]
                px-5
                py-3.5
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-amber-500/20
                transition
                hover:-translate-y-0.5
                hover:bg-amber-600
              "
            >

              <Wrench className="h-4 w-4" />

              Je suis en panne

            </Link>

          </div>


          {/* PETITES INFOS */}

          <div className="mt-8 grid max-w-lg grid-cols-1 gap-3 text-sm text-slate-600 sm:grid-cols-3">

            <div className="flex items-center gap-2 rounded-lg bg-white/70 px-2 py-1.5">
              <MapPinned className="h-4 w-4 text-blue-600" />
              Itinéraire optimisé
            </div>

            <div className="flex items-center gap-2 rounded-lg bg-white/70 px-2 py-1.5">
              <Wrench className="h-4 w-4 text-amber-500" />
              Garages à proximité
            </div>

            <div className="flex items-center gap-2 rounded-lg bg-white/70 px-2 py-1.5">
              <CarFront className="h-4 w-4 text-green-600" />
              Assistance routière
            </div>

          </div>

        </div>


        {/* VISUEL CARTE */}

        <div className="relative">

          <div className="absolute -inset-4 rounded-[35px] bg-blue-100/40 blur-2xl" />

          <div className="relative overflow-hidden rounded-[24px] border border-blue-100 bg-[#E6F1FB] p-2.5 shadow-[0_24px_70px_rgba(20,104,168,0.16)] sm:rounded-[30px] sm:p-3">

            <div className="relative h-[330px] overflow-hidden rounded-[19px] sm:h-[420px] sm:rounded-[24px]">
              <OpenStreetMap />
            </div>

            {/* Overlay */}
            {/* CARD ITINÉRAIRE */}
            <div className="absolute bottom-3 left-3 right-3 rounded-2xl border border-white/70 bg-white/95 p-3 shadow-xl backdrop-blur sm:bottom-5 sm:left-5 sm:right-5 sm:p-4">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-xs font-medium text-slate-400">
                    Itinéraire optimal
                  </p>

                  <p className="mt-1 font-semibold text-slate-800">
                    Yaoundé → Bastos
                  </p>
                </div>

                <div className="rounded-xl bg-green-50 px-3 py-2 text-center">
                  <p className="text-xs text-green-600">
                    Temps estimé
                  </p>

                  <p className="font-bold text-green-700">
                    18 min
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}