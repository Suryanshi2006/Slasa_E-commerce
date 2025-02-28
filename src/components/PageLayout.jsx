import React, { useState, useEffect } from "react";
import SideMenu from "./SidebarMenu.jsx";
import HeaderTop from "./HeaderTop";
import HeaderMain from "./HeaderMain";
import HeaderNav from "./HeaderNav";

const PageLayout = ({ children }) => {
  const [showHeaderNav, setShowHeaderNav] = useState(true);
  const headerHeight = showHeaderNav ? 240 : 190;

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
      <SideMenu className="fixed top-0 left-0 z-10 w-64 bg-gray-800 text-white" />

      {/* Main Content Area */}
      <div
        className="flex-grow ml-64" // This ensures the content shifts right
        style={{ marginTop: `${headerHeight}px` }}
      >
        <div className="w-full">
          {/* Header */}
          <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
            {showHeaderNav && <HeaderTop />}
            <HeaderNav />
            <HeaderMain />
          </div>

          {/* Page Content */}
          <div className="mt-20">{children}</div> {/* Adjust margin-top to prevent content overlap */}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
