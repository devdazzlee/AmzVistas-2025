import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg transform rotate-6"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">AS</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                  Amazon Strategy
                </h3>
                <p className="text-gray-400 text-xs">Your E-commerce Partner</p>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              {`Let's turn your Billionaire dream into a reality together.`}
            </p>

            <div className="flex gap-4">
              <a href="https://www.facebook.com/amazonstrategy" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/amazonstrategy.official/" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
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
                <p className="text-gray-300 text-sm">contact@amazonstrategy.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} <Link href={'https://acesoface.com/'} className="underline">Ace Studios</Link>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
