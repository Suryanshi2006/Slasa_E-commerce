import React from "react";
import { FaSearch } from "react-icons/fa";

const HelpSection = () => {
  return (
    <div className="relative w-full h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('/Images/Exclusive22.jpeg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">How can we help you today?</h1>
        <div className="relative w-full max-w-lg bg-white p-px rounded-full shadow-lg">
      <input
        type="text"
        placeholder="Enter your search term here..."
        className="w-full py-2 px-5 pr-12 text-gray-800 rounded-full focus:outline-none"
        style={{ backgroundColor: "white" }} // Ensuring visibility
      />
      <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-lg" />
    </div>
      </div>
    </div>
  );
};

export default HelpSection;
