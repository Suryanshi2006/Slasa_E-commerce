import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import CustomerSection from "./components/CustomerSection";
import AccountSection from "./components/AccountSection";
import BestSellers from "./components/BestSellers";
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

const App = () => {
  return (
    <Router>
      <Routes>
        {/* ✅ Home Page */}
        <Route
          path="/"
          element={
            <PageLayout>
              <Home />
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
          path="/construction"
          element={
            <PageLayout>
             <Construction/>
            </PageLayout>
          }
        />
        <Route
          path="/rennovation"
          element={
            <PageLayout>
               <Rennovation/>
            </PageLayout>
          }
        />
         <Route
          path="/photography"
          element={
            <PageLayout>
            <Photography/>
            </PageLayout>
          }
        />
         <Route
          path="/printing"
          element={
            <PageLayout>
           <Printing/>
            </PageLayout>
          }
        />

        
        {/* ✅ Category Pages */}
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
              <AccountSection />
            </PageLayout>
          }
        />
        <Route
          path="/top-rated"
          element={
            <PageLayout>
              <BestSellers />
            </PageLayout>
          }
        />

        {/* ✅ Product List Page */}
        <Route
          path="/products"
          element={
            <PageLayout>
              <ProductList />
            </PageLayout>
          }
        />

        {/* ✅ Product Detail Page (Fixing Blank Screen Issue) */}
        <Route
          path="/product/:id"
          element={
            <PageLayout>
              <ProductDetail />
            </PageLayout>
          }
        />
          

        {/* ✅ Cart Page */}
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
           <Wishlist/>
            </PageLayout>
          }
        />
        <Route
          path="/deals"
          element={
            <PageLayout>
              
            <TodayDeals/>
            </PageLayout>
          }
        />

        {/* ✅ Authentication Pages (Without Sidebar) */}
        <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
      
      </Routes>
    </Router>
  );
};

export default App;
