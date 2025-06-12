"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { useRef } from "react"

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
  const sectionRef = useRef<HTMLDivElement>(null)

  // Split title into characters for animation
  const titleChars = title.split("")
  const highlightChars = highlightText.split("")

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: i * 0.1,
      },
    }),
  }

  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.2, 0.65, 0.3, 0.9],
        delay: i * 0.04,
      },
    }),
  }

  const imageContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 30,
      rotateY: reverse ? 10 : -10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 1, 0.5, 1],
        delay: 0.2,
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.5,
      },
    },
  }

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3 + i * 0.2,
      },
    }),
  }

  const decorationVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: [0.4, 0.7, 0.4],
      scale: 1,
      transition: {
        opacity: {
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: i * 0.5,
        },
        scale: {
          duration: 0.8,
          ease: "backOut",
          delay: 0.5 + i * 0.2,
        },
      },
    }),
  }

  // Generate random decorative elements
  const decorations = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.floor(Math.random() * 20) + 10,
    top: `${Math.floor(Math.random() * 80) + 10}%`,
    left: `${Math.floor(Math.random() * 80) + 10}%`,
    color: ["bg-orange-400", "bg-blue-400", "bg-purple-400", "bg-green-400"][Math.floor(Math.random() * 4)],
    delay: i * 0.2,
    duration: Math.floor(Math.random() * 5) + 3,
  }))

  return (
    <section
      ref={sectionRef}
      className={`py-24 px-4 bg-gradient-to-br from-white to-orange-50 overflow-hidden relative ${className}`}
    >
      {/* Background decorative elements */}
      {decorations.map((decoration, index) => (
        <motion.div
          key={decoration.id}
          className={`absolute rounded-full opacity-20 ${decoration.color} blur-sm`}
          style={{
            width: decoration.size,
            height: decoration.size,
            top: decoration.top,
            left: decoration.left,
            zIndex: 0,
          }}
          variants={decorationVariants}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: decoration.duration,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: decoration.delay,
          }}
        />
      ))}

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reverse ? "lg:grid-flow-col-dense" : ""}`}
        >
          {/* Image Section */}
          <motion.div className={`${reverse ? "lg:col-start-2" : ""} relative`} variants={imageContainerVariants}>
            <div className="relative perspective-1000">
              {/* Shadow/Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-300 to-blue-300 opacity-30 blur-xl"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                  scale: [0.95, 1.05, 0.95],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />

              {/* Main image with 3D effect */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                variants={imageVariants}
                whileHover={{
                  scale: 1.03,
                  rotateY: reverse ? -5 : 5,
                  transition: { duration: 0.4 },
                }}
              >
                <motion.img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-auto"
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                />

                {/* Overlay gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0"
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>

              {/* Floating Animation Elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-20 h-20 bg-orange-500 rounded-full opacity-20 blur-md"
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-10 -left-10 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-md"
                animate={{
                  y: [0, 20, 0],
                  scale: [1, 0.8, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />

              {/* Decorative elements */}
              <motion.div
                className="absolute top-1/4 -right-4 w-8 h-8 bg-orange-400 rounded-full"
                variants={decorationVariants}
                custom={0}
              />
              <motion.div
                className="absolute bottom-1/4 -left-4 w-6 h-6 bg-blue-400 rounded-full"
                variants={decorationVariants}
                custom={1}
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div className={`${reverse ? "lg:col-start-1" : ""} relative`} variants={textVariants}>
            {/* Title with character animation */}
            <motion.h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-10 flex flex-wrap">
              <motion.span className="flex mr-3">
                {titleChars.map((char, index) => (
                  <motion.span
                    key={`title-${index}`}
                    variants={charVariants}
                    custom={index}
                    className={char === " " ? "mr-2" : ""}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
              <motion.span className="flex text-orange-500 relative">
                {highlightChars.map((char, index) => (
                  <motion.span
                    key={`highlight-${index}`}
                    variants={charVariants}
                    custom={index + titleChars.length}
                    className={char === " " ? "mr-2" : ""}
                  >
                    {char}
                  </motion.span>
                ))}
                <motion.span
                  className="absolute -bottom-3 left-0 h-1 bg-orange-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </motion.span>
            </motion.h2>

            <div className="space-y-6">
              {content.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-gray-600 text-lg leading-relaxed"
                  variants={paragraphVariants}
                  custom={index}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {children && (
              <motion.div className="mt-10" variants={itemVariants} custom={content.length + 1}>
                {children}
              </motion.div>
            )}

            {/* Decorative line */}
            <motion.div
              className="absolute -left-4 top-0 bottom-0 w-1 rounded-full"
              style={{ background: "linear-gradient(to bottom, transparent, #fb923c, transparent)" }}
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: "100%", opacity: 0.6 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
