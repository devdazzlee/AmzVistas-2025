"use client"

import AdvancedStatsCarousel from "@/components/Advanced-Stats-Carousel/Advanced-Stats-Carousel";
import AnimatedStatsSlider from "@/components/Animated-Stats-Slider/Animated-Stats-Slider";
import ExcellenceSection from "@/components/Excellence-Section/Excellence-Section";
import FeaturesSection from "@/components/Features-Section/Features-Section";
import HeroSection from "@/components/Hero-Section/Hero-Section";
import JourneySection from "@/components/Journey-Section/Journey-Section";
import LeadershipSection from "@/components/Leadership-Section/Leadership-Section";
import LogisticsTourSection from "@/components/Logistics-Tour/Logistics-Tour";
import ProcessSection from "@/components/Process-Section/ProcessSection";
import RevealNumbersSection from "@/components/Reveal-Numbers/Reveal-Numbers";
import CarouselSection from "@/components/Services-Carousel/Services-Carousel";
import StatsSection from "@/components/Stats-Section/Stats-Section";
import SuccessStoriesSection from "@/components/Succes-Stories/Succes-Stories";
import TrustedPartnersSection from "@/components/Trusted-Partners/Trusted-Partners";
import { Button } from "@/components/ui/button";
import { BarChart3, DollarSign, Package, ShoppingCart, TrendingUp, Users } from "lucide-react";

export default function Home() {


   const amazonStats = [
    {
      id: "1",
      title: "Daily Sales",
      value: 4496,
      prefix: "$",
      suffix: "USD",
      trend: 28,
      period: "Previous 7 days",
      image: "/amazon-seller-stats.png",
      color: "from-orange-400 to-amber-600",
      icon: <DollarSign className="w-6 h-6" />,
    },
    {
      id: "2",
      title: "Units Sold Today",
      value: 39,
      trend: 42,
      period: "Last year",
      image: "/amazon-seller-stats.png",
      color: "from-blue-400 to-blue-600",
      icon: <Package className="w-6 h-6" />,
    },
    {
      id: "3",
      title: "Weekly Revenue",
      value: 69320,
      prefix: "$",
      suffix: "USD",
      trend: 28,
      period: "Previous 7 days",
      image: "/amazon-seller-stats.png",
      color: "from-green-400 to-emerald-600",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      id: "4",
      title: "Monthly Sales",
      value: 17990,
      prefix: "$",
      suffix: "USD",
      trend: 48,
      period: "Previous period",
      image: "/amazon-seller-stats.png",
      color: "from-purple-400 to-purple-600",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ]

  const advancedCards = [
    {
      id: "1",
      title: "Daily Sales",
      value: 4496,
      prefix: "$",
      suffix: "USD",
      trend: 28,
      period: "vs last week",
      color: "from-orange-400 to-amber-600",
      icon: <DollarSign className="w-6 h-6" />,
      description: "Total sales revenue generated today across all products and marketplaces.",
    },
    {
      id: "2",
      title: "Units Sold",
      value: 39,
      trend: 42,
      period: "vs last year",
      color: "from-blue-400 to-blue-600",
      icon: <Package className="w-6 h-6" />,
      description: "Number of individual product units sold today across all listings.",
    },
    {
      id: "3",
      title: "Weekly Revenue",
      value: 69320,
      prefix: "$",
      suffix: "USD",
      trend: 28,
      period: "vs previous week",
      color: "from-green-400 to-emerald-600",
      icon: <BarChart3 className="w-6 h-6" />,
      description: "Total revenue generated in the past 7 days from all sales channels.",
    },
    {
      id: "4",
      title: "Monthly Sales",
      value: 17990,
      prefix: "$",
      suffix: "USD",
      trend: 48,
      period: "vs last month",
      color: "from-purple-400 to-purple-600",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Total sales revenue for the current month to date.",
    },
    {
      id: "5",
      title: "New Customers",
      value: 228,
      trend: 15,
      period: "vs last month",
      color: "from-pink-400 to-pink-600",
      icon: <Users className="w-6 h-6" />,
      description: "First-time buyers who purchased your products this month.",
    },
    {
      id: "6",
      title: "Order Count",
      value: 1358,
      trend: 22,
      period: "vs last month",
      color: "from-indigo-400 to-indigo-600",
      icon: <ShoppingCart className="w-6 h-6" />,
      description: "Total number of orders processed in the current month.",
    },
  ]

   const customPartners = [
    { id: "1", name: "TechCrunch", logo: "TechCrunch", description: "Leading tech publication" },
    { id: "2", name: "Forbes", logo: "Forbes", description: "Business magazine" },
    { id: "3", name: "Wired", logo: "WIRED", description: "Technology & culture" },
    { id: "4", name: "Bloomberg", logo: "Bloomberg", description: "Financial news" },
    { id: "5", name: "Reuters", logo: "Reuters", description: "Global news agency" },
    { id: "6", name: "CNN", logo: "CNN", description: "News network" },
    { id: "7", name: "BBC", logo: "BBC", description: "Broadcasting corporation" },
  ]

  

  const customLocations = [
    {
      id: "piscataway",
      name: "Piscataway, New Jersey",
      position: { x: 75, y: 35 },
      delay: 0.3,
    },
    {
      id: "dallas",
      name: "Dallas, Texas",
      position: { x: 55, y: 55 },
      delay: 0.6,
    },
    {
      id: "miami",
      name: "Miami, Florida",
      position: { x: 80, y: 70 },
      delay: 0.9,
    },
  ]
  return (
   <>
   <HeroSection/>
   <CarouselSection/>
   <JourneySection/>
   <ExcellenceSection/>
    <ProcessSection
      title="Discover the Gateway to Your E-commerce Success! Turn your dreams of a thriving e-commerce business into reality with Amz Vistas."
      highlightText=""
      secondaryText=""
      description="We are a dynamic powerhouse, seamlessly blending logistics, wholesale distribution, and e-commerce seller management under one robust roof. With our headquarters in Los Angeles and strategically positioned warehouses and prep centers in Texas, Florida, New York, and Michigan, we are poised to support your e-commerce endeavors efficiently."
      imageSrc="/placeholder.svg?height=300&width=400"
      imageAlt="Step-by-step process blocks"
    >
      <div className="flex flex-col sm:flex-row gap-4">
        <Button className="bg-orange-500 hover:bg-orange-600 text-white">Learn More About Our Process</Button>
        <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
          Get Started Today
        </Button>
      </div>
    </ProcessSection>
    <FeaturesSection/>
  <StatsSection/>
    <LeadershipSection/>
    <RevealNumbersSection/>
  <SuccessStoriesSection
        rating="4.8+"
        timeframe="5+"
        title="Transform Your Business Today!"
        description="Join thousands of successful entrepreneurs who have revolutionized their Amazon business with our proven strategies. Our data-driven approach and innovative solutions have consistently delivered exceptional results, creating a partnership where your success is our success."
        buttonText="Get Started Now"
        onButtonClick={() => console.log("Custom button clicked")}
        showInfographic={true}
      />
        <LogisticsTourSection
        title="Discover our Global Network with exclusive access to our Worldwide facilities."
        highlightedWords={["Global Network", "Worldwide"]}
        description="Experience our comprehensive supply chain management, quality control processes, and innovative fulfillment solutions. We believe in complete transparency and invite you to see our operations firsthand."
        tourDescription="Book your personalized facility tour and witness how we're revolutionizing e-commerce logistics across multiple locations."
        buttonText="Schedule Your Tour Today!"
        locations={customLocations}
        onButtonClick={() => console.log("Custom tour scheduled")}
        backgroundColor="bg-gray-50"
      />
       <TrustedPartnersSection
        title="Our Trusted Partners"
        subtitle="Recognized and featured by leading industry publications worldwide"
        backgroundText="FEATURED"
        partners={customPartners}
        autoScroll={true}
        scrollSpeed={4}
        showDescriptions={true}
        accentColor="text-blue-600"
      />


       {/* Standard Stats Slider */}
      <AnimatedStatsSlider title="Our Success Stats" stats={amazonStats} />

      {/* Advanced 3D Carousel */}
      <AdvancedStatsCarousel
        title="Amazon Seller Performance"
        subtitle="Real-time metrics from our seller dashboard"
        cards={advancedCards}
      />
   </>
  );
}
