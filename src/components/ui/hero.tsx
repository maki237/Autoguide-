import { Link } from "react-router-dom"
import {
  MapPinned,
  CarFront,
  Wrench,
  ArrowRight,
  ShieldCheck,
} from "lucide-react"

import gps from "@/assets/gps.jpg"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* Décoration */}

      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-sky-100/40 blur-3xl" />


      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">

        {/* TEXTE */}

        <div className="max-w-xl">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">

            <ShieldCheck className="h-4 w-4" />

            Votre assistant routier intelligent

          </div>


          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">

            Votre compagnon

            <span className="block text-[#1468A8]">
              intelligent sur toutes les routes.
            </span>

          </h1>


          <p className="mt-6 max-w-lg text-base leading-7 text-slate-500 sm:text-lg">

            Calculez vos itinéraires optimaux, trouvez rapidement
            un garage à proximité en cas de panne et voyagez
            en toute sérénité avec AutoGuide+.

          </p>


          {/* BOUTONS */}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <Link
              to="/login"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#1468A8]
                px-6
                py-3
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
                px-6
                py-3
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

          <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-500">

            <div className="flex items-center gap-2">
              <MapPinned className="h-4 w-4 text-blue-600" />
              Itinéraire intelligent
            </div>

            <div className="flex items-center gap-2">
              <Wrench className="h-4 w-4 text-amber-500" />
              Garages à proximité
            </div>

            <div className="flex items-center gap-2">
              <CarFront className="h-4 w-4 text-green-600" />
              Assistance routière
            </div>

          </div>

        </div>


        {/* VISUEL CARTE */}

        <div className="relative">

          <div className="absolute -inset-4 rounded-[35px] bg-blue-100/40 blur-2xl" />

          <div className="relative overflow-hidden rounded-[30px] border border-blue-100 bg-[#E6F1FB] p-3 shadow-2xl shadow-blue-900/10">

            <div className="relative h-[420px] overflow-hidden rounded-[24px]">

              <img
                src={gps}
                alt="Carte routière AutoGuide+"
                className="h-full w-full object-cover"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-blue-900/5" />


              {/* POINT DE DÉPART */}

              <div className="absolute left-[22%] top-[65%]">

                <div className="relative flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 ring-4 ring-white">

                  <span className="h-2 w-2 rounded-full bg-white" />

                </div>

              </div>


              {/* DESTINATION */}

              <div className="absolute right-[22%] top-[25%]">

                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white shadow-lg ring-4 ring-white">

                  <MapPinned className="h-3.5 w-3.5" />

                </div>

              </div>


              {/* CARD ITINÉRAIRE */}

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl backdrop-blur">

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

      </div>

    </section>
  )
}