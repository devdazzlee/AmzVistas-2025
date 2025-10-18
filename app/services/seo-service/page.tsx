"use client";

import ServiceHero from "@/components/Services/Service-Hero/Service-Hero";
import AnimatedFeatures from "@/components/Services/Animated-Features/Animated-Features";
import ServiceStats from "@/components/Services/Service-Stats/Service-Stats";
import PricingSection from "@/components/Services/Pricing-Section/Pricing-Section";
import { 
  Search, 
  TrendingUp, 
  FileText, 
  Link2, 
  BarChart3, 
  Globe,
  Target,
  Zap,
  Award,
  CheckCircle,
  ArrowRight,
  Clock,
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
  Settings,
  Mail,
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

export default function SEOServicePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Search,
      title: "Advanced Keyword Research",
      description: "Find the exact keywords your customers are searching for with our comprehensive research process. We identify high-value, low-competition keywords that drive qualified traffic and conversions.",
      color: "from-green-500 to-emerald-600",
      image: "/images/seo service/Professional-SEO-Services.webp",
      benefits: ["Long-tail Keywords", "Competitor Analysis", "Search Volume Data", "Keyword Difficulty"]
    },
    {
      icon: FileText,
      title: "On-Page SEO Optimization",
      description: "Optimize every page for search engines and users with our meticulous approach. Meta tags, headers, content structure, internal linking, and user experience optimization for maximum rankings.",
      color: "from-blue-500 to-cyan-600",
      image: "/images/seo service/seo-services-process-outline.webp",
      benefits: ["Meta Optimization", "Header Structure", "Content Optimization", "Internal Linking"]
    },
    {
      icon: Link2,
      title: "White-Hat Link Building",
      description: "Build high-quality backlinks that boost your domain authority and rankings. Our white-hat strategies comply with Google's guidelines and create lasting value for your website.",
      color: "from-purple-500 to-pink-600",
      image: "/images/seo service/Small20business20SEO20services20multiple20strategies.png",
      benefits: ["Guest Posting", "Resource Pages", "Broken Link Building", "Digital PR"]
    },
    {
      icon: Zap,
      title: "Technical SEO Excellence",
      description: "Fix technical issues that hold you back from ranking success. Site speed optimization, mobile responsiveness, crawlability improvements, and schema markup implementation.",
      color: "from-orange-500 to-amber-600",
      image: "/images/seo service/affordable-seo-services.png",
      benefits: ["Site Speed", "Mobile Optimization", "Crawlability", "Schema Markup"]
    },
    {
      icon: FileText,
      title: "Content Marketing Strategy",
      description: "Create content that ranks and converts with our strategic approach. SEO-optimized articles, comprehensive guides, and valuable resources that attract your ideal customers.",
      color: "from-pink-500 to-rose-600",
      image: "/images/seo service/images.png",
      benefits: ["Content Planning", "SEO Writing", "Topic Clusters", "Content Promotion"]
    },
    {
      icon: BarChart3,
      title: "Comprehensive Analytics",
      description: "Track your progress with detailed reporting and actionable insights. Monitor rankings, traffic growth, conversion rates, and ROI to ensure your SEO investment pays off.",
      color: "from-indigo-500 to-purple-600",
      image: "/images/seo service/SEO.webp",
      benefits: ["Ranking Tracking", "Traffic Analysis", "Conversion Tracking", "ROI Reporting"]
    },
  ];

  const stats = [
    { value: "250", label: "First Page Rankings", suffix: "%+" },
    { value: "200", label: "Traffic Increase", suffix: "%+" },
    { value: "150", label: "Active SEO Projects", suffix: "+" },
    { value: "97", label: "Client Satisfaction", suffix: "%" },
    { value: "24", label: "Support Available", suffix: "/7" },
    { value: "5", label: "Years Experience", suffix: "+" },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Save 30+ Hours Weekly",
      description: "Focus on your business while we handle all SEO operations",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: DollarSign,
      title: "Increase Revenue by 200%",
      description: "Our proven SEO strategies drive significant business growth",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "100% White-Hat Methods",
      description: "Safe, sustainable SEO that builds lasting authority",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Dedicated SEO Team",
      description: "Personal SEO manager and expert specialists",
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingTiers = [
    {
      name: "Local SEO",
      price: "$799",
      period: "month",
      description: "Perfect for local businesses",
      features: [
        "Up to 15 keywords",
        "Google Business Profile optimization",
        "Local directory submissions",
        "On-page optimization",
        "Monthly reporting",
        "Email support",
      ],
      buttonText: "Get Started",
    },
    {
      name: "Growth SEO",
      price: "$1,499",
      period: "month",
      description: "For growing businesses",
      features: [
        "Up to 50 keywords",
        "Advanced technical SEO",
        "Content creation (2 articles/month)",
        "Link building campaign",
        "Weekly reporting",
        "Priority support",
        "Competitor analysis",
      ],
      highlighted: true,
      buttonText: "Start Ranking",
    },
    {
      name: "Enterprise SEO",
      price: "$3,999",
      period: "month",
      description: "For serious growth",
      features: [
        "Unlimited keywords",
        "Complete technical overhaul",
        "Content creation (8 articles/month)",
        "Aggressive link building",
        "Daily monitoring",
        "Dedicated SEO manager",
        "Custom strategy",
        "Conversion optimization",
      ],
      buttonText: "Dominate Search",
    },
  ];

  return (
    <>
      {/* Custom Enhanced Banner */}
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat opacity-40"
            style={{ backgroundImage: "url('/images/seo service/SEO.webp')" }}
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
                <span className="text-lg font-medium">4.9 Rating • 150+ Happy Clients</span>
              </motion.div>

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-xl font-semibold mb-4 text-white/90">Professional SEO Services</h2>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                  SEO That Actually Ranks
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-xl text-white/90 mb-10 leading-relaxed"
              >
                Dominate Google search results and drive organic traffic that converts. Our proven SEO strategies help businesses rank on page 1 and stay there with sustainable, white-hat methods.
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
                {["Page 1 Rankings", "White-Hat Only", "Guaranteed Results"].map((feature, index) => (
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

                {/* Central SEO Hub */}
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
                      🔍
                    </motion.div>
                    <div className="text-white text-center">
                      <div className="text-2xl font-bold mb-2">SEO</div>
                      <div className="text-lg opacity-90">Expert</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Search className="w-10 h-10 text-white" />
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
              Complete SEO Solution
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Everything you need to dominate search rankings. Our comprehensive SEO services cover every aspect of search engine optimization.
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

      {/* Why SEO Matters Section */}
      <div className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Why SEO Is The Best Marketing Investment
              </h2>
              <div className="space-y-8">
                {[
                  { icon: Target, title: "Targeted Traffic", desc: "Reach people actively searching for your products or services with high-intent traffic" },
                  { icon: TrendingUp, title: "Compound Growth", desc: "Unlike ads, SEO results compound over time for lasting value and authority" },
                  { icon: Award, title: "Build Authority", desc: "High rankings establish your brand as an industry leader and trusted resource" },
                  { icon: Globe, title: "Cost-Effective", desc: "Lower cost per lead compared to paid advertising with sustainable results" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div 
                      key={index} 
                      className="flex gap-6"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-600 text-lg">{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-3xl shadow-2xl p-8"
              initial={{ opacity: 0, x: 50 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-8">SEO Success Timeline</h3>
              <div className="space-y-8">
                {[
                  { month: "Month 1-2", title: "Foundation", desc: "Technical fixes, keyword research, content strategy development" },
                  { month: "Month 3-4", title: "Growth Phase", desc: "Rankings improve, traffic increases 50-100%, initial results" },
                  { month: "Month 5-6", title: "Momentum", desc: "Multiple page 1 rankings, 150-200% traffic growth, authority building" },
                  { month: "Month 7+", title: "Domination", desc: "Consistent page 1 presence, compound traffic growth, market leadership" },
                ].map((phase, index) => (
                  <motion.div 
                    key={index} 
                    className="relative pl-8 pb-6 border-l-2 border-green-500 last:pb-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-green-500" />
                    <div className="text-green-600 font-semibold mb-2 text-lg">{phase.month}</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h4>
                    <p className="text-gray-600">{phase.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
              Why Choose Our SEO Services?
            </motion.h2>
            <motion.p 
              className="text-xl text-green-100"
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Experience the power of professional SEO optimization
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

      <PricingSection tiers={pricingTiers} title="SEO Pricing Plans" subtitle="Flexible plans to fit your budget and goals" />

      <CallToAction />
    </>
  );
}