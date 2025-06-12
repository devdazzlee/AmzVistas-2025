import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full"
      >
        <source src="/Videos/Banner_Video.mp4" type="video/mp4" />
      </video>

      {/* Overlay to darken video for better contrast */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-none px-8 lg:px-16">
          <div className="flex items-center h-full gap-8">
            {/* Left Content Section - 60% width */}
            <div className="flex-[0_0_60%] pr-8">
              <div className="max-w-4xl">
                <h1 className="text-5xl lg:text-6xl xl:text-4xl font-extrabold text-white leading-tight mb-8">
                  Building Foundation for
                  <br />
                  Success with
                  <br />
                  E-commerce Automation
                  <br />
                  Services
                </h1>

                <p className="text-white text-lg lg:text-xl leading-relaxed mb-10 max-w-3xl">
                  Without a doubt, Amz Vistas is a thriving company that assists customers in generating cash by
                  planting the seeds of enterprises at Walmart and Amazon. Our infrastructure, license agreements, and a
                  large staff of professionals help clients all over the globe build and run successful e-commerce
                  automation platforms. Find out why so many people are choosing Amz Vistas as their e-commerce
                  revolution partner.
                </p>

                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full">
                  Get a Free Consultation Now!
                </Button>
              </div>
            </div>

            {/* Right Form Section - 40% width */}
            <div className="flex-[0_0_40%]">
              <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-md ml-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  Get In <span className="text-orange-500">Touch</span> With Us
                </h2>

                <form className="space-y-5">
                  <Input
                    type="text"
                    placeholder="Name"
                    className="w-full h-12 px-4 border border-gray-300 rounded-lg text-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />

                  <Input
                    type="tel"
                    placeholder="Phone"
                    className="w-full h-12 px-4 border border-gray-300 rounded-lg text-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />

                  <div className="relative">
                    <Input
                      type="date"
                      className="w-full h-12 px-4 border border-gray-300 rounded-lg text-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  <Input
                    type="email"
                    placeholder="Email"
                    className="w-full h-12 px-4 border border-gray-300 rounded-lg text-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />

                  <Textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg font-semibold rounded-full"
                  >
                    Send
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
