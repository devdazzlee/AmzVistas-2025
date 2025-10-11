"use client";

import ServiceHero from "@/components/Services/Service-Hero/Service-Hero";
import AnimatedFeatures from "@/components/Services/Animated-Features/Animated-Features";
import ServiceStats from "@/components/Services/Service-Stats/Service-Stats";
import { 
  ShoppingCart, 
  Globe, 
  TrendingUp, 
  Package, 
  Star, 
  DollarSign,
  Shield,
  Truck,
  BarChart3
} from "lucide-react";
import CallToAction from "@/components/Call-To-Action-Section/Call-To-Action-Section";

export default function EbayServicePage() {
  const features = [
    {
      icon: ShoppingCart,
      title: "Store Setup",
      description: "Professional eBay store setup with custom design. We create a branded storefront that builds trust and drives sales.",
      color: "from-yellow-500 to-orange-600",
    },
    {
      icon: Package,
      title: "Listing Management",
      description: "Optimize every listing for maximum visibility. Professional descriptions, SEO-optimized titles, and competitive pricing.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: TrendingUp,
      title: "Sales Optimization",
      description: "Increase your conversion rate with strategic pricing, promotions, and listing enhancements.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Truck,
      title: "Shipping Management",
      description: "Streamlined fulfillment and shipping. We optimize your shipping strategy to reduce costs and delivery times.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Shield,
      title: "Account Protection",
      description: "Keep your seller account healthy. We monitor metrics, handle disputes, and maintain your seller rating.",
      color: "from-red-500 to-rose-600",
    },
    {
      icon: Star,
      title: "Feedback Management",
      description: "Build your reputation with excellent feedback. We manage customer communications and resolve issues quickly.",
      color: "from-cyan-500 to-blue-600",
    },
  ];

  const stats = [
    { value: "200", label: "Sellers Managed", suffix: "+" },
    { value: "12", label: "Million GMV", prefix: "$", suffix: "M" },
    { value: "99", label: "Positive Feedback", suffix: ".5%" },
    { value: "40", label: "Sales Increase", suffix: "%+" },
  ];

  return (
    <>
      <ServiceHero
        title="eBay Store Management That Delivers"
        subtitle="Professional eBay Services"
        description="Maximize your eBay sales with expert store management. We handle everything from listing optimization to order fulfillment, helping you scale your eBay business profitably."
        primaryColor="from-yellow-600 via-orange-600 to-red-600"
        secondaryColor="from-yellow-500 to-orange-500"
        features={["Full Management", "Global Reach", "Proven Results"]}
        rating="4.9"
        clients="200+"
      />

      <ServiceStats stats={stats} backgroundColor="bg-gradient-to-r from-yellow-600 to-orange-600" />

      <AnimatedFeatures
        features={features}
        title="Complete eBay Store Management"
        subtitle="Everything you need to dominate eBay"
      />

      {/* Why eBay */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Sell On eBay?
              </h2>
              <div className="space-y-6">
                {[
                  { icon: Globe, title: "Global Marketplace", desc: "Reach 182 million active buyers worldwide" },
                  { icon: DollarSign, title: "High-Ticket Sales", desc: "Perfect platform for valuable items and collectibles" },
                  { icon: TrendingUp, title: "Auction Format", desc: "Unique bidding system that can maximize prices" },
                  { icon: BarChart3, title: "Lower Competition", desc: "Less saturated than Amazon with great opportunities" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">eBay Store Features</h3>
              <div className="space-y-4">
                {[
                  { feature: "Custom Store Design", value: "Included" },
                  { feature: "Unlimited Listings", value: "Yes" },
                  { feature: "Multi-Channel Integration", value: "Yes" },
                  { feature: "Advanced Reporting", value: "Yes" },
                  { feature: "Promoted Listings", value: "Managed" },
                  { feature: "Seller Protection", value: "Full Coverage" },
                  { feature: "International Shipping", value: "Available" },
                  { feature: "Dedicated Manager", value: "Included" },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="text-gray-700 font-medium">{item.feature}</span>
                    <span className="text-orange-600 font-bold">{item.value}</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-bold py-4 rounded-xl hover:shadow-lg transition-shadow">
                Start Selling on eBay
              </button>
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
    </>
  );
}
