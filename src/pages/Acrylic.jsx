import React from "react";

import ProductSection from "../components/ProductSection";
import ProductCard from "../components/ProductCard";
import ProductList from "../components/ProductList";
import HeroSection from "../components/HeroSection";
import Hero from "../components/Hero";
import HomeCategories from "../components/Homecategories";
import PackageSection from "../components/PackageSection";
import Cult from "../components/Cult";
import PromotionOffers from "../components/PromotionOffers";
import Voucher from "../components/Voucher";
import { useVouchers } from "../context/VoucherContext";
import { usePackages } from "../context/PackageContext";


const Acrylic = () => {
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
   
  const { acrylicPackages, constructionPackages, renovationPackages, newArrivalsPackages, photographyPackages, printingPackages, todaysDealsPackages } = usePackages();

  const title = "Acrylic Accessories";
  const description = "Explore our wide range of stylish and durable acrylic accessories for your home and office decor.";
  return (
    <>
      <div className="container mx-auto">
        <Hero
          image="/Images/HeroAcrylic.avif" // Directly reference the image path
          title="Crafting"
          highlight="Elegance in Acrylic"
          subtitle="Transform Your Space with Precision"
          buttonText="Explore"
          buttonLink="/explore"
        />

<ProductSection 
        title={title} 
        description={description} className="mt-20"
      />

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
      
      ...todaysDealsPackages,
    ]}
  />
        <Cult />
        <PromotionOffers />
        {voucherData.map((voucher, index) => (
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
    </>
  );
};

export default Acrylic;
