import React from "react";
import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
import ProductCard from "../components/ProductCard";
import ProductList from "../components/ProductList";
import HeroSection from "../components/HeroSection";
import HomeCategories from "../components/Homecategories";
import PackageSection from "../components/PackageSection";
import Cult from "../components/Cult";
import PromotionOffers from "../components/PromotionOffers";
import Voucher from "../components/Voucher";
import { useVouchers } from "../context/VoucherContext";
import { usePackages } from "../context/PackageContext";
import { CultProvider, cultData } from "../context/CultContext"; 
import Footer from "../components/Footer";

const NewArrivals = () => {
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

  const {
    acrylicPackages,
    constructionPackages,
    renovationPackages,
    newArrivalsPackages,
    photographyPackages,
    printingPackages,
    todaysDealsPackages,
  } = usePackages();
  const title = "New Arrivals";
  const description =
    "Check out our latest collection of new products, handpicked for quality and innovation.";

  return (
    <>
      <div className="">
      <Hero
  slides={[
       "/Images/Art.jpeg",
    "/Images/Mega.jpeg",
    "/Images/AcrylicWood.jpeg",
    "/Images/AcrylicWall.jpeg",
    "/Images/HeroWood.png",
    "/Images/Premium.jpeg"
  
  ]}
   buttonText="Explore"
  buttonLink="/explore"
 
/>

        <ProductSection title={title} description={description} />

        <div className="flex justify-center gap-4 flex-wrap p-4">
          <ProductCard />
          <ProductList />
        </div>

        <HeroSection />

        <a href="/your-target-page" className="block w-full">
          <div className="flex justify-center w-full max-w-screen-lg mx-auto !px-8 mt-8 mb-8">
            <HomeCategories />
          </div>
        </a>

        <PackageSection
          packages={[
            ...acrylicPackages,
            ...newArrivalsPackages,
            ...todaysDealsPackages,
          ]}
        />
       <CultProvider value={cultData.newArrivalsCultData}>
          <Cult />
        </CultProvider>
      <PromotionOffers promotionId={2} />
        <PromotionOffers promotionId={5} />

        {/* Render Voucher component for New Arrivals */}
        {newArrivalsVoucher.map((voucher, index) => (
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
      </div>
    </>
  );
};

export default NewArrivals;
