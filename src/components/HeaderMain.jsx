import React, { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import { FaRegStar } from "react-icons/fa";

const HeaderMain = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="w-full flex items-center justify-between p-4 bg-gray-200 border-b-2 border-gray-400 flex-wrap">
      {/* All Button */}
      <span
        onClick={() => setSidebarOpen(true)}
        className="px-4 py-2 bg-gray-300 rounded-lg mr-3 transition duration-300 border-b border-gray-400 hover:bg-gray-400 hover:border-blue-500"
      >
        ☰ All
      </span>

      {/* Categories */}
      <div className="flex gap-3 flex-wrap text-lg font-semibold">
        <CategoryItem title="Acrylic Accessories" icon={<FaRegStar className="text-yellow-500" />} />

        <CategoryItem title="New Arrivals" icon={<span className="text-yellow-400">✨</span>} />
        <CategoryItem title="Today's Deal" icon={<span className="text-yellow-400">✨</span>} />
        <CategoryItem title="Photography and Videography" icon={<span>📷</span>} />
        <CategoryItem title="Printing Services" icon={<span>🖨️</span>} />
        <CategoryItem title="Home Renovation" icon={<span>🏠</span>} />
      </div>

      {/* Sidebar Menu */}
      <SidebarMenu isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
};

const CategoryItem = ({ title, icon }) => {
  return (
    <div className="relative flex items-center gap-2 px-3 py-2 border-1  border-transparent rounded-md transition-all duration-300 ease-in-out hover:border-blue-500 hover:scale-105">
      {title} {icon}
    </div>
  );
};

export default HeaderMain;
