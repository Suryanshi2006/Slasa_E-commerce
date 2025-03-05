import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SideMenu from "./SidebarMenu";
import HeaderTop from "./HeaderTop";
import HeaderMain from "./HeaderMain";
import HeaderNav from "./HeaderNav";

const PageLayout = ({ children }) => {
  const [showHeaderNav, setShowHeaderNav] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation(); // Get current route
  const isDashboard = location.pathname === "/mpage"; // Check if current page is Dashboard

  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setShowHeaderNav(window.scrollY <= 50);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar - Hide for Dashboard */}
      {!isDashboard && (
        <div className="fixed top-0 left-0 h-full z-20 w-64 max-w-[16rem] overflow-hidden">


          <SideMenu
            className={`h-full w-64 bg-gray-800 text-white transition-transform transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0`}
          />
        </div>
      )}

      {/* Main Content */}
      <div
        className={`flex-grow flex flex-col transition-all duration-300 ${
          isSidebarOpen && !isDashboard ? "md:ml-20" : "ml-0"
        } overflow-x-hidden`} // Fixes the X-axis scrolling
      >
        {/* Header - Hide for Dashboard */}
        {!isDashboard && (
          <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
            {showHeaderNav && <HeaderTop />}
            <HeaderNav />
            <HeaderMain />
          </div>
        )}

        {/* Page Content */}
        <div className="w-full  mx-auto sm:px-6 md:px-8 pt-[230px]">
  {children}
</div>

      </div>

      {/* Mobile Sidebar Toggle - Hide for Dashboard */}
      {!isDashboard && (
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="md:hidden fixed top-4 left-4 z-30 p-2 bg-gray-800 text-white rounded-full"
        >
          {isSidebarOpen ? "Close" : "Open"} Sidebar
        </button>
      )}
    </div>
  );
};

export default PageLayout;
