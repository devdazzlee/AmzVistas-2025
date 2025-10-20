import { Metadata } from "next";
import AmazonFBAContent from "./AmazonFBAContent";

export const metadata: Metadata = {
  title: "Amazon FBA Services - Complete Automation & Management",
  description: "Transform your Amazon FBA business with Orbit Syndicate's complete automation services. Product sourcing, listing optimization, PPC management, and 24/7 support. Guaranteed 20%+ ROI with buyback guarantee.",
  keywords: [
    "Amazon FBA services",
    "Amazon FBA automation",
    "Amazon seller services",
    "FBA management",
    "Amazon product sourcing",
    "Amazon listing optimization",
    "Amazon PPC management",
    "Amazon FBA prep",
    "Amazon fulfillment services",
    "Amazon seller account management",
    "Amazon FBA consulting",
    "Amazon wholesale",
    "Amazon private label",
    "Amazon inventory management"
  ],
  openGraph: {
    title: "Amazon FBA Services - Complete Automation & Management | Orbit Syndicate",
    description: "Transform your Amazon FBA business with complete automation services. Product sourcing, listing optimization, PPC management, and guaranteed ROI.",
    images: [
      {
        url: "/images/services/amazon-fba/enhanced/banner-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Amazon FBA Services - Complete Automation",
      },
    ],
  },
  alternates: {
    canonical: "/services/amazon-fba",
  },
};

export default function AmazonFBAPage() {
  return <AmazonFBAContent />;
}
