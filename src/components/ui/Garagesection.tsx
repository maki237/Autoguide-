import { motion } from "motion/react"
import {
  ArrowRight,
  Check,
  Clock3,
  MapPin,
  Navigation,
  Phone,
  ShieldCheck,
  Star,
  Wrench,
} from "lucide-react"

const garages = [
  {
    id: 1,
    name: "Garage Central",
    distance: "2,1 km",
    rating: "4,8",
    available: true,
    position: "left-[18%] top-[24%]",
  },
  {
    id: 2,
    name: "Auto Service",
    distance: "2,8 km",
    rating: "4,6",
    available: true,
    position: "right-[18%] top-[31%]",
  },
  {
    id: 3,
    name: "Meca Plus",
    distance: "3,6 km",
    rating: "4,5",
    available: false,
    position: "left-[29%] bottom-[25%]",
  },
]

export default function GarageSection() {
  return (
    <section className="relative overflow-hidden border-t border-slate-200 bg-[#EDF7FB] px-5 py-16 sm:py-20 lg:px-8">
      {/* Décor arrière-plan */}
      <div className="pointer-events-none absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-[#D5ECF7]" />
      <div className="pointer-events-none absolute right-[-100px] bottom-0 h-80 w-80 rounded-full bg-[#E5F3DE]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* =====================================================
            VISUEL INTERACTIF
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Petit badge flottant */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute left-3 top-3 z-30 flex items-center gap-2 rounded-full border border-white bg-white/95 px-3 py-2 text-xs font-bold text-[#1468A8] shadow-lg backdrop-blur"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>

            Recherche en cours
          </motion.div>

          {/* Carte principale */}
          <div className="rounded-[32px] border border-[#C6DFEC] bg-[#DDEFF8] p-2.5 shadow-[0_25px_70px_rgba(20,104,168,0.14)] sm:p-4">
            <div className="relative h-[390px] overflow-hidden rounded-[25px] border border-white/70 bg-[#D4EAF4] sm:h-[460px]">
              {/* =================================================
                  ROUTES
              ================================================== */}

              {/* Routes horizontales */}
              <div className="absolute left-[-20%] top-[42%] h-[13px] w-[140%] rotate-[8deg] rounded-full bg-white/90" />

              <div className="absolute left-[-20%] top-[69%] h-[7px] w-[140%] rotate-[-12deg] rounded-full bg-white/75" />

              {/* Routes verticales */}
              <div className="absolute left-[31%] top-[-20%] h-[140%] w-[10px] rotate-[26deg] rounded-full bg-white/80" />

              <div className="absolute right-[25%] top-[-20%] h-[140%] w-[8px] rotate-[-28deg] rounded-full bg-white/75" />

              {/* Petites routes */}
              <div className="absolute left-[8%] top-[22%] h-[3px] w-[45%] rotate-[20deg] rounded-full bg-[#A9CCDC]" />

              <div className="absolute bottom-[18%] left-[35%] h-[3px] w-[55%] rotate-[18deg] rounded-full bg-[#A9CCDC]" />

              <div className="absolute right-[4%] top-[18%] h-[3px] w-[40%] rotate-[60deg] rounded-full bg-[#A9CCDC]" />

              {/* Zones vertes */}
              <div className="absolute left-[-20px] bottom-[-30px] h-48 w-64 rotate-[-10deg] rounded-[50%] bg-[#C8E5CF]/70" />

              <div className="absolute right-[-40px] top-[-30px] h-40 w-56 rotate-[20deg] rounded-[50%] bg-[#C5E3CD]/60" />

              {/* =================================================
                  CERCLES DE RECHERCHE
              ================================================== */}

              <motion.div
                animate={{
                  scale: [1, 1.04, 1],
                  opacity: [0.35, 0.2, 0.35],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute left-1/2 top-1/2 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#1468A8]/30 bg-[#1468A8]/5"
              />

              <div className="absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1468A8]/25" />

              <div className="absolute left-1/2 top-1/2 h-[130px] w-[130px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1468A8]/20" />

              {/* =================================================
                  LIGNES VERS LES GARAGES
              ================================================== */}

              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 600 460"
                preserveAspectRatio="none"
              >
                {/* Ligne garage 1 */}
                <motion.path
                  d="M300 230 C250 190 190 150 130 120"
                  fill="none"
                  stroke="#1468A8"
                  strokeWidth="3"
                  strokeDasharray="7 7"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.55 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />

                {/* Ligne garage 2 */}
                <motion.path
                  d="M300 230 C370 190 440 165 490 145"
                  fill="none"
                  stroke="#1468A8"
                  strokeWidth="3"
                  strokeDasharray="7 7"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.55 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 1 }}
                />

                {/* Ligne garage 3 */}
                <motion.path
                  d="M300 230 C270 280 230 325 190 350"
                  fill="none"
                  stroke="#1468A8"
                  strokeWidth="3"
                  strokeDasharray="7 7"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.4 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 1 }}
                />
              </svg>

              {/* =================================================
                  POSITION UTILISATEUR
              ================================================== */}

              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
              >
                {/* Halo */}
                <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1468A8]/15" />

                <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[#1468A8] text-white shadow-[0_8px_25px_rgba(20,104,168,0.35)]">
                  <Navigation className="h-7 w-7 fill-white" />
                </div>

                {/* Petit point */}
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute -bottom-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-white"
                />
              </motion.div>

              {/* Label position */}
              <div className="absolute left-1/2 top-[58%] z-20 -translate-x-1/2 rounded-full bg-[#102F43] px-3 py-1.5 text-[10px] font-bold text-white shadow-md">
                Vous êtes ici
              </div>

              {/* =================================================
                  GARAGES
              ================================================== */}

              {garages.map((garage, index) => (
                <motion.div
                  key={garage.id}
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.5 + index * 0.15,
                    duration: 0.4,
                  }}
                  className={`group absolute z-20 ${garage.position}`}
                >
                  {/* Ping */}
                  {garage.available && (
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.35, 0, 0.35],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.4,
                      }}
                      className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500"
                    />
                  )}

                  {/* Marker */}
                  <motion.div
                    whileHover={{
                      scale: 1.12,
                      y: -4,
                    }}
                    className={`relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-4 border-white shadow-lg ${
                      garage.available
                        ? "bg-[#16824A] text-white"
                        : "bg-slate-400 text-white"
                    }`}
                  >
                    <Wrench className="h-5 w-5" />
                  </motion.div>

                  {/* Tooltip */}
                  <div className="pointer-events-none absolute left-1/2 top-[calc(100%+8px)] hidden -translate-x-1/2 whitespace-nowrap rounded-xl border border-slate-100 bg-white px-3 py-2 text-left shadow-lg group-hover:block">
                    <p className="text-xs font-bold text-slate-800">
                      {garage.name}
                    </p>

                    <div className="mt-1 flex items-center gap-2 text-[10px] text-slate-500">
                      <span>{garage.distance}</span>
                      <span>•</span>
                      <span>★ {garage.rating}</span>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* =================================================
                  TOP INFO
              ================================================== */}

              <div className="absolute right-4 top-4 z-30 rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#DDF5E9] text-[#16824A]">
                    <MapPin className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-slate-800">
                      Position détectée
                    </p>

                    <p className="mt-0.5 text-[10px] text-slate-500">
                      3 garages à proximité
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
                  GARAGE RECOMMANDÉ
              ================================================== */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.9,
                  duration: 0.5,
                }}
                className="absolute bottom-4 left-4 right-4 z-30 rounded-[22px] border border-[#F0D69B] bg-white/97 p-4 shadow-[0_15px_40px_rgba(15,23,42,0.15)] backdrop-blur"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF0CC] text-[#A96800]">
                    <Wrench className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-bold text-slate-800">
                        Garage Central
                      </p>

                      <span className="rounded-full bg-[#DDF5E9] px-2 py-0.5 text-[9px] font-bold text-[#16824A]">
                        Disponible
                      </span>
                    </div>

                    <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        2,1 km
                      </span>

                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-[#F0A500] text-[#F0A500]" />
                        4,8
                      </span>

                      <span className="flex items-center gap-1">
                        <Clock3 className="h-3 w-3" />
                        8 min
                      </span>
                    </div>
                  </div>

                  <button
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1468A8] text-white transition hover:bg-[#10598F] hover:scale-105"
                    aria-label="Voir l'itinéraire vers le garage"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Badge inférieur */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="absolute -bottom-5 left-5 hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl sm:flex"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#DDF5E9] text-[#16824A]">
              <Check className="h-4 w-4" />
            </div>

            <div>
              <p className="text-xs font-bold text-slate-800">
                Analyse terminée
              </p>

              <p className="text-[10px] text-slate-500">
                Meilleure option identifiée
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* =====================================================
            CONTENU
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F1D89D] bg-[#FFF5DC] px-4 py-2 text-sm font-bold text-[#A96800]">
            <Wrench className="h-4 w-4" />
            Assistance en cas de panne
          </div>

          {/* Titre */}
          <h2 className="text-3xl font-extrabold tracking-tight text-[#102F43] sm:text-4xl lg:text-[44px] lg:leading-[1.12]">
            Un garage à proximité,
            <span className="block text-[#1468A8]">
              quand vous en avez besoin.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Une panne peut arriver à tout moment. AutoGuide+ utilise
            votre position pour identifier les garages proches et
            comparer les options disponibles.
          </p>

          {/* =================================================
              FEATURES
          ================================================== */}

          <div className="mt-8 space-y-4">
            {/* Feature 1 */}
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              className="group flex gap-4 rounded-2xl border border-[#BBDDE4] bg-[#E2F5F5] p-4 transition hover:bg-white hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#16824A] text-white shadow-sm">
                <MapPin className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-bold text-[#102F43]">
                  Localisation immédiate
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Retrouvez les garages disponibles autour de votre
                  position sans avoir à chercher manuellement.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              className="group flex gap-4 rounded-2xl border border-[#C7DCEB] bg-[#E7F3FA] p-4 transition hover:bg-white hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1468A8] text-white shadow-sm">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-bold text-[#102F43]">
                  Analyse des options
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Comparez la distance, la disponibilité, la note et
                  le temps nécessaire pour rejoindre chaque garage.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              className="group flex gap-4 rounded-2xl border border-[#EBD8A8] bg-[#FFF5DE] p-4 transition hover:bg-white hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F0A500] text-white shadow-sm">
                <Phone className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-bold text-[#102F43]">
                  Recommandation claire
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Une option adaptée est mise en avant pour vous
                  permettre de prendre une décision rapidement.
                </p>
              </div>
            </motion.div>
          </div>

          {/* =================================================
              MINI STATS
          ================================================== */}

          <div className="mt-8 grid grid-cols-3 gap-3">
            <div className="rounded-2xl border border-[#C7DCEB] bg-white p-3 text-center">
              <p className="text-xl font-extrabold text-[#1468A8]">
                3
              </p>

              <p className="mt-1 text-[10px] font-medium text-slate-500 sm:text-xs">
                garages analysés
              </p>
            </div>

            <div className="rounded-2xl border border-[#C7E3D2] bg-white p-3 text-center">
              <p className="text-xl font-extrabold text-[#16824A]">
                2,1 km
              </p>

              <p className="mt-1 text-[10px] font-medium text-slate-500 sm:text-xs">
                plus proche
              </p>
            </div>

            <div className="rounded-2xl border border-[#EBD8A8] bg-white p-3 text-center">
              <p className="text-xl font-extrabold text-[#A96800]">
                4,8
              </p>

              <p className="mt-1 text-[10px] font-medium text-slate-500 sm:text-xs">
                meilleure note
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="group inline-flex items-center gap-2 rounded-xl bg-[#1468A8] px-5 py-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(20,104,168,0.2)] transition hover:-translate-y-0.5 hover:bg-[#10598F]">
              Voir comment ça marche

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <Check className="h-4 w-4 text-[#16824A]" />
              Simple et rapide
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}