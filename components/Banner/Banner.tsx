"use client"

import type { ReactNode } from "react"
import { motion, Variants } from "framer-motion"

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
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
  } satisfies Variants;


  const backgroundVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  } satisfies Variants;

  const highlightVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: "easeOut",
      },
    },
  } satisfies Variants;

  return (
    <section className={`relative h-[60vh] flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
  <motion.div
    className="w-full h-full bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url(${backgroundImage})`,
    }}
    variants={backgroundVariants}
    initial="hidden"
    animate="visible"
  />
  <motion.div
    className="absolute inset-0 bg-black"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.3 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  />
</div>


      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" variants={itemVariants}>
          {title}{" "}
          <motion.span className="text-orange-500" variants={highlightVariants} initial="hidden" animate="visible">
            {highlightText}
          </motion.span>
        </motion.h1>

        {subtitle && (
          <motion.p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto" variants={itemVariants}>
            {subtitle}
          </motion.p>
        )}

        {children && <motion.div variants={itemVariants}>{children}</motion.div>}
      </motion.div>
    </section>
  )
}
