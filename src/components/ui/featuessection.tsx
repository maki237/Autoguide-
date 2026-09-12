import { motion } from "motion/react"
import {
  AlertTriangle,
  ArrowRight,
  CarFront,
  Check,
  Clock3,
  MapPin,
  Navigation,
  Route,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react"
import type { ComponentType, ReactNode } from "react"

type IconComponent = ComponentType<{ className?: string }>

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5 },
}

/* -------------------------------------------------------
   STEP BADGE
------------------------------------------------------- */

function StepBadge({
  icon: Icon,
  number,
  children,
  tone = "blue",
}: {
  icon: IconComponent
  number: string
  children: ReactNode
  tone?: "blue" | "amber" | "green"
}) {
  const tones = {
    blue: {
      wrapper: "bg-[#DCEFFA] text-[#1468A8]",
      icon: "bg-[#1468A8] text-white",
    },
    amber: {
      wrapper: "bg-[#FFF0CC] text-[#A96800]",
      icon: "bg-[#F0A500] text-white",
    },
    green: {
      wrapper: "bg-[#DDF5E9] text-[#16824A]",
      icon: "bg-[#16824A] text-white",
    },
  }

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${tones[tone].wrapper}`}
    >
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full ${tones[tone].icon}`}
      >
        <Icon className="h-3.5 w-3.5" />
      </span>

      <span>
        {number} · {children}
      </span>
    </div>
  )
}

/* -------------------------------------------------------
   MAP PREVIEW
------------------------------------------------------- */

function MapPreview() {
  return (
    <div className="relative h-[290px] overflow-hidden rounded-[24px] border border-[#C5DFEE] bg-[#D9EDF7]">
      {/* Decorative areas */}
      <div className="absolute left-[-40px] top-[-30px] h-40 w-40 rounded-full bg-[#BEE0EE]" />
      <div className="absolute bottom-[-50px] right-[-30px] h-48 w-48 rounded-full bg-[#C6E6D6]" />

      {/* Roads */}
      <div className="absolute inset-0 opacity-80">
        <div className="absolute left-[13%] top-[-10%] h-[120%] w-[13px] rotate-[25deg] rounded-full bg-white" />
        <div className="absolute left-[48%] top-[-20%] h-[140%] w-[11px] rotate-[-34deg] rounded-full bg-white" />
        <div className="absolute right-[12%] top-[-10%] h-[130%] w-[9px] rotate-[48deg] rounded-full bg-white" />

        <div className="absolute left-[-10%] top-[35%] h-[10px] w-[120%] rotate-[8deg] rounded-full bg-white" />
        <div className="absolute left-[-10%] top-[68%] h-[8px] w-[120%] rotate-[-12deg] rounded-full bg-white" />
      </div>

      {/* Secondary roads */}
      <div className="absolute left-[6%] top-[23%] h-[3px] w-[75%] rotate-[14deg] rounded-full bg-[#9BC7DC]" />
      <div className="absolute left-[18%] top-[74%] h-[3px] w-[70%] rotate-[-8deg] rounded-full bg-[#9BC7DC]" />
      <div className="absolute right-[15%] top-[15%] h-[3px] w-[55%] rotate-[65deg] rounded-full bg-[#9BC7DC]" />

      {/* Alternative route */}
      <div className="absolute left-[20%] top-[48%] h-[4px] w-[62%] rotate-[-8deg] border-t-[3px] border-dashed border-[#6DA9C9]" />

      {/* Main route */}
      <motion.div
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute left-[18%] top-[51%] h-[5px] w-[67%] rotate-[-8deg] rounded-full bg-[#1468A8] shadow-sm"
      />

      {/* Current position */}
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute left-[18%] top-[48%]"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-[#1468A8] shadow-lg">
          <CarFront className="h-5 w-5 text-white" />
        </div>

        <div className="absolute left-1/2 top-1/2 -z-10 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1468A8]/15" />
      </motion.div>

      {/* Destination */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.35 }}
        className="absolute right-[13%] top-[25%]"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-[#E85D5D] shadow-lg">
          <MapPin className="h-5 w-5 fill-white text-white" />
        </div>
      </motion.div>

      {/* Route information */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#1468A8]">
            Itinéraire recommandé
          </p>

          <div className="mt-1 flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-sm font-bold text-slate-800">
              <Clock3 className="h-4 w-4 text-[#1468A8]" />
              18 min
            </div>

            <div className="h-4 w-px bg-slate-200" />

            <span className="text-sm text-slate-500">5,2 km</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 rounded-full bg-[#DCF5E7] px-3 py-1.5 text-xs font-bold text-[#16824A]">
          <Check className="h-3.5 w-3.5" />
          Trajet fluide
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------
   LOCATION PREVIEW
------------------------------------------------------- */

function LocationPreview() {
  const garages = [
    { left: "20%", top: "28%" },
    { left: "72%", top: "25%" },
    { left: "66%", top: "68%" },
    { left: "28%", top: "73%" },
  ]

  return (
    <div className="relative h-[250px] overflow-hidden rounded-[22px] border border-[#BFDDE5] bg-[#DDF2F5]">
      {/* Search zone */}
      <motion.div
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-[#3BA7B8]/60 bg-[#3BA7B8]/10"
      />

      {/* Roads */}
      <div className="absolute left-[-20%] top-[45%] h-[9px] w-[140%] rotate-[10deg] rounded-full bg-white" />
      <div className="absolute left-[45%] top-[-20%] h-[140%] w-[8px] rotate-[35deg] rounded-full bg-white" />

      {/* Garage markers */}
      {garages.map((garage, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.12 }}
          className="absolute"
          style={{
            left: garage.left,
            top: garage.top,
          }}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-[#16824A] shadow-md">
            <Wrench className="h-4 w-4 text-white" />
          </div>
        </motion.div>
      ))}

      {/* Current location */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-[#1468A8] shadow-xl">
          <Navigation className="h-5 w-5 fill-white text-white" />
        </div>

        <div className="absolute left-1/2 top-1/2 -z-10 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1468A8]/15" />
      </div>

      {/* Bottom information */}
      <div className="absolute bottom-3 left-3 right-3 rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-md">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#DDF5E9]">
            <MapPin className="h-4 w-4 text-[#16824A]" />
          </div>

          <div>
            <p className="text-sm font-bold text-slate-800">
              Position localisée
            </p>
            <p className="text-xs text-slate-500">
              4 garages dans votre secteur
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------
   GARAGE PREVIEW
------------------------------------------------------- */

function GaragePreview() {
  const garages = [
    {
      name: "Garage Express",
      distance: "1,2 km",
      rating: "4,8",
      available: true,
      best: true,
    },
    {
      name: "Auto Service",
      distance: "2,1 km",
      rating: "4,6",
      available: true,
      best: false,
    },
    {
      name: "Meca Plus",
      distance: "3,4 km",
      rating: "4,5",
      available: false,
      best: false,
    },
  ]

  return (
    <div className="space-y-2.5">
      {garages.map((garage, index) => (
        <motion.div
          key={garage.name}
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className={`relative rounded-2xl border p-3.5 ${
            garage.best
              ? "border-[#F1C76B] bg-[#FFF8E8]"
              : "border-[#E4D7BC] bg-white"
          }`}
        >
          {garage.best && (
            <div className="absolute right-3 top-3 rounded-full bg-[#F0A500] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-white">
              Meilleur choix
            </div>
          )}

          <div className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                garage.available
                  ? "bg-[#DDF5E9] text-[#16824A]"
                  : "bg-slate-100 text-slate-400"
              }`}
            >
              <Wrench className="h-5 w-5" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-slate-800">
                {garage.name}
              </p>

              <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
                <span>{garage.distance}</span>
                <span>•</span>
                <span>★ {garage.rating}</span>
              </div>
            </div>

            <div
              className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                garage.available
                  ? "bg-[#DDF5E9] text-[#16824A]"
                  : "bg-slate-100 text-slate-400"
              }`}
            >
              {garage.available ? "Disponible" : "Fermé"}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

/* -------------------------------------------------------
   BREAKDOWN PROCESS
------------------------------------------------------- */

function BreakdownProcess() {
  const steps = [
    {
      icon: AlertTriangle,
      title: "Signaler",
      description: "Indiquez votre panne",
      color: "bg-[#FFF0CC] text-[#A96800]",
    },
    {
      icon: MapPin,
      title: "Localiser",
      description: "Votre position est détectée",
      color: "bg-[#DCEFFA] text-[#1468A8]",
    },
    {
      icon: Wrench,
      title: "Rechercher",
      description: "Les garages proches",
      color: "bg-[#DDF5E9] text-[#16824A]",
    },
    {
      icon: Check,
      title: "Choisir",
      description: "La meilleure option",
      color: "bg-[#E7E1F8] text-[#7654B8]",
    },
  ]

  return (
    <div className="relative overflow-hidden rounded-[24px] border border-[#C7DCE8] bg-white p-5">
      {/* Progress line */}
      <div className="absolute left-[12%] right-[12%] top-[42px] hidden h-[2px] bg-[#D5E4EC] md:block" />

      <div className="relative grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = step.icon

          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative text-center"
            >
              <div
                className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${step.color}`}
              >
                <Icon className="h-6 w-6" />
              </div>

              <p className="mt-3 text-sm font-bold text-slate-800">
                {step.title}
              </p>

              <p className="mt-1 text-xs leading-relaxed text-slate-500">
                {step.description}
              </p>
            </motion.div>
          )
        })}
      </div>

      {/* Recommendation */}
      <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-[#F1D89D] bg-[#FFF8E8] p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F0A500] text-white">
            <ShieldCheck className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm font-bold text-slate-800">
              Garage Express recommandé
            </p>

            <p className="text-xs text-slate-500">
              1,2 km · Disponible · Ouvert maintenant
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs font-bold text-[#A96800]">
          Voir le garage
          <ArrowRight className="h-3.5 w-3.5" />
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------
   MAIN SECTION
------------------------------------------------------- */

export default function FeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-[#EAF5FB] py-20">
      {/* Decorative background */}
      <div className="pointer-events-none absolute left-[-120px] top-[12%] h-72 w-72 rounded-full bg-[#CFE8F4] opacity-70" />
      <div className="pointer-events-none absolute right-[-100px] top-[45%] h-80 w-80 rounded-full bg-[#DDEFD9] opacity-60" />
      <div className="pointer-events-none absolute bottom-[-120px] left-[35%] h-72 w-72 rounded-full bg-[#FFF0CF] opacity-60" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ------------------------------------------------
            INTRO
        ------------------------------------------------ */}
        <motion.div
          {...reveal}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#BFDCEB] bg-white px-4 py-2 text-xs font-bold text-[#1468A8] shadow-sm">
            <Sparkles className="h-4 w-4" />
            Comment fonctionne AutoGuide+
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102F43] sm:text-4xl lg:text-5xl">
            De votre trajet à votre garage,
            <span className="block text-[#1468A8]">
              tout simplement.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            AutoGuide+ vous accompagne avant et pendant votre trajet,
            puis vous aide à trouver une solution rapidement en cas
            d'imprévu.
          </p>
        </motion.div>

        {/* ------------------------------------------------
            STEP 01
        ------------------------------------------------ */}
        <motion.div
          {...reveal}
          className="mb-6 overflow-hidden rounded-[30px] border border-[#BFDCEA] bg-[#E3F2F9] p-5 sm:p-7 lg:p-8"
        >
          <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <StepBadge
                icon={Route}
                number="01"
                tone="blue"
              >
                Itinéraire
              </StepBadge>

              <h3 className="mt-5 text-2xl font-extrabold text-[#102F43] sm:text-3xl">
                Trouvez le meilleur chemin
              </h3>

              <p className="mt-4 max-w-xl leading-7 text-slate-600">
                Entrez votre point de départ et votre destination.
                AutoGuide+ analyse les itinéraires disponibles et vous
                présente le trajet le plus adapté.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Calcul automatique du trajet",
                  "Distance et durée estimées",
                  "Visualisation claire sur la carte",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#1468A8]">
                      <Check className="h-4 w-4" />
                    </div>

                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-bold text-[#1468A8] shadow-sm">
                <Navigation className="h-4 w-4" />
                Itinéraire optimisé
              </div>
            </div>

            <MapPreview />
          </div>
        </motion.div>

        {/* ------------------------------------------------
            STEP 02 + 03
        ------------------------------------------------ */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* STEP 02 */}
          <motion.div
            {...reveal}
            className="rounded-[30px] border border-[#BBDDE4] bg-[#DFF2F5] p-5 sm:p-7"
          >
            <StepBadge
              icon={MapPin}
              number="02"
              tone="green"
            >
              Localisation
            </StepBadge>

            <h3 className="mt-5 text-2xl font-extrabold text-[#102F43]">
              Sachez où vous êtes
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              En cas de besoin, votre position est utilisée pour
              rechercher les garages situés autour de vous.
            </p>

            <div className="mt-6">
              <LocationPreview />
            </div>

            <div className="mt-4 flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-semibold text-[#16824A]">
              <MapPin className="h-4 w-4" />
              Position actuelle détectée
            </div>
          </motion.div>

          {/* STEP 03 */}
          <motion.div
            {...reveal}
            className="rounded-[30px] border border-[#E8D6AD] bg-[#FFF3D9] p-5 sm:p-7"
          >
            <StepBadge
              icon={Wrench}
              number="03"
              tone="amber"
            >
              Garages
            </StepBadge>

            <h3 className="mt-5 text-2xl font-extrabold text-[#102F43]">
              Comparez les garages
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Les garages proches sont présentés avec les informations
              utiles pour vous aider à faire votre choix.
            </p>

            <div className="mt-6 rounded-[22px] border border-[#E6D7B8] bg-[#FFF9ED] p-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#A96800]">
                    Garages proches
                  </p>

                  <p className="mt-1 text-sm font-bold text-slate-800">
                    3 résultats
                  </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F0A500] text-white">
                  <Wrench className="h-4 w-4" />
                </div>
              </div>

              <GaragePreview />
            </div>
          </motion.div>
        </div>

        {/* ------------------------------------------------
            STEP 04
        ------------------------------------------------ */}
        <motion.div
          {...reveal}
          className="mt-6 rounded-[30px] border border-[#C8DDE8] bg-[#EDF7FB] p-5 sm:p-7 lg:p-8"
        >
          <div className="mb-7 max-w-2xl">
            <StepBadge
              icon={AlertTriangle}
              number="04"
              tone="amber"
            >
              En cas de panne
            </StepBadge>

            <h3 className="mt-5 text-2xl font-extrabold text-[#102F43] sm:text-3xl">
              Un garage adapté à votre situation
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Signalez votre panne et laissez AutoGuide+ vous aider à
              identifier les garages les plus pertinents selon votre
              position, leur disponibilité et leur proximité.
            </p>
          </div>

          <BreakdownProcess />
        </motion.div>

        {/* ------------------------------------------------
            FINAL MESSAGE
        ------------------------------------------------ */}
        <motion.div
          {...reveal}
          className="mt-10 rounded-[28px] bg-[#1468A8] px-6 py-8 text-center text-white sm:px-10"
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
            <CarFront className="h-6 w-6" />
          </div>

          <h3 className="mt-4 text-2xl font-extrabold sm:text-3xl">
            Une route plus simple, même quand un imprévu survient.
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
            AutoGuide+ centralise votre itinéraire, votre localisation
            et les informations utiles sur les garages pour vous
            permettre de prendre une décision rapidement.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold">
              Itinéraire
            </span>

            <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold">
              Géolocalisation
            </span>

            <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold">
              Garages
            </span>

            <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold">
              Assistance
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}