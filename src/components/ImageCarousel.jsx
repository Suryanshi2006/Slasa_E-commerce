import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Icon package

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 5 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 4 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 3 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
};

// Custom Left Arrow
const CustomLeftArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-lg"
  >
    <ChevronLeft size={24} />
  </button>
);

// Custom Right Arrow
const CustomRightArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-lg"
  >
    <ChevronRight size={24} />
  </button>
);

const ImageCarousel = ({ title, images }) => {
  return (
    <div className="relative p-4 bg-gray-100 my-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <a href="#" className="text-blue-500 text-sm">See more</a>
      </div>
      <div className="relative">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {images.map((img, index) => (
            <div key={index} className="p-2">
              <img src={img} alt={`Item ${index}`} className="w-full h-40 object-cover bg-white shadow-md rounded-lg" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ImageCarousel;
