"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"

export default function MissionStatement() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
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
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const highlightVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  }

  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2 + i * 0.2,
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
  const decorations = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.floor(Math.random() * 20) + 10,
    top: `${Math.floor(Math.random() * 80) + 10}%`,
    left: `${Math.floor(Math.random() * 80) + 10}%`,
    color: ["bg-orange-300", "bg-orange-400", "bg-yellow-400", "bg-amber-300"][Math.floor(Math.random() * 4)],
    delay: i * 0.2,
    duration: Math.floor(Math.random() * 5) + 3,
  }))

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-white to-orange-50 overflow-hidden relative">
      {/* Background decorative elements */}
      <motion.div className="absolute inset-0 opacity-20 z-0" style={{ y: backgroundY, opacity }}>
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-200 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3" />
      </motion.div>

      {/* Floating decorative elements */}
      {decorations.map((decoration) => (
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
          custom={decoration.id}
          initial="hidden"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4]
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

      <div ref={containerRef} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Decorative elements */}
          <motion.div
            className="absolute -top-16 -left-16 w-32 h-32 bg-orange-500 rounded-full opacity-10 blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute -bottom-16 -right-16 w-40 h-40 bg-yellow-500 rounded-full opacity-10 blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 1,
            }}
          />

          {/* Heading */}
          <motion.div className="mb-16 text-center relative" variants={titleVariants}>
            <h2 className="text-4xl md:text-5xl font-bold inline-block">
              <motion.span className="text-orange-500 relative inline-block mr-3" variants={highlightVariants}>
                Mission
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-orange-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                />
              </motion.span>
              <span className="text-gray-900">Statement</span>
            </h2>

            {/* Decorative elements around heading */}
            <motion.div
              className="absolute -top-6 -right-6 w-12 h-12 border-2 border-orange-300 rounded-full opacity-70"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.7, scale: 1, rotate: 360 }}
              transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-8 h-8 bg-orange-400 rounded-full opacity-20"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.2, scale: 1 }}
              transition={{ delay: 1, duration: 1, ease: "backOut" }}
            />
          </motion.div>

          {/* Paragraphs with staggered animation */}
          <div className="space-y-8 relative">
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-orange-300 to-transparent opacity-30"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "100%", opacity: 0.3 }}
              transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
            />

            <motion.p
              className="text-center md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto px-6"
              variants={paragraphVariants}
              custom={0}
            >
              {`
              Our team recognizes that one of the most demanding aspects of an e-commerce business is efficiently
              managing orders and meeting customer needs in a timely manner. This can be a time-consuming process, and
              achieving a high level of automation in online retail requires a dedicated and skilled team. That's where
              we come in. We've developed an infrastructure that enables you to automate and streamline all the
              essential aspects of running a successful e-commerce operation. Our mission is to provide you with the
              solutions necessary to save time, reduce costs, increase revenue, and ultimately create a source of 
              `}
              <motion.span
                className="font-semibold text-orange-600 relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                passive income
                <motion.span
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-400"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                  viewport={{ once: true }}
                />
              </motion.span>
              .
            </motion.p>

            <motion.p
              className="text-center md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto px-6"
              variants={paragraphVariants}
              custom={1}
            >
              With the trust of over{" "}
              <motion.span
                className="font-semibold text-orange-600"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                300 clients
              </motion.span>{" "}
              and a track record of generating{" "}
              <motion.span
                className="font-semibold text-orange-600"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                eight figures
              </motion.span>{" "}
            {
              `
                in revenue over the past decade, we are committed to ensuring that your online store operates seamlessly
              and effectively. Whether you're just starting in e-commerce or looking to enhance your existing store, we
              have you covered. We offer comprehensive services, including Done For You Walmart WFS, Amazon Wholesale
              FBA, and Shopify Automation. Our services encompass inventory management, order processing, shipping, and
              top-notch customer support. We also tailor unique solutions to meet the specific needs of your business.`
            }
            </motion.p>

            <motion.p
              className="text-center md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto px-6"
              variants={paragraphVariants}
              custom={2}
            >
              As you collaborate with Orbit Syndicate, watch your passive income potential grow. We eagerly anticipate the
              opportunity to assist you in expanding your business and reaching your entrepreneurial aspirations.
            </motion.p>
          </div>

          {/* Call to action button */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <motion.button
              className="px-8 py-3 bg-orange-500 text-white rounded-full font-medium shadow-lg shadow-orange-200"
              whileHover={{ scale: 1.05, backgroundColor: "#ea580c" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Partner With Us
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
