import {
  Navigation,
  MapPinned,
  Wrench,
  BellRing,
  ShieldCheck,
  Route,
} from "lucide-react"

import FeatureCard from "@/components/ui/featureCard"

export default function FeaturesSection() {
  return (
    <section
      id="solutions"
      className="bg-[#F8FAFC] px-5 py-20 lg:px-8"
    >

      <div className="mx-auto max-w-7xl">

        {/* TITRE */}

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Nos solutions
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Des outils utiles pour votre conduite
          </h2>

          <p className="mt-4 text-slate-500">
            Une suite complète d'outils pour optimiser vos déplacements,
            localiser les garages et vous accompagner en cas de panne.
          </p>

        </div>


        {/* CARTES */}

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          <FeatureCard
            icon={Route}
            title="Navigation"
            description="Calculez l'itinéraire optimal en tenant compte de la distance, du temps de trajet et des conditions de circulation."
            color="blue"
            large
          />

          <FeatureCard
            icon={MapPinned}
            title="Géolocalisation"
            description="Localisez votre position et découvrez rapidement les services et garages disponibles autour de vous."
            color="blue"
          />

          <FeatureCard
            icon={Wrench}
            title="Garages à proximité"
            description="Trouvez rapidement les garages les plus proches en cas de panne ou de besoin d'assistance."
            color="amber"
          />

          <FeatureCard
            icon={BellRing}
            title="Alertes de trajet"
            description="Recevez des notifications utiles concernant votre trajet, les risques routiers et les informations importantes."
            color="amber"
          />

          <FeatureCard
            icon={ShieldCheck}
            title="Réseau certifié"
            description="Accédez à un réseau de garages référencés et identifiés pour vous aider à voyager avec davantage de confiance."
            color="green"
          />

          <FeatureCard
            icon={Navigation}
            title="Assistance en cas de panne"
            description="Signalez rapidement votre panne et obtenez une aide adaptée à votre situation et à votre localisation."
            color="green"
          />

        </div>

      </div>

    </section>
  )
}