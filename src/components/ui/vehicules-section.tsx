import { useState } from "react"
import type { FormEvent } from "react"
import { Car, Plus, Trash2 } from "lucide-react"
import { toast } from "sonner"

interface Vehicle {
  id: string
  brand: string
  model: string
  plate: string
  year: string
}

function loadVehicles(): Vehicle[] {
  try {
    const raw = localStorage.getItem("vehicles")
    return raw ? (JSON.parse(raw) as Vehicle[]) : []
  } catch {
    return []
  }
}

function saveVehicles(vehicles: Vehicle[]) {
  localStorage.setItem("vehicles", JSON.stringify(vehicles))
}

export function VehiclesSection() {
  const [vehicles, setVehicles] = useState<Vehicle[]>(() => loadVehicles())
  const [showForm, setShowForm] = useState(false)

  const [brand, setBrand] = useState("")
  const [model, setModel] = useState("")
  const [plate, setPlate] = useState("")
  const [year, setYear] = useState("")

  const resetForm = () => {
    setBrand("")
    setModel("")
    setPlate("")
    setYear("")
    setShowForm(false)
  }

  const handleAddVehicle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!brand.trim() || !model.trim() || !plate.trim()) {
      toast.error("Veuillez renseigner au moins la marque, le modèle et l'immatriculation.")
      return
    }

    const newVehicle: Vehicle = {
      id: crypto.randomUUID(),
      brand: brand.trim(),
      model: model.trim(),
      plate: plate.trim().toUpperCase(),
      year: year.trim(),
    }

    const updated = [...vehicles, newVehicle]
    setVehicles(updated)
    saveVehicles(updated)

    toast.success("Véhicule ajouté")
    resetForm()
  }

  const handleDelete = (id: string) => {
    const updated = vehicles.filter((vehicle) => vehicle.id !== id)
    setVehicles(updated)
    saveVehicles(updated)
    toast.success("Véhicule supprimé")
  }

  return (
    <div>
      {vehicles.length === 0 && !showForm && (
        <p className="text-sm text-slate-500">
          Vous n'avez pas encore ajouté de véhicule.
        </p>
      )}

      {vehicles.length > 0 && (
        <ul className="space-y-3">
          {vehicles.map((vehicle) => (
            <li
              key={vehicle.id}
              className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[#1468A8]">
                  <Car className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {vehicle.brand} {vehicle.model}
                    {vehicle.year ? ` · ${vehicle.year}` : ""}
                  </p>
                  <p className="text-xs text-slate-500">{vehicle.plate}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleDelete(vehicle.id)}
                aria-label="Supprimer le véhicule"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-red-50 hover:text-red-600"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      )}

      {showForm ? (
        <form onSubmit={handleAddVehicle} className="mt-4 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <input
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              placeholder="Marque (ex: Toyota)"
              className="h-11 rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-[#1468A8] focus:ring-4 focus:ring-[#1468A8]/10"
            />

            <input
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder="Modèle (ex: Corolla)"
              className="h-11 rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-[#1468A8] focus:ring-4 focus:ring-[#1468A8]/10"
            />

            <input
              value={plate}
              onChange={(e) => setPlate(e.target.value)}
              placeholder="Immatriculation"
              className="h-11 rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-[#1468A8] focus:ring-4 focus:ring-[#1468A8]/10"
            />

            <input
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Année (optionnel)"
              className="h-11 rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-[#1468A8] focus:ring-4 focus:ring-[#1468A8]/10"
            />
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-1 rounded-xl bg-[#1468A8] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#105B91]"
            >
              Enregistrer
            </button>

            <button
              type="button"
              onClick={resetForm}
              className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
            >
              Annuler
            </button>
          </div>
        </form>
      ) : (
        <button
          type="button"
          onClick={() => setShowForm(true)}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-slate-300 px-4 py-3 text-sm font-medium text-slate-500 transition hover:border-[#1468A8] hover:text-[#1468A8]"
        >
          <Plus className="h-4 w-4" />
          Ajouter un véhicule
        </button>
      )}
    </div>
  )
}
