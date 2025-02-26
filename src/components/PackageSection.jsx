import React, { useState } from "react";
import { motion } from "framer-motion";

const packages = [
  {
    title: "Basic Renovation Package",
    image: "Images/Bed.jpeg", // Replace with actual image URL
    alt: "Basic Renovation",
    description: "This package includes basic interior upgrades and furniture styling.",
    link: "/basic-renovation", // Replace with actual URL
  },
  {
    title: "Premium Construction Package",
    image: "Images/Promotion.jpeg", // Replace with actual image URL
    alt: "Premium Renovation",
    description: "A high-end package with luxurious renovations and premium materials.",
    link: "/premium-renovation", // Replace with actual URL
  },
];

const PackageSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="relative bg-[#3087d1] opacity-80 text-white py-10 px-10 container mx-auto">
      {/* Header */}
      <div className="flex justify-center">
        <h2 className="text-3xl font-bold">Packages</h2>
      </div>

      {/* Package Cards */}
      <div className="flex justify-center gap-20 mt-8">
        {packages.map((pkg, index) => (
          <a
            key={index}
            href={pkg.link} // Makes it clickable
            className="relative w-80 bg-gray-300 overflow-hidden shadow-lg cursor-pointer block"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Image & Hover Effect */}
            <div className="relative m-4 bg-white overflow-hidden">
              <motion.img
                src={pkg.image}
                alt={pkg.alt}
                className="w-full h-56 object-cover"
                animate={hoveredIndex === index ? { x: "-100%" } : { x: "0%" }} // Moves left fully
                transition={{ duration: 0.5 }}
              />

              {/* Overlay Text Appears on Hover */}
              {hoveredIndex === index && (
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold">{pkg.title}</h3>
                  <p className="text-sm mt-2">{pkg.description}</p>
                </motion.div>
              )}

              {/* Explore Button on Image */}
              <motion.button
                className="absolute top-4 left-4 bg-gray-200 !text-black px-4 py-2 rounded-md text-sm flex items-center"
                initial={{ opacity: 1 }}
                animate={hoveredIndex === index ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                Explore <span className="ml-2">➜</span>
              </motion.button>
            </div>

            {/* Title */}
            <div className="p-4 text-center font-semibold text-black">
              {pkg.title}
            </div>
          </a>
        ))}
      </div>

      {/* Carousel Dots */}
      <div className="flex justify-center mt-6">
        <div className="w-3 h-3 bg-white rounded-full mx-1"></div>
        <div className="w-3 h-3 bg-gray-400 rounded-full mx-1"></div>
        <div className="w-3 h-3 bg-gray-400 rounded-full mx-1"></div>
      </div>
    </div>
  );
};

export default PackageSection;
