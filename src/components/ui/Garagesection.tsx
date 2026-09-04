import {
  MapPin,
  ShieldCheck,
  Navigation,
  Phone,
} from "lucide-react"

export default function GarageSection() {
  return (
    <section
      id="garages"
      className="border-t border-slate-200/80 bg-[#F8FAFC] px-5 py-16 sm:py-20 lg:px-8"
    >

      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">

        {/* VISUEL */}

        <div className="relative">

          <div className="overflow-hidden rounded-[24px] border border-blue-100 bg-blue-50 p-2.5 shadow-[0_18px_50px_rgba(20,104,168,0.10)] sm:rounded-[30px] sm:p-4">

            <div className="relative flex h-[320px] items-center justify-center overflow-hidden rounded-[19px] bg-[#E6F1FB] sm:h-[390px] sm:rounded-[24px]">

              {/* Cercle carte */}

              <div className="absolute h-80 w-80 rounded-full border-2 border-blue-200" />

              <div className="absolute h-60 w-60 rounded-full border border-blue-200" />

              <div className="absolute h-40 w-40 rounded-full border border-blue-300" />


              {/* Position */}

              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl ring-8 ring-blue-600/10">

                <Navigation className="h-6 w-6" />

              </div>


              {/* Garage 1 */}

              <div className="absolute left-[20%] top-[25%] flex h-10 w-10 items-center justify-center rounded-full bg-white text-amber-600 shadow-lg">

                <MapPin className="h-5 w-5" />

              </div>


              {/* Garage 2 */}

              <div className="absolute right-[20%] top-[35%] flex h-10 w-10 items-center justify-center rounded-full bg-white text-amber-600 shadow-lg">

                <MapPin className="h-5 w-5" />

              </div>


              {/* Garage 3 */}

              <div className="absolute bottom-[22%] left-[30%] flex h-10 w-10 items-center justify-center rounded-full bg-white text-amber-600 shadow-lg">

                <MapPin className="h-5 w-5" />

              </div>


              {/* Carte garage */}

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white p-4 shadow-xl">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="font-semibold text-slate-800">
                      Garage le plus proche
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      1,2 km · environ 4 min
                    </p>

                  </div>

                  <button className="rounded-xl bg-blue-600 p-2.5 text-white">

                    <Navigation className="h-4 w-4" />

                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* TEXTE */}

        <div>

          <div className="mb-4 inline-flex rounded-full bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-700">

            Assistance en cas de panne

          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">

            Un garage à proximité,
            <span className="block text-[#1468A8]">
              quand vous en avez besoin.
            </span>

          </h2>

          <p className="mt-5 leading-7 text-slate-500">

            Une panne peut arriver à tout moment. AutoGuide+ utilise
            votre localisation pour vous aider à identifier rapidement
            les garages disponibles autour de vous.

          </p>


          <div className="mt-7 space-y-4">

            <div className="flex gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">

                <MapPin className="h-5 w-5" />

              </div>

              <div>

                <h3 className="font-semibold text-slate-800">
                  Garages géolocalisés
                </h3>

                <p className="text-sm text-slate-500">
                  Retrouvez les garages disponibles autour de votre position.
                </p>

              </div>

            </div>


            <div className="flex gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">

                <ShieldCheck className="h-5 w-5" />

              </div>

              <div>

                <h3 className="font-semibold text-slate-800">
                  Garages référencés
                </h3>

                <p className="text-sm text-slate-500">
                  Consultez les informations disponibles sur les garages.
                </p>

              </div>

            </div>


            <div className="flex gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">

                <Phone className="h-5 w-5" />

              </div>

              <div>

                <h3 className="font-semibold text-slate-800">
                  Contact rapide
                </h3>

                <p className="text-sm text-slate-500">
                  Accédez facilement aux informations du garage.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}