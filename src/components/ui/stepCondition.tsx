import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight } from "lucide-react"

interface StepConditionsProps {
  accepted: boolean
  setAccepted: (value: boolean) => void
  onPrevious: () => void
  isLoading: boolean
}

export function StepConditions({
  accepted,
  setAccepted,
  onPrevious,
  isLoading,
}: StepConditionsProps) {

  return (
    <div className="space-y-5">

      <div className="flex items-start gap-2.5">

        <Checkbox
          id="terms"
          checked={accepted}
          onCheckedChange={(value) =>
            setAccepted(value === true)
          }
          className="mt-0.5"
        />

        <label
          htmlFor="terms"
          className="text-xs leading-5 text-gray-500"
        >
          J'accepte les{" "}
          <a
            href="#"
            className="font-medium text-[#1B5FA8] hover:underline"
          >
            Conditions d'utilisation
          </a>{" "}
          et la{" "}
          <a
            href="#"
            className="font-medium text-[#1B5FA8] hover:underline"
          >
            Politique de confidentialité
          </a>
          .
        </label>

      </div>

      <div className="flex gap-3">

        <button
          type="button"
          onClick={onPrevious}
          className="h-12 flex-1 rounded-xl border border-gray-200 bg-white text-sm font-semibold text-gray-600"
        >
          Retour
        </button>

        <button
          type="submit"
          disabled={!accepted || isLoading}
          className="group h-12 flex-1 rounded-xl bg-[#1B5FA8] text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoading ? (
            "Création..."
          ) : (
            <>
              Créer mon compte
              <ArrowRight className="ml-2 inline h-4 w-4" />
            </>
          )}
        </button>

      </div>

    </div>
  )
}