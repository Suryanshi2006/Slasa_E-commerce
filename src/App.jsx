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
