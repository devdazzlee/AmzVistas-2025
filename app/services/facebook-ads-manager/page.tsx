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
  Zap,
  Award,
  Rocket,
  Eye
} from "lucide-react";
import CallToAction from "@/components/Call-To-Action-Section/Call-To-Action-Section";

export default function FacebookAdsManagerPage() {
  const features = [
    {
      icon: Target,
      title: "Expert Campaign Strategy",
      description: "Certified Facebook Ads managers create custom strategies based on your business goals, audience, and budget.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Sparkles,
      title: "Creative Excellence",
      description: "High-converting ad creatives designed by professionals. We create ads that stop the scroll and drive action.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: TrendingUp,
      title: "Advanced Optimization",
      description: "Daily monitoring and optimization to maximize ROAS. We continuously test and refine for peak performance.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Users,
      title: "Audience Mastery",
      description: "Build profitable custom and lookalike audiences. Strategic retargeting that converts cold traffic.",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: BarChart,
      title: "Transparent Reporting",
      description: "Detailed analytics and insights you can understand. Track every dollar and see real ROI.",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: Rocket,
      title: "Scaling Systems",
      description: "Proven frameworks to scale profitable campaigns. We help you grow while maintaining profitability.",
      color: "from-rose-500 to-pink-600",
    },
  ];

  const stats = [
    { value: "480", label: "Average ROAS", suffix: "%" },
    { value: "60", label: "Cost Per Lead Reduction", suffix: "%" },
    { value: "250", label: "Active Accounts", suffix: "+" },
    { value: "98", label: "Client Retention", suffix: "%" },
  ];

  const pricingTiers = [
    {
      name: "Essential",
      price: "$1,297",
      period: "month",
      description: "Perfect for small businesses",
      features: [
        "Up to $10K ad spend management",
        "Facebook & Instagram campaigns",
        "Basic audience targeting",
        "2 ad creative variations",
        "Bi-weekly reporting",
        "Email support",
      ],
      buttonText: "Get Started",
    },
    {
      name: "Professional",
      price: "$2,497",
      period: "month",
      description: "For serious businesses",
      features: [
        "Up to $30K ad spend management",
        "Multi-platform campaigns",
        "Advanced audience strategy",
        "5+ ad creative variations",
        "Weekly reporting & calls",
        "Priority support",
        "A/B testing included",
        "Landing page advice",
      ],
      highlighted: true,
      buttonText: "Scale Now",
    },
    {
      name: "Enterprise",
      price: "$5,997",
      period: "month",
      description: "For maximum growth",
      features: [
        "Unlimited ad spend management",
        "Full-funnel campaigns",
        "Custom audience development",
        "Unlimited creatives",
        "Daily optimization",
        "Dedicated ads manager",
        "Creative production",
        "Conversion rate optimization",
      ],
      buttonText: "Go Enterprise",
    },
  ];

  return (
    <>
      <ServiceHero
        title="Facebook Ads Manager You Can Trust"
        subtitle="Dedicated Ads Management"
        description="Get a certified Facebook Ads manager dedicated to growing your business. We handle strategy, creative, optimization, and scaling so you can focus on running your business."
        primaryColor="from-blue-600 via-indigo-600 to-purple-600"
        secondaryColor="from-blue-500 to-indigo-500"
        features={["Certified Experts", "480% ROAS", "Full Transparency"]}
        rating="4.9"
        clients="250+"
      />

      <ServiceStats stats={stats} backgroundColor="bg-gradient-to-r from-blue-600 to-indigo-600" />

      <AnimatedFeatures
        features={features}
        title="What Your Facebook Ads Manager Does"
        subtitle="Comprehensive management for maximum results"
      />

      {/* Why Hire a Manager */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Hire a Facebook Ads Manager?
            </h2>
            <p className="text-xl text-gray-600">
              Professional management delivers better results at lower costs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Award, 
                title: "Expert Knowledge", 
                desc: "Facebook Blueprint certified with years of hands-on experience",
                stat: "500+ Campaigns Managed"
              },
              { 
                icon: Eye, 
                title: "Daily Monitoring", 
                desc: "We watch your campaigns 24/7 and make adjustments in real-time",
                stat: "Daily Optimization"
              },
              { 
                icon: Zap, 
                title: "Faster Results", 
                desc: "Skip the learning curve and start seeing results in weeks, not months",
                stat: "30-Day Results"
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.desc}</p>
                  <div className="text-blue-600 font-bold">{item.stat}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Manager Responsibilities */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Your Dedicated Manager Handles Everything
              </h2>
              <div className="space-y-4">
                {[
                  "Campaign strategy and planning",
                  "Audience research and targeting",
                  "Ad creative design and copywriting",
                  "Campaign setup and configuration",
                  "Daily performance monitoring",
                  "Budget management and allocation",
                  "A/B testing and optimization",
                  "Conversion tracking setup",
                  "Weekly performance reporting",
                  "Monthly strategy calls",
                  "Scaling profitable campaigns",
                  "Issue resolution and support",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Meet Your Manager</h3>
              <div className="space-y-6">
                {[
                  { title: "Facebook Blueprint Certified", icon: "✅" },
                  { title: "5+ Years Experience", icon: "⭐" },
                  { title: "Managed $10M+ in Ad Spend", icon: "💰" },
                  { title: "Average 400% ROAS", icon: "📈" },
                  { title: "Direct Communication", icon: "💬" },
                  { title: "Proactive Optimization", icon: "⚡" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                    <div className="text-3xl">{item.icon}</div>
                    <div className="font-semibold text-gray-900">{item.title}</div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 rounded-xl hover:shadow-lg transition-shadow">
                Get Your Manager
              </button>
            </div>
          </div>
        </div>
      </div>

      <PricingSection tiers={pricingTiers} title="Manager Pricing Plans" subtitle="Professional management at every budget level" />

      <CallToAction />
    </>
  );
}
