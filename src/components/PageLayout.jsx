import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SideMenu from "./SidebarMenu";
import HeaderTop from "./HeaderTop";
import HeaderMain from "./HeaderMain";
import HeaderNav from "./HeaderNav";

const PageLayout = ({ children }) => {
  const [showHeaderNav, setShowHeaderNav] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation(); 
  const isDashboard = location.pathname === "/mpage"; 

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
    <div className="flex min-h-screen bg-white overflow-hidden">
      {/* Sidebar - Hide for Dashboard */}
      {!isDashboard && (
        <div className={`fixed top-0 left-0 h-full z-20 bg-gray-800 transition-all duration-300 ${
          isSidebarOpen ? "w-0" : "w-0"
        }`}>
          <SideMenu
            className={`h-full text-white transition-transform transform ${
              isSidebarOpen ? "translate-x-0 w-64" : "-translate-x-full w-0"
            } md:translate-x-0`}
          />
        </div>
      )}

      {/* Main Content */}
      <div
        className={`flex-grow flex flex-col transition-all duration-300 ${
          isSidebarOpen && !isDashboard ? "md:ml-[-10px]" : "ml-0"
        } overflow-x-hidden`}
      >
        {/* Header - Hide for Dashboard */}
        {!isDashboard && (
          <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
            {showHeaderNav && <HeaderTop />}
            <HeaderNav />
            <HeaderMain />
          </div>
        )}

        {/* Page Content - Full Width */}
        <div className="w-full px-0 md:px-0 lg:px-0 xl:px-0 pt-[170px]">
          {children}
        </div>
      </div>

      {/* Mobile Sidebar Toggle - Hide for Dashboard */}
      {!isDashboard && (
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="md:hidden fixed top-4 left-4 z-30 p-2 bg-white text-white rounded-full"
        >
          {isSidebarOpen ? "Close" : "Open"} Sidebar
        </button>
      )}
    </div>
  );
};

export default PageLayout;
