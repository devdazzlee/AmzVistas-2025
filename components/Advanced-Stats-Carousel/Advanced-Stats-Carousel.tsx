"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  BarChart3,
  DollarSign,
  Package,
  Users,
  ShoppingCart,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface StatCard {
  id: string
  title: string
  value: number
  prefix?: string
  suffix?: string
  trend?: number
  period?: string
  color?: string
  icon?: React.ReactNode
  description?: string
}

interface AdvancedStatsCarouselProps {
  title?: string
  subtitle?: string
  cards?: StatCard[]
  autoPlay?: boolean
  interval?: number
}

export default function AdvancedStatsCarousel({
  title = "Amazon Seller Performance",
  subtitle = "Real-time metrics from our seller dashboard",
  autoPlay = true,
  interval = 5000,
  cards = [
    {
      id: "1",
      title: "Daily Sales",
      value: 4496,
      prefix: "$",
      suffix: "USD",
      trend: 28,
      period: "vs last week",
      color: "from-orange-400 to-amber-600",
      icon: <DollarSign className="w-6 h-6" />,
      description: "Total sales revenue generated today across all products and marketplaces.",
    },
    {
      id: "2",
      title: "Units Sold",
      value: 39,
      trend: 42,
      period: "vs last year",
      color: "from-blue-400 to-blue-600",
      icon: <Package className="w-6 h-6" />,
      description: "Number of individual product units sold today across all listings.",
    },
    {
      id: "3",
      title: "Weekly Revenue",
      value: 69320,
      prefix: "$",
      suffix: "USD",
      trend: 28,
      period: "vs previous week",
      color: "from-green-400 to-emerald-600",
      icon: <BarChart3 className="w-6 h-6" />,
      description: "Total revenue generated in the past 7 days from all sales channels.",
    },
    {
      id: "4",
      title: "Monthly Sales",
      value: 17990,
      prefix: "$",
      suffix: "USD",
      trend: 48,
      period: "vs last month",
      color: "from-purple-400 to-purple-600",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Total sales revenue for the current month to date.",
    },
    {
      id: "5",
      title: "New Customers",
      value: 228,
      trend: 15,
      period: "vs last month",
      color: "from-pink-400 to-pink-600",
      icon: <Users className="w-6 h-6" />,
      description: "First-time buyers who purchased your products this month.",
    },
    {
      id: "6",
      title: "Order Count",
      value: 1358,
      trend: 22,
      period: "vs last month",
      color: "from-indigo-400 to-indigo-600",
      icon: <ShoppingCart className="w-6 h-6" />,
      description: "Total number of orders processed in the current month.",
    },
  ],
}: AdvancedStatsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [counters, setCounters] = useState<number[]>(cards.map(() => 0))
  const [isVisible, setIsVisible] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Check if element is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.3 },
    )

    if (carouselRef.current) {
      observer.observe(carouselRef.current)
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current)
      }
    }
  }, [])

  // Handle auto-play
  useEffect(() => {
    if (isPlaying && isVisible) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length)
      }, interval)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isPlaying, cards.length, interval, isVisible])

  // Handle counter animation
  useEffect(() => {
    const animateCounters = () => {
      cards.forEach((card, index) => {
        const targetValue = card.value
        const duration = 2000 // 2 seconds
        const startTime = Date.now()
        const startValue = 0

        const updateCounter = () => {
          const elapsed = Date.now() - startTime
          const progress = Math.min(elapsed / duration, 1)

          // Easing function for smoother animation
          const easedProgress = 1 - Math.pow(1 - progress, 3)

          setCounters((prev) => {
            const newCounters = [...prev]
            newCounters[index] = Math.round(startValue + (targetValue - startValue) * easedProgress)
            return newCounters
          })

          if (progress < 1) {
            requestAnimationFrame(updateCounter)
          } else {
            setCounters((prev) => {
              const newCounters = [...prev]
              newCounters[index] = targetValue
              return newCounters
            })
          }
        }

        requestAnimationFrame(updateCounter)
      })
    }

    if (isVisible) {
      animateCounters()
    }
  }, [isVisible, cards])

  const handlePrev = () => {
    setIsPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length)
  }

  const handleNext = () => {
    setIsPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length)
  }

  const formatValue = (value: number) => {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(2) + "M"
    } else if (value >= 1000) {
      return (value / 1000).toFixed(2) + "K"
    }
    return value.toString()
  }

  return (
    <section
      className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
      ref={carouselRef}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fillOpacity='0.1' fillRule='evenodd'/%3E%3C/svg%3E\")",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "100px 100px"],
          }}
          transition={{
            duration: 60,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
          <motion.div
            className="h-1 w-48 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full mt-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>

        {/* 3D Carousel */}
        <div className="relative h-[500px] md:h-[400px]">
          <AnimatePresence mode="wait">
            {cards.map((card, index) => {
              // Calculate position based on index relative to current
              const position = (index - currentIndex + cards.length) % cards.length
              const isActive = position === 0
              const isNext = position === 1 || position === cards.length - 1
              const isPrev = position === cards.length - 1 || position === 1

              // Calculate z-index and opacity based on position
              const zIndex = isActive ? 10 : isNext || isPrev ? 5 : 0
              const opacity = isActive ? 1 : isNext || isPrev ? 0.7 : 0.4

              // Calculate transform based on position
              let x = 0
              let scale = 1
              let rotateY = 0

              if (position === 0) {
                x = 0
                scale = 1
                rotateY = 0
              } else if (position === 1) {
                x = 300
                scale = 0.8
                rotateY = 15
              } else if (position === cards.length - 1) {
                x = -300
                scale = 0.8
                rotateY = -15
              } else if (position < cards.length / 2) {
                x = 500
                scale = 0.6
                rotateY = 30
              } else {
                x = -500
                scale = 0.6
                rotateY = -30
              }

              return (
                <motion.div
                  key={card.id}
                  className="absolute top-0 left-0 right-0 w-full md:w-2/3 mx-auto"
                  style={{
                    zIndex,
                    opacity,
                    x,
                    scale,
                    rotateY,
                    transformOrigin: "center center",
                  }}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity, x, scale, rotateY, y: 0 }}
                  exit={{ opacity: 0, y: -100 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 transform perspective-1000">
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className={`p-3 rounded-full bg-gradient-to-r ${card.color} text-white`}>
                            {card.icon}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
                        </div>
                        {card.trend && (
                          <div
                            className={`flex items-center gap-1 px-3 py-1 rounded-full ${
                              card.trend > 0 ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                            }`}
                          >
                            <TrendingUp className={`w-4 h-4 ${card.trend < 0 ? "transform rotate-180" : ""}`} />
                            <span className="font-semibold">{Math.abs(card.trend)}%</span>
                            <span className="text-xs">{card.period}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-gray-500 text-2xl">{card.prefix}</span>
                        <motion.span
                          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
                          key={`counter-${index}-${isActive}`}
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {isActive ? formatValue(counters[index]) : formatValue(card.value)}
                        </motion.span>
                        <span className="text-gray-500 text-2xl">{card.suffix}</span>
                      </div>

                      <p className="text-gray-600 mb-6">{card.description}</p>

                      {/* Chart Visualization */}
                      <div className="h-16 flex items-end gap-1">
                        {[...Array(12)].map((_, i) => {
                          const height = Math.random() * 100
                          const isHighlighted = i === 8

                          return (
                            <motion.div
                              key={i}
                              className={`w-full rounded-t-sm ${
                                isHighlighted ? `bg-gradient-to-t ${card.color}` : "bg-gray-200"
                              }`}
                              style={{ height: "20%" }}
                              animate={{ height: `${height}%` }}
                              transition={{
                                duration: 0.8,
                                delay: isActive ? i * 0.05 : 0,
                                ease: "easeOut",
                              }}
                            />
                          )
                        })}
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 border-t border-gray-100 flex justify-between items-center">
                      <span className="text-sm text-gray-500">Updated 12 minutes ago</span>
                      {isActive && (
                        <motion.button
                          className="text-sm text-blue-600 font-medium flex items-center gap-1"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          View Details
                          <ChevronRight className="w-4 h-4" />
                        </motion.button>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-4 z-20">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                onClick={handlePrev}
                variant="outline"
                size="icon"
                className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white border-gray-200 shadow-lg"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                onClick={handleNext}
                variant="outline"
                size="icon"
                className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white border-gray-200 shadow-lg"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {cards.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-orange-500" : "bg-gray-300"}`}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={
                index === currentIndex
                  ? {
                      scale: [1, 1.2, 1],
                      transition: { duration: 0.5 },
                    }
                  : {}
              }
            />
          ))}
        </div>

        {/* Play/Pause Button */}
        <div className="flex justify-center mt-6">
          <motion.button
            className={`px-4 py-2 rounded-full text-sm flex items-center gap-2 ${
              isPlaying ? "bg-gray-200 text-gray-700" : "bg-orange-500 text-white"
            }`}
            onClick={() => setIsPlaying(!isPlaying)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isPlaying ? (
              <>
                <span className="block w-3 h-3 bg-gray-700 rounded-sm" /> Pause Auto-Play
              </>
            ) : (
              <>
                <span className="w-0 h-0 border-t-5 border-t-transparent border-l-8 border-l-white border-b-5 border-b-transparent" />{" "}
                Start Auto-Play
              </>
            )}
          </motion.button>
        </div>
      </div>
    </section>
  )
}
