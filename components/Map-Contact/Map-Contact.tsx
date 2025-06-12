"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, CheckCircle, ArrowRight } from "lucide-react"

export default function MapContact() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const mapRef = useRef(null)
  const contactRef = useRef(null)
  const isMapInView = useInView(mapRef, { once: true, margin: "-100px" })
  const isContactInView = useInView(contactRef, { once: true, margin: "-100px" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Email submitted:", email)
    // Show success animation
    setIsSubmitted(true)
    // Reset form after delay
    setTimeout(() => {
      setEmail("")
      setIsSubmitted(false)
    }, 3000)
  }

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const mapVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
      },
    },
  }

  const markerVariants = {
    initial: { y: -10, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1,
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  }

  return (
    <section className="py-20 px-4  overflow-hidden relative">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-200 rounded-full opacity-20 blur-xl"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get in <span className="text-blue-600">Touch</span>
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-blue-500 mx-auto rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 80, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Section */}
          <motion.div
            ref={mapRef}
            className="relative h-[450px] rounded-lg overflow-hidden shadow-xl"
            variants={mapVariants}
            initial="hidden"
            animate={isMapInView ? "visible" : "hidden"}
          >
            {/* Map overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none" />

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.8654903989716!2d-74.4649344!3d40.5297296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c7fa8d4c701f%3A0x9c28f2c6a3c5680!2s371%20Hoes%20Ln%2C%20Piscataway%2C%20NJ%2008854!5e0!3m2!1sen!2sus!4v1654789542010!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
              className="absolute inset-0"
            ></iframe>

            {/* Custom map marker animation */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
              variants={markerVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <div className="relative">
                <MapPin className="w-10 h-10 text-blue-600 drop-shadow-lg" />
                <motion.div
                  className="absolute -inset-2 rounded-full bg-blue-500 opacity-30"
                  variants={pulseVariants}
                  animate="pulse"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Information Section */}
          <motion.div
            ref={contactRef}
            className="space-y-10"
            variants={containerVariants}
            initial="hidden"
            animate={isContactInView ? "visible" : "hidden"}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                371 Hoes Ln
              </h2>
              <p className="text-gray-600 mb-3">371 Hoes Ln Ste 200, Piscataway, NJ 08854, USA</p>
              <motion.a
                href="https://goo.gl/maps/1JfQN8AeEZ9XY5Uw8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 text-sm flex items-center group"
                whileHover={{ x: 5 }}
              >
                View larger map
                <motion.span
                  initial={{ x: 0, opacity: 0.5 }}
                  animate={{ x: 5, opacity: 1 }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    duration: 1,
                  }}
                >
                  <ArrowRight className="w-4 h-4 ml-1 inline" />
                </motion.span>
              </motion.a>
            </motion.div>

            <motion.div className="space-y-4" variants={itemVariants}>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Contact</h3>
              <motion.div
                className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-gray-700 font-medium">(848) 893 1877</p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-700 font-medium">partnerships@walstreamz.com</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-gray-700 font-medium mb-4">
                Text/ Call us to schedule a meeting with a Sr. Business Consultant
              </p>
              <form onSubmit={handleSubmit} className="relative">
                <div className="flex gap-2">
                  <motion.div className="flex-1" whileFocus={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="border-2 focus:border-blue-500 h-12"
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white h-12 px-6"
                      disabled={isSubmitted}
                    >
                      {isSubmitted ? "Sent!" : "Send"}
                    </Button>
                  </motion.div>
                </div>

                {/* Success animation */}
                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      className="absolute -top-12 left-0 right-0 bg-green-100 text-green-700 p-2 rounded-md flex items-center justify-center"
                      variants={successVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <CheckCircle className="w-5 h-5 mr-2" />
                      {`Thank you! We'll be in touch soon.`}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
