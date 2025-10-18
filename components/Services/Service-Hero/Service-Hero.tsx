"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  primaryColor?: string;
  secondaryColor?: string;
  features?: string[];
  rating?: string;
  clients?: string;
  backgroundImage?: string;
}

export default function ServiceHero({
  title,
  subtitle,
  description,
  primaryColor = "from-blue-600 to-purple-600",
  secondaryColor = "from-blue-500 to-purple-500",
  features = [],
  rating = "4.9",
  clients = "500+",
  backgroundImage,
}: ServiceHeroProps) {
  return (
    <div className={`relative bg-gradient-to-br ${primaryColor} overflow-hidden`}>
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat opacity-30"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
        </div>
      )}
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-white rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-white rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{rating} Rating • {clients} Happy Clients</span>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-lg font-semibold mb-2 text-white/90">{subtitle}</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {title}
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-white/90 mb-8 leading-relaxed"
            >
              {description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 group"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-gray-900 bg-white hover:bg-gray-100 font-semibold px-8"
              >
                View Our Work
              </Button>
            </motion.div>

            {/* Features List */}
            {features.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-sm">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Animated Cards */}
            <div className="relative h-96 lg:h-[500px]">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 right-0 w-72 h-48 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg mb-4" />
                <div className="space-y-2">
                  <div className="h-4 bg-white/30 rounded w-3/4" />
                  <div className="h-4 bg-white/30 rounded w-1/2" />
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute bottom-0 left-0 w-72 h-48 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-lg mb-4" />
                <div className="space-y-2">
                  <div className="h-4 bg-white/30 rounded w-3/4" />
                  <div className="h-4 bg-white/30 rounded w-full" />
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30"
              >
                <div className={`w-full h-full bg-gradient-to-br ${secondaryColor} rounded-xl flex items-center justify-center`}>
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-6xl font-bold text-white"
                  >
                    ⚡
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

