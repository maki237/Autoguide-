import { Lock } from "lucide-react"

interface StepPasswordProps {
  password: string
  setPassword: (value: string) => void
  onNext: () => void
  onPrevious: () => void
}

export function StepPassword({
  password,
  setPassword,
  onNext,
  onPrevious,
}: StepPasswordProps) {

  return (
    <div className="space-y-5">

      <div>
        <label className="mb-2 block text-sm font-semibold text-[#263B4D]">
          Mot de passe
        </label>

        <div className="relative">
          <Lock className="absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-400" />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            minLength={8}
            required
            className="h-12 w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm outline-none focus:border-[#1B5FA8] focus:ring-4 focus:ring-[#1B5FA8]/10"
          />
        </div>

        <p className="mt-1.5 text-xs text-gray-400">
          Minimum 8 caractères.
        </p>
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
          type="button"
          onClick={onNext}
          disabled={password.length < 8}
          className="h-12 flex-1 rounded-xl bg-[#1B5FA8] text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          Continuer
        </button>

      </div>

    </div>
  )
}