import { Link } from "react-router-dom"
import {
  Activity,
  ArrowRight,
  CarFront,
  CheckCircle2,
  Clock3,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react"

import LandingMap from "@/components/ui/LandingMaps"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7fbff]">
      <div className="mx-auto max-w-7xl px-5 pb-14 pt-12 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-700 shadow-sm">
              <ShieldCheck className="h-4 w-4" />
              Pensé pour les routes de Yaoundé
            </div>

            <h1 className="mt-6 max-w-2xl text-[clamp(2.8rem,7vw,6rem)] font-bold leading-[0.94] tracking-[-0.055em] text-slate-950">
              Votre route.
              <span className="block text-[#1468A8]">Notre intelligence.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              AutoGuide+ analyse votre trajet, votre environnement et les
              garages disponibles pour vous proposer la meilleure solution sur
              la route.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/login"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1468A8] px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                <MapPinned className="h-4 w-4" />
                Calculer mon itinéraire
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F59E0B] px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber-500/20 transition hover:-translate-y-0.5 hover:bg-amber-600"
              >
                <Wrench className="h-4 w-4" />
                Je suis en panne
              </Link>
            </div>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <p className="text-xs text-slate-400">Trafic actuel</p>
              <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-green-700">
                <Activity className="h-4 w-4" />
                Faible
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <p className="text-xs text-slate-400">Garages repérés</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">3 options</p>
            </div>
          </div>
        </div>

        <div className="relative mt-10 sm:mt-14">
          <div className="absolute -inset-3 rounded-[30px] bg-blue-100/50 blur-2xl" />
          <div className="relative overflow-hidden rounded-[24px] border border-blue-100 bg-[#E6F1FB] p-2.5 shadow-[0_24px_70px_rgba(20,104,168,0.14)] sm:rounded-[30px] sm:p-3">
            <div className="relative h-[390px] overflow-hidden rounded-[19px] sm:h-[540px] sm:rounded-[24px]">
              <LandingMap />
            </div>

            <div className="pointer-events-none absolute left-5 top-5 z-[1000] flex items-center gap-2 rounded-xl border border-white/80 bg-white/95 px-3 py-2 text-xs font-semibold text-slate-700 shadow-md sm:left-7 sm:top-7">
              <Sparkles className="h-4 w-4 text-[#1468A8]" />
              AutoGuide+ analyse votre route
            </div>

            <div className="pointer-events-none absolute right-5 top-5 z-[1000] flex items-center gap-2 rounded-xl border border-white/80 bg-white/95 px-3 py-2 text-xs font-semibold text-green-700 shadow-md sm:right-7 sm:top-7">
              <Activity className="h-4 w-4" />
              Trafic faible
            </div>

            <div className="pointer-events-none absolute bottom-28 left-5 z-[1000] hidden w-60 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-lg backdrop-blur sm:bottom-32 sm:left-7 sm:block">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <Sparkles className="h-4 w-4 text-[#1468A8]" />
                Meilleure option
              </div>
              <p className="mt-2 text-sm font-bold text-slate-800">Garage Central</p>
              <div className="mt-2 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1 text-slate-500">
                  <MapPinned className="h-3.5 w-3.5" /> 2,1 km
                </span>
                <span className="flex items-center gap-1 text-green-700">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Disponible
                </span>
              </div>
            </div>

            <div className="absolute bottom-3 left-3 right-3 z-[1000] rounded-2xl border border-white/70 bg-white/95 p-3 shadow-xl backdrop-blur sm:bottom-5 sm:left-5 sm:right-5 sm:p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="flex items-center gap-1 text-xs font-medium text-slate-400">
                    <Clock3 className="h-3.5 w-3.5" />
                    Route optimale
                  </p>
                  <p className="mt-1 font-semibold text-slate-800">
                    Yaoundé <span className="text-blue-500">→</span> Bastos
                  </p>
                </div>
                <div className="rounded-xl bg-green-50 px-3 py-2 text-center">
                  <p className="text-xs text-green-600">Temps estimé</p>
                  <p className="font-bold text-green-700">18 min</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5">
            <MapPinned className="h-4 w-4 text-blue-600" />
            Position et destination
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5">
            <CarFront className="h-4 w-4 text-green-600" />
            Itinéraire adapté
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5">
            <Wrench className="h-4 w-4 text-amber-500" />
            Assistance autour de vous
          </div>
        </div>
      </div>
    </section>
  )
}
