"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Star, Award, Sparkles, ChevronRight } from "lucide-react"

export default function ExcellenceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.6, 1, 1, 0.6])

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
        delay: 0.05 * i,
      },
    }),
  }

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
        delay: 0.5 + i * 0.2,
      },
    }),
  }

  const decorVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        delay: 0.2 + i * 0.15,
      },
    }),
    floating: (i: number) => ({
      y: [0, -10, 0],
      rotate: [0, i % 2 === 0 ? 5 : -5, 0],
      transition: {
        duration: 4 + i,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
        ease: "easeInOut" as const,
      },
    }),
  }

  const lineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "100%",
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut" as const,
        delay: 1.8,
      },
    },
  }

  const highlightVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        delay: 1.2,
      },
    },
  }

  // Split title into words for animation
  const titleWords = "Discover the Excellence of".split(" ")
  const brandName = "Orbit Syndicate"
  const serviceName = "Amazon FBA"
  const lastWord = "Automation"

  // Generate decorative elements
  const decorElements = [
    { icon: Star, color: "text-orange-500", top: "top-10", left: "left-10", size: "w-6 h-6" },
    { icon: Award, color: "text-blue-500", top: "top-20", right: "right-10", size: "w-8 h-8" },
    { icon: Sparkles, color: "text-orange-500", bottom: "bottom-10", right: "right-20", size: "w-5 h-5" },
    { icon: Star, color: "text-blue-500", bottom: "bottom-20", left: "left-20", size: "w-7 h-7" },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 bg-white overflow-hidden relative"
      style={{ perspective: "1000px" }}
    >
      {/* Background gradient effects */}
      <motion.div className="absolute inset-0 opacity-10 z-0" style={{ y: backgroundY, opacity }}>
        <motion.div
          className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-orange-400 rounded-full blur-[8rem]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[25rem] h-[25rem] bg-blue-400 rounded-full blur-[8rem]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 3,
          }}
        />
      </motion.div>

      {/* Decorative elements */}
      {decorElements.map((elem, i) => (
        <motion.div
          key={i}
          className={`absolute ${elem.top || ""} ${elem.bottom || ""} ${elem.left || ""} ${
            elem.right || ""
          } ${elem.color} opacity-30 z-10`}
          variants={decorVariants}
          custom={i}
          initial="hidden"
          animate={isInView ? ["visible", "floating"] : "hidden"}
        >
          <elem.icon className={elem.size} />
        </motion.div>
      ))}

      <div className="container mx-auto max-w-5xl relative z-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          {/* Heading with word-by-word animation */}
          <motion.h2
            className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-[#1a2942] relative"
            variants={titleVariants}
          >
            <div className="flex flex-wrap justify-center gap-x-3 mb-2">
              {titleWords.map((word, i) => (
                <motion.span key={i} variants={wordVariants} custom={i}>
                  {word}
                </motion.span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-x-3">
              <motion.span
                className="text-orange-500 relative"
                variants={wordVariants}
                custom={titleWords.length}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {brandName}
                <motion.span
                  className="absolute -bottom-1 left-0 h-1 bg-orange-500 rounded-full"
                  variants={highlightVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                />
              </motion.span>{" "}
              <motion.span
                className="text-blue-600 relative"
                variants={wordVariants}
                custom={titleWords.length + 1}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {serviceName}
                <motion.span
                  className="absolute -bottom-1 left-0 h-1 bg-blue-600 rounded-full"
                  variants={highlightVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                />
              </motion.span>{" "}
              <motion.span variants={wordVariants} custom={titleWords.length + 2}>
                {lastWord}
              </motion.span>
            </div>
          </motion.h2>

          {/* Paragraphs with staggered animation */}
          <div className="space-y-8 text-center max-w-3xl mx-auto">
            <motion.p
              className="text-gray-700 text-lg leading-relaxed"
              variants={paragraphVariants}
              custom={0}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Unlock the{" "}
              <motion.span
                className="font-semibold text-orange-500"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                full potential
              </motion.span>{" "}
              of your Amazon automation investments at Orbit Syndicate, where pride meets innovation. Intrigued?
            </motion.p>

            <motion.p
              className="text-gray-700 text-lg leading-relaxed"
              variants={paragraphVariants}
              custom={1}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Experience{" "}
              <motion.span
                className="font-semibold text-blue-600"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                top-tier Amazon automation services
              </motion.span>{" "}
              crafted for business elevation. We specialize in empowering e-commerce endeavors, fostering growth, and
              establishing a thriving passive income stream.
            </motion.p>

            <motion.p
              className="text-gray-700 text-lg leading-relaxed"
              variants={paragraphVariants}
              custom={2}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
             {` With Orbit Syndicate, you're not just getting a service provider but a team of   `}
              <motion.span
                className="font-semibold text-orange-500"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                dedicated Amazon experts
              </motion.span>{" "}
              {`
              ready to catapult your business to unprecedented heights. Automation is not just a service; it's a journey
              to unparalleled success.
              `}
            </motion.p>
          </div>

        
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            <motion.button
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-500 to-blue-600 text-white rounded-full font-medium shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Discover More
              <ChevronRight className="ml-2 h-5 w-5" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Animated border */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
          variants={lineVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />
      </div>
    </section>
  )
}