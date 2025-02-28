import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { VoucherProvider } from "./context/VoucherContext"; // Import VoucherProvider
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
import { PackageProvider } from "./context/PackageContext";

const App = () => {
  return (
    <PackageProvider>
    <VoucherProvider> {/* Wrap your app with VoucherProvider */}
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
                <NewArrivals />
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
            path="/accountsettings"
            element={
              <PageLayout>
                <AccountSettings />
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
            path="/toprated"
            element={
              <PageLayout>
                <TopRated />
              </PageLayout>
            }
          />
          {/* ✅ Product List Page */}
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
          {/* Dynamic Category Routes */}
          <Route
            path="/:category"
            element={
              <PageLayout>
                <ProductList />
              </PageLayout>
            }
          />
          {/* ✅ Authentication Pages (Without Sidebar) */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </VoucherProvider>
    </PackageProvider>
  );
};

export default App;
