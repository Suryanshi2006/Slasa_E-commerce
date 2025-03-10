import React, { useState } from "react";
import { FaShippingFast, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const HeaderTop = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="relative bg-black text-white py-px px-4 flex items-center flex-wrap overflow-visible z-40">
      {/* Left Section (Hide on smaller screens) */}
      <div className="hidden sm:flex items-center gap-4 flex-wrap">
        {/* Free Shipping */}
        <div
          className="relative flex items-center gap-2 cursor-pointer px-3 py-1 rounded-md hover:bg-gray-800 transition"
          onMouseEnter={() => setHoveredItem("shipping")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <FaShippingFast />
          <span>Free Shipping</span>
          {hoveredItem === "shipping" && (
            <div className="absolute left-0 top-full mt-2 bg-gray-900 text-white text-sm rounded-md shadow-lg p-2 w-52 z-50">
              Enjoy free shipping on all orders above $50!
            </div>
          )}
        </div>

        {/* Click and Collect */}
        <div
          className="relative flex items-center gap-2 cursor-pointer px-3 py-1 rounded-md hover:bg-gray-800 transition"
          onMouseEnter={() => setHoveredItem("collect")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <FaCalendarAlt />
          <span>Click and Collect</span>
          {hoveredItem === "collect" && (
            <div className="absolute left-0 top-full mt-2 bg-gray-900 text-white text-sm rounded-md shadow-lg p-2 w-52 z-50">
              Order online and collect from your nearest store!
            </div>
          )}
        </div>

        {/* Warranty */}
        <div
          className="relative flex items-center gap-2 cursor-pointer px-3 py-1 rounded-md hover:bg-gray-800 transition"
          onMouseEnter={() => setHoveredItem("warranty")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <span>Warranty</span>
          {hoveredItem === "warranty" && (
            <div className="absolute left-0 top-full mt-2 bg-gray-900 text-white text-sm rounded-md shadow-lg p-2 w-52 z-50">
              Get up to 2 years of warranty on selected products.
            </div>
          )}
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex items-center gap-6 relative ml-auto">
        {/* B2B Dropdown (Hide on smaller screens) */}
        <div
          className="hidden sm:relative cursor-pointer px-3 py-1 rounded-md hover:bg-gray-800 transition"
          onMouseEnter={() => setHoveredItem("b2b")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          B2B Designing Services ⌄
          {hoveredItem === "b2b" && (
            <div className="absolute left-0 top-full mt-2 bg-gray-900 text-white rounded-md shadow-lg p-2 w-44 z-50">
              <p className="px-4 py-2 hover:bg-gray-700 transition">Custom Designs</p>
              <p className="px-4 py-2 hover:bg-gray-700 transition">Consulting Services</p>
            </div>
          )}
        </div>

        {/* Deliver to Area Dropdown */}
        <div
          className="relative flex items-center gap-2 cursor-pointer px-3 py-1 rounded-md hover:bg-gray-800 transition"
          onMouseEnter={() => setHoveredItem("area")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <FaMapMarkerAlt />
          <span>Deliver to Area ⌄</span>
          {hoveredItem === "area" && (
            <div className="absolute left-0 top-full mt-2 bg-gray-900 text-white rounded-md shadow-lg p-2 w-40 z-50">
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
