"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface LocationPin {
  id: string
  name: string
  position: { x: number; y: number }
  delay?: number
}

interface LogisticsTourSectionProps {
  title?: string
  highlightedWords?: string[]
  description?: string
  tourDescription?: string
  buttonText?: string
  onButtonClick?: () => void
  locations?: LocationPin[]
  showMap?: boolean
  backgroundColor?: string
}

export default function LogisticsTourSection({
  title = "Explore Amz Vistas logistics world with an exclusive tour of our Central Levittown facilities.",
  highlightedWords = ["Amz Vistas", "Central Levittown"],
  description = "Dive into the logistics process, operations, private label brand development, and wholesale journey. We prioritize transparency, welcoming all to witness the heart of our operations.",
  tourDescription = "Schedule your tour today for a firsthand experience of Amz Vistas's commitment to openness and innovation.",
  buttonText = "Get A Free Consultation Now!",
  onButtonClick = () => console.log("Consultation button clicked"),
  locations = [
    {
      id: "piscataway",
      name: "Piscataway, New Jersey",
      position: { x: 75, y: 35 },
      delay: 0.3,
    },
    {
      id: "dallas",
      name: "Dallas, Texas",
      position: { x: 55, y: 55 },
      delay: 0.6,
    },
  ],
  showMap = true,
  backgroundColor = "bg-white",
}: LogisticsTourSectionProps) {
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

  const pinVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "backOut",
        type: "spring",
        stiffness: 300,
        damping: 20,
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

  const pulseVariants = {
    pulse: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 0.3, 0.7],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const renderHighlightedTitle = (text: string, highlights: string[]) => {
    let result = text
    highlights.forEach((highlight) => {
      result = result.replace(highlight, `<span class="text-orange-500 font-bold">${highlight}</span>`)
    })
    return result
  }

  return (
    <motion.section
      className={`py-16 px-4 ${backgroundColor}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Map */}
          {showMap && (
            <motion.div className="relative" variants={mapVariants}>
              <div className="relative">
                <Image
                  src="/world-map-logistics.png"
                  alt="World Map showing AMZ Vistas logistics locations"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                />

                {/* Location Pins */}
                {locations.map((location) => (
                  <motion.div
                    key={location.id}
                    className="absolute"
                    style={{
                      left: `${location.position.x}%`,
                      top: `${location.position.y}%`,
                      transform: "translate(-50%, -100%)",
                    }}
                    variants={pinVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: location.delay }}
                  >
                    {/* Pulse Effect */}
                    <motion.div
                      className="absolute inset-0 bg-blue-500 rounded-full w-4 h-4 -translate-x-1/2 -translate-y-1/2"
                      variants={pulseVariants}
                      animate="pulse"
                    />

                    {/* Pin Icon */}
                    <motion.div whileHover={{ scale: 1.2 }} className="relative z-10">
                      <MapPin className="w-6 h-6 text-blue-600 fill-blue-600" />
                    </motion.div>

                    {/* Location Label */}
                    <motion.div
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white px-3 py-1 rounded-md text-sm whitespace-nowrap shadow-lg"
                      initial={{ opacity: 0, y: -10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {location.name}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-gray-800" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Title */}
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
              variants={itemVariants}
              dangerouslySetInnerHTML={{
                __html: renderHighlightedTitle(title, highlightedWords),
              }}
            />

            {/* Description */}
            <motion.p className="text-lg text-gray-600 leading-relaxed" variants={itemVariants}>
              {description}
            </motion.p>

            {/* Tour Description */}
            <motion.p className="text-lg text-gray-600 leading-relaxed" variants={itemVariants}>
              {tourDescription}
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
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
        </div>
      </div>
    </motion.section>
  )
}
