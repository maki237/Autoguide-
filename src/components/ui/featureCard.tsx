import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  color?: "blue" | "amber" | "green"
  large?: boolean
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  color = "blue",
  large = false,
}: FeatureCardProps) {

  const colors = {
    blue: "bg-blue-50 text-blue-600",
    amber: "bg-amber-50 text-amber-600",
    green: "bg-green-50 text-green-600",
  }

  return (
    <div
      className={`
        group
        rounded-3xl
        border
        border-slate-100
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        ${large ? "lg:p-8" : ""}
      `}
    >

      <div
        className={`
          mb-5
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          ${colors[color]}
          transition-transform
          duration-300
          group-hover:scale-110
        `}
      >

        <Icon className="h-5 w-5" />

      </div>


      <h3 className="text-lg font-bold text-slate-900">
        {title}
      </h3>


      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>

    </div>
  )
}