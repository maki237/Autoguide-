import { useState } from "react"
import { useNavigate } from "react-router-dom"

import {
  ClipboardList,
  Wrench,
  CheckCircle2,
  Star,
  MapPin,
  Clock3,
  ShieldCheck,
  TrendingUp,
  Bell,
} from "lucide-react"

import { GaragisteSidebar } from "@/components/ui/garagiste-sidebar"
import { GaragisteHeader } from "@/components/ui/garagiste-header"
import { StatCard } from "@/components/ui/stat-card"
import { DemandeList } from "@/components/ui/demande-list"
import { Notification } from "@/components/ui/notification"
import { GarageProfileSection } from "@/components/ui/garage-profile-section"
import { GaragisteModulePage } from "@/components/ui/garagiste-module-page"
import { LiveChatWidget } from "@/components/ui/LiveChatWidget"

export default function GaragisteDashboard() {
  /* =====================================================
     ÉTATS
  ===================================================== */

  const [available, setAvailable] = useState(true)

  const [notification, setNotification] = useState("")

  const [activePage, setActivePage] = useState("dashboard")
  const navigate = useNavigate()

  /* =====================================================
     NOTIFICATION
  ===================================================== */

  const showNotification = (message: string) => {
    setNotification(message)

    setTimeout(() => {
      setNotification("")
    }, 3500)
  }

  /* =====================================================
     DISPONIBILITÉ
  ===================================================== */

  const handleStatus = (value: boolean) => {
    setAvailable(value)

    showNotification(
      value
        ? "Vous êtes maintenant disponible pour les interventions."
        : "Vous êtes maintenant indisponible."
    )
  }

  /* =====================================================
     NAVIGATION SIDEBAR
  ===================================================== */

  const handleNavigation = (page: string) => {
    setActivePage(page)

    if (page === "logout") {
      navigate("/login")
    }
  }

  return (
    <div className="flex min-h-screen bg-[#F7FBFF] text-slate-900">

      {/* =====================================================
          SIDEBAR
      ====================================================== */}

      <GaragisteSidebar
        activePage={activePage}
        onNavigate={handleNavigation}
      />

      {/* =====================================================
          CONTENU PRINCIPAL
      ====================================================== */}

      <main className="min-w-0 flex-1">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <GaragisteHeader
          available={available}
          onToggle={handleStatus}
          activePage={activePage}
          onNavigate={handleNavigation}
          onNotifications={() => handleNavigation("notifications")}
        />

        <div className="mx-auto max-w-[1700px] p-4 sm:p-6 md:p-8 lg:p-10">

          {/* =================================================
              PROFIL DU GARAGE
          ================================================= */}

          {["profile", "services", "zone"].includes(activePage) ? (

            <GarageProfileSection />

          ) : activePage !== "dashboard" ? (

            <GaragisteModulePage
              page={activePage}
              onBack={() => setActivePage("dashboard")}
            />

          ) : (

            /* =================================================
               DASHBOARD PRINCIPAL
            ================================================= */

            <>

              {/* =================================================
                  HERO / MESSAGE DE BIENVENUE
              ================================================= */}

              <section className="relative mb-10 overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-[#E6F1FB] p-6 text-slate-900 shadow-[0_24px_70px_rgba(20,104,168,0.1)] md:p-9">

                {/* Décorations */}

                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-200/40 blur-2xl" />

                <div className="pointer-events-none absolute -bottom-20 right-20 h-40 w-40 rounded-full bg-cyan-200/60 blur-2xl" />

                <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                  <div>

                    <div className="mb-3 flex items-center gap-2 text-sm font-medium text-[#1468A8]">

                      <MapPin className="h-4 w-4" />

                      Cameroun

                    </div>

                    <h1 className="text-2xl font-bold tracking-tight md:text-3xl">

                      Bienvenue dans votre espace garagiste

                    </h1>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">

                      Gérez vos demandes d'intervention, retrouvez les
                      automobilistes proches de vous et développez votre
                      activité avec AutoGuide+.

                    </p>

                  </div>

                  {/* Disponibilité */}

                  <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-blue-100 bg-white/80 px-5 py-4 shadow-sm backdrop-blur-md">

                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-full ${
                        available
                          ? "bg-emerald-400/20"
                          : "bg-red-400/20"
                      }`}
                    >

                      <span
                        className={`h-3 w-3 rounded-full ${
                          available
                            ? "bg-emerald-400 animate-pulse"
                            : "bg-red-400"
                        }`}
                      />

                    </div>

                    <div>

                      <p className="text-xs text-slate-500">
                        Statut actuel
                      </p>

                      <p className="font-semibold">
                        {available
                          ? "Disponible"
                          : "Indisponible"}
                      </p>

                    </div>

                  </div>

                </div>

              </section>

              {/* =================================================
                  STATISTIQUES
              ================================================= */}

              <section className="mb-8">

                <div className="mb-4 flex items-center justify-between">

                  <div>

                    <h2 className="text-lg font-bold md:text-xl">
                      Vue d'ensemble
                    </h2>

                    <p className="text-sm text-slate-500">
                      Votre activité aujourd'hui
                    </p>

                  </div>

                  <div className="hidden items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 md:flex">

                    <TrendingUp className="h-3.5 w-3.5" />

                    Activité en hausse

                  </div>

                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                  <div className="transition-all duration-300 hover:-translate-y-1">

                    <StatCard
                      title="Demandes aujourd'hui"
                      value="12"
                      icon={ClipboardList}
                      type="blue"
                    />

                  </div>

                  <div className="transition-all duration-300 hover:-translate-y-1">

                    <StatCard
                      title="Interventions en cours"
                      value="2"
                      icon={Wrench}
                      type="orange"
                    />

                  </div>

                  <div className="transition-all duration-300 hover:-translate-y-1">

                    <StatCard
                      title="Tâches terminées"
                      value="45"
                      icon={CheckCircle2}
                      type="green"
                    />

                  </div>

                  <div className="transition-all duration-300 hover:-translate-y-1">

                    <StatCard
                      title="Note moyenne"
                      value="4.9"
                      icon={Star}
                      type="yellow"
                    />

                  </div>

                </div>

              </section>

              {/* =================================================
                  INFORMATIONS RAPIDES
              ================================================= */}

              <section className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">

                {/* Zone */}

                <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-transform duration-300 group-hover:scale-110">

                    <MapPin className="h-5 w-5" />

                  </div>

                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Zone d'intervention
                  </p>

                  <h3 className="mt-1 font-semibold text-slate-800">
                    Yaoundé
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Rayon actuel : 15 km
                  </p>

                </div>

                {/* Temps moyen */}

                <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition-transform duration-300 group-hover:scale-110">

                    <Clock3 className="h-5 w-5" />

                  </div>

                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Temps moyen
                  </p>

                  <h3 className="mt-1 font-semibold text-slate-800">
                    18 min
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Pour rejoindre un client
                  </p>

                </div>

                {/* Certification */}

                <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-transform duration-300 group-hover:scale-110">

                    <ShieldCheck className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />

                  </div>

                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Statut AutoGuide+
                  </p>

                  <h3 className="mt-1 font-semibold text-slate-800">
                    Garagiste certifié
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Profil vérifié par AutoGuide+
                  </p>

                </div>

              </section>

              {/* =================================================
                  DEMANDES D'INTERVENTION
              ================================================= */}

              <section>

                <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                  <div>

                    <div className="flex items-center gap-2">

                      <h2 className="text-lg font-bold md:text-xl">
                        Demandes d'intervention
                      </h2>

                      <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-blue-100 px-2 text-xs font-bold text-blue-700">
                        12
                      </span>

                    </div>

                    <p className="mt-1 text-sm text-slate-500">
                      Les automobilistes proches de votre zone
                      recherchent votre assistance.
                    </p>

                  </div>

                  <button
                    onClick={() => handleNavigation("notifications")}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  >

                    <Bell className="h-4 w-4" />

                    Voir les notifications

                  </button>

                </div>

                <div className="rounded-3xl">

                  <DemandeList
                    onNotification={showNotification}
                  />

                </div>

              </section>

              {/* =================================================
                  MESSAGE DU BAS
              ================================================= */}

              <section className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/70 p-5">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">

                    <ShieldCheck className="h-5 w-5" />

                  </div>

                  <div>

                    <h3 className="font-semibold text-slate-800">
                      Votre sécurité et celle des automobilistes
                      comptent.
                    </h3>

                    <p className="mt-1 text-sm leading-5 text-slate-500">
                      Acceptez uniquement les interventions que vous
                      pouvez réaliser et maintenez votre statut à jour
                      pour recevoir des demandes pertinentes.
                    </p>

                  </div>

                </div>

              </section>

            </>

          )}

        </div>

      </main>

      {/* =====================================================
          NOTIFICATION & LIVE CHAT
      ====================================================== */}

      <Notification
        message={notification}
        onClose={() => setNotification("")}
      />

      <LiveChatWidget
        currentUserId="gar-1"
        currentUserName="Garage Auto Express"
        currentUserRole="garagiste"
        isOpenDefault={activePage === "chat"}
      />

    </div>
  )
}