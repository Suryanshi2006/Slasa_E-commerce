import React from "react";
import ClickableImageGrid from "./ClickableImageGrid";
import ClickableImageGrid2 from "./ClickableImageGrid2";
import HomeCategories from "./Homecategories";
import ProductList from "./ProductList";

const HeroSection = () => {
  return (
    <div className="text-center py-10 w-full !bg-gray-200 container mx-auto">
      {/* First Section */}
      <div className="flex items-center justify-center gap-4">
        <h1 className="text-3xl font-bold text-[#3087d1]">
          Luxury, Style and Comfort
        </h1>
        <span className="w-155 h-1 bg-[#3087d1]"></span>
      </div>
      <p className="text-black px-6 text-lg ml-4 mt-5">
        Looking for perfect decor for your home?
      </p>
      <ClickableImageGrid className="flex justify-center ml-20" />

      {/* Second Section */}
      <div className="flex items-center justify-center gap-4 mt-10">
        <h1 className="text-3xl font-bold text-[#3087d1]">
          Bed, Bathroom, and Kitchen
        </h1>
        <span className="w-150 h-1 bg-[#3087d1]"></span>
      </div>
      <ClickableImageGrid2 />

      {/* Third Section */}
      <div className="flex items-center justify-center gap-4 mt-10">
        <span className="w-200 h-1 bg-[#3087d1]"></span>
        <h1 className="text-3xl font-bold text-[#3087d1]">Home Decor Items</h1>
      </div>

      {/* Hero Image */}
      <div className="relative w-full mx-auto my-12">
        {/* Background Image */}
        <img
          src="./Images/Bed.jpeg"
          alt="Bedroom Furniture"
          className="w-full object-cover h-[600px]"
        />

        {/* Overlay Text */}
        <div className="absolute bottom-5 left-10 flex items-center">
          {/* Blue Vertical Bar */}
          <div className="w-2 h-14 bg-[#3087d1] mr-3"></div>

          {/* Text */}
          <h2 className="text-white text-6xl font-bold">Bedroom Furniture</h2>
        </div>
      </div>

      {/* Centered HomeCategories with Increased Spacing */}
         <a href="/your-target-page" className="block w-full">
             <div className="flex justify-center w-full max-w-screen-lg mx-auto !px-8 mt-8 mb-8">
               <HomeCategories />
             </div>

          </a>
          <div className="flex items-center space-x-2 mt-20">
              <h1 className="!text-3xl ml-24">Related Items that you have Viewed |</h1>
              <p className="text-[#3087d1] cursor-pointer text-md">See more</p>
          </div>
        <ProductList/>


          <div className="relative w-full mx-auto my-12">
        {/* Background Image */}
        <img
          src="./Images/Wall.jpeg"
          alt="Bedroom Furniture"
          className="w-full object-cover h-[600px]"
        />

        {/* Overlay Text */}
        <div className="absolute bottom-5 left-10 flex items-center">
          {/* Blue Vertical Bar */}
          <div className="w-2 h-14 bg-[#3087d1] mr-3"></div>

          {/* Text */}
          <h2 className="text-white text-6xl font-bold">Wall Acrylic</h2>
        </div>
      </div>




    </div>
  );
};

export default HeroSection;
