"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, ChevronDown, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white/80 backdrop-blur-xl border-b border-white/20 sticky top-0 z-50 py-2 shadow-lg">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 outline-none">
                Services
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-64 mt-2 max-h-[500px] overflow-y-auto bg-white/95 backdrop-blur-xl border border-white/20 shadow-2xl">
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/services/ecommerce-automation" className="w-full py-2">
                    E-commerce Automation
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/services/amazon-fba" className="w-full py-2">
                    Amazon FBA Automation
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/services/amazon-automations" className="w-full py-2">
                    Amazon Automations
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/services/walmart-services" className="w-full py-2">
                    Walmart Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/services/ebay-service" className="w-full py-2">
                    eBay Service
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/services/shopify" className="w-full py-2">
                    Shopify Automation
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/services/etsy-service" className="w-full py-2">
                    Etsy Service
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/services/facebook-ads" className="w-full py-2">
                    Facebook Ads
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/services/facebook-ads-manager" className="w-full py-2">
                    Facebook Ads Manager
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/services/tiktok-automation" className="w-full py-2">
                    TikTok Automation
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/services/website-development" className="w-full py-2">
                    Website Development
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/services/digital-marketing" className="w-full py-2">
                    Digital Marketing
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/services/seo-service" className="w-full py-2">
                    SEO Service
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/services/smm-service" className="w-full py-2">
                    SMM (Social Media Marketing)
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/our-process"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              Our Process
            </Link>

            {/* Contact Us Button */}
            <Link href="/contact-us">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Contact Us
              </Button>
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-700 hover:text-gray-900 p-2">
                  <Menu className="h-8 w-8" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[400px] sm:w-[450px] p-0 bg-white/95 backdrop-blur-xl border-l border-white/20">
                <div className="flex flex-col h-full bg-white/95 backdrop-blur-xl">
                  {/* Mobile Header */}
                  <div className="flex justify-between items-center py-6 px-6 border-b border-white/20">
                    <div className="flex items-center">
                      {/* Mobile Logo */}
                      <div className="relative w-80 h-24">
                        <Image
                          src="/images/Logo.png"
                          alt="Orbit Syndicate Logo"
                          width={320}
                          height={96}
                          className="object-contain w-full h-full"
                          priority
                        />
                      </div>
                    </div>
                  </div>

                  {/* Mobile Navigation Links */}
                  <nav className="flex flex-col px-6 py-4 space-y-2 overflow-y-auto flex-1">
                    <Link
                      href="/"
                      className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-4 rounded-lg text-lg font-medium transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      href="/about-us"
                      className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-4 rounded-lg text-lg font-medium transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      About Us
                    </Link>

                    {/* Mobile Services Section */}
                    <div className="py-4">
                      <div className="text-gray-900 font-bold px-4 py-3 text-xl border-b border-gray-200">Services</div>
                      <div className="space-y-1 mt-4">
                        <Link
                          href="/services/ecommerce-automation"
                          className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          E-commerce Automation
                        </Link>
                        <Link
                          href="/services/amazon-fba"
                          className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          Amazon FBA Automation
                        </Link>
                        <Link
                          href="/services/amazon-automations"
                          className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          Amazon Automations
                        </Link>
                        <Link
                          href="/services/walmart-services"
                          className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          Walmart Services
                        </Link>
                        <Link
                          href="/services/ebay-service"
                          className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          eBay Service
                        </Link>
                        <Link
                          href="/services/shopify"
                          className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          Shopify Automation
                        </Link>
                        <Link
                          href="/services/etsy-service"
                          className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          Etsy Service
                        </Link>
                        <Link
                          href="/services/facebook-ads"
                          className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          Facebook Ads
                        </Link>
                        <Link
                          href="/services/facebook-ads-manager"
                          className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          Facebook Ads Manager
                        </Link>
                        <Link
                          href="/services/tiktok-automation"
                          className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          TikTok Automation
                        </Link>
                        <Link
                          href="/services/website-development"
                          className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          Website Development
                        </Link>
                        <Link
                          href="/services/digital-marketing"
                          className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          Digital Marketing
                        </Link>
                        <Link
                          href="/services/seo-service"
                          className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          SEO Service
                        </Link>
                        <Link
                          href="/services/smm-service"
                          className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          SMM (Social Media Marketing)
                        </Link>
                      </div>
                    </div>

                    <Link
                      href="/our-process"
                      className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-4 rounded-lg text-lg font-medium transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      Our Process
                    </Link>

                    {/* Mobile Contact Button */}
                    <div className="pt-6 px-6">
                      <Link href="/contact-us" onClick={() => setIsOpen(false)}>
                        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold w-full py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg">
                          Contact Us
                        </Button>
                      </Link>
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
