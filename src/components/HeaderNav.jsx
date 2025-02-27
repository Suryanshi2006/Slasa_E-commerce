import React, { useState, useRef, useEffect } from "react";
import { FaRegHeart, FaShoppingCart, FaGlobe, FaUser, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HeaderNav = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [cartItems, setCartItems] = useState(0); // Tracks user-added cart items
  const [user, setUser] = useState(null);
  const spanRef = useRef(null);
  const [selectWidth, setSelectWidth] = useState(50);

  // Fetch categories dynamically
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories") // Replace with real API
      .then((res) => res.json())
      .then((data) => setCategories(["All", ...data]))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  // Fetch cart items from Local Storage (user's cart)
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart.length); // Set cart count based on local storage
  }, []);

  // Check if user is logged in
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Update dropdown width dynamically
  useEffect(() => {
    if (spanRef.current) {
      const newWidth = spanRef.current.offsetWidth + 30;
      setSelectWidth(newWidth < 70 ? 70 : newWidth);
    }
  }, [selectedCategory]);

  // Handle Sign In click
  const handleSignIn = () => {
    navigate(user ? "/profile" : "/signin");
  };

  return (
    <header className="bg-gray-900 text-white px-6 py-3">
      <div className="flex items-center justify-between max-w-[1400px] mx-auto">
        {/* Logo */}
        <div className="flex items-center bg-white px-6 py-2 border-2 rounded-lg shadow-lg cursor-pointer">
          <img src="/logo.png" alt="Logo" className="h-16 w-32 object-cover bg-transparent" />
          <p className="text-2xl text-[#3087d1] font-semibold ml-4">Slasa</p>
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-white rounded-md overflow-hidden w-2/5 max-w-[600px] border border-gray-300 shadow-md">
          <div className="relative">
            <select
              className="text-xs px-3 h-12 py-4 border-r border-gray-400 outline-none"
              style={{ backgroundColor: "#3087d1", width: `${selectWidth}px` }}
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <span ref={spanRef} className="absolute invisible whitespace-nowrap px-2">
              {selectedCategory}
            </span>
          </div>
          <input
            type="text"
            placeholder="Search for products..."
            className="flex-1 p-2 text-sm bg-white text-black outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button style={{ backgroundColor: "#3087d1" }} className="hover:brightness-90 px-4 py-4 flex items-center justify-center">
            <FaSearch className="text-white text-base" />
          </button>
        </div>

        {/* User Options */}
        <div className="flex gap-6 items-center text-white text-xs">
          <div
            onClick={handleSignIn}
            className="flex flex-col items-center cursor-pointer border border-transparent hover:border-blue-400 rounded-md p-2 transition duration-200"
          >
            <FaUser className="text-lg" />
            <span>{user ? "Profile" : "Sign In"}</span>
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
