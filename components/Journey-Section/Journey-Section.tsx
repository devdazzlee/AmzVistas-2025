"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Package, ShoppingCart, Star, Award, Zap } from "lucide-react"

export default function JourneySection() {
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
  const headingY = useTransform(scrollYProgress, [0, 0.5], ["0%", "50%"])

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
  const barVariants = {
    hidden: { width: 0 },
    visible: (i: number) => ({
      width: "100%",
      transition: {
        duration: 1.5,
        ease: [0.25, 1, 0.5, 1],
        delay: i * 0.3,
      },
    }),
  }

  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.5,
      },
    },
  }

  const subHeadingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.8,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 1 + i * 0.3,
      },
    }),
  }

  const buttonVariants = {
    rest: { scale: 1, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" },
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.98 },
  }

  const iconVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -30 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 1.5 + i * 0.2,
      },
    }),
    floating: {
      y: [0, -8, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    }
  }

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 2 + i * 0.15,
      },
    }),
  }

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: [0.3, 0.5, 0.3],
      scale: [1, 1.2, 1],
      transition: {
        opacity: {
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        },
        scale: {
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        },
      },
    },
  }

  return (
    <section
      ref={sectionRef}
      className="py-6 px-4 bg-white overflow-hidden relative"
      style={{
        perspective: "1000px",
      }}
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
        <motion.div
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
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-teal-200 rounded-full blur-[10rem]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 2,
          }}
        />
      </motion.div>

      {/* Mouse follow effect */}
      {windowSize.width > 768 && (
        <motion.div
          className="hidden md:block absolute w-[20rem] h-[20rem] rounded-full bg-gradient-to-r from-blue-100 to-purple-100 opacity-30 blur-[6rem] pointer-events-none"
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

      {/* Top colored bars with animation */}
      <div className="w-full h-2 mb-20 overflow-hidden relative z-10">
        <div className="flex">
          <motion.div
            className="flex-1 bg-gradient-to-r from-blue-400 to-blue-600 h-full origin-left"
            variants={barVariants}
            custom={0}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
          <motion.div
            className="flex-1 bg-gradient-to-r from-orange-400 to-orange-600 h-full origin-right"
            variants={barVariants}
            custom={1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Main heading with animation */}
        <motion.div
          className="text-center mb-6"
          style={{ y: headingY }}
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="inline-block relative">
            <motion.span
              className="absolute -top-10 -left-10 text-yellow-500"
              variants={iconVariants}
              custom={0}
              initial="hidden"
              animate={isInView ? ["visible", "floating"] : "hidden"}
            >
              <Star className="w-8 h-8" fill="currentColor" />
            </motion.span>
            <motion.span
              className="absolute -top-8 -right-8 text-orange-500"
              variants={iconVariants}
              custom={1}
              initial="hidden"
              animate={isInView ? ["visible", "floating"] : "hidden"}
            >
              <Award className="w-6 h-6" />
            </motion.span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Revolutionize Your E-Commerce Journey</h1>
            {/* <motion.div
              className="h-1 w-40 md:w-80 bg-gradient-to-r from-blue-400 to-orange-400 mx-auto rounded-full"
              initial={{ width: 0, opacity: 0 }}
              animate={isInView ? { width: "60%", opacity: 1 } : { width: 0, opacity: 0 }}
              transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
            /> */}
          </motion.div>
        </motion.div>

        {/* Subheading with animation - FIXED UNDERLINE ISSUE */}
        <motion.div
          className="text-center my-16"
          variants={subHeadingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="relative inline-block">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 pb-2">
              Timelines and Predictable Growth Of Your{" "}
              <motion.span
                className="text-orange-500 font-bold"
                whileHover={{ scale: 1.05, color: "#f97316" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                E-Commerce
              </motion.span>{" "}
              <motion.span
                className="text-teal-600 font-bold"
                whileHover={{ scale: 1.05, color: "#0d9488" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Assets
              </motion.span>
            </h2>
            {/* Fixed underline that stays in position */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-teal-500 to-blue-500 rounded-full"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
              transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
            />
          </div>
        </motion.div>

        {/* Two column cards with animation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Card - Amazon FBA */}
          <motion.div
            className="bg-white rounded-2xl p-10 shadow-[0_10px_50px_rgba(59,_130,_246,_0.3)] border border-blue-100 relative overflow-hidden"
            style={{ transformStyle: "preserve-3d" }}
            variants={cardVariants}
            custom={0}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{
              y: -15,
              rotateY: 5,
              boxShadow: "0 20px 60px rgba(59, 130, 246, 0.4)",
              transition: { duration: 0.4 },
            }}
          >
            {/* Card glow effect */}
            <motion.div
              className="absolute -top-20 -right-20 w-60 h-60 bg-blue-200 rounded-full opacity-50 blur-3xl"
              variants={glowVariants}
              initial="hidden"
              animate="visible"
            />

            <div className="relative z-10">
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg transform rotate-12"
                variants={iconVariants}
                custom={0}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ rotate: 0, scale: 1.1 }}
              >
                <ShoppingCart className="w-10 h-10 text-white" />
              </motion.div>

              <motion.h3
                className="text-3xl font-bold text-gray-900 text-center mb-8 leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.8 }}
              >
                Welcome to the zone of sustainable assets with our <span className="text-orange-500">Amazon</span>{" "}
                <span className="text-teal-600">FBA Business</span> Owner program.
              </motion.h3>

              <motion.ul className="space-y-6 mb-10">
                {[
                  "Long-term success and the highest growth rate in the industry",
                  "Distinctive hybrid approach and winning Buy-Box strategy",
                  "Over 200 successful Amazon FBA businesses have thrived using our proven model",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    variants={listItemVariants}
                    custom={index}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    <div className="mr-4 mt-1">
                      <motion.div
                        className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.2 }}
                      >
                        <CheckCircle className="w-4 h-4 text-white" />
                      </motion.div>
                    </div>
                    <p className="text-gray-700 text-lg">{item}</p>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.4, duration: 0.8 }}
              >
                <motion.div variants={buttonVariants} initial="rest" whileHover="hover" whileTap="tap">
                  <Button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-10 py-7 text-lg font-bold rounded-xl shadow-lg shadow-blue-200">
                    Schedule A Free Consultation
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.div>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Card - Walmart WFS */}
          <motion.div
            className="bg-white rounded-2xl p-10 shadow-[0_10px_50px_rgba(249,_115,_22,_0.3)] border border-orange-100 relative overflow-hidden"
            style={{ transformStyle: "preserve-3d" }}
            variants={cardVariants}
            custom={1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{
              y: -15,
              rotateY: -5,
              boxShadow: "0 20px 60px rgba(249, 115, 22, 0.4)",
              transition: { duration: 0.4 },
            }}
          >
            {/* Card glow effect */}
            <motion.div
              className="absolute -top-20 -right-20 w-60 h-60 bg-orange-200 rounded-full opacity-50 blur-3xl"
              variants={glowVariants}
              initial="hidden"
              animate="visible"
            />

            <div className="relative z-10">
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg transform -rotate-12"
                variants={iconVariants}
                custom={1}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ rotate: 0, scale: 1.1 }}
              >
                <Package className="w-10 h-10 text-white" />
              </motion.div>

              <motion.h3
                className="text-3xl font-bold text-gray-900 text-center mb-8 leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.8 }}
              >
                Dive into the Opportunity of the Decade with <span className="text-orange-500">Walmart</span>{" "}
                <span className="text-teal-600">WFS</span>!
              </motion.h3>

              <motion.ul className="space-y-6 mb-10">
                {[
                  "Rapid growth to six figures and the highest ROI in the industry",
                  "Less than 200,000 marketplace sellers with $14 billion in e-commerce revenue",
                  "Millions of opportunities for new sellers in this growing marketplace",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    variants={listItemVariants}
                    custom={index + 3}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    <div className="mr-4 mt-1">
                      <motion.div
                        className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.2 }}
                      >
                        <CheckCircle className="w-4 h-4 text-white" />
                      </motion.div>
                    </div>
                    <p className="text-gray-700 text-lg">{item}</p>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.6, duration: 0.8 }}
              >
                <motion.div variants={buttonVariants} initial="rest" whileHover="hover" whileTap="tap">
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white px-10 py-7 text-lg font-bold rounded-xl shadow-lg shadow-orange-200">
                    Schedule A Free Consultation
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.div>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom accent */}
        <motion.div
          className="mt-24 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          <motion.div
            className="flex items-center gap-2 text-gray-700 bg-gray-50 px-6 py-3 rounded-full shadow-md border border-gray-100"
            whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
          >
            <Zap className="w-5 h-5 text-yellow-500" />
            <span>Join over 500+ successful business owners who trust our services</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
