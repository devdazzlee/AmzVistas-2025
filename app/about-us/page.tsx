import Banner from '@/components/Banner/Banner'
import MapContact from '@/components/Map-Contact/Map-Contact'
import MissionStatement from '@/components/Mission-Statement/Mission-Statement'
import AnimatedStorySection from '@/components/Story-Section/Story-Section'
import VisionSection from '@/components/Vision-Section/Vision-Section'
import React from 'react'

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