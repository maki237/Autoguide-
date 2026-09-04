
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { ShieldCheck, MapPin } from "lucide-react"

import logo from "@/assets/LOGO.png"
import Voiture from "@/assets/voiture.avif"

import { StepRole } from "@/components/ui/stepRole"
import { StepInformations } from "@/components/ui/stepInformations"
import { StepPassword } from "@/components/ui/stepPassword"
import { StepConditions } from "@/components/ui/stepCondition"

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

  // =========================
  // NAVIGATION ENTRE LES ÉTAPES
  // =========================

  const nextStep = () => {
    setStep((current) => Math.min(current + 1, 4))
  }

  const previousStep = () => {
    setStep((current) => Math.max(current - 1, 1))
  }

  // =========================
  // CRÉATION DU COMPTE
  // =========================

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

  return (
    <div className="min-h-svh w-full bg-[#eef3f8] px-4 py-6 sm:px-6 lg:px-10">
      {/* =====================================================
          CARTE PRINCIPALE
      ===================================================== */}

      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-[1150px] overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_rgba(15,45,70,0.12)]">
        {/* ===================================================
            PARTIE GAUCHE — IMAGE + TEXTE
        =================================================== */}

        <div className="relative hidden w-[46%] overflow-hidden lg:block">
          {/* Image */}
          <img
            src={Voiture}
            alt="Automobile"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay principal */}
          <div className="absolute inset-0 bg-[#082542]/65" />

          {/* Dégradé en bas pour améliorer la lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#061a2d]/95 via-transparent to-transparent" />

          {/* Contenu */}
          <div className="relative z-10 flex h-full flex-col justify-between p-8 xl:p-10">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                <ShieldCheck className="h-6 w-6 text-white" />
              </div>

              <div>
                <p className="text-lg font-bold tracking-tight text-white">
                  AutoGuide+
                </p>

                <p className="text-xs text-white/70">
                  Assistance automobile
                </p>
              </div>
            </div>

            {/* Texte du bas */}
            <div className="max-w-md">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 backdrop-blur-sm">
                <MapPin className="h-3.5 w-3.5 text-white" />

                <span className="text-xs font-medium text-white">
                  Votre route, notre priorité
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white xl:text-4xl">
                Toujours plus proche de votre solution.
              </h2>

              <p className="mt-4 max-w-sm text-sm leading-6 text-white/75">
                Trouvez les meilleurs itinéraires et localisez rapidement un
                garage adapté en cas de panne, où que vous soyez.
              </p>
            </div>
          </div>
        </div>

        {/* ===================================================
            PARTIE DROITE — FORMULAIRE
        =================================================== */}

        <div className="flex w-full items-center justify-center bg-white px-6 py-8 sm:px-10 lg:w-[54%] lg:px-12">
          <div className="w-full max-w-[520px]">
            {/* ===============================================
                HEADER
            =============================================== */}

            <div className="mb-7">
              {/* Logo */}
              <div className="mb-5 flex items-center gap-3">
                <img
                  src={logo}
                  alt="AutoGuide+"
                  className="h-16 w-16 rounded-xl object-contain sm:h-[4.5rem] sm:w-[4.5rem]"
                />

                <div>
                  <p className="text-lg font-bold tracking-tight text-[#1e293b]">
                    AutoGuide+
                  </p>

                  <p className="text-xs text-gray-500">
                    Assistance automobile
                  </p>
                </div>
              </div>

              {/* Badge */}
              <div className="mb-4 inline-flex items-center rounded-full bg-[#e6f1fb] px-3 py-1.5">
                <span className="text-xs font-semibold text-[#1b5fa8]">
                  Créer votre compte
                </span>
              </div>

              {/* Titre */}
              <h1 className="text-2xl font-bold tracking-tight text-[#1e293b] sm:text-3xl">
                Bienvenue sur AutoGuide+
              </h1>

              <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
                Quelques informations suffisent pour commencer à utiliser
                notre assistance automobile.
              </p>
            </div>

            {/* ===============================================
                PROGRESSION
            =============================================== */}

            <div className="mb-7">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500">
                  Étape {step} sur 4
                </span>

                <span className="text-xs font-semibold text-[#1b5fa8]">
                  {step === 1 && "Profil"}
                  {step === 2 && "Informations"}
                  {step === 3 && "Sécurité"}
                  {step === 4 && "Finalisation"}
                </span>
              </div>

              <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-[#1b5fa8] transition-all duration-300"
                  style={{
                    width: `${(step / 4) * 100}%`,
                  }}
                />
              </div>

              {/* Petits indicateurs */}
              <div className="mt-3 flex justify-between">
                {[1, 2, 3, 4].map((number) => (
                  <div
                    key={number}
                    className={`h-1.5 w-1.5 rounded-full transition-all ${
                      number <= step
                        ? "bg-[#1b5fa8]"
                        : "bg-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* ===============================================
                FORMULAIRE
            =============================================== */}

            <form onSubmit={handleSubmit}>
              {/* ÉTAPE 1 */}
              {step === 1 && (
                <StepRole
                  role={role}
                  setRole={setRole}
                  onNext={nextStep}
                />
              )}

              {/* ÉTAPE 2 */}
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

              {/* ÉTAPE 3 */}
              {step === 3 && (
                <StepPassword
                  password={password}
                  setPassword={setPassword}
                  onNext={nextStep}
                  onPrevious={previousStep}
                />
              )}

              {/* ÉTAPE 4 */}
              {step === 4 && (
                <StepConditions
                  accepted={accepted}
                  setAccepted={setAccepted}
                  onPrevious={previousStep}
                  isLoading={isLoading}
                />
              )}
            </form>

            {/* ===============================================
                CONNEXION
            =============================================== */}

            <div className="mt-7 text-center">
              <p className="text-sm text-gray-500">
                Vous avez déjà un compte ?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/login")}
                  className="font-semibold text-[#1b5fa8] transition-colors hover:text-[#154a87]"
                >
                  Connectez-vous
                </button>
              </p>
            </div>

            {/* ===============================================
                SÉCURITÉ
            =============================================== */}

            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-400">
              <ShieldCheck className="h-3.5 w-3.5" />

              <span>
                Vos informations sont protégées et sécurisées
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
