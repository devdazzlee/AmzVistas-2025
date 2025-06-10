import Banner from "@/components/Banner/Banner";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
   <>
    <Banner
      title="About"
      highlightText="AMZ VISTAS"
      subtitle="Your trusted partner in e-commerce automation"
      backgroundImage="/placeholder.svg?height=400&width=1200"
    />
   <ContactSection />
   </>
  );
}
