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
            <Link href="/" className="flex items-center">
             

             <Image  src={'/images/Logo/Black_Logo.png'} alt={'logo'} width={100} height={100} />
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
              <DropdownMenuContent align="center" className="w-56 mt-2">
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/services/amazon-fba" className="w-full py-2">
                    Amazon FBA Automation
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/services/shopify" className="w-full py-2">
                    Shopify Automation
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/services/walmart" className="w-full py-2">
                    Walmart Automation
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/services/ebay" className="w-full py-2">
                    eBay Automation
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
                    <div className="flex items-center">
                      {/* Mobile Logo */}
                      <div className="relative w-10 h-8 mr-2">
                        <div className="relative w-full h-full">
                          <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-500 rounded-sm transform translate-x-1 translate-y-1"></div>
                          <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-orange-400 rounded-sm border border-orange-500"></div>
                          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-t-sm transform -skew-x-12 origin-top-left"></div>
                          <div className="absolute top-0 right-0 w-1.5 h-full bg-gradient-to-b from-orange-500 to-orange-600 rounded-r-sm transform skew-y-12 origin-top-right"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-white text-[6px] font-bold transform -rotate-12 leading-none">
                              <div className="text-center">
                                <div className="text-[6px] leading-none">AMZ</div>
                                <div className="text-[4px] leading-none">VISTAS</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="text-lg font-bold text-gray-900">
                        AMZ VISTAS<sup className="text-xs">®</sup>
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
                      <div className="pl-4 space-y-1">
                        <Link
                          href="/services/amazon-fba"
                          className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 py-2 rounded-md text-sm transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          Amazon FBA Automation
                        </Link>
                        <Link
                          href="/services/shopify"
                          className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 py-2 rounded-md text-sm transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          Shopify Automation
                        </Link>
                        <Link
                          href="/services/walmart"
                          className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 py-2 rounded-md text-sm transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          Walmart Automation
                        </Link>
                        <Link
                          href="/services/ebay"
                          className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 py-2 rounded-md text-sm transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          eBay Automation
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
