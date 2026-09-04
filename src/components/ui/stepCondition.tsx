
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
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

      {/* CONDITIONS */}
      <div className="flex items-start gap-2.5">

        <Checkbox
          id="terms"
          checked={accepted}
          onCheckedChange={(value) => setAccepted(value === true)}
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

      {/* BOUTONS */}
      <div className="flex gap-3">

        {/* RETOUR */}
        <Button
          type="button"
          variant="outline"
          onClick={onPrevious}
          className="h-12 flex-1 rounded-xl border-gray-200 bg-white text-sm font-semibold text-gray-600 hover:bg-gray-50"
        >
          Retour
        </Button>

        {/* CRÉER MON COMPTE */}
        <Button
          type="submit"
          variant="continue"
          size="continue"
          disabled={!accepted || isLoading}
        >
          {isLoading ? (
            "Création..."
          ) : (
            <>
              Créer mon compte

              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1"
              />
            </>
          )}
        </Button>

      </div>

    </div>
  )
}

