import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import {
  BellRing,
  AlertTriangle,
  ShieldAlert,
  Clock3,
  Sparkles,
  CheckCircle2,
  MapPin,
  ArrowRight,
  RotateCcw,
  Navigation,
  Phone,
  X,
} from "lucide-react"

type Feature = "realtime" | "situation" | "recommendation"

const features = {
  realtime: {
    title: "Analyse en temps réel",
    description:
      "Les informations importantes apparaissent au moment où vous en avez besoin.",
  },
  situation: {
    title: "Situation comprise",
    description:
      "Votre position, votre trajet et les incidents signalés sont pris en compte pour comprendre la situation.",
  },
  recommendation: {
    title: "Choix recommandé",
    description:
      "Consultez les garages disponibles et comparez leur proximité avant de prendre une décision.",
  },
}

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

export default function AlertSection() {
  const [activeFeature, setActiveFeature] =
    useState<Feature>("realtime")

  const [analysisState, setAnalysisState] = useState<
    "idle" | "analyzing" | "ready"
  >("ready")

  const [selectedGarage, setSelectedGarage] = useState<number | null>(null)

  const [notificationOpen, setNotificationOpen] = useState(true)

  const startAnalysis = () => {
    setAnalysisState("analyzing")
    setSelectedGarage(null)

    setTimeout(() => {
      setAnalysisState("ready")
      setNotificationOpen(true)
    }, 1800)
  }

  const selectFeature = (feature: Feature) => {
    setActiveFeature(feature)
    setNotificationOpen(true)

    if (feature === "recommendation") {
      setSelectedGarage(0)
    } else {
      setSelectedGarage(null)
    }
  }

  return (
    <section className="border-t border-slate-200/80 bg-white px-5 py-12 sm:py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">

        {/* ========================================================= */}
        {/* LEFT */}
        {/* ========================================================= */}

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            Restez informé
          </p>

          <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Votre copilote
            <span className="block text-amber-500">
              au bon moment.
            </span>
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-slate-500">
            AutoGuide+ analyse les informations de votre trajet pour vous
            transmettre uniquement les alertes et recommandations utiles,
            au moment où elles peuvent vraiment vous aider.
          </p>

          {/* ===================================================== */}
          {/* FEATURES INTERACTIVES */}
          {/* ===================================================== */}

          <div className="mt-9 space-y-3">

            {/* ANALYSE */}
            <FeatureButton
              active={activeFeature === "realtime"}
              onClick={() => selectFeature("realtime")}
              icon={<BellRing className="h-5 w-5" />}
              iconClass="bg-amber-50 text-amber-600"
              title={features.realtime.title}
              description={features.realtime.description}
            />

            {/* SITUATION */}
            <FeatureButton
              active={activeFeature === "situation"}
              onClick={() => selectFeature("situation")}
              icon={<AlertTriangle className="h-5 w-5" />}
              iconClass="bg-red-50 text-red-500"
              title={features.situation.title}
              description={features.situation.description}
            />

            {/* RECOMMANDATION */}
            <FeatureButton
              active={activeFeature === "recommendation"}
              onClick={() => selectFeature("recommendation")}
              icon={<Clock3 className="h-5 w-5" />}
              iconClass="bg-blue-50 text-blue-600"
              title={features.recommendation.title}
              description={features.recommendation.description}
            />

          </div>
        </div>

        {/* ========================================================= */}
        {/* RIGHT — DEMO INTERACTIVE */}
        {/* ========================================================= */}

        <div className="relative rounded-[24px] border border-slate-200/80 bg-[#F8FAFC] p-4 sm:rounded-[30px] sm:p-7">

          <div className="mx-auto max-w-md rounded-3xl border border-slate-100 bg-white p-5 shadow-xl sm:p-6">

            {/* =================================================== */}
            {/* HEADER NOTIFICATION */}
            {/* =================================================== */}

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <motion.div
                  animate={
                    notificationOpen
                      ? {
                          rotate: [0, -8, 8, -5, 5, 0],
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.6,
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50"
                >
                  <Sparkles className="h-5 w-5 text-amber-600" />
                </motion.div>

                <div>
                  <p className="font-bold text-slate-800">
                    AutoGuide+ Copilote
                  </p>

                  <p className="text-xs text-slate-400">
                    {analysisState === "analyzing"
                      ? "Analyse en cours..."
                      : "Maintenant"}
                  </p>
                </div>

              </div>

              <button
                onClick={() =>
                  setNotificationOpen(!notificationOpen)
                }
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 transition hover:bg-slate-100"
                aria-label="Afficher ou masquer la notification"
              >
                <BellRing
                  className={`h-4 w-4 transition ${
                    notificationOpen
                      ? "text-amber-500"
                      : "text-slate-400"
                  }`}
                />
              </button>

            </div>

            {/* =================================================== */}
            {/* CONTENT */}
            {/* =================================================== */}

            <AnimatePresence mode="wait">

              {notificationOpen && (
                <motion.div
                  key={activeFeature + analysisState}
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >

                  {/* ================================================= */}
                  {/* ANALYSE */}
                  {/* ================================================= */}

                  {activeFeature === "realtime" && (
                    <div className="mt-6 rounded-2xl border border-amber-100 bg-amber-50 p-4">

                      <div className="flex gap-3">

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/70">
                          <BellRing className="h-5 w-5 text-amber-600" />
                        </div>

                        <div className="min-w-0">
                          <p className="font-semibold text-amber-900">
                            Analyse de votre trajet
                          </p>

                          <p className="mt-1 text-sm leading-5 text-amber-800/80">
                            AutoGuide+ surveille les informations utiles
                            autour de votre itinéraire.
                          </p>
                        </div>

                      </div>

                      <div className="mt-4 border-t border-amber-200/60 pt-3">

                        <div className="flex items-center justify-between text-xs">
                          <span className="font-medium text-amber-800">
                            Analyse
                          </span>

                          {analysisState === "analyzing" ? (
                            <span className="flex items-center gap-2 font-semibold text-amber-700">
                              <span className="h-2 w-2 animate-pulse rounded-full bg-amber-500" />
                              En cours
                            </span>
                          ) : (
                            <span className="flex items-center gap-1 font-semibold text-green-700">
                              <CheckCircle2 className="h-4 w-4" />
                              Active
                            </span>
                          )}
                        </div>

                      </div>

                    </div>
                  )}

                  {/* ================================================= */}
                  {/* SITUATION */}
                  {/* ================================================= */}

                  {activeFeature === "situation" && (
                    <div className="mt-6 rounded-2xl border border-red-100 bg-red-50 p-4">

                      <div className="flex gap-3">

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/70">
                          <ShieldAlert className="h-5 w-5 text-red-500" />
                        </div>

                        <div>
                          <p className="font-semibold text-red-900">
                            Situation détectée
                          </p>

                          <p className="mt-1 text-sm leading-5 text-red-800/80">
                            Un incident a été signalé sur votre trajet.
                            Votre position est prise en compte.
                          </p>
                        </div>

                      </div>

                      <div className="mt-4 border-t border-red-200/60 pt-3">

                        <div className="flex items-center gap-2 text-xs font-semibold text-red-700">
                          <MapPin className="h-4 w-4" />
                          Position prise en compte
                        </div>

                      </div>

                    </div>
                  )}

                  {/* ================================================= */}
                  {/* RECOMMANDATION */}
                  {/* ================================================= */}

                  {activeFeature === "recommendation" && (
                    <div className="mt-6 rounded-2xl border border-amber-100 bg-amber-50 p-4">

                      <div className="flex gap-3">

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/70">
                          <ShieldAlert className="h-5 w-5 text-amber-600" />
                        </div>

                        <div className="min-w-0">
                          <p className="font-semibold text-amber-900">
                            J'ai trouvé 3 garages adaptés
                          </p>

                          <p className="mt-1 text-sm leading-5 text-amber-800/80">
                            Garage Central est disponible à 2,1 km
                            de votre position.
                          </p>
                        </div>

                      </div>

                      <div className="mt-4 flex items-center gap-2 border-t border-amber-200/60 pt-3 text-xs font-semibold text-green-700">
                        <CheckCircle2 className="h-4 w-4" />
                        Recommandation prête
                      </div>

                    </div>
                  )}

                </motion.div>
              )}

            </AnimatePresence>

            {/* ===================================================== */}
            {/* GARAGE */}
            {/* ===================================================== */}

            {activeFeature === "recommendation" && (
              <motion.button
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                onClick={() => setSelectedGarage(0)}
                className="mt-4 flex w-full items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4 text-left transition hover:border-blue-100 hover:bg-blue-50/40"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white">
                    <MapPin className="h-4 w-4 text-blue-600" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Garage Central
                    </p>

                    <p className="text-xs text-slate-400">
                      2,1 km • Disponible
                    </p>
                  </div>

                </div>

                <ArrowRight className="h-4 w-4 text-slate-400" />

              </motion.button>
            )}

            {/* ===================================================== */}
            {/* ACTION */}
            {/* ===================================================== */}

            <button
              onClick={startAnalysis}
              disabled={analysisState === "analyzing"}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <RotateCcw
                className={`h-4 w-4 ${
                  analysisState === "analyzing"
                    ? "animate-spin"
                    : ""
                }`}
              />

              {analysisState === "analyzing"
                ? "Analyse en cours..."
                : "Simuler une nouvelle analyse"}
            </button>

          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* GARAGE MODAL */}
      {/* ========================================================= */}

      <AnimatePresence>
        {selectedGarage !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/20 px-5 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedGarage(null)}
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 15,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 15,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl"
            >

              <div className="flex items-start justify-between">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                    Garage recommandé
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-slate-900">
                    {garages[selectedGarage].name}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedGarage(null)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 transition hover:bg-slate-100"
                >
                  <X className="h-4 w-4 text-slate-500" />
                </button>

              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">

                <div className="rounded-2xl bg-slate-50 p-4">
                  <MapPin className="h-5 w-5 text-blue-600" />

                  <p className="mt-2 text-xs text-slate-400">
                    Distance
                  </p>

                  <p className="font-semibold text-slate-800">
                    {garages[selectedGarage].distance}
                  </p>
                </div>

                <div className="rounded-2xl bg-green-50 p-4">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />

                  <p className="mt-2 text-xs text-green-600/70">
                    Statut
                  </p>

                  <p className="font-semibold text-green-700">
                    {garages[selectedGarage].status}
                  </p>
                </div>

              </div>

              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-slate-100 p-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <Phone className="h-4 w-4 text-blue-600" />
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Contact
                  </p>

                  <p className="text-sm font-semibold text-slate-800">
                    {garages[selectedGarage].phone}
                  </p>
                </div>

              </div>

              <button
                onClick={() => setSelectedGarage(null)}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                <Navigation className="h-4 w-4" />
                Voir l'itinéraire
              </button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

/* =============================================================== */
/* FEATURE BUTTON */
/* =============================================================== */

function FeatureButton({
  active,
  onClick,
  icon,
  iconClass,
  title,
  description,
}: {
  active: boolean
  onClick: () => void
  icon: React.ReactNode
  iconClass: string
  title: string
  description: string
}) {
  return (
    <motion.button
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      className={`w-full rounded-2xl p-3 text-left transition ${
        active
          ? "bg-slate-50"
          : "bg-transparent hover:bg-slate-50/70"
      }`}
    >
      <div className="flex gap-4">

        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconClass}`}
        >
          {icon}
        </div>

        <div className="min-w-0">
          <h3 className="font-semibold text-slate-900">
            {title}
          </h3>

          <p className="mt-1 max-w-md text-sm leading-6 text-slate-500">
            {description}
          </p>

          {active && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 32 }}
              className="mt-3 h-0.5 rounded-full bg-amber-500"
            />
          )}
        </div>

      </div>
    </motion.button>
  )
}