import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import logo from "@/assets/LOGO.png"

import {
  User,
  Wrench,
  Mail,
  Phone,
  Lock,
  ShieldCheck,
  ArrowRight,
  MapPin,
  CheckCircle2,
} from "lucide-react"

import Voiture from "@/assets/voiture.avif"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [role, setRole] = useState<"client" | "garage">("client")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [accepted, setAccepted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!accepted) return

    setIsLoading(true)

    try {
      await new Promise((r) => setTimeout(r, 1200))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      className={cn(
        "relative min-h-svh w-full overflow-hidden bg-[#f7f9fc]",
        className
      )}
      {...props}
    >

      {/* =====================================================
          IMAGE DE GAUCHE
      ====================================================== */}

      <div className="absolute inset-y-0 left-0 hidden w-[48%] lg:block">

        <img
          src={Voiture}
          alt="Assistance automobile AutoGuide+"
          className="h-full w-full object-cover"
        />

        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-[#082542]/65" />

        {/* Petit dégradé uniquement vers le bas */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#061a2d]/90 via-transparent to-transparent" />

        {/* Logo / badge en haut */}
        <div className="absolute left-10 top-10 flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 shadow-lg">
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

        {/* Contenu bas de l'image */}
        <div className="absolute bottom-10 left-10 max-w-md text-white">

          <div className="mb-4 flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-sm">
            <MapPin className="h-3.5 w-3.5 text-blue-200" />

            <span className="text-xs font-medium">
              Yaoundé · Cameroun
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight">
            Toujours plus proche
            <br />
            de votre solution.
          </h2>

          <p className="mt-4 max-w-sm text-sm leading-6 text-white/75">
            AutoGuide+ vous accompagne pour trouver rapidement
            un itinéraire, un garage ou une assistance automobile
            adaptée à votre situation.
          </p>

          {/* Petits avantages */}
          <div className="mt-6 flex flex-col gap-3">

            <div className="flex items-center gap-2 text-sm text-white/85">
              <CheckCircle2 className="h-4 w-4 text-blue-300" />
              <span>Localisation des garages à proximité</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-white/85">
              <CheckCircle2 className="h-4 w-4 text-blue-300" />
              <span>Calcul intelligent des itinéraires</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-white/85">
              <CheckCircle2 className="h-4 w-4 text-blue-300" />
              <span>Assistance rapide en cas de panne</span>
            </div>

          </div>

        </div>
      </div>


      {/* =====================================================
          ZONE FORMULAIRE
      ====================================================== */}

      <div className="relative z-10 ml-auto flex min-h-svh w-full items-center justify-center bg-[#f7f9fc] px-5 py-8 sm:px-8 lg:w-[52%] lg:px-14 xl:px-20">

        <div className="w-full max-w-[570px]">

          {/* =================================================
              HEADER
          ================================================== */}

          <div className="mb-7">

            <div className="mb-6 flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-gray-100">
                <img
                  src={logo}
                  alt="AutoGuide+"
                  className="h-10 w-10 object-contain"
                />
              </div>

              <div>
                <h2 className="text-xl font-bold tracking-tight text-[#12304A]">
                  AutoGuide+
                </h2>

                <p className="text-xs text-gray-500">
                  Votre route, notre assistance.
                </p>
              </div>

            </div>


            {/* Badge */}
            <div className="mb-3 flex w-fit items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-[#1B5FA8]">

              <span className="h-1.5 w-1.5 rounded-full bg-[#1B5FA8]" />

              Assistance automobile intelligente

            </div>


            <h1 className="text-3xl font-bold tracking-tight text-[#162B3D]">
              Créer votre compte
            </h1>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Rejoignez AutoGuide+ et bénéficiez d'une assistance
              automobile adaptée à vos besoins.
            </p>

          </div>


          {/* =================================================
              FORMULAIRE
          ================================================== */}

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* ================= ROLE ================= */}

            <div>

              <label className="mb-2.5 block text-sm font-semibold text-[#263B4D]">
                Vous êtes...
              </label>

              <div className="grid grid-cols-2 gap-3">

                {/* AUTOMOBILISTE */}

                <button
                  type="button"
                  onClick={() => setRole("client")}
                  className={cn(
                    "group relative flex min-h-[105px] flex-col items-center justify-center gap-2 rounded-xl border bg-white p-4 transition-all duration-200",
                    role === "client"
                      ? "border-[#1B5FA8] bg-blue-50/70 shadow-sm ring-1 ring-[#1B5FA8]/10"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  )}
                >

                  {role === "client" && (
                    <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#1B5FA8]">
                      <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                    </span>
                  )}

                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-full transition-colors",
                      role === "client"
                        ? "bg-[#1B5FA8] text-white"
                        : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                    )}
                  >
                    <User className="h-5 w-5" />
                  </div>

                  <span className="text-sm font-semibold text-[#263B4D]">
                    Automobiliste
                  </span>

                </button>


                {/* GARAGISTE */}

                <button
                  type="button"
                  onClick={() => setRole("garage")}
                  className={cn(
                    "group relative flex min-h-[105px] flex-col items-center justify-center gap-2 rounded-xl border bg-white p-4 transition-all duration-200",
                    role === "garage"
                      ? "border-[#1B5FA8] bg-blue-50/70 shadow-sm ring-1 ring-[#1B5FA8]/10"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  )}
                >

                  {role === "garage" && (
                    <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#1B5FA8]">
                      <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                    </span>
                  )}

                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-full transition-colors",
                      role === "garage"
                        ? "bg-[#1B5FA8] text-white"
                        : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                    )}
                  >
                    <Wrench className="h-5 w-5" />
                  </div>

                  <span className="text-sm font-semibold text-[#263B4D]">
                    Garagiste
                  </span>

                </button>

              </div>

            </div>


            {/* ================= NOM ================= */}

            <div>

              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-semibold text-[#263B4D]"
              >
                Nom complet
              </label>

              <div className="group relative">

                <User className="absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-[#1B5FA8]" />

                <input
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Jean Dupont"
                  className="h-12 w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 hover:border-gray-300 focus:border-[#1B5FA8] focus:ring-4 focus:ring-[#1B5FA8]/10"
                  required
                />

              </div>

            </div>


            {/* ================= EMAIL ================= */}

            <div>

              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-[#263B4D]"
              >
                Adresse email
              </label>

              <div className="group relative">

                <Mail className="absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-[#1B5FA8]" />

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jean.dupont@exemple.com"
                  className="h-12 w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 hover:border-gray-300 focus:border-[#1B5FA8] focus:ring-4 focus:ring-[#1B5FA8]/10"
                  required
                />

              </div>

            </div>


            {/* ================= TELEPHONE ================= */}

            <div>

              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-semibold text-[#263B4D]"
              >
                Numéro de téléphone
              </label>

              <div className="flex">

                <span className="flex h-12 items-center rounded-l-xl border border-r-0 border-gray-200 bg-gray-50 px-3.5 text-sm font-medium text-gray-600">
                  +237
                </span>

                <div className="group relative flex-1">

                  <Phone className="absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-[#1B5FA8]" />

                  <input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="6XX XX XX XX"
                    className="h-12 w-full rounded-r-xl border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 hover:border-gray-300 focus:border-[#1B5FA8] focus:ring-4 focus:ring-[#1B5FA8]/10"
                    required
                  />

                </div>

              </div>

            </div>


            {/* ================= PASSWORD ================= */}

            <div>

              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-[#263B4D]"
              >
                Mot de passe
              </label>

              <div className="group relative">

                <Lock className="absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-[#1B5FA8]" />

                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="h-12 w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 hover:border-gray-300 focus:border-[#1B5FA8] focus:ring-4 focus:ring-[#1B5FA8]/10"
                  required
                  minLength={8}
                />

              </div>

              <p className="mt-1.5 text-xs text-gray-400">
                Minimum 8 caractères.
              </p>

            </div>


            {/* ================= CONDITIONS ================= */}

            <div className="flex items-start gap-2.5">

              <Checkbox
                id="terms"
                checked={accepted}
                onCheckedChange={(v) => setAccepted(v === true)}
                className="mt-0.5"
              />

              <label
                htmlFor="terms"
                className="text-xs leading-5 text-gray-500"
              >
                J'accepte les{" "}
                <a
                  href="#"
                  className="font-medium text-[#1B5FA8] hover:underline"
                >
                  Conditions d'utilisation
                </a>{" "}
                et la{" "}
                <a
                  href="#"
                  className="font-medium text-[#1B5FA8] hover:underline"
                >
                  Politique de confidentialité
                </a>
                .
              </label>

            </div>


            {/* ================= BOUTON ================= */}

            <Button
              type="submit"
              disabled={!accepted || isLoading}
              className="group h-12 w-full rounded-xl bg-[#1B5FA8] text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#154a87] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
            >

              {isLoading ? (
                "Création de votre compte..."
              ) : (
                <>
                  Créer mon compte

                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </>
              )}

            </Button>


            {/* ================= CONNEXION ================= */}

            <p className="pt-1 text-center text-sm text-gray-500">

              Vous avez déjà un compte ?{" "}

              <a
                href="/login"
                className="font-semibold text-[#1B5FA8] hover:underline"
              >
                Connectez-vous
              </a>

            </p>

          </form>


          {/* Petite mention sécurité */}

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