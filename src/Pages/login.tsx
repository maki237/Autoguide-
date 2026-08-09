
import { LoginForm } from "@/components/login-form"
import carte from "@/assets/carte.webp"

export default function LoginPage() {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center gap-6 overflow-hidden bg-slate-50 p-6 md:p-10">
      {/* Calque image de fond, opacité réduite */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${carte})` }}
      />

      {/* Contenu au-dessus, totalement opaque */}
      <div className="relative z-10 flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium text-blue-700">
        </a>
        <LoginForm />
      </div>
    </div>
  )
}