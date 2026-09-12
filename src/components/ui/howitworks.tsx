
import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock3,
  MapPin,
  Navigation,
  Route,
  Search,
  ShieldCheck,
  Wrench,
} from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Indiquez votre trajet",
    shortTitle: "Votre trajet",
    description:
      "Renseignez simplement votre point de départ et votre destination.",
    detail:
      "AutoGuide+ récupère les informations nécessaires pour préparer votre trajet.",
    accent: "blue",
  },
  {
    number: "02",
    icon: Route,
    title: "Calculez le meilleur itinéraire",
    shortTitle: "Votre itinéraire",
    description:
      "Le système compare les itinéraires possibles pour vous proposer le plus adapté.",
    detail:
      "Distance, durée estimée et état du trafic sont pris en compte.",
    accent: "cyan",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Trouvez un garage disponible",
    shortTitle: "Les garages",
    description:
      "En cas de panne, les garages situés autour de votre position sont recherchés.",
    detail:
      "Vous visualisez rapidement les garages disponibles à proximité.",
    accent: "amber",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Recevez la meilleure recommandation",
    shortTitle: "La recommandation",
    description:
      "Les garages trouvés sont comparés pour vous proposer celui qui correspond le mieux à votre situation.",
    detail:
      "Localisation, distance et disponibilité sont notamment pris en compte.",
    accent: "green",
  },
]

function StepVisual({ step }: { step: number }) {
  if (step === 0) {
    return (
      <div className="relative flex h-full min-h-[360px] items-center justify-center overflow-hidden rounded-[28px] bg-[#0d1728] p-5 sm:min-h-[400px] sm:p-7">
        {/* Décor */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl" />

        {/* Faux écran */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-md rounded-3xl border border-white/10 bg-[#111d31] p-5 shadow-[0_25px_70px_rgba(0,0,0,0.35)]"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
              <Navigation className="h-5 w-5" />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Préparer votre trajet
              </p>
              <p className="text-xs text-slate-400">
                Où souhaitez-vous aller ?
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="mb-2 flex items-center gap-2 text-xs text-slate-400">
                <div className="h-2 w-2 rounded-full bg-blue-400" />
                Point de départ
              </div>

              <p className="text-sm font-medium text-white">
                Yaoundé, Centre-ville
              </p>
            </div>

            <div className="ml-5 h-5 border-l border-dashed border-white/20" />

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="mb-2 flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                Destination
              </div>

              <p className="text-sm font-medium text-white">
                Bastos, Yaoundé
              </p>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mt-5 flex items-center justify-center gap-2 rounded-2xl bg-[#1677C8] px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20"
          >
            <Route className="h-4 w-4" />
            Calculer mon itinéraire
          </motion.div>
        </motion.div>
      </div>
    )
  }

  if (step === 1) {
    return (
      <div className="relative min-h-[360px] overflow-hidden rounded-[28px] bg-[#0d1728] sm:min-h-[400px]">
        {/* Faux fond de carte */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute left-[8%] top-[20%] h-px w-[85%] rotate-[18deg] bg-white/10" />
          <div className="absolute left-[10%] top-[52%] h-px w-[90%] -rotate-[14deg] bg-white/10" />
          <div className="absolute left-[30%] top-[8%] h-[90%] w-px rotate-[16deg] bg-white/10" />
          <div className="absolute left-[68%] top-[5%] h-[95%] w-px -rotate-[24deg] bg-white/10" />
          <div className="absolute left-[5%] top-[72%] h-px w-[90%] rotate-[4deg] bg-white/10" />
        </div>

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

        {/* Route */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 600 460"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M100 350 C170 300 180 220 270 250 C350 280 360 150 500 110"
            fill="none"
            stroke="rgba(34,211,238,0.22)"
            strokeWidth="14"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2 }}
          />

          <motion.path
            d="M100 350 C170 300 180 220 270 250 C350 280 360 150 500 110"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2 }}
          />
        </svg>

        {/* Départ */}
        <div className="absolute bottom-[18%] left-[13%]">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-blue-600 shadow-[0_0_25px_rgba(37,99,235,0.7)]">
            <div className="h-2.5 w-2.5 rounded-full bg-white" />
          </div>
        </div>

        {/* Destination */}
        <div className="absolute right-[13%] top-[17%]">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-cyan-500 shadow-[0_0_25px_rgba(34,211,238,0.7)]">
            <MapPin className="h-5 w-5 text-white" />
          </div>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-[#101b2d]/95 p-4 shadow-2xl backdrop-blur-md sm:left-7 sm:right-auto sm:w-[330px]"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-cyan-300">
                <Check className="h-3.5 w-3.5" />
                Itinéraire recommandé
              </div>

              <p className="mt-2 font-semibold text-white">
                Yaoundé → Bastos
              </p>
            </div>

            <div className="rounded-xl bg-cyan-400/10 px-3 py-2 text-center">
              <Clock3 className="mx-auto h-4 w-4 text-cyan-300" />
              <p className="mt-1 text-sm font-bold text-white">18 min</p>
            </div>
          </div>

          <div className="mt-4 flex gap-2 text-xs text-slate-400">
            <span>5,2 km</span>
            <span>•</span>
            <span>Trafic faible</span>
          </div>
        </motion.div>
      </div>
    )
  }

  if (step === 2) {
    const garages = [
      { top: "28%", left: "23%" },
      { top: "45%", left: "67%" },
      { top: "67%", left: "38%" },
      { top: "20%", left: "78%" },
    ]

    return (
      <div className="relative min-h-[360px] overflow-hidden rounded-[28px] bg-[#0d1728] sm:min-h-[400px]">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute left-[10%] top-[20%] h-px w-[80%] rotate-[25deg] bg-white/10" />
          <div className="absolute left-[5%] top-[60%] h-px w-[90%] -rotate-[8deg] bg-white/10" />
          <div className="absolute left-[25%] top-[5%] h-[90%] w-px rotate-[20deg] bg-white/10" />
          <div className="absolute left-[70%] top-[5%] h-[90%] w-px -rotate-[17deg] bg-white/10" />
        </div>

        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-amber-500/15 blur-3xl" />

        {/* Zone de recherche */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-400/20 bg-amber-400/5"
          animate={{ scale: [1, 1.15, 1], opacity: [0.7, 0.3, 0.7] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />

        {/* Position utilisateur */}
        <div className="absolute left-1/2 top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-blue-600 shadow-[0_0_30px_rgba(37,99,235,0.8)]">
          <Navigation className="h-5 w-5 text-white" />
        </div>

        {/* Garages */}
        {garages.map((garage, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              top: garage.top,
              left: garage.left,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25 + index * 0.12 }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-amber-500 text-white shadow-[0_0_22px_rgba(245,158,11,0.65)]">
              <Wrench className="h-4 w-4" />
            </div>
          </motion.div>
        ))}

        {/* Header */}
        <div className="absolute left-5 right-5 top-5 flex items-center justify-between rounded-2xl border border-white/10 bg-[#101b2d]/90 px-4 py-3 backdrop-blur-md sm:left-7 sm:right-7">
          <div>
            <p className="text-sm font-semibold text-white">
              Garages à proximité
            </p>
            <p className="mt-0.5 text-xs text-slate-400">
              Autour de votre position
            </p>
          </div>

          <div className="rounded-xl bg-amber-400/10 px-3 py-2 text-xs font-semibold text-amber-300">
            4 trouvés
          </div>
        </div>

        {/* Bottom info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-[#101b2d]/95 p-4 backdrop-blur-md sm:left-7 sm:right-7"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 text-amber-300">
              <Wrench className="h-5 w-5" />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Recherche effectuée
              </p>
              <p className="text-xs text-slate-400">
                Les garages proches sont maintenant disponibles.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-[28px] bg-[#0d1728] p-4 sm:min-h-[400px] sm:p-6">
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-green-500/15 blur-3xl" />
      <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />

      <div className="relative flex h-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55 }}
          className="w-full max-w-md rounded-3xl border border-white/10 bg-[#111d31] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.4)] sm:p-6"
        >
          <div className="mb-5 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-green-400">
                <ShieldCheck className="h-4 w-4" />
                Recommandation
              </div>

              <h3 className="mt-1 text-lg font-bold text-white">
                Garage recommandé
              </h3>
            </div>

            <div className="rounded-full bg-green-400/10 px-3 py-1.5 text-xs font-semibold text-green-400">
              Disponible
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-500/10 text-green-400">
                <Wrench className="h-6 w-6" />
              </div>

              <div className="min-w-0">
                <p className="font-semibold text-white">Garage Express</p>

                <div className="mt-1 flex items-center gap-2 text-xs text-slate-400">
                  <MapPin className="h-3.5 w-3.5" />
                  1,2 km
                  <span>•</span>
                  <span className="text-amber-300">★ 4,8</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-white/[0.04] p-3">
              <p className="text-xs text-slate-500">Distance</p>
              <p className="mt-1 text-sm font-semibold text-white">1,2 km</p>
            </div>

            <div className="rounded-2xl bg-white/[0.04] p-3">
              <p className="text-xs text-slate-500">Disponibilité</p>
              <p className="mt-1 text-sm font-semibold text-green-400">
                Ouvert
              </p>
            </div>
          </div>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-green-500 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-500/20 transition hover:bg-green-400"
          >
            Voir le garage
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)

  const currentStep = steps[activeStep]
  const Icon = currentStep.icon

  const goNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1)
    }
  }

  const goPrevious = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1)
    }
  }

  return (
    <section
      className="relative overflow-hidden bg-[#F7FBFF] py-12 text-slate-900 sm:py-16 lg:py-20"
    >
      {/* ================================= */}
      {/*           DÉCORATIONS             */}
      {/* ================================= */}

      <div className="pointer-events-none absolute -left-48 -top-48 h-[38rem] w-[38rem] rounded-full bg-blue-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-56 -right-40 h-[38rem] w-[38rem] rounded-full bg-cyan-100/50 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/40 blur-3xl" />

      {/* ================================= */}
      {/*             CONTENU               */}
      {/* ================================= */}

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* INTRO */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Comment fonctionne{" "}
            <span className="bg-gradient-to-r from-[#1468A8] via-[#2b8fd4] to-[#45B7FF] bg-clip-text text-transparent">
              AutoGuide+
            </span>
            ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg"
          >
            De votre trajet à la recommandation d'un garage, découvrez
            simplement comment AutoGuide+ vous accompagne à chaque étape.
          </motion.p>
        </div>

        {/* ================================= */}
        {/*             STEPPER               */}
        {/* ================================= */}

        <div className="mx-auto mt-10 max-w-6xl sm:mt-12">
          <div className="relative">
            {/* Ligne */}
            <div className="absolute left-[8%] right-[8%] top-7 hidden h-px bg-blue-100 md:block" />

            <motion.div
              className="absolute left-[8%] top-7 hidden h-px bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 md:block"
              animate={{
                width: `${(activeStep / (steps.length - 1)) * 84}%`,
              }}
              transition={{ duration: 0.45 }}
            />

            <div className="relative grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {steps.map((step, index) => {
                const StepIcon = step.icon
                const active = index === activeStep
                const completed = index < activeStep

                return (
                  <button
                    key={step.number}
                    onClick={() => setActiveStep(index)}
                    className="group text-left outline-none"
                  >
                    <div className="flex flex-col items-center text-center">
                      <motion.div
                        animate={{
                          scale: active ? 1.08 : 1,
                        }}
                        className={`
                          relative z-10 flex h-14 w-14 items-center justify-center
                          rounded-2xl border transition-all duration-300
                          ${
                            active
                              ? "border-blue-400 bg-blue-500 text-white shadow-[0_0_35px_rgba(59,130,246,0.45)]"
                              : completed
                                ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-300"
                                : "border-blue-100 bg-white text-slate-500 group-hover:border-blue-300 group-hover:text-[#1468A8]"
                          }
                        `}
                      >
                        {completed ? (
                          <Check className="h-5 w-5" />
                        ) : (
                          <StepIcon className="h-5 w-5" />
                        )}
                      </motion.div>

                      <p
                        className={`mt-4 text-xs font-semibold uppercase tracking-[0.12em] ${
                          active ? "text-[#1468A8]" : "text-slate-500"
                        }`}
                      >
                        Étape {step.number}
                      </p>

                      <p
                        className={`mt-1 text-sm font-semibold ${
                          active ? "text-slate-900" : "text-slate-500"
                        }`}
                      >
                        {step.shortTitle}
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* ================================= */}
        {/*       GRANDE ZONE PRINCIPALE      */}
        {/* ================================= */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="mt-10 grid items-stretch gap-5 lg:mt-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-6"
          >
            {/* TEXTE */}
            <div className="flex flex-col justify-center rounded-[30px] border border-blue-100 bg-white/90 p-5 shadow-[0_20px_50px_rgba(20,104,168,0.1)] sm:p-7 lg:p-8">
              <div
                className={`
                  mb-7 flex h-14 w-14 items-center justify-center rounded-2xl
                  ${
                    activeStep === 0
                      ? "bg-blue-500/15 text-blue-400"
                      : activeStep === 1
                        ? "bg-cyan-400/15 text-cyan-300"
                        : activeStep === 2
                          ? "bg-amber-400/15 text-amber-300"
                          : "bg-green-400/15 text-green-300"
                  }
                `}
              >
                <Icon className="h-6 w-6" />
              </div>

              <div className="text-sm font-semibold text-slate-500">
                ÉTAPE {currentStep.number}
              </div>

              <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {currentStep.title}
              </h3>

              <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                {currentStep.description}
              </p>

              <div className="mt-7 border-l-2 border-blue-500/50 pl-4">
                <p className="text-sm leading-6 text-slate-600">
                  {currentStep.detail}
                </p>
              </div>

              {/* Navigation */}
              <div className="mt-10 flex items-center gap-3">
                <button
                  onClick={goPrevious}
                  disabled={activeStep === 0}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-slate-600 transition hover:bg-blue-100 hover:text-[#1468A8] disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>

                {activeStep < steps.length - 1 ? (
                  <button
                    onClick={goNext}
                    className="group flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#1677C8] px-5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-[#2b8fd4]"
                  >
                    Étape suivante
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                ) : (
                  <a
                    href="#solutions"
                    className="group flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-green-500 px-5 text-sm font-semibold text-white shadow-lg shadow-green-500/20 transition hover:bg-green-400"
                  >
                    Découvrir AutoGuide+
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                )}
              </div>
            </div>

            {/* VISUEL */}
            <div className="relative">
              <div
                className={`
                  absolute -inset-6 rounded-[40px] blur-3xl
                  ${
                    activeStep === 0
                      ? "bg-blue-600/10"
                      : activeStep === 1
                        ? "bg-cyan-500/10"
                        : activeStep === 2
                          ? "bg-amber-500/10"
                          : "bg-green-500/10"
                  }
                `}
              />

              <div className="relative rounded-[34px] border border-blue-100 bg-white p-2 shadow-[0_24px_70px_rgba(20,104,168,0.12)] sm:p-3">
                <StepVisual step={activeStep} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* INDICATION */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex items-center justify-center gap-2 text-xs text-slate-500"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
          Cliquez sur une étape pour découvrir son fonctionnement
        </motion.div>
      </div>
    </section>
  )
}
