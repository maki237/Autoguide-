import {
  BellRing,
  AlertTriangle,
  ShieldAlert,
  Clock3,
} from "lucide-react"

export default function AlertSection() {
  return (
    <section className="border-t border-slate-200/80 bg-white px-5 py-16 sm:py-20 lg:px-8">

      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">

        <div>

          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            Restez informé
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">

            Des alertes utiles
            <span className="block text-amber-500">
              au bon moment.
            </span>

          </h2>

          <p className="mt-5 leading-7 text-slate-500">

            Recevez des informations importantes pour mieux anticiper
            les problèmes sur votre trajet et améliorer votre sécurité.

          </p>


          <div className="mt-8 space-y-5">

            <div className="flex gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">

                <BellRing className="h-5 w-5" />

              </div>

              <div>

                <h3 className="font-semibold">
                  Notifications de trajet
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Soyez informé des événements importants liés à votre trajet.
                </p>

              </div>

            </div>


            <div className="flex gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500">

                <AlertTriangle className="h-5 w-5" />

              </div>

              <div>

                <h3 className="font-semibold">
                  Alertes de sécurité
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Identifiez les situations nécessitant davantage de vigilance.
                </p>

              </div>

            </div>


            <div className="flex gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">

                <Clock3 className="h-5 w-5" />

              </div>

              <div>

                <h3 className="font-semibold">
                  Gain de temps
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Préparez vos déplacements plus efficacement.
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* NOTIFICATION */}

        <div className="rounded-[24px] border border-slate-200/80 bg-[#F8FAFC] p-4 shadow-sm sm:rounded-[30px] sm:p-8">

          <div className="mx-auto max-w-md rounded-3xl border border-slate-100 bg-white p-6 shadow-xl">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50">

                <BellRing className="h-5 w-5 text-amber-600" />

              </div>

              <div>

                <p className="font-bold text-slate-800">
                  AutoGuide+
                </p>

                <p className="text-xs text-slate-400">
                  Maintenant
                </p>

              </div>

            </div>


            <div className="mt-6 rounded-2xl bg-amber-50 p-4">

              <div className="flex gap-3">

                <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />

                <div>

                  <p className="font-semibold text-amber-900">
                    Information sur votre trajet
                  </p>

                  <p className="mt-1 text-sm leading-5 text-amber-800/80">
                    Une information importante pourrait affecter
                    votre déplacement.
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