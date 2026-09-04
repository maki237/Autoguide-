import { Wrench } from "lucide-react"

interface GarageServicesProps {
  services: string[]
  selectedServices: string[]
  toggleService: (service: string) => void
}

export function GarageServices({
  services,
  selectedServices,
  toggleService,
}: GarageServicesProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="mb-5 flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E6F1FB] text-[#1468A8]">
          <Wrench size={20} />
        </div>

        <div>
          <h2 className="font-bold text-slate-900">
            Services & spécialités
          </h2>

          <p className="text-sm text-slate-500">
            Sélectionnez les domaines d'expertise de votre garage.
          </p>
        </div>

      </div>

      <div className="flex flex-wrap gap-2">

        {services.map((service) => {
          const selected = selectedServices.includes(service)

          return (
            <button
              key={service}
              type="button"
              onClick={() => toggleService(service)}
              className={`
                rounded-full
                border
                px-4
                py-2
                text-sm
                font-medium
                transition
                ${
                  selected
                    ? "border-[#1468A8] bg-[#1468A8] text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-[#1468A8] hover:text-[#1468A8]"
                }
              `}
            >
              {service}
            </button>
          )
        })}

      </div>
    </section>
  )
}