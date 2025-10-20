import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/footer";
import LoadingProvider from "@/components/LoadingAnimation/LoadingProvider";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Orbit Syndicate - Premier E-commerce Automation & Amazon FBA Services",
    template: "%s | Orbit Syndicate"
  },
  description: "Orbit Syndicate is your premier e-commerce automation partner specializing in Amazon FBA, Walmart, eBay, Shopify automation, digital marketing, and comprehensive logistics solutions. Transform your online business with our expert team.",
  keywords: [
    "Orbit Syndicate",
    "e-commerce automation",
    "Amazon FBA services",
    "Walmart automation",
    "eBay automation",
    "Shopify automation",
    "digital marketing",
    "e-commerce logistics",
    "Amazon seller services",
    "online business automation",
    "e-commerce consulting",
    "fulfillment services",
    "wholesale distribution",
    "e-commerce growth agency"
  ],
  authors: [{ name: "Orbit Syndicate" }],
  creator: "Orbit Syndicate",
  publisher: "Orbit Syndicate",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://orbitsyndicate.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://orbitsyndicate.com',
    siteName: 'Orbit Syndicate',
    title: 'Orbit Syndicate - Premier E-commerce Automation & Amazon FBA Services',
    description: 'Transform your e-commerce business with Orbit Syndicate. Expert Amazon FBA, Walmart, eBay, Shopify automation services, digital marketing, and comprehensive logistics solutions.',
    images: [
      {
        url: '/images/Logo.png',
        width: 1200,
        height: 630,
        alt: 'Orbit Syndicate - E-commerce Automation Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orbit Syndicate - Premier E-commerce Automation Services',
    description: 'Expert Amazon FBA, Walmart, eBay, Shopify automation, digital marketing, and logistics solutions for your e-commerce business.',
    images: ['/images/Logo.png'],
    creator: '@orbitsyndicate',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Orbit Syndicate",
    "description": "Premier e-commerce automation partner specializing in Amazon FBA, Walmart, eBay, Shopify automation, digital marketing, and comprehensive logistics solutions.",
    "url": "https://orbitsyndicate.com",
    "logo": "https://orbitsyndicate.com/images/Logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-XXX-XXX-XXXX",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.linkedin.com/company/orbit-syndicate",
      "https://twitter.com/orbitsyndicate",
      "https://www.facebook.com/orbitsyndicate"
    ],
    "service": [
      {
        "@type": "Service",
        "name": "Amazon FBA Services",
        "description": "Complete Amazon FBA automation and management services"
      },
      {
        "@type": "Service", 
        "name": "E-commerce Automation",
        "description": "Comprehensive e-commerce automation solutions"
      },
      {
        "@type": "Service",
        "name": "Digital Marketing",
        "description": "Professional digital marketing services for e-commerce businesses"
      },
      {
        "@type": "Service",
        "name": "Logistics Solutions",
        "description": "End-to-end logistics and fulfillment services"
      }
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "50-100"
  };

  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`font-sans font-normal antialiased`}>
        <LoadingProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </LoadingProvider>
      </body>
    </html>
  );
}
