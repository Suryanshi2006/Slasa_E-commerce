import React from "react";
import HeaderTop from "./components/HeaderTop";
import HeaderNav from "./components/HeaderNav";
import HeaderMain from "./components/HeaderMain";

const App = () => {
  return (
    <div style={{
      backgroundColor: "white", 
      minHeight: "100vh", 
      width: "100vw", 
      overflowX: "hidden"
    }}>
      <HeaderTop />
      <HeaderNav />
      <HeaderMain />
    </div>
  );
};

export default App;
