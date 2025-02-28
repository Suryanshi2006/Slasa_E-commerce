import React from "react";

const Hero = ({ image, title, highlight, subtitle, buttonText, buttonLink }) => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center bg-blue-100">
      {/* Background Image */}
      <img
        src={image}
        alt="Hero Background"
        className="w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute text-center text-white">
        <h1 className="text-4xl font-bold">
          {title} <span className="text-blue-500">{highlight}</span>,<br />
          {subtitle}
        </h1>
        <a href={buttonLink}>
          <button className="mt-4 px-6 py-2 bg-white text-blue-500 font-semibold rounded-md shadow-md hover:bg-blue-200 transition">
            {buttonText} →
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
