import React, { useState, useEffect } from "react";
import SideMenu from "./SidebarMenu.jsx";
import HeaderTop from "./HeaderTop";
import HeaderMain from "./HeaderMain";
import HeaderNav from "./HeaderNav";

const PageLayout = ({ children }) => {
  const [showHeaderNav, setShowHeaderNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowHeaderNav(false); // Hide HeaderNav on scroll
      } else {
        setShowHeaderNav(true); // Show HeaderNav when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      {/* Fixed Top Header */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      {showHeaderNav &&    <HeaderTop /> } {/* Show HeaderNav only if scrolling is at the top */}
        <HeaderNav />
        <HeaderMain />
       
       
      </div>

      {/* Page Content */}
      <div className="flex flex-grow mt-[120px]">
        {/* Sidebar */}
        <SideMenu className="w-64 fixed h-full bg-gray-100 shadow-md" />

        {/* Main Content Area */}
        <div className="flex-grow p-4 ml-64">{children}</div>
      </div>
    </div>
  );
};

export default PageLayout;
