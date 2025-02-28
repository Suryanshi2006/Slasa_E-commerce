import React from 'react'
import Hero from '../components/Hero'
import ProductSection from '../components/ProductSection'

import ProductCard from '../components/ProductCard'
import ProductList from '../components/ProductList'
import HeroSection from '../components/HeroSection'
import HomeCategories from '../components/Homecategories'
import PackageSection from '../components/PackageSection'
import Cult from '../components/Cult'
import PromotionOffers from '../components/PromotionOffers'
import Voucher from '../components/Voucher'

const Rennovation = () => {
  return (
    <div className='container mx-auto'>
    <Hero
        image="/Images/HeroRenoovation.jpeg" // Directly reference the image path
        title="Building"
        highlight="Your Dreams"
        subtitle="One Brick at a Time"
        buttonText="Explore"
        buttonLink="/explore"
      />
       <ProductSection />
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

      <PackageSection />
      <Cult />
      <PromotionOffers />
      <Voucher />

  
  </div>
  )
}

export default Rennovation
