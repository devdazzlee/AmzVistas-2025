"use client";

import ServiceHero from "@/components/Services/Service-Hero/Service-Hero";
import AnimatedFeatures from "@/components/Services/Animated-Features/Animated-Features";
import ServiceStats from "@/components/Services/Service-Stats/Service-Stats";
import { 
  Package, 
  TrendingUp, 
  Shield, 
  Truck, 
  Search, 
  Star,
  DollarSign,
  BarChart3,
  CheckCircle2,
  CheckCircle,
  ArrowRight,
  Clock,
  Globe,
  Award,
  Zap,
  Target,
  Headphones,
  Monitor,
  Smartphone,
  Laptop,
  Server,
  Database,
  Cloud,
  Lock,
  RefreshCw,
  Store,
  Heart,
  Users,
  Brain,
  Cpu
} from "lucide-react";
import CallToAction from "@/components/Call-To-Action-Section/Call-To-Action-Section";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AmazonAutomationsPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Search,
      title: "AI-Powered Product Research",
      description: "Find winning products with our advanced AI research tools. We analyze market trends, competition, and profitability to identify the best opportunities for maximum ROI.",
      color: "from-orange-500 to-amber-600",
      image: "/images/Amazon-automation/2025-05-21-e-lee-wilmington-de-amazon-increased-automation-robotic-arm-1024x683.webp",
      benefits: ["Market Analysis", "Competitor Research", "Profit Calculations", "Trend Identification"]
    },
    {
      icon: Package,
      title: "Professional Listing Optimization",
      description: "SEO-optimized listings that rank on page 1. Our experts create compelling titles, bullet points, and descriptions that convert browsers into buyers.",
      color: "from-blue-500 to-cyan-600",
      image: "/images/Amazon-automation/images.jpg",
      benefits: ["SEO Optimization", "Professional Copywriting", "A+ Content", "Keyword Research"]
    },
    {
      icon: TrendingUp,
      title: "Advanced PPC Management",
      description: "Maximize your advertising ROI with data-driven PPC campaigns. We optimize bids, keywords, and ad placement to reduce ACoS and increase sales.",
      color: "from-purple-500 to-pink-600",
      image: "/images/Amazon-automation/1235434266.webp",
      benefits: ["Campaign Setup", "Keyword Optimization", "Bid Management", "ROI Tracking"]
    },
    {
      icon: Truck,
      title: "Complete FBA Management",
      description: "Complete FBA handling from prep center to delivery. We manage inventory, shipments, and ensure your products are always in stock.",
      color: "from-green-500 to-emerald-600",
      image: "/images/Amazon-automation/amazon-worker-working-scaled.jpg",
      benefits: ["Inventory Management", "Shipment Tracking", "Return Processing", "Stock Optimization"]
    },
    {
      icon: Shield,
      title: "Account Health Protection",
      description: "Safeguard your Amazon account with proactive monitoring. We handle suspensions, policy violations, and keep your account healthy.",
      color: "from-red-500 to-rose-600",
      image: "/images/Amazon-automation/2025-05-21-e-lee-wilmington-de-amazon-increased-automation-robotic-arm-1024x683.webp",
      benefits: ["Policy Compliance", "Issue Resolution", "Account Monitoring", "Risk Management"]
    },
    {
      icon: Star,
      title: "Strategic Review Management",
      description: "Build your reputation with strategic review generation. We help you get more 5-star reviews while staying compliant with Amazon's TOS.",
      color: "from-yellow-500 to-orange-600",
      image: "/images/Amazon-automation/images.jpg",
      benefits: ["Review Strategy", "Customer Follow-up", "Feedback Management", "Rating Improvement"]
    },
  ];

  const stats = [
    { value: "300", label: "Sellers Managed", suffix: "+" },
    { value: "25", label: "Average ROI", suffix: "%+" },
    { value: "50", label: "Million Revenue", prefix: "$", suffix: "M+" },
    { value: "99.5", label: "Account Health", suffix: "%" },
    { value: "24", label: "Support Available", suffix: "/7" },
    { value: "100", label: "Success Rate", suffix: "%" },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Save 50+ Hours Weekly",
      description: "Focus on growing your wealth while we handle all operations",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: DollarSign,
      title: "Guaranteed 25%+ ROI",
      description: "Our proven system delivers consistent returns",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "100% Risk Protection",
      description: "Complete buyback guarantee on your investment",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Dedicated Support Team",
      description: "Personal account manager and 24/7 support",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <>
      {/* Custom Enhanced Banner */}
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-600">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat opacity-40"
            style={{ backgroundImage: "url('/images/Amazon-automation/amazon-worker-working-scaled.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/80 via-amber-600/80 to-yellow-600/80" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8"
              >
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="text-lg font-medium">4.9 Rating • 300+ Happy Clients</span>
              </motion.div>

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-xl font-semibold mb-4 text-white/90">Full-Service Amazon Management</h2>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                  Amazon Automation Done Right
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-xl text-white/90 mb-10 leading-relaxed"
              >
                Build a profitable Amazon business without the headaches. We handle everything from product sourcing to customer service, so you can enjoy passive income while we grow your empire.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <motion.button
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-xs sm:text-sm lg:text-base font-semibold rounded-full shadow-lg group border border-orange-400 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Today <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform inline" />
                </motion.button>
                <motion.button
                  className="bg-white/10 backdrop-blur-sm border border-white text-white hover:bg-white/20 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-xs sm:text-sm lg:text-base font-semibold rounded-full transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Our Work
                </motion.button>
              </motion.div>

              {/* Features List */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isLoaded ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
                className="mt-12 flex flex-wrap gap-4"
              >
                {["Proven System", "Buyback Guarantee", "25% ROI Minimum"].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full"
                  >
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                    <span className="text-lg font-medium">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Enhanced Visual Elements */}
              <div className="relative h-96 lg:h-[600px]">
                {/* Main Dashboard Mockup */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 right-0 w-80 h-56 bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="h-6 bg-white/30 rounded-lg w-32 mb-2" />
                      <div className="h-4 bg-white/20 rounded-lg w-24" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-white/30 rounded w-full" />
                    <div className="h-4 bg-white/30 rounded w-3/4" />
                    <div className="h-4 bg-white/30 rounded w-1/2" />
                  </div>
                </motion.div>

                {/* Analytics Card */}
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
                  className="absolute bottom-0 left-0 w-80 h-56 bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-600 rounded-2xl flex items-center justify-center">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="h-6 bg-white/30 rounded-lg w-28 mb-2" />
                      <div className="h-4 bg-white/20 rounded-lg w-20" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-white/30 rounded w-full" />
                    <div className="h-4 bg-white/30 rounded w-5/6" />
                    <div className="h-4 bg-white/30 rounded w-2/3" />
                  </div>
                </motion.div>

                {/* Central Amazon Hub */}
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
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/20 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl"
                >
                  <div className="w-full h-full bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex flex-col items-center justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="text-8xl font-bold text-white mb-4"
                    >
                      🤖
                    </motion.div>
                    <div className="text-white text-center">
                      <div className="text-2xl font-bold mb-2">Amazon</div>
                      <div className="text-lg opacity-90">Automation</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Brain className="w-10 h-10 text-white" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center shadow-xl"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <CheckCircle className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <ServiceStats stats={stats} backgroundColor="bg-gradient-to-r from-orange-600 to-amber-600" />

      {/* Enhanced Features Section with Images */}
      <div className="py-24 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              Complete Amazon Automation Suite
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Everything you need to succeed on Amazon's marketplace. Our comprehensive automation covers every aspect of your business from product research to customer service.
            </motion.p>
          </div>

          <div className="space-y-32">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className={`order-1 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <motion.div
                      className="relative overflow-hidden rounded-xl lg:rounded-3xl shadow-lg lg:shadow-2xl"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={600}
                        height={400}
                        className="w-full h-48 sm:h-56 lg:h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-2 left-2 lg:bottom-6 lg:left-6">
                        <div className={`inline-flex items-center gap-1 lg:gap-3 bg-gradient-to-r ${feature.color} px-2 py-1 lg:px-6 lg:py-3 rounded-lg lg:rounded-full`}>
                          <Icon className="w-3 h-3 lg:w-6 lg:h-6 text-white" />
                          <span className="text-white font-semibold text-xs lg:text-base">{feature.title}</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <div className={`order-2 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <motion.div
                      className="space-y-4 lg:space-y-8"
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                    >
                      <div>
                        <h3 className="text-lg sm:text-xl lg:text-4xl font-bold text-gray-900 mb-2 lg:mb-4">{feature.title}</h3>
                        <p className="text-sm lg:text-lg text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-4">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <motion.div
                            key={benefitIndex}
                            className="flex items-center gap-2 lg:gap-3 p-2 lg:p-4 bg-white rounded-lg lg:rounded-xl shadow-md lg:shadow-lg border border-gray-100"
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ duration: 0.2 }}
                          >
                            <CheckCircle className="w-3 h-3 lg:w-5 lg:h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 font-medium text-xs lg:text-base">{benefit}</span>
                          </motion.div>
                        ))}
                      </div>

                      <motion.button
                        className={`inline-flex items-center gap-1 lg:gap-2 bg-gradient-to-r ${feature.color} text-white px-4 py-2 lg:px-8 lg:py-4 rounded-lg lg:rounded-full font-semibold shadow-md lg:shadow-lg hover:shadow-xl transition-all duration-300 text-xs lg:text-base`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn More
                        <ArrowRight className="w-3 h-3 lg:w-5 lg:h-5" />
                      </motion.button>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 bg-gradient-to-br from-orange-600 to-amber-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              Why Choose Our Amazon Automation?
            </motion.h2>
            <motion.p 
              className="text-xl text-orange-100"
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Experience the power of proven Amazon automation
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-orange-100">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Investment Packages Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              Investment Packages
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Choose the package that fits your investment goals
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Complete Done-For-You Amazon Automation
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                We build and manage your entire Amazon business so you can focus on growing your wealth.
              </p>

              <div className="space-y-4">
                {[
                  "LLC Formation & Business Setup",
                  "Amazon Seller Account Creation",
                  "AI-Powered Product Research",
                  "Professional Product Listings",
                  "Advanced PPC Campaign Management",
                  "Complete FBA Management",
                  "Order & Customer Service",
                  "Account Health Monitoring",
                  "Monthly Performance Reports",
                  "Dedicated Account Manager",
                  "100% ROI Buyback Guarantee",
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8"
              initial={{ opacity: 0, x: 50 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Investment Options</h3>
              
              <div className="space-y-6">
                {[
                  { name: "Silver Package", investment: "$25,000", revenue: "$10K-$25K/mo", roi: "20-25%" },
                  { name: "Gold Package", investment: "$50,000", revenue: "$30K-$60K/mo", roi: "22-28%" },
                  { name: "Platinum Package", investment: "$100,000", revenue: "$75K-$150K/mo", roi: "25-30%" },
                ].map((pkg, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-white rounded-xl p-6 shadow-lg"
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{pkg.name}</h4>
                        <div className="text-3xl font-bold text-orange-600 mt-2">{pkg.investment}</div>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm border-t pt-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monthly Revenue:</span>
                        <span className="font-bold text-gray-900">{pkg.revenue}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Expected ROI:</span>
                        <span className="font-bold text-green-600">{pkg.roi}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button 
                className="w-full mt-8 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold py-4 rounded-xl hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Free Consultation
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      <CallToAction />
    </>
  );
}
