import { Metadata } from "next";
import Banner from '@/components/Banner/Banner'
import MapContact from '@/components/Map-Contact/Map-Contact'
import MissionStatement from '@/components/Mission-Statement/Mission-Statement'
import AnimatedStorySection from '@/components/Story-Section/Story-Section'
import VisionSection from '@/components/Vision-Section/Vision-Section'
import React from 'react'

export const metadata: Metadata = {
  title: "About Orbit Syndicate - Your Trusted E-commerce Automation Partner",
  description: "Learn about Orbit Syndicate's mission to revolutionize e-commerce automation. Discover our story, vision, and commitment to providing premier Amazon FBA, Walmart, eBay, and Shopify automation services.",
  keywords: [
    "about Orbit Syndicate",
    "e-commerce automation company",
    "Amazon FBA company",
    "e-commerce logistics company",
    "online business automation",
    "e-commerce consulting firm",
    "wholesale distribution company",
    "fulfillment services company"
  ],
  openGraph: {
    title: "About Orbit Syndicate - Your Trusted E-commerce Automation Partner",
    description: "Discover Orbit Syndicate's mission to revolutionize e-commerce automation with premier Amazon FBA, Walmart, eBay, and Shopify automation services.",
    images: [
      {
        url: "/images/About_Us/About_Banner.jpg",
        width: 1200,
        height: 630,
        alt: "About Orbit Syndicate - E-commerce Automation Company",
      },
    ],
  },
  alternates: {
    canonical: "/about-us",
  },
};

const page = () => {
  return (
    <>
    <Banner
          title="About "
          highlightText="Us"
          subtitle="Your trusted partner in e-commerce automation"
          backgroundImage="/images/About_Us/About_Banner.jpg"
    />
    <AnimatedStorySection  imageSrc='/images/About_Us/Our_Story.png' />
    <VisionSection/>
    <AnimatedStorySection title='Why consider Orbit Syndicate?'
    
    imageSrc='/images/About_Us/Why_Amz_Vistas.png'
    content={[
      "Orbit Syndicate is not just an ordinary managed e-commerce supplier. Our e-commerce growth agency and consulting services are built upon a sustainable infrastructure. At our core, we are a wholesale distributor and shipping company, fully aware that reaching the level of automation required for a successful online store is nearly impossible without an expert team. That's why we created a platform designed to elevate your e-commerce automation business to new heights.",
      "We are confident in our ability to help you achieve your goals, offering a buy-back guarantee in writing. We handle all order fulfillment, returns, and more, ensuring an easier process and comprehensive management of your company by the most qualified staff in the field."
    ]} />
    <MapContact/>
    <MissionStatement/>
    </>
  )
}

export default page