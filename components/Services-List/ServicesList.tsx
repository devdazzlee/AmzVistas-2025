"use client"

import { Check } from 'lucide-react'
import { motion, useInView } from "framer-motion"
import { useState, useRef } from "react"

export default function ServicesList() {
  const services = [
    "Process of Onboarding + Strategy",
    "DUNS, W9, LLC, and EIN support",
    "Exemptions from taxes in all 50 states",
    "Platform optimization",
    "The setting up of a backend shop on the Walmart platform",
    "Product research, review, and product listing",
    "Processing orders and repricing",
    "Management of supplies and logistics",
    "SKUs are being sent to Amazon and Walmart to avoid return fees",
    "Tracking and shipment confirmation",
    "Claims and Chargebacks Management",
    "Processing and handling infringement claims",
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 px-4 bg-white overflow-hidden">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            We Take Care of the{" "}
            <motion.span 
              className="text-orange-500 inline-block"
              animate={isInView ? { 
           color: ["#f97316", "#fb923c", "#f97316"],
              } : {}}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              Following
            </motion.span>
          </h2>
        </motion.div>

        <motion.div 
          className="mx-auto w-fit space-y-2 flex flex-col justify-start items-start"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
              }
            }
          }}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {services.map((service, index) => (
            <ServiceItem key={index} service={service} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

function ServiceItem({ service }: { service: string }) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div 
      className="flex items-start group"
      variants={{
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0 }
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      whileHover={{ scale: 1.02, x: 5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative">
        <motion.div
          className="absolute inset-0 bg-amber-100 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: isHovered ? 1.8 : 0 }}
          transition={{ duration: 0.2 }}
        />
        <motion.div 
          className="relative z-10"
          animate={{ 
            rotate: isHovered ? [0, 10, -10, 0] : 0 
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Check className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
        </motion.div>
      </div>
      <motion.span 
        className="ml-3 text-gray-800 font-medium text-lg"
        animate={{ 
          color: isHovered ? "#b45309" : "#1f2937",
          fontWeight: isHovered ? 600 : 500
        }}
        transition={{ duration: 0.2 }}
      >
        {service}
      </motion.span>
    </motion.div>
  )
}