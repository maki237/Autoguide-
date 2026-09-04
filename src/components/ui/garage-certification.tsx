import {
  ShieldCheck,
  CheckCircle2,
} from "lucide-react"

export function GarageCertification() {
  return (
    <section className="flex flex-col items-center justify-center rounded-2xl border border-blue-100 bg-[#E6F1FB] p-6 text-center">

      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF3DE] text-[#639922]">
        <ShieldCheck size={34} />
      </div>

      <h2 className="mt-4 text-lg font-bold text-slate-900">
        Garage certifié
      </h2>

      <p className="mt-2 text-sm leading-5 text-slate-500">
        Votre garage est reconnu et vérifié par AutoGuide+.
      </p>

      <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#639922]">
        <CheckCircle2 size={14} />
        Profil vérifié
      </span>

    </section>
  )
}