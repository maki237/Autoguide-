import { Bell, LayoutGrid, Menu, Search, Settings, UserRound } from "lucide-react"
import { useState, type ReactNode } from "react"
import { AdminSidebar } from "./admin-sidebar"

interface AdminLayoutProps {
  children: ReactNode
  breadcrumb?: string[]
}

export function AdminLayout({ children, breadcrumb }: AdminLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <div className="flex min-h-screen">
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-slate-900/30 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              className="h-full w-72 bg-white shadow-xl"
              onClick={(event) => event.stopPropagation()}
            >
              <AdminSidebar />
            </div>
          </div>
        )}

        <AdminSidebar />

        <div className="min-w-0 flex-1">
          {/* ===================================================
              HEADER
          =================================================== */}

          <header className="border-b border-slate-200/80 bg-white px-5 py-4 md:px-8">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="lg:hidden"
                  onClick={() => setMobileMenuOpen(true)}
                  aria-label="Ouvrir le menu"
                >
                  <Menu className="h-5 w-5 text-slate-600" />
                </button>

                <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 sm:flex">
                  <Search className="h-4 w-4 text-slate-400" />
                  <input
                    className="w-64 bg-transparent text-sm outline-none placeholder:text-slate-400"
                    placeholder="Rechercher un utilisateur, garage..."
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Applications"
                  className="hidden h-10 w-10 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 sm:flex"
                >
                  <LayoutGrid className="h-[18px] w-[18px]" />
                </button>

                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setNotificationsOpen((open) => !open)}
                    aria-label="Notifications"
                    className="relative flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100"
                  >
                    <Bell className="h-[18px] w-[18px]" />
                    <span className="absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#F97316] text-[9px] font-bold text-white ring-2 ring-white">
                      2
                    </span>
                  </button>

                  {notificationsOpen && (
                    <div className="absolute right-0 top-12 z-30 w-72 rounded-xl border border-slate-100 bg-white p-3 shadow-xl">
                      <p className="px-2 pb-2 text-xs font-bold text-slate-800">
                        Notifications récentes
                      </p>
                      <div className="space-y-1 text-xs text-slate-600">
                        <p className="rounded-lg bg-amber-50 px-2.5 py-2">
                          12 garages attendent une validation.
                        </p>
                        <p className="rounded-lg bg-blue-50 px-2.5 py-2">
                          3 nouvelles demandes d&apos;assistance.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  aria-label="Paramètres"
                  className="hidden h-10 w-10 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 sm:flex"
                >
                  <Settings className="h-[18px] w-[18px]" />
                </button>

                <button
                  type="button"
                  aria-label="Mon compte"
                  className="ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#1468A8]/10 text-[#1468A8] transition hover:bg-[#1468A8]/15"
                >
                  <UserRound className="h-[18px] w-[18px]" />
                </button>
              </div>
            </div>

            {/* Titre + fil d'Ariane */}

            <div className="mt-5 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="mb-1 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1677C8]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]" />
                  Espace administration
                </div>
                <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  Centre de contrôle
                </h1>
              </div>

              {breadcrumb && breadcrumb.length > 0 && (
                <p className="text-xs text-slate-400">
                  {breadcrumb.join(" / ")}
                </p>
              )}
            </div>
          </header>

          <main className="mx-auto max-w-[1700px] p-4 sm:p-6 md:p-8 lg:p-10">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
