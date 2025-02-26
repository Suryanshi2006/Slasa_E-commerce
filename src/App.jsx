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

import ProductCard from "./components/ProductCard";

const App = () => {
  return (

      <Router>
        <Routes>
          {/* Routes that need the sidebar */}
          <Route
            path="/"
            element={
              <PageLayout>
                <Home />
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
          <Route
            path="/productlist"
            element={
              <PageLayout>
                <ProductList />
              </PageLayout>
            }
          />

       
          {/* Routes that DO NOT need the sidebar */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
 
  );
};

export default App;
