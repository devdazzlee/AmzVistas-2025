interface CallToActionSectionProps {
  title?: string
  highlightWords?: string[]
  description?: string
  className?: string
}

export default function CallToActionSection({
  title = "Give Us A Chance To Build Your Assets",
  highlightWords = ["Chance", "Assets"],
  description = "Our team of professionals is committed to providing outstanding service and support to make sure that your online business operates smoothly and effectively. Whether you're just getting started with e-commerce or hoping to upgrade your current business, we stand by you and provide Walmart WFS, Amazon Wholesale FBA, inventory management, order fulfillment, shipping, and customer support.",
  className = "",
}: CallToActionSectionProps) {
  const renderTitleWithHighlights = () => {
    let titleText = title

    highlightWords.forEach((word) => {
      titleText = titleText.replace(new RegExp(`\\b${word}\\b`, "g"), `<span class="text-orange-500">${word}</span>`)
    })

    return <span dangerouslySetInnerHTML={{ __html: titleText }} />
  }

  return (
    <section className={`py-16 px-4 bg-white ${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
          {renderTitleWithHighlights()}
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">{description}</p>
      </div>
    </section>
  )
}
