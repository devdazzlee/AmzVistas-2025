import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  MapPin, 
  Phone, 
  Mail 
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info Section */}
          <div className="space-y-6">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <div className="relative  w-auto md:w-64 h-38 md:h-42">
                <Image
                  src="/images/Logo.png"
                  alt="Orbit Syndicate Logo"
                    width={256}
                    height={96}
                  className="object-contain w-full h-full"
                    priority
                />
              </div>
              </Link>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              {`Let's turn your Billionaire dream into a reality together.`}
            </p>

            <div className="space-y-4">
              <h5 className="text-sm font-semibold text-gray-300 mb-3">Follow Us</h5>
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href="https://www.facebook.com/orbitsyndicate" 
                  className="flex items-center justify-center p-3 bg-gray-700 hover:bg-blue-600 rounded-lg transition-all duration-300 hover:scale-105 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
                <a 
                  href="https://www.instagram.com/orbitsyndicate.official/" 
                  className="flex items-center justify-center p-3 bg-gray-700 hover:bg-pink-600 rounded-lg transition-all duration-300 hover:scale-105 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
                <a 
                  href="https://twitter.com/orbitsyndicate" 
                  className="flex items-center justify-center p-3 bg-gray-700 hover:bg-blue-400 rounded-lg transition-all duration-300 hover:scale-105 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/orbitsyndicate" 
                  className="flex items-center justify-center p-3 bg-gray-700 hover:bg-blue-700 rounded-lg transition-all duration-300 hover:scale-105 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-600">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/ecommerce-automation" className="text-gray-300 hover:text-white transition-colors text-sm">
                  E-commerce Automation
                </Link>
              </li>
              <li>
                <Link href="/services/amazon-automations" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Amazon Automations
                </Link>
              </li>
              <li>
                <Link href="/services/walmart-services" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Walmart Services
                </Link>
              </li>
              <li>
                <Link href="/services/facebook-ads" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Facebook Ads
                </Link>
              </li>
              <li>
                <Link href="/services/website-development" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/seo-service" className="text-gray-300 hover:text-white transition-colors text-sm">
                  SEO Service
                </Link>
              </li>
              <li>
                <Link href="/services/smm-service" className="text-gray-300 hover:text-white transition-colors text-sm">
                  SMM
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-600">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/our-process" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Our Process
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Terms & Condition
                </a>
              </li>
            </ul>
          </div>

          {/* About Us Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-600">About Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm font-medium mb-1">Our Address</p>
                  <p className="text-gray-300 text-sm">5900 Balcones Drive STE 100 Austin TX 78731</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+1 (737) 295-1375</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">contact@orbitsyndicate.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} <Link href={'https://www.devdazzlee.vercel.app/'} className="underline">devdazzlee</Link>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
