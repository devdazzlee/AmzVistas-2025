"use client";

import ServiceHero from "@/components/Services/Service-Hero/Service-Hero";
import AnimatedFeatures from "@/components/Services/Animated-Features/Animated-Features";
import ServiceStats from "@/components/Services/Service-Stats/Service-Stats";
import { 
  ShoppingCart, 
  TrendingUp, 
  Zap, 
  BarChart3, 
  Settings, 
  Users,
  Package,
  DollarSign,
  Clock
} from "lucide-react";
import CallToAction from "@/components/Call-To-Action-Section/Call-To-Action-Section";

export default function EcommerceAutomationPage() {
  const features = [
    {
      icon: ShoppingCart,
      title: "Multi-Platform Integration",
      description: "Seamlessly connect and manage multiple e-commerce platforms from one centralized dashboard. Sync inventory, orders, and customer data across all channels.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: TrendingUp,
      title: "Smart Analytics",
      description: "Get real-time insights into your business performance with AI-powered analytics. Make data-driven decisions to grow your revenue.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Automate repetitive tasks like order processing, inventory updates, and customer communications. Save hours every day.",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: BarChart3,
      title: "Dynamic Pricing",
      description: "AI-powered pricing optimization that adjusts based on market conditions, competition, and demand to maximize your profits.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Settings,
      title: "Inventory Management",
      description: "Never run out of stock or overstock again. Our smart inventory system predicts demand and manages stock levels automatically.",
      color: "from-indigo-500 to-blue-600",
    },
    {
      icon: Users,
      title: "Customer Engagement",
      description: "Automated email campaigns, personalized recommendations, and chatbot support to keep customers coming back.",
      color: "from-pink-500 to-rose-600",
    },
  ];

  const stats = [
    { value: "500", label: "Active Stores", suffix: "+" },
    { value: "95", label: "Automation Rate", suffix: "%" },
    { value: "10", label: "Million in Sales", prefix: "$", suffix: "M" },
    { value: "24", label: "Support Available", suffix: "/7" },
  ];

  return (
    <>
      <ServiceHero
        title="E-commerce Automation That Scales Your Business"
        subtitle="Complete Automation Solution"
        description="Transform your e-commerce business with our cutting-edge automation platform. Manage multiple stores, automate operations, and scale effortlessly while we handle the complexity."
        primaryColor="from-blue-600 via-purple-600 to-pink-600"
        secondaryColor="from-blue-500 to-purple-500"
        features={["Multi-Platform", "AI-Powered", "24/7 Automation"]}
        rating="4.9"
        clients="500+"
      />

      <ServiceStats stats={stats} backgroundColor="bg-gradient-to-r from-blue-600 to-purple-600" />

      <AnimatedFeatures
        features={features}
        title="Complete E-commerce Automation Suite"
        subtitle="Everything you need to run a successful automated e-commerce business"
      />

      {/* Process Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Get started in 4 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Package, title: "Connect Your Stores", desc: "Link all your e-commerce platforms in minutes" },
              { icon: Settings, title: "Configure Automation", desc: "Set up rules and workflows that fit your business" },
              { icon: Zap, title: "Launch & Monitor", desc: "Go live and watch your automation work" },
              { icon: DollarSign, title: "Scale & Grow", desc: "Expand to new platforms and markets effortlessly" },
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <CallToAction />
    </>
  );
}
