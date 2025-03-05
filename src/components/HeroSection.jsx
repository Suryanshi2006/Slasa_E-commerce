import React, { useState, useEffect } from "react";
import ClickableImageGrid from "./ClickableImageGrid";
import ClickableImageGrid2 from "./ClickableImageGrid2";
import HomeCategories from "./Homecategories";
import ProductList from "./ProductList";

const HeroSection = () => {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/77dcfcd3-8b3f-4a74-a0d1-f3f9bde3f7a7")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data:", data);
        setHeroData(data);
        console.log("Updated heroData:", heroData); // Check if state updates
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to load data. Please try again.");
      })
      .finally(() => setLoading(false));
  }, []);
  

  return (
    <div className="text-center py-10 w-full  overflow-hidden ">
      {/* First Section */}
      <div className="flex items-center justify-center gap-4">
        <h1 className="text-2xl font-bold text-[#3087d1] flex-shrink-0">
          {heroData?.title || "Luxury, Style and Comfort"}
        </h1>
        <span className="w-96 h-1 bg-[#3087d1]"></span>
      </div>
      <p className="text-black px-6 text-lg ml-4 mt-5">
        {heroData?.subtitle || "Looking for perfect decor for your home?"}
      </p>
      <ClickableImageGrid className="flex justify-center ml-20" />

      {/* Second Section */}
      <div className="flex items-center justify-center gap-4 mt-10">
        <h1 className="text-3xl font-bold text-[#3087d1] px-4 flex-shrink-0">
          {heroData?.section2Title || "Bed, Bathroom, and Kitchen"}
        </h1>
        <span className="w-150 h-1 bg-[#3087d1]"></span>
      </div>
      <ClickableImageGrid2 />

      {/* Third Section */}
      <div className="flex items-center justify-center gap-4 mt-10">
        <span className="w-200 h-1 bg-[#3087d1]"></span>
        <h1 className="text-3xl font-bold text-[#3087d1] px-4 flex-shrink-0">
          {heroData?.section3Title || "Home Decor Items"}
        </h1>
      </div>

      {/* Hero Image 1 */}
      <div className="relative w-full mx-auto my-12">
        <img
          src={heroData?.image1 || "./Images/Bed.jpeg"}
          alt={heroData?.heroText1 || "Bedroom Furniture"}
          className="w-full object-cover h-[600px]"
        />
        <div className="absolute bottom-5 left-10 flex items-center">
          <div className="w-2 h-14 bg-[#3087d1] mr-3"></div>
          <h2 className="text-white text-6xl font-bold flex-shrink-0">
            {heroData?.heroText1 || "Bedroom Furniture"}
          </h2>
        </div>
      </div>

      {/* Home Categories */}
      <a href="/your-target-page" className="block w-full">
        <div className="flex justify-center w-full max-w-screen-lg mx-auto px-8 mt-8 mb-8">
          <HomeCategories />
        </div>
      </a>

      {/* Related Items Section */}
      <div className="flex items-center space-x-2 mt-20">
        <h1 className="text-3xl ml-24">
          {heroData?.relatedTitle || "Related Items that you have Viewed"} |
        </h1>
        <p className="text-[#3087d1] cursor-pointer text-md">See more</p>
      </div>

      {/* Product List (Unchanged) */}
      <ProductList />

      {/* Hero Image 2 */}
      <div className="relative w-full mx-auto my-12">
        <img
          src={heroData?.image2 || "./Images/Wall.jpeg"}
          alt={heroData?.heroText2 || "Wall Acrylic"}
          className="w-full object-cover h-[600px]"
        />
        <div className="absolute bottom-5 left-10 flex items-center">
          <div className="w-2 h-14 bg-[#3087d1] mr-3"></div>
          <h2 className="text-white text-6xl font-bold flex-shrink-0">
            {heroData?.heroText2 || "Wall Acrylic"}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
