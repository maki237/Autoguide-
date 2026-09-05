import type { ComponentType } from "react"

interface StatCardProps {
  title: string
  value: string | number
  subtitle?: string
  icon: ComponentType<{ className?: string }>
  type?: "blue" | "orange" | "green" | "yellow"
}

export function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  type = "blue",
}: StatCardProps) {

  const styles = {
    blue: "bg-blue-50 text-[#1677C8]",
    orange: "bg-orange-50 text-orange-600",
    green: "bg-green-50 text-green-600",
    yellow: "bg-amber-50 text-amber-600",
  }

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-slate-100
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >

      <div className="flex items-start justify-between">

        <div
          className={`
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            transition-transform
            duration-300
            group-hover:scale-110
            ${styles[type]}
          `}
        >
          <Icon className="h-5 w-5" />
        </div>

      </div>

      <p className="mt-5 text-3xl font-bold tracking-tight text-slate-900">
        {value}
      </p>

      <p className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-500">
        {title}
      </p>

      {subtitle && (
        <p className="mt-2 text-[11px] text-slate-400">
          {subtitle}
        </p>
      )}

    </div>
  )
}