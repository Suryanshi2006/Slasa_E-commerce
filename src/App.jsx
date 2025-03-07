import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { VoucherProvider } from "./context/VoucherContext";
import { PackageProvider } from "./context/PackageContext";
import { PromotionProvider } from "./context/PromotionContext";
import { CultProvider } from "./context/CultContext";// ✅ Import PromotionProvider

import Home from "./pages/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import CustomerSection from "./components/CustomerSection";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import PageLayout from "./components/PageLayout";
import Acrylic from "./pages/Acrylic";
import CartPage from "./components/Cartpage";
import TodayDeals from "./pages/TodayDeals";
import Construction from "./pages/Construction";
import Rennovation from "./pages/Rennovation";
import Photography from "./pages/Photography";
import Printing from "./pages/Printing";
import Wishlist from "./components/WishList";
import AccountSettings from "./components/AccountSettings";
import NewArrivals from './pages/NewArrivals'
import { useState } from "react";
import SidebarMenu from "./components/SidebarMenu";
import AcrylicSheet from "./Sidebar/AcrylicPages/AcrylicSheet";
import AcrylicWood from "./Sidebar/AcrylicPages/AcrylicWood"
import MWood from "./Sidebar/AcrylicPages/MWood";
import Top from "./Sidebar/BestSellerPages/Top";
import AllTimeBest from "./Sidebar/BestSellerPages/AllTimeBest";
import StaffPick from "./Sidebar/BestSellerPages/StaffPick";
import Exclusive from "./Sidebar/BestSellerPages/Exclusive";
import FlashDeals from "./Sidebar/TrendingProductsPages/FlashDeals"
import BundleOffers from './Sidebar/TrendingProductsPages/BundleOffers'
import Clearance from "./Sidebar/TrendingProductsPages/Clearance";
import Handmade from "./Sidebar/NewArrivals/Handmade"
import Backinstock from "./Sidebar/NewArrivals/Backinstock"
import Influencer from "./Sidebar/NewArrivals/Influencer"
import Mostsold from "./Sidebar/NewArrivals/Influencer"
import Verified from "./Sidebar/CustomerReviewpages/Verified";
import Comparisons from "./Sidebar/CustomerReviewpages/Comparisons";
import Shop from "./pages/Shop";
import CustomeFrames from "./Sidebar/UvPrinting/CustomeFrames"
import Acrylicprints from "./Sidebar/UvPrinting/CustomeFrames"
import Decorative from "./Sidebar/UvPrinting/CustomeFrames"
import CanvasArt from "./Sidebar/UvPrinting/CustomeFrames"
import Easel from "./Sidebar/Wood/Easel";
import WoodSheets from "./Sidebar/Wood/WoodSheets";
import WoodShelves from "./Sidebar/Wood/WoodShelves";
import WoodFrame from "./Sidebar/Wood/WoodFrame";
import Ramdan from "./Sidebar/Wood/Ramdan";
import Customize from "./Sidebar/Neon/Customize";
import Celebration from "./Sidebar/Neon/Celebration";
import Festival from "./Sidebar/Neon/Festival";
import OfficeEvent from "./Sidebar/Neon/OfficeEvent";
import DigitalPrinting from "./Sidebar/PrintingPages/DigitalPrinting"
import OffsetPrinting from "./Sidebar/PrintingPages/OffsetPrinting"
import SpecialityPrinting from "./Sidebar/PrintingPages/SpecialityPrinting"
import LargeFormat from "./Sidebar/PrintingPages/LargeFormat"
import CustomPrinting from "./Sidebar/PrintingPages/CustomPrinting"
import Corporate from "./Sidebar/PhotoVideoPages/Corporate"
import Event from "./Sidebar/PhotoVideoPages/Event"
import Product from "./Sidebar/PhotoVideoPages/Product"
import Promotional from "./Sidebar/PhotoVideoPages/Promotional"


import SpecialVideo from "./Sidebar/PhotoVideoPages/Corporate"
import EventSetup from "./Sidebar/ExhibitionPages/EventSetup"
import PhotographyandVideogrpahySetup from "./Sidebar/ExhibitionPages/PhotographyandVideogrpahySetup";
import Facility from "./Sidebar/MaintanencePages/Facility";
import HomeMaintenance from "./Sidebar/MaintanencePages/HomeMaintenance";
import Specialized from "./Sidebar/MaintanencePages/Specialized";
import Office from "./Sidebar/MaintanencePages/Office";
import Banner from "./Sidebar/OtherServices/Banner"
import Exhibition from './Sidebar/OtherServices/Exhibition'
import Flagstand from "./Sidebar/OtherServices/Flagstand"
import Flex from "./Sidebar/OtherServices/Flex"
import LedNeon from "./Sidebar/OtherServices/LedNeon"
import LightingPoles from "./Sidebar/OtherServices/LightingPoles"
import Merchanding from "./Sidebar/OtherServices/Merchanding"
import SafetyEquipements from "./Sidebar/OtherServices/SafetyEquipements";
import SolarLights from "./Sidebar/OtherServices/SolarLights"
import StreetSigns from "./Sidebar/OtherServices/StreetSigns"
import VehicleBranding from "./Sidebar/OtherServices/VehicleBranding"
import Ceiling from "./Sidebar/NewConstruction/Ceiling"
import Public from "./Sidebar/NewConstruction/Public"
import Outdoor from "./Sidebar/NewConstruction/Outdoor"
import Commercial from "./Sidebar/NewConstruction/Commercial"
import Luxary from "./Sidebar/HomeRennovationPages/Luxary"
import SmartHome from "./Sidebar/HomeRennovationPages/SmartHome"
import SpaceOptimization from "./Sidebar/HomeRennovationPages/SpaceOptimization"
// import Walltreatments from "./Sidebar/HomeRennovationPages/Walltreatments"
// import kitchen from "./Sidebar/InteriorDesign/Kitchen"
import Bathroom from "./Sidebar/InteriorDesign/Bathroom"
import Energy from "./Sidebar/InteriorDesign/Energy"
import Flooring from "./Sidebar/InteriorDesign/Flooring"
import Kitchen from "./Sidebar/InteriorDesign/Kitchen";
import RetialStore from "./Sidebar/Commercial/RetialStore"

import Warehouse from "./Sidebar/Commercial/Warehouse"
import Hospitality from "./Sidebar/Commercial/Hospitality"
import OfficeInterior from "./Sidebar/Commercial/OfficceInterior"

import Masonry from "./Sidebar/Structure/Masonry"
import Foundation from "./Sidebar/Structure/Foundation"
import Demolition from "./Sidebar/Structure/Demolition"
import Steel from "./Sidebar/Structure/Steel"
import OurStory from "./FootersPages/OurStory";
import Cancellation from "./FootersPages/Cancellation";
import Careers from "./FootersPages/Careers";
import FAQ from "./FootersPages/FAQ";
import Payments from "./FootersPages/Payments";
import PressMedia from "./FootersPages/PressMedia";

import Refunds from "./FootersPages/Refunds";
import Returns from "./FootersPages/Returns";
import Security from "./FootersPages/Security";
import Shipping from "./FootersPages/Shipping";
import Sitemap from "./FootersPages/Sitemap";
import StoreLocator from "./FootersPages/StoreLocator";
import TermsConditions from "./FootersPages/TermsConditions";
import TrackOrder from "./FootersPages/TrackOrder";
import ContactUs from "./FootersPages/ContactUs";

import About from "./FootersPages/About";









const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    
    <Router>
            <SidebarMenu isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
     <div style={styles.pageContainer}>
      <PackageProvider>
        <VoucherProvider>
          <PromotionProvider>
            <CultProvider>
              <Routes>
                <Route
                  path="/"
                  element={
                    <PageLayout>
                      <Home />
                    </PageLayout>
                  }
                />
              

                <Route
                  path="*"
                  element={
                    <PageLayout>
                      <div>404 Not Found</div>
                    </PageLayout>
                  }
                />
                
               
               
                 
                <Route
                  path="/construction"
                  element={
                    <PageLayout>
                      <Construction />
                    </PageLayout>
                  }
                />
                <Route
                  path="/renovation"
                  element={
                    <PageLayout>
                      <Rennovation />
                    </PageLayout>
                  }
                />
                 <Route
                  path="/new"
                  element={
                    <PageLayout>
                      <NewArrivals/>
                  
                    </PageLayout>
                  }
                />
                 <Route
                  path="/shop"
                  element={
                    <PageLayout>
                     <Shop/>
                  
                    </PageLayout>
                  }
                />
                <Route
                  path="/photography"
                  element={
                    <PageLayout>
                      <Photography />
                    </PageLayout>
                  }
                />
                <Route
                  path="/printing"
                  element={
                    <PageLayout>
                      <Printing />
                    </PageLayout>
                  }
                />
                <Route
                  path="/acrylic"
                  element={
                    <PageLayout>
                      <Acrylic />
                    </PageLayout>
                  }
                />
            
                <Route
                  path="/customer"
                  element={
                    <PageLayout>
                      <CustomerSection />
                    </PageLayout>
                  }
                />
                <Route
                  path="/account"
                  element={
                    <PageLayout>
                      <AccountSettings/>
                    </PageLayout>
                  }
                />
               
              
                <Route
                  path="/product/:id"
                  element={
                    <PageLayout>
                      <ProductDetail />
                    </PageLayout>
                  }
                />

             

                <Route
                  path="/cart"
                  element={
                    <PageLayout>
                      <CartPage />
                    </PageLayout>
                  }
                />
                <Route
                  path="/wishlist"
                  element={
                    <PageLayout>
                      <Wishlist />
                    </PageLayout>
                  }
                />
                <Route
                  path="/deals"
                  element={
                    <PageLayout>
                      <TodayDeals />
                    </PageLayout>
                  }
                />
                <Route
                  path="/:category"
                  element={
                    <PageLayout>
                      <ProductList />
                    </PageLayout>
                  }
                />

                {/* routing for the sidebar pages */}
                {/* Routing for the acrylic pages */}
                <Route
                  path="/sheets"
                  element={
                    <PageLayout>
                  <AcrylicSheet/>
                    </PageLayout>
                  }
                />
                 <Route
                  path="/wood"
                  element={
                    <PageLayout>
                      <AcrylicWood/>
                
                    </PageLayout>
                  }
                />
                 <Route
                  path="/mwood"
                  element={
                    <PageLayout>
                   <MWood/>
                
                    </PageLayout>
                  }
                />
             {/* Routing for the best sellers */}
                  <Route
                  path="/top"
                  element={
                    <PageLayout>
                      <Top/>
           
                
                    </PageLayout>
                  }
                />
                  <Route
                  path="/all-time-best"
                  element={
                    <PageLayout>
                    <AllTimeBest/>
           
                
                    </PageLayout>
                  }
                />
                  <Route
                  path="/staff-pick"
                  element={
                    <PageLayout>
                    <StaffPick/>
           
                
                    </PageLayout>
                  }
                />
                  <Route
                  path="/exclusive"
                  element={
                    <PageLayout>
                  <Exclusive/>
           
                
                    </PageLayout>
                  }
                />
                {/* Routing for the Trending products */}
                <Route
                  path="/flash-deals"
                  element={
                    <PageLayout>
                   <FlashDeals/>
           
                
                    </PageLayout>
                  }
                />

                   <Route
                  path="/bundle-offers"
                  element={
                    <PageLayout>
                <BundleOffers/>
           
                
                    </PageLayout>
                  }
                />

<Route
                  path="/clearance"
                  element={
                    <PageLayout>
                    <Clearance/>
                    </PageLayout>
                  }
                />

                {/* Routing for New Arrivals  */}
                <Route
                  path="/handmade"
                  element={
                    <PageLayout>
                  <Handmade/>
                    </PageLayout>
                  }
                />
                 <Route
                  path="/back-in-stock"
                  element={
                    <PageLayout>
                <Backinstock/>
                    </PageLayout>
                  }
                />
                <Route
                  path="/influencer"
                  element={
                    <PageLayout>
             <Influencer/>
                    </PageLayout>
                  }
                />
                <Route
                  path="/most-sold"
                  element={
                    <PageLayout>
                <Mostsold/>
                    </PageLayout>
                  }
                />
                {/* Routing for Customer Reviews */}
                
                <Route
                  path="/verified"
                  element={
                    <PageLayout>
                      <Verified/>
                    </PageLayout>
                  }
                />
                 <Route
                  path="/comparisons"
                  element={
                    <PageLayout>
                      <Comparisons/>
                    </PageLayout>
                  }
                />
                {/* Routing for the uv printing pages */}
                <Route
                  path="/custome-frames"
                  element={
                    <PageLayout>
                      <CustomeFrames/>

                  
                    </PageLayout>
                  }
                />
                 <Route
                  path="/acrylic-prints"
                  element={
                    <PageLayout>
                  <Acrylicprints/>
                    </PageLayout>
                  }
                />
                
                 <Route
                  path="/canvas-art"
                  element={
                    <PageLayout>
                     <CanvasArt/>
                    </PageLayout>
                  }
                />
                 <Route
                  path="/decorative"
                  element={
                    <PageLayout>
                     <Decorative/>
                    </PageLayout>
                  }
                />
                {/* Routing for the Wood Pages in the sidebar */}
                <Route
                  path="/easel"
                  element={
                    <PageLayout>
                   <Easel/>
                    </PageLayout>
                  }
                />
                <Route
                  path="/wood-Sheet"
                  element={
                    <PageLayout>
                    <WoodSheets/>
                    </PageLayout>
                  }
                />
                <Route
                  path="/wood-shelves"
                  element={
                    <PageLayout>
                    <WoodShelves/>
                    </PageLayout>
                  }
                />
                <Route
                  path="/wood-frame"
                  element={
                    <PageLayout>
                    <WoodFrame/>
                    </PageLayout>
                  }
                />
                <Route
                  path="/ramadan-&-Eid-Wood"
                  element={
                    <PageLayout>
                <Ramdan/>
                    </PageLayout>
                  }
                />

                {/* Routing for the Neon pages */}
                <Route
                  path="/customize"
                  element={
                    <PageLayout>
              <Customize/>
                    </PageLayout>
                  }
                />
                  <Route
                  path="/celebration-neon"
                  element={
                    <PageLayout>
             <Celebration/>
                    </PageLayout>
                  }
                />
                  <Route
                  path="/festival-neon"
                  element={
                    <PageLayout>
        <Festival/>
                    </PageLayout>
                  }
                />
                  <Route
                  path="/office-&-event"
                  element={
                    <PageLayout>
           <OfficeEvent/>
                    </PageLayout>
                  }
                />

                {/* Routing for the Printing pages  */}
                <Route
                  path="/digital-printing"
                  element={
                    <PageLayout>
                      <DigitalPrinting/>
            
                    </PageLayout>
                  }
                />
                 <Route
                  path="/offset-printing"
                  element={
                    <PageLayout>
                     <OffsetPrinting/>
            
                    </PageLayout>
                  }
                />
                 <Route
                  path="/speciality-prinitng"
                  element={
                    <PageLayout>
                  <SpecialityPrinting/>
            
                    </PageLayout>
                  }
                />
                 <Route
                  path="/large-format"
                  element={
                    <PageLayout>
                      <LargeFormat/>
            
                    </PageLayout>
                  }
                />
                 <Route
                  path="/custom-printing"
                  element={
                    <PageLayout>
               <CustomPrinting/>
            
                    </PageLayout>
                  }
                />

                {/* Routing for the photograpy and videogrpahy */}
                
                <Route
                  path="/event"
                  element={
                    <PageLayout>
            <Event/>
            
                    </PageLayout>
                  }
                />

<Route
                  path="/product"
                  element={
                    <PageLayout>
                      <Product/>
            
                    </PageLayout>
                  }
                />
                 <Route
                  path="/promotional"
                  element={
                    <PageLayout>
            <Promotional/>
            
                    </PageLayout>
                  }
                />
                 <Route
                  path="/special-video"
                  element={
                    <PageLayout>
              <SpecialVideo/>
            
                    </PageLayout>
                  }
                />
                 <Route
                  path="/corporate"
                  element={
                    <PageLayout>
             <Corporate/>
            
                    </PageLayout>
                  }
                />
                {/* Routing for the Exhibition and Events */}
                <Route
                  path="/event-setup"
                  element={
                    <PageLayout>
                      <EventSetup/>
            
            
                    </PageLayout>
                  }
                />
                 <Route
                  path="/services-Photography-&-Videography-Setup"
                  element={
                    <PageLayout>
            <PhotographyandVideogrpahySetup/>
            
                    </PageLayout>
                  }
                />

                {/* Routing for the Maintanance Services */}
                <Route
                  path="/home-maintenance"
                  element={
                    <PageLayout>
                    <HomeMaintenance/>
                    </PageLayout>
                  }
                />
                <Route
                  path="/facility"
                  element={
                    <PageLayout>
                      <Facility />
                    </PageLayout>
                  }
                />
                <Route
                  path="/office"
                  element={
                    <PageLayout>
                      <Office />
                    </PageLayout>
                  }
                />
                <Route
                  path="/specialized"
                  element={
                    <PageLayout>
                      <Specialized />
                    </PageLayout>
                  }
                />
                {/* Routing for the other services */}
                <Route
                  path="/banner"
                  element={
                  <PageLayout>
                    <Banner />
                  </PageLayout>
                  }
                />
                <Route
                  path="/exhibition"
                  element={
                  <PageLayout>
                    <Exhibition />
                  </PageLayout>
                  }
                />
                <Route
                  path="/flag-stand"
                  element={
                  <PageLayout>
                    <Flagstand />
                  </PageLayout>
                  }
                />
                <Route
                  path="/flex"
                  element={
                  <PageLayout>
                    <Flex />
                  </PageLayout>
                  }
                />
                <Route
                  path="/led-neon"
                  element={
                  <PageLayout>
                    <LedNeon />
                  </PageLayout>
                  }
                />
                <Route
                  path="/lighting-poles"
                  element={
                  <PageLayout>
                    <LightingPoles />
                  </PageLayout>
                  }
                />
                <Route
                  path="/merchanding"
                  element={
                  <PageLayout>
                 <Merchanding/>
                  </PageLayout>
                  }
                />
                <Route
                  path="/safety-equipments"
                  element={
                  <PageLayout>
                    <SafetyEquipements />
                  </PageLayout>
                  }
                />
                <Route
                  path="/solar-lights"
                  element={
                  <PageLayout>
                    <SolarLights />
                  </PageLayout>
                  }
                />
                <Route
                  path="/street-signs"
                  element={
                  <PageLayout>
                    <StreetSigns />
                  </PageLayout>
                  }
                />
                <Route
                  path="/vehicle-branding"
                  element={
                  <PageLayout>
                    <VehicleBranding />
                  </PageLayout>
                  }
                />
                {/* Routing for New construction */}
                {/* Routing for New construction */}
                <Route
                  path="/ceiling"
                  element={
                  <PageLayout>
                    <Ceiling />
                  </PageLayout>
                  }
                />
                <Route
                  path="/commercial"
                  element={
                  <PageLayout>
                    <Commercial />
                  </PageLayout>
                  }
                />
                <Route
                  path="/landscaping"
                  element={
                  <PageLayout>
                    <Outdoor />
                  </PageLayout>
                  }
                />
                <Route
                  path="/public"
                  element={
                  <PageLayout>
                    <Public />
                  </PageLayout>
                  }
                />

                {/* Routing added for Rennovation */}
                <Route
                  path="/luxury"
                  element={
                    <PageLayout>
                      <Luxary />
                    </PageLayout>
                  }
                />
                <Route
                  path="/smart-home"
                  element={
                    <PageLayout>
                      <SmartHome />
                    </PageLayout>
                  }
                />
                <Route
                  path="/space-optimization"
                  element={
                    <PageLayout>
                      <SpaceOptimization />
                    </PageLayout>
                  }
                />
                {/* <Route
                  path="/wall-treatments"
                  element={
                    <PageLayout>
              <Walltreatments/>
                    </PageLayout>
                  }
                /> */}
                {/* Routing for the InteriorDesigns */}
                {/* Routing for the Interior Designs */}
                <Route
                  path="/bathroom"
                  element={
                  <PageLayout>
                    <Bathroom />
                  </PageLayout>
                  }
                />
                <Route
                  path="/energy"
                  element={
                  <PageLayout>
                    <Energy />
                  </PageLayout>
                  }
                />
                <Route
                  path="/flooring"
                  element={
                  <PageLayout>
                    <Flooring />
                  </PageLayout>
                  }
                />
                <Route
                  path="/kitchen"
                  element={
                  <PageLayout>
                   <Kitchen/>
                  </PageLayout>
                  }
                />
                {/* Routing for Commercial space */}
                <Route
                  path="/retail-store"
                  element={
                    <PageLayout>
                      <RetialStore />
                    </PageLayout>
                  }
                />
                <Route
                  path="/warehouse"
                  element={
                    <PageLayout>
                      <Warehouse />
                    </PageLayout>
                  }
                />
                <Route
                  path="/office-interior"
                  element={
                    <PageLayout>
                      <OfficeInterior />
                    </PageLayout>
                  }
                />
                <Route
                  path="/hospitality"
                  element={
                    <PageLayout>
                      <Hospitality />
                    </PageLayout>
                  }
                />

                {/* Routing for Structure */}
               
                <Route
                  path="/demolition"
                  element={
                  <PageLayout>
                    <Demolition />
                  </PageLayout>
                  }
                />
                <Route
                  path="/foundation"
                  element={
                  <PageLayout>
                    <Foundation />
                  </PageLayout>
                  }
                />
                <Route
                  path="/masonry"
                  element={
                  <PageLayout>
                    <Masonry />
                  </PageLayout>
                  }
                />
                <Route
                  path="/steel"
                  element={
                  <PageLayout>
                    <Steel />
                  </PageLayout>
                  }
                />
                {/* Routing for the Footer */}

                <Route
                  path="/Ourstory"
                  element={
                  <PageLayout>
              <OurStory/>
                  </PageLayout>
                  }
                />

<Route
                  path="/cancellation"
                  element={
                  <PageLayout>
                  <Cancellation/>
                  </PageLayout>
                  }
                />
                <Route
                  path="/careers"
                  element={
                    <PageLayout>
                    <Careers/>
                    </PageLayout>
                  }
                />
                <Route
                  path="/faq"
                  element={
                  <PageLayout>
                 <FAQ/>
                  </PageLayout>
                  }
                />
                <Route
                  path="/payments"
                  element={
                  <PageLayout>
                  <Payments/>
                  </PageLayout>
                  }
                />
                <Route
                  path="/press-media"
                  element={
                  <PageLayout>
                <PressMedia/>
                  </PageLayout>
                  }
                />
                
                 <Route
                  path="/about"
                  element={
                  <PageLayout>
                    <About/>
          
                  </PageLayout>
                  }
                />

               
                <Route
                  path="/refunds"
                  element={
                  <PageLayout>
               <Refunds/>
                  </PageLayout>
                  }
                />
                <Route
                  path="/returns"
                  element={
                  <PageLayout>
               <Returns/>
                  </PageLayout>
                  }
                />
                <Route
                  path="security"
                  element={
                  <PageLayout>
                <Security/>
                  </PageLayout>
                  }
                />
                <Route
                  path="/shipping"
                  element={
                  <PageLayout>
              <Shipping/>
                  </PageLayout>
                  }
                />
                <Route
                  path="/sitemap"
                  element={
                  <PageLayout>
                <Sitemap/>
                  </PageLayout>
                  }
                />
                <Route
                  path="/store-locator"
                  element={
                  <PageLayout>
              <StoreLocator/>
                  </PageLayout>
                  }
                />
                <Route
                  path="/terms"
                  element={
                  <PageLayout>
                 <TermsConditions/>
                  </PageLayout>
                  }
                />
                <Route
                  path="/track"
                  element={
                  <PageLayout>
                <TrackOrder/>
                  </PageLayout>
                  }
                />
                <Route
                  path="/contactus"
                  element={
                  <PageLayout>
                <ContactUs/>
                  </PageLayout>
                  }
                />
                
                




               
                <Route path="/signin" element={ <PageLayout>
                    <SignIn/>
                    </PageLayout>} />
                <Route path="/signup" element={ <PageLayout>
                    <SignUp/>
                    </PageLayout>} />
              </Routes>
            </CultProvider>
          </PromotionProvider>
        </VoucherProvider>
      </PackageProvider>
      </div>
    </Router>
  );
};
const styles = {
  pageContainer: {
    width: "100vw",
    minHeight: "100vh",
    padding: 0, // Remove any extra padding
    margin: 0,  // Remove any extra margin
    backgroundColor: "#f9f9f9",
  },
};


export default App;
