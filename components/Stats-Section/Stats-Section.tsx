"use client"

import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"

interface StatItem {
  number: number
  suffix: string
  title: string
  description: string
}

interface StatsSectionProps {
  stats?: StatItem[]
  backgroundColor?: string
  textColor?: string
  numberColor?: string
}

// Animated counter component
function AnimatedCounter({
  value,
  suffix = "",
  duration = 2,
}: {
  value: number
  suffix?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: duration * 1000 })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix
      }
    })
  }, [springValue, suffix])

  return <span ref={ref}>0{suffix}</span>
}

export default function StatsSection({
  stats = [
    {
      number: 100,
      suffix: "+",
      title: "Years Combined Leadership",
      description: "Experience In Ecommerce Logistics And Tech Industry",
    },
    {
      number: 100,
      suffix: "+",
      title: "Million In Amazon Revenue",
      description: "",
    },
    {
      number: 12,
      suffix: "+",
      title: "Exclusive Logistics Centers",
      description: "",
    },
    {
      number: 1000,
      suffix: "+",
      title: "Brand Licensing Partners",
      description: "",
    },
  ],
  backgroundColor = "#f8f9fa",
  textColor = "#6b7280",
  numberColor = "#1f2937",
}: StatsSectionProps) {
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
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const numberVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  }

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  }

  return (
    <motion.section
      className="py-16 px-4"
      style={{ backgroundColor }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              {/* Animated Number */}
              <motion.div className="mb-4" variants={numberVariants}>
                <motion.h3
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
                  style={{ color: numberColor }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }}
                >
                  <AnimatedCounter
                    value={stat.number}
                    suffix={stat.suffix}
                    duration={2 + index * 0.2} // Stagger the animation timing
                  />
                </motion.h3>
              </motion.div>

              {/* Text Content */}
              <motion.div variants={textVariants}>
                <motion.h4
                  className="text-lg md:text-xl font-semibold mb-2"
                  style={{ color: numberColor }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  {stat.title}
                </motion.h4>

                {stat.description && (
                  <motion.p
                    className="text-sm md:text-base leading-relaxed"
                    style={{ color: textColor }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    {stat.description}
                  </motion.p>
                )}
              </motion.div>

              {/* Decorative element */}
              <motion.div
                className="mt-4 mx-auto w-12 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full opacity-0 group-hover:opacity-100"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-10 left-10 w-32 h-32 bg-blue-500/5 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-24 h-24 bg-orange-500/5 rounded-full"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>
      </div>
    </motion.section>
  )
}
