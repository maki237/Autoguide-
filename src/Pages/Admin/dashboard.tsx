import { AlertTriangle, Building2, CheckCircle2, Users, ShieldCheck, Activity, FileText, MessageSquare } from "lucide-react"
import { motion } from "motion/react"
import { useState } from "react"
import { AdminLayout } from "@/components/ui/admin-layout"
import { LiveChatWidget } from "@/components/ui/LiveChatWidget"

const breakdowns = [
  { id: 1, title: "Moteur surchauffé", client: "Sophie M.", location: "N104, Km 12", status: "En attente", color: "border-amber-500 bg-amber-50/40 text-amber-700" },
  { id: 2, title: "Crevaison pneu droit", client: "Thomas D.", location: "Autoroute A6", status: "En cours", color: "border-blue-500 bg-blue-50/40 text-blue-700" },
  { id: 3, title: "Batterie à plat", client: "Laurent P.", location: "Centre-ville", status: "Résolu", color: "border-emerald-500 bg-emerald-50/40 text-emerald-700" },
  { id: 4, title: "Problème freinage", client: "Emma R.", location: "Avenue de France", status: "Résolu", color: "border-emerald-500 bg-emerald-50/40 text-emerald-700" },
]

function Metric({
  icon: Icon,
  label,
  value,
  note,
  color,
}: {
  icon: typeof Users
  label: string
  value: string
  note: string
  color: string
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-2xl border border-slate-100/80 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5"
    >
      <div className="flex items-start justify-between">
        <span className={`rounded-xl p-2.5 ${color}`}>
          <Icon className="h-5 w-5" />
        </span>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-500">{note}</span>
      </div>
      <p className="mt-4 text-xs font-medium text-slate-500">{label}</p>
      <p className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900">{value}</p>
    </motion.div>
  )
}

export default function AdminDashboard() {
  const [period, setPeriod] = useState("Cette semaine")
  const [pendingGarages, setPendingGarages] = useState([
    { id: 1, name: "Garage Moderne Auto", city: "Yaoundé", owner: "Jean Dupont", docCount: 3 },
    { id: 2, name: "Meca Rapid Services", city: "Douala", owner: "Alain Nkou", docCount: 4 },
  ])
  const [showChat, setShowChat] = useState(false)

  return (
    <AdminLayout breadcrumb={["Tableau de bord"]}>
      {/* Top Banner */}
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 rounded-2xl text-white shadow-xl">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-extrabold tracking-tight md:text-2xl text-white">
              Administration Autoguide
            </h2>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300 border border-emerald-500/30">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Système 100% Opérationnel
            </span>
          </div>
          <p className="mt-1 text-xs sm:text-sm text-slate-300/80">
            Supervisez les urgences mécaniques, validez les garages partenaires et modérez la plateforme.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowChat(true)}
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-semibold text-white shadow-lg transition-all hover:bg-indigo-500 hover:scale-105 active:scale-95"
          >
            <MessageSquare className="h-4 w-4" /> Support Live Chat
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Metric icon={Users} label="Utilisateurs Actifs" value="12 450" note="+5.2% ce mois" color="bg-blue-50 text-blue-600" />
        <Metric icon={Building2} label="Garages Partenaires" value="382" note={`${pendingGarages.length} à valider`} color="bg-indigo-50 text-indigo-600" />
        <Metric icon={AlertTriangle} label="Interventions SOS en cours" value="45" note="En direct" color="bg-rose-50 text-rose-600" />
        <Metric icon={CheckCircle2} label="Taux de Satisfaction" value="4.8/5" note="98.5% résolus" color="bg-emerald-50 text-emerald-600" />
      </div>

      {/* Main Content Grid */}
      <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_0.85fr]">
        {/* Activity Chart Section */}
        <section className="rounded-2xl border border-slate-100/80 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Activity className="h-4 w-4 text-indigo-600" /> Volume d&apos;activité des pannes
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">Nombre d&apos;interventions signalées par jour</p>
            </div>
            <select
              value={period}
              onChange={(event) => setPeriod(event.target.value)}
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 outline-none focus:ring-2 focus:ring-indigo-500/20"
            >
              <option>Cette semaine</option>
              <option>Ce mois</option>
            </select>
          </div>

          <div className="mt-6 flex h-48 items-end justify-around gap-3 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/50 p-6">
            {[45, 62, 85, 94, 78, 52, 68].map((height, index) => (
              <div key={index} className="group relative flex flex-1 flex-col items-center h-full justify-end">
                <div className="absolute -top-7 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-[10px] rounded px-2 py-0.5 font-bold">
                  {height} pannes
                </div>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ delay: index * 0.06, duration: 0.5 }}
                  className="w-full max-w-10 rounded-t-lg bg-gradient-to-t from-indigo-600 to-blue-500 shadow-md group-hover:from-indigo-500 group-hover:to-cyan-400 transition-all"
                />
              </div>
            ))}
          </div>

          <div className="mt-3 flex justify-around text-xs font-medium text-slate-400">
            <span>Lun</span>
            <span>Mar</span>
            <span>Mer</span>
            <span>Jeu</span>
            <span>Ven</span>
            <span>Sam</span>
            <span>Dim</span>
          </div>
        </section>

        {/* Live Breakdowns Monitor */}
        <section className="rounded-2xl border border-slate-100/80 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-rose-500" /> Pannes signalées récentes
            </h3>
            <span className="text-xs font-semibold text-indigo-600 hover:underline cursor-pointer">Tout voir</span>
          </div>

          <div className="space-y-3">
            {breakdowns.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-slate-100 bg-slate-50/60 p-3.5 transition-all hover:bg-slate-100/80 hover:shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800">{item.title}</span>
                  <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${item.color}`}>
                    {item.status}
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Client: <strong className="text-slate-700">{item.client}</strong></span>
                  <span>📍 {item.location}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Pending Garage Approvals */}
      <section className="mt-6 rounded-2xl border border-slate-100/80 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-indigo-600" /> Demandes de validation de Garages
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">Vérifiez les pièces justificatives des garagistes pour agréer leur compte</p>
          </div>
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
            {pendingGarages.length} dossier(s) en attente
          </span>
        </div>

        {pendingGarages.length === 0 ? (
          <div className="py-12 text-center text-xs font-medium text-emerald-600">
            ✅ Tous les garages partenaires ont été validés !
          </div>
        ) : (
          <div className="mt-4 divide-y divide-slate-100">
            {pendingGarages.map((garage) => (
              <div
                key={garage.id}
                className="flex flex-wrap items-center justify-between gap-4 py-4"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 font-bold">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">{garage.name}</h4>
                    <p className="text-xs text-slate-500">
                      Propriétaire: {garage.owner} · Ville: <strong>{garage.city}</strong>
                    </p>
                    <span className="mt-1 inline-flex items-center gap-1 text-[11px] font-medium text-slate-400">
                      <FileText className="h-3 w-3 text-indigo-500" /> {garage.docCount} documents fournis (Kbis, Assurance)
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    Examiner dossier
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setPendingGarages((current) => current.filter((item) => item.id !== garage.id))
                    }
                    className="rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2 text-xs font-semibold text-white shadow-md hover:from-emerald-500 hover:to-teal-500 transition-all"
                  >
                    Approuver et Agréer
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Widget Live Chat */}
      <LiveChatWidget
        currentUserId="adm-1"
        currentUserName="Admin Autoguide"
        currentUserRole="admin"
        isOpenDefault={showChat}
        onClose={() => setShowChat(false)}
      />
    </AdminLayout>
  )
}

