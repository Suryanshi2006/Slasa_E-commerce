import React from 'react'
import Hero from '../../components/Hero'
import ProductSection from '../../components/ProductSection'
import ProductCard from '../../components/ProductCard'
import ProductList from '../../components/ProductList'
import HeroSection from '../../components/HeroSection'
import HomeCategories from '../../components/Homecategories'
import PromotionOffers from '../../components/PromotionOffers'
import PackageSection from '../../components/PackageSection'
import Voucher from '../../components/Voucher'
import { useVouchers } from '../../context/VoucherContext'
import { usePackages } from '../../context/PackageContext'
import Cult from '../../components/Cult'
import { CultProvider,cultData } from '../../context/CultContext'
import Footer from '../../components/Footer'

const Ramdan = () => {
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
    
      const  {
        acrylicPackages,
    constructionPackages,
    renovationPackages,
    newArrivalsPackages,
    photographyPackages,
    printingPackages,
    todaysDealsPackages,
    easel,
    ramdan
      } = usePackages();
      
      const   title= "Premium Wood Easel Canvas";
     const   description= "Discover our high-quality wood easel canvas collection, perfect for artists and creators seeking durability and elegance."
      
      
    
    
    return (
    <>
    <div >
    <Hero
  image="/Images/Exclusive10.jpeg" // Directly reference the image path
  title="Celebrate the Spirit"
  highlight="Ramadan Specials"
  subtitle="Exclusive Collections to Make Your Ramadan More Special"
  buttonText="Shop Now"
  buttonLink="/ramadan-specials"
/>

    <ProductSection
      title={title}
      description={description}
      className="mt-20"
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
         
    
        
        
         ...ramdan
    
      
        ]}
      />
         <CultProvider value={cultData.ramadanDealsData}>
              <Cult />
            </CultProvider>
      <PromotionOffers promotionId={4} />
    
    
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
    
    <Footer/>
    </div>
    </>
    )
}

export default Ramdan
