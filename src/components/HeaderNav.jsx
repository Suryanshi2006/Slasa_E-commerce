import React, { useState, useRef, useEffect } from "react";
import { FaRegHeart, FaShoppingCart, FaUser, FaSearch, FaGlobe } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HeaderNav = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [cartItems, setCartItems] = useState(0);
  const [user, setUser] = useState(null);
  const spanRef = useRef(null);
  const [selectWidth, setSelectWidth] = useState(50);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(["All", ...data]))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  useEffect(() => {
    const updateCartItems = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(cart.length);
    };

    updateCartItems();
    window.addEventListener("storage", updateCartItems);
    return () => {
      window.removeEventListener("storage", updateCartItems);
    };
  }, []);

  useEffect(() => {
    if (spanRef.current) {
      const spanWidth = spanRef.current.getBoundingClientRect().width;
      setSelectWidth(spanWidth + 20);
    }
  }, [selectedCategory]);

  const handleSignIn = () => {
    navigate(user ? "/profile" : "/signin");
  };

  return (
    <header className="bg-gray-900 text-white px-4 py-3 overflow-hidden">
      <div className="flex items-center justify-between max-w-[1400px] mx-auto flex-wrap">
        {/* Logo */}
        <div className="flex items-center bg-gray-900 px-4 py-2  rounded-md shadow-md cursor-pointer">
          <img src="/Images/SLASA.svg" alt="Logo" className="!h-20 w-35 object-contain bg-transparent rounded-tr-lg " />
   
        </div>

        <div className="flex justify-center w-full md:w-auto mt-3 md:mt-0 gap-x-4 flex-grow">
  <div className="flex items-center bg-white rounded-md overflow-hidden w-full sm:w-[300px] md:w-[350px] lg:w-[600px] max-w-[550px] border border-gray-300 shadow-md transition-all duration-300 hover:shadow-lg">
    {/* Category Dropdown */}
    <div className="relative">
      <select
        className="text-xs px-4 h-12 py-2 border-r border-gray-400 outline-none cursor-pointer transition-all duration-300 hover:bg-blue-600 hover:text-white"
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

    {/* Search Input */}
    <input
      type="text"
      placeholder="Search for products..."
      className="flex-1 p-3 text-sm bg-white text-black outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-400"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />

    {/* Search Button with Increased Height */}
    <button
      style={{ backgroundColor: "#3087d1" }}
      className="hover:brightness-90 px-4 h-12 flex items-center justify-center relative overflow-hidden group"
    >
      <FaSearch className="text-white text-base transition-transform duration-300 group-hover:scale-110" />
      {/* Ripple Effect */}
      <span className="absolute inset-0 bg-white opacity-10 scale-0 transition-transform duration-300 group-hover:scale-150"></span>
    </button>
  </div>
</div>


        {/* User Options */}
        <div className="flex items-center gap-4">
          {/* Sign In */}
          <div
            role="button"
            tabIndex={0}
            onClick={handleSignIn}
            onKeyDown={(e) => e.key === "Enter" && handleSignIn()}
            className="flex flex-col items-center cursor-pointer border border-transparent hover:border-blue-400 rounded-md p-2 transition duration-200"
          >
            <FaUser className="text-lg" />
            <span>{user ? "Profile" : "Sign In"}</span>
          </div>

          {/* Cart */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => navigate("/cart")}
            onKeyDown={(e) => e.key === "Enter" && navigate("/cart")}
            className="flex flex-col items-center cursor-pointer relative border border-transparent hover:border-blue-400 rounded-md p-2 transition duration-200"
          >
            <FaShoppingCart className="text-xl" />
            {cartItems > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
                {cartItems}
              </span>
            )}
            <span>Cart</span>
          </div>

          {/* Wishlist */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => navigate("/wishlist")}
            onKeyDown={(e) => e.key === "Enter" && console.log("Wishlist clicked")}
            className="hidden sm:flex flex-col items-center cursor-pointer border border-transparent hover:border-blue-400 rounded-md p-2 transition duration-200"
          >
            <FaRegHeart className="text-lg" />
            <span>Wishlist</span>
          </div>

          {/* Language Selector */}
          <div className="hidden sm:flex flex-col items-center cursor-pointer border border-transparent hover:border-blue-400 rounded-md p-2 transition duration-200">
            <FaGlobe className="text-lg" />
            <span>EN</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
