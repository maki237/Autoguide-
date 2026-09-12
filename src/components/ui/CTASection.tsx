
import { Link } from "react-router-dom"
import { motion } from "motion/react"
import {
  ArrowRight,
  CheckCircle2,
  Navigation,
  ShieldCheck,
} from "lucide-react"

export default function CTASection() {
  return (
    <section className="border-t border-slate-200/80 bg-white px-5 py-8 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            relative
            overflow-hidden
            rounded-[24px]
            bg-[#1468A8]
            px-6
            py-10
            text-center
            text-white
            sm:rounded-[30px]
            sm:px-10
            sm:py-12
          "
        >

          {/* Décorations */}

          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-2xl" />

          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-blue-300/20 blur-2xl" />

          <div className="absolute right-10 top-8 hidden h-2 w-2 rounded-full bg-white/30 sm:block" />

          <div className="absolute bottom-10 left-12 hidden h-1.5 w-1.5 rounded-full bg-white/30 sm:block" />


          <div className="relative mx-auto max-w-3xl">

            {/* Icône */}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="
                mx-auto
                mb-5
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-white/10
                ring-1
                ring-white/15
              "
            >
              <Navigation className="h-5 w-5" />
            </motion.div>


            {/* Titre */}

            <h2 className="
              text-3xl
              font-bold
              tracking-[-0.03em]
              sm:text-4xl
              lg:text-[42px]
              lg:leading-[1.1]
            ">
              Prêt à prendre la route autrement ?
            </h2>


            {/* Description */}

            <p className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-6
              text-white/80
              sm:text-base
              sm:leading-7
            ">
              Avec AutoGuide+, trouvez le meilleur itinéraire, anticipez les
              difficultés sur votre trajet et localisez rapidement un garage
              en cas de panne.
            </p>


            {/* CTA */}

            <Link
              to="/login"
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-white
                px-6
                py-3.5
                text-sm
                font-semibold
                text-[#1468A8]
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:shadow-lg
                focus:outline-none
                focus:ring-2
                focus:ring-white/60
                focus:ring-offset-2
                focus:ring-offset-[#1468A8]
              "
            >
              Commencer avec AutoGuide+

              <ArrowRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                "
              />
            </Link>


            {/* Réassurance */}

            <div className="
              mt-7
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-5
              gap-y-2
              text-xs
              text-white/65
            ">

              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Itinéraires optimisés
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />

              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5" />
                Solutions adaptées
              </span>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}

