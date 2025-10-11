import Banner from "@/components/Banner/Banner";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
   <>
    <Banner
      title="About"
      highlightText="AMAZON STRATEGY"
      subtitle="Your trusted partner in e-commerce automation"
      backgroundImage="/images/Contact/Contact_Banner.jpg"
    />
   <ContactSection />
   </>
  );
}
