import { Button } from "@/components/ui/button"

export default function JourneySection() {
  return (
    <section className="py-16 px-4 bg-white">
      {/* Top colored bars */}
      <div className="w-full h-1 mb-12">
        <div className="flex">
          <div className="flex-1 bg-blue-500 h-full"></div>
          <div className="flex-1 bg-orange-400 h-full"></div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl">
        {/* Main heading */}
        <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Revolutionize Your E-Commerce Journey
        </h1>

        {/* Subheading */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-16">
          Timelines and Predictable Growth Of Your <span className="text-orange-500">E-Commerce</span>{" "}
          <span className="text-teal-600">Assets</span>
        </h2>

        {/* Two column cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Card - Amazon FBA */}
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6 leading-tight">
              Welcome to the zone of sustainable assets with our <span className="text-orange-500">Amazon</span>{" "}
              <span className="text-teal-600">FBA Business</span> Owner program.
            </h3>

            <p className="text-gray-700 text-center mb-8 leading-relaxed">
              We promise long-term success and the highest growth rate. Stand out and dominate the Amazon marketplace as
              a Pro Seller, armed with our distinctive hybrid approach, winning Buy-Box strategy, and exclusive product
              research tactics. Over 200 successful Amazon FBA businesses have thrived using our proven model.
            </p>

            <div className="text-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg">
                Schedule A Free Consultation
              </Button>
            </div>
          </div>

          {/* Right Card - Walmart WFS */}
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6 leading-tight">
              Dive into the Opportunity of the Decade with <span className="text-orange-500">Walmart</span>{" "}
              <span className="text-teal-600">WFS</span>!
            </h3>

            <p className="text-gray-700 text-center mb-8 leading-relaxed">
              Witness rapid growth to six figures and the highest ROI by investing in our Walmart WFS Automation
              Program. With less than 200,000 marketplace sellers and a staggering $14 billion in e-commerce revenue,
              Walmart Online Marketplace presents millions of opportunities for new sellers. Seize the moment and embark
              on a journey to unparalleled success!
            </p>

            <div className="text-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg">
                Schedule A Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
