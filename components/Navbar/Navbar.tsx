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
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg transform rotate-6"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AS</span>
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
                Amazon Strategy
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200 outline-none">
                Services
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-64 mt-2 max-h-[500px] overflow-y-auto">
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
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Our Process
            </Link>

            {/* Contact Us Button */}
            <Link href="/contact-us">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition-colors duration-200 shadow-sm">
                Contact Us
              </Button>
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-700 hover:text-gray-900">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0">
                <div className="flex flex-col h-full bg-white">
                  {/* Mobile Header */}
                  <div className="flex justify-between items-center p-6 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      {/* Mobile Logo */}
                      <div className="relative w-10 h-10">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg transform rotate-6"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-xl">AS</span>
                        </div>
                      </div>
                      <span className="text-lg font-bold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
                        Amazon Strategy
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  {/* Mobile Navigation Links */}
                  <nav className="flex flex-col p-6 space-y-1">
                    <Link
                      href="/"
                      className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-4 py-3 rounded-md text-base font-medium transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      href="/about-us"
                      className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-4 py-3 rounded-md text-base font-medium transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      About Us
                    </Link>

                    {/* Mobile Services Section */}
                    <div className="py-2">
                      <div className="text-gray-900 font-semibold px-4 py-2 text-base">Services</div>
                      <div className="pl-4 space-y-1 max-h-[400px] overflow-y-auto">
                        <Link
                          href="/services/ecommerce-automation"
                          className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 py-2 rounded-md text-sm transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          E-commerce Automation
                        </Link>
                        <Link
                          href="/services/amazon-fba"
                          className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 py-2 rounded-md text-sm transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          Amazon FBA Automation
                        </Link>
                        <Link
                          href="/services/amazon-automations"
                          className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 py-2 rounded-md text-sm transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          Amazon Automations
                        </Link>
                        <Link
                          href="/services/walmart-services"
                          className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 py-2 rounded-md text-sm transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          Walmart Services
                        </Link>
                        <Link
                          href="/services/ebay-service"
                          className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 py-2 rounded-md text-sm transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          eBay Service
                        </Link>
                        <Link
                          href="/services/shopify"
                          className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 py-2 rounded-md text-sm transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          Shopify Automation
                        </Link>
                        <Link
                          href="/services/etsy-service"
                          className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 py-2 rounded-md text-sm transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          Etsy Service
                        </Link>
                        <Link
                          href="/services/facebook-ads"
                          className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 py-2 rounded-md text-sm transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          Facebook Ads
                        </Link>
                        <Link
                          href="/services/facebook-ads-manager"
                          className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 py-2 rounded-md text-sm transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          Facebook Ads Manager
                        </Link>
                        <Link
                          href="/services/tiktok-automation"
                          className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 py-2 rounded-md text-sm transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          TikTok Automation
                        </Link>
                        <Link
                          href="/services/website-development"
                          className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 py-2 rounded-md text-sm transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          Website Development
                        </Link>
                        <Link
                          href="/services/digital-marketing"
                          className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 py-2 rounded-md text-sm transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          Digital Marketing
                        </Link>
                        <Link
                          href="/services/seo-service"
                          className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 py-2 rounded-md text-sm transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          SEO Service
                        </Link>
                        <Link
                          href="/services/smm-service"
                          className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 py-2 rounded-md text-sm transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          SMM (Social Media Marketing)
                        </Link>
                      </div>
                    </div>

                    <Link
                      href="/our-process"
                      className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-4 py-3 rounded-md text-base font-medium transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Our Process
                    </Link>

                    {/* Mobile Contact Button */}
                    <div className="pt-4">
                      <Link href="/contact-us" onClick={() => setIsOpen(false)}>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium w-full py-3 rounded-md transition-colors duration-200 shadow-sm">
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
