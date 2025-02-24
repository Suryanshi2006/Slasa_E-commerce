import React from "react";

const DropdownMenu = () => {
  return (
    <div style={{
      backgroundColor: "white",
      color: "black",
      padding: "20px",
      margin: "10px 0",
      borderRadius: "10px",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
      maxWidth: "300px"
    }}>
      {/* User Greeting */}
      <div style={{ fontWeight: "bold", fontSize: "18px", borderBottom: "2px solid gray", paddingBottom: "10px" }}>
        👤 Hello, Sign In
      </div>

      {/* Trending Section */}
      <div style={{ marginTop: "15px" }}>
        <h3>🔥 Trending</h3>
        <p>Best Sellers →</p>
        <p>Trending Products →</p>
        <p>New Arrivals →</p>
        <p>Back in Stock →</p>
        <p>Offers and Discounts →</p>
      </div>

      {/* Shop Section */}
      <div style={{ marginTop: "15px" }}>
        <h3>🛍️ Shop</h3>
        <p>✨ Acrylic Accessories →</p>
        <p>🖼️ UV Printing Wall Art →</p>
        <p>📔 Stationery →</p>
        <p>👶 Toys →</p>
        <p>🌿 Flowers & Plants →</p>
      </div>

      {/* Services */}
      <div style={{ marginTop: "15px" }}>
        <h3>🛠️ Services</h3>
        <p>🖨️ Printing Services →</p>
        <p>📷 Photography & Videography →</p>
        <p>🔧 Maintenance Services →</p>
      </div>

      {/* Construction */}
      <div style={{ marginTop: "15px" }}>
        <h3>🏗️ Construction</h3>
        <p>🏠 Home Renovation →</p>
        <p>🛋️ Interior Design →</p>
        <p>🏢 Commercial Remodeling →</p>
      </div>

      {/* Help */}
      <div style={{ marginTop: "15px" }}>
        <h3>⚙️ Help & Settings</h3>
        <p>Your Account →</p>
        <p>Customer Section →</p>
        <p>Sign In →</p>
      </div>
    </div>
  );
};

export default DropdownMenu;
