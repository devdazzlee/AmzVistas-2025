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
        highlightText="Best Amazon FBA Automation Service"
        backgroundImage="/images/Amazon-Fba-Automation/Amazon-Fba-Automation.jpg"
      />
      <ProcessSection
        title="Immerse Yourself in Our AI-Centric Amazon FBA Automation Model – No Ad Budget Required!"
        highlightText=""
        secondaryText=""
        description="Experience profitability within the first month of launch. With decades of e-commerce mastery, we've crafted sustainable assets, aligning our success with yours. Join us in a model where the interests of our business seamlessly intertwine with the prosperity of our clients. Elevate your e-commerce journey with innovation and profitability at every turn!"
        imageSrc="/images/Amazon-Fba-Automation/Amazo-Banner-1.jpg"
        imageAlt="Step-by-step process blocks"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            variant="outline"
            className="border-teal-600 text-teal-600 hover:bg-teal-50"
          >
            Get A Free Consultation Now!
          </Button>
        </div>
      </ProcessSection>
      <BannerCard
        heading="Invest with Confidence in Amazon Seller Automation!"
        ishead2={false}
        paragraph="Empower your finances to work for you with Amz Vistas. Discover an automated investment portfolio designed for sustainable and scalable cash flow."
      />
      <FeaturesSection />

      <BannerCard
        heading="Invest with Confidence in Amazon Seller Automation!"
        ishead2={true}
        heading2="Amz Vistas offers a Buyback Guarantee ensuring a 100% ROI on your investment."
        btnTxt="Get A Free Consultation Now!"
      />
      <ServiceCard
        heading="Comprehensive Amazon FBA Solutions"
        isPara={true}
        paraText="Our team of experts is dedicated to optimizing your Amazon FBA experience, from product research to inventory management."
        isButton={false}
      />
      <ServiceDetail
        imageSrc="/images/Amazon-Fba-Automation/Service-Detail-1.png"
        listArray={[
          "Assistance in establishing LLC, obtaining EIN, and setting up W9",
          "Creation of e-commerce website with product setup",
          "Amazon FBA account setup",
          "Comprehensive management of Amazon FBA seller account",
          "Engagement and communication with brands",
        ]}
      />
      <ServiceDetail
        imageSrc="/images/Amazon-Fba-Automation/Service-Detail-2.png"
        listArray={[
          "Approval acquisition to become official wholesalers for brands",
          "Unlimited product listing creation",
          "Management of orders and inventory",
          "Order fulfillment for 12 months at our warehouse facility",
        ]}
        reverse={true}
      />
      <ServiceDetail
        imageSrc="/images/Amazon-Fba-Automation/Service-Detail-3.png"
        listArray={[
          "Competitor research for identifying winning products",
          "Options for Shipping Products from Seller to Prep Center",
          "Guaranteed profit margins of 15–25%",
          "Strategies for winning the Buy Box",
          "Designated Amazon wholesale automation expert",
        ]}
      />
      <AwarenessSection />
      <SuccessSlider
        images={images}
        title="What Our Clients Have Achieved"
        settings={{ autoplaySpeed: 3000 }}
      />
      <ServiceCard
        heading="Launch Your Project Today with Our Amazon FBA Automation Services"
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
