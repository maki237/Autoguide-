import {
  Camera,
  Plus,
  X,
} from "lucide-react"

interface GaragePhotosProps {
  photos: string[]
  handlePhotoChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void
  removePhoto: (index: number) => void
}

export function GaragePhotos({
  photos,
  handlePhotoChange,
  removePhoto,
}: GaragePhotosProps) {
  return (
    <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="mb-5 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
            <Camera size={20} />
          </div>

          <div>
            <h2 className="font-bold text-slate-900">
              Photos du garage
            </h2>

            <p className="text-sm text-slate-500">
              Ajoutez des photos pour présenter votre garage.
            </p>
          </div>

        </div>

        <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-[#1468A8] hover:bg-[#E6F1FB]">

          <Plus size={16} />

          Ajouter

          <input
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handlePhotoChange}
          />

        </label>

      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">

        {photos.map((photo, index) => (

          <div
            key={photo}
            className="group relative aspect-square overflow-hidden rounded-xl border border-slate-200"
          >

            <img
              src={photo}
              alt={`Photo du garage ${index + 1}`}
              className="h-full w-full object-cover"
            />

            <button
              type="button"
              onClick={() => removePhoto(index)}
              className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-red-500 opacity-0 shadow-sm transition group-hover:opacity-100"
            >
              <X size={15} />
            </button>

          </div>

        ))}

        <label className="flex aspect-square cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 text-slate-400 transition hover:border-[#1468A8] hover:bg-[#E6F1FB] hover:text-[#1468A8]">

          <Plus size={25} />

          <span className="mt-2 text-xs font-medium">
            Nouvelle photo
          </span>

          <input
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handlePhotoChange}
          />

        </label>

      </div>

    </section>
  )
}