"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function MapContact() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Email submitted:", email)
    // Reset form
    setEmail("")
  }

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Section */}
          <div className="relative h-[400px] border border-gray-200 rounded-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.8654903989716!2d-74.4649344!3d40.5297296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c7fa8d4c701f%3A0x9c28f2c6a3c5680!2s371%20Hoes%20Ln%2C%20Piscataway%2C%20NJ%2008854!5e0!3m2!1sen!2sus!4v1654789542010!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
              className="absolute inset-0"
            ></iframe>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">371 Hoes Ln</h2>
              <p className="text-gray-600 mb-2">371 Hoes Ln Ste 200, Piscataway, NJ 08854, USA</p>
              <a
                href="https://goo.gl/maps/1JfQN8AeEZ9XY5Uw8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 text-sm"
              >
                View larger map
              </a>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Contact</h3>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-medium">Phone:</span> (848) 893 1877
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Email:</span> partnerships@walstreamz.com
                </p>
              </div>
            </div>

            <div>
              <p className="text-gray-700 font-medium mb-4">
                Text/ Call us to schedule a meeting with a Sr. Business Consultant
              </p>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white">
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
