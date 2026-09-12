import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import {
  ShieldCheck,
  CheckCircle2,
  Wrench,
  MapPin,
  Phone,
  Clock3,
  ArrowRight,
  X,
  Navigation,
  Search,
} from "lucide-react"

type TrustFeature = "garages" | "assistance"

const garages = [
  {
    name: "Garage Central",
    distance: "2,1 km",
    status: "Disponible",
    phone: "+237 6 90 00 00 00",
  },
  {
    name: "Garage Express",
    distance: "3,4 km",
    status: "Disponible",
    phone: "+237 6 95 00 00 00",
  },
  {
    name: "Auto Service",
    distance: "4,8 km",
    status: "Disponible",
    phone: "+237 6 77 00 00 00",
  },
]

const assistanceSteps = [
  {
    number: "01",
    title: "Signalez votre panne",
    description:
      "Indiquez le problème rencontré et votre position.",
    icon: Search,
  },
  {
    number: "02",
    title: "AutoGuide+ analyse",
    description:
      "Le système recherche les garages adaptés à proximité.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Choisissez votre solution",
    description:
      "Comparez les garages proposés avant de prendre contact.",
    icon: CheckCircle2,
  },
]

export default function TrustSection() {
  const [activeFeature, setActiveFeature] =
    useState<TrustFeature | null>(null)

  const [selectedGarage, setSelectedGarage] =
    useState<number | null>(null)

  const openFeature = (feature: TrustFeature) => {
    setActiveFeature(feature)
  }

  const closeFeature = () => {
    setActiveFeature(null)
    setSelectedGarage(null)
  }

  return (
    <section className="border-t border-slate-200/80 bg-[#F8FAFC] px-5 py-11 sm:py-14 lg:px-8">

      <div className="mx-auto max-w-7xl">

        {/* ====================================================== */}
        {/* MAIN CARD */}
        {/* ====================================================== */}

        <div className="overflow-hidden rounded-[24px] bg-[#4D8F08] p-6 text-white shadow-[0_18px_50px_rgba(77,143,8,0.16)] sm:rounded-[30px] sm:p-12 lg:p-16">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            {/* ================================================== */}
            {/* LEFT */}
            {/* ================================================== */}

            <div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15"
              >
                <ShieldCheck className="h-6 w-6" />
              </motion.div>

              <h2 className="text-3xl font-bold sm:text-4xl">
                Un réseau de confiance.
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-white/80">
                AutoGuide+ vous permet d'accéder à des informations
                sur les garages disponibles afin de vous aider à prendre
                une décision plus sereine en cas de panne.
              </p>

              {/* Petit indicateur */}
              <div className="mt-7 flex flex-wrap items-center gap-3">

                <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-medium text-white/90">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                  Réseau disponible
                </div>

                <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-medium text-white/90">
                  <MapPin className="h-3.5 w-3.5" />
                  Garages à proximité
                </div>

              </div>

            </div>

            {/* ================================================== */}
            {/* RIGHT — INTERACTIVE CARDS */}
            {/* ================================================== */}

            <div className="grid gap-4 sm:grid-cols-2">

              {/* ================================================= */}
              {/* GARAGES */}
              {/* ================================================= */}

              <motion.button
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openFeature("garages")}
                className={`group rounded-2xl p-5 text-left transition ${
                  activeFeature === "garages"
                    ? "bg-white text-slate-900"
                    : "bg-white/10 hover:bg-white/[0.16]"
                }`}
              >

                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl transition ${
                    activeFeature === "garages"
                      ? "bg-green-50 text-[#4D8F08]"
                      : "bg-white/10 text-white"
                  }`}
                >
                  <CheckCircle2 className="h-5 w-5" />
                </div>

                <p
                  className={`mt-4 font-semibold ${
                    activeFeature === "garages"
                      ? "text-slate-900"
                      : "text-white"
                  }`}
                >
                  Garages référencés
                </p>

                <p
                  className={`mt-1 text-sm ${
                    activeFeature === "garages"
                      ? "text-slate-500"
                      : "text-white/70"
                  }`}
                >
                  Des professionnels identifiés dans le réseau.
                </p>

                <div
                  className={`mt-4 flex items-center gap-1 text-xs font-semibold ${
                    activeFeature === "garages"
                      ? "text-[#4D8F08]"
                      : "text-white/80"
                  }`}
                >
                  Découvrir
                  <ArrowRight
                    className={`h-3.5 w-3.5 transition-transform ${
                      activeFeature === "garages"
                        ? "translate-x-1"
                        : "group-hover:translate-x-1"
                    }`}
                  />
                </div>

              </motion.button>

              {/* ================================================= */}
              {/* ASSISTANCE */}
              {/* ================================================= */}

              <motion.button
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openFeature("assistance")}
                className={`group rounded-2xl p-5 text-left transition ${
                  activeFeature === "assistance"
                    ? "bg-white text-slate-900"
                    : "bg-white/10 hover:bg-white/[0.16]"
                }`}
              >

                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl transition ${
                    activeFeature === "assistance"
                      ? "bg-green-50 text-[#4D8F08]"
                      : "bg-white/10 text-white"
                  }`}
                >
                  <Wrench className="h-5 w-5" />
                </div>

                <p
                  className={`mt-4 font-semibold ${
                    activeFeature === "assistance"
                      ? "text-slate-900"
                      : "text-white"
                  }`}
                >
                  Assistance rapide
                </p>

                <p
                  className={`mt-1 text-sm ${
                    activeFeature === "assistance"
                      ? "text-slate-500"
                      : "text-white/70"
                  }`}
                >
                  Trouvez plus facilement une solution en cas de panne.
                </p>

                <div
                  className={`mt-4 flex items-center gap-1 text-xs font-semibold ${
                    activeFeature === "assistance"
                      ? "text-[#4D8F08]"
                      : "text-white/80"
                  }`}
                >
                  Voir comment ça marche
                  <ArrowRight
                    className={`h-3.5 w-3.5 transition-transform ${
                      activeFeature === "assistance"
                        ? "translate-x-1"
                        : "group-hover:translate-x-1"
                    }`}
                  />
                </div>

              </motion.button>

            </div>

          </div>

          {/* ==================================================== */}
          {/* EXPANDED CONTENT */}
          {/* ==================================================== */}

          <AnimatePresence mode="wait">

            {activeFeature && (
              <motion.div
                key={activeFeature}
                initial={{
                  opacity: 0,
                  height: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  y: -10,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >

                <div className="mt-8 border-t border-white/15 pt-8">

                  {/* ================================================= */}
                  {/* GARAGES */}
                  {/* ================================================= */}

                  {activeFeature === "garages" && (
                    <div>

                      <div className="flex items-start justify-between gap-4">

                        <div>
                          <p className="text-sm font-semibold text-white/70">
                            RÉSEAU AUTOGUIDE+
                          </p>

                          <h3 className="mt-1 text-xl font-bold">
                            Garages disponibles à proximité
                          </h3>
                        </div>

                        <button
                          onClick={closeFeature}
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                        >
                          <X className="h-4 w-4" />
                        </button>

                      </div>

                      <div className="mt-5 grid gap-3 sm:grid-cols-3">

                        {garages.map((garage, index) => (
                          <motion.button
                            key={garage.name}
                            whileHover={{ scale: 1.02 }}
                            onClick={() => setSelectedGarage(index)}
                            className={`rounded-2xl p-4 text-left transition ${
                              selectedGarage === index
                                ? "bg-white text-slate-900"
                                : "bg-white/10 hover:bg-white/[0.16]"
                            }`}
                          >

                            <div className="flex items-center justify-between">

                              <div
                                className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                                  selectedGarage === index
                                    ? "bg-green-50 text-[#4D8F08]"
                                    : "bg-white/10"
                                }`}
                              >
                                <MapPin className="h-4 w-4" />
                              </div>

                              <span
                                className={`text-xs font-semibold ${
                                  selectedGarage === index
                                    ? "text-green-600"
                                    : "text-white/80"
                                }`}
                              >
                                {garage.status}
                              </span>

                            </div>

                            <p
                              className={`mt-3 text-sm font-semibold ${
                                selectedGarage === index
                                  ? "text-slate-900"
                                  : "text-white"
                              }`}
                            >
                              {garage.name}
                            </p>

                            <p
                              className={`mt-1 text-xs ${
                                selectedGarage === index
                                  ? "text-slate-400"
                                  : "text-white/60"
                              }`}
                            >
                              {garage.distance}
                            </p>

                          </motion.button>
                        ))}

                      </div>

                      {/* GARAGE DETAIL */}

                      <AnimatePresence>
                        {selectedGarage !== null && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              y: 10,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            exit={{
                              opacity: 0,
                              y: -10,
                            }}
                            className="mt-4 rounded-2xl bg-white p-5 text-slate-900"
                          >

                            <div className="flex items-center justify-between">

                              <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-[#4D8F08]">
                                  Garage sélectionné
                                </p>

                                <h4 className="mt-1 text-lg font-bold">
                                  {garages[selectedGarage].name}
                                </h4>
                              </div>

                              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-[#4D8F08]">
                                <Wrench className="h-5 w-5" />
                              </div>

                            </div>

                            <div className="mt-4 grid gap-3 sm:grid-cols-3">

                              <div className="rounded-xl bg-slate-50 p-3">
                                <MapPin className="h-4 w-4 text-blue-600" />

                                <p className="mt-2 text-xs text-slate-400">
                                  Distance
                                </p>

                                <p className="text-sm font-semibold">
                                  {garages[selectedGarage].distance}
                                </p>
                              </div>

                              <div className="rounded-xl bg-slate-50 p-3">
                                <Clock3 className="h-4 w-4 text-amber-500" />

                                <p className="mt-2 text-xs text-slate-400">
                                  Disponibilité
                                </p>

                                <p className="text-sm font-semibold">
                                  Maintenant
                                </p>
                              </div>

                              <div className="rounded-xl bg-slate-50 p-3">
                                <Phone className="h-4 w-4 text-green-600" />

                                <p className="mt-2 text-xs text-slate-400">
                                  Contact
                                </p>

                                <p className="text-sm font-semibold">
                                  {garages[selectedGarage].phone}
                                </p>
                              </div>

                            </div>

                            <button
                              onClick={() => {
                                setSelectedGarage(null)
                              }}
                              className="mt-4 flex items-center gap-2 rounded-xl bg-[#4D8F08] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#427a07]"
                            >
                              <Navigation className="h-4 w-4" />
                              Voir l'itinéraire
                            </button>

                          </motion.div>
                        )}
                      </AnimatePresence>

                    </div>
                  )}

                  {/* ================================================= */}
                  {/* ASSISTANCE */}
                  {/* ================================================= */}

                  {activeFeature === "assistance" && (
                    <div>

                      <div className="flex items-start justify-between gap-4">

                        <div>
                          <p className="text-sm font-semibold text-white/70">
                            EN CAS DE PANNE
                          </p>

                          <h3 className="mt-1 text-xl font-bold">
                            Une assistance en quelques étapes
                          </h3>
                        </div>

                        <button
                          onClick={closeFeature}
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                        >
                          <X className="h-4 w-4" />
                        </button>

                      </div>

                      <div className="mt-5 grid gap-3 md:grid-cols-3">

                        {assistanceSteps.map((step, index) => {
                          const Icon = step.icon

                          return (
                            <motion.div
                              key={step.number}
                              initial={{
                                opacity: 0,
                                y: 10,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              transition={{
                                delay: index * 0.08,
                              }}
                              className="rounded-2xl bg-white/10 p-5"
                            >

                              <div className="flex items-center justify-between">

                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                                  <Icon className="h-4 w-4" />
                                </div>

                                <span className="text-xs font-bold text-white/40">
                                  {step.number}
                                </span>

                              </div>

                              <h4 className="mt-4 font-semibold">
                                {step.title}
                              </h4>

                              <p className="mt-1 text-sm leading-6 text-white/65">
                                {step.description}
                              </p>

                            </motion.div>
                          )
                        })}

                      </div>

                    </div>
                  )}

                </div>

              </motion.div>
            )}

          </AnimatePresence>

        </div>

      </div>
    </section>
  )
}