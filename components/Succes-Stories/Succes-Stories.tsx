"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface SuccessStoriesSectionProps {
  rating?: string
  timeframe?: string
  title?: string
  description?: string
  buttonText?: string
  onButtonClick?: () => void
  showInfographic?: boolean
}

export default function SuccessStoriesSection({
  rating = "4.5+",
  timeframe = "3+",
  title = "Experience Success Stories!",
  description = "Our visionary leaders seized the opportunity to elevate the traditional done-for-you (DFY) Amazon business model into an innovative, data-driven approach. Rooted in robust logistics and fueled by constant innovation, Orbit Syndicate emerged as a leader in e-commerce automation. We exceeded our goal of creating a model where our business and clients' interests are intricately intertwined. Witness a journey with us where customer success is a testament to our shared prosperity!",
  buttonText = "Schedule A Free Consultation",
  onButtonClick = () => console.log("Button clicked"),
  showInfographic = true,
}: SuccessStoriesSectionProps) {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const starsVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const starVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.4,
        ease: "backOut",
      },
    },
  }

  const infographicVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.98,
    },
  }

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        delay: 0.5,
      },
    },
  }

  return (
    <motion.section
      className="py-16 px-4 bg-gray-50"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Rating Section */}
            <motion.div className="text-center lg:text-left" variants={itemVariants}>
              <motion.p className="text-lg font-medium text-gray-700 mb-3" variants={itemVariants}>
                {rating} rating over the past {timeframe} years
              </motion.p>
              <motion.div className="flex justify-center lg:justify-start gap-1" variants={starsVariants}>
                {[...Array(5)].map((_, index) => (
                  <motion.div key={index} variants={starVariants}>
                    <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Title */}
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-gray-900 text-center lg:text-left leading-tight"
              variants={itemVariants}
            >
              {title}
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-600 leading-relaxed text-center lg:text-left"
              variants={itemVariants}
            >
              {description}
            </motion.p>

            {/* CTA Button */}
            <motion.div className="flex justify-center lg:justify-start" variants={itemVariants}>
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Button
                  onClick={onButtonClick}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-none shadow-lg"
                  size="lg"
                >
                  {buttonText}
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Infographic */}
          {showInfographic && (
            <motion.div className="flex justify-center lg:justify-end" variants={infographicVariants}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  transition: { duration: 0.3 },
                }}
                className="relative"
              >
                <Image
                  src="/images/Ai_Banner.png"
                  alt="Orbit Syndicate Business Process Infographic"
                  width={500}
                  height={400}
                  className="max-w-full h-auto"
                  priority
                />
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Bottom Orange Line */}
        <motion.div className="mt-16 relative" variants={itemVariants}>
          <motion.div className="h-1 bg-orange-400 origin-left" variants={lineVariants} />
        </motion.div>
      </div>
    </motion.section>
  )
}
