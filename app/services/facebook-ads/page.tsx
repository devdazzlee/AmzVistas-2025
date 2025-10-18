"use client";

import ServiceHero from "@/components/Services/Service-Hero/Service-Hero";
import AnimatedFeatures from "@/components/Services/Animated-Features/Animated-Features";
import ServiceStats from "@/components/Services/Service-Stats/Service-Stats";
import PricingSection from "@/components/Services/Pricing-Section/Pricing-Section";
import { 
  Target, 
  TrendingUp, 
  Sparkles, 
  Users, 
  BarChart, 
  Megaphone,
  Eye,
  Zap,
  Award,
  CheckCircle,
  ArrowRight,
  Clock,
  Globe,
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
  Brain,
  Cpu,
  Search,
  Settings,
  Mail,
  FileText,
  Video,
  DollarSign,
  Star,
  Shield
} from "lucide-react";
import CallToAction from "@/components/Call-To-Action-Section/Call-To-Action-Section";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function FacebookAdsPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Target,
      title: "Precision Audience Targeting",
      description: "Reach your ideal customers with laser-focused targeting strategies. We use advanced audience segmentation, lookalike modeling, and behavioral targeting to maximize your ad performance and ROI.",
      color: "from-blue-500 to-indigo-600",
      image: "/images/facebook ads/facebook-ads-library.webp",
      benefits: ["Lookalike Audiences", "Behavioral Targeting", "Demographic Segmentation", "Interest-Based Targeting"]
    },
    {
      icon: Sparkles,
      title: "Creative Excellence & Design",
      description: "Eye-catching ad creatives that stop the scroll and drive conversions. Our expert designers create high-converting visuals, compelling copy, and engaging video content that resonates with your audience.",
      color: "from-purple-500 to-pink-600",
      image: "/images/facebook ads/images.png",
      benefits: ["Video Production", "Graphic Design", "Copywriting", "A/B Testing"]
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Continuous A/B testing and optimization to improve your ROAS. We monitor campaigns 24/7, analyze performance data, and make data-driven adjustments to maximize your advertising results.",
      color: "from-green-500 to-emerald-600",
      image: "/images/facebook ads/1719487578764.png",
      benefits: ["A/B Testing", "Bid Optimization", "Ad Scheduling", "Performance Monitoring"]
    },
    {
      icon: Users,
      title: "Advanced Audience Building",
      description: "Build and nurture custom audiences that convert at scale. We create sophisticated retargeting funnels, custom audiences, and customer journey mapping to maximize customer lifetime value.",
      color: "from-orange-500 to-red-600",
      image: "/images/facebook ads/Untitled.png",
      benefits: ["Retargeting Campaigns", "Custom Audiences", "Customer Journey", "Lifetime Value"]
    },
    {
      icon: BarChart,
      title: "Comprehensive Analytics",
      description: "Detailed reporting and insights you can understand and act on. Track every dollar spent, monitor conversion rates, and see exactly how your ads perform across all metrics.",
      color: "from-cyan-500 to-blue-600",
      image: "/images/facebook ads/Facebook-ads-guide-for-beginners-costa-del-sol-marbella-estepona-manilva-sanpedro-fuengirola.jpg",
      benefits: ["Performance Tracking", "ROI Analysis", "Conversion Tracking", "Custom Reports"]
    },
    {
      icon: Megaphone,
      title: "Full-Funnel Campaign Strategy",
      description: "From awareness to conversion, we manage your entire customer journey with strategic campaign structures. Multi-objective campaigns that guide prospects through every stage of the sales funnel.",
      color: "from-rose-500 to-pink-600",
      image: "/images/facebook ads/facebook-ads-library.webp",
      benefits: ["Awareness Campaigns", "Consideration Campaigns", "Conversion Campaigns", "Retention Campaigns"]
    },
  ];

  const stats = [
    { value: "450", label: "Average ROAS", suffix: "%+" },
    { value: "50", label: "Cost Reduction", suffix: "%" },
    { value: "5", label: "Years Experience", suffix: "+" },
    { value: "100", label: "Active Campaigns", suffix: "+" },
    { value: "24", label: "Support Available", suffix: "/7" },
    { value: "300", label: "Happy Clients", suffix: "+" },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Save 25+ Hours Weekly",
      description: "Focus on your business while we handle all ad management",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: DollarSign,
      title: "Increase ROAS by 450%",
      description: "Our proven strategies deliver exceptional returns",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "100% Transparent Reporting",
      description: "Complete visibility into all campaigns and spending",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Certified Facebook Experts",
      description: "Facebook Blueprint certified team with proven results",
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$997",
      period: "month",
      description: "Perfect for small businesses starting with Facebook Ads",
      features: [
        "Up to $5K ad spend management",
        "2 ad campaigns",
        "Basic audience research",
        "Monthly reporting",
        "Email support",
      ],
      buttonText: "Get Started",
    },
    {
      name: "Growth",
      price: "$1,997",
      period: "month",
      description: "Ideal for scaling businesses",
      features: [
        "Up to $20K ad spend management",
        "5 ad campaigns",
        "Advanced audience targeting",
        "Weekly reporting & calls",
        "Priority support",
        "A/B testing included",
      ],
      highlighted: true,
      buttonText: "Start Growing",
    },
    {
      name: "Enterprise",
      price: "$4,997",
      period: "month",
      description: "For businesses ready to dominate",
      features: [
        "Unlimited ad spend management",
        "Unlimited campaigns",
        "Custom audience strategy",
        "Daily monitoring",
        "Dedicated account manager",
        "Advanced retargeting",
        "Creative production included",
      ],
      buttonText: "Go Enterprise",
    },
  ];

  return (
    <>
      {/* Custom Enhanced Banner */}
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat opacity-40"
            style={{ backgroundImage: "url('/images/facebook ads/Facebook-ads-guide-for-beginners-costa-del-sol-marbella-estepona-manilva-sanpedro-fuengirola.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-indigo-600/80 to-purple-600/80" />
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
                <h2 className="text-xl font-semibold mb-4 text-white/90">Expert Ad Management</h2>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                  Facebook Ads That Actually Convert
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-xl text-white/90 mb-10 leading-relaxed"
              >
                Stop wasting money on ads that don't work. Our certified Facebook Ads experts create, manage, and optimize campaigns that deliver real ROI for your business.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <motion.button
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-xs sm:text-sm lg:text-base font-semibold rounded-full shadow-lg group border border-blue-400 transition-all duration-300"
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
                {["450% ROAS", "Certified Experts", "Performance Guaranteed"].map((feature, index) => (
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
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center">
                      <BarChart className="w-8 h-8 text-white" />
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

                {/* Central Facebook Hub */}
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
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex flex-col items-center justify-center">
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
                      📱
                    </motion.div>
                    <div className="text-white text-center">
                      <div className="text-2xl font-bold mb-2">Facebook</div>
                      <div className="text-lg opacity-90">Ads</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Target className="w-10 h-10 text-white" />
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

      <ServiceStats stats={stats} backgroundColor="bg-gradient-to-r from-blue-600 to-indigo-600" />

      {/* Enhanced Features Section with Images */}
      <div className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              Complete Facebook Advertising Solution
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Everything you need to dominate on Facebook and Instagram. Our comprehensive advertising solutions cover every aspect of social media marketing.
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

      {/* Why Choose Us Section */}
      <div className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              Why Businesses Choose Us
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Results that speak for themselves
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "Certified Experts", desc: "Facebook Blueprint certified team with years of experience and proven results" },
              { icon: Eye, title: "Full Transparency", desc: "You own your ad accounts and see everything we do with complete transparency" },
              { icon: Zap, title: "Fast Results", desc: "See improvements in performance within the first 30 days of working with us" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={index} 
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              Why Choose Our Facebook Ads Management?
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100"
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Experience the power of expert Facebook advertising
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
                  <p className="text-blue-100">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <PricingSection tiers={pricingTiers} />

      <CallToAction />
    </>
  );
}