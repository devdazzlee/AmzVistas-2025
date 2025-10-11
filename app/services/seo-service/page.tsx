"use client";

import ServiceHero from "@/components/Services/Service-Hero/Service-Hero";
import AnimatedFeatures from "@/components/Services/Animated-Features/Animated-Features";
import ServiceStats from "@/components/Services/Service-Stats/Service-Stats";
import PricingSection from "@/components/Services/Pricing-Section/Pricing-Section";
import { 
  Search, 
  TrendingUp, 
  FileText, 
  Link2, 
  BarChart3, 
  Globe,
  Target,
  Zap,
  Award
} from "lucide-react";
import CallToAction from "@/components/Call-To-Action-Section/Call-To-Action-Section";

export default function SEOServicePage() {
  const features = [
    {
      icon: Search,
      title: "Keyword Research",
      description: "Find the exact keywords your customers are searching for. We identify high-value, low-competition keywords that drive qualified traffic.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: FileText,
      title: "On-Page SEO",
      description: "Optimize every page for search engines and users. Meta tags, headers, content structure, and internal linking perfected.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Link2,
      title: "Link Building",
      description: "Build high-quality backlinks that boost your authority. White-hat strategies that comply with Google's guidelines.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Zap,
      title: "Technical SEO",
      description: "Fix technical issues that hold you back. Site speed, mobile optimization, crawlability, and schema markup.",
      color: "from-orange-500 to-amber-600",
    },
    {
      icon: FileText,
      title: "Content Strategy",
      description: "Create content that ranks and converts. SEO-optimized articles, guides, and resources that attract your ideal customers.",
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Track your progress with detailed reporting. See exactly how your rankings, traffic, and conversions improve month over month.",
      color: "from-indigo-500 to-purple-600",
    },
  ];

  const stats = [
    { value: "250", label: "First Page Rankings", suffix: "%" },
    { value: "180", label: "Traffic Increase", suffix: "%" },
    { value: "150", label: "Active SEO Projects", suffix: "+" },
    { value: "97", label: "Client Satisfaction", suffix: "%" },
  ];

  const pricingTiers = [
    {
      name: "Local SEO",
      price: "$799",
      period: "month",
      description: "Perfect for local businesses",
      features: [
        "Up to 15 keywords",
        "Google Business Profile optimization",
        "Local directory submissions",
        "On-page optimization",
        "Monthly reporting",
        "Email support",
      ],
      buttonText: "Get Started",
    },
    {
      name: "Growth SEO",
      price: "$1,499",
      period: "month",
      description: "For growing businesses",
      features: [
        "Up to 50 keywords",
        "Advanced technical SEO",
        "Content creation (2 articles/month)",
        "Link building campaign",
        "Weekly reporting",
        "Priority support",
        "Competitor analysis",
      ],
      highlighted: true,
      buttonText: "Start Ranking",
    },
    {
      name: "Enterprise SEO",
      price: "$3,999",
      period: "month",
      description: "For serious growth",
      features: [
        "Unlimited keywords",
        "Complete technical overhaul",
        "Content creation (8 articles/month)",
        "Aggressive link building",
        "Daily monitoring",
        "Dedicated SEO manager",
        "Custom strategy",
        "Conversion optimization",
      ],
      buttonText: "Dominate Search",
    },
  ];

  return (
    <>
      <ServiceHero
        title="SEO That Actually Ranks"
        subtitle="Professional SEO Services"
        description="Dominate Google search results and drive organic traffic that converts. Our proven SEO strategies help businesses rank on page 1 and stay there."
        primaryColor="from-green-600 via-emerald-600 to-teal-600"
        secondaryColor="from-green-500 to-emerald-500"
        features={["Page 1 Rankings", "White-Hat Only", "Guaranteed Results"]}
        rating="4.9"
        clients="150+"
      />

      <ServiceStats stats={stats} backgroundColor="bg-gradient-to-r from-green-600 to-emerald-600" />

      <AnimatedFeatures
        features={features}
        title="Complete SEO Solution"
        subtitle="Everything you need to dominate search rankings"
      />

      {/* Why SEO Matters */}
      <div className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why SEO Is The Best Marketing Investment
              </h2>
              <div className="space-y-6">
                {[
                  { icon: Target, title: "Targeted Traffic", desc: "Reach people actively searching for your products or services" },
                  { icon: TrendingUp, title: "Compound Growth", desc: "Unlike ads, SEO results compound over time for lasting value" },
                  { icon: Award, title: "Build Authority", desc: "High rankings establish your brand as an industry leader" },
                  { icon: Globe, title: "Cost-Effective", desc: "Lower cost per lead compared to paid advertising" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
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

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">SEO Success Timeline</h3>
              <div className="space-y-6">
                {[
                  { month: "Month 1-2", title: "Foundation", desc: "Technical fixes, keyword research, content strategy" },
                  { month: "Month 3-4", title: "Growth Phase", desc: "Rankings improve, traffic increases 50-100%" },
                  { month: "Month 5-6", title: "Momentum", desc: "Multiple page 1 rankings, 150-200% traffic growth" },
                  { month: "Month 7+", title: "Domination", desc: "Consistent page 1 presence, compound traffic growth" },
                ].map((phase, index) => (
                  <div key={index} className="relative pl-8 pb-6 border-l-2 border-green-500 last:pb-0">
                    <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-green-500" />
                    <div className="text-green-600 font-semibold mb-1">{phase.month}</div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{phase.title}</h4>
                    <p className="text-gray-600 text-sm">{phase.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <PricingSection tiers={pricingTiers} title="SEO Pricing Plans" subtitle="Flexible plans to fit your budget and goals" />

      <CallToAction />
    </>
  );
}
