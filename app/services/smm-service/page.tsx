"use client";

import ServiceHero from "@/components/Services/Service-Hero/Service-Hero";
import AnimatedFeatures from "@/components/Services/Animated-Features/Animated-Features";
import ServiceStats from "@/components/Services/Service-Stats/Service-Stats";
import { 
  Share2, 
  Users, 
  TrendingUp, 
  MessageCircle, 
  Video, 
  Image as ImageIcon,
  Heart,
  BarChart2,
  Calendar
} from "lucide-react";
import CallToAction from "@/components/Call-To-Action-Section/Call-To-Action-Section";

export default function SMMServicePage() {
  const features = [
    {
      icon: Share2,
      title: "Multi-Platform Management",
      description: "Manage all your social media from one place. Facebook, Instagram, Twitter, LinkedIn, TikTok, and YouTube - we handle them all.",
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: ImageIcon,
      title: "Content Creation",
      description: "Professional graphics, videos, and copy that stop the scroll. Our creative team produces engaging content daily.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Users,
      title: "Community Management",
      description: "Build engaged communities around your brand. We respond to comments, messages, and foster meaningful connections.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: TrendingUp,
      title: "Growth Strategies",
      description: "Proven tactics to grow your followers organically. We use data-driven strategies to expand your reach.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Video,
      title: "Video Marketing",
      description: "Short-form videos that go viral. Reels, Stories, TikToks - we create thumb-stopping video content.",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: BarChart2,
      title: "Analytics & Insights",
      description: "Track what matters with detailed analytics. Understand your audience and optimize your strategy.",
      color: "from-cyan-500 to-blue-600",
    },
  ];

  const stats = [
    { value: "2", label: "Million Followers", suffix: "M+" },
    { value: "350", label: "Engagement Rate", suffix: "%" },
    { value: "180", label: "Active Accounts", suffix: "+" },
    { value: "10", label: "Posts Per Day", suffix: "K+" },
  ];

  return (
    <>
      <ServiceHero
        title="Social Media That Builds Brands"
        subtitle="Professional Social Media Marketing"
        description="Turn your social media into a powerful business tool. We create content that engages, grows your audience, and drives real business results across all platforms."
        primaryColor="from-pink-600 via-rose-600 to-red-600"
        secondaryColor="from-pink-500 to-rose-500"
        features={["All Platforms", "Daily Content", "Community Building"]}
        rating="5.0"
        clients="180+"
      />

      <ServiceStats stats={stats} backgroundColor="bg-gradient-to-r from-pink-600 to-rose-600" />

      <AnimatedFeatures
        features={features}
        title="Complete Social Media Management"
        subtitle="Everything you need to dominate social media"
      />

      {/* Platform Coverage */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Platforms We Master
            </h2>
            <p className="text-xl text-gray-600">
              Expert management across all major social networks
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: "Facebook", icon: "📘", users: "2.9B Users", color: "from-blue-500 to-blue-600" },
              { name: "Instagram", icon: "📸", users: "2B Users", color: "from-pink-500 to-rose-600" },
              { name: "TikTok", icon: "🎵", users: "1B Users", color: "from-gray-800 to-gray-900" },
              { name: "LinkedIn", icon: "💼", users: "900M Users", color: "from-blue-600 to-blue-700" },
              { name: "Twitter", icon: "🐦", users: "450M Users", color: "from-sky-400 to-sky-500" },
              { name: "YouTube", icon: "📹", users: "2.5B Users", color: "from-red-500 to-red-600" },
              { name: "Pinterest", icon: "📌", users: "450M Users", color: "from-red-600 to-rose-600" },
              { name: "Snapchat", icon: "👻", users: "750M Users", color: "from-yellow-400 to-yellow-500" },
            ].map((platform, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-pink-500 hover:shadow-lg transition-all group cursor-pointer"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{platform.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{platform.name}</h3>
                <p className="text-gray-600 text-sm">{platform.users}</p>
                <div className={`h-1 bg-gradient-to-r ${platform.color} rounded-full mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Calendar Preview */}
      <div className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Consistent, Quality Content Every Day
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our content calendar ensures your brand stays top-of-mind with your audience.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Calendar, title: "Strategic Planning", desc: "Content mapped to your business goals and audience interests" },
                  { icon: MessageCircle, title: "Engaging Copy", desc: "Captions that drive comments, shares, and meaningful engagement" },
                  { icon: Video, title: "Mixed Media", desc: "Perfect blend of images, videos, stories, and interactive content" },
                  { icon: Heart, title: "Brand Voice", desc: "Consistent messaging that reflects your brand personality" },
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
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-pink-600" />
                What You Get
              </h3>
              <div className="space-y-4">
                {[
                  { number: "30+", label: "Posts Per Month" },
                  { number: "10+", label: "Stories Per Week" },
                  { number: "5+", label: "Reels/Videos Per Week" },
                  { number: "Daily", label: "Community Management" },
                  { number: "Weekly", label: "Performance Reports" },
                  { number: "Monthly", label: "Strategy Calls" },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg">
                    <span className="text-gray-700">{item.label}</span>
                    <span className="text-2xl font-bold text-pink-600">{item.number}</span>
                  </div>
                ))}
              </div>

              <button className="w-full mt-8 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold py-4 rounded-xl hover:shadow-lg transition-shadow">
                Start Growing Today
              </button>
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
    </>
  );
}
