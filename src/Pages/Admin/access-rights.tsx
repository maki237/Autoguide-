import { useState } from "react"
import { Check, ShieldCheck, UserRound } from "lucide-react"
import { AdminLayout } from "@/components/ui/admin-layout"

type Role = "Administrateur" | "Garagiste" | "Automobiliste"

const permissions = [
  "Consulter le tableau de bord",
  "Gérer les utilisateurs",
  "Gérer les garages",
  "Traiter les interventions",
  "Modifier les paramètres système",
]

const initialAccess: Record<Role, string[]> = {
  Administrateur: [...permissions],
  Garagiste: ["Consulter le tableau de bord", "Traiter les interventions"],
  Automobiliste: ["Consulter le tableau de bord"],
}

export default function AdminAccessRights() {
  const [activeRole, setActiveRole] = useState<Role>("Administrateur")
  const [access, setAccess] = useState(initialAccess)
  const [saved, setSaved] = useState(false)

  const togglePermission = (permission: string) => {
    setAccess((current) => {
      const currentPermissions = current[activeRole]
      const nextPermissions = currentPermissions.includes(permission)
        ? currentPermissions.filter((item) => item !== permission)
        : [...currentPermissions, permission]
      return { ...current, [activeRole]: nextPermissions }
    })
    setSaved(false)
  }

  return (
    <AdminLayout>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800 md:text-2xl">Droits d&apos;accès</h2>
        <p className="mt-1 text-sm text-slate-500">Définissez les fonctionnalités accessibles à chaque type de compte.</p>
      </div>
      <div className="grid gap-5 lg:grid-cols-[260px_1fr]">
        <section className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm">
          <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wide text-slate-400">Rôles</p>
          {(["Administrateur", "Garagiste", "Automobiliste"] as Role[]).map((role) => (
            <button key={role} type="button" onClick={() => { setActiveRole(role); setSaved(false) }} className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold transition ${activeRole === role ? "bg-blue-50 text-[#1468A8]" : "text-slate-600 hover:bg-slate-50"}`}>
              <UserRound className="h-4 w-4" /> {role}
            </button>
          ))}
        </section>
        <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
            <div><h3 className="font-bold text-slate-800">{activeRole}</h3><p className="mt-1 text-xs text-slate-500">Permissions attribuées à ce rôle.</p></div>
            <ShieldCheck className="h-5 w-5 text-[#1468A8]" />
          </div>
          <div className="divide-y divide-slate-100">
            {permissions.map((permission) => {
              const enabled = access[activeRole].includes(permission)
              return <button key={permission} type="button" onClick={() => togglePermission(permission)} className="flex w-full items-center justify-between gap-3 py-4 text-left text-sm text-slate-700"><span>{permission}</span><span className={`flex h-5 w-5 items-center justify-center rounded-md border ${enabled ? "border-[#1468A8] bg-[#1468A8] text-white" : "border-slate-300 bg-white"}`}>{enabled && <Check className="h-3.5 w-3.5" />}</span></button>
            })}
          </div>
          <button type="button" onClick={() => setSaved(true)} className="mt-5 rounded-xl bg-[#1468A8] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0F568D]">{saved ? "Droits enregistrés" : "Enregistrer les droits"}</button>
        </section>
      </div>
    </AdminLayout>
  )
}
