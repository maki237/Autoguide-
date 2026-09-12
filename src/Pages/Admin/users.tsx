import { ChevronLeft, ChevronRight, Plus, Search, UserRound, X } from "lucide-react"
import { useMemo, useState, type FormEvent } from "react"
import { AdminLayout } from "@/components/ui/admin-layout"

type User = {
  name: string
  email: string
  role: "Automobiliste" | "Garagiste"
  date: string
  activity: string
  status: "Actif" | "Inactif" | "Suspendu"
}

const initialUsers: User[] = [
  { name: "Marie Claire", email: "marie.claire@email.com", role: "Automobiliste", date: "12 Oct 2023", activity: "Il y a 2 h", status: "Actif" },
  { name: "Luc Martin", email: "luc.martin@email.com", role: "Garagiste", date: "06 Nov 2022", activity: "Hier", status: "Actif" },
  { name: "Paul Dubois", email: "p.dubois@email.com", role: "Automobiliste", date: "22 Jan 2024", activity: "Il y a 1 an", status: "Inactif" },
  { name: "Sophie Thomas", email: "sophie.thomas@email.com", role: "Automobiliste", date: "10 Fév 2024", activity: "Il y a 3 jours", status: "Suspendu" },
]

export default function AdminUsers() {
  const [allUsers, setAllUsers] = useState(initialUsers)
  const [query, setQuery] = useState("")
  const [role, setRole] = useState("Tous")
  const [status, setStatus] = useState("Tous")
  const [page, setPage] = useState(1)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [addOpen, setAddOpen] = useState(false)
  const pageSize = 3

  const filteredUsers = useMemo(() => allUsers.filter((user) => {
    const matchesQuery = `${user.name} ${user.email}`.toLowerCase().includes(query.toLowerCase())
    return matchesQuery && (role === "Tous" || user.role === role) && (status === "Tous" || user.status === status)
  }), [allUsers, query, role, status])

  const pageCount = Math.max(1, Math.ceil(filteredUsers.length / pageSize))
  const visibleUsers = filteredUsers.slice((page - 1) * pageSize, page * pageSize)
  const updateFilters = (setter: (value: string) => void, value: string) => {
    setter(value)
    setPage(1)
  }

  const addUser = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get("name") || "").trim()
    const email = String(data.get("email") || "").trim()
    const newUser: User = { name, email, role: data.get("role") as User["role"], date: "Aujourd'hui", activity: "Jamais", status: "Actif" }
    setAllUsers((current) => [newUser, ...current])
    setAddOpen(false)
    event.currentTarget.reset()
  }

  return (
    <AdminLayout>
      <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-lg font-bold text-slate-800 md:text-xl">Gestion des utilisateurs</h2>
          <p className="mt-1 text-sm text-slate-500">Consultez, filtrez et gérez les comptes AutoGuide+.</p>
        </div>
        <button onClick={() => setAddOpen(true)} className="flex w-fit items-center gap-2 rounded-xl bg-[#1677C8] px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-blue-900/10 transition hover:-translate-y-0.5 hover:bg-[#145DA0]">
          <Plus className="h-4 w-4" /> Ajouter un utilisateur
        </button>
      </div>

      <section className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
        <div className="flex flex-col gap-3 border-b border-slate-100 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 sm:w-72">
            <Search className="h-4 w-4 text-slate-400" />
            <input value={query} onChange={(event) => updateFilters(setQuery, event.target.value)} placeholder="Rechercher par nom ou email" className="w-full bg-transparent text-xs outline-none placeholder:text-slate-400" />
          </div>
          <div className="flex gap-2">
            <select value={role} onChange={(event) => updateFilters(setRole, event.target.value)} className="rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-600 outline-none">
              <option>Tous</option><option>Automobiliste</option><option>Garagiste</option>
            </select>
            <select value={status} onChange={(event) => updateFilters(setStatus, event.target.value)} className="rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-600 outline-none">
              <option>Tous</option><option>Actif</option><option>Inactif</option><option>Suspendu</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left">
            <thead><tr className="border-b border-slate-100 text-[10px] uppercase tracking-wide text-slate-400"><th className="px-2 py-3 font-semibold">Utilisateur</th><th className="px-2 py-3 font-semibold">Rôle</th><th className="px-2 py-3 font-semibold">Date d&apos;inscription</th><th className="px-2 py-3 font-semibold">Dernière activité</th><th className="px-2 py-3 font-semibold">Statut</th><th className="px-2 py-3 font-semibold">Actions</th></tr></thead>
            <tbody>
              {visibleUsers.map((user) => (
                <tr key={user.email} className="border-b border-slate-50 text-xs text-slate-600 last:border-0 hover:bg-slate-50/70">
                  <td className="px-2 py-3"><div className="flex items-center gap-2"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600"><UserRound className="h-3.5 w-3.5" /></div><div><p className="font-semibold text-slate-700">{user.name}</p><p className="text-[10px] text-slate-400">{user.email}</p></div></div></td>
                  <td className="px-2 py-3"><span className="rounded-full bg-blue-50 px-2 py-1 text-[10px] text-blue-600">{user.role}</span></td>
                  <td className="px-2 py-3">{user.date}</td><td className="px-2 py-3">{user.activity}</td>
                  <td className="px-2 py-3"><span className={`rounded-full px-2 py-1 text-[10px] ${user.status === "Actif" ? "bg-green-50 text-green-600" : user.status === "Suspendu" ? "bg-red-50 text-red-600" : "bg-slate-100 text-slate-500"}`}>{user.status}</span></td>
                  <td className="px-2 py-3"><button onClick={() => setSelectedUser(user)} className="rounded-md px-2 py-1 text-xs font-semibold text-[#1468A8] transition hover:bg-blue-50">Voir</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          {visibleUsers.length === 0 && <p className="py-10 text-center text-sm text-slate-400">Aucun utilisateur ne correspond à ces critères.</p>}
        </div>

        <div className="mt-4 flex items-center justify-between text-[10px] text-slate-400">
          <span>{filteredUsers.length} utilisateur(s) trouvé(s)</span>
          <div className="flex items-center gap-1">
            <button disabled={page === 1} onClick={() => setPage((current) => current - 1)} className="rounded border border-slate-200 p-1.5 disabled:cursor-not-allowed disabled:opacity-40"><ChevronLeft className="h-3.5 w-3.5" /></button>
            <span className="rounded bg-[#1468A8] px-2.5 py-1.5 font-semibold text-white">{page} / {pageCount}</span>
            <button disabled={page === pageCount} onClick={() => setPage((current) => current + 1)} className="rounded border border-slate-200 p-1.5 disabled:cursor-not-allowed disabled:opacity-40"><ChevronRight className="h-3.5 w-3.5" /></button>
          </div>
        </div>
      </section>

      {(selectedUser || addOpen) && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/30 p-4" onClick={() => { setSelectedUser(null); setAddOpen(false) }}>
          {selectedUser && <div className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-xl" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-start justify-between"><div><p className="text-lg font-bold text-slate-800">{selectedUser.name}</p><p className="text-xs text-slate-400">{selectedUser.email}</p></div><button onClick={() => setSelectedUser(null)} aria-label="Fermer" className="rounded-lg p-1 text-slate-400 hover:bg-slate-100"><X className="h-4 w-4" /></button></div>
            <div className="mt-5 grid grid-cols-2 gap-3 text-xs"><div className="rounded-lg bg-slate-50 p-3"><p className="text-slate-400">Rôle</p><p className="mt-1 font-semibold text-slate-700">{selectedUser.role}</p></div><div className="rounded-lg bg-slate-50 p-3"><p className="text-slate-400">Statut</p><p className="mt-1 font-semibold text-slate-700">{selectedUser.status}</p></div></div>
          </div>}
          {addOpen && <form onSubmit={addUser} onClick={(event) => event.stopPropagation()} className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-xl">
            <div className="mb-4 flex items-center justify-between"><h3 className="font-bold text-slate-800">Ajouter un utilisateur</h3><button type="button" onClick={() => setAddOpen(false)} aria-label="Fermer" className="text-slate-400"><X className="h-4 w-4" /></button></div>
            <div className="space-y-3"><input name="name" required placeholder="Nom complet" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#1677C8]" /><input name="email" required type="email" placeholder="Adresse email" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#1677C8]" /><select name="role" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none"><option>Automobiliste</option><option>Garagiste</option></select></div>
            <button type="submit" className="mt-5 w-full rounded-lg bg-[#1677C8] py-2.5 text-sm font-semibold text-white hover:bg-[#145DA0]">Créer le compte</button>
          </form>}
        </div>
      )}
    </AdminLayout>
  )
}
