import {
  Building2,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"

interface GarageGeneralInfoProps {
  garageName: string
  phone: string
  email: string
  address: string
  setGarageName: (value: string) => void
  setPhone: (value: string) => void
  setEmail: (value: string) => void
  setAddress: (value: string) => void
}

export function GarageGeneralInfo({
  garageName,
  phone,
  email,
  address,
  setGarageName,
  setPhone,
  setEmail,
  setAddress,
}: GarageGeneralInfoProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b border-slate-100 p-5">
        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E6F1FB] text-[#1468A8]">
            <Building2 size={20} />
          </div>

          <div>
            <h2 className="font-bold text-slate-900">
              Informations générales
            </h2>

            <p className="text-sm text-slate-500">
              Les informations visibles par les automobilistes.
            </p>
          </div>

        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2">

        {/* NOM */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Nom du garage
          </label>

          <input
            type="text"
            value={garageName}
            onChange={(e) => setGarageName(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#1468A8] focus:bg-white"
          />
        </div>

        {/* TELEPHONE */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Numéro de téléphone
          </label>

          <div className="relative">

            <Phone
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[#1468A8] focus:bg-white"
            />

          </div>
        </div>

        {/* EMAIL */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Adresse e-mail
          </label>

          <div className="relative">

            <Mail
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[#1468A8] focus:bg-white"
            />

          </div>
        </div>

        {/* ADRESSE */}
        <div className="md:col-span-2">

          <label className="mb-2 block text-sm font-medium text-slate-700">
            Adresse physique
          </label>

          <div className="relative">

            <MapPin
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[#1468A8] focus:bg-white"
            />

          </div>

        </div>

      </div>
    </section>
  )
}