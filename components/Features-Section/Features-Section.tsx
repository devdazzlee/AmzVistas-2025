"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function FeaturesSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const features = [
    {
      icon: (
        <div className="w-20 h-20 mx-auto mb-6 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007cc2] to-[#f90] rounded-full opacity-10"></div>
          <div className="relative w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 48 48" className="w-12 h-12">
              <circle cx="24" cy="24" r="20" fill="none" stroke="#007cc2" strokeWidth="2" strokeDasharray="3 3" />
              <rect x="16" y="14" width="16" height="20" rx="2" fill="#007cc2" />
              <circle cx="24" cy="24" r="3" fill="#f90" />
              <path d="M20 30h8M22 34h4" stroke="#f90" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      ),
      title: "Get Started Today with Our Secure Walmart Automation Plan!",
      description:
        "Our strategy comes with a guarantee – if your investment doesn't generate 100%, we'll repurchase it. Collaborate closely with us for product listing optimization, stock control, and marketplace consulting.",
    },
    {
      icon: (
        <div className="w-20 h-20 mx-auto mb-6 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007cc2] to-[#f90] rounded-full opacity-10"></div>
          <div className="relative w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 48 48" className="w-12 h-12">
              <circle cx="24" cy="24" r="20" fill="none" stroke="#007cc2" strokeWidth="2" strokeDasharray="3 3" />
              <path
                d="M14 24c0-5 5-10 10-10s10 5 10 10"
                fill="none"
                stroke="#007cc2"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M34 24c0 5-5 10-10 10s-10-5-10-10"
                fill="none"
                stroke="#f90"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="19" cy="21" r="1.5" fill="#007cc2" />
              <circle cx="29" cy="27" r="1.5" fill="#f90" />
            </svg>
          </div>
        </div>
      ),
      title: "Uninterrupted Support",
      description:
        "To us, you're not just a client but a valued partner. Access our 24/7 communication hub, reinforced by our dedicated Client Relations Officer (CRO), who ensures every account operates seamlessly.",
    },
    {
      icon: (
        <div className="w-20 h-20 mx-auto mb-6 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007cc2] to-[#f90] rounded-full opacity-10"></div>
          <div className="relative w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 48 48" className="w-12 h-12">
              <circle cx="24" cy="24" r="20" fill="none" stroke="#007cc2" strokeWidth="2" strokeDasharray="3 3" />
              <rect x="14" y="18" width="20" height="12" rx="2" fill="none" stroke="#007cc2" strokeWidth="2" />
              <rect x="17" y="21" width="14" height="6" fill="#f90" opacity="0.3" />
              <circle cx="32" cy="36" r="3" fill="none" stroke="#007cc2" strokeWidth="2" />
              <circle cx="20" cy="36" r="3" fill="none" stroke="#007cc2" strokeWidth="2" />
              <path d="M24 18v-3M21 15h6" stroke="#f90" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      ),
      title: "Holistic E-commerce Management",
      description:
        "Once onboard, sit back and let us handle it all – from trademark licensing to product resourcing, responding to customer feedback, and even supporting you with annual tax returns.",
    },
    {
      icon: (
        <div className="w-20 h-20 mx-auto mb-6 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007cc2] to-[#f90] rounded-full opacity-10"></div>
          <div className="relative w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 48 48" className="w-12 h-12">
              <circle cx="24" cy="24" r="20" fill="none" stroke="#007cc2" strokeWidth="2" strokeDasharray="3 3" />
              <path
                d="M16 22l6 6 12-12"
                fill="none"
                stroke="#007cc2"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="24" cy="24" r="18" fill="none" stroke="#f90" strokeWidth="1" opacity="0.5" />
            </svg>
          </div>
        </div>
      ),
      title: "Proven Success Track Record",
      description:
        "With over 500+ successful e-commerce businesses launched and $300M+ in revenue generated for our clients, our proven methodologies ensure maximum returns.",
    },
    {
      icon: (
        <div className="w-20 h-20 mx-auto mb-6 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007cc2] to-[#f90] rounded-full opacity-10"></div>
          <div className="relative w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 48 48" className="w-12 h-12">
              <circle cx="24" cy="24" r="20" fill="none" stroke="#007cc2" strokeWidth="2" strokeDasharray="3 3" />
              <path d="M14 32c0-6 3-12 10-12s10 6 10 12" fill="none" stroke="#007cc2" strokeWidth="2.5" />
              <path
                d="M18 26l3 3 3-3 3 3 3-3 3 3 3-3"
                fill="none"
                stroke="#f90"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="24" cy="22" r="2" fill="#007cc2" />
            </svg>
          </div>
        </div>
      ),
      title: "Advanced Analytics & Reporting",
      description:
        "Stay informed with real-time analytics, comprehensive reporting, and detailed insights into your e-commerce performance with our advanced dashboard.",
    },
    {
      icon: (
        <div className="w-20 h-20 mx-auto mb-6 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007cc2] to-[#f90] rounded-full opacity-10"></div>
          <div className="relative w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 48 48" className="w-12 h-12">
              <circle cx="24" cy="24" r="20" fill="none" stroke="#007cc2" strokeWidth="2" strokeDasharray="3 3" />
              <rect x="19" y="14" width="10" height="20" rx="2" fill="none" stroke="#007cc2" strokeWidth="2" />
              <circle cx="24" cy="20" r="1.5" fill="#f90" />
              <rect x="21" y="24" width="6" height="1.5" fill="#007cc2" />
              <rect x="21" y="27" width="6" height="1.5" fill="#007cc2" />
              <rect x="21" y="30" width="6" height="1.5" fill="#007cc2" />
            </svg>
          </div>
        </div>
      ),
      title: "Mobile-First Optimization",
      description:
        "Our automation services are designed with mobile commerce in mind. We optimize your listings and ensure exceptional performance across all mobile platforms.",
    },
    {
      icon: (
        <div className="w-20 h-20 mx-auto mb-6 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007cc2] to-[#f90] rounded-full opacity-10"></div>
          <div className="relative w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 48 48" className="w-12 h-12">
              <circle cx="24" cy="24" r="20" fill="none" stroke="#007cc2" strokeWidth="2" strokeDasharray="3 3" />
              <path d="M24 14v20M14 24h20" stroke="#007cc2" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="24" cy="24" r="6" fill="none" stroke="#f90" strokeWidth="2" />
              <circle cx="19" cy="19" r="1.5" fill="#007cc2" />
              <circle cx="29" cy="19" r="1.5" fill="#007cc2" />
              <circle cx="19" cy="29" r="1.5" fill="#f90" />
              <circle cx="29" cy="29" r="1.5" fill="#f90" />
            </svg>
          </div>
        </div>
      ),
      title: "Global Market Expansion",
      description:
        "Expand your reach beyond domestic markets with our international marketplace expertise. Navigate global regulations and maximize worldwide sales potential.",
    },
  ]

  // Responsive cards per view
  const getCardsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return 1 // Mobile
      if (window.innerWidth < 1024) return 2 // Tablet
      return 3 // Desktop
    }
    return 3
  }

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView())

  // Update cards per view on resize
  useState(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setCardsPerView(getCardsPerView())
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  })

  const maxSlide = Math.max(0, features.length - cardsPerView)

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0))
  }

  return (
    <section
      className="relative overflow-hidden py-16"
      style={{
        backgroundColor: "#f0f0f0",
        backgroundImage: "radial-gradient(at bottom right, #f90 50%, #007cc2 0)",
      }}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-12 max-w-5xl mx-auto leading-tight px-4">
          Diversify Your Portfolio with a Sustainable Passive Income Stream – Introducing Orbit Syndicate Amazon FBA and
          Walmart Automation Models!
        </h2>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows - Positioned outside cards */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="absolute -left-6 md:-left-12 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 rounded-full p-2 md:p-3 shadow-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide === maxSlide}
            className="absolute -right-6 md:-right-12 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 rounded-full p-2 md:p-3 shadow-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)`,
              }}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 px-2 md:px-4 ${
                    cardsPerView === 1 ? "w-full" : cardsPerView === 2 ? "w-1/2" : "w-1/3"
                  }`}
                >
                  <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg h-full min-h-[400px] flex flex-col">
                    {feature.icon}
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 text-center leading-tight flex-shrink-0">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 text-center text-sm md:text-base leading-relaxed flex-grow">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
