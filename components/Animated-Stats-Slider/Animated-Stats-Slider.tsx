"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, TrendingUp, BarChart3, DollarSign, Package } from "lucide-react"
import { Button } from "@/components/ui/button"

interface StatItem {
  id: string
  title: string
  value: number
  prefix?: string
  suffix?: string
  trend?: number
  period?: string
  image?: string
  color?: string
  icon?: React.ReactNode
}

interface AnimatedStatsSliderProps {
  title?: string
  autoPlay?: boolean
  interval?: number
  stats?: StatItem[]
  showControls?: boolean
  showIndicators?: boolean
  showImages?: boolean
}

export default function AnimatedStatsSlider({
  title = "Our Success Stats",
  autoPlay = true,
  interval = 5000,
  showControls = true,
  showIndicators = true,
  showImages = true,
  stats = [
    {
      id: "1",
      title: "Daily Sales",
      value: 4496,
      prefix: "$",
      suffix: "USD",
      trend: 28,
      period: "Previous 7 days",
      image: "/amazon-seller-stats.png",
      color: "from-orange-400 to-amber-600",
      icon: <DollarSign className="w-6 h-6" />,
    },
    {
      id: "2",
      title: "Units Sold Today",
      value: 39,
      trend: 42,
      period: "Last year",
      image: "/amazon-seller-stats.png",
      color: "from-blue-400 to-blue-600",
      icon: <Package className="w-6 h-6" />,
    },
    {
      id: "3",
      title: "Weekly Revenue",
      value: 69320,
      prefix: "$",
      suffix: "USD",
      trend: 28,
      period: "Previous 7 days",
      image: "/amazon-seller-stats.png",
      color: "from-green-400 to-emerald-600",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      id: "4",
      title: "Monthly Sales",
      value: 17990,
      prefix: "$",
      suffix: "USD",
      trend: 48,
      period: "Previous period",
      image: "/amazon-seller-stats.png",
      color: "from-purple-400 to-purple-600",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ],
}: AnimatedStatsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [counters, setCounters] = useState<number[]>(stats.map(() => 0))
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const counterRef = useRef<NodeJS.Timeout | null>(null)

  // Handle auto-play
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % stats.length)
      }, interval)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isPlaying, stats.length, interval])

  // Handle counter animation
  useEffect(() => {
    const currentStat = stats[currentIndex]
    const targetValue = currentStat.value
    const duration = 2000 // 2 seconds for counter animation
    const steps = 60 // 60 steps for smooth animation
    const stepTime = duration / steps
    let currentStep = 0

    if (counterRef.current) {
      clearInterval(counterRef.current)
    }

    counterRef.current = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      // Easing function for smoother animation
      const easedProgress = 1 - Math.pow(1 - progress, 3)

      setCounters((prev) => {
        const newCounters = [...prev]
        newCounters[currentIndex] = Math.round(targetValue * easedProgress)
        return newCounters
      })

      if (currentStep >= steps) {
        if (counterRef.current) {
          clearInterval(counterRef.current)
        }
        setCounters((prev) => {
          const newCounters = [...prev]
          newCounters[currentIndex] = targetValue
          return newCounters
        })
      }
    }, stepTime)

    return () => {
      if (counterRef.current) {
        clearInterval(counterRef.current)
      }
    }
  }, [currentIndex, stats])

  const handlePrev = () => {
    setIsPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + stats.length) % stats.length)
  }

  const handleNext = () => {
    setIsPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stats.length)
  }

  const handleIndicatorClick = (index: number) => {
    setIsPlaying(false)
    setCurrentIndex(index)
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
    <section className="py-16 px-4 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-5"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "100px 100px"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
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
          <motion.div
            className="h-1 w-48 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {/* Stats Slider */}
        <div className="relative">
          {/* Main Slider */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="grid md:grid-cols-2 gap-8 items-center p-8"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {/* Stat Content */}
                <div className="space-y-8">
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${stats[currentIndex].color} text-white`}>
                        {stats[currentIndex].icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-600">{stats[currentIndex].title}</h3>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-gray-500 text-xl">{stats[currentIndex].prefix}</span>
                      <motion.span
                        className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
                        key={`counter-${currentIndex}`}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {formatValue(counters[currentIndex])}
                      </motion.span>
                      <span className="text-gray-500 text-xl">{stats[currentIndex].suffix}</span>
                    </div>
                  </motion.div>

                  {/* Trend */}
                  {stats[currentIndex].trend && (
                    <motion.div
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div
                        className={`flex items-center gap-1 px-3 py-1 rounded-full ${
                          stats[currentIndex].trend > 0 ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                        }`}
                      >
                        <TrendingUp
                          className={`w-4 h-4 ${stats[currentIndex].trend < 0 ? "transform rotate-180" : ""}`}
                        />
                        <span className="font-semibold">{Math.abs(stats[currentIndex].trend)}%</span>
                      </div>
                      <span className="text-gray-500">{stats[currentIndex].period}</span>
                    </motion.div>
                  )}

                  {/* Additional Info */}
                  <motion.div
                    className="bg-gray-50 p-4 rounded-lg border border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-blue-500" />
                        <span className="font-medium">Performance Metrics</span>
                      </div>
                      <span className="text-sm text-gray-500">Updated 12 minutes ago</span>
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-4">
                      <div className="text-center p-2 bg-white rounded shadow-sm">
                        <div className="text-sm text-gray-500">Current</div>
                        <div className="font-semibold">
                          {stats[currentIndex].prefix}
                          {formatValue(stats[currentIndex].value)}
                        </div>
                      </div>
                      <div className="text-center p-2 bg-white rounded shadow-sm">
                        <div className="text-sm text-gray-500">Target</div>
                        <div className="font-semibold">
                          {stats[currentIndex].prefix}
                          {formatValue(Math.round(stats[currentIndex].value * 1.2))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Image */}
                {showImages && (
                  <motion.div
                    className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800/10 to-gray-900/30 z-10 rounded-xl" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    />
                    <motion.img
                      src={stats[currentIndex].image}
                      alt={`${stats[currentIndex].title} visualization`}
                      className="w-full h-full object-cover object-top rounded-xl"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div
                      className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg z-20"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6, type: "spring" }}
                    >
                      <div className="text-sm font-medium">Amazon Seller Dashboard</div>
                      <div className="text-xs text-gray-500">Real-time performance metrics</div>
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            {showControls && (
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
            )}
          </div>

          {/* Indicators */}
          {showIndicators && (
            <div className="flex justify-center mt-8 gap-2">
              {stats.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-orange-500" : "bg-gray-300"}`}
                  onClick={() => handleIndicatorClick(index)}
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
          )}
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
