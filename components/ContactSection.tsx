import { MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">
                Contact <span className="text-orange-500">Information</span>
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Call/ Text/ Email us now to schedule a <span className="font-bold text-black">FREE CONSULTATION</span>{" "}
                with one of our experts or leave us an email for a quick response.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">5900 Balcones Drive STE 100 Austin TX 78731</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-700">+1 (737) 295-1375</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-700">contact@amzvistas.com</span>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-2xl font-bold text-black">
                Speak To An <span className="text-orange-500">Expert</span>
              </h3>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-8">
              Get In <span className="text-orange-500">Touch</span> With Us
            </h2>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Name"
                  className="bg-white border-gray-300 text-gray-700 placeholder:text-gray-400 h-12"
                />
                <Input
                  type="tel"
                  placeholder="Phone"
                  className="bg-white border-gray-300 text-gray-700 placeholder:text-gray-400 h-12"
                />
              </div>

              <Input
                type="text"
                placeholder="mm/dd/yyyy"
                className="bg-white border-gray-300 text-gray-700 placeholder:text-gray-400 h-12"
              />

              <Input
                type="email"
                placeholder="Email"
                className="bg-white border-gray-300 text-gray-700 placeholder:text-gray-400 h-12"
              />

              <Textarea
                placeholder="Message"
                rows={6}
                className="bg-white border-gray-300 text-gray-700 placeholder:text-gray-400 resize-none"
              />

              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 h-12 w-full md:w-auto"
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
