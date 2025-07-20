"use client";

import AwarenessSection from "@/components/Awareness-Section/Awareness-Section";
import BannerCard from "@/components/Banner-Card/Banner-Card";
import Banner from "@/components/Banner/Banner";
import FeaturesSection from "@/components/Features-Section/Features-Section";
import ProcessSection from "@/components/Process-Section/ProcessSection";
import ServiceCard from "@/components/Services/Service-Card/Service-Card";
import ServiceDetail from "@/components/Services/Service-Detail/Service-Detail";
import SuccessSlider from "@/components/Succes-Slider/Succes-Slider";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  const images = [
    "/images/Amazon-Fba-Automation/Succes-Slides/succes-1.jpg",
    "/images/Amazon-Fba-Automation/Succes-Slides/succes-2.jpg",
    "/images/Amazon-Fba-Automation/Succes-Slides/succes-3.jpg",
    "/images/Amazon-Fba-Automation/Succes-Slides/succes-4.jpg",
    "/images/Amazon-Fba-Automation/Succes-Slides/succes-5.jpg",
    "/images/Amazon-Fba-Automation/Succes-Slides/succes-6.jpg",
  ];
  return (
    <>
      <Banner
        title=""
        highlightText="Shopify Automation Service"
        backgroundImage="/images/Amazon-Fba-Automation/Amazon-Fba-Automation.jpg"
      />
      <ProcessSection
        title="Experience Success with Shopify Automation Services."
        highlightText=""
        secondaryText=""
        description="Staying ahead of the competition requires innovation. That’s where our Done For You Shopify Store can help. As a top Shopify automation agency, we specialize in creating automated stores that save you time and enhance overall business performance. Our experts streamline processes to drive sales growth and increase customer satisfaction levels, ensuring automation supports your brand expansion seamlessly."
        imageSrc="/images/Shopify/Banner1.svg"
        imageAlt="Step-by-step process blocks"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            variant="outline"
            className="border-teal-600 text-teal-600 hover:bg-teal-50"
          >
            Schedule A Free Consultation Now!
          </Button>
        </div>
      </ProcessSection>
      <BannerCard
        heading="Unleashing the Power of Shopify Automation."
        ishead2={false}
        paragraph="Empower your finances to work for you with Amz Vistas."
      />
      <FeaturesSection />

      <BannerCard
        heading="Amz Vistas is Here – Your Ultimate Shopify Destination!"
        ishead2={true}
        heading2="Instead of experimenting randomly, adopt our proven strategies for success with Amz Vistas."
        btnTxt="Schedule A Free Consultation Now!"
      />

      <ServiceCard
        heading="The Shopify dropshipping game-changer!"
        isPara={false}
        isButton={false}
      />

      <ProcessSection
        title="Unlocking the True Potential of Your Business"
        highlightText=""
        secondaryText=""
        description="An automated Shopify store never sleeps! Imagine having a virtual assistant on call 24/7 to handle customer inquiries, process orders, and provide support. With Amz Vistas's automation services, your business remains open to serve customers from different time zones around the globe!"
        imageSrc="/images/Shopify/Banner2.png"
        imageAlt="Step-by-step process blocks"
      >

      </ProcessSection>

      <ProcessSection
        reverse={true}
        title="Decisive Decision-Making Based on Data"
        highlightText=""
        secondaryText=""
        description="Data is at the heart of modern business. That's why Amz Vistas's automation services incorporate cutting-edge analytics tools that offer insights into customer behaviors, sales trends, and more. Gain the power to make informed decisions and continually optimize your store's performance."
        imageSrc="/images/Shopify/Banner3.png"
        imageAlt="Step-by-step process blocks"
      >

      </ProcessSection>

      <ProcessSection
        title="Decisive Decision-Making Based on Data"
        highlightText=""
        secondaryText=""
        description="Data is at the heart of modern business. That's why Amz Vistas's automation services incorporate cutting-edge analytics tools that offer insights into customer behaviors, sales trends, and more. Gain the power to make informed decisions and continually optimize your store's performance."
        imageSrc="/images/Shopify/Banner4.png"
        imageAlt="Step-by-step process blocks"
      >

      </ProcessSection>
      <AwarenessSection />
      <SuccessSlider
        images={images}
        title="What Our Clients Have Achieved"
        settings={{ autoplaySpeed: 3000 }}
      />
      <ServiceCard
        heading="Launch Your Project Today with Our Shopify Automation Services"
        isPara={true}
        paraText="Making the decision to automate your Shopify store is an integral step toward increasing efficiency and profitability. Join us on this exciting journey with Amz Vistas."
        isButton={true}
        buttonText="Book Call"
        isBlueBg={true}
      />
    </>
  );
};

export default page;
