"use client";

import ServiceHero from "@/components/Services/Service-Hero/Service-Hero";
import AnimatedFeatures from "@/components/Services/Animated-Features/Animated-Features";
import ServiceStats from "@/components/Services/Service-Stats/Service-Stats";
import { 
  Rocket, 
  Target, 
  TrendingUp, 
  Mail, 
  Share2, 
  FileText,
  Video,
  Megaphone,
  BarChart4
} from "lucide-react";
import CallToAction from "@/components/Call-To-Action-Section/Call-To-Action-Section";

export default function DigitalMarketingPage() {
  const features = [
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Comprehensive digital strategies tailored to your business goals. We analyze your market, competitors, and audience to create winning campaigns.",
      color: "from-violet-500 to-purple-600",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Build engaged communities across all platforms. From content creation to community management, we handle your entire social presence.",
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Convert leads into customers with strategic email campaigns. Automated sequences, segmentation, and personalization for maximum ROI.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: FileText,
      title: "Content Marketing",
      description: "High-quality content that attracts and converts. Blog posts, ebooks, whitepapers, and more to establish your authority.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Video,
      title: "Video Marketing",
      description: "Engaging video content that tells your story. From concept to production, we create videos that drive results.",
      color: "from-orange-500 to-amber-600",
    },
    {
      icon: Megaphone,
      title: "Paid Advertising",
      description: "Multi-channel paid campaigns across Google, Facebook, LinkedIn, and more. Maximize ROI with expert media buying.",
      color: "from-red-500 to-rose-600",
    },
  ];

  const stats = [
    { value: "200", label: "Clients Served", suffix: "%" },
    { value: "350", label: "Average ROI", suffix: "%" },
    { value: "50", label: "Million Reach", suffix: "M+" },
    { value: "98", label: "Client Retention", suffix: "%" },
  ];

  return (
    <>
      <ServiceHero
        title="Digital Marketing That Drives Growth"
        subtitle="360° Marketing Solutions"
        description="Stop guessing and start growing. Our full-service digital marketing agency combines strategy, creativity, and data to deliver campaigns that scale your business profitably."
        primaryColor="from-violet-600 via-purple-600 to-pink-600"
        secondaryColor="from-violet-500 to-purple-500"
        features={["Full-Service", "ROI-Focused", "Data-Driven"]}
        rating="4.9"
        clients="200+"
      />

      <ServiceStats stats={stats} backgroundColor="bg-gradient-to-r from-violet-600 to-purple-600" />

      <AnimatedFeatures
        features={features}
        title="Complete Digital Marketing Suite"
        subtitle="Every service you need to dominate your market"
      />

      {/* Services Breakdown */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Marketing Process
            </h2>
            <p className="text-xl text-gray-600">
              A proven framework that delivers consistent results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: BarChart4, 
                title: "Research & Strategy", 
                desc: "Deep dive into your market, competitors, and audience",
                color: "from-violet-500 to-purple-600"
              },
              { 
                icon: Rocket, 
                title: "Campaign Creation", 
                desc: "Design and develop high-impact marketing campaigns",
                color: "from-purple-500 to-pink-600"
              },
              { 
                icon: TrendingUp, 
                title: "Launch & Optimize", 
                desc: "Execute campaigns and continuously improve performance",
                color: "from-pink-500 to-rose-600"
              },
              { 
                icon: BarChart4, 
                title: "Report & Scale", 
                desc: "Transparent reporting and strategic scaling",
                color: "from-rose-500 to-red-600"
              },
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative group">
                  <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-violet-600 mb-3">
                      Step {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Industries We Serve */}
      <div className="py-20 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Proven strategies across multiple sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "E-commerce",
              "SaaS",
              "Healthcare",
              "Real Estate",
              "Finance",
              "Education",
              "Food & Beverage",
              "Technology",
              "Retail",
              "Travel",
              "Fitness",
              "B2B Services",
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="text-gray-900 font-semibold">{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CallToAction />
    </>
  );
}
