import React from "react";

const SideMenu = ({ isOpen, onClose }) => {
  return (
    <div style={{ 
      ...styles.sideMenu, 
      transform: isOpen ? "translateX(0)" : "translateX(-100%)" 
    }}>
      {/* Close Button (Always Visible) */}
      <div style={styles.closeButton} onClick={onClose}>
        ✖
      </div>

      {/* 🔥 Side Menu Header */}
      <div style={styles.header}>
        <h2> 👨🏻 Hello, Sign In</h2>
      </div>

      {/* 🔥 Amazon-Style Menu Sections */}
      <MenuSection title="Trending">
        <MenuItem text="Best Sellers" link="/bestsellers" />
        <MenuItem text="Trending Products" link="/trending-products" />
        <MenuItem text="New Arrival" link="/new-arrivals" />
        <MenuItem text="Back in Stocks" link="/back-in-stock" />
        <MenuItem text="Offers and Discounts" link="/offers-discounts" />
      </MenuSection>

      <MenuSection title="Shop">
        <MenuItem text="Acrylic Accessories ✨" link="/acrylic-accessories" />
        <MenuItem text="UV Printing Wall Art 🖼️" link="/uv-printing" />
        <MenuItem text="Stationery ✏️" link="/stationery" />
        <MenuItem text="Toys ⚠️" link="/toys" />
        <MenuItem text="Flowers & Plants 🌿" link="/flowers-plants" />
      </MenuSection>

      <MenuSection title="Services">
        <MenuItem text="Printing Services 🖨️" link="/printing-services" />
        <MenuItem text="Photography & Videography 🎥📷" link="/photo-video" />
        <MenuItem text="Maintenance Services 🛠️" link="/maintenance" />
      </MenuSection>

      <MenuSection title="Construction & Renovation 🏗️">
        <MenuItem text="New Construction 🏠" link="/new-construction" />
        <MenuItem text="Home Renovation 🏡" link="/home-renovation" />
        <MenuItem text="Interior Design 🛋️" link="/interior-design" />
        <MenuItem text="Commercial Space Remodeling 🏢" link="/commercial-remodeling" />
        <MenuItem text="Structural & Civil Works ⚒️" link="/structural-works" />
      </MenuSection>

      <MenuSection title="Help and Settings">
        <MenuItem text="Your Account" link="/account" />
        <MenuItem text="Customer Section" link="/customer" />
        <MenuItem text="Sign In" link="/signin" />
      </MenuSection>
    </div>
  );
};

// 📌 **Menu Section Component**
const MenuSection = ({ title, children }) => {
  return (
    <div style={styles.menuSection}>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

// 📌 **Menu Item Component (🔥 Amazon-Like Hover Effect)**
const MenuItem = ({ text, link }) => {
  return (
    <a href={link} style={styles.menuItem} className="menu-item">
      {text} ➝
    </a>
  );
};

// 📌 **Styles (Amazon-Level Perfection)**
const styles = {
  sideMenu: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "320px",
    height: "100vh",
    backgroundColor: "#fff",
    boxShadow: "2px 0 10px rgba(0,0,0,0.2)",
    overflowY: "auto",
    transition: "transform 0.3s ease-in-out",
    padding: "10px 15px",
    zIndex: 1000,
  },
  closeButton: {
    position: "sticky",
    top: "0",
    right: "0",
    backgroundColor: "#fff",
    padding: "10px",
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer",
    textAlign: "right",
    borderBottom: "1px solid #ddd",
    zIndex: 1001, // Ensures visibility while scrolling 
  },
  header: {
    backgroundColor: "#3087D1", 
    color: "#fff",
    padding: "15px",
    borderRadius: "3px",
    fontWeight: "bold",
  },
  menuSection: {
    padding: "15px 0",
    borderBottom: "1px solid #ddd",
  },
  menuItem: {
    display: "block",
    padding: "12px",
    fontSize: "16px",
    color: "#333",
    textDecoration: "none",
    transition: "background 0.2s ease-in-out, padding-left 0.2s",
    borderRadius: "5px",
  },
};

// 📌 **Real Amazon Hover Effects**
const addHoverEffect = () => {
  document.querySelectorAll(".menu-item").forEach((Menuitem) => {
    Menuitem.addEventListener("mouseover", () => {
      Menuitem.style.background = "#f0f0f0"; // Light gray on hover
      Menuitem.style.paddingLeft = "13px"; // Moves text slightly right
    });

    Menuitem.addEventListener("mouseout", () => {
      Menuitem.style.background = "transparent"; // Removes background
      Menuitem.style.paddingLeft = "6px"; // Resets padding
    });
  });
};

// 📌 **Apply Hover Effect After Rendering**
setTimeout(addHoverEffect, 10);

export default SideMenu;
