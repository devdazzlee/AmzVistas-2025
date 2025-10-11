import React from 'react'
import { Button } from '@/components/ui/button'
import Banner from '@/components/Banner/Banner'
import ServicesList from '@/components/Services-List/ServicesList'
import ProcessSection from '@/components/Process-Section/ProcessSection'
import CallToActionSection from '@/components/Call-To-Action-Section/Call-To-Action-Section'
import AnimatedSteps from '@/components/Animated-Steps/Animated-Steps'

const page = () => {
  return (
<>
    <Banner
      title="Our"
      highlightText="Process"
      subtitle="Your trusted partner in e-commerce automation"
      backgroundImage="/images/Our_Process/Our_Process_Banner.jpg"
    />
    <ProcessSection
      title="Our"
      highlightText="Amazon Strategy"
      secondaryText="Process"
      description="With the help of our tested infrastructure, smooth-running onboarding process, and the 10+ years of expertise in Amazon and Walmart that we dedicate to every client, we want to make your Amazon Strategy e-commerce business the most flexible and long-lasting asset in your portfolio"
      imageSrc="/images/Our_Process/Process_Sec.jpg"
      imageAlt="Step-by-step process blocks"
    >
      <div className="flex flex-col sm:flex-row gap-4">
        <Button className="bg-orange-500 hover:bg-orange-600 text-white">Learn More About Our Process</Button>
        <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
          Get Started Today
        </Button>
      </div>
    </ProcessSection>
     <CallToActionSection
      title="Give Us A Chance To Build Your Assets"
      highlightWords={["Chance", "Assets"]}
      description="Our team of professionals is committed to providing outstanding service and support to make sure that your online business operates smoothly and effectively. Whether you're just getting started with e-commerce or hoping to upgrade your current business, we stand by you and provide Walmart WFS, Amazon Wholesale FBA, inventory management, order fulfillment, shipping, and customer support."
    />
    <AnimatedSteps/>
   <ServicesList/>
</>
  )
}

export default page