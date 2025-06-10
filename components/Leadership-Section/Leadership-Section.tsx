export default function LeadershipSection() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Diagonal Split Background */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full"
          style={{
            background: `linear-gradient(135deg, #1e88e5 0%, #1e88e5 60%, #ff9800 60%, #ff9800 100%)`,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        {/* Main Heading */}
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-12 leading-tight">
          Discover Visionary Leadership! With decades of expertise in E-Commerce Growth.
        </h2>

        {/* Founder Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
              Eric leads Amazon Automation, Walmart Automation, and more with 10 years in the marketplace. Unleash
              success with his aggressive tactics in the dynamic realm of E-Commerce Automation.
            </p>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Eric Blair</h3>
              <p className="text-gray-600 text-lg">Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
