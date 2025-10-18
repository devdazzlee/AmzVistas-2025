"use client"

import type React from "react"

import { MapPin, Phone, Mail, Send, Clock, Users, Star, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { useState } from "react"

export default function ContactSection() {
  const [focusedField, setFocusedField] = useState<string | null>(null)
  console.log("🚀 ~ ContactSection ~ focusedField:", focusedField)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-8, 8, -8],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
  }

  return (
    <section className="relative min-h-screen bg-white py-20 px-4 overflow-hidden">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0">
        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg opacity-10"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-10"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #6366f1 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header Section */}
        <motion.div className="text-center mb-20" variants={cardVariants}>
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-3 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Star className="w-5 h-5 text-purple-600" />
            <span className="text-purple-700 font-semibold">Get Started Today</span>
            <Zap className="w-5 h-5 text-pink-600" />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-black mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
              {`Let's`} {" "}
            </span> 
            {/* <br /> */}
            <motion.span
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              Connect
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {`Transform your business with our expert solutions. Let's create something extraordinary together.`}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 p-1 rounded-3xl shadow-2xl"
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                rotate: 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-3xl p-8 h-full">
                <motion.div className="space-y-8">
                  <div>
                    <motion.h2
                      className="text-4xl font-bold text-gray-900 mb-4"
                      variants={floatingVariants}
                      animate="animate"
                    >
                      Get In{" "}
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Touch
                      </span>
                    </motion.h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Ready to elevate your business? Schedule a{" "}
                      <motion.span
                        className="font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        FREE CONSULTATION
                      </motion.span>{" "}
                      {`and let's discuss your vision.`}
                    </p>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        icon: MapPin,
                        text: "5900 Balcones Drive STE 100 Austin TX 78731",
                        gradient: "from-red-500 to-pink-500",
                        bg: "from-red-50 to-pink-50",
                      },
                      {
                        icon: Phone,
                        text: "+1 (737) 295-1375",
                        gradient: "from-green-500 to-emerald-500",
                        bg: "from-green-50 to-emerald-50",
                      },
                      {
                        icon: Mail,
                        text: "contact@orbitsyndicate.com",
                        gradient: "from-blue-500 to-cyan-500",
                        bg: "from-blue-50 to-cyan-50",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className={`group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r ${item.bg} border-2 border-transparent hover:border-gray-200 transition-all duration-300 cursor-pointer`}
                        whileHover={{ x: 8, scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ transitionDelay: `${index * 0.1}s` }}
                      >
                        <motion.div
                          className={`p-4 rounded-xl bg-gradient-to-r ${item.gradient} shadow-lg`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <item.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <span className="text-gray-800 font-medium group-hover:text-gray-900 transition-colors duration-300">
                          {item.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    className="pt-8 border-t-2 border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        <Users className="w-6 h-6 text-white" />
                      </motion.div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        Expert{" "}
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          Support
                        </span>
                      </h3>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Clock className="w-5 h-5 text-green-500" />
                      <span className="font-medium">24/7 Response Guarantee</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100"
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.h2
                className="text-4xl font-bold text-gray-900 mb-8 text-center"
                variants={floatingVariants}
                animate="animate"
              >
                Start Your{" "}
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Journey
                </span>
              </motion.h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {["Name", "Phone"].map((placeholder) => (
                    <motion.div key={placeholder} whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                      <Input
                        type={placeholder === "Phone" ? "tel" : "text"}
                        placeholder={placeholder}
                        className="h-14 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-500 font-medium transition-all duration-300 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 focus:bg-white"
                        onFocus={() => setFocusedField(placeholder.toLowerCase())}
                        onBlur={() => setFocusedField(null)}
                      />
                    </motion.div>
                  ))}
                </motion.div>

                {["Date", "Email"].map((placeholder, index) => (
                  <motion.div
                    key={placeholder}
                    whileFocus={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1, whileFocus: { duration: 0.2 } }}
                    viewport={{ once: true }}
                  >
                    <Input
                      type={placeholder === "Email" ? "email" : "text"}
                      placeholder={placeholder === "Date" ? "mm/dd/yyyy" : placeholder}
                      className="h-14 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-500 font-medium transition-all duration-300 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 focus:bg-white"
                      onFocus={() => setFocusedField(placeholder.toLowerCase())}
                      onBlur={() => setFocusedField(null)}
                    />
                  </motion.div>
                ))}

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    whileFocus: { duration: 0.2 },
                    default: { duration: 0.6, delay: 0.3 }
                  }}
                  viewport={{ once: true }}
                >
                  <Textarea
                    placeholder="Tell us about your project and goals..."
                    rows={6}
                    className="rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-500 font-medium resize-none transition-all duration-300 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 focus:bg-white"
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-16 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.8 }}
                      />
                      <span className="relative flex items-center justify-center gap-3">
                        {isSubmitting ? (
                          <>
                            <motion.div
                              className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            Send Message
                            <motion.div
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                            >
                              <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
                            </motion.div>
                          </>
                        )}
                      </span>
                    </Button>
                  </motion.div>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
