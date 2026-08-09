import { useState } from "react"
import { cn } from "@/lib/utils"
import logo from "@/assets/LOGO.png"

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
import { User, Lock, Eye, EyeOff } from "lucide-react"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
       <Card className="animate-in fade-in slide-in-from-bottom-4 duration-700">
        <CardHeader className="text-center">
          <div className="mx-auto mb-2 flex h-15 w-15 items-center justify-center rounded-full bg-blue-100">
            <img src={logo} alt="AutoGuide+" className="h-13 w-13" />
          </div>
          <CardTitle className="text-2xl text-blue-700 font-bold">
            AutoGuide+
          </CardTitle>
          <CardDescription>
            Votre compagnon de route à Yaoundé
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">
                  Email ou Numéro de téléphone
                </FieldLabel>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="text"
                    placeholder="Ex: 6XXXXXXXXX"
                    className="pl-9"
                    required
                  />
                </div>
              </Field>

              <Field>
                <FieldLabel htmlFor="password">Mot de passe</FieldLabel>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="pl-9 pr-9"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
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

              <Field>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <label
                      htmlFor="remember"
                      className="text-sm text-gray-600"
                    >
                      Se souvenir de moi
                    </label>
                  </div>
                  
                  <a  href="#"
                    className="text-sm text-blue-700 hover:underline "
                  >
                    Mot de passe oublié ?
                  </a>
                </div>
              </Field>

              <Field>
                <Button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800"
                >
                  Se connecter
                </Button>
              </Field>

              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                Ou continuer avec
              </FieldSeparator>

              <Field className="grid grid-cols-2 gap-3">
                <Button variant="outline" type="button" className="transition-transform hover:scale-[1.02]">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4">
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
                <Button variant="outline" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4">
                    <path
                      d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                      fill="currentColor"
                    />
                  </svg>
                  Apple
                </Button>
              </Field>

              <FieldDescription className="text-center ">
                Nouveau sur AutoGuide+ ?{" "}
                <a href="#" className="text-blue-700 hover:underline  ml-2">
                  Créer un compte
                </a>
              </FieldDescription>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}