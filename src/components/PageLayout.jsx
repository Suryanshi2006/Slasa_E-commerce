import React from "react";
 // Assuming you have a sidebar component
import SideMenu from "./SidebarMenu";

const PageLayout = ({ children }) => {
  return (
    <div className="app-container">
      <SideMenu/>

 
      <div className="main-content">{children}</div>
    </div>
  );
};

export default PageLayout;
