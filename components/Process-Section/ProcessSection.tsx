import type { ReactNode } from "react"

interface ProcessSectionProps {
  title?: string
  highlightText?: string
  secondaryText?: string
  description?: string
  imageSrc?: string
  imageAlt?: string
  reverse?: boolean
  className?: string
  children?: ReactNode
}

export default function ProcessSection({
  title = "Our",
  highlightText = "Amz Vistas",
  secondaryText = "Process",
  description = "With the help of our tested infrastructure, smooth-running onboarding process, and the 10+ years of expertise in Amazon and Walmart that we dedicate to every client, we want to make your Amz Vistas e-commerce business the most flexible and long-lasting asset in your portfolio",
  imageSrc = "/placeholder.svg?height=300&width=400",
  imageAlt = "Process illustration",
  reverse = false,
  className = "",
  children,
}: ProcessSectionProps) {
  return (
    <section className={`py-16 px-4 bg-gray-50 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:grid-flow-col-dense" : ""}`}
        >
          {/* Image Section */}
          <div className={`${reverse ? "lg:col-start-2" : ""}`}>
            <div className="relative">
              <img src={imageSrc || "/placeholder.svg"} alt={imageAlt} className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>

          {/* Content Section */}
          <div className={`${reverse ? "lg:col-start-1" : ""}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {title} <span className="text-orange-500">{highlightText}</span>{" "}
              <span className="text-teal-600">{secondaryText}</span>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">{description}</p>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
