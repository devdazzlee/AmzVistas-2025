"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface CallToActionSectionProps {
  title?: string
  highlightWords?: string[]
  description?: string
  className?: string
}

export default function CallToActionSection({
  title = "Give Us A Chance To Build Your Assets",
  highlightWords = ["Chance", "Assets"],
  description = "Our team of professionals is committed to providing outstanding service and support to make sure that your online business operates smoothly and effectively. Whether you're just getting started with e-commerce or hoping to upgrade your current business, we stand by you and provide Walmart WFS, Amazon Wholesale FBA, inventory management, order fulfillment, shipping, and customer support.",
  className = "",
}: CallToActionSectionProps) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  // Split title into words for animation
  const titleWords = title.split(" ")

  // Create a mapping of highlighted words
  const highlightMap = highlightWords.reduce(
    (acc, word) => {
      acc[word.toLowerCase()] = true
      return acc
    },
    {} as Record<string, boolean>,
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const wordVariants = {
    hidden: {
      y: 20,
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.6,
      },
    },
  }

  const backgroundElements = Array.from({ length: 5 }).map((_, i) => (
    <motion.div
      key={i}
      className="absolute rounded-full bg-gradient-to-r from-orange-100 to-orange-200 opacity-80"
      style={{
        width: `${Math.random() * 8 + 4}rem`,
        height: `${Math.random() * 8 + 4}rem`,
        left: `${Math.random() * 90 + 5}%`,
        top: `${Math.random() * 90 + 5}%`,
        filter: "blur(50px)",
        zIndex: 0,
      }}
      animate={{
        x: [0, Math.random() * 20 - 10],
        y: [0, Math.random() * 20 - 10],
        scale: [1, Math.random() * 0.4 + 0.8, 1],
      }}
      transition={{
        duration: Math.random() * 5 + 10,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
    />
  ))

  return (
    <section
      ref={sectionRef}
      className={`relative py-20 px-4 overflow-hidden bg-gradient-to-b from-white to-gray-50 ${className}`}
    >
      {/* Animated background elements */}
      {backgroundElements}

      {/* Content container with z-index to appear above background */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {titleWords.map((word, index) => (
            <motion.span
              key={index}
              className={`inline-block mx-1 ${highlightMap[word.toLowerCase()] ? "text-orange-500" : ""}`}
              variants={wordVariants}
              whileHover={{
                scale: 1.05,
                color: highlightMap[word.toLowerCase()] ? "#f97316" : "#1f2937",
                transition: { duration: 0.2 },
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p
          className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={descriptionVariants}
        >
          {description}
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.button
            className="px-8 py-3 bg-orange-500 text-white font-medium rounded-lg shadow-lg hover:bg-orange-600 transform transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.4)" }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>

      {/* Animated decorative elements */}
      <motion.div
        className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-gradient-to-r from-orange-100/40 to-orange-200/40"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.3, duration: 1.5 }}
      />
      <motion.div
        className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-r from-gray-100/50 to-gray-200/50"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      />
    </section>
  )
}
