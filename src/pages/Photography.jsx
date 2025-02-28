import React from 'react'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import ProductList from '../components/ProductList'
import ProductSection from '../components/ProductSection'
import HeroSection from '../components/HeroSection'
import HomeCategories from '../components/Homecategories'
import PackageSection from '../components/PackageSection'
import Cult from '../components/Cult'
import PromotionOffers from '../components/PromotionOffers'
import Voucher from '../components/Voucher'
import { useVouchers } from "../context/VoucherContext";
import { usePackages } from "../context/PackageContext";


const Photography = () => {
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

  const title = "Photography Essentials";
  const description = "Explore our curated selection of high-quality cameras, lenses, and accessories for every photography enthusiast.";

  return (
    <div className='container mx-auto'>
      <Hero
        image="/Images/HeroPhoto.jpeg" // Directly reference the image path
        title="Bringing"
        highlight="Moments to Life"
        subtitle="Through the Art of Photography and Videography"
        buttonText="Explore"
        buttonLink="/explore"
      />
      
      <ProductSection 
        title={title} 
        description={description} 
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

    
      ...newArrivalsPackages,
      ...photographyPackages,
   
      ...todaysDealsPackages,
    ]}
  />
      <Cult />
      <PromotionOffers />
      
      {/* Render Voucher component for Photography & Videography */}
      {photographyVideographyVoucher.map((voucher, index) => (
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
}

export default Photography;
