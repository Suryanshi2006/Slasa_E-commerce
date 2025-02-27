import React, { useState, useEffect } from "react";
import SidebarMenu from "./SidebarMenu.jsx";

const HeaderMain = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Simulated API Call (Replace this with your actual API endpoint)
    fetch("https://jsonplaceholder.typicode.com/post")

      .then((res) => res.json())
      .then((data) => {
        // Extract only the first 7 items from the API response
        const formattedCategories = data.slice(0, 7).map((item) => ({
          name: item.title, // Using 'title' as category name
        }));
        setCategories(formattedCategories);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

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
        {categories.length > 0 ? (
          categories.map((category, index) => <CategoryItem key={index} title={category.name} />)
        ) : (
          <p>Loading categories...</p> // Display this while API is loading
        )}
      </div>

      {/* Sidebar Menu */}
      <SidebarMenu isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
};

const CategoryItem = ({ title }) => {
  return (
    <div className="relative flex items-center gap-2 px-3 py-2 border border-transparent rounded-md transition-all duration-300 ease-in-out hover:border-blue-500 hover:scale-105">
      {title}
    </div>
  );
};

export default HeaderMain;
