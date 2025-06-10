"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface Step {
  stepNumber: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}

const stepsWithRealImages: Step[] = [
  {
    stepNumber: "01",
    title: "Easy & Smooth Onboarding",
    description:
      "You don't require any prior knowledge of seller platforms, company development, LLCs, or paperwork. Together, our staff will guide you through each step of our simplified onboarding procedure.",
    imageSrc: "/images/step-01.png",
    imageAlt: "Person climbing steps with pink circular background",
  },
  {
    stepNumber: "02",
    title: "We Successfully Build Your Store",
    description:
      "You'll have your own e-commerce business on the world's greatest platform and be ready to sell within two weeks. We collaborate with many of the brands you know and love. As soon as you make your first sale, your assets will begin to increase.",
    imageSrc: "/placeholder.svg?height=300&width=400",
    imageAlt: "People working in warehouse with boxes and pendant lights",
  },
  {
    stepNumber: "03",
    title: "We Boost Your Store's and Sales Performance",
    description:
      "We grow your shop and launch our strong sourcing and fulfillment methods, including wholesale FBA, private label, and FBM. Manage your sales and earnings in real-time with the Amazon Seller app, and get money straight from Amazon every two weeks.",
    imageSrc: "/placeholder.svg?height=300&width=400",
    imageAlt: "Sales growth chart with money bag and magnifying glass",
  },
]

export default function AnimatedSteps() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section className="py-16 px-4 bg-white" ref={containerRef}>
      <div className="max-w-6xl mx-auto relative">
        {/* Animated Vertical Connecting Line */}
        <motion.div
          className="absolute left-1/2 top-0 w-px border-l-2 border-dashed border-gray-300 transform -translate-x-1/2 hidden lg:block"
          initial={{ height: 0 }}
          animate={isInView ? { height: "100%" } : { height: 0 }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
        />

        <div className="space-y-24">
          {stepsWithRealImages.map((step, index) => (
            <motion.div
              key={step.stepNumber}
              className="relative"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: index * 0.3, ease: "easeOut" }}
            >
              {/* Animated Step Header */}
              <motion.div
                className="text-center mb-12 relative z-10"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.3 + 0.4,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 bg-white inline-block px-4">
                  Step <span className="text-orange-500">{step.stepNumber}</span>
                </h3>
              </motion.div>

              {/* Step Content */}
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Animated Image Section */}
                <motion.div
                  className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 1 ? 80 : -80,
                    rotateY: index % 2 === 1 ? 15 : -15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    rotateY: 0,
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.9,
                    delay: index * 0.3 + 0.5,
                    ease: "easeOut",
                  }}
                >
                  <div className="relative">
                    <motion.img
                      src={step.imageSrc || "/placeholder.svg"}
                      alt={step.imageAlt}
                      className="w-full h-auto max-w-md mx-auto"
                      whileHover={{
                        scale: 1.08,
                        rotateY: 5,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 0.95 }}
                    />
                  </div>
                </motion.div>

                {/* Animated Content Section */}
                <motion.div
                  className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                  initial={{ opacity: 0, x: index % 2 === 1 ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.9,
                    delay: index * 0.3 + 0.6,
                    ease: "easeOut",
                  }}
                >
                  <motion.h4
                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.3 + 0.8,
                      type: "spring",
                      stiffness: 80,
                    }}
                  >
                    {step.title}
                  </motion.h4>
                  <motion.p
                    className="text-gray-600 text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.3 + 0.9,
                      type: "spring",
                      stiffness: 80,
                    }}
                  >
                    {step.description}
                  </motion.p>
                </motion.div>
              </div>

              {/* Animated Step Indicator on Line */}
              <motion.div
                className="absolute left-1/2 top-16 w-4 h-4 bg-orange-500 rounded-full transform -translate-x-1/2 hidden lg:block z-20 shadow-lg"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.3 + 1.0,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
