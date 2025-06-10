import { Star } from "lucide-react"

export default function VisionSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="text-center lg:text-left">
            {/* Rating Section */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-8">
              <span className="text-gray-700 font-medium">4.5+ rating over the past 3+ years</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>

            {/* Vision Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Our Vision</h2>

            {/* Vision Description */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
             {`
                 Our aim is to empower our clients' businesses to embrace evolving technologies in the AI era. By 2024, our
              objective is to assist our clients in achieving a growth rate of 100 times their initial investments. We
              prioritize forming partnerships because we believe that mutual growth is of utmost significance.`}
            </p>
          </div>

          {/* Illustration Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <img
                src="/images/vision-illustration.png"
                alt="Colorful geometric illustration with orange, blue, and coral shapes representing business growth and e-commerce elements"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
