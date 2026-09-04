import {
  ShieldCheck,
  CheckCircle2,
  Wrench,
} from "lucide-react"

export default function TrustSection() {
  return (
    <section className="border-t border-slate-200/80 bg-[#F8FAFC] px-5 py-11 sm:py-14 lg:px-8">

      <div className="mx-auto max-w-7xl">

        <div className="overflow-hidden rounded-[24px] bg-[#4D8F08] p-6 text-white shadow-[0_18px_50px_rgba(77,143,8,0.16)] sm:rounded-[30px] sm:p-12 lg:p-16">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">

                <ShieldCheck className="h-6 w-6" />

              </div>

              <h2 className="text-3xl font-bold sm:text-4xl">
                Un réseau de confiance.
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-white/80">

                AutoGuide+ vous permet d'accéder à des informations
                sur les garages disponibles afin de vous aider à prendre
                une décision plus sereine en cas de panne.

              </p>

            </div>


            <div className="grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl bg-white/10 p-5">

                <CheckCircle2 className="h-6 w-6" />

                <p className="mt-4 font-semibold">
                  Garages référencés
                </p>

                <p className="mt-1 text-sm text-white/70">
                  Des professionnels identifiés dans le réseau.
                </p>

              </div>


              <div className="rounded-2xl bg-white/10 p-5">

                <Wrench className="h-6 w-6" />

                <p className="mt-4 font-semibold">
                  Assistance rapide
                </p>

                <p className="mt-1 text-sm text-white/70">
                  Trouvez plus facilement une solution en cas de panne.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}