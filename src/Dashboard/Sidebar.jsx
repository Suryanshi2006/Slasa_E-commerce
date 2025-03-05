import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { FaAngleRight, FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import { FaCartArrowDown, FaUserAlt } from "react-icons/fa";
import { IoIosNotifications, IoIosSettings } from "react-icons/io";
import { IoLogIn } from "react-icons/io5";
import { TbBrandProducthunt } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { FaHandsHelping } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import { SiWelcometothejungle } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";


const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="flex-grow">
      {/* Sidebar Toggle Button */}
      <button
        className="md:hidden absolute top-4 left-4 z-50 !bg-red-800 text-white p-2 rounded"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar */}
      <div
  className={`${
    isSidebarOpen ? "w-72" : "w-0"
  } bg-gray-800 text-white h-screen transition-all duration-300 fixed left-0 top-0 overflow-y-auto`}
>

        {/* Logo */}
        <div className="flex justify-center py-4">
          <Link to="/" className="flex items-center">
            <img src="./logo.png" alt="Logo" className="w-16 h-auto rounded-full" />
            {isSidebarOpen && <span className="ml-3 font-semibold text-4xl">Slasa</span>}
          </Link>
        </div>

        {/* Sidebar Menu */}
        <div className="mt-4">
          <Link to="/dashboard" className="sidebar-btn">
            <MdOutlineDashboard className="icon" />
            {isSidebarOpen && "Dashboard"}
          </Link>

          {/* Products with Dropdown */}
          <div>
            <button
              className="sidebar-btn flex justify-between"
              onClick={() => setShowProducts(!showProducts)}
            >
              <div className="flex items-center">
                <TbBrandProducthunt className="icon" />
                {isSidebarOpen && "Products"}
              </div>
              {isSidebarOpen && (showProducts ? <FaAngleDown /> : <FaAngleRight />)}
            </button>

            {/* Submenu */}
            {showProducts && isSidebarOpen && (
              <div className="ml-6 mt-2 space-y-2">
                <Link to="/products/list" className="submenu-item">
                 Products List
                </Link>
                <Link to="/products/details" className="submenu-item">
                Product Details
                </Link>
                <Link to="/products/upload" className="submenu-item">
                Product Upload
             
                </Link>
              </div>
            )}
          </div>

          <Link to="/orders" className="sidebar-btn">
            <FaCartArrowDown className="icon" />
            {isSidebarOpen && "Orders"}
          </Link>

          <Link to="/notifications" className="sidebar-btn">
            <IoIosNotifications className="icon" />
            {isSidebarOpen && "Notifications"}
          </Link>

          <Link to="/settings" className="sidebar-btn">
            <IoIosSettings className="icon" />
            {isSidebarOpen && "Settings"}
          </Link>
          <h6 className="text-2xl flex justify-start pt-4">Authentication</h6>

          <Link to="/login" className="sidebar-btn">
            <IoLogIn className="icon" />
            {isSidebarOpen && "Login"}
          </Link>

          <Link to="/signup" className="sidebar-btn">
            <FaUserAlt className="icon" />
            {isSidebarOpen && "SignUp"}
          </Link>
          <Link to="/settings" className="sidebar-btn">
          <IoMdLock className="icon" />
            {isSidebarOpen && "Forget Password"}
          </Link>
          <Link to="/settings" className="sidebar-btn">
          <FaRegMessage className="icon"/>
            {isSidebarOpen && "OTP"}
          </Link>
          <Link to="/settings" className="sidebar-btn">
          <FaHandsHelping className="icon" />
            {isSidebarOpen && "Help"}
          </Link>
          <Link to="/settings" className="sidebar-btn">
          <CgProfile  className="icon" />
            {isSidebarOpen && "Profile"}
          </Link>
          <Link to="/settings" className="sidebar-btn">
          <SiWelcometothejungle  className="icon"/>
            {isSidebarOpen && "Welcome"}
          </Link>
          <Link to="/settings" className="sidebar-btn">
          <VscServerProcess  className="icon"/>
            {isSidebarOpen && "Comming Soon"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
