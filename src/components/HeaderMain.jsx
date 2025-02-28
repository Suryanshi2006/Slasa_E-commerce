import React, { useState } from "react";
import { Link } from "react-router-dom";
import SidebarMenu from "./SidebarMenu.jsx";

const HeaderMain = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="w-full flex items-center justify-between p-4 bg-gray-200 border-b-2 border-gray-400 flex-wrap">
      {/* All Button */}
      <span
        onClick={() => setSidebarOpen(true)}
        className="px-4 py-2 bg-gray-300 rounded-lg mr-3 transition duration-300 border-b border-gray-400 hover:bg-gray-400 hover:border-[#3087d1] cursor-pointer"
      >
        ☰ All
      </span>

      {/* Categories */}
      <div className="flex gap-3 flex-wrap text-lg font-semibold text-[#3087d1]">
        <CategoryItem title="Acrylic Accessories" path="/acrylic" />
        <CategoryItem title="New Arrivals" path="/new" />
        <CategoryItem title="Today's Deal" path="/deals"/>
        <CategoryItem title="Printing Services" path="/printing" />
        <CategoryItem title="Photography & Videography" path="/photography"/>
        <CategoryItem title="Construction" path="/construction" />
        <CategoryItem title="Home Renovation" path="/renovation" />
      </div>

      {/* Sidebar Menu */}
      <SidebarMenu isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
};

const CategoryItem = ({ title, path }) => {
  return (
    <Link
      to={path}
      className="relative flex items-center gap-2 px-3 py-2 border border-transparent rounded-md transition-all duration-300 ease-in-out hover:border-blue-500 hover:scale-105"
    >
      {title}
    </Link>
  );
};

export default HeaderMain;
