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

const Construction = () => {
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

  const title = "Construction Materials";
  const description =
    "Browse our premium construction materials designed to provide the highest quality for your building projects.";

  return (
    <div className="">
      <Hero
        image="/Images/HeroConstruction.jpeg" // Directly reference the image path
        title="Building"
        highlight="Your Dreams"
        subtitle="One Brick at a Time"
        buttonText="Explore"
        buttonLink="/explore"
      />

      <ProductSection title={title} description={description} />

      <div className="flex justify-center gap-4 flex-wrap p-4">
        <ProductCard />
        <ProductList />
      </div>
     

      <HeroSection />
      <CultProvider value={cultData.constructionCultData}>
          <Cult />
        </CultProvider>
      <PromotionOffers promotionId={2} />
      
      

      <a href="/your-target-page" className="block w-full">
        <div className="flex justify-center w-full max-w-screen-lg mx-auto !px-8 mt-8 mb-8">
          <HomeCategories />
        </div>
      </a>

      <PackageSection
        packages={[
          ...constructionPackages,
          ...newArrivalsPackages,
          ...todaysDealsPackages,
        ]}
      />
    <CultProvider value={cultData.constructionCultData}>
          <Cult />
        </CultProvider>
      <PromotionOffers promotionId={2} />

      <Voucher
        title={constructionVoucher.title}
        subtitle={constructionVoucher.subtitle}
        discount={constructionVoucher.discount}
        sale={constructionVoucher.sale}
        categories={constructionVoucher.categories}
        imageUrl={constructionVoucher.imageUrl}
        buttonText={constructionVoucher.buttonText}
        buttonLink={constructionVoucher.buttonLink}
      />
    </div>
  );
};

export default Construction;