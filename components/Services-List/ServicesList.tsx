import { Check } from "lucide-react"

export default function ServicesList() {
  const services = [
    "Process of Onboarding + Strategy",
    "DUNS, W9, LLC, and EIN support",
    "Exemptions from taxes in all 50 states",
    "Platform optimization,",
    "The setting up of a backend shop on the Walmart platform",
    "Product research, review, and product listing",
    "Processing orders and repricing",
    "Management of supplies and logistics",
    "SKUs are being sent to Amazon and Walmart to avoid return fees.",
    "Tracking and shipment confirmation",
    "Claims and Chargebacks Management",
    "Processing and handling infringement claims",
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          We Take Care of the <span className="text-amber-600">Following</span>
        </h2>

        <div className="mx-auto w-fit space-y-2 flex flex-col justify-start items-start">
  {services.map((service, index) => (
    <div key={index} className="flex items-start">
      <Check className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
      <span className="ml-3 text-gray-800">{service}</span>
    </div>
  ))}
</div>

      </div>
    </section>
  )
}
