import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-lg flex items-center justify-center">
                <div className="w-8 h-6 bg-orange-600 rounded-sm transform rotate-12"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  AMZ VISTAS<sup className="text-sm">®</sup>
                </h3>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              {`Let's turn your Billionaire dream into a reality together.`}
            </p>

            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-600">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Amazon FBA Automation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Shopify Automation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Walmart Automation
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-600">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </a>
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
                <p className="text-gray-300 text-sm">contact@amzvistas.com</p>
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
