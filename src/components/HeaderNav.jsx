import React from "react";
import { FaRegHeart, FaShoppingCart, FaGlobe, FaUser, FaSearch } from "react-icons/fa";

const HeaderNav = () => {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "white", 
      color: "black", 
      padding: "10px 20px",
      width: "100%",
      maxWidth: "1600px",
      margin: "auto",
      boxSizing: "border-box"
    }}>
      
      {/* 🔍 Logo */}
      <div style={{ fontSize: "26px", fontWeight: "bold", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" }}>
        <img 
          src="/logo.png" 
          alt="Logo" 
          style={{ 
            height: "80px",  // Adjust size
            borderRadius: "50%", 
            width: "100px", // This creates the oval or circular shape
          }} 
        />
      </div>

      {/* 🔎 Search Bar */}
      <div style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "6px",
        overflow: "hidden",
        width: "50%",
        maxWidth: "600px",
        border: "1px solid lightgray",
      }}>
        
        {/* Category Dropdown */}
        <select style={{
          backgroundColor: "#e8eded",
          border: "none",
          padding: "10px",
          cursor: "pointer",
          outline: "none",
          fontSize: "14px",
          color: "black",
        }}>
          <option>All</option>
          <option>Electronics</option>
          <option>Fashion</option>
          <option>Home & Kitchen</option>
          <option>Books</option>
        </select>

        {/* Input Field */}
        <input 
          type="text" 
          placeholder="Search Slasa.in"
          style={{
            flex: "1",
            padding: "10px",
            border: "none",
            outline: "none",
            fontSize: "14px",
            backgroundColor: "white",
            color: "black",
          }}
        />

        {/* Search Button */}
        <button style={{
          backgroundColor: "#febd69",
          border: "none",
          padding: "10px 15px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <FaSearch style={{ color: "black", fontSize: "18px" }} />
        </button>
        
      </div>

      {/* 👤 User Options */}
      <div style={{ display: "flex", gap: "20px", alignItems: "center", fontSize: "18px" }}>
        <span style={{ cursor: "pointer", transition: "0.3s", display: "flex", alignItems: "center", gap: "10px" }}>
          💲
        </span> 

        <span style={{ cursor: "pointer", transition: "0.3s", display: "flex", alignItems: "center", gap: "10px" }}>
          <FaUser />
          Sign In / Sign Up
        </span> 

        <span style={{ cursor: "pointer", transition: "0.3s" }}>
          <FaRegHeart />
        </span> 

        <span style={{ cursor: "pointer", transition: "0.3s", display: "flex", alignItems: "center", gap: "10px" }}>
          <FaShoppingCart />
        </span>

        <span style={{ cursor: "pointer", transition: "0.3s", display: "flex", alignItems: "center", gap: "10px" }}>
          <FaGlobe />
        </span>
      </div>

    </div>
  );
};

export default HeaderNav;
