"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, Play, Star, TrendingUp, Users, Zap, CheckCircle, Shield, Rocket, DollarSign, BarChart3, Package, Globe } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleGetConsultation = () => {
    // Scroll to contact section or open contact modal
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: navigate to contact page
      window.location.href = '/contact-us';
    }
  };

  const handleWatchDemo = () => {
    // Open demo video or navigate to demo page
    alert('Demo video will open here!');
  };

  const handleViewAnalytics = () => {
    // Navigate to analytics dashboard or open modal
    alert('Analytics dashboard will open here!');
  };

  const handleExport = () => {
    // Trigger export functionality
    alert('Export functionality will be implemented here!');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-15, 15, -15],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  const features = [
    { icon: CheckCircle, text: "500+ Expert Team", color: "text-green-400" },
    { icon: Shield, text: "100% Secure Platform", color: "text-blue-400" },
    { icon: Rocket, text: "24/7 Support", color: "text-purple-400" },
    { icon: TrendingUp, text: "$300M+ Revenue", color: "text-orange-400" },
  ];

  const stats = [
    { icon: DollarSign, value: "$300M+", label: "Revenue Generated", color: "from-green-500 to-emerald-500" },
    { icon: Users, value: "500+", label: "Happy Clients", color: "from-blue-500 to-cyan-500" },
    { icon: Package, value: "10K+", label: "Products Managed", color: "from-purple-500 to-pink-500" },
    { icon: Globe, value: "50+", label: "Countries Served", color: "from-orange-500 to-red-500" },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-cover bg-center bg-no-repeat opacity-20" 
             style={{ backgroundImage: "url('/images/Ai_Banner.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/80 to-purple-900/80" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Floating Icons */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <TrendingUp className="w-8 h-8 text-blue-400" />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/4 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <Users className="w-6 h-6 text-purple-400" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-14 h-14 bg-orange-500/20 rounded-full flex items-center justify-center backdrop-blur-sm"
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <Zap className="w-7 h-7 text-orange-400" />
        </motion.div>
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 min-h-screen flex items-center py-20"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content Section */}
            <motion.div className="space-y-10" variants={itemVariants}>
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-medium">Trusted by 500+ E-commerce Entrepreneurs</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight"
                variants={itemVariants}
              >
                <span className="block">Scale Your</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                  E-commerce Empire
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-gray-300">
                  with AI-Powered Automation
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-lg text-gray-300 leading-relaxed max-w-2xl"
                variants={itemVariants}
              >
                Transform your business with Orbit Syndicate's cutting-edge automation solutions. 
                We help entrepreneurs scale their Amazon and Walmart operations with our proven 
                infrastructure and expert team of 500+ professionals.
              </motion.p>

              {/* Features Grid */}
              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={itemVariants}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <feature.icon className={`w-6 h-6 ${feature.color} flex-shrink-0`} />
                    <span className="text-white font-medium text-sm">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    onClick={handleGetConsultation}
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg font-bold rounded-full shadow-2xl group border-2 border-orange-400 transition-all duration-300"
                  >
                    Get Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    onClick={handleWatchDemo}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 text-lg font-bold rounded-full shadow-2xl border-2 border-blue-400 transition-all duration-300"
                  >
                    <Play className="mr-2 w-5 h-5" />
                    Watch Demo
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Enhanced Right Visual Section */}
            <motion.div
              className="relative"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Main Visual Card */}
              <div className="relative bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">Revenue Dashboard</h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className={`bg-gradient-to-br ${stat.color}/30 to-white/10 p-5 rounded-2xl border border-white/30 shadow-lg`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <stat.icon className="w-7 h-7 text-white mb-3" />
                      <div className="text-white text-2xl font-bold">{stat.value}</div>
                      <div className="text-gray-200 text-sm font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Chart Area */}
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-6 rounded-xl border border-purple-400/20 mb-6">
                  <div className="text-purple-400 text-sm font-semibold mb-4">Revenue Growth Trend</div>
                  <div className="flex items-end justify-between h-24">
                    {[40, 60, 45, 80, 65, 90, 75].map((height, index) => (
                      <motion.div
                        key={index}
                        className="bg-gradient-to-t from-purple-500 to-pink-500 rounded-t w-6"
                        style={{ height: `${height}%` }}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    onClick={handleViewAnalytics}
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl py-3 font-semibold shadow-lg transition-all duration-300 hover:shadow-xl"
                  >
                    View Analytics
                  </Button>
                  <Button 
                    onClick={handleExport}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl px-6 py-3 font-semibold shadow-lg transition-all duration-300 hover:shadow-xl"
                  >
                    Export
                  </Button>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <TrendingUp className="w-8 h-8 text-white" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center shadow-xl"
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <CheckCircle className="w-7 h-7 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
