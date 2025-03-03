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

const Renovation = () => {
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

  const title = "Renovation Essentials";
  const description =
    "Find everything you need for your next renovation project, including tools, paint, flooring, and more.";

  return (
    <div className="container mx-auto">
      <Hero
        image="/Images/HeroRenoovation.jpeg" // Directly reference the image path
        title="Transforming"
        highlight="Your Space"
        subtitle="One Renovation at a Time"
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
          ...newArrivalsPackages,

          ...todaysDealsPackages,
          ...renovationPackages,
        ]}
      />
    <CultProvider value={cultData.renovationCultData}>
          <Cult />
        </CultProvider>
      <PromotionOffers promotionId={2} />
      <PromotionOffers promotionId={3} />

      {/* Render Voucher component for Renovation */}
      {renovationVoucher.map((voucher, index) => (
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
    </div>
  );
};

export default Renovation;
