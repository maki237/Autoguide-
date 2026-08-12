import { useState } from "react"
import { ShieldCheck, MapPin } from "lucide-react"

import logo from "@/assets/LOGO.png"
import Voiture from "@/assets/voiture.avif"

import { StepRole } from "@/components/ui/stepRole"
import { StepInformations } from "@/components/ui/stepInformations"
import { StepPassword } from "@/components/ui/stepPassword"
import { StepConditions } from "@/components/ui/stepCondition"

export function SignupForm() {

  const [step, setStep] = useState(1)

  const [role, setRole] =
    useState<"client" | "garage">("client")

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [accepted, setAccepted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const nextStep = () => {
    setStep((current) => Math.min(current + 1, 4))
  }

  const previousStep = () => {
    setStep((current) => Math.max(current - 1, 1))
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault()

    if (!accepted) return

    setIsLoading(true)

    try {

      const userData = {
        role,
        fullName,
        email,
        phone,
        password,
      }

      console.log("Données utilisateur :", userData)

      await new Promise((resolve) =>
        setTimeout(resolve, 1200)
      )

    } finally {

      setIsLoading(false)

    }
  }

  return (

    <div className="relative min-h-svh w-full overflow-hidden bg-[#f7f9fc]">

      {/* ================= IMAGE ================= */}

      <div className="absolute inset-y-0 left-0 hidden w-[48%] lg:block">

        <img
          src={Voiture}
          alt="Assistance automobile AutoGuide+"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#082542]/65" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061a2d]/90 via-transparent to-transparent" />

        <div className="absolute left-10 top-10 flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/95">
            <ShieldCheck className="h-6 w-6 text-[#1B5FA8]" />
          </div>

          <div>
            <p className="text-sm font-semibold text-white">
              AutoGuide+
            </p>

            <p className="text-xs text-white/60">
              Assistance intelligente
            </p>
          </div>

        </div>

        <div className="absolute bottom-10 left-10 max-w-md text-white">

          <div className="mb-4 flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5">

            <MapPin className="h-3.5 w-3.5 text-blue-200" />

            <span className="text-xs font-medium">
              Yaoundé · Cameroun
            </span>

          </div>

          <h2 className="text-4xl font-bold leading-tight">
            Toujours plus proche
            <br />
            de votre solution.
          </h2>

          <p className="mt-4 max-w-sm text-sm leading-6 text-white/75">
            AutoGuide+ vous accompagne pour trouver rapidement
            un itinéraire, un garage ou une assistance automobile
            adaptée à votre situation.
          </p>

        </div>

      </div>


      {/* ================= FORMULAIRE ================= */}

      <div className="relative z-10 ml-auto flex min-h-svh w-full items-center justify-center bg-[#f7f9fc] px-5 py-8 sm:px-8 lg:w-[52%] lg:px-14 xl:px-20">

        <div className="w-full max-w-[570px]">

          {/* HEADER */}

          <div className="mb-7">

            <div className="mb-6 flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white">

                <img
                  src={logo}
                  alt="AutoGuide+"
                  className="h-10 w-10 object-contain"
                />

              </div>

              <div>

                <h2 className="text-xl font-bold text-[#12304A]">
                  AutoGuide+
                </h2>

                <p className="text-xs text-gray-500">
                  Votre route, notre assistance.
                </p>

              </div>

            </div>

            <div className="mb-3 flex w-fit items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-[#1B5FA8]">

              <span className="h-1.5 w-1.5 rounded-full bg-[#1B5FA8]" />

              Assistance automobile intelligente

            </div>

            <h1 className="text-3xl font-bold text-[#162B3D]">
              Créer votre compte
            </h1>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Rejoignez AutoGuide+ et bénéficiez d'une assistance
              automobile adaptée à vos besoins.
            </p>

          </div>


          {/* ================= PROGRESSION ================= */}

          <div className="mb-6">

            <div className="mb-2 flex justify-between text-xs text-gray-500">

              <span>
                Étape {step} sur 4
              </span>

              <span>
                {Math.round((step / 4) * 100)}%
              </span>

            </div>

            <div className="h-2 overflow-hidden rounded-full bg-gray-200">

              <div
                className="h-full rounded-full bg-[#1B5FA8] transition-all duration-300"
                style={{
                  width: `${(step / 4) * 100}%`,
                }}
              />

            </div>

          </div>


          {/* ================= FORM ================= */}

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {step === 1 && (

              <StepRole
                role={role}
                setRole={setRole}
                onNext={nextStep}
              />

            )}

            {step === 2 && (

              <StepInformations
                fullName={fullName}
                setFullName={setFullName}
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}
                onNext={nextStep}
                onPrevious={previousStep}
              />

            )}

            {step === 3 && (

              <StepPassword
                password={password}
                setPassword={setPassword}
                onNext={nextStep}
                onPrevious={previousStep}
              />

            )}

            {step === 4 && (

              <StepConditions
                accepted={accepted}
                setAccepted={setAccepted}
                onPrevious={previousStep}
                isLoading={isLoading}
              />

            )}

          </form>


          {/* CONNEXION */}

          <p className="pt-6 text-center text-sm text-gray-500">

            Vous avez déjà un compte ?{" "}

            <a
              href="/login"
              className="font-semibold text-[#1B5FA8] hover:underline"
            >
              Connectez-vous
            </a>

          </p>


          {/* SECURITE */}

          <div className="mt-7 flex items-center justify-center gap-2 text-xs text-gray-400">

            <ShieldCheck className="h-4 w-4" />

            <span>
              Vos informations sont protégées et sécurisées.
            </span>

          </div>

        </div>

      </div>

    </div>
  )
}