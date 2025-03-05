import React, { useState } from "react";
import { FaShippingFast, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const HeaderTop = () => {
  const [isB2BOpen, setIsB2BOpen] = useState(false);
  const [isAreaOpen, setIsAreaOpen] = useState(false);

  return (
    <div className="bg-black text-white py-4 px-4 flex items-center flex-wrap overflow-hidden">
      {/* Left Section (Hide on smaller screens) */}
      <div className="hidden sm:flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2 cursor-pointer px-3 py-1 rounded-md hover:bg-gray-800 transition">
          <FaShippingFast />
          <span>Free Shipping</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer px-3 py-1 rounded-md hover:bg-gray-800 transition">
          <FaCalendarAlt />
          <span>Click and Collect</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer px-3 py-1 rounded-md hover:bg-gray-800 transition">
          <span>Warranty</span>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex items-center gap-6 relative ml-auto">
        {/* B2B Dropdown (Hide on smaller screens) */}
        <div
          className="hidden sm:relative cursor-pointer px-3 py-1 rounded-md hover:bg-gray-800 transition"
          onMouseEnter={() => setIsB2BOpen(true)}
          onMouseLeave={() => setIsB2BOpen(false)}
        >
          B2B Designing Services ⌄
          {isB2BOpen && (
            <div className="absolute left-0 top-full mt-2 bg-gray-900 text-white rounded-md shadow-lg p-2 w-44">
              <p className="px-4 py-2 hover:bg-gray-700 transition">Custom Designs</p>
              <p className="px-4 py-2 hover:bg-gray-700 transition">Consulting Services</p>
            </div>
          )}
        </div>

        {/* Deliver to Area Dropdown */}
        <div
          className="relative flex items-center gap-2 cursor-pointer px-3 py-1 rounded-md hover:bg-gray-800 transition"
          onMouseEnter={() => setIsAreaOpen(true)}
          onMouseLeave={() => setIsAreaOpen(false)}
        >
          <FaMapMarkerAlt />
          <span>Deliver to Area ⌄</span>
          {isAreaOpen && (
            <div className="absolute left-0 top-full mt-2 bg-gray-900 text-white rounded-md shadow-lg p-2 w-40">
              <p className="px-4 py-2 hover:bg-gray-700 transition">India</p>
              <p className="px-4 py-2 hover:bg-gray-700 transition">USA</p>
              <p className="px-4 py-2 hover:bg-gray-700 transition">Europe</p>
            </div>
          )}
        </div>
      </div>

      {/* Right Section (Hide on smaller screens) */}
      <div className="hidden sm:flex items-center gap-4 flex-wrap">
        <div className="cursor-pointer px-3 py-1 rounded-md hover:bg-gray-800 transition">Store Locator</div>
        <div className="cursor-pointer px-3 py-1 rounded-md hover:bg-gray-800 transition">Help</div>
        <div className="cursor-pointer px-3 py-1 rounded-md hover:bg-gray-800 transition">Sell with Us</div>
      </div>
    </div>
  );
};

export default HeaderTop;