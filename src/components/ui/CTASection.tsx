import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="px-5 py-12 lg:px-8">

      <div className="mx-auto max-w-7xl">

        <div className="relative overflow-hidden rounded-[30px] bg-[#1468A8] px-6 py-16 text-center text-white sm:px-10">

          {/* Décorations */}

          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-2xl" />

          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-blue-300/20 blur-2xl" />


          <div className="relative">

            <h2 className="text-3xl font-bold sm:text-4xl">
              Prenez la route en toute confiance.
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-6 text-white/80">

              Préparez vos trajets, trouvez un garage à proximité
              et bénéficiez d'un accompagnement intelligent
              avec AutoGuide+.

            </p>


            <Link
              to="/login"
              className="
                mt-8
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-white
                px-6
                py-3
                text-sm
                font-semibold
                text-[#1468A8]
                transition
                hover:-translate-y-0.5
                hover:shadow-lg
              "
            >

              Commencer gratuitement

              <ArrowRight className="h-4 w-4" />

            </Link>

          </div>

        </div>

      </div>

    </section>
  )
}