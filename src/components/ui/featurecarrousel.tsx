import { motion } from "motion/react"
import { useEffect, useState } from "react"
import {
  AlertTriangle,
  ArrowRight,
  BellRing,
  CarFront,
  Check,
  Clock3,
  MapPin,
  Navigation,
  Route,
  ShieldCheck,
  Wrench,
} from "lucide-react"

const reveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.45 },
}

/* =========================================================
   APERÇU ITINÉRAIRE
========================================================= */

function MapPreview() {
  return (
    <div className="relative h-64 overflow-hidden rounded-2xl border border-slate-200 bg-[#eef5f8] sm:h-72">

      {/* Fond de carte */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            linear-gradient(
              35deg,
              transparent 47%,
              #c8dce6 48%,
              #c8dce6 50%,
              transparent 51%
            ),
            linear-gradient(
              145deg,
              transparent 47%,
              #d7e5eb 48%,
              #d7e5eb 50%,
              transparent 51%
            ),
            linear-gradient(#dce9ee 1px, transparent 1px),
            linear-gradient(90deg, #dce9ee 1px, transparent 1px)
          `,
          backgroundSize:
            "150px 100px, 180px 120px, 34px 34px, 34px 34px",
        }}
      />

      {/* Routes secondaires */}
      <div className="absolute left-[10%] top-[62%] h-[2px] w-[80%] rotate-[-12deg] bg-slate-300/80" />

      <div className="absolute left-[20%] top-[30%] h-[2px] w-[70%] rotate-[24deg] bg-slate-300/70" />

      <div className="absolute left-[45%] top-[15%] h-[2px] w-[55%] rotate-[75deg] bg-slate-300/60" />

      {/* Itinéraire alternatif */}
      <div className="absolute left-[16%] top-[57%] h-[3px] w-[65%] rotate-[-17deg] rounded-full border-t-2 border-dashed border-slate-400/70" />

      {/* Meilleur itinéraire */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute left-[18%] top-[55%] h-[6px] w-[64%] origin-left rotate-[-18deg] rounded-full bg-[#1468A8]"
      />

      {/* Position actuelle */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
        className="absolute left-[26%] top-[59%] flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-[#1468A8] text-white shadow-lg"
      >
        <CarFront className="h-4 w-4" />
      </motion.div>

      {/* Destination */}
      <motion.div
        animate={{
          y: [0, -3, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute right-[17%] top-[27%] flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-red-500 text-white shadow-lg"
      >
        <MapPin className="h-4 w-4" />
      </motion.div>

      {/* Info trajet */}
      <div className="absolute bottom-4 left-4 rounded-xl border border-white bg-white/95 px-4 py-3 shadow-sm">
        <p className="text-[10px] text-slate-400">
          Itinéraire recommandé
        </p>

        <div className="mt-1 flex items-center gap-3">
          <p className="text-sm font-bold text-slate-800">
            18 min
          </p>

          <span className="h-3 w-px bg-slate-200" />

          <p className="text-xs text-slate-500">
            5,2 km
          </p>
        </div>
      </div>

      {/* Indicateur circulation */}
      <div className="absolute right-4 top-4 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-sm">
        <Clock3 className="h-3.5 w-3.5 text-green-600" />

        <span className="text-[10px] font-semibold text-slate-600">
          Trajet fluide
        </span>
      </div>
    </div>
  )
}

/* =========================================================
   LOCALISATION
========================================================= */

function LocationPreview() {
  const garages = [
    ["18%", "24%"],
    ["75%", "28%"],
    ["78%", "72%"],
    ["20%", "70%"],
  ]

  return (
    <div className="relative h-60 overflow-hidden rounded-2xl border border-slate-200 bg-[#eef6f9]">

      {/* Routes */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            linear-gradient(
              35deg,
              transparent 47%,
              #c6dce6 48%,
              #c6dce6 50%,
              transparent 51%
            ),
            linear-gradient(
              145deg,
              transparent 47%,
              #d5e6ed 48%,
              #d5e6ed 50%,
              transparent 51%
            )
          `,
          backgroundSize: "110px 85px, 135px 95px",
        }}
      />

      {/* Zone de recherche */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1468A8]/20 bg-[#1468A8]/5"
      />

      {/* Position */}
      <motion.div
        animate={{
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-[#1468A8] text-white shadow-lg"
      >
        <Navigation className="h-4 w-4" />
      </motion.div>

      {/* Garages */}
      {garages.map(([left, top], index) => (
        <motion.span
          key={`${left}-${top}`}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: index * 0.08,
          }}
          animate={{
            y: [0, -2, 0],
          }}
          className="absolute flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-amber-400 shadow"
          style={{
            left,
            top,
          }}
        >
          <Wrench className="h-3 w-3 text-white" />
        </motion.span>
      ))}

      {/* Résultat */}
      <div className="absolute bottom-3 left-3 rounded-xl bg-white px-3 py-2 shadow-sm">
        <p className="text-[10px] font-bold text-slate-700">
          4 garages trouvés
        </p>

        <p className="mt-0.5 text-[9px] text-slate-400">
          Dans un rayon proche de vous
        </p>
      </div>
    </div>
  )
}

/* =========================================================
   LISTE GARAGES
========================================================= */

function GaragePreview() {
  const garages = [
    {
      name: "Garage Express",
      distance: "1,2 km",
      rating: "4,8",
      available: true,
    },
    {
      name: "Auto Service",
      distance: "2,1 km",
      rating: "4,6",
      available: true,
    },
    {
      name: "Meca Plus",
      distance: "3,4 km",
      rating: "4,5",
      available: false,
    },
  ]

  return (
    <div className="space-y-2">
      {garages.map((garage, index) => (
        <motion.div
          whileHover={{
            x: 3,
          }}
          key={garage.name}
          className="flex items-center justify-between rounded-xl border border-slate-100 bg-white p-3"
        >
          <div className="flex items-center gap-3">

            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
              <Wrench className="h-4 w-4" />
            </span>

            <div>
              <div className="flex items-center gap-2">

                <p className="text-xs font-bold text-slate-700">
                  {garage.name}
                </p>

                {index === 0 && (
                  <span className="rounded-md bg-blue-50 px-1.5 py-0.5 text-[8px] font-bold text-[#1468A8]">
                    Meilleur choix
                  </span>
                )}
              </div>

              <p className="mt-1 text-[10px] text-slate-400">
                {garage.distance} · ⭐ {garage.rating}
              </p>
            </div>
          </div>

          <div className="text-right">

            <p
              className={`text-[9px] font-semibold ${
                garage.available
                  ? "text-green-600"
                  : "text-slate-400"
              }`}
            >
              {garage.available
                ? "Disponible"
                : "Indisponible"}
            </p>

            <button className="mt-1 text-[9px] font-semibold text-[#1468A8]">
              Voir
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

/* =========================================================
   PROCESSUS PANNE
========================================================= */

function BreakdownProcess() {
  const steps = [
    {
      icon: AlertTriangle,
      title: "Panne",
    },
    {
      icon: MapPin,
      title: "Position",
    },
    {
      icon: Wrench,
      title: "Garages",
    },
    {
      icon: Check,
      title: "Choix",
    },
  ]

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

      <div className="grid grid-cols-4 gap-2">

        {steps.map((step, index) => {
          const Icon = step.icon

          return (
            <motion.div
              key={step.title}
              initial={{
                opacity: 0,
                y: 8,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
              className="relative flex flex-col items-center text-center"
            >

              {index < 3 && (
                <div className="absolute left-[60%] top-5 h-px w-[80%] bg-slate-300" />
              )}

              <div
                className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-xl ${
                  index === 0
                    ? "bg-amber-100 text-amber-600"
                    : index === 1
                    ? "bg-blue-100 text-[#1468A8]"
                    : index === 2
                    ? "bg-slate-200 text-slate-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                <Icon className="h-4 w-4" />
              </div>

              <p className="mt-2 text-[10px] font-semibold text-slate-600">
                {step.title}
              </p>
            </motion.div>
          )
        })}
      </div>

      <div className="mt-5 rounded-xl border border-white bg-white p-3">

        <div className="flex items-center gap-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-600">
            <Check className="h-4 w-4" />
          </div>

          <div>
            <p className="text-xs font-bold text-slate-700">
              Garage Express recommandé
            </p>

            <p className="mt-0.5 text-[10px] text-slate-400">
              1,2 km · Disponible · Ouvert maintenant
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* =========================================================
   CARROUSEL PRINCIPAL
========================================================= */

function FeatureCarousel() {
  const [current, setCurrent] = useState(0)

  const cards = [
    {
      number: "01",
      label: "Itinéraire",
      title: "Trouvez le meilleur chemin",
      description:
        "Indiquez votre destination et obtenez un itinéraire adapté à votre déplacement, avec une estimation de la distance et du temps de trajet.",
      icon: Route,
      content: <MapPreview />,
    },
    {
      number: "02",
      label: "Localisation",
      title: "Sachez où vous êtes",
      description:
        "Votre position permet au système de rechercher les services automobiles disponibles autour de vous.",
      icon: Navigation,
      content: <LocationPreview />,
    },
    {
      number: "03",
      label: "Garages",
      title: "Comparez les garages",
      description:
        "Consultez les garages disponibles et comparez les informations importantes avant de faire votre choix.",
      icon: Wrench,
      content: (
        <div className="rounded-2xl bg-slate-50 p-3">
          <GaragePreview />
        </div>
      ),
    },
    {
      number: "04",
      label: "En cas de panne",
      title: "Un garage adapté à votre situation",
      description:
        "En cas de panne, AutoGuide+ utilise votre position et les informations disponibles pour vous aider à identifier l'option la plus adaptée.",
      icon: AlertTriangle,
      content: <BreakdownProcess />,
    },
  ]

  /* ---------------------------------------------------------
     DÉFILEMENT AUTOMATIQUE
  --------------------------------------------------------- */

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((previous) => {
        return (previous + 1) % cards.length
      })
    }, 5000)

    return () => clearInterval(timer)
  }, [cards.length])

  /* ---------------------------------------------------------
     SUIVANT
  --------------------------------------------------------- */

  const next = () => {
    setCurrent((previous) => {
      return (previous + 1) % cards.length
    })
  }

  /* ---------------------------------------------------------
     PRÉCÉDENT
  --------------------------------------------------------- */

  const previous = () => {
    setCurrent((previous) => {
      return (previous - 1 + cards.length) % cards.length
    })
  }

  return (
    <div className="relative mt-12">

      {/* =====================================================
          CARROUSEL
      ===================================================== */}

      <div className="overflow-hidden">

        <motion.div
          className="flex"
          animate={{
            x: `-${current * 100}%`,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {cards.map((card) => {
            const Icon = card.icon

            return (
              <div
                key={card.number}
                className="w-full shrink-0 px-1"
              >

                <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm lg:p-7">

                  <div className="grid items-center gap-8 lg:grid-cols-[0.75fr_1.25fr]">

                    {/* ------------------------------------------------
                        CONTENU TEXTE
                    ------------------------------------------------ */}

                    <div className="max-w-md">

                      <span className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-xs font-semibold text-[#1468A8]">

                        <Icon className="h-4 w-4" />

                        {card.number} · {card.label}

                      </span>

                      <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        {card.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-500">
                        {card.description}
                      </p>

                      {/* Petit avantage */}
                      <div className="mt-6 flex items-center gap-3">

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1468A8]">
                          <Check className="h-4 w-4" />
                        </div>

                        <p className="text-xs font-semibold text-slate-600">
                          Une expérience simple et intelligente
                        </p>

                      </div>

                    </div>

                    {/* ------------------------------------------------
                        APERÇU
                    ------------------------------------------------ */}

                    <motion.div
                      key={card.number}
                      initial={{
                        opacity: 0,
                        x: 25,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.45,
                        delay: 0.1,
                      }}
                    >
                      {card.content}
                    </motion.div>

                  </div>

                </article>

              </div>
            )
          })}

        </motion.div>
      </div>

      {/* =====================================================
          CONTRÔLES
      ===================================================== */}

      <div className="mt-6 flex items-center justify-between">

        {/* INDICATEURS */}

        <div className="flex items-center gap-2">

          {cards.map((card, index) => (
            <button
              key={card.number}
              onClick={() => setCurrent(index)}
              aria-label={`Afficher ${card.label}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-8 bg-[#1468A8]"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}

        </div>

        {/* BOUTONS */}

        <div className="flex items-center gap-2">

          <button
            onClick={previous}
            aria-label="Carte précédente"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all duration-200 hover:border-[#1468A8] hover:text-[#1468A8]"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
          </button>

          <button
            onClick={next}
            aria-label="Carte suivante"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1468A8] text-white transition-all duration-200 hover:bg-[#10588f] hover:shadow-md"
          >
            <ArrowRight className="h-4 w-4" />
          </button>

        </div>

      </div>

      {/* =====================================================
          COMPTEUR
      ===================================================== */}

      <div className="mt-3 text-center text-[10px] font-semibold tracking-widest text-slate-400">
        {String(current + 1).padStart(2, "0")} /{" "}
        {String(cards.length).padStart(2, "0")}
      </div>

    </div>
  )
}

/* =========================================================
   FEATURES SECTION
========================================================= */

export default function FeaturesSection() {
  return (
    <section className="border-t border-slate-200/80 bg-[#F7FBFF] px-5 py-16 sm:py-20 lg:px-8">

      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            INTRODUCTION
        ===================================================== */}

        <motion.div
          {...reveal}
          className="mx-auto max-w-2xl text-center"
        >

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1468A8]">
            Comment ça fonctionne
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-slate-900 sm:text-4xl">
            Votre trajet, de la route au garage
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500">
            AutoGuide+ vous accompagne à chaque étape : trouver votre
            itinéraire, vous localiser et vous aider à trouver un garage
            adapté lorsque vous en avez besoin.
          </p>

        </motion.div>

        {/* =====================================================
            CARROUSEL
        ===================================================== */}

        <FeatureCarousel />

        {/* =====================================================
            CONFIANCE
        ===================================================== */}

        <div className="mt-8 grid gap-5 md:grid-cols-2">

          {/* -----------------------------------------------------
              INFORMATIONS
          ----------------------------------------------------- */}

          <motion.div
            {...reveal}
            transition={{
              duration: 0.45,
              delay: 0.2,
            }}
            className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
          >

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
              <ShieldCheck className="h-5 w-5" />
            </div>

            <div>

              <p className="text-sm font-bold text-slate-800">
                Des informations utiles
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Distance, disponibilité et informations sur les garages.
              </p>

            </div>

          </motion.div>

          {/* -----------------------------------------------------
              NOTIFICATIONS
          ----------------------------------------------------- */}

          <motion.div
            {...reveal}
            transition={{
              duration: 0.45,
              delay: 0.24,
            }}
            className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
          >

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1468A8]">
              <BellRing className="h-5 w-5" />
            </div>

            <div>

              <p className="text-sm font-bold text-slate-800">
                Restez informé
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Recevez les informations importantes pendant votre trajet.
              </p>

            </div>

            <ArrowRight className="ml-auto hidden h-4 w-4 text-slate-300 sm:block" />

          </motion.div>

        </div>

      </div>

    </section>
  )
}