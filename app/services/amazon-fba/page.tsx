"use client";

import ServiceHero from "@/components/Services/Service-Hero/Service-Hero";
import AnimatedFeatures from "@/components/Services/Animated-Features/Animated-Features";
import ServiceStats from "@/components/Services/Service-Stats/Service-Stats";
import { 
  Package, 
  TrendingUp, 
  Shield, 
  DollarSign, 
  BarChart3, 
  Users,
  Truck,
  Star,
  CheckCircle2
} from "lucide-react";
import CallToAction from "@/components/Call-To-Action-Section/Call-To-Action-Section";

export default function AmazonFBAPage() {
  const features = [
    {
      icon: Package,
      title: "Product Sourcing",
      description: "Find profitable products with high demand. Our expert team analyzes market trends and identifies winning opportunities.",
      color: "from-orange-500 to-amber-600",
    },
    {
      icon: TrendingUp,
      title: "Listing Optimization",
      description: "Rank on page 1 with SEO-optimized listings. Professional copywriting and keyword research that converts.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Truck,
      title: "FBA Management",
      description: "Complete FBA handling from prep to delivery. We manage inventory, shipments, and ensure stock levels.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: DollarSign,
      title: "PPC Campaigns",
      description: "Profitable advertising that lowers ACoS. Data-driven PPC management to maximize your ad ROI.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Shield,
      title: "Account Health",
      description: "Protect your seller account. Proactive monitoring and quick resolution of any policy issues.",
      color: "from-red-500 to-rose-600",
    },
    {
      icon: Star,
      title: "Review Generation",
      description: "Build social proof with strategic review generation. More 5-star reviews mean more sales.",
      color: "from-yellow-500 to-orange-600",
    },
  ];

  const stats = [
    { value: "350", label: "Sellers Managed", suffix: "+" },
    { value: "20", label: "Average ROI", suffix: "%+" },
    { value: "30", label: "Million Revenue", prefix: "$", suffix: "M+" },
    { value: "99", label: "Account Health", suffix: ".5%" },
  ];

  return (
    <>
      <ServiceHero
        title="Amazon FBA Automation Excellence"
        subtitle="Full-Service FBA Management"
        description="Build a profitable Amazon FBA business without the headaches. We handle everything from product research to customer service, so you can earn passive income while we grow your business."
        primaryColor="from-orange-600 via-amber-600 to-yellow-600"
        secondaryColor="from-orange-500 to-amber-500"
        features={["Proven System", "Buyback Guarantee", "20% ROI"]}
        rating="4.9"
        clients="350+"
      />

      <ServiceStats stats={stats} backgroundColor="bg-gradient-to-r from-orange-600 to-amber-600" />

      <AnimatedFeatures
        features={features}
        title="Complete Amazon FBA Solution"
        subtitle="Everything you need to succeed with Amazon FBA"
      />

      {/* What's Included */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Complete Done-For-You Amazon FBA
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We build and manage your entire Amazon FBA business so you can focus on growing your wealth.
              </p>

              <div className="space-y-4">
                {[
                  "LLC Formation & Business Setup",
                  "Amazon Seller Account Creation",
                  "Wholesale Product Sourcing",
                  "Brand Relationship Management",
                  "Professional Product Listings",
                  "Inventory Management System",
                  "FBA Prep & Shipping",
                  "PPC Campaign Management",
                  "Order & Customer Service",
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

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Investment Options</h3>
              
              <div className="space-y-6">
                {[
                  { name: "Silver Package", investment: "$25,000", revenue: "$10K-$25K/mo", roi: "15-20%" },
                  { name: "Gold Package", investment: "$50,000", revenue: "$30K-$60K/mo", roi: "18-25%" },
                  { name: "Platinum Package", investment: "$100,000", revenue: "$75K-$150K/mo", roi: "20-30%" },
                ].map((pkg, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
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
                  </div>
                ))}
              </div>

              <button className="w-full mt-8 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold py-4 rounded-xl hover:shadow-lg transition-shadow">
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
    </>
  );
}
