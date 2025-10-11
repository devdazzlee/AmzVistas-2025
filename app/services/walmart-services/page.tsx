"use client";

import ServiceHero from "@/components/Services/Service-Hero/Service-Hero";
import AnimatedFeatures from "@/components/Services/Animated-Features/Animated-Features";
import ServiceStats from "@/components/Services/Service-Stats/Service-Stats";
import { 
  ShoppingCart, 
  TrendingUp, 
  Package, 
  Award, 
  Truck, 
  DollarSign,
  Target,
  Globe,
  CheckCircle2
} from "lucide-react";
import CallToAction from "@/components/Call-To-Action-Section/Call-To-Action-Section";

export default function WalmartServicesPage() {
  const features = [
    {
      icon: Award,
      title: "Seller Approval",
      description: "Get approved to sell on Walmart Marketplace. We handle the application process and ensure you meet all requirements.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: ShoppingCart,
      title: "Marketplace Setup",
      description: "Complete store setup and optimization. Product catalog integration, brand registry, and marketplace configuration.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Package,
      title: "Product Listing",
      description: "Professional listings that convert. SEO-optimized titles, descriptions, and high-quality product images.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Truck,
      title: "WFS Management",
      description: "Walmart Fulfillment Services optimization. Streamlined inventory and shipping management.",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: Target,
      title: "Advertising Campaigns",
      description: "Sponsored product ads that drive sales. Strategic campaign management to maximize your ROAS.",
      color: "from-yellow-500 to-orange-600",
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description: "Scale your Walmart business profitably. Data-driven strategies for sustainable growth.",
      color: "from-indigo-500 to-purple-600",
    },
  ];

  const stats = [
    { value: "120", label: "Sellers Managed", suffix: "+" },
    { value: "18", label: "Million GMV", prefix: "$", suffix: "M" },
    { value: "100", label: "Approval Rate", suffix: "%" },
    { value: "45", label: "Profit Margin", suffix: "%+" },
  ];

  return (
    <>
      <ServiceHero
        title="Dominate Walmart Marketplace"
        subtitle="Professional Walmart Management"
        description="Tap into Walmart's massive customer base with expert marketplace management. We handle everything from seller approval to scaling, helping you build a profitable Walmart business."
        primaryColor="from-blue-600 via-cyan-600 to-teal-600"
        secondaryColor="from-blue-500 to-cyan-500"
        features={["Approval Guaranteed", "Full Management", "WFS Optimization"]}
        rating="5.0"
        clients="120+"
      />

      <ServiceStats stats={stats} backgroundColor="bg-gradient-to-r from-blue-600 to-cyan-600" />

      <AnimatedFeatures
        features={features}
        title="Complete Walmart Marketplace Solution"
        subtitle="Everything you need to succeed on Walmart"
      />

      {/* Why Walmart Marketplace */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Walmart Marketplace?
            </h2>
            <p className="text-xl text-gray-600">
              The fastest-growing e-commerce platform in America
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, value: "120M", label: "Monthly Visitors" },
              { icon: DollarSign, value: "$80B", label: "Annual GMV" },
              { icon: TrendingUp, value: "40%", label: "YoY Growth" },
              { icon: Target, value: "Low", label: "Competition" },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* What's Included */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Complete Walmart Management Package
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We handle every aspect of your Walmart marketplace business so you can focus on growth.
              </p>

              <div className="space-y-4">
                {[
                  "Walmart Seller Application & Approval",
                  "Complete Marketplace Setup",
                  "Product Research & Sourcing",
                  "Professional Listing Creation",
                  "Inventory Management",
                  "WFS (Walmart Fulfillment Services)",
                  "Sponsored Product Campaigns",
                  "Pricing Optimization",
                  "Order Management",
                  "Customer Service",
                  "Performance Monitoring",
                  "Monthly Reporting & Strategy Calls",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Investment Packages</h3>
              
              <div className="space-y-6">
                {[
                  { name: "Starter", price: "$30K", revenue: "$15K-$30K/mo", margin: "15-20%" },
                  { name: "Growth", price: "$50K", revenue: "$40K-$80K/mo", margin: "18-25%" },
                  { name: "Premium", price: "$100K", revenue: "$100K-$200K/mo", margin: "20-28%" },
                ].map((pkg, index) => (
                  <div key={index} className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border-2 border-blue-200 hover:border-blue-500 transition-colors cursor-pointer">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{pkg.name}</h4>
                        <div className="text-3xl font-bold text-blue-600 mt-2">{pkg.price}</div>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Expected Revenue:</span>
                        <span className="font-bold text-gray-900">{pkg.revenue}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Profit Margin:</span>
                        <span className="font-bold text-green-600">{pkg.margin}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-4 rounded-xl hover:shadow-lg transition-shadow">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
    </>
  );
}
