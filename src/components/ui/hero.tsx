
import { Link } from "react-router-dom"
import { motion } from "motion/react"
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MapPinned,
  Navigation,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react"

import Car3D from "@/components/ui/Car3D"
import LandingMap from "./LandingMaps"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F7FBFF] text-slate-900">

      {/* ===================================================== */}
      {/*                       BACKGROUND                       */}
      {/* ===================================================== */}

      <div className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-blue-100/50 blur-[110px]" />

      <div className="pointer-events-none absolute -bottom-48 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-100/50 blur-[110px]" />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(#1468A8_1px,transparent_1px),linear-gradient(90deg,#1468A8_1px,transparent_1px)]
          [background-size:64px_64px]
        "
      />

      {/* ===================================================== */}
      {/*                    HERO CONTAINER                     */}
      {/* ===================================================== */}

      <div
        className="
          relative
          mx-3
          my-3
          overflow-hidden
          rounded-[28px]
          border
          border-blue-100/80
          bg-white
          shadow-[0_25px_80px_rgba(20,104,168,0.14)]
          sm:mx-5
          sm:my-5
          sm:rounded-[34px]
          lg:mx-auto
          lg:max-w-[1440px]
        "
      >

        {/* ================================================= */}
        {/*                  MAIN GRID                        */}
        {/* ================================================= */}

        <div
          className="
            relative
            grid
            items-center
            gap-8
            px-5
            py-10
            sm:px-8
            sm:py-14
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-4
            lg:px-12
            lg:py-16
            xl:px-16
            xl:py-20
          "
        >

          {/* ================================================= */}
          {/*                     LEFT SIDE                     */}
          {/* ================================================= */}

          <div className="relative z-30 max-w-xl">

            {/* Badge */}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-blue-100
                bg-blue-50
                px-3
                py-1.5
                text-xs
                font-semibold
                text-[#1468A8]
              "
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2B8FD4] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1468A8]" />
              </span>

              Intelligence routière pour le Cameroun
            </motion.div>


            {/* ================================================= */}
            {/*                      TITLE                        */}
            {/* ================================================= */}

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="
                text-[clamp(2.7rem,6vw,5rem)]
                font-bold
                leading-[0.94]
                tracking-[-0.055em]
                text-slate-950
              "
            >
              Votre route.

              <span className="mt-2 block text-[#1468A8]">
                Notre intelligence.
              </span>
            </motion.h1>


            {/* ================================================= */}
            {/*                    DESCRIPTION                    */}
            {/* ================================================= */}

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="
                mt-6
                max-w-lg
                text-[15px]
                leading-7
                text-slate-600
                sm:text-base
                sm:leading-7
              "
            >
              AutoGuide+ analyse votre trajet, les conditions de la route et
              les solutions disponibles autour de vous pour vous aider à
              atteindre votre destination en toute sérénité.
            </motion.p>


            {/* ================================================= */}
            {/*                       ACTIONS                    */}
            {/* ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="mt-7 flex flex-col gap-3 sm:flex-row"
            >

              {/* ================================================= */}
              {/*                 BOUTON ITINÉRAIRE                */}
              {/* ================================================= */}

              <Link
                to="/login"
                aria-label="Calculer un itinéraire avec AutoGuide+"
                className="
                  group
                  relative
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2.5
                  overflow-hidden
                  rounded-xl
                  bg-[#1468A8]
                  px-5
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-blue-900/15
                  outline-none
                  transition-all
                  duration-200
                  ease-out

                  hover:-translate-y-1
                  hover:bg-[#105B94]
                  hover:shadow-xl
                  hover:shadow-blue-900/20

                  active:translate-y-0
                  active:scale-[0.97]
                  active:shadow-md

                  focus-visible:ring-2
                  focus-visible:ring-[#1468A8]
                  focus-visible:ring-offset-2

                  sm:w-auto
                "
              >

                {/* Effet lumineux au hover */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/15
                    to-transparent
                    transition-transform
                    duration-700
                    group-hover:translate-x-full
                  "
                />

                <MapPinned
                  className="
                    relative
                    z-10
                    h-4
                    w-4
                    transition-transform
                    duration-200
                    group-hover:scale-110
                  "
                />

                <span className="relative z-10">
                  Calculer un itinéraire
                </span>

                <ArrowRight
                  className="
                    relative
                    z-10
                    h-4
                    w-4
                    transition-transform
                    duration-200
                    group-hover:translate-x-1
                  "
                />

              </Link>


              {/* ================================================= */}
              {/*                    BOUTON PANNE                  */}
              {/* ================================================= */}

              <Link
                to="/login"
                aria-label="Signaler une panne avec AutoGuide+"
                className="
                  group
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-5
                  py-3.5
                  text-sm
                  font-semibold
                  text-slate-700
                  outline-none
                  transition-all
                  duration-200
                  ease-out

                  hover:-translate-y-1
                  hover:border-[#1468A8]/25
                  hover:bg-blue-50
                  hover:text-[#1468A8]
                  hover:shadow-lg
                  hover:shadow-blue-900/10

                  active:translate-y-0
                  active:scale-[0.97]
                  active:bg-blue-100

                  focus-visible:ring-2
                  focus-visible:ring-[#1468A8]
                  focus-visible:ring-offset-2

                  sm:w-auto
                "
              >

                <Wrench
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-200
                    group-hover:rotate-[-8deg]
                    group-hover:scale-110
                  "
                />

                Je suis en panne

                <ArrowRight
                  className="
                    h-4
                    w-4
                    -translate-x-1
                    opacity-0
                    transition-all
                    duration-200
                    group-hover:translate-x-0
                    group-hover:opacity-100
                  "
                />

              </Link>

            </motion.div>


            {/* ================================================= */}
            {/*                    TRUST ROW                     */}
            {/* ================================================= */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="
                mt-7
                flex
                flex-wrap
                items-center
                gap-x-5
                gap-y-2
                text-xs
                text-slate-500
              "
            >

              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                Itinéraires optimisés
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />

              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-[#1468A8]" />
                Assistance routière
              </span>

            </motion.div>

          </div>


          {/* ================================================= */}
          {/*                    RIGHT SIDE                     */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="
              relative
              min-h-[360px]
              sm:min-h-[450px]
              lg:min-h-[570px]
            "
          >

            {/* ================================================= */}
            {/*                  CENTRAL HALO                    */}
            {/* ================================================= */}

            <motion.div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[380px]
                w-[380px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-blue-100/70
                blur-[90px]
                sm:h-[500px]
                sm:w-[500px]
              "
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.5, 0.75, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />


            {/* ================================================= */}
            {/*                    MAP AREA                      */}
            {/* ================================================= */}

            <motion.div
              className="
                relative
                z-10
                flex
                h-[360px]
                w-full
                items-center
                justify-center
                sm:h-[450px]
                lg:h-[570px]
              "
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <LandingMap />
            </motion.div>


            {/* ================================================= */}
            {/*                 GPS PULSE                        */}
            {/* ================================================= */}

            <motion.div
              className="
                pointer-events-none
                absolute
                left-[18%]
                top-[24%]
                z-20
                h-20
                w-20
                rounded-full
                bg-cyan-400/25
                blur-3xl
              "
              animate={{
                x: [0, 220, 80, 0],
                y: [0, 60, 150, 0],
                opacity: [0, 0.8, 0.35, 0],
                scale: [0.5, 1, 0.8, 0.5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />


            {/* ================================================= */}
            {/*             FLOATING ROUTE CARD                 */}
            {/* ================================================= */}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="
                absolute
                left-2
                top-5
                z-30
                w-[190px]
                rounded-2xl
                border
                border-white
                bg-white/95
                p-3
                shadow-[0_18px_45px_rgba(15,23,42,0.12)]
                backdrop-blur-xl
                sm:left-4
                sm:top-8
                sm:w-[210px]
                sm:p-4
              "
            >

              <div className="flex items-center gap-2">

                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-50
                    text-[#1468A8]
                  "
                >
                  <Navigation className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                    Navigation
                  </p>

                  <p className="text-sm font-semibold text-slate-800">
                    Itinéraire optimal
                  </p>
                </div>

              </div>

              <div className="mt-3 flex items-center gap-2">

                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">

                  <motion.div
                    className="h-full rounded-full bg-[#1468A8]"
                    initial={{ width: "0%" }}
                    animate={{ width: "78%" }}
                    transition={{
                      duration: 1.4,
                      delay: 1,
                    }}
                  />

                </div>

                <span className="text-[10px] font-semibold text-[#1468A8]">
                  78%
                </span>

              </div>

            </motion.div>


            {/* ================================================= */}
            {/*                SMART ANALYSIS CARD               */}
            {/* ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="
                absolute
                right-1
                top-[17%]
                z-30
                hidden
                w-[205px]
                rounded-2xl
                border
                border-white
                bg-slate-950
                p-3
                text-white
                shadow-[0_20px_50px_rgba(15,23,42,0.2)]
                sm:block
              "
            >

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-2">

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                    <Sparkles className="h-4 w-4 text-cyan-300" />
                  </div>

                  <div>
                    <p className="text-[10px] text-white/50">
                      AutoGuide+
                    </p>

                    <p className="text-xs font-semibold">
                      Analyse terminée
                    </p>
                  </div>

                </div>

                <span className="h-2 w-2 rounded-full bg-emerald-400" />

              </div>

              <div className="mt-3 rounded-xl bg-white/5 px-3 py-2.5">

                <p className="text-[10px] text-white/45">
                  État du trajet
                </p>

                <div className="mt-1 flex items-center justify-between">

                  <p className="text-xs font-medium">
                    Conditions favorables
                  </p>

                  <span className="text-[10px] font-semibold text-emerald-300">
                    Bon
                  </span>

                </div>

              </div>

            </motion.div>


            {/* ================================================= */}
            {/*                 ROUTE INFO CARD                  */}
            {/* ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.9,
              }}
              className="
                absolute
                bottom-3
                left-3
                right-3
                z-40
                rounded-2xl
                border
                border-slate-100
                bg-white
                p-3
                shadow-[0_18px_45px_rgba(15,23,42,0.13)]
                sm:bottom-5
                sm:left-5
                sm:right-5
                sm:p-4
              "
            >

              <div className="flex items-center justify-between gap-4">

                <div className="min-w-0">

                  <p className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wide text-slate-400">
                    <Clock3 className="h-3.5 w-3.5" />
                    Route optimale
                  </p>

                  <div className="mt-1.5 flex items-center gap-2">

                    <span className="truncate text-sm font-semibold text-slate-800 sm:text-base">
                      Yaoundé
                    </span>

                    <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-300" />

                    <span className="truncate text-sm font-semibold text-slate-800 sm:text-base">
                      Bastos
                    </span>

                  </div>

                </div>

                <div className="hidden h-9 w-px bg-slate-100 sm:block" />

                <div className="hidden text-center sm:block">

                  <p className="text-[10px] uppercase tracking-wide text-slate-400">
                    Distance
                  </p>

                  <p className="mt-1 font-bold text-slate-800">
                    7,4 km
                  </p>

                </div>

                <div
                  className="
                    shrink-0
                    rounded-xl
                    bg-emerald-50
                    px-3
                    py-2
                    text-center
                  "
                >

                  <p className="text-[10px] font-medium text-emerald-600">
                    Temps estimé
                  </p>

                  <p className="mt-0.5 font-bold text-emerald-700">
                    18 min
                  </p>

                </div>

              </div>

            </motion.div>


            {/* ================================================= */}
            {/*                       CAR 3D                    */}
            {/* ================================================= */}

            <motion.div
              className="
                pointer-events-none
                absolute
                -bottom-1
                right-[-5px]
                z-50
                sm:right-2
                lg:right-0
              "
              animate={{
                y: [0, -5, 0],
                rotate: [0, -1, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Car3D />
            </motion.div>


            {/* ================================================= */}
            {/*                 SECURITY BADGE                  */}
            {/* ================================================= */}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.45,
                delay: 1,
              }}
              className="
                absolute
                bottom-[115px]
                left-1
                z-40
                hidden
                items-center
                gap-2
                rounded-full
                border
                border-white
                bg-white/95
                px-3
                py-2
                text-xs
                font-semibold
                text-slate-700
                shadow-lg
                backdrop-blur-xl
                sm:flex
                lg:bottom-[135px]
                lg:left-4
              "
            >

              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              </div>

              Trajet sécurisé

            </motion.div>

          </motion.div>

        </div>


        {/* ================================================= */}
        {/*                BOTTOM FEATURE BAR                */}
        {/* ================================================= */}

        <div
          className="
            relative
            border-t
            border-slate-100
            bg-slate-50/70
            px-5
            py-4
            sm:px-8
            lg:px-12
          "
        >

          <div
            className="
              mx-auto
              flex
              max-w-6xl
              flex-wrap
              items-center
              justify-center
              gap-x-8
              gap-y-3
              text-xs
              text-slate-500
              sm:justify-between
            "
          >

            <span className="inline-flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white shadow-sm">
                <MapPinned className="h-3.5 w-3.5 text-[#1468A8]" />
              </span>

              Calcul d'itinéraire
            </span>

            <span className="inline-flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white shadow-sm">
                <Navigation className="h-3.5 w-3.5 text-[#1468A8]" />
              </span>

              Géolocalisation
            </span>

            <span className="inline-flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white shadow-sm">
                <Wrench className="h-3.5 w-3.5 text-[#1468A8]" />
              </span>

              Assistance en cas de panne
            </span>

            <span className="inline-flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white shadow-sm">
                <ShieldCheck className="h-3.5 w-3.5 text-[#1468A8]" />
              </span>

              Pensé pour les routes locales
            </span>

          </div>

        </div>

      </div>
    </section>
  )
}

