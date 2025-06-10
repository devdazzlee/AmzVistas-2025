import type { ReactNode } from "react"

interface BannerProps {
  title?: string
  highlightText?: string
  subtitle?: string
  backgroundImage?: string
  children?: ReactNode
  className?: string
}

export default function Banner({
  title = "Start Your Journey With",
  highlightText = "Us",
  subtitle,
  backgroundImage = "/placeholder.svg?height=400&width=1200",
  children,
  className = "",
}: BannerProps) {
  return (
    <section className={`relative h-96 flex items-center justify-center ${className}`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {title} <span className="text-orange-500">{highlightText}</span>
        </h1>
        {subtitle && <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
