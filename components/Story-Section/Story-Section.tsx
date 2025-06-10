"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedStorySectionProps {
  title?: string
  highlightText?: string
  content?: string[]
  imageSrc?: string
  imageAlt?: string
  reverse?: boolean
  className?: string
  children?: ReactNode
}

export default function AnimatedStorySection({
  title = "Our",
  highlightText = "Story",
  content = [
    "A network of hundreds of clients, six unique warehouse locations across the US, and four domestic and foreign offices now utilize our infrastructure. Quality, performance, and transparency are the foundations of each client's involvement as we grow client wealth and enhance the value of their digital assets. The Amz Vistas team has earned over five figures in income through online sales and is devoted to working as your business partner in the digital age.",
    "The management team at Amz Vistas has extensive experience in product development and e-commerce marketplaces, and they are dedicated automation service providers. When our founders encountered challenges in the e-commerce business, they established Amz Vistas to provide a platform that automates and streamlines the key areas needed to run a successful e-commerce automation model.",
  ],
  imageSrc = "/placeholder.svg?height=400&width=500",
  imageAlt = "E-commerce illustration",
  reverse = false,
  className = "",
  children,
}: AnimatedStorySectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, x: reverse ? 50 : -50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, x: reverse ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  }

  return (
    <section className={`py-16 px-4 bg-white ${className}`}>
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:grid-flow-col-dense" : ""}`}
        >
          {/* Image Section */}
          <motion.div className={`${reverse ? "lg:col-start-2" : ""}`} variants={imageVariants}>
            <div className="relative">
              <motion.img
                src={imageSrc || "/placeholder.svg"}
                alt={imageAlt}
                className="w-full h-auto max-w-lg mx-auto"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
              />

              {/* Floating Animation Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full opacity-20"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full opacity-20"
                animate={{
                  y: [0, 10, 0],
                  scale: [1, 0.9, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div className={`${reverse ? "lg:col-start-1" : ""}`} variants={textVariants}>
            <motion.h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-8" variants={itemVariants}>
              {title} <span className="text-orange-500">{highlightText}</span>
            </motion.h2>

            <div className="space-y-6">
              {content.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-gray-600 text-lg leading-relaxed"
                  variants={itemVariants}
                  custom={index}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {children && (
              <motion.div className="mt-8" variants={itemVariants}>
                {children}
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
