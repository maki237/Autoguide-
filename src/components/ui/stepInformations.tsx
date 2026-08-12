import { User, Mail, Phone } from "lucide-react"

interface StepInformationsProps {
  fullName: string
  setFullName: (value: string) => void
  email: string
  setEmail: (value: string) => void
  phone: string
  setPhone: (value: string) => void
  onNext: () => void
  onPrevious: () => void
}

export function StepInformations({
  fullName,
  setFullName,
  email,
  setEmail,
  phone,
  setPhone,
  onNext,
  onPrevious,
}: StepInformationsProps) {

  return (
    <div className="space-y-5">

      {/* NOM */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-[#263B4D]">
          Nom complet
        </label>

        <div className="relative">
          <User className="absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-400" />

          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Jean Dupont"
            className="h-12 w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm outline-none focus:border-[#1B5FA8] focus:ring-4 focus:ring-[#1B5FA8]/10"
            required
          />
        </div>
      </div>

      {/* EMAIL */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-[#263B4D]">
          Adresse email
        </label>

        <div className="relative">
          <Mail className="absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-400" />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jean.dupont@exemple.com"
            className="h-12 w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm outline-none focus:border-[#1B5FA8] focus:ring-4 focus:ring-[#1B5FA8]/10"
            required
          />
        </div>
      </div>

      {/* TELEPHONE */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-[#263B4D]">
          Numéro de téléphone
        </label>

        <div className="flex">
          <span className="flex h-12 items-center rounded-l-xl border border-r-0 border-gray-200 bg-gray-50 px-3.5 text-sm font-medium text-gray-600">
            +237
          </span>

          <div className="relative flex-1">
            <Phone className="absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-400" />

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="6XX XX XX XX"
              className="h-12 w-full rounded-r-xl border border-gray-200 bg-white pl-11 pr-4 text-sm outline-none focus:border-[#1B5FA8] focus:ring-4 focus:ring-[#1B5FA8]/10"
              required
            />
          </div>
        </div>
      </div>

      {/* BOUTONS */}
      <div className="flex gap-3">
        <button
          type="button"
          onClick={onPrevious}
          className="h-12 flex-1 rounded-xl border border-gray-200 bg-white text-sm font-semibold text-gray-600 hover:bg-gray-50"
        >
          Retour
        </button>

        <button
          type="button"
          onClick={onNext}
          className="h-12 flex-1 rounded-xl bg-[#1B5FA8] text-sm font-semibold text-white hover:bg-[#154a87]"
        >
          Continuer
        </button>
      </div>

    </div>
  )
}