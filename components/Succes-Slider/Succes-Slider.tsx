import Image from "next/image";
import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Banner-Card/Banner-Card.css";
const images = [
  "/images/Amazon-Fba-Automation/Succes-Slides/succes-1.jpg",
  "/images/Amazon-Fba-Automation/Succes-Slides/succes-2.jpg",
  "/images/Amazon-Fba-Automation/Succes-Slides/succes-3.jpg",
  "/images/Amazon-Fba-Automation/Succes-Slides/succes-4.jpg",
  "/images/Amazon-Fba-Automation/Succes-Slides/succes-5.jpg",
  "/images/Amazon-Fba-Automation/Succes-Slides/succes-6.jpg",
];

export default function SuccessSlider() {
  const settings: Settings = {
    dots: true,
    arrows: false, // no arrows
    infinite: true, // loop
    autoplay: true, // auto-play
    autoplaySpeed: 2000,
    speed: 600,
    centerMode: true, // center the slides
    centerPadding: "80px", // show 80px of side slides
    slidesToShow: 4, // 4 cards at once
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4, centerPadding: "60px" },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, centerPadding: "40px" },
      },
      { breakpoint: 768, settings: { slidesToShow: 2, centerPadding: "30px" } },
      { breakpoint: 640, settings: { slidesToShow: 1, centerPadding: "20px" } },
    ],
  };

  return (
    <section className="w-full py-12 bg-gray-50 my-6">
      <div className="max-w-3xl mx-auto text-center mb-8 px-4">
        <h2 className="text-3xl font-semibold gradient-text">
          Explore Our Recent Success and Let the Numbers Speak for Themselves.
        </h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mt-2" />
      </div>

      <div className="w-9/12 mx-auto px-0 overflow-hidden">
        <Slider {...settings}>
          {images.map((src, idx) => (
            <div key={idx} className="px-2">  
              <div className="overflow-hidden w-full h-full ">
                <Image
                  src={src}
                  alt={`Success slide ${idx + 1} `}
                  width={400}
                  height={600}

                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx global>{`
        .slick-list {
          overflow: visible;
        }
        .slick-dots {
          bottom: -30px;
        }
        .slick-dots li button:before {
          font-size: 8px;
          color: #cbd5e1;
        }
        .slick-dots li.slick-active button:before {
          color: #1e40af;
        }
      `}</style>
    </section>
  );
}
