"use client"

import { useRef } from "react"
import type { ReactNode } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"

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
  highlightText = "Orbit Syndicate",
  secondaryText = "Process",
  description = "With the help of our tested infrastructure, smooth-running onboarding process, and the 10+ years of expertise in Amazon and Walmart that we dedicate to every client, we want to make your Orbit Syndicate e-commerce business the most flexible and long-lasting asset in your portfolio",
  imageSrc = "/placeholder.svg?height=300&width=400",
  imageAlt = "Process illustration",
  reverse = false,
  className = "",
  children,
}: ProcessSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  
  // Parallax effect for the image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50])
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }
  
  const imageVariants = {
    hidden: { opacity: 0, x: reverse ? 50 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8
      }
    }
  }

  return (
    <motion.section 
      ref={sectionRef}
      className={`py-16 px-4 bg-gray-50 overflow-hidden ${className}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:grid-flow-col-dense" : ""}`}
        >
          {/* Image Section */}
          <div className={` max-h-150 ${reverse ? "lg:col-start-2" : ""}`}>
            <motion.div 
              className="relative  rounded-lg shadow-lg "
              variants={imageVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div style={{ y: imageY }}>
                <motion.img 
                  src={imageSrc || "/placeholder.svg"} 
                  alt={imageAlt} 
                  className="w-full h-auto rounded-lg transform transition-all duration-700"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2 }}
                />
              </motion.div>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          </div>

          {/* Content Section */}
          <motion.div 
            className={`${reverse ? "lg:col-start-1" : ""}`}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-2xl md:text-2xl font-bold mb-6"
              variants={itemVariants}
            >
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {title}{" "}
              </motion.span>
              <motion.span 
                className="text-orange-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                {highlightText}
              </motion.span>{" "}
              <motion.span 
                className="text-teal-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                {secondaryText}
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-700 text-lg leading-relaxed mb-8"
              variants={itemVariants}
            >
              {description}
            </motion.p>
            
            <motion.div variants={itemVariants}>
              {children}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
