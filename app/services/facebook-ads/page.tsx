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
  Award
} from "lucide-react";
import CallToAction from "@/components/Call-To-Action-Section/Call-To-Action-Section";

export default function FacebookAdsPage() {
  const features = [
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Reach your ideal customers with laser-focused targeting. We use advanced audience segmentation and lookalike modeling to maximize your ad performance.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Sparkles,
      title: "Creative Excellence",
      description: "Eye-catching ad creatives that stop the scroll. Our designers create high-converting visuals and copy that resonate with your audience.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Continuous A/B testing and optimization to improve your ROAS. We monitor campaigns 24/7 and make data-driven adjustments.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Users,
      title: "Audience Building",
      description: "Build and nurture custom audiences that convert. We create sophisticated retargeting funnels to maximize customer lifetime value.",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: BarChart,
      title: "Advanced Analytics",
      description: "Detailed reporting and insights you can understand. Track every dollar spent and see exactly how your ads perform.",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: Megaphone,
      title: "Full-Funnel Campaigns",
      description: "From awareness to conversion, we manage your entire customer journey with strategic campaign structures.",
      color: "from-rose-500 to-pink-600",
    },
  ];

  const stats = [
    { value: "450", label: "ROAS Average", suffix: "%" },
    { value: "50", label: "Cost Reduction", suffix: "%" },
    { value: "5", label: "Years Experience", suffix: "+" },
    { value: "100", label: "Active Campaigns", suffix: "+" },
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
      <ServiceHero
        title="Facebook Ads That Actually Convert"
        subtitle="Expert Ad Management"
        description="Stop wasting money on ads that don't work. Our certified Facebook Ads experts create, manage, and optimize campaigns that deliver real ROI for your business."
        primaryColor="from-blue-600 via-indigo-600 to-purple-600"
        secondaryColor="from-blue-500 to-indigo-500"
        features={["450% ROAS", "Certified Experts", "Performance Guaranteed"]}
        rating="4.9"
        clients="300+"
      />

      <ServiceStats stats={stats} backgroundColor="bg-gradient-to-r from-blue-600 to-indigo-600" />

      <AnimatedFeatures
        features={features}
        title="Complete Facebook Advertising Solution"
        subtitle="Everything you need to dominate on Facebook and Instagram"
      />

      {/* Why Choose Us Section */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Businesses Choose Us
            </h2>
            <p className="text-xl text-gray-600">
              Results that speak for themselves
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "Certified Experts", desc: "Facebook Blueprint certified team with years of experience" },
              { icon: Eye, title: "Full Transparency", desc: "You own your ad accounts and see everything we do" },
              { icon: Zap, title: "Fast Results", desc: "See improvements in performance within the first 30 days" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
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
