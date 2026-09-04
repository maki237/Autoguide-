import {
  Search,
  Route,
  Wrench,
  ShieldCheck,
} from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Indiquez votre trajet",
    description:
      "Entrez votre point de départ et votre destination.",
  },
  {
    number: "02",
    icon: Route,
    title: "Calculez le meilleur itinéraire",
    description:
      "AutoGuide+ compare votre trajet et vous propose un itinéraire adapté.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Trouvez un garage disponible",
    description:
      "En cas de panne, localisez rapidement un garage à proximité.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Recevez la meilleure recommandation",
    description:
      "AutoGuide+ compare les options et vous aide à choisir la solution la plus pertinente.",
  },
]

export default function HowItWorks() {
  return (
    <section
      id="fonctionnement"
      className="border-t border-slate-200/80 bg-white px-5 py-11 sm:py-14 lg:px-8"
    >

      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Simple et rapide
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Comment ça marche ?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            AutoGuide+ vous accompagne en quelques étapes,
            de la préparation de votre trajet jusqu'à votre arrivée.
          </p>

        </div>


        <div className="relative mt-8 grid gap-5 sm:mt-10 md:grid-cols-4 md:gap-6">

          {/* Ligne */}

          <div className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-blue-100 md:block" />


          {steps.map((step) => {
            const Icon = step.icon

            return (
              <div
                key={step.number}
                className="relative z-10 rounded-2xl border border-slate-100 bg-[#fbfdff] p-5 text-center shadow-sm md:border-0 md:bg-transparent md:p-0 md:shadow-none"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-100 bg-white shadow-lg shadow-blue-900/5 sm:h-20 sm:w-20">

                  <Icon className="h-7 w-7 text-blue-600" />

                </div>

                <span className="mt-4 block text-xs font-bold text-blue-600">
                  ÉTAPE {step.number}
                </span>

                <h3 className="mt-2 font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-slate-500">
                  {step.description}
                </p>

              </div>
            )
          })}

        </div>

      </div>

    </section>
  )
}