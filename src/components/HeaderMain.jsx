import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import SidebarMenu from "./SidebarMenu.jsx";

const HeaderMain = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);
  const categoriesRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target)
      ) {
        setCategoriesOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [categoriesRef]);

  const handleCatButtonClick = (event) => {
    event.stopPropagation(); // Prevent click from propagating to document
    setCategoriesOpen(!isCategoriesOpen);
  };

  const closeCategories = () => {
    setCategoriesOpen(false); // This will close the categories menu
  };

  return (
    <div className="w-full flex items-center justify-between p-4 bg-gray-200 border-b-2 border-gray-400 flex-wrap relative">
      {/* All Button (visible on all screens) */}
      <span
        onClick={() => setSidebarOpen(true)}
        className="px-4 py-2 bg-gray-300 rounded-lg mr-3 transition duration-300 border-b border-gray-400 hover:bg-gray-400 hover:border-[#3087d1] cursor-pointer"
      >
        ☰ All
      </span>

      {/* Categories Toggle (visible on smaller screens) */}
      <span
        onClick={handleCatButtonClick} // Use the new handler
        className="lg:hidden px-4 py-2 bg-gray-300 rounded-lg ml-auto transition duration-300 border-b border-gray-400 hover:bg-gray-400 hover:border-[#3087d1] cursor-pointer"
      >
        ☰ Categories
      </span>

      {/* Categories (visible on larger screens, toggled on mobile) */}
 <div
  ref={categoriesRef}
  className={`lg:flex-nowrap md:flex-nowrap  gap-3 text-lg font-semibold text-[#3087d1] ${
    isCategoriesOpen ? "block" : "hidden lg:flex"
  } w-full lg:w-auto mt-2 lg:mt-0 md:flex-nowrap`}
>
  <CategoryItem title="Acrylic Accessories" path="/acrylic" onClick={closeCategories} />
  <CategoryItem title="New Arrivals" path="/new" onClick={closeCategories} />
  <CategoryItem title="Today's Deal" path="/deals" onClick={closeCategories} />
  <CategoryItem title="Printing Services" path="/printing" onClick={closeCategories} />
  <CategoryItem title="Photography & Videography" path="/photography" onClick={closeCategories} />
  <CategoryItem title="Construction" path="/construction" onClick={closeCategories} />
  <CategoryItem title="Home Renovation" path="/renovation" onClick={closeCategories} />
</div>


      {/* Sidebar Menu (mobile view) */}
      {isSidebarOpen && (
        <div className="lg:hidden fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
          <div className="w-3/4 sm:w-2/3 md:w-1/2 bg-white p-4">
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-xl mb-4 p-2 border border-gray-300 rounded-md"
            >
              Close
            </button>
            <div className="flex flex-col gap-4 text-lg font-semibold !text-[#3087d1]">
              <CategoryItem title="Acrylic Accessories" path="/acrylic" onClick={closeCategories} />
              <CategoryItem title="New Arrivals" path="/new" onClick={closeCategories} />
              <CategoryItem title="Today's Deal" path="/deals" onClick={closeCategories} />
              <CategoryItem title="Printing Services" path="/printing" onClick={closeCategories} />
              <CategoryItem title="Photography & Videography" path="/photography" onClick={closeCategories} />
              <CategoryItem title="Construction" path="/construction" onClick={closeCategories} />
              <CategoryItem title="Home Renovation" path="/renovation" onClick={closeCategories} />
            </div>
          </div>
        </div>
      )}

      {/* Sidebar Menu (pass down `isSidebarOpen` prop to handle its state) */}
      <SidebarMenu isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
};

const CategoryItem = ({ title, path, onClick }) => {
  return (
    <Link
      to={path}
      className="relative flex items-center gap-2 px-3 py-2 border border-transparent rounded-md transition-all duration-300 ease-in-out hover:border-blue-500 hover:scale-105 text-[#3087d1]"
      onClick={onClick} // Trigger the callback to close the categories menu
    >
      {title}
    </Link>
  );
};

export default HeaderMain;
