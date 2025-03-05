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
              

                <Route
                  path="*"
                  element={
                    <PageLayout>
                      <div>404 Not Found</div>
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
                  path="/customer"
                  element={
                    <PageLayout>
                      <CustomerSection />
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
