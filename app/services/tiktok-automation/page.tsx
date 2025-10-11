"use client";

import ServiceHero from "@/components/Services/Service-Hero/Service-Hero";
import AnimatedFeatures from "@/components/Services/Animated-Features/Animated-Features";
import ServiceStats from "@/components/Services/Service-Stats/Service-Stats";
import { 
  Video, 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  Sparkles, 
  Target,
  Heart,
  Share2,
  Zap
} from "lucide-react";
import CallToAction from "@/components/Call-To-Action-Section/Call-To-Action-Section";

export default function TikTokAutomationPage() {
  const features = [
    {
      icon: Video,
      title: "Viral Content Creation",
      description: "Our creative team produces engaging TikTok videos that capture attention and drive engagement. We understand what makes content go viral.",
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: ShoppingCart,
      title: "TikTok Shop Management",
      description: "Complete TikTok Shop setup and management. From product listings to order fulfillment, we handle your entire TikTok e-commerce operation.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Target,
      title: "TikTok Ads Management",
      description: "Data-driven TikTok advertising campaigns that convert. We create and optimize ads to maximize your ROAS on TikTok's platform.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Users,
      title: "Influencer Partnerships",
      description: "Connect with TikTok influencers in your niche. We manage partnerships and campaigns that drive sales and brand awareness.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Sparkles,
      title: "Content Strategy",
      description: "Custom content calendars tailored to your brand. We plan, create, and schedule content that resonates with your target audience.",
      color: "from-yellow-500 to-orange-600",
    },
    {
      icon: TrendingUp,
      title: "Growth & Analytics",
      description: "Track your TikTok performance with detailed analytics. We monitor trends and optimize your strategy for maximum growth.",
      color: "from-red-500 to-rose-600",
    },
  ];

  const stats = [
    { value: "10", label: "Million Views Generated", suffix: "M+" },
    { value: "500", label: "Engagement Rate", suffix: "%+" },
    { value: "120", label: "Active TikTok Accounts", suffix: "+" },
    { value: "5", label: "Million Revenue", prefix: "$", suffix: "M+" },
  ];

  return (
    <>
      <ServiceHero
        title="TikTok Automation That Goes Viral"
        subtitle="Complete TikTok Management"
        description="Dominate TikTok with viral content and smart automation. We handle content creation, TikTok Shop management, influencer partnerships, and advertising to help you build a profitable TikTok presence."
        primaryColor="from-pink-600 via-rose-600 to-red-600"
        secondaryColor="from-pink-500 to-rose-500"
        features={["Viral Content", "TikTok Shop", "Influencer Network"]}
        rating="5.0"
        clients="120+"
      />

      <ServiceStats stats={stats} backgroundColor="bg-gradient-to-r from-pink-600 to-rose-600" />

      <AnimatedFeatures
        features={features}
        title="Complete TikTok Automation Suite"
        subtitle="Everything you need to succeed on TikTok"
      />

      {/* TikTok Advantage */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why TikTok For Business?
            </h2>
            <p className="text-xl text-gray-600">
              The fastest-growing platform for e-commerce
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "1.5B", label: "Active Users" },
              { icon: Heart, value: "52min", label: "Daily Usage" },
              { icon: ShoppingCart, value: "67%", label: "Buy After Seeing" },
              { icon: Share2, value: "High", label: "Viral Potential" },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
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

      {/* TikTok Shop Setup */}
      <div className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                TikTok Shop: The Future of Social Commerce
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Sell directly on TikTok with our complete shop management service. We handle everything from setup to sales.
              </p>

              <div className="space-y-6">
                {[
                  { icon: ShoppingCart, title: "Shop Setup", desc: "Complete TikTok Shop configuration and branding" },
                  { icon: Video, title: "Product Videos", desc: "Professional product showcase videos that convert" },
                  { icon: Target, title: "Live Shopping", desc: "Managed live shopping events with influencers" },
                  { icon: Zap, title: "Quick Fulfillment", desc: "Fast shipping and customer service" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center">
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h3>
              <div className="space-y-4">
                {[
                  "TikTok Shop setup and verification",
                  "Product catalog optimization",
                  "20+ viral videos per month",
                  "Daily content posting",
                  "Influencer collaborations",
                  "TikTok Ads management",
                  "Live shopping events",
                  "Customer service handling",
                  "Performance analytics",
                  "Monthly strategy calls",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-600 rounded-full" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl">
                <div className="text-center mb-4">
                  <div className="text-sm text-gray-600">Starting From</div>
                  <div className="text-4xl font-bold text-pink-600">$1,997</div>
                  <div className="text-gray-600">/month</div>
                </div>
              </div>

              <button className="w-full mt-6 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold py-4 rounded-xl hover:shadow-lg transition-shadow">
                Launch Your TikTok Business
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Types */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              TikTok Content We Create
            </h2>
            <p className="text-xl text-gray-600">
              Engaging content that drives views, engagement, and sales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "📱", title: "Product Showcases", desc: "Eye-catching product demonstrations and features" },
              { icon: "🎭", title: "Behind The Scenes", desc: "Authentic brand storytelling that builds trust" },
              { icon: "🎬", title: "Trending Challenges", desc: "Jump on trends relevant to your brand" },
              { icon: "🎓", title: "Educational Content", desc: "How-to videos and tips that provide value" },
              { icon: "💫", title: "User-Generated Content", desc: "Leverage customer content for social proof" },
              { icon: "🎪", title: "Live Shopping Events", desc: "Interactive live streams that drive sales" },
            ].map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CallToAction />
    </>
  );
}

