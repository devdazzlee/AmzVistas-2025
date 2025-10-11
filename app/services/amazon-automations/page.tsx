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
  CheckCircle2
} from "lucide-react";
import CallToAction from "@/components/Call-To-Action-Section/Call-To-Action-Section";

export default function AmazonAutomationsPage() {
  const features = [
    {
      icon: Search,
      title: "Product Research",
      description: "Find winning products with our AI-powered research tools. We analyze market trends, competition, and profitability to identify the best opportunities.",
      color: "from-orange-500 to-amber-600",
    },
    {
      icon: Package,
      title: "Listing Optimization",
      description: "SEO-optimized listings that rank on page 1. Our experts create compelling titles, bullet points, and descriptions that convert browsers into buyers.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: TrendingUp,
      title: "PPC Management",
      description: "Maximize your advertising ROI with data-driven PPC campaigns. We optimize bids, keywords, and ad placement to reduce ACoS and increase sales.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Truck,
      title: "FBA Management",
      description: "Complete FBA handling from prep center to delivery. We manage inventory, shipments, and ensure your products are always in stock.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Shield,
      title: "Account Protection",
      description: "Safeguard your Amazon account with proactive monitoring. We handle suspensions, policy violations, and keep your account healthy.",
      color: "from-red-500 to-rose-600",
    },
    {
      icon: Star,
      title: "Review Management",
      description: "Build your reputation with strategic review generation. We help you get more 5-star reviews while staying compliant with Amazon's TOS.",
      color: "from-yellow-500 to-orange-600",
    },
  ];

  const stats = [
    { value: "300", label: "Sellers Managed", suffix: "+" },
    { value: "15", label: "Average ROI", suffix: "%" },
    { value: "25", label: "Million Revenue", prefix: "$", suffix: "M" },
    { value: "99", label: "Account Health", suffix: "%" },
  ];

  return (
    <>
      <ServiceHero
        title="Amazon Automation Done Right"
        subtitle="Full-Service Amazon Management"
        description="Build a profitable Amazon business without the headaches. We handle everything from product sourcing to customer service, so you can enjoy passive income while we grow your empire."
        primaryColor="from-orange-600 via-amber-600 to-yellow-600"
        secondaryColor="from-orange-500 to-amber-500"
        features={["Proven System", "Buyback Guarantee", "15% ROI Minimum"]}
        rating="4.9"
        clients="300+"
      />

      <ServiceStats stats={stats} backgroundColor="bg-gradient-to-r from-orange-600 to-amber-600" />

      <AnimatedFeatures
        features={features}
        title="Complete Amazon Automation Suite"
        subtitle="Everything you need to succeed on Amazon's marketplace"
      />

      {/* What's Included */}
      <div className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What's Included in Your Amazon Automation
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We provide a complete, done-for-you Amazon business that generates passive income from day one.
              </p>

              <div className="space-y-4">
                {[
                  "LLC Formation & Business Setup",
                  "Wholesale Product Sourcing",
                  "Amazon Seller Account Creation",
                  "Product Listing & Optimization",
                  "Inventory Management & Forecasting",
                  "Order Fulfillment & Shipping",
                  "Customer Service & Returns",
                  "Monthly Performance Reports",
                  "Dedicated Account Manager",
                  "100% ROI Buyback Guarantee",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Investment Plans Starting From</div>
                  <div className="text-5xl font-bold text-gray-900 mb-2">$25,000</div>
                  <div className="text-gray-600">One-time setup fee</div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-700">Expected Monthly Revenue</span>
                    <span className="font-bold text-gray-900">$10K - $30K</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-700">Average Profit Margin</span>
                    <span className="font-bold text-green-600">15-25%</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-700">ROI Timeline</span>
                    <span className="font-bold text-gray-900">12-18 Months</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold py-4 rounded-xl hover:shadow-lg transition-shadow">
                  Schedule Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
    </>
  );
}
