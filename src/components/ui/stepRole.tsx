
import { cn } from "@/lib/utils"
import { User, Wrench, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

type Role = "client" | "garage"

interface StepRoleProps {
  role: Role
  setRole: (role: Role) => void
  onNext: () => void
}

export function StepRole({
  role,
  setRole,
  onNext,
}: StepRoleProps) {
  return (
    <div className="space-y-5">

      {/* CHOIX DU RÔLE */}
      <div>
        <label className="mb-2.5 block text-sm font-semibold text-[#263B4D]">
          Vous êtes...
        </label>

        <div className="grid grid-cols-2 gap-3">

          {/* AUTOMOBILISTE */}
          <button
            type="button"
            aria-pressed={role === "client"}
            onClick={() => setRole("client")}
            className={cn(
              "group relative flex min-h-[105px] flex-col items-center justify-center gap-2 rounded-xl border bg-white p-4 transition-all",
              role === "client"
                ? "border-[#1B5FA8] bg-blue-50/70 shadow-sm ring-1 ring-[#1B5FA8]/10"
                : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
            )}
          >
            {role === "client" && (
              <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#1B5FA8]">
                <CheckCircle2 className="h-3.5 w-3.5 text-white" />
              </span>
            )}

            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full",
                role === "client"
                  ? "bg-[#1B5FA8] text-white"
                  : "bg-gray-100 text-gray-500"
              )}
            >
              <User className="h-5 w-5" />
            </div>

            <span className="text-sm font-semibold text-[#263B4D]">
              Automobiliste
            </span>
          </button>

          {/* GARAGISTE */}
          <button
            type="button"
            aria-pressed={role === "garage"}
            onClick={() => setRole("garage")}
            className={cn(
              "group relative flex min-h-[105px] flex-col items-center justify-center gap-2 rounded-xl border bg-white p-4 transition-all",
              role === "garage"
                ? "border-[#1B5FA8] bg-blue-50/70 shadow-sm ring-1 ring-[#1B5FA8]/10"
                : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
            )}
          >
            {role === "garage" && (
              <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#1B5FA8]">
                <CheckCircle2 className="h-3.5 w-3.5 text-white" />
              </span>
            )}

            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full",
                role === "garage"
                  ? "bg-[#1B5FA8] text-white"
                  : "bg-gray-100 text-gray-500"
              )}
            >
              <Wrench className="h-5 w-5" />
            </div>

            <span className="text-sm font-semibold text-[#263B4D]">
              Garagiste
            </span>
          </button>

        </div>
      </div>

      {/* BOUTON CONTINUER */}
      <Button
        type="button"
        variant="continue"
        onClick={onNext}
        className="h-12 w-full rounded-xl"
      >
        Continuer
      </Button>

    </div>
  )
}
