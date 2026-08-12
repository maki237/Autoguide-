import { LoginForm } from "@/components/login-form"
import carte from "@/assets/carte.webp"

export default function LoginPage() {
  return (
    <div className="relative flex min-h-svh items-center justify-center overflow-hidden bg-slate-50 p-6 md:p-10">

      {/* =========================================
          IMAGE DE FOND : CARTE
      ========================================== */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: `url(${carte})`,
        }}
      />

      {/* =========================================
          VOILE BLANC
          Rend la carte discrète
      ========================================== */}
      <div className="absolute inset-0 bg-white/85" />

      {/* =========================================
          LÉGÈRE TEINTE BLEUE
      ========================================== */}
      <div className="absolute inset-0 bg-blue-50/20" />

      {/* =========================================
          FORMULAIRE
      ========================================== */}
      <div className="relative z-10 w-full max-w-[460px]">
        <LoginForm />
      </div>

    </div>
  )
}