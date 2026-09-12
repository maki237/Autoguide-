import { useState } from "react"
import type { FormEvent } from "react"
import { toast } from "sonner"

interface StoredUser {
  fullName?: string
  name?: string
  email?: string
  phone?: string
  role?: string
}

function loadUser(): StoredUser {
  try {
    const raw = localStorage.getItem("user")
    return raw ? (JSON.parse(raw) as StoredUser) : {}
  } catch {
    return {}
  }
}

export function ProfileSection() {
  const [user] = useState<StoredUser>(() => loadUser())

  const [fullName, setFullName] = useState(user.fullName || user.name || "")
  const [email, setEmail] = useState(user.email || "")
  const [phone, setPhone] = useState(user.phone || "")
  const [isSaving, setIsSaving] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!fullName.trim() || !email.trim()) {
      toast.error("Le nom et l'email sont requis.")
      return
    }

    setIsSaving(true)

    try {
      // À remplacer par un appel à ton endpoint FastAPI dès qu'il
      // sera disponible (ex: PATCH /api/users/me)
      const updatedUser = {
        ...user,
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
      }

      localStorage.setItem("user", JSON.stringify(updatedUser))
      toast.success("Profil mis à jour")
    } catch {
      toast.error("Impossible de mettre à jour le profil.")
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-slate-700">
          Nom complet
        </label>
        <input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          disabled={isSaving}
          className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-[#1468A8] focus:ring-4 focus:ring-[#1468A8]/10 disabled:bg-slate-50"
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium text-slate-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSaving}
          className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-[#1468A8] focus:ring-4 focus:ring-[#1468A8]/10 disabled:bg-slate-50"
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium text-slate-700">
          Téléphone
        </label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          disabled={isSaving}
          placeholder="Optionnel"
          className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-[#1468A8] focus:ring-4 focus:ring-[#1468A8]/10 disabled:bg-slate-50"
        />
      </div>

      {user.role && (
        <p className="text-xs text-slate-400">
          Type de compte : {user.role === "AUTOMOBILISTE" ? "Automobiliste" : user.role}
        </p>
      )}

      <button
        type="submit"
        disabled={isSaving}
        className="w-full rounded-xl bg-[#1468A8] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#105B91] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSaving ? "Enregistrement..." : "Enregistrer les modifications"}
      </button>
    </form>
  )
}
