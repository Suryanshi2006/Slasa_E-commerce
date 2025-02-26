import React, { useState, useRef, useEffect } from "react";
import { FaRegHeart, FaShoppingCart, FaGlobe, FaUser, FaSearch } from "react-icons/fa";

const HeaderNav = ({ cartItems = 0 }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState(""); // Added search state
  const spanRef = useRef(null);
  const [selectWidth, setSelectWidth] = useState(50); // Default width

  // Update select width dynamically based on content
  useEffect(() => {
    if (spanRef.current) {
      const newWidth = spanRef.current.offsetWidth + 30; // More padding
      setSelectWidth(newWidth < 70 ? 70 : newWidth); // Ensure a minimum width
    }
  }, [selectedCategory]);

  return (
    <header className="bg-gray-900 text-white px-6 py-3">
      <div className="flex items-center justify-between max-w-[1400px] mx-auto">
        
        {/* 🔍 Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="h-30 w-30 ml-16 object-cover rounded-full border-2 border-white shadow-lg"
          />
        </div>

        {/* 🔎 Search Bar */}
        <div className="flex items-center bg-white rounded-md overflow-hidden w-2/5 max-w-[600px] border border-gray-300 shadow-md">
          
          {/* Category Dropdown - Dynamic Width */}
          <div className="relative">
          <select
  className="text-xs px-3 h-12 py-4 border-r border-gray-400 outline-none"
  style={{ backgroundColor: "#3087d1", width: `${selectWidth}px` }} // ✅ Correct syntax
  // ✅ Fixed syntax
  value={selectedCategory}
  onChange={(e) => setSelectedCategory(e.target.value)}
>
  <option>All</option>
  <option>Electronics</option>
  <option>Fashion</option>
  <option>Home & Kitchen</option>
  <option>Books</option>
</select>
            
            {/* Hidden span to measure text width */}
            <span ref={spanRef} className="absolute invisible whitespace-nowrap px-2">
              {selectedCategory}
            </span>
          </div>

          {/* Input Field */}
          <input 
            type="text" 
            placeholder="Search for products..."
            className="flex-1 p-2 text-sm bg-white text-black outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // ✅ Added state handling
          />

          {/* Search Button */}
          <button style={{ backgroundColor: "#3087d1" }} className="hover:brightness-90 px-4 py-4 flex items-center justify-center">
            <FaSearch className="text-white text-base" />
          </button>
        </div>

        {/* 👤 User Options */}
        <div className="flex gap-6 items-center text-white text-xs">
          
          {/* Sign In */}
          <div className="flex flex-col items-center cursor-pointer border border-transparent hover:border-blue-400 rounded-md p-2 transition duration-200">
            <FaUser className="text-lg" />
            <span>Sign In</span>
          </div>

          {/* Wishlist */}
          <div className="flex flex-col items-center cursor-pointer border border-transparent hover:border-blue-400 rounded-md p-2 transition duration-200">
            <FaRegHeart className="text-lg" />
            <span>Wishlist</span>
          </div>

          {/* Cart */}
          <div className="flex flex-col items-center cursor-pointer relative border border-transparent hover:border-blue-400 rounded-md p-2 transition duration-200">
            <FaShoppingCart className="text-xl" />
            {cartItems > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
                {cartItems}
              </span>
            )}
            <span>Cart</span>
          </div>

          {/* Language Selector */}
          <div className="flex flex-col items-center cursor-pointer border border-transparent hover:border-blue-400 rounded-md p-2 transition duration-200">
            <FaGlobe className="text-lg" />
            <span>EN</span>
          </div>

        </div>

      </div>
    </header>
  );
};

export default HeaderNav;