"use client"

import { Star } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function VisionSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const starVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
  }

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -5 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  }

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse" as const,
      ease: "easeInOut",
    },
  }

  const glowAnimation = {
    boxShadow: [
      "0 0 10px 2px rgba(59, 130, 246, 0.3)",
      "0 0 20px 6px rgba(59, 130, 246, 0.4)",
      "0 0 10px 2px rgba(59, 130, 246, 0.3)",
    ],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse" as const,
    },
  }

  return (
    <section ref={sectionRef} className="py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Content Section */}
          <div className="text-center lg:text-left">
            {/* Rating Section */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-3 mb-10"
              variants={itemVariants}
            >
              <span className="text-gray-700 font-medium">4.5+ rating over the past 3+ years</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <motion.div key={index} custom={index} variants={starVariants}>
                    <Star
                      className={`w-5 h-5 ${index < 4 ? "fill-yellow-400 text-yellow-400" : "fill-yellow-300 text-yellow-300"}`}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Vision Heading */}
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500 mb-8">
                Our Vision
              </h2>
            </motion.div>

            {/* Vision Description */}
            <motion.p
              className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Our aim is to empower our clients businesses to embrace evolving technologies in the AI era. By 2024, our
              objective is to assist our clients in achieving a growth rate of{" "}
              <span className="font-bold text-blue-600">100 times</span> their initial investments. We prioritize
              forming partnerships because we believe that mutual growth is of utmost significance.
            </motion.p>

            {/* Call to action button */}
            <motion.div className="mt-10" variants={itemVariants}>
              
            </motion.div>
          </div>

          {/* Illustration Section */}
          <motion.div className="flex justify-center lg:justify-end" variants={itemVariants}>
            <motion.div className="relative w-full max-w-md" variants={imageVariants} animate={floatingAnimation}>
              <motion.div
                className="absolute inset-0 rounded-3xl blur-xl opacity-30 bg-blue-400"
                animate={glowAnimation}
              ></motion.div>
              <motion.img
                src="/images/About_Us/Our_Vision.png"
                alt="Colorful geometric illustration representing business growth"
                className="w-full h-auto relative z-10 rounded-2xl"
                whileHover={{
                  scale: 1.03,
                  rotate: 2,
                  transition: { duration: 0.3 },
                }}
              />

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-16 h-16 bg-yellow-400 rounded-full opacity-80 z-0"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 0.9, 0.7],
                  transition: { duration: 5, repeat: Number.POSITIVE_INFINITY },
                }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 rounded-full opacity-80 z-0"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 0.8, 0.6],
                  transition: { duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 },
                }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
