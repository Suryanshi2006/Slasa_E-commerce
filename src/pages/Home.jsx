import React from "react";
import { Outlet } from "react-router-dom"; // Import Outlet

import ProductCard from "../components/ProductCard.jsx";
import ProductList from "../components/ProductList.jsx";
import HeroSection from "../components/HeroSection.jsx";

import ProductSection from "../components/ProductSection.jsx";
import HomeCategories from "../components/Homecategories.jsx";
import Cult from "../components/Cult.jsx";
import PromotionOffers from "../components/PromotionOffers.jsx";
import PackageSection from "../components/PackageSection.jsx"; // Updated import
import Voucher from "../components/Voucher.jsx";
import Hero from "../components/Hero.jsx";
import { useVouchers } from "../context/VoucherContext";
import { usePackages } from "../context/PackageContext"; // Corrected import
import { CultProvider, cultData } from "../context/CultContext"; 
import Footer from "../components/Footer.jsx";


const Home = () => {

  const {
    voucherData,
    constructionVoucher,
    homepageVouchers,
    newArrivalsVoucher,
    photographyVideographyVoucher,
    printingVoucher,
    renovationVoucher,
    todaysDealsVoucher,
  } = useVouchers();

  // Access packages from context
  const {
    acrylicPackages,
    constructionPackages,
    renovationPackages,
    newArrivalsPackages,
    photographyPackages,
    printingPackages,
    todaysDealsPackages,
  } = usePackages();

  const title = "Featured Products";
  const description =
    "Discover our best-selling products, carefully selected to meet all your needs for home renovation and construction projects.";

  return (
    <div className="bg-white min-h-screen w-full overflow-hidden m-0 p-0">


      <div className=" min-h-screen overflow-hidden bg-white">

        <Hero
          image="/Images/Bathroom.avif" // Directly reference the image path
          title="Discover"
          highlight="Slasa's World"
          subtitle="Where Innovation Meets Quality"
          buttonText="Explore"
          buttonLink="/explore"
        />

        <ProductSection title={title} description={description} mt-20 />
      </div>

      <div className="flex justify-center gap-4 flex-wrap p-4 mt-[-70px]">
        <ProductCard />
        <ProductList />
      </div>

      <HeroSection />

      <a href="/your-target-page" className="block w-full">
        <div className="flex justify-center w-full max-w-screen-lg mx-auto !px-8 mt-8 mb-8">
          <HomeCategories />
        </div>
      </a>

      {/* Pass packages from context */}
      <PackageSection
        packages={[
          ...acrylicPackages,
          ...constructionPackages,
          ...renovationPackages,
          ...printingPackages,
          ...todaysDealsPackages,
        ]}
      />

<CultProvider value={cultData.homeCultData}>
          <Cult />
        </CultProvider>
      <PromotionOffers promotionId={2} />
      <PromotionOffers promotionId={1} />
      {homepageVouchers.map((voucher, index) => (
        <Voucher
          key={index}
          title={voucher.title}
          subtitle={voucher.subtitle}
          discount={voucher.discount}
          sale={voucher.sale}
          categories={voucher.categories}
          imageUrl={voucher.imageUrl}
          buttonText={voucher.buttonText}
          buttonLink={voucher.buttonLink}
        />
      ))}
      <Footer/>

      <Outlet />
    </div>
  );
};

export default Home;
