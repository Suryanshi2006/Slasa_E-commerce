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
      .then((data) => setCategories(["All", "Acrylic","Printing","Construction","Rennovation", ...data]))
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

  // Handle search functionality
  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <header className="bg-white  px-20  overflow-hidden">
      <div className="flex items-center justify-between max-w-[1400px] mx-auto flex-wrap">
        {/* Logo */}
        <div className="flex items-center py-2 px-2  rounded-md  cursor-pointer">
          <img src="/Images/slasaLogo.svg" alt="Logo" className="h-15 w-35  object-contain"/>
        </div>

        <div className="flex justify-center w-full md:w-auto mt-3 md:mt-0 gap-x-4 flex-grow">
          <div className="flex items-center bg-white rounded-md overflow-hidden w-full sm:w-[300px] md:w-[350px] lg:w-[600px] max-w-[550px] border border-white shadow-md transition-all duration-300 hover:shadow-lg">
            {/* Category Dropdown */}
            <div className="relative">
              <select
                className="text-md px-4 h-12 py-2 border-r border-white outline-none cursor-pointer transition-all duration-300 hover:bg-[#3087d1] hover:text-white"
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
              onKeyDown={(e) => e.key === "Enter" && handleSearch()} // Navigate on Enter
            />

            {/* Search Button */}
            <button
              style={{ backgroundColor: "#3087d1" }}
              className="hover:brightness-90 px-4 h-12 flex items-center justify-center relative overflow-hidden group"
              onClick={handleSearch} // Navigate on Click
            >
              <FaSearch className="text-white text-base transition-transform duration-300 group-hover:scale-110" />
            </button>
          </div>
        </div>

        {/* User Options */}
        <div className="flex items-center gap-4">
         
          <div
            role="button"
            tabIndex={0}
            onClick={() => navigate("/wishlist")}
            className="hidden sm:flex flex-col items-center cursor-pointer border border-transparent hover:border-blue-400 rounded-md p-2 transition duration-200"
          >
            <FaRegHeart className="text-lg" />
            <span>Wishlist</span>
          </div>

          <div
            role="button"
            tabIndex={0}
            onClick={() => navigate("/cart")}
            className="flex flex-col items-center cursor-pointer relative border border-transparent hover:border-blue-400 rounded-md p-2 transition duration-200"
          >
            
            <FaShoppingCart className="text-xl" />
            {cartItems > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-600 !text-black text-xs px-1 rounded-full">
                {cartItems}
              </span>
            )}
            <span>Cart</span>
          </div>
          <div className="hidden sm:flex flex-col items-center cursor-pointer border border-transparent hover:border-blue-400 rounded-md p-2 transition duration-200">
            <FaGlobe className="text-lg" />
            <span>EN</span>
          </div>
          <div
            role="button"
            tabIndex={0}
            onClick={handleSignIn}
            className="flex flex-col items-center cursor-pointer border border-transparent hover:border-blue-400 rounded-md p-2 transition duration-200"
          >
            <FaUser className="text-lg" />
            <span>{user ? "Profile" : "Sign In"}</span>
          </div>

         

         
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;

