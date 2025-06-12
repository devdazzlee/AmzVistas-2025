"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const slides = [
  {
    id: 1,
    image: "/amazon-dashboard.png",
    title: "Revolutionize Your E-Commerce Empire with Top-Notch Automation Services That Deliver Results",
    content: [
      "Welcome to Amz Vistas – where we don't just manage e-commerce assets; we elevate them to unprecedented heights! Imagine a team of over 500 seasoned experts, all geared up to supercharge your online marketplace. We're not just service providers; we're your partners in profit, with a track record spanning more than ten years in product development and e-commerce marketplace operations. We are among the best e-commerce automation companies.",
      "Our journey has been nothing short of remarkable. Our team has achieved a whopping $300 million in revenue through countless challenges – and we're just getting started! What sets us apart is our rock-solid business model that consistently spells success. We're not here to make promises; we're here to deliver",
    ],
  },
  {
    id: 2,
    image: "/placeholder.svg?height=600&width=400",
    title: "Scale Your Amazon FBA Business with Proven Automation Strategies",
    content: [
      "Transform your Amazon FBA operations with our cutting-edge automation tools and strategies. Our proprietary systems handle everything from inventory management to customer service, allowing you to focus on growing your business while we handle the day-to-day operations.",
      "With over 1000+ successful FBA launches and a 95% success rate, our automation platform has generated over $500 million in revenue for our clients. Experience the power of hands-off income generation with our fully managed FBA automation services.",
    ],
  },
  {
    id: 3,
    image: "/placeholder.svg?height=600&width=400",
    title: "Walmart Automation Services That Maximize Your Marketplace Potential",
    content: [
      "Expand your e-commerce empire beyond Amazon with our comprehensive Walmart automation services. Our expert team manages your entire Walmart marketplace presence, from product listing optimization to order fulfillment and customer support.",
      "Join the ranks of successful entrepreneurs who have diversified their income streams through our Walmart automation platform. With dedicated account managers and proven strategies, we've helped clients achieve an average of 40% revenue increase within the first 6 months.",
    ],
  },
  {
    id: 4,
    image: "/placeholder.svg?height=600&width=400",
    title: "Complete E-Commerce Portfolio Management for Maximum ROI",
    content: [
      "Why limit yourself to one platform when you can dominate multiple marketplaces? Our comprehensive e-commerce automation services cover Amazon, Walmart, eBay, and other major platforms, creating a diversified portfolio that maximizes your return on investment.",
      "Our clients enjoy the benefits of passive income generation across multiple channels, with our team handling everything from market research and product sourcing to inventory management and customer service. Experience true financial freedom with our done-for-you e-commerce solutions.",
    ],
  },
]

export default function CarouselSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Auto-advance every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="relative h-[600px] w-full max-w-md mx-auto">
              {slides[0].image === "/amazon-dashboard.png" && currentSlide === 0 ? (
                <Image src="/amazon-dashboard.png" alt="Amazon Dashboard" fill className="object-contain" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">{slides[currentSlide].id}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Slide {slides[currentSlide].id}</h3>
                    <p className="text-gray-600 mt-2">E-commerce Dashboard</p>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight">
              {slides[currentSlide].title}
            </h2>

            <div className="space-y-4">
              {slides[currentSlide].content.map((paragraph, index) => (
                <p key={index} className="text-gray-700 text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg">
              Get a Free Consultation Now!
            </Button>

            {/* Slide indicators */}
            <div className="flex space-x-2 pt-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
