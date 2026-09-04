
import {
  useState,
  type ComponentProps,
  type FormEvent,
  type Dispatch,
  type SetStateAction,
} from "react"

import { cn } from "@/lib/utils"
import logo from "@/assets/LOGO.png"
import carte from "@/assets/carte.webp"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner"

import {
  User,
  Lock,
  Eye,
  EyeOff,
  Sparkles,
  ShieldCheck,
  ArrowRight,
} from "lucide-react"

export function LoginForm({
  className,
  ...props
}: ComponentProps<"div">) {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // ============================================================
  // CONNEXION
  // ============================================================

  const handleLogin = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    if (!email || !password) {
      toast.error("Champs obligatoires", {
        description:
          "Veuillez renseigner votre email et votre mot de passe.",
      })
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data?.detail ||
            data?.message ||
            "Email ou mot de passe incorrect."
        )
      }

      // ========================================================
      // SAUVEGARDE DE L'UTILISATEUR
      // ========================================================

      const storedUser = {
        ...data.user,
        fullName:
          data.user?.fullName ||
          localStorage.getItem("pendingFullName") ||
          data.user?.name ||
          "",
      }

      localStorage.setItem("user", JSON.stringify(storedUser))
      localStorage.removeItem("pendingFullName")

      toast.success("Connexion réussie ! 🎉", {
        description: `Bienvenue ${storedUser.fullName || "sur AutoGuide+"}.`,
        duration: 1500,
      })

      // ========================================================
      // REDIRECTION SELON LE RÔLE
      // ========================================================

      setTimeout(() => {
        if (data.user?.role === "AUTOMOBILISTE") {
          navigate("/dashboard")
        } else if (data.user?.role === "GARAGISTE") {
          navigate("/garagiste/dashboard")
        } else {
          navigate("/")
        }
      }, 1500)
    } catch (error) {
      toast.error("Échec de la connexion", {
        description:
          error instanceof Error
            ? error.message
            : "Une erreur est survenue.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      className={cn(
        "min-h-screen w-full bg-[#EAF3F8] p-4 md:p-6 lg:p-10",
        className
      )}
      {...props}
    >
      {/* =====================================================
          GRAND CONTENEUR
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          flex
          min-h-[calc(100vh-2rem)]
          w-full
          max-w-6xl
          overflow-hidden
          rounded-[30px]
          bg-white
          shadow-[0_25px_80px_rgba(15,86,141,0.16)]
        "
      >
        {/* =====================================================
            PANNEAU GAUCHE
        ====================================================== */}

        <div
          className="
            relative
            hidden
            w-1/2
            overflow-hidden
            lg:block
          "
        >
          {/* Image */}

          <div
            className="
              absolute
              inset-0
              bg-cover
              bg-center
            "
            style={{
              backgroundImage: `url(${carte})`,
            }}
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-[#0B2A4D]/60" />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#062B48]
              via-[#0B2A4D]/35
              to-[#0B2A4D]/10
            "
          />

          {/* Cercles décoratifs */}

          <div
            className="
              absolute
              -right-20
              -top-20
              h-64
              w-64
              rounded-full
              border
              border-white/10
            "
          />

          <div
            className="
              absolute
              -bottom-24
              -left-24
              h-72
              w-72
              rounded-full
              border
              border-white/10
            "
          />

          {/* Contenu */}

          <div
            className="
              relative
              z-10
              flex
              h-full
              flex-col
              justify-between
              p-8
              text-white
            "
          >
            {/* LOGO */}

            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/15
                  bg-white/10
                  backdrop-blur-md
                "
              >
                <img
                  src={logo}
                  alt="AutoGuide+"
                  className="h-10 w-10 object-contain"
                />
              </div>

              <span className="text-lg font-semibold tracking-tight">
                AutoGuide+
              </span>
            </div>

            {/* BADGE GARAGE */}

            <div
              className="
                absolute
                right-8
                top-8
                w-64
                rounded-2xl
                border
                border-white/15
                bg-white/10
                p-4
                shadow-[0_15px_45px_rgba(0,0,0,0.25)]
                backdrop-blur-xl
              "
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      bg-[#5EC5FF]
                      opacity-75
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-[#5EC5FF]
                    "
                  />
                </span>

                <p className="text-sm font-medium text-white/90">
                  Garage repéré à 3,2 km
                </p>
              </div>

              <div className="mt-3 flex items-center gap-2.5">
                <div className="flex flex-col items-center">
                  <span className="h-2 w-2 rounded-full bg-white" />

                  <span className="my-0.5 h-6 w-px border-l border-dashed border-white/30" />

                  <span className="h-2 w-2 rounded-full border-2 border-[#5EC5FF]" />
                </div>

                <div className="flex flex-1 flex-col gap-2.5">
                  <span className="text-[11px] text-white/60">
                    Votre position
                  </span>

                  <span className="text-[11px] text-white/60">
                    Garage Mécano Plus — Ekounou
                  </span>
                </div>
              </div>
            </div>

            {/* MESSAGE */}

            <div className="max-w-md">
              <div className="mb-3 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#8FC1F5]" />

                <p className="text-sm font-medium text-[#8FC1F5]">
                  À Yaoundé, chaque trajet compte
                </p>
              </div>

              <h2
                className="
                  text-[2.4rem]
                  font-bold
                  leading-[1.12]
                  tracking-tight
                "
              >
                On reste avec vous,
                <br />
                même en panne.
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-6 text-white/70">
                Le meilleur itinéraire pour votre trajet,
                et le garage le plus proche en cas de souci
                mécanique — partout, à tout moment.
              </p>
            </div>

            {/* STATISTIQUES */}

            <div
              className="
                flex
                w-fit
                items-center
                gap-5
                rounded-full
                border
                border-white/15
                bg-white/10
                px-5
                py-3
                backdrop-blur-xl
              "
            >
              <div className="flex items-baseline gap-1.5">
                <span className="text-base font-semibold">
                  120+
                </span>

                <span className="text-[11px] text-white/60">
                  Garages
                </span>
              </div>

              <span className="h-4 w-px bg-white/20" />

              <div className="flex items-baseline gap-1.5">
                <span className="text-base font-semibold">
                  24/7
                </span>

                <span className="text-[11px] text-white/60">
                  Assistance
                </span>
              </div>

              <span className="h-4 w-px bg-white/20" />

              <div className="flex items-baseline gap-1.5">
                <span className="text-base font-semibold">
                  12 min
                </span>

                <span className="text-[11px] text-white/60">
                  Réponse moy.
                </span>
              </div>
            </div>

            {/* FOOTER */}

            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} AutoGuide+ —
              Votre compagnon de route
            </p>
          </div>
        </div>

        {/* =====================================================
            PANNEAU DROIT
        ====================================================== */}

        <div
          className="
            relative
            flex
            w-full
            items-center
            justify-center
            bg-white
            px-6
            py-10
            lg:w-1/2
            lg:px-12
          "
        >
          {/* Décorations */}

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-48
              w-48
              rounded-full
              border
              border-[#1468A8]/10
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-16
              -left-16
              h-40
              w-40
              rounded-full
              bg-[#1468A8]/5
            "
          />

          <div className="relative z-10 w-full max-w-[420px]">
            {/* =================================================
                HEADER
            ================================================== */}

            <div className="mb-8">
              {/* Logo */}

              <div
                className="
                  mb-5
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-[#1468A8]/15
                  bg-[#E6F1FB]
                  shadow-[0_8px_20px_rgba(20,104,168,0.08)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                <img
                  src={logo}
                  alt="AutoGuide+"
                  className="h-12 w-12 object-contain"
                />
              </div>

              <p className="mb-2 text-sm font-semibold text-[#1468A8]">
                Bienvenue sur AutoGuide+
              </p>

              <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                Connectez-vous pour retrouver vos itinéraires,
                vos garages et profiter de votre assistance routière.
              </p>
            </div>

            {/* =================================================
                FORMULAIRE
            ================================================== */}

            <form
              onSubmit={handleLogin}
              className="space-y-5"
            >
              {/* EMAIL */}

              <div>
                <label
                  htmlFor="email"
                  className="
                    mb-2
                    block
                    text-sm
                    font-semibold
                    text-slate-700
                  "
                >
                  Email
                </label>

                <div className="group relative">
                  <User
                    className="
                      absolute
                      left-3
                      top-1/2
                      h-4
                      w-4
                      -translate-y-1/2
                      text-slate-400
                      transition-colors
                      group-focus-within:text-[#1468A8]
                    "
                  />

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    placeholder="Ex : votre@email.com"
                    required
                    autoComplete="email"
                    className="
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      pl-10
                      pr-4
                      text-sm
                      text-slate-700
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-slate-400
                      hover:border-[#1468A8]/40
                      focus:border-[#1468A8]
                      focus:ring-4
                      focus:ring-[#1468A8]/10
                    "
                  />
                </div>
              </div>

              {/* MOT DE PASSE */}

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="
                      text-sm
                      font-semibold
                      text-slate-700
                    "
                  >
                    Mot de passe
                  </label>

                  <button
                    type="button"
                    className="
                      text-xs
                      font-medium
                      text-[#1468A8]
                      transition-colors
                      hover:text-[#0F568D]
                      hover:underline
                    "
                  >
                    Mot de passe oublié ?
                  </button>
                </div>

                <PasswordInput
                  password={password}
                  setPassword={setPassword}
                />
              </div>

              {/* SE SOUVENIR */}

              <div className="flex items-center gap-2">
                <input
                  id="remember"
                  type="checkbox"
                  className="
                    h-4
                    w-4
                    cursor-pointer
                    accent-[#1468A8]
                  "
                />

                <label
                  htmlFor="remember"
                  className="
                    cursor-pointer
                    text-sm
                    text-slate-500
                  "
                >
                  Se souvenir de moi
                </label>
              </div>

              {/* BOUTON */}

              <button
                type="submit"
                disabled={isLoading}
                className="
                  group
                  flex
                  h-12
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#1468A8]
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_8px_20px_rgba(20,104,168,0.20)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#0F568D]
                  hover:shadow-[0_12px_25px_rgba(20,104,168,0.25)]
                  active:translate-y-0
                  disabled:cursor-not-allowed
                  disabled:opacity-70
                  disabled:hover:translate-y-0
                "
              >
                {isLoading ? (
                  <>
                    <span
                      className="
                        h-4
                        w-4
                        animate-spin
                        rounded-full
                        border-2
                        border-white/30
                        border-t-white
                      "
                    />

                    Connexion...
                  </>
                ) : (
                  <>
                    Se connecter

                    <ArrowRight
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </>
                )}
              </button>

              {/* SÉPARATEUR */}

              <div className="flex items-center gap-3 py-1">
                <div className="h-px flex-1 bg-slate-200" />

                <span className="text-xs text-slate-400">
                  Ou continuer avec
                </span>

                <div className="h-px flex-1 bg-slate-200" />
              </div>

              {/* CONNEXION SOCIALE */}

              <div className="grid grid-cols-2 gap-3">
                {/* GOOGLE */}

                <button
                  type="button"
                  className="
                    flex
                    h-11
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    text-sm
                    font-medium
                    text-slate-700
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-[#1468A8]/30
                    hover:bg-[#E6F1FB]
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                  >
                    <path
                      d="M23.766 12.276c0-.818-.074-1.606-.212-2.364H12.24v4.474h6.482a5.54 5.54 0 0 1-2.401 3.633v3.02h3.887c2.275-2.095 3.587-5.176 3.587-8.763z"
                      fill="#4285F4"
                    />

                    <path
                      d="M12.24 24c3.24 0 5.956-1.075 7.943-2.91l-3.887-3.02c-1.077.722-2.455 1.147-4.056 1.147-3.122 0-5.767-2.108-6.71-4.938H1.516v3.101C3.492 21.298 7.575 24 12.24 24z"
                      fill="#34A853"
                    />

                    <path
                      d="M5.53 14.28a7.212 7.212 0 0 1-.376-2.28c0-.79.136-1.56.376-2.28V6.62H1.516A11.99 11.99 0 0 0 .24 12c0 1.936.463 3.77 1.276 5.38l4.014-3.1z"
                      fill="#FBBC05"
                    />

                    <path
                      d="M12.24 4.773c1.762 0 3.344.605 4.588 1.794l3.442-3.442C18.19 1.19 15.476 0 12.24 0 7.575 0 3.492 2.7 1.516 6.62l4.014 3.1c.943-2.83 3.588-4.947 6.71-4.947z"
                      fill="#EA4335"
                    />
                  </svg>

                  Google
                </button>

                {/* APPLE */}

                <button
                  type="button"
                  className="
                    flex
                    h-11
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    text-sm
                    font-medium
                    text-slate-700
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-[#1468A8]/30
                    hover:bg-[#E6F1FB]
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                  >
                    <path
                      d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                      fill="currentColor"
                    />
                  </svg>

                  Apple
                </button>
              </div>

              {/* CRÉATION DE COMPTE */}

              <div className="pt-2 text-center">
                <p className="text-sm text-slate-500">
                  Nouveau sur AutoGuide+ ?

                  <Link
                    to="/register"
                    className="
                      ml-1
                      font-semibold
                      text-[#1468A8]
                      transition-colors
                      hover:text-[#0F568D]
                      hover:underline
                    "
                  >
                    Créer un compte
                  </Link>
                </p>
              </div>

              {/* SÉCURITÉ */}

              <div className="flex items-center justify-center gap-2 pt-2">
                <ShieldCheck
                  className="h-4 w-4 text-[#1468A8]/60"
                />

                <span className="text-xs text-slate-400">
                  Connexion sécurisée AutoGuide+
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// CHAMP MOT DE PASSE
// ============================================================

function PasswordInput({
  password,
  setPassword,
}: {
  password: string
  setPassword: Dispatch<SetStateAction<string>>
}) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="group relative">
      <Lock
        className="
          absolute
          left-3
          top-1/2
          h-4
          w-4
          -translate-y-1/2
          text-slate-400
          transition-colors
          group-focus-within:text-[#1468A8]
        "
      />

      <input
        id="password"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(event) =>
          setPassword(event.target.value)
        }
        placeholder="Votre mot de passe"
        required
        autoComplete="current-password"
        className="
          h-12
          w-full
          rounded-xl
          border
          border-slate-200
          bg-white
          pl-10
          pr-11
          text-sm
          text-slate-700
          outline-none
          transition-all
          duration-300
          placeholder:text-slate-400
          hover:border-[#1468A8]/40
          focus:border-[#1468A8]
          focus:ring-4
          focus:ring-[#1468A8]/10
        "
      />

      <button
        type="button"
        onClick={() =>
          setShowPassword((value) => !value)
        }
        className="
          absolute
          right-3
          top-1/2
          -translate-y-1/2
          text-slate-400
          transition-all
          duration-200
          hover:scale-110
          hover:text-[#1468A8]
        "
        aria-label={
          showPassword
            ? "Masquer le mot de passe"
            : "Afficher le mot de passe"
        }
      >
        {showPassword ? (
          <EyeOff className="h-4 w-4" />
        ) : (
          <Eye className="h-4 w-4" />
        )}
      </button>
    </div>
  )
}
