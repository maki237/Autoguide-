import { useState } from "react"
import type { ReactNode } from "react"
import {
  AlertTriangle,
  ArrowLeft,
  Bell,
  Check,
  CheckCircle2,
  Headphones,
  History,
  Mail,
  MessageSquare,
  Phone,
  Save,
  Settings,
  ShieldCheck,
  Wrench,
} from "lucide-react"

type GaragisteModulePageProps = {
  page: string
  onBack: () => void
}

const interventions = [
  { id: 1, client: "Marie L.", problem: "Batterie", place: "Bastos, Yaoundé", status: "Nouvelle", time: "Il y a 8 min" },
  { id: 2, client: "Paul B.", problem: "Crevaison", place: "Mvan, Yaoundé", status: "En cours", time: "Il y a 24 min" },
  { id: 3, client: "Kevin M.", problem: "Surchauffe", place: "Essos, Yaoundé", status: "Terminée", time: "Hier" },
]

export function GaragisteModulePage({ page, onBack }: GaragisteModulePageProps) {
  const [completed, setCompleted] = useState<number[]>([])
  const [notifications, setNotifications] = useState([
    "Une nouvelle demande d'intervention est disponible à Bastos.",
    "Votre profil a été consulté par un automobiliste.",
    "Votre certification AutoGuide+ est toujours valide.",
  ])
  const [available, setAvailable] = useState(true)
  const [saved, setSaved] = useState(false)
  const [messageSent, setMessageSent] = useState(false)

  const completeIntervention = (id: number) => {
    setCompleted((current) => (current.includes(id) ? current : [...current, id]))
  }

  if (page === "missions") {
    return (
      <ModuleShell title="Mes interventions" description="Suivez vos demandes acceptées et mettez leur statut à jour." icon={Wrench} onBack={onBack}>
        <div className="grid gap-4 lg:grid-cols-2">
          {interventions.map((item) => {
            const isCompleted = completed.includes(item.id) || item.status === "Terminée"
            return (
              <article key={item.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold text-slate-900">{item.problem} · {item.client}</p>
                    <p className="mt-1 text-xs text-slate-500">{item.place} · {item.time}</p>
                  </div>
                  <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${isCompleted ? "bg-emerald-50 text-emerald-700" : "bg-blue-50 text-blue-700"}`}>
                    {isCompleted ? "Terminée" : item.status}
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <a href={`tel:+237600000000`} className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50">
                    <Phone className="h-3.5 w-3.5" /> Appeler
                  </a>
                  {!isCompleted && (
                    <button type="button" onClick={() => completeIntervention(item.id)} className="inline-flex items-center gap-2 rounded-lg bg-[#1468A8] px-3 py-2 text-xs font-semibold text-white hover:bg-[#0F568D]">
                      <Check className="h-3.5 w-3.5" /> Marquer terminée
                    </button>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </ModuleShell>
    )
  }

  if (page === "historique") {
    return (
      <ModuleShell title="Historique des interventions" description="Retrouvez les interventions réalisées par votre garage." icon={History} onBack={onBack}>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full min-w-[620px] text-left text-sm">
            <thead className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-400">
              <tr><th className="px-5 py-4">Intervention</th><th className="px-5 py-4">Lieu</th><th className="px-5 py-4">Date</th><th className="px-5 py-4">Statut</th></tr>
            </thead>
            <tbody>
              {interventions.map((item) => (
                <tr key={item.id} className="border-b border-slate-50 last:border-0">
                  <td className="px-5 py-4 font-semibold text-slate-700">{item.problem} · {item.client}</td>
                  <td className="px-5 py-4 text-slate-500">{item.place}</td>
                  <td className="px-5 py-4 text-slate-500">{item.time}</td>
                  <td className="px-5 py-4"><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">Terminée</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ModuleShell>
    )
  }

  if (page === "notifications") {
    return (
      <ModuleShell title="Notifications et alertes" description="Consultez les informations importantes de votre espace partenaire." icon={Bell} onBack={onBack}>
        <div className="space-y-3">
          {notifications.length > 0 ? notifications.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4">
              <div className="rounded-xl bg-blue-50 p-2 text-[#1468A8]"><Bell className="h-4 w-4" /></div>
              <p className="flex-1 text-sm text-slate-600">{item}</p>
              <button type="button" onClick={() => setNotifications((current) => current.filter((notification) => notification !== item))} className="text-xs font-semibold text-slate-400 hover:text-[#1468A8]">Lu</button>
            </div>
          )) : <EmptyState text="Toutes vos notifications ont été traitées." />}
        </div>
      </ModuleShell>
    )
  }

  if (page === "parametres") {
    return (
      <ModuleShell title="Paramètres" description="Gérez vos préférences et la disponibilité de votre garage." icon={Settings} onBack={onBack}>
        <div className="max-w-2xl space-y-4">
          <SettingRow title="Recevoir les demandes" description="Autoriser AutoGuide+ à vous proposer de nouvelles interventions.">
            <button type="button" onClick={() => setAvailable((value) => !value)} className={`relative h-6 w-11 rounded-full transition ${available ? "bg-[#1468A8]" : "bg-slate-300"}`} aria-pressed={available}>
              <span className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${available ? "left-6" : "left-1"}`} />
            </button>
          </SettingRow>
          <SettingRow title="Notifications email" description="Recevoir un récapitulatif des demandes par email.">
            <input type="checkbox" defaultChecked className="h-4 w-4 accent-[#1468A8]" />
          </SettingRow>
          <button type="button" onClick={() => setSaved(true)} className="inline-flex items-center gap-2 rounded-xl bg-[#1468A8] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0F568D]">
            {saved ? <CheckCircle2 className="h-4 w-4" /> : <Save className="h-4 w-4" />} {saved ? "Paramètres enregistrés" : "Enregistrer"}
          </button>
        </div>
      </ModuleShell>
    )
  }

  if (page === "support") {
    return (
      <ModuleShell title="Support AutoGuide+" description="Contactez notre équipe pour obtenir de l'aide sur votre espace garagiste." icon={Headphones} onBack={onBack}>
        <div className="grid gap-4 md:grid-cols-3">
          <a href="tel:+237600000000" className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-200 hover:bg-blue-50/50"><Phone className="h-5 w-5 text-[#1468A8]" /><p className="mt-3 font-semibold text-slate-800">Appeler le support</p><p className="mt-1 text-xs text-slate-500">Lun–Sam · 8h–18h</p></a>
          <a href="mailto:support@autoguide.cm" className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-200 hover:bg-blue-50/50"><Mail className="h-5 w-5 text-[#1468A8]" /><p className="mt-3 font-semibold text-slate-800">Envoyer un email</p><p className="mt-1 text-xs text-slate-500">support@autoguide.cm</p></a>
          <button type="button" onClick={() => setMessageSent(true)} className="text-left rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-200 hover:bg-blue-50/50"><MessageSquare className="h-5 w-5 text-[#1468A8]" /><p className="mt-3 font-semibold text-slate-800">{messageSent ? "Demande envoyée" : "Ouvrir une demande"}</p><p className="mt-1 text-xs text-slate-500">{messageSent ? "Notre équipe reviendra vers vous." : "Réponse sous 24 heures"}</p></button>
        </div>
      </ModuleShell>
    )
  }

  return (
    <ModuleShell title="Assistance urgente" description="Utilisez cette page si vous devez signaler une situation urgente." icon={AlertTriangle} onBack={onBack}>
      <div className="max-w-2xl rounded-2xl border border-red-100 bg-red-50 p-6">
        <div className="flex items-start gap-3">
          <div className="rounded-xl bg-white p-3 text-red-600"><AlertTriangle className="h-5 w-5" /></div>
          <div><h2 className="font-bold text-slate-900">Besoin d'une intervention prioritaire ?</h2><p className="mt-1 text-sm leading-6 text-slate-600">Contactez immédiatement le support AutoGuide+ afin de sécuriser la situation et organiser l'assistance.</p></div>
        </div>
        <a href="tel:+237600000000" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700"><Phone className="h-4 w-4" /> Appeler le support urgence</a>
      </div>
    </ModuleShell>
  )
}

function ModuleShell({ title, description, icon: Icon, onBack, children }: { title: string; description: string; icon: typeof Wrench; onBack: () => void; children: ReactNode }) {
  return (
    <section>
      <button type="button" onClick={onBack} className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#1468A8]"><ArrowLeft className="h-4 w-4" /> Retour au tableau de bord</button>
      <div className="mb-7 flex items-start gap-4">
        <div className="rounded-2xl bg-blue-50 p-3 text-[#1468A8]"><Icon className="h-6 w-6" /></div>
        <div><h1 className="text-3xl font-bold tracking-tight text-slate-900">{title}</h1><p className="mt-2 text-sm text-slate-500">{description}</p></div>
      </div>
      {children}
    </section>
  )
}

function SettingRow({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5"><div><p className="font-semibold text-slate-800">{title}</p><p className="mt-1 text-xs text-slate-500">{description}</p></div>{children}</div>
}

function EmptyState({ text }: { text: string }) {
  return <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-10 text-center text-sm text-slate-500"><ShieldCheck className="mx-auto h-6 w-6 text-emerald-500" /><p className="mt-3">{text}</p></div>
}
