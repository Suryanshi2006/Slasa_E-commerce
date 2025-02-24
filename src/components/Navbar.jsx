import React, { useState } from "react";
import Sidebar from "../components/Sidebar";


const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="navbar">
      <button onClick={() => setSidebarOpen(!isSidebarOpen)}>📂 Menu</button>
      <Sidebar isOpen={isSidebarOpen} />
    </div>
  );
};

export default Navbar;
