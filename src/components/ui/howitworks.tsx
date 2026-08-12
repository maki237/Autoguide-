import {
  Search,
  Route,
  Wrench,
  
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
      "AutoGuide+ analyse votre trajet et vous propose un itinéraire optimal.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Trouvez un garage",
    description:
      "En cas de panne, localisez rapidement un garage à proximité.",
  },
]

export default function HowItWorks() {
  return (
    <section
      id="fonctionnement"
      className="bg-white px-5 py-20 lg:px-8"
    >

      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
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


        <div className="relative mt-14 grid gap-8 md:grid-cols-3">

          {/* Ligne */}

          <div className="absolute left-[20%] right-[20%] top-10 hidden h-px bg-blue-100 md:block" />


          {steps.map((step) => {
            const Icon = step.icon

            return (
              <div
                key={step.number}
                className="relative z-10 text-center"
              >

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-100 bg-white shadow-lg shadow-blue-900/5">

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