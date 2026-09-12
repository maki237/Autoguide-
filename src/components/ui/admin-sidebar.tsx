import {
  LayoutDashboard,
  LogOut,
  MapPin,
  RefreshCw,
  ShieldCheck,
  Users,
  MessageSquare,
} from "lucide-react"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import logo from "@/assets/LOGO.png"

// Liens alignés sur les cas d'utilisation de l'acteur "admin" :
// - consulter tableau de bord
// - gérer compte utilisateurs
// - gérer droit d'accès
// - effectuer mises à jour système
const links = [
  { to: "/admin", label: "Tableau de bord", icon: LayoutDashboard, end: true },
  { to: "/admin/utilisateurs", label: "Utilisateurs", icon: Users },
  { to: "/admin/droits-acces", label: "Droits d'accès", icon: ShieldCheck },
  { to: "/admin/mises-a-jour", label: "Mises à jour système", icon: RefreshCw },
  { to: "/admin?chat=open", label: "Chat Support 💬", icon: MessageSquare },
]

export function AdminSidebar({ mobile = false }: { mobile?: boolean }) {
  const navigate = useNavigate()

  return (
    <aside
      className={`${
        mobile ? "flex" : "hidden lg:flex"
      } sticky top-0 h-screen min-h-screen w-[280px] shrink-0 flex-col overflow-y-auto border-r border-slate-200 bg-white px-4 py-6`}
    >
      <div className="px-3 pb-5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1677C8] shadow-lg shadow-blue-950/30">
            <img src={logo} alt="AutoGuide+" className="h-9 w-9 object-contain" />
          </div>
          <div>
            <p className="font-bold tracking-tight text-slate-900">
              AutoGuide<span className="text-[#1468A8]">+</span>
            </p>
            <p className="text-[10px] text-slate-500">Espace administration</p>
          </div>
        </div>
      </div>

      <div className="mb-5 rounded-2xl border border-slate-200 bg-slate-50 p-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#45B7FF]/15 text-xs font-bold text-[#7DD3FC]">
            AP
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900">Admin Principal</p>
            <p className="mt-0.5 text-[11px] text-emerald-600">Compte vérifié</p>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-500">
          <MapPin className="h-3.5 w-3.5" />
          <span>Yaoundé, Cameroun</span>
        </div>
      </div>

      <nav className="flex-1 space-y-1.5" aria-label="Administration">
        <p className="px-4 pb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
          Pilotage
        </p>
        {links.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
                isActive
                  ? "bg-[#1677C8] font-semibold text-white shadow-md shadow-blue-200/40"
                  : "text-slate-600 hover:bg-blue-50 hover:text-[#1468A8]"
              }`
            }
          >
            <Icon className="h-4 w-4" />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-slate-200 pt-4">
        <button
          type="button"
          onClick={() => {
            localStorage.removeItem("user")
            localStorage.removeItem("token")
            localStorage.removeItem("access_token")
            navigate("/login")
          }}
          className="flex w-full items-center gap-2 px-1 text-xs text-slate-600 transition hover:text-[#1468A8]"
        >
          <LogOut className="h-3.5 w-3.5" />
          Déconnexion
        </button>
      </div>
    </aside>
  )
}
