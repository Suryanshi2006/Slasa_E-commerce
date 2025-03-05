import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { VoucherProvider } from "./context/VoucherContext";
import { PackageProvider } from "./context/PackageContext";
import { PromotionProvider } from "./context/PromotionContext"; // ✅ Import PromotionProvider


import Home from "./pages/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import CustomerSection from "./components/CustomerSection";
import AccountSection from "./components/AccountSection";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import PageLayout from "./components/PageLayout";
import Acrylic from "./pages/Acrylic";
import CartPage from "./components/Cartpage";
import NewArrivals from "./pages/NewArrivals";
import TodayDeals from "./pages/TodayDeals";
import Construction from "./pages/Construction";
import Rennovation from "./pages/Rennovation";
import Photography from "./pages/Photography";
import Printing from "./pages/Printing";
import Wishlist from "./components/WishList";
import AccountSettings from "./components/AccountSettings";
import TopRated from "./components/TopRated";

import AllTimeBest from "./Sidebar/BestSellerPages/AllTimeBest";
import Exclusive from "./Sidebar/BestSellerPages/Exclusive";
import StaffPick from "./Sidebar/BestSellerPages/StaffPick";
import Top from "./Sidebar/BestSellerPages/Top";

import BundleOffers from "./Sidebar/TrendingProductsPages/BundleOffers";
import Clearance from "./Sidebar/TrendingProductsPages/Clearance";
import FlashDeals from "./Sidebar/TrendingProductsPages/FlashDeals";

import Backinstock from "./Sidebar/NewArrivals/Backinstock";
import Handmade from "./Sidebar/NewArrivals/Handmade";
import Influencer from "./Sidebar/NewArrivals/Influencer";
import Mostsold from "./Sidebar/NewArrivals/Mostsold";

import Comparisons from "./Sidebar/CustomerReviewPages/Comparisons";
import Verified from "./Sidebar/CustomerReviewPages/Verified";
// import AcrylicSheet from "./Sidebar/AcrylicPages/AcrylicSheet";
// import AcrylicWood from "./Sidebar/AcrylicPages/AcrylicWood";
// import MWood from "./Sidebar/AcrylicPages/MWood";
import WallDecor from "./Sidebar/AcrylicPages/MWood";

import Acrylicprints from "./Sidebar/UvPrinting/Acrylicprints";
import CanvasArt from "./Sidebar/UvPrinting/CanvasArt";
import CustomeFrames from "./Sidebar/UvPrinting/CustomeFrames";
import Decorative from "./Sidebar/UvPrinting/Decorative";

import FreshFlowers from "./Sidebar/FlowersandPlantsPages/FreshFlowers";
import IndoorPlants from "./Sidebar/FlowersandPlantsPages/IndoorPlants";
import LimitedEdition from "./Sidebar/FlowersandPlantsPages/LimitedEdition";
import OutdoorPlants from "./Sidebar/FlowersandPlantsPages/OutdoorPlants";

import Banner from "./Sidebar/OtherServices/Banner";
import Exhibition from "./Sidebar/OtherServices/Exhibition";
import Flagstand from "./Sidebar/OtherServices/Flagstand";
import Flex from "./Sidebar/OtherServices/Flex";
import LedNeon from "./Sidebar/OtherServices/LedNeon";
import LightingPoles from "./Sidebar/OtherServices/LightingPoles";
import Merchanding from "./Sidebar/OtherServices/Merchanding";
import SafetyEquipements from "./Sidebar/OtherServices/SafetyEquipements";
import SolarLights from "./Sidebar/OtherServices/SolarLights";
import StreetSigns from "./Sidebar/OtherServices/StreetSigns";
import VehicleBranding from "./Sidebar/OtherServices/VehicleBranding";

import CustomPrinting from "./Sidebar/PrintingPages/CustomPrinting";
import DigitalPrinting from "./Sidebar/PrintingPages/DigitalPrinting";
import LargeFormat from "./Sidebar/PrintingPages/LargeFormat";
import OffsetPrinting from "./Sidebar/PrintingPages/OffsetPrinting";
import SpecialityPrinting from "./Sidebar/PrintingPages/SpecialityPrinting";

import Corporate from "./Sidebar/PhotoVideoPages/Corporate";
import Event from "./Sidebar/PhotoVideoPages/Event";
import Product from "./Sidebar/PhotoVideoPages/Product";
import Promotional from "./Sidebar/PhotoVideoPages/Promotional";
import SpecialVideo from "./Sidebar/PhotoVideoPages/SpecialVideo";

import Facility from "./Sidebar/MaintanencePages/Facility";
import HomeMaintenance from "./Sidebar/MaintanencePages/HomeMaintenance";
import Office from "./Sidebar/MaintanencePages/Office";
import Specialized from "./Sidebar/MaintanencePages/Specialized";
import Ceiling from "./Sidebar/NewConstruction/Ceiling";
import Commercial from "./Sidebar/NewConstruction/Commercial";
import Outdoor from "./Sidebar/NewConstruction/Outdoor";
import Public from "./Sidebar/NewConstruction/Public";
import walltreatments from "./Sidebar/HomeRennovationPages/walltreatments";

import Luxary from "./Sidebar/HomeRennovationPages/Luxary";
import SmartHome from "./Sidebar/HomeRennovationPages/SmartHome";
import SpaceOptimization from "./Sidebar/HomeRennovationPages/SpaceOptimization";
import Bathroom from "./Sidebar/InteriorDesign/Bathroom";
import Energy from "./Sidebar/InteriorDesign/Energy";
import Flooring from "./Sidebar/InteriorDesign/Flooring";
import Kitchen from "./Sidebar/InteriorDesign/Kitchen";
import Hospitality from "./Sidebar/Commercial/Hospitality";
import OfficceInterior from "./Sidebar/Commercial/OfficceInterior";
import RetialStore from "./Sidebar/Commercial/RetialStore";
import Warehouse from "./Sidebar/Commercial/Warehouse";

import Demolition from "./Sidebar/Structure/Demolition";
import Foundation from "./Sidebar/Structure/Foundation";
import Masonry from "./Sidebar/Structure/Masonry";
import Steel from "./Sidebar/Structure/Steel";
import { CultProvider } from "./context/CultContext";
import AcrylicSheet from "./Sidebar/AcrylicPages/AcrylicSheet";
import AcrylicWood from "./Sidebar/AcrylicPages/AcrylicWood";
import MWood from "./Sidebar/AcrylicPages/MWood";
import Easel from "./Sidebar/Wood/Easel";
import CustomizeWood from "./Sidebar/Wood/CustomizeWood";
import Ramdan from "./Sidebar/Wood/Ramdan";
import WoodFrame from "./Sidebar/Wood/WoodFrame";
import WoodSheets from "./Sidebar/Wood/WoodSheets";
import WoodShelves from "./Sidebar/Wood/WoodShelves";
import Festival from "./Sidebar/Neon/Festival";
import Celebration from "./Sidebar/Neon/Celebration";
import OfficeEvent from "./Sidebar/Neon/OfficeEvent";
import Customize from "./Sidebar/Neon/Customize";
import Checkout from "./components/Checkout";
import MainPage from "./Dashboard/MainPage";
import Dashboard from "./Dashboard/Dashboard";






const App = () => {

  return (
    
    <Router>
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
                 <Route path="/dashboard" exact={true} element={<Dashboard/>}/>

                <Route
                  path="*"
                  element={
                    <PageLayout>
                      <div>404 Not Found</div>
                    </PageLayout>
                  }
                />
                <Route
                  path="/back-in-stock"
                  element={
                    <PageLayout>
                      <Backinstock />
                    </PageLayout>
                  }
                />
                <Route
                  path="/sheets"
                  element={
                    <PageLayout>
                      <AcrylicSheet />
                    </PageLayout>
                  }
                />
               

                <Route
                  path="/wall-treatments"
                  element={
                    <PageLayout>
                      <walltreatments />
                    </PageLayout>
                  }
                />
                <Route
                  path="/checkout"
                  element={
                    <PageLayout>
                    <Checkout/>
                    </PageLayout>
                  }
                />
              
                <Route
                  path="/wood"
                  element={
                    <PageLayout>
                      <AcrylicWood />
                    </PageLayout>
                  }
                />
                 <Route
                  path="/mpage"
                  element={
                    <PageLayout>
                      <MainPage/>
                    </PageLayout>
                  }
                />

                <Route
                  path="/mwood"
                  element={
                    <PageLayout>
                      <MWood />
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
                <Route
                  path="/office-interior"
                  element={
                    <PageLayout>
                      <OfficceInterior />
                    </PageLayout>
                  }
                />
                <Route
                  path="/retial-store"
                  element={
                    <PageLayout>
                      <RetialStore />
                    </PageLayout>
                  }
                />
                <Route
                  path="/bathroom"
                  element={
                    <PageLayout>
                      <Bathroom />
                    </PageLayout>
                  }
                />

                <Route
                  path="/customize-wood"
                  element={
                    <PageLayout>
                      <CustomizeWood />
                    </PageLayout>
                  }
                />

                <Route
                  path="/ramadan-&-Eid-Wood"
                  element={
                    <PageLayout>
                      <Ramdan />
                    </PageLayout>
                  }
                />
                <Route
                  path="/wood-frame"
                  element={
                    <PageLayout>
                      <WoodFrame />
                    </PageLayout>
                  }
                />
                <Route
                  path="/wood-Sheet"
                  element={
                    <PageLayout>
                      <WoodSheets />
                    </PageLayout>
                  }
                />
                <Route
                  path="wood-shelves"
                  element={
                    <PageLayout>
                      <WoodShelves />
                    </PageLayout>
                  }
                />

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
                <Route
                  path="/warehouse"
                  element={
                    <PageLayout>
                      <Warehouse />
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
                      <Kitchen />
                    </PageLayout>
                  }
                />
                <Route
                  path="/wall-decor"
                  element={
                    <PageLayout>
                      <WallDecor />
                    </PageLayout>
                  }
                />

                <Route
                  path="/handmade"
                  element={
                    <PageLayout>
                      <Handmade />
                    </PageLayout>
                  }
                />
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
                  path="/outdoor"
                  element={
                    <PageLayout>
                      <Outdoor />
                    </PageLayout>
                  }
                />
                <Route
                  path="/luxary"
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
                <Route
                  path="/public"
                  element={
                    <PageLayout>
                      <Public />
                    </PageLayout>
                  }
                />

                <Route
                  path="/verified"
                  element={
                    <PageLayout>
                      <Verified />
                    </PageLayout>
                  }
                />

                <Route
                  path="/comparisons"
                  element={
                    <PageLayout>
                      <Comparisons />
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
                  path="/home-maintenance"
                  element={
                    <PageLayout>
                      <HomeMaintenance />
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
                <Route
                  path="/influencer"
                  element={
                    <PageLayout>
                      <Influencer />
                    </PageLayout>
                  }
                />
                <Route
                  path="/corporate"
                  element={
                    <PageLayout>
                      <Corporate />
                    </PageLayout>
                  }
                />
                <Route
                  path="/event"
                  element={
                    <PageLayout>
                      <Event />
                    </PageLayout>
                  }
                />
                <Route
                  path="/product"
                  element={
                    <PageLayout>
                      <Product />
                    </PageLayout>
                  }
                />
                <Route
                  path="/promotional"
                  element={
                    <PageLayout>
                      <Promotional />
                    </PageLayout>
                  }
                />
                <Route
                  path="/special-video"
                  element={
                    <PageLayout>
                      <SpecialVideo />
                    </PageLayout>
                  }
                />

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
                {/* <Route
                path="/flex"
                element={
                  <PageLayout>
                    <Flex />
                  </PageLayout>
                }
              /> */}
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
                      <Merchanding />
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

                <Route
                  path="/custom-printing"
                  element={
                    <PageLayout>
                      <CustomPrinting />
                    </PageLayout>
                  }
                />
                <Route
                  path="/digital-printing"
                  element={
                    <PageLayout>
                      <DigitalPrinting />
                    </PageLayout>
                  }
                />
                <Route
                  path="/large-format"
                  element={
                    <PageLayout>
                      <LargeFormat />
                    </PageLayout>
                  }
                />
                <Route
                  path="/offset-printing"
                  element={
                    <PageLayout>
                      <OffsetPrinting />
                    </PageLayout>
                  }
                />
                <Route
                  path="/speciality-prinitng"
                  element={
                    <PageLayout>
                      <SpecialityPrinting />
                    </PageLayout>
                  }
                />

                <Route
                  path="/fresh-flowers"
                  element={
                    <PageLayout>
                      <FreshFlowers />
                    </PageLayout>
                  }
                />
                <Route
                  path="/indoor-plants"
                  element={
                    <PageLayout>
                      <IndoorPlants />
                    </PageLayout>
                  }
                />
                <Route
                  path="/outdoor-plants"
                  element={
                    <PageLayout>
                      <OutdoorPlants />
                    </PageLayout>
                  }
                />
                <Route
                  path="/limited-edition"
                  element={
                    <PageLayout>
                      <LimitedEdition />
                    </PageLayout>
                  }
                />

                <Route
                  path="/acrylic-prints"
                  element={
                    <PageLayout>
                      <Acrylicprints />
                    </PageLayout>
                  }
                />
                <Route
                  path="/canvas-art"
                  element={
                    <PageLayout>
                      <CanvasArt />
                    </PageLayout>
                  }
                />
                <Route
                  path="/custome-frames"
                  element={
                    <PageLayout>
                      <CustomeFrames />
                    </PageLayout>
                  }
                />
                <Route
                  path="/decorative"
                  element={
                    <PageLayout>
                      <Decorative />
                    </PageLayout>
                  }
                />
                <Route
                  path="/most-sold"
                  element={
                    <PageLayout>
                      <Mostsold />
                    </PageLayout>
                  }
                />

                <Route
                  path="/flash-deals"
                  element={
                    <PageLayout>
                      <FlashDeals />
                    </PageLayout>
                  }
                />
                <Route
                  path="/bundle-offers"
                  element={
                    <PageLayout>
                      <BundleOffers />
                    </PageLayout>
                  }
                />
                <Route
                  path="/clearance"
                  element={
                    <PageLayout>
                      <Clearance />
                    </PageLayout>
                  }
                />

                <Route
                  path="/all-time-best"
                  element={
                    <PageLayout>
                      <AllTimeBest />
                    </PageLayout>
                  }
                />
                <Route
                  path="/new"
                  element={
                    <PageLayout>
                      <NewArrivals />
                    </PageLayout>
                  }
                />
                <Route
                  path="/exclusive"
                  element={
                    <PageLayout>
                      <Exclusive />
                    </PageLayout>
                  }
                />

                <Route
                  path="/staff-pick"
                  element={
                    <PageLayout>
                      <StaffPick />
                    </PageLayout>
                  }
                />
                <Route
                  path="/top"
                  element={
                    <PageLayout>
                      <Top />
                    </PageLayout>
                  }
                />

                <Route
                  path="/walldecor"
                  element={
                    <PageLayout>
                      <ProductList category="walldecor" />
                    </PageLayout>
                  }
                />

                <Route
                  path="/wood-easel-canvas"
                  element={
                    <PageLayout>
                      <Easel />
                    </PageLayout>
                  }
                />
                <Route
                  path="/accountsettings"
                  element={
                    <PageLayout>
                      <AccountSettings />
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
                  path="/flex"
                  element={
                    <PageLayout>
                      <Flex />
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
                      <AccountSection />
                    </PageLayout>
                  }
                />
                <Route
                  path="/toprated"
                  element={
                    <PageLayout>
                      <TopRated />
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
                  path="/festival-neon"
                  element={
                    <PageLayout>
                      <Festival />
                    </PageLayout>
                  }
                />

                <Route
                  path="/celebration-neon"
                  element={
                    <PageLayout>
                      <Celebration />
                    </PageLayout>
                  }
                />
                <Route
                  path="/office-&-event"
                  element={
                    <PageLayout>
                      <OfficeEvent />
                    </PageLayout>
                  }
                />
                <Route
                  path="/customizes"
                  element={
                    <PageLayout>
                      <Customize />
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
    </Router>
  );
};

export default App;
