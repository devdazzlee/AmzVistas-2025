"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"


interface RevealNumbersSectionProps {
  title?: string
  highlightedWord?: string
  description1?: string
  description2?: string
  buttonText?: string
//   onButtonClick?: () => void
}

export default function RevealNumbersSection({
  title = "Reveal the",
  highlightedWord = "Numbers",
  description1 = "Orbit Syndicate is a dynamic powerhouse, seamlessly blending logistics, wholesale distribution, and e-commerce seller management under one robust roof. With our headquarters in Los Angeles and strategically positioned warehouses and prep centers in Texas, Florida, New York, and Michigan, we are poised to support your e-commerce endeavors efficiently.",
  description2 = "Our mission is grand: to pave the way for effortless entry into the vast $5 trillion e-commerce automation platform. We cater to both aspiring retail investors and seasoned institutional players with equal finesse. Your journey to e-commerce triumph begins here!",
  buttonText = "Get A Free Consultation Now!",
//   onButtonClick,
}: RevealNumbersSectionProps) {
  // Animation variants
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

  const slideInLeft = {
    hidden: {
      opacity: 0,
      x: -100,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const slideInRight = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const buttonHover = {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  }

  const buttonTap = {
    scale: 0.95,
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Warehouse Illustration */}
          <motion.div className="flex justify-center lg:justify-start" variants={slideInLeft}>
             <motion.div className="relative" >
                         <div className="relative">
                           <Image
                             src="/images/Home/Banner2.jpg"
                             alt="World Map showing Orbit Syndicate logistics locations"
                             width={600}
                             height={400}
                             className="w-full h-auto"
                             priority
                           />
           
                         
                         </div>
                       </motion.div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div className="space-y-6" variants={slideInRight}>
            <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900" variants={fadeInUp}>
              {title} <span className="text-orange-500">{highlightedWord}</span>
            </motion.h2>

            <motion.p className="text-gray-700 text-lg leading-relaxed" variants={fadeInUp}>
              {description1}
            </motion.p>

            <motion.p className="text-gray-700 text-lg leading-relaxed" variants={fadeInUp}>
              {description2}
            </motion.p>

            <motion.div variants={fadeInUp}>
              <motion.div whileHover={buttonHover} whileTap={buttonTap}>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg"
                //   onClick={onButtonClick}
                >
                  {buttonText}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
