// components/SuccessSlider.tsx
import Image from "next/image";
import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface SuccessSliderProps {
  images: string[];
  title?: string;
  settings?: Settings;
}

export default function SuccessSlider({
  images,
  title = "Explore Our Recent Success and Let the Numbers Speak for Themselves.",
  settings,
}: SuccessSliderProps) {
  const defaultSettings: Settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 600,
    centerMode: true,
    centerPadding: "80px",
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4, centerPadding: "60px" } },
      { breakpoint: 1024, settings: { slidesToShow: 3, centerPadding: "40px" } },
      { breakpoint: 768,  settings: { slidesToShow: 2, centerPadding: "30px" } },
      { breakpoint: 640,  settings: { slidesToShow: 1, centerPadding: "20px" } },
    ],
    ...settings, // allow overrides
  };

  return (
    <section className="w-full py-12 bg-gray-50 my-6">
      <div className="max-w-3xl mx-auto text-center mb-8 px-4">
        <h2 className="text-3xl font-semibold gradient-text">{title}</h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mt-2" />
      </div>

      <div className="w-9/12 mx-auto px-0 overflow-hidden">
        <Slider {...defaultSettings}>
          {images.map((src, idx) => (
            <div key={idx} className="px-2">
              <div className="overflow-hidden w-full h-full">
                <Image
                  src={src}
                  alt={`Slide ${idx + 1}`}
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
