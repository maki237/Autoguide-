import { useState } from "react"
import {
  Save,
  X,
  CheckCircle2,
} from "lucide-react"

import { GarageGeneralInfo } from "@/components/ui/garage-général"
import { GarageCertification } from "@/components/ui/garage-certification"
import { GarageServices } from "@/components/ui/garage-services"
import { GarageZone } from "@/components/ui/garage-zone"
import { GarageHours } from "@/components/ui/garage-hours"
import { GaragePhotos } from "@/components/ui/garage-photo"

export function GarageProfileSection() {

  /* =====================================================
     INFORMATIONS DU GARAGE
  ===================================================== */

  const [garageName, setGarageName] = useState(
    "Garage AutoGuide+ Yaoundé"
  )

  const [phone, setPhone] = useState(
    "+237 6XX XX XX XX"
  )

  const [email, setEmail] = useState(
    "contact@autoguide.cm"
  )

  const [address, setAddress] = useState(
    "Yaoundé, Centre, Cameroun"
  )

  /* =====================================================
     SERVICES
  ===================================================== */

  const services = [
    "Mécanique générale",
    "Diagnostic",
    "Électricité",
    "Vidange",
    "Climatisation",
    "Carrosserie",
  ]

  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Mécanique générale",
    "Diagnostic",
    "Vidange",
  ])

  const toggleService = (service: string) => {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service]
    )
  }

  /* =====================================================
     ZONE
  ===================================================== */

  const [radius, setRadius] = useState(15)

  /* =====================================================
     HORAIRES
  ===================================================== */

  const [hours, setHours] = useState<Record<string, string>>({
    lundi: "08:00 - 18:30",
    mardi: "08:00 - 18:30",
    mercredi: "08:00 - 18:30",
    jeudi: "08:00 - 18:30",
    vendredi: "08:00 - 17:00",
    samedi: "Fermé",
    dimanche: "Fermé",
  })

  /* =====================================================
     PHOTOS
  ===================================================== */

  const [photos, setPhotos] = useState<string[]>([])

  const handlePhotoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {

    const files = event.target.files

    if (!files) return

    const newPhotos = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    )

    setPhotos((current) => [
      ...current,
      ...newPhotos,
    ])
  }

  const removePhoto = (index: number) => {
    setPhotos((current) =>
      current.filter((_, i) => i !== index)
    )
  }

  /* =====================================================
     SAUVEGARDE
  ===================================================== */

  const [saved, setSaved] = useState(false)

  const handleSave = () => {

    setSaved(true)

    setTimeout(() => {
      setSaved(false)
    }, 3000)
  }

  return (
    <section className="w-full">

      {/* EN-TÊTE */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Profil du Garage
        </h1>

        <p className="mt-2 text-sm text-slate-500 md:text-base">
          Gérez les informations professionnelles de votre
          garage et mettez en avant votre expertise.
        </p>

      </div>

      {/* INFORMATIONS + CERTIFICATION */}

      <div className="mb-6 grid grid-cols-1 gap-6 xl:grid-cols-[1fr_280px]">

        <GarageGeneralInfo
          garageName={garageName}
          phone={phone}
          email={email}
          address={address}
          setGarageName={setGarageName}
          setPhone={setPhone}
          setEmail={setEmail}
          setAddress={setAddress}
        />

        <GarageCertification />

      </div>

      {/* SERVICES + ZONE */}

      <div className="mb-6 grid grid-cols-1 gap-6 xl:grid-cols-2">

        <GarageServices
          services={services}
          selectedServices={selectedServices}
          toggleService={toggleService}
        />

        <GarageZone
          radius={radius}
          setRadius={setRadius}
        />

      </div>

      {/* HORAIRES */}

      <GarageHours
        hours={hours}
        setHours={setHours}
      />

      {/* PHOTOS */}

      <GaragePhotos
        photos={photos}
        handlePhotoChange={handlePhotoChange}
        removePhoto={removePhoto}
      />

      {/* ACTIONS */}

      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

        <button
          type="button"
          onClick={() => window.location.reload()}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
        >
          <X size={17} />
          Annuler
        </button>

        <button
          type="button"
          onClick={handleSave}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1468A8] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0F568D] hover:shadow-md"
        >

          {saved ? (
            <>
              <CheckCircle2 size={17} />
              Modifications enregistrées
            </>
          ) : (
            <>
              <Save size={17} />
              Enregistrer les modifications
            </>
          )}

        </button>

      </div>

    </section>
  )
}