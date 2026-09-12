import { useState } from "react"
import { CheckCircle2, Download, RefreshCw, Server, ShieldCheck } from "lucide-react"
import { AdminLayout } from "@/components/ui/admin-layout"

const initialUpdates = [
  { name: "Service API AutoGuide+", version: "v1.8.2", date: "Aujourd'hui", status: "À installer" },
  { name: "Base de données des garages", version: "v1.4.0", date: "Hier", status: "À installer" },
  { name: "Correctifs de sécurité", version: "v1.3.7", date: "12 août 2026", status: "Installée" },
]

export default function AdminSystemUpdates() {
  const [updates, setUpdates] = useState(initialUpdates)
  const [checking, setChecking] = useState(false)

  const checkForUpdates = () => {
    setChecking(true)
    window.setTimeout(() => setChecking(false), 800)
  }

  const install = (name: string) => {
    setUpdates((current) => current.map((update) => update.name === name ? { ...update, status: "Installée" } : update))
  }

  return (
    <AdminLayout>
      <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div><h2 className="text-xl font-bold text-slate-800 md:text-2xl">Mises à jour système</h2><p className="mt-1 text-sm text-slate-500">Contrôlez l&apos;état des services et appliquez les versions disponibles.</p></div>
        <button type="button" onClick={checkForUpdates} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-600 hover:bg-blue-50 hover:text-[#1468A8]"><RefreshCw className={`h-4 w-4 ${checking ? "animate-spin" : ""}`} /> {checking ? "Vérification..." : "Rechercher des mises à jour"}</button>
      </div>
      <div className="mb-5 grid gap-4 sm:grid-cols-3">
        <StatusCard icon={Server} label="API" value="Opérationnelle" color="text-emerald-600 bg-emerald-50" />
        <StatusCard icon={ShieldCheck} label="Sécurité" value="À jour" color="text-blue-600 bg-blue-50" />
        <StatusCard icon={RefreshCw} label="Mises à jour" value={`${updates.filter((item) => item.status !== "Installée").length} disponible(s)`} color="text-amber-600 bg-amber-50" />
      </div>
      <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
        <div className="divide-y divide-slate-100">
          {updates.map((update) => (
            <div key={update.name} className="flex flex-wrap items-center justify-between gap-3 py-4 first:pt-0 last:pb-0">
              <div><p className="text-sm font-semibold text-slate-800">{update.name}</p><p className="mt-1 text-xs text-slate-400">{update.version} · {update.date}</p></div>
              <div className="flex items-center gap-3"><span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${update.status === "Installée" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>{update.status}</span>{update.status !== "Installée" && <button type="button" onClick={() => install(update.name)} className="inline-flex items-center gap-1.5 rounded-lg bg-[#1468A8] px-3 py-2 text-xs font-semibold text-white hover:bg-[#0F568D]"><Download className="h-3.5 w-3.5" /> Installer</button>}</div>
            </div>
          ))}
        </div>
      </section>
    </AdminLayout>
  )
}

function StatusCard({ icon: Icon, label, value, color }: { icon: typeof Server; label: string; value: string; color: string }) {
  return <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"><div className={`mb-3 flex h-9 w-9 items-center justify-center rounded-lg ${color}`}><Icon className="h-4 w-4" /></div><p className="text-xs text-slate-500">{label}</p><p className="mt-1 text-sm font-bold text-slate-800">{value}</p>{value === "Opérationnelle" && <CheckCircle2 className="mt-2 h-4 w-4 text-emerald-500" />}</div>
}
