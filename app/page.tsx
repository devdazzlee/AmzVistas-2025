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
import { advancedCards, amazonStats, customLocations, customPartners } from "@/Data/amazonStats";

export default function Home() {

  return (
   <>
   <HeroSection/>
   <CarouselSection/>
   <JourneySection/>
    <ProcessSection
      title="Discover the Gateway to Your E-commerce Success! Turn your dreams of a thriving e-commerce business into reality with Amazon Strategy."
      highlightText=""
      secondaryText=""
      description="We are a dynamic powerhouse, seamlessly blending logistics, wholesale distribution, and e-commerce seller management under one robust roof. With our headquarters in Los Angeles and strategically positioned warehouses and prep centers in Texas, Florida, New York, and Michigan, we are poised to support your e-commerce endeavors efficiently."
      imageSrc="/images/Home/HomeBanner.png"
      imageAlt="Step-by-step process blocks"
    >
      <div className="flex flex-col sm:flex-row gap-4">
        <Button className="bg-orange-500 hover:bg-orange-600 text-white">Learn More About Our Process</Button>
        <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
          Get Started Today
        </Button>
      </div>
    </ProcessSection>
   <ExcellenceSection/>
   
    <FeaturesSection/>
  <StatsSection/>
    <LeadershipSection/>
    <RevealNumbersSection/>
  <SuccessStoriesSection/>
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
