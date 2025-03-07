import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = ({ slides = [], title, highlight, subtitle, buttonText, buttonLink }) => {
  if (!slides || !Array.isArray(slides)) {
    slides = []; // Ensure slides is an array
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="relative w-screen min-h-[500px] pt-[180px] flex justify-start bg-[#000] !overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 w-screen h-full overflow-hidden">
        {slides.length > 0 ? (
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index}>
                <img
                  src={slide}
                  alt={`Hero Background ${index + 1}`}
                  className="w-full h-full object-cover max-w-none"
                />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white text-2xl">
            No slides available
          </div>
        )}
      </div>

      {/* Overlay Content - Fixed to Left Side */}
      <div className="absolute left-10 bottom-10 lg:left-10 z-10 text-left text-white px-6">
        <h1 className="text-4xl font-bold">
          {title} <span className="text-blue-500">{highlight}</span><br />
          {subtitle}
        </h1>
        {buttonLink && (
          <a href={buttonLink}>
            <button className="mt-4 px-6 py-2 bg-white text-[#3087d1] font-semibold rounded-md shadow-md hover:bg-blue-200 transition">
              {buttonText} →
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default Hero;
