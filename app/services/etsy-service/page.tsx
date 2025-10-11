"use client";

import ServiceHero from "@/components/Services/Service-Hero/Service-Hero";
import AnimatedFeatures from "@/components/Services/Animated-Features/Animated-Features";
import ServiceStats from "@/components/Services/Service-Stats/Service-Stats";
import { 
  ShoppingBag, 
  Camera, 
  Tag, 
  Star, 
  TrendingUp, 
  Package,
  Heart,
  Search,
  Award
} from "lucide-react";
import CallToAction from "@/components/Call-To-Action-Section/Call-To-Action-Section";

export default function EtsyServicePage() {
  const features = [
    {
      icon: ShoppingBag,
      title: "Shop Setup & Branding",
      description: "Create a professional Etsy shop that stands out. Complete branding, banner design, and shop policies that build trust.",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: Camera,
      title: "Product Photography",
      description: "Professional product photos that sell. High-quality images optimized for Etsy's platform and mobile viewing.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Search,
      title: "Etsy SEO Mastery",
      description: "Get found in Etsy search. We optimize titles, tags, and descriptions using proven Etsy SEO strategies.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Tag,
      title: "Listing Optimization",
      description: "Convert browsers into buyers. Compelling product descriptions and strategic pricing that maximize sales.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Star,
      title: "Review Management",
      description: "Build your 5-star reputation. We help you get more reviews and handle customer feedback professionally.",
      color: "from-yellow-500 to-orange-600",
    },
    {
      icon: Package,
      title: "Order Fulfillment",
      description: "Streamline your operations. From inventory management to shipping, we optimize your fulfillment process.",
      color: "from-indigo-500 to-purple-600",
    },
  ];

  const stats = [
    { value: "150", label: "Shops Managed", suffix: "+" },
    { value: "300", label: "Sales Increase", suffix: "%" },
    { value: "4", label: "Average Rating", suffix: ".9" },
    { value: "50", label: "Featured Listings", suffix: "K+" },
  ];

  return (
    <>
      <ServiceHero
        title="Turn Your Etsy Shop Into A Business"
        subtitle="Professional Etsy Management"
        description="Scale your handmade, vintage, or craft business with expert Etsy management. We handle everything so you can focus on creating while we grow your sales."
        primaryColor="from-orange-600 via-red-600 to-rose-600"
        secondaryColor="from-orange-500 to-red-500"
        features={["Full Management", "SEO Optimized", "Sales Growth"]}
        rating="4.9"
        clients="150+"
      />

      <ServiceStats stats={stats} backgroundColor="bg-gradient-to-r from-orange-600 to-red-600" />

      <AnimatedFeatures
        features={features}
        title="Complete Etsy Shop Management"
        subtitle="Everything you need to succeed on Etsy"
      />

      {/* Shop Types */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Shop Types We Specialize In
            </h2>
            <p className="text-xl text-gray-600">
              Expert management for every Etsy category
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🎨", title: "Handmade Items", desc: "Jewelry, crafts, art, and custom creations" },
              { icon: "🪐", title: "Vintage Goods", desc: "Collectibles, antiques, and vintage treasures" },
              { icon: "🎁", title: "Craft Supplies", desc: "Materials, tools, and supplies for makers" },
              { icon: "👕", title: "Apparel", desc: "Clothing, accessories, and fashion items" },
              { icon: "🏠", title: "Home Decor", desc: "Furniture, decor, and home accessories" },
              { icon: "💍", title: "Jewelry", desc: "Custom jewelry and accessories" },
            ].map((type, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 hover:shadow-xl transition-all group cursor-pointer border-2 border-transparent hover:border-orange-500"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{type.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Process */}
      <div className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Etsy Success Process
            </h2>
            <p className="text-xl text-gray-600">
              A proven framework for growing your Etsy sales
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Award, step: "1", title: "Shop Audit", desc: "Analyze your current shop and identify opportunities" },
              { icon: Search, step: "2", title: "SEO Optimization", desc: "Optimize every listing for maximum visibility" },
              { icon: TrendingUp, step: "3", title: "Growth Strategy", desc: "Implement tactics to increase traffic and sales" },
              { icon: Heart, step: "4", title: "Scale & Succeed", desc: "Continuous optimization and expansion" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative text-center">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-orange-600 font-bold text-2xl mb-3">Step {item.step}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
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
