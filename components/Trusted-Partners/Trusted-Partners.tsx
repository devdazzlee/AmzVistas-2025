"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Partner {
  id: string
  name: string
  logo: string
  description?: string
  website?: string
}

interface TrustedPartnersSectionProps {
  title?: string
  subtitle?: string
  backgroundText?: string
  partners?: Partner[]
  autoScroll?: boolean
  scrollSpeed?: number
  showDescriptions?: boolean
  backgroundColor?: string
  accentColor?: string
}

export default function TrustedPartnersSection({
  title = "Our Trusted Partners",
  subtitle = "Recognized and featured by leading industry publications",
  backgroundText = "BUSINESS INSIDER",
  partners = [
    { id: "1", name: "Stellar", logo: "STELLAR", description: "Leading business publication" },
    { id: "2", name: "Skript", logo: "Skript", description: "Technology news platform" },
    { id: "3", name: "Elite Daily", logo: "ELITE DAILY", description: "Millennial news source" },
    { id: "4", name: "Maxim", logo: "MAXIM", description: "Lifestyle magazine" },
    { id: "5", name: "Yahoo", logo: "yahoo!", description: "Global media company" },
    { id: "6", name: "Forbes", logo: "Forbes", description: "Business magazine" },
    { id: "7", name: "MarketWatch", logo: "MarketWatch", description: "Financial news" },
  ],
  autoScroll = true,
  scrollSpeed = 30,
  showDescriptions = false,
  backgroundColor = "bg-white",
  accentColor = "text-blue-600",
}: TrustedPartnersSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!autoScroll) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length)
    }, scrollSpeed * 1000)

    return () => clearInterval(interval)
  }, [autoScroll, scrollSpeed, partners.length])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const backgroundTextVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 0.05,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  }

  const logoVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
  }

  const floatingVariants = {
    float: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const glowVariants = {
    glow: {
      boxShadow: [
        "0 0 20px rgba(59, 130, 246, 0.3)",
        "0 0 40px rgba(59, 130, 246, 0.6)",
        "0 0 20px rgba(59, 130, 246, 0.3)",
      ],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const shimmerVariants = {
    shimmer: {
      backgroundPosition: ["200% 0", "-200% 0"],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      },
    },
  }

  return (
    <motion.section
      className={`py-20 px-4 relative overflow-hidden ${backgroundColor}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <div className="w-96 h-96 border border-blue-100 rounded-full opacity-20" />
        </motion.div>
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-10"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Background Text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          variants={backgroundTextVariants}
        >
          <motion.h3
            className="text-8xl lg:text-9xl font-black text-gray-200 select-none"
            style={{
              background: "linear-gradient(45deg, #f3f4f6, #e5e7eb, #f3f4f6)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            variants={shimmerVariants}
            animate="shimmer"
          >
            {backgroundText}
          </motion.h3>
        </motion.div>

        {/* Header */}
        <div className="text-center mb-16 relative z-20">
          <motion.h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${accentColor}`} variants={titleVariants}>
            <motion.span
              className="inline-block"
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
              }}
            >
              {title}
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            variants={titleVariants}
            transition={{ delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Partners Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center"
          variants={containerVariants}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              className="group relative"
              variants={logoVariants}
              custom={index}
              whileHover={{
                scale: 1.1,
                zIndex: 10,
              }}
              animate={index === currentIndex ? "float" : ""}
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-xl"
                variants={glowVariants}
                animate={index === currentIndex ? "glow" : ""}
              />

              {/* Logo Container */}
              <motion.div
                className="relative bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                variants={floatingVariants}
                animate={index === currentIndex ? "float" : ""}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 rounded-xl"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                    backgroundSize: "200% 100%",
                  }}
                  animate={{
                    backgroundPosition: ["200% 0", "-200% 0"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />

                {/* Logo Text */}
                <motion.div
                  className="text-center relative z-10"
                  whileHover={{
                    scale: 1.05,
                  }}
                >
                  <h3 className="text-lg font-bold text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                    {partner.logo}
                  </h3>

                  {/* Description on Hover */}
                  {showDescriptions && partner.description && (
                    <motion.p
                      className="text-sm text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                    >
                      {partner.description}
                    </motion.p>
                  )}
                </motion.div>

                {/* Highlight Border */}
                <motion.div
                  className="absolute inset-0 border-2 border-blue-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                />
              </motion.div>

              {/* Floating Particles */}
              <motion.div
                className="absolute -top-2 -right-2 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  y: [-10, -20, -10],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decorative Line */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="h-1 w-32 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 rounded-full" />
        </motion.div>
      </div>
    </motion.section>
  )
}
