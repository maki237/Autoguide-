import { useState } from "react"
import type { FormEvent } from "react"
import { AnimatePresence, motion } from "motion/react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { Check, MapPin, ShieldCheck } from "lucide-react"

import logo from "@/assets/LOGO.png"
import Voiture from "@/assets/voiture.avif"

import { StepRole } from "@/components/ui/stepRole"
import { StepInformations } from "@/components/ui/stepInformations"
import { StepPassword } from "@/components/ui/stepPassword"
import { StepConditions } from "@/components/ui/stepCondition"

const steps = [
  { number: 1, title: "Profil" },
  { number: 2, title: "Informations" },
  { number: 3, title: "Sécurité" },
  { number: 4, title: "Finalisation" },
]

export default function SignupForm() {
  const navigate = useNavigate()

  const [step, setStep] = useState(1)

  const [role, setRole] = useState<"client" | "garage">("client")

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")

  const [accepted, setAccepted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // =========================================================
  // NAVIGATION
  // =========================================================

  const nextStep = () => {
    setStep((current) => Math.min(current + 1, 4))
  }

  const previousStep = () => {
    setStep((current) => Math.max(current - 1, 1))
  }

  // =========================================================
  // CRÉATION DU COMPTE
  // =========================================================

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!accepted) {
      toast.error("Veuillez accepter les conditions d'utilisation.")
      return
    }

    setIsLoading(true)

    const userData = {
      role: role === "client" ? "AUTOMOBILISTE" : "GARAGISTE",
      fullName,
      email,
      phone,
      password,
    }

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      )

      if (!response.ok) {
        const errorData = await response.json().catch(() => null)

        throw new Error(
          errorData?.detail ||
            errorData?.message ||
            "Une erreur est survenue lors de la création du compte."
        )
      }

      toast.success("Compte créé avec succès !")

      localStorage.setItem("pendingFullName", fullName.trim())

      setTimeout(() => {
        navigate("/login")
      }, 1500)
    } catch (error) {
      if (error instanceof TypeError) {
        toast.error(
          "Impossible de contacter le serveur. Vérifiez que FastAPI est lancé."
        )
      } else if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error("Une erreur inattendue est survenue.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  const stepVariants = {
    initial: { opacity: 0, x: 16 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -16 },
  }

  return (
    <main className="min-h-svh bg-[#F7FBFF] px-3 py-3 sm:px-5 sm:py-5 lg:px-8">
      <div
        className="
          mx-auto flex min-h-[calc(100svh-1.5rem)] w-full max-w-[1200px]
          overflow-hidden rounded-[28px] border border-blue-100/80 bg-white
          shadow-[0_25px_80px_rgba(20,104,168,0.12)]
          sm:min-h-[calc(100svh-2.5rem)] sm:rounded-[34px]
          lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]
        "
      >
        {/* ================================================= */}
        {/* PANNEAU GAUCHE — même traitement visuel que la      */}
        {/* page de connexion (overlay, badge, bloc sécurité)  */}
        {/* ================================================= */}

        <div className="relative hidden overflow-hidden lg:block">
          <img
            src={Voiture}
            alt="Automobile"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#082F49]/75" />

          <div className="relative z-10 flex h-full flex-col justify-between p-9 text-white">
            <img
              src={logo}
              alt="AutoGuide+"
              className="h-11 w-auto object-contain brightness-0 invert"
            />

            <div className="max-w-sm">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 backdrop-blur-sm">
                <MapPin className="h-3.5 w-3.5" />
                <span className="text-xs font-medium">
                  Votre route, notre priorité
                </span>
              </div>

              <h2 className="text-3xl font-semibold leading-tight tracking-tight xl:text-4xl">
                Toujours plus proche de votre solution.
              </h2>

              <p className="mt-4 text-sm leading-6 text-white/75">
                Trouvez les meilleurs itinéraires et localisez rapidement un
                garage adapté en cas de panne, où que vous soyez.
              </p>
            </div>

            <div className="flex items-center gap-3 border-t border-white/10 pt-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                <ShieldCheck className="h-4 w-4" />
              </div>

              <div>
                <p className="text-sm font-medium">Inscription sécurisée</p>
                <p className="mt-0.5 text-xs text-white/55">
                  Vos informations restent protégées.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* PANNEAU DROIT — FORMULAIRE                        */}
        {/* ================================================= */}

        <div className="flex w-full items-center justify-center bg-[#FAFCFE] px-5 py-8 sm:px-10 sm:py-10 lg:px-12 xl:px-16">
          <div className="w-full max-w-[520px]">
            {/* En-tête : logo + nom, badge, titre, sous-titre — tout centré */}
            <div className="mb-8 flex flex-col items-center text-center">
              <div className="mb-5 flex items-center gap-3 lg:hidden">
                <img
                  src={logo}
                  alt="AutoGuide+"
                  className="h-11 w-11 rounded-xl object-contain"
                />
                <div className="text-left">
                  <p className="font-bold text-slate-800">AutoGuide+</p>
                  <p className="text-xs text-slate-400">
                    Assistance automobile
                  </p>
                </div>
              </div>

              <div className="mb-4 inline-flex items-center rounded-full bg-[#e6f1fb] px-3 py-1.5">
                <span className="text-xs font-semibold text-[#1468A8]">
                  Créer votre compte
                </span>
              </div>

              <h1 className="text-[26px] font-bold tracking-tight text-slate-900 sm:text-3xl">
                Bienvenue sur AutoGuide+
              </h1>

              <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
                Quelques informations suffisent pour commencer à utiliser
                notre assistance automobile.
              </p>
            </div>

            {/* Progression */}
            <div className="mb-8">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-800">
                  {steps[step - 1].title}
                </p>
                <p className="text-xs text-slate-400">Étape {step} / 4</p>
              </div>

              <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  className="absolute left-0 top-0 h-full rounded-full bg-[#1468A8]"
                  animate={{ width: `${(step / 4) * 100}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>

              <div className="mt-4 flex justify-between">
                {steps.map((item) => {
                  const completed = item.number < step
                  const current = item.number === step

                  return (
                    <button
                      key={item.number}
                      type="button"
                      onClick={() => {
                        if (item.number < step) setStep(item.number)
                      }}
                      disabled={item.number > step}
                      className={`flex items-center gap-2 text-left ${
                        item.number > step ? "cursor-default" : "cursor-pointer"
                      }`}
                    >
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold ${
                          completed || current
                            ? "bg-[#1468A8] text-white"
                            : "bg-slate-100 text-slate-400"
                        }`}
                      >
                        {completed ? (
                          <Check className="h-3.5 w-3.5" />
                        ) : (
                          item.number
                        )}
                      </span>
                      <span className="hidden text-xs text-slate-500 sm:block">
                        {item.title}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Formulaire — la navigation entre étapes vit uniquement
                dans les composants Step (onNext / onPrevious) pour éviter
                d'avoir deux jeux de boutons "Continuer / Retour" */}
            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  variants={stepVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {step === 1 && (
                    <StepRole role={role} setRole={setRole} onNext={nextStep} />
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
                </motion.div>
              </AnimatePresence>
            </form>

            <div className="mt-7 border-t border-slate-100 pt-5 text-center">
              <p className="text-sm text-slate-500">
                Vous avez déjà un compte ?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/login")}
                  className="font-semibold text-[#1468A8] hover:text-[#105B94]"
                >
                  Connectez-vous
                </button>
              </p>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="h-3.5 w-3.5" />
              Vos informations sont protégées et sécurisées
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
