
import { Link } from "react-router-dom"
import { motion } from "motion/react"
import {
  MapPinned,
  CarFront,
  Wrench,
  ArrowRight,
  ShieldCheck,
  Clock3,
  Activity,
} from "lucide-react"

import LandingMap from "@/components/ui/LandingMaps"
import Car3D from "@/components/ui/Car3D"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7fbff]">
      {/* DÉCORATIONS */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-sky-100/40 blur-3xl" />

      {/* CONTENU PRINCIPAL */}
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 py-10 sm:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-8 lg:py-16">
        
        {/* ========================= */}
        {/*        PARTIE TEXTE        */}
        {/* ========================= */}
        <div className="max-w-xl">
          {/* Badge */}
          <motion.div
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-700 shadow-sm"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <ShieldCheck className="h-4 w-4" />
            Pensé pour les routes de Yaoundé
          </motion.div>

          {/* Titre */}
          <motion.h1
            className="max-w-2xl text-[clamp(2.5rem,6vw,4.8rem)] font-bold leading-[0.98] tracking-[-0.045em] text-slate-950"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Votre route.

            <span className="mt-2 block text-[#1468A8]">
              Notre intelligence.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
            AutoGuide+ analyse votre trajet, votre environnement et les
            garages disponibles pour vous proposer la meilleure solution sur
            la route.
          </motion.p>

          {/* BOUTONS */}
          <motion.div
            className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3 }}
          >
            <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/login"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#1468A8]
                px-5
                py-3.5
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-blue-600/20
                transition
                hover:-translate-y-0.5
                hover:bg-blue-700
              "
            >
              <MapPinned className="h-4 w-4" />
              Calculer un itinéraire
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/login"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#F59E0B]
                px-5
                py-3.5
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-amber-500/20
                transition
                hover:-translate-y-0.5
                hover:bg-amber-600
              "
            >
              <Wrench className="h-4 w-4" />
              Je suis en panne
            </Link>
            </motion.div>

          </motion.div>

          {/* PETITES INFORMATIONS */}
          <div className="mt-6 grid max-w-lg grid-cols-1 gap-2 text-sm text-slate-600 sm:grid-cols-3">
            <div className="flex items-center gap-2 rounded-lg bg-white/70 px-2 py-1.5">
              <MapPinned className="h-4 w-4 text-blue-600" />
              Itinéraire optimisé
            </div>

            <div className="flex items-center gap-2 rounded-lg bg-white/70 px-2 py-1.5">
              <Wrench className="h-4 w-4 text-amber-500" />
              Garages à proximité
            </div>

            <div className="flex items-center gap-2 rounded-lg bg-white/70 px-2 py-1.5">
              <CarFront className="h-4 w-4 text-green-600" />
              Assistance routière
            </div>
          </div>
        </div>

        {/* ========================= */}
        {/*        PARTIE CARTE        */}
        {/* ========================= */}
        <motion.div
          className="relative lg:pt-4"
          initial={{ opacity: 0, x: 24, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.15 }}
        >
          
          {/* Halo derrière la carte */}
          <div className="absolute -inset-4 rounded-[35px] bg-blue-100/40 blur-2xl" />

          {/* CONTENEUR CARTE */}
          <div className="relative overflow-hidden rounded-[24px] border border-blue-100 bg-[#E6F1FB] p-2.5 shadow-[0_24px_70px_rgba(20,104,168,0.16)] sm:rounded-[30px] sm:p-3">
            
            {/* CARTE */}
            <motion.div
              className="relative h-[320px] overflow-hidden rounded-[19px] sm:h-[420px] sm:rounded-[24px]"
              initial={{ scale: 1.035 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              <LandingMap />

              {/* INDICATEUR TRAFIC */}
              <motion.div
                className="pointer-events-none absolute right-4 top-4 z-[1000] flex items-center gap-2 rounded-xl border border-white/80 bg-white/95 px-3 py-2 text-xs font-semibold text-green-700 shadow-md sm:right-5 sm:top-5"
                animate={{ opacity: [1, 0.72, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Activity className="h-4 w-4" />
                Trafic faible
              </motion.div>
            </motion.div>

            {/* CARD ITINÉRAIRE */}
            <motion.div
              className="absolute bottom-3 left-3 right-3 z-[1000] rounded-2xl border border-white/70 bg-white/95 p-3 shadow-xl backdrop-blur sm:bottom-5 sm:left-5 sm:right-5 sm:p-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.55 }}
            >
              <div className="flex items-center justify-between gap-4">
                
                {/* Informations trajet */}
                <div>
                  <p className="flex items-center gap-1 text-xs font-medium text-slate-400">
                    <Clock3 className="h-3.5 w-3.5" />
                    Route optimale
                  </p>

                  <p className="mt-1 font-semibold text-slate-800">
                    Yaoundé → Bastos
                  </p>
                </div>

                {/* Temps */}
                <div className="shrink-0 rounded-xl bg-green-50 px-3 py-2 text-center">
                  <p className="text-xs text-green-600">
                    Temps estimé
                  </p>

                  <p className="font-bold text-green-700">
                    18 min
                  </p>
                </div>

              </div>
            </motion.div>
            <div className="absolute -bottom-8 right-2 z-[1001] hidden sm:block lg:right-8">
              <Car3D />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
