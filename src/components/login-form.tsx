import { useState } from "react"
import { cn } from "@/lib/utils"
import logo from "@/assets/LOGO.png"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"

import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

import {
  User,
  Lock,
  Eye,
  EyeOff,
  Sparkles,
  ShieldCheck,
} from "lucide-react"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center",
        className
      )}
      {...props}
    >

      {/* =========================================
          CARD PRINCIPALE
      ========================================== */}

      <Card
        className="
          relative
          z-10
          w-full
          max-w-[460px]
          overflow-hidden
          rounded-[28px]
          border
          border-blue-100
          bg-white/95
          shadow-[0_20px_60px_rgba(30,64,175,0.14)]
          backdrop-blur-sm
          transition-all
          duration-500
          hover:-translate-y-1
          hover:shadow-[0_25px_70px_rgba(30,64,175,0.18)]
          animate-in
          fade-in
          zoom-in-95
          duration-700
        "
      >

        {/* =========================================
            LIGNE SUPÉRIEURE
        ========================================== */}

        <div
          className="
            absolute
            left-0
            right-0
            top-0
            h-[4px]
            bg-gradient-to-r
            from-blue-600
            via-sky-400
            to-blue-700
          "
        />

        {/* =========================================
            CERCLES DÉCORATIFS
        ========================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -right-16
            -top-16
            h-40
            w-40
            rounded-full
            border
            border-blue-100/80
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-4
            -top-4
            h-20
            w-20
            rounded-full
            border
            border-blue-100/70
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-10
            -left-10
            h-28
            w-28
            rounded-full
            bg-blue-50/70
          "
        />

        {/* =========================================
            HEADER
        ========================================== */}

        <CardHeader
          className="
            relative
            z-10
            space-y-3
            bg-gradient-to-b
            from-blue-50/80
            to-transparent
            px-8
            pb-4
            pt-7
            text-center
          "
        >

          {/* LOGO */}

          <div
            className="
              group
              mx-auto
              flex
              h-[68px]
              w-[68px]
              items-center
              justify-center
              rounded-[20px]
              border
              border-blue-100
              bg-white
              shadow-[0_8px_25px_rgba(37,99,235,0.10)]
              transition-all
              duration-500
              hover:-translate-y-1
              hover:rotate-2
              hover:shadow-[0_12px_30px_rgba(37,99,235,0.18)]
            "
          >
            <img
              src={logo}
              alt="AutoGuide+"
              className="
                h-14
                w-14
                object-contain
                transition-transform
                duration-500
                group-hover:scale-110
              "
            />
          </div>

          {/* PETITS POINTS */}

          <div className="flex items-center justify-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-blue-300" />

            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />

            <Sparkles
              className="
                h-4
                w-4
                text-blue-500
                animate-pulse
              "
            />

            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />

            <span className="h-1 w-1 rounded-full bg-blue-300" />
          </div>

          {/* TITRE */}

          <CardTitle
            className="
              text-2xl
              font-bold
              tracking-tight
              text-[#145DA0]
            "
          >
            AutoGuide+
          </CardTitle>

          {/* DESCRIPTION */}

          <CardDescription
            className="
              text-sm
              leading-5
              text-slate-500
            "
          >
            Votre compagnon de route à Yaoundé
          </CardDescription>

        </CardHeader>

        {/* =========================================
            CONTENU DU FORMULAIRE
        ========================================== */}

        <CardContent
          className="
            relative
            z-10
            px-8
            pb-7
            pt-1
          "
        >

          <form>

            <FieldGroup>

              {/* =====================================
                  EMAIL / TÉLÉPHONE
              ====================================== */}

              <Field>

                <FieldLabel
                  htmlFor="email"
                  className="
                    text-sm
                    font-semibold
                    text-slate-700
                  "
                >
                  Email ou Numéro de téléphone
                </FieldLabel>

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
                      duration-200
                      group-focus-within:text-blue-600
                    "
                  />

                  <Input
                    id="email"
                    type="text"
                    placeholder="Ex : 6XXXXXXXXX"
                    className="
                      h-11
                      rounded-xl
                      border-blue-100
                      bg-white/90
                      pl-9
                      text-slate-700
                      transition-all
                      duration-300
                      placeholder:text-slate-400
                      hover:border-blue-200
                      hover:bg-white
                      focus:border-blue-500
                      focus:bg-white
                      focus:ring-4
                      focus:ring-blue-500/10
                    "
                    required
                  />

                </div>

              </Field>

              {/* =====================================
                  MOT DE PASSE
              ====================================== */}

              <Field>

                <FieldLabel
                  htmlFor="password"
                  className="
                    text-sm
                    font-semibold
                    text-slate-700
                  "
                >
                  Mot de passe
                </FieldLabel>

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
                      duration-200
                      group-focus-within:text-blue-600
                    "
                  />

                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="
                      h-11
                      rounded-xl
                      border-blue-100
                      bg-white/90
                      pl-9
                      pr-9
                      text-slate-700
                      transition-all
                      duration-300
                      hover:border-blue-200
                      hover:bg-white
                      focus:border-blue-500
                      focus:bg-white
                      focus:ring-4
                      focus:ring-blue-500/10
                    "
                    required
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((s) => !s)
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
                      hover:text-blue-600
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

              </Field>

              {/* =====================================
                  OPTIONS
              ====================================== */}

              <Field>

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-3
                  "
                >

                  <div className="flex items-center gap-2">

                    <Checkbox
                      id="remember"
                      className="
                        border-blue-200
                        data-[state=checked]:border-blue-600
                        data-[state=checked]:bg-blue-600
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

                  <a
                    href="#"
                    className="
                      text-sm
                      font-medium
                      text-blue-600
                      transition-colors
                      duration-200
                      hover:text-blue-800
                      hover:underline
                    "
                  >
                    Mot de passe oublié ?
                  </a>

                </div>

              </Field>

              {/* =====================================
                  BOUTON
              ====================================== */}

              <Field>

                <Button
                  type="submit"
                  className="
                    group
                    h-11
                    w-full
                    rounded-xl
                    bg-gradient-to-r
                    from-blue-600
                    to-blue-700
                    font-semibold
                    text-white
                    shadow-[0_8px_20px_rgba(37,99,235,0.20)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:from-blue-700
                    hover:to-blue-800
                    hover:shadow-[0_12px_25px_rgba(37,99,235,0.28)]
                    active:translate-y-0
                  "
                >
                  Se connecter

                  <span
                    className="
                      ml-1
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </Button>

              </Field>

              {/* =====================================
                  SÉPARATEUR
              ====================================== */}

              <FieldSeparator
                className="
                  text-xs
                  text-slate-400
                  *:data-[slot=field-separator-content]:bg-white
                "
              >
                Ou continuer avec
              </FieldSeparator>

              {/* =====================================
                  CONNEXION SOCIALE
              ====================================== */}

              <Field className="grid grid-cols-2 gap-3">

                {/* GOOGLE */}

                <Button
                  variant="outline"
                  type="button"
                  className="
                    h-10
                    rounded-xl
                    border-blue-100
                    bg-white
                    text-slate-700
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-blue-200
                    hover:bg-blue-50/50
                    hover:shadow-sm
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

                </Button>

                {/* APPLE */}

                <Button
                  variant="outline"
                  type="button"
                  className="
                    h-10
                    rounded-xl
                    border-blue-100
                    bg-white
                    text-slate-700
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-blue-200
                    hover:bg-blue-50/50
                    hover:shadow-sm
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

                </Button>

              </Field>

              {/* =====================================
                  CRÉER UN COMPTE
              ====================================== */}

            <FieldDescription
              className="
                pt-1
                text-center
                text-sm
                text-slate-500
              "
            >
              Nouveau sur AutoGuide+ ?{" "}

              <Link
                to="/register"
                className="
                  ml-1
                  font-semibold
                  text-blue-600
                  transition-colors
                  duration-200
                  hover:text-blue-800
                  hover:underline
                "
              >
                Créer un compte
              </Link>
            </FieldDescription>
              {/* =====================================
                  NOTE DE SÉCURITÉ
              ====================================== */}

              <div
                className="
                  mt-1
                  flex
                  items-center
                  justify-center
                  gap-1.5
                  text-[11px]
                  text-slate-400
                "
              >
                <ShieldCheck
                  className="
                    h-3.5
                    w-3.5
                    text-blue-400
                  "
                />

                Connexion sécurisée AutoGuide+
              </div>

            </FieldGroup>

          </form>

        </CardContent>

      </Card>

    </div>
  )
}