"use client"

import type React from "react"

import { motion, useInView, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { TrendingUp, Award, Package, Users } from "lucide-react"

interface StatItem {
  number: number
  suffix: string
  title: string
  description: string
  icon?: React.ElementType
  color?: string
}

interface StatsSectionProps {
  stats?: StatItem[]
  backgroundColor?: string
  textColor?: string
  numberColor?: string
  title?: string
  subtitle?: string
}

// Animated counter component
function AnimatedCounter({
  value,
  suffix = "",
  duration = 2,
  color = "#1f2937",
}: {
  value: number
  suffix?: string
  duration?: number
  color?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: duration * 1000, bounce: 0.2 })
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

  return (
    <span ref={ref} className="tabular-nums relative inline-block" style={{ color }}>
      0{suffix}
    </span>
  )
}

export default function StatsSection({
  stats = [
    {
      number: 100,
      suffix: "+",
      title: "Years Combined Leadership",
      description: "Experience In Ecommerce Logistics And Tech Industry",
      icon: Users,
      color: "#3b82f6", // blue-500
    },
    {
      number: 100,
      suffix: "+",
      title: "Million In Amazon Revenue",
      description: "",
      icon: TrendingUp,
      color: "#f97316", // orange-500
    },
    {
      number: 12,
      suffix: "+",
      title: "Exclusive Logistics Centers",
      description: "",
      icon: Package,
      color: "#10b981", // emerald-500
    },
    {
      number: 1000,
      suffix: "+",
      title: "Brand Licensing Partners",
      description: "",
      icon: Award,
      color: "#8b5cf6", // violet-500
    },
  ],
  backgroundColor = "#f8f9fa",
  textColor = "#6b7280",
  numberColor = "#1f2937",
  title = "Our Impact in Numbers",
  subtitle = "Discover the scale and reach of our e-commerce operations",
}: StatsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.6, 1, 1, 0.6])
  const titleY = useTransform(scrollYProgress, [0, 0.5], ["0%", "50%"])

  // Generate particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }))

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

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const subtitleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.4 + i * 0.2,
      },
    }),
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
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.3,
      },
    },
  }

  const iconVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    pulse: {
      scale: [1, 1.1, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop" as const,
      },
    },
  }



  return (
    <motion.section
      ref={sectionRef}
      className="py-24 px-4 relative overflow-hidden"
      style={{ backgroundColor }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Particle background */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-blue-500 opacity-10"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            filter: "blur(1px)",
          }}
          animate={{
            y: [0, -100, -200],
            opacity: [0, 0.2, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}

      {/* Background gradient effects */}
      <motion.div className="absolute inset-0 opacity-10 z-0" style={{ y: backgroundY, opacity: backgroundOpacity }}>
        <motion.div
          className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-200 rounded-full blur-[8rem]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        {/* <motion.div
          className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-orange-200 rounded-full blur-[8rem]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 5,
          }}
        /> */}
      </motion.div>

      {/* Mouse follow effect */}
      {windowSize.width > 768 && (
        <motion.div
          className="hidden md:block absolute w-[20rem] h-[20rem] rounded-full bg-gradient-to-r from-blue-100 to-orange-100 opacity-30 blur-[6rem] pointer-events-none"
          animate={{
            x: mousePosition.x - windowSize.width / 2,
            y: mousePosition.y - windowSize.height / 2,
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 30,
            mass: 0.5,
          }}
        />
      )}

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section header */}
        <motion.div className="text-center mb-16" style={{ y: titleY }}>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: numberColor }}
            variants={titleVariants}
          >
            {title}
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: textColor }}
            variants={subtitleVariants}
          >
            {subtitle}
          </motion.p>

         
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon || TrendingUp
            return (
              <motion.div
                key={index}
                className="relative bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 group"
                variants={itemVariants}
                custom={index}
                whileHover={{
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 },
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Background glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at center, ${stat.color}20 0%, transparent 70%)`,
                    filter: "blur(20px)",
                  }}
                  transition={{ duration: 0.5 }}
                />

                {/* Icon */}
                <motion.div
                  className="mb-6 mx-auto w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: `${stat.color}15`,
                    color: stat.color,
                  }}
                  variants={iconVariants}
                  animate={["visible", "pulse"]}
                >
                  <Icon size={28} />
                </motion.div>

                {/* Animated Number */}
                <motion.div className="mb-4 perspective-1000" variants={numberVariants}>
                  <motion.h3
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 relative"
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <AnimatedCounter
                      value={stat.number}
                      suffix={stat.suffix}
                      duration={2 + index * 0.3}
                      color={stat.color}
                    />

                    {/* Underline effect */}
                    <motion.div
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 rounded-full"
                      style={{ backgroundColor: stat.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: "60%" }}
                      transition={{ delay: 1 + index * 0.2, duration: 0.8 }}
                    />
                  </motion.h3>
                </motion.div>

                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                >
                  <motion.h4 className="text-lg md:text-xl font-semibold mb-2" style={{ color: numberColor }}>
                    {stat.title}
                  </motion.h4>

                  {stat.description && (
                    <motion.p className="text-sm md:text-base leading-relaxed" style={{ color: textColor }}>
                      {stat.description}
                    </motion.p>
                  )}
                </motion.div>

                {/* Decorative corner accents */}
                <motion.div
                  className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 rounded-tl-lg opacity-0 group-hover:opacity-100"
                  style={{ borderColor: stat.color }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.3 }}
                />
                <motion.div
                  className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 rounded-br-lg opacity-0 group-hover:opacity-100"
                  style={{ borderColor: stat.color }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1.3 + index * 0.1, duration: 0.3 }}
                />
              </motion.div>
            )
          })}
        </div>

      
      </div>
    </motion.section>
  )
}
