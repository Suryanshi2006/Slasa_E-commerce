import React from "react";

const Hero = ({ image, title, highlight, subtitle, buttonText, buttonLink }) => {
  return (
<div className="relative w-screen min-h-[500px] pt-[180px] flex justify-start bg-[#000] !overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 w-screen h-full overflow-hidden">
        <img
          src={image}
          alt="Hero Background"
          className="w-full h-full object-cover max-w-none  "
        />
      </div>

      {/* Overlay Content - Fixed to Left Side */}
      <div className="absolute left-10 bottom-10 lg:left-10 z-10 text-left text-white px-6">
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
