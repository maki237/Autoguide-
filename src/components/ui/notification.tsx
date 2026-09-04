import {
  CheckCircle2,
  X,
} from "lucide-react"

interface NotificationProps {
  message: string
  onClose?: () => void
}

export function Notification({
  message,
  onClose,
}: NotificationProps) {

  if (!message) return null

  return (
    <div
      className="
        fixed
        right-6
        top-6
        z-50
        flex
        w-[360px]
        items-center
        gap-3
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-4
        shadow-2xl
        animate-in
        slide-in-from-right-5
        duration-300
      "
    >

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-50">
        <CheckCircle2 className="h-5 w-5 text-green-600" />
      </div>

      <div className="flex-1">

        <p className="text-xs font-bold text-slate-800">
          AutoGuide+
        </p>

        <p className="mt-0.5 text-xs leading-5 text-slate-500">
          {message}
        </p>

      </div>

      <button
        type="button"
        onClick={onClose}
        className="text-slate-400 transition hover:text-slate-700"
      >
        <X className="h-4 w-4" />
      </button>

    </div>
  )
}