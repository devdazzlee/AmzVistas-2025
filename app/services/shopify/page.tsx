"use client";

import ServiceHero from "@/components/Services/Service-Hero/Service-Hero";
import AnimatedFeatures from "@/components/Services/Animated-Features/Animated-Features";
import ServiceStats from "@/components/Services/Service-Stats/Service-Stats";
import { 
  ShoppingCart, 
  Zap, 
  TrendingUp, 
  Package, 
  CreditCard, 
  Globe,
  Smartphone,
  Settings,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Headphones,
  Monitor,
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
  Cpu,
  Target,
  Search,
  Mail,
  FileText,
  Video,
  Megaphone,
  DollarSign,
  Star,
  Shield
} from "lucide-react";
import CallToAction from "@/components/Call-To-Action-Section/Call-To-Action-Section";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ShopifyPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: ShoppingCart,
      title: "Complete Store Development",
      description: "Professional Shopify store design and development from scratch. We handle everything from custom theme creation to product catalog integration, ensuring your store stands out from the competition.",
      color: "from-green-500 to-emerald-600",
      image: "/images/Shopify/Shopify-marketing-automation.png",
      benefits: ["Custom Design", "Theme Development", "Brand Integration", "Mobile Optimization"]
    },
    {
      icon: Package,
      title: "Advanced Product Management",
      description: "Automated inventory syncing, bulk product imports, and comprehensive catalog management. Keep your store updated effortlessly with our advanced product management systems.",
      color: "from-blue-500 to-cyan-600",
      image: "/images/Shopify/images.jpg",
      benefits: ["Inventory Sync", "Bulk Import", "Catalog Management", "Automated Updates"]
    },
    {
      icon: Zap,
      title: "Conversion Rate Optimization",
      description: "Optimize your store for maximum sales with A/B testing, checkout optimization, and conversion rate improvements. We increase your sales by optimizing every touchpoint.",
      color: "from-purple-500 to-pink-600",
      image: "/images/Shopify/Expert-Shopify-Automation-Tips.png",
      benefits: ["A/B Testing", "Checkout Optimization", "UX Improvements", "Sales Analytics"]
    },
    {
      icon: CreditCard,
      title: "Payment Gateway Integration",
      description: "Secure payment gateway setup with multiple options. Shopify Payments, Stripe, PayPal, Apple Pay, and more. We ensure seamless payment processing for your customers.",
      color: "from-orange-500 to-red-600",
      image: "/images/Shopify/Group_12336.webp",
      benefits: ["Multiple Gateways", "Security Setup", "Mobile Payments", "Fraud Protection"]
    },
    {
      icon: Globe,
      title: "Multi-Channel Selling",
      description: "Expand your reach with integrated selling on Facebook, Instagram, Google, Amazon, and TikTok from your Shopify store. Maximize your sales potential across all platforms.",
      color: "from-pink-500 to-rose-600",
      image: "/images/Shopify/hq720.jpg",
      benefits: ["Social Commerce", "Marketplace Integration", "Unified Inventory", "Cross-Platform Analytics"]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics & Reporting",
      description: "Track sales, customer behavior, and store performance with detailed analytics and actionable insights. Make data-driven decisions to grow your business.",
      color: "from-indigo-500 to-purple-600",
      image: "/images/Shopify/1920-1-1024x523.webp",
      benefits: ["Sales Tracking", "Customer Analytics", "Performance Reports", "Actionable Insights"]
    },
  ];

  const stats = [
    { value: "180", label: "Stores Built", suffix: "+" },
    { value: "300", label: "Conversion Rate Increase", suffix: "%+" },
    { value: "15", label: "Million Revenue Generated", prefix: "$", suffix: "M+" },
    { value: "100", label: "Client Satisfaction", suffix: "%" },
    { value: "24", label: "Support Available", suffix: "/7" },
    { value: "50", label: "Countries Served", suffix: "+" },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Save 40+ Hours Weekly",
      description: "Focus on your business while we handle all technical aspects",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: DollarSign,
      title: "Increase Revenue by 300%",
      description: "Our optimized stores drive significant sales growth",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "100% Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime guarantee",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Dedicated Development Team",
      description: "Personal project manager and expert Shopify developers",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <>
      {/* Custom Enhanced Banner */}
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat opacity-40"
            style={{ backgroundImage: "url('/images/services/shopify/enhanced/banner-hero.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/80 via-emerald-600/80 to-teal-600/80" />
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
                <span className="text-lg font-medium">5.0 Rating • 180+ Happy Clients</span>
              </motion.div>

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-xl font-semibold mb-4 text-white/90">Professional Shopify Development</h2>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                  Shopify Stores That Sell
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-xl text-white/90 mb-10 leading-relaxed"
              >
                Launch and scale your Shopify store with expert development and optimization. We create beautiful, high-converting stores that turn visitors into loyal customers.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <motion.button
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-xs sm:text-sm lg:text-base font-semibold rounded-full shadow-lg group border border-green-400 transition-all duration-300"
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
                {["Custom Design", "Mobile Optimized", "Sales Focused"].map((feature, index) => (
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
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl flex items-center justify-center">
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

                {/* Central Shopify Hub */}
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
                  <div className="w-full h-full bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex flex-col items-center justify-center">
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
                      🛍️
                    </motion.div>
                    <div className="text-white text-center">
                      <div className="text-2xl font-bold mb-2">Shopify</div>
                      <div className="text-lg opacity-90">Store</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <ShoppingCart className="w-10 h-10 text-white" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-xl"
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

      <ServiceStats stats={stats} backgroundColor="bg-gradient-to-r from-green-600 to-emerald-600" />

      {/* Enhanced Features Section with Images */}
      <div className="py-24 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              Complete Shopify Solutions
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Everything you need for a successful Shopify store. Our comprehensive solutions cover every aspect of e-commerce success.
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

      {/* Why Shopify Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              Why Choose Shopify?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The world's leading e-commerce platform trusted by millions
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Smartphone, title: "Mobile-First Design", desc: "Beautiful on every device with responsive themes" },
              { icon: Settings, title: "Easy Management", desc: "Simple admin dashboard for effortless store management" },
              { icon: Zap, title: "Lightning Fast", desc: "Optimized performance with global CDN and caching" },
              { icon: Globe, title: "Global Reach", desc: "Sell worldwide with multi-currency and language support" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={index} 
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Development Packages Section */}
      <div className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              Shopify Development Packages
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Choose the right package for your business needs
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter Store",
                price: "$2,499",
                features: [
                  "Custom theme setup",
                  "Up to 50 products",
                  "Mobile optimization",
                  "Basic SEO setup",
                  "Payment integration",
                  "2 revisions",
                ],
              },
              {
                name: "Professional Store",
                price: "$4,999",
                features: [
                  "Custom theme design",
                  "Unlimited products",
                  "Advanced SEO",
                  "App integrations",
                  "Email marketing setup",
                  "5 revisions",
                  "2 months support",
                ],
                highlighted: true,
              },
              {
                name: "Enterprise Store",
                price: "$9,999",
                features: [
                  "Fully custom design",
                  "Custom functionality",
                  "Multi-currency support",
                  "Advanced integrations",
                  "Marketing automation",
                  "Unlimited revisions",
                  "6 months support",
                ],
              },
            ].map((pkg, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-2xl p-8 ${
                  pkg.highlighted ? "border-2 border-green-500 shadow-2xl scale-105" : "shadow-lg"
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: pkg.highlighted ? 1.05 : 1.02, y: -5 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-green-600 mb-6">{pkg.price}</div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fIndex) => (
                    <motion.li 
                      key={fIndex} 
                      className="flex items-center gap-2 text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: fIndex * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-green-600 rounded-full" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.button 
                  className={`w-full py-3 rounded-xl font-bold ${
                    pkg.highlighted
                      ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 bg-gradient-to-br from-green-600 to-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              Why Choose Our Shopify Development?
            </motion.h2>
            <motion.p 
              className="text-xl text-green-100"
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Experience the power of professional Shopify development
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
                  <p className="text-green-100">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <CallToAction />
    </>
  );
}