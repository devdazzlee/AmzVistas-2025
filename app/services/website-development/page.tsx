"use client";

import ServiceHero from "@/components/Services/Service-Hero/Service-Hero";
import AnimatedFeatures from "@/components/Services/Animated-Features/Animated-Features";
import ServiceStats from "@/components/Services/Service-Stats/Service-Stats";
import { 
  Code, 
  Smartphone, 
  Zap, 
  ShoppingCart, 
  Palette, 
  Lock,
  Rocket,
  Layout,
  Settings
} from "lucide-react";
import CallToAction from "@/components/Call-To-Action-Section/Call-To-Action-Section";

export default function WebsiteDevelopmentPage() {
  const features = [
    {
      icon: Layout,
      title: "Custom Design",
      description: "Beautiful, modern designs tailored to your brand. No templates - every website is uniquely crafted to stand out and convert.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Development",
      description: "Responsive designs that look perfect on every device. Over 60% of traffic is mobile - we make sure you capture it all.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed and performance. Fast websites rank higher, convert better, and keep visitors engaged.",
      color: "from-yellow-500 to-orange-600",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Ready",
      description: "Full-featured online stores that drive sales. Secure payments, inventory management, and seamless checkout experiences.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Lock,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and hosting. SSL certificates, regular backups, and 99.9% uptime guaranteed.",
      color: "from-red-500 to-rose-600",
    },
    {
      icon: Settings,
      title: "Easy to Manage",
      description: "User-friendly CMS that you can update yourself. No coding required - we provide training and support.",
      color: "from-cyan-500 to-blue-600",
    },
  ];

  const stats = [
    { value: "400", label: "Websites Built", suffix: "+" },
    { value: "2", label: "Week Turnaround", suffix: "" },
    { value: "99", label: "Uptime Guarantee", suffix: ".9%" },
    { value: "100", label: "Client Satisfaction", suffix: "%" },
  ];

  return (
    <>
      <ServiceHero
        title="Websites That Drive Results"
        subtitle="Professional Web Development"
        description="Transform your online presence with a website that's built to convert. We create fast, secure, and beautiful websites that turn visitors into customers."
        primaryColor="from-blue-600 via-indigo-600 to-purple-600"
        secondaryColor="from-blue-500 to-indigo-500"
        features={["Custom Design", "Mobile-First", "SEO-Optimized"]}
        rating="5.0"
        clients="400+"
      />

      <ServiceStats stats={stats} backgroundColor="bg-gradient-to-r from-blue-600 to-indigo-600" />

      <AnimatedFeatures
        features={features}
        title="Complete Web Development Services"
        subtitle="Everything you need for a powerful online presence"
      />

      {/* Technologies We Use */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Built With Modern Technology
            </h2>
            <p className="text-xl text-gray-600">
              We use the latest tools and frameworks to build fast, scalable websites
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "React", icon: "⚛️" },
              { name: "Next.js", icon: "▲" },
              { name: "Node.js", icon: "🟢" },
              { name: "WordPress", icon: "📝" },
              { name: "Shopify", icon: "🛍️" },
              { name: "WooCommerce", icon: "🛒" },
              { name: "Tailwind CSS", icon: "🎨" },
              { name: "TypeScript", icon: "📘" },
              { name: "MongoDB", icon: "🍃" },
              { name: "PostgreSQL", icon: "🐘" },
              { name: "AWS", icon: "☁️" },
              { name: "Vercel", icon: "▲" },
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{tech.icon}</div>
                <div className="text-gray-900 font-semibold">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Website Types */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Types of Websites We Build
            </h2>
            <p className="text-xl text-gray-600">
              Specialized solutions for every business need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ShoppingCart,
                title: "E-commerce Stores",
                desc: "Full-featured online stores with secure payments, inventory management, and shipping integration.",
                price: "Starting at $5,000",
              },
              {
                icon: Rocket,
                title: "Business Websites",
                desc: "Professional corporate websites that build credibility and generate leads for your business.",
                price: "Starting at $2,500",
              },
              {
                icon: Palette,
                title: "Portfolio Sites",
                desc: "Stunning portfolio websites perfect for creatives, agencies, and professionals.",
                price: "Starting at $1,500",
              },
              {
                icon: Layout,
                title: "Landing Pages",
                desc: "High-converting landing pages designed specifically for marketing campaigns.",
                price: "Starting at $800",
              },
              {
                icon: Code,
                title: "Custom Web Apps",
                desc: "Complex web applications with custom functionality and integrations.",
                price: "Custom Quote",
              },
              {
                icon: Settings,
                title: "Membership Sites",
                desc: "Subscription-based platforms with user management and protected content.",
                price: "Starting at $4,000",
              },
            ].map((type, index) => {
              const Icon = type.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.desc}</p>
                  <div className="text-blue-600 font-bold">{type.price}</div>
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
