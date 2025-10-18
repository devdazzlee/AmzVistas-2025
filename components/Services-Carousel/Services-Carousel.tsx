"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight, Star, TrendingUp, Users, Zap } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    id: 1,
    image: "/images/Home/HomeBanner.png",
    title: "Revolutionize Your E-Commerce Empire with Top-Notch Automation Services That Deliver Results",
    content: [
      "Welcome to Orbit Syndicate – where we don't just manage e-commerce assets; we elevate them to unprecedented heights! Imagine a team of over 500 seasoned experts, all geared up to supercharge your online marketplace. We're not just service providers; we're your partners in profit, with a track record spanning more than ten years in product development and e-commerce marketplace operations. We are among the best e-commerce automation companies.",
      "Our journey has been nothing short of remarkable. Our team has achieved a whopping $300 million in revenue through countless challenges – and we're just getting started! What sets us apart is our rock-solid business model that consistently spells success. We're not here to make promises; we're here to deliver",
    ],
    stats: [
      { icon: TrendingUp, value: "$300M+", label: "Revenue Generated" },
      { icon: Users, value: "500+", label: "Expert Team" },
      { icon: Zap, value: "10+", label: "Years Experience" },
    ],
    gradient: "from-blue-600 to-purple-600",
  },
  {
    id: 2,
    image: "/images/Amazon-Fba-Automation/Amazo-Banner-1.jpg",
    title: "Scale Your Amazon FBA Business with Proven Automation Strategies",
    content: [
      "Transform your Amazon FBA operations with our cutting-edge automation tools and strategies. Our proprietary systems handle everything from inventory management to customer service, allowing you to focus on growing your business while we handle the day-to-day operations.",
      "With over 1000+ successful FBA launches and a 95% success rate, our automation platform has generated over $500 million in revenue for our clients. Experience the power of hands-off income generation with our fully managed FBA automation services.",
    ],
    stats: [
      { icon: TrendingUp, value: "$500M+", label: "FBA Revenue" },
      { icon: Star, value: "95%", label: "Success Rate" },
      { icon: Users, value: "1000+", label: "FBA Launches" },
    ],
    gradient: "from-orange-600 to-red-600",
  },
  {
    id: 3,
    image: "/images/Home/Banner2.jpg",
    title: "Walmart Automation Services That Maximize Your Marketplace Potential",
    content: [
      "Expand your e-commerce empire beyond Amazon with our comprehensive Walmart automation services. Our expert team manages your entire Walmart marketplace presence, from product listing optimization to order fulfillment and customer support.",
      "Join the ranks of successful entrepreneurs who have diversified their income streams through our Walmart automation platform. With dedicated account managers and proven strategies, we've helped clients achieve an average of 40% revenue increase within the first 6 months.",
    ],
    stats: [
      { icon: TrendingUp, value: "40%", label: "Revenue Increase" },
      { icon: Users, value: "200+", label: "Walmart Clients" },
      { icon: Zap, value: "6mo", label: "Average ROI" },
    ],
    gradient: "from-green-600 to-teal-600",
  },
  {
    id: 4,
    image: "/images/Ai_Banner.png",
    title: "Complete E-Commerce Portfolio Management for Maximum ROI",
    content: [
      "Why limit yourself to one platform when you can dominate multiple marketplaces? Our comprehensive e-commerce automation services cover Amazon, Walmart, eBay, and other major platforms, creating a diversified portfolio that maximizes your return on investment.",
      "Our clients enjoy the benefits of passive income generation across multiple channels, with our team handling everything from market research and product sourcing to inventory management and customer service. Experience true financial freedom with our done-for-you e-commerce solutions.",
    ],
    stats: [
      { icon: TrendingUp, value: "Multi-Platform", label: "Portfolio" },
      { icon: Users, value: "1000+", label: "Happy Clients" },
      { icon: Zap, value: "24/7", label: "Support" },
    ],
    gradient: "from-purple-600 to-pink-600",
  },
]

export default function CarouselSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-200 px-6 py-3 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Star className="w-5 h-5 text-blue-600" />
            <span className="text-blue-800 font-semibold">Our Services</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            <span className="block">Transform Your</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
              E-commerce Business
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our cutting-edge automation services can revolutionize your online business and maximize your profits
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={currentSlide}>
            <motion.div
              key={currentSlide}
              custom={currentSlide}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                      {slides[currentSlide].title}
                    </h3>
                    
                    <div className="space-y-4">
                      {slides[currentSlide].content.map((paragraph, index) => (
                        <motion.p
                          key={index}
                          className="text-lg text-gray-600 leading-relaxed"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        >
                          {paragraph}
                        </motion.p>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <motion.div
                    className="grid grid-cols-3 gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    {slides[currentSlide].stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg"
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className={`bg-gradient-to-r ${slides[currentSlide].gradient} hover:opacity-90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl group`}>
                        Learn More
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Image */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl"></div>
                    <Image
                      src={slides[currentSlide].image}
                      alt={slides[currentSlide].title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <motion.button
              onClick={prevSlide}
              className="p-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </motion.button>

            <div className="flex gap-2">
              {slides.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-blue-600 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              className="p-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}