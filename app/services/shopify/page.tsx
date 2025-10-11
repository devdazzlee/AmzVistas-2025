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
  BarChart3
} from "lucide-react";
import CallToAction from "@/components/Call-To-Action-Section/Call-To-Action-Section";

export default function ShopifyPage() {
  const features = [
    {
      icon: ShoppingCart,
      title: "Complete Store Setup",
      description: "Professional Shopify store design and setup. We handle everything from theme customization to product catalog integration.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Package,
      title: "Product Management",
      description: "Automated inventory syncing, product imports, and catalog management. Keep your store updated effortlessly.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Zap,
      title: "Conversion Optimization",
      description: "Optimize your store for maximum sales. A/B testing, checkout optimization, and conversion rate improvements.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: CreditCard,
      title: "Payment Integration",
      description: "Secure payment gateway setup with multiple options. Shopify Payments, Stripe, PayPal, and more.",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: Globe,
      title: "Multi-Channel Selling",
      description: "Expand your reach with integrated selling on Facebook, Instagram, Google, and Amazon from your Shopify store.",
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Track sales, customer behavior, and store performance with detailed analytics and actionable insights.",
      color: "from-indigo-500 to-purple-600",
    },
  ];

  const stats = [
    { value: "180", label: "Stores Built", suffix: "+" },
    { value: "250", label: "Conversion Rate Increase", suffix: "%" },
    { value: "8", label: "Million Revenue Generated", prefix: "$", suffix: "M" },
    { value: "100", label: "Client Satisfaction", suffix: "%" },
  ];

  return (
    <>
      <ServiceHero
        title="Shopify Stores That Sell"
        subtitle="Professional Shopify Development"
        description="Launch and scale your Shopify store with expert development and optimization. We create beautiful, high-converting stores that turn visitors into loyal customers."
        primaryColor="from-green-600 via-emerald-600 to-teal-600"
        secondaryColor="from-green-500 to-emerald-500"
        features={["Custom Design", "Mobile Optimized", "Sales Focused"]}
        rating="5.0"
        clients="180+"
      />

      <ServiceStats stats={stats} backgroundColor="bg-gradient-to-r from-green-600 to-emerald-600" />

      <AnimatedFeatures
        features={features}
        title="Complete Shopify Solutions"
        subtitle="Everything you need for a successful Shopify store"
      />

      {/* Shopify Features */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Shopify?
            </h2>
            <p className="text-xl text-gray-600">
              The world's leading e-commerce platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Smartphone, title: "Mobile-First", desc: "Beautiful on every device" },
              { icon: Settings, title: "Easy Management", desc: "Simple admin dashboard" },
              { icon: Zap, title: "Lightning Fast", desc: "Optimized performance" },
              { icon: Globe, title: "Global Reach", desc: "Sell worldwide easily" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Packages */}
      <div className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Shopify Development Packages
            </h2>
            <p className="text-xl text-gray-600">
              Choose the right package for your business
            </p>
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
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 ${
                  pkg.highlighted ? "border-2 border-green-500 shadow-2xl scale-105" : "shadow-lg"
                }`}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-green-600 mb-6">{pkg.price}</div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-green-600 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-bold ${
                  pkg.highlighted
                    ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white"
                    : "bg-gray-100 text-gray-900"
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CallToAction />
    </>
  );
}
