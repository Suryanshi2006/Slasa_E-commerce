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

const Comparisons = () => {
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
                const title = "Before & After Transformations";  
                const description = "See the incredible transformations with our top-rated products! Explore stunning before-and-after comparisons that showcase enhanced style, functionality, and innovation."  
                
  return (
   <>
    <div className='container mx-auto'>
    <Hero
  image="/Images/Exclusive2.jpeg" // Directly reference the image path
  title="See the Difference"
  highlight="Before & After Comparisons"
  subtitle="Transformations That Speak for Themselves"
  buttonText="View Now"
  buttonLink="/before-after"
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
            ...acrylicPackages,

            ...newArrivalsPackages,

            ...todaysDealsPackages,
          ]}
        />
         <CultProvider value={cultData.acrylicCultData}>
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


    </div>
   </>
  )
}

export default Comparisons
