import React from 'react'
import { Outlet } from 'react-router-dom' // Import Outlet
import HeaderTop from '../components/HeaderTop.jsx'
import HeaderNav from '../components/HeaderNav.jsx'
import HeaderMain from '../components/HeaderMain.jsx'
import ProductCard from '../components/ProductCard.jsx'
import ProductList from '../components/ProductList.jsx'
import HeroSection from '../components/HeroSection.jsx'

import ProductSection from '../components/ProductSection.jsx'
import HomeCategories from '../components/Homecategories.jsx'
import Cult from '../components/Cult.jsx'
import PromotionOffers from '../components/PromotionOffers.jsx'
import PackageSection from '../components/PackageSection.jsx'
import Voucher from '../components/Voucher.jsx'




const Home = () => {
  return (
    <div style={{
      backgroundColor: "white", 
      minHeight: "100vh", 
      width: "100vw", 
      overflowX: "hidden"
    }}>
      <HeaderTop />
      <HeaderNav />
      <HeaderMain />
      <ProductSection/>
     <div className='flex justify-center gap-4 flex-wrap p-4'>
     <ProductCard/>
     <ProductList/>
     </div>

     <HeroSection/>
          <a href="/your-target-page" className="block w-full">
             <div className="flex justify-center w-full max-w-screen-lg mx-auto !px-8 mt-8 mb-8">
               <HomeCategories />
             </div>

          </a>
          <PackageSection/>
          <Cult/>
          <PromotionOffers/>
          <Voucher/>
          
     
     

     
   

      
    
      <Outlet />
    </div>
  )
}

export default Home
