import React, { useState, useEffect } from "react";
import SideMenu from "./SidebarMenu.jsx";
import HeaderTop from "./HeaderTop";
import HeaderMain from "./HeaderMain";
import HeaderNav from "./HeaderNav";

const PageLayout = ({ children }) => {
  const [showHeaderNav, setShowHeaderNav] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const headerHeight = showHeaderNav ? 180 : 180;

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
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <SideMenu
        className={`fixed top-0 left-0 z-10 w-64 bg-gray-800 text-white transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`} 
      />

      {/* Main Content Area */}
      <div
  className={`flex-grow ml-16 ${isSidebarOpen ? "" : "md:ml-0"} flex justify-center`} 
  style={{ marginTop: `${headerHeight}px` }}
>
  <div className="w-full max-w-7xl px-4 sm:px-6 md:px-8">
    {/* Header */}
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
      {showHeaderNav && <HeaderTop />}
      <HeaderNav />
      <HeaderMain />
    </div>

    {/* Page Content */}
    <div className="mt-20">{children}</div> {/* Added padding for responsiveness */}
  </div>
</div>


      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-20 p-2 bg-gray-800 text-white rounded-full"
      >
        {isSidebarOpen ? "Close" : "Open"} Sidebar
      </button>
    </div>
  );
};

export default PageLayout;
