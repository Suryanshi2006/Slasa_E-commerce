import React, { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import { FaRegStar } from "react-icons/fa"; // For glitter effect

const HeaderMain = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      style={{
        padding: "15px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#e8eded",
        color: "black",
        fontSize: "18px",
        fontWeight: "bold",
        cursor: "pointer",
        borderBottom: "2px solid rgba(0, 0, 0, 0.2)",
        width: "100vw",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {/* All Button */}
      <span
        onClick={() => setSidebarOpen(true)}
        style={{
          padding: "10px 15px",
          borderRadius: "10px",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          marginRight: "10px",
          transition: "background-color 0.3s",
          borderBottom: "1px solid rgba(0, 0, 0, 0.3)", // Thicker border at the bottom
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "rgba(0, 0, 0, 0.2)")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "rgba(0, 0, 0, 0.1)")}
      >
        ☰ All
      </span>

      {/* Other Categories */}
      <div
        style={{
          padding: "0 10px",
          whiteSpace: "nowrap",
          position: "relative",
          transition: "transform 0.3s",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        Acrylic Accessories <FaRegStar style={{ color: "gold", fontSize: "18px", marginLeft: "5px" }} />
      </div>

      <div
        style={{
          padding: "0 10px",
          whiteSpace: "nowrap",
          position: "relative",
          animation: "glitterEffect 1.5s infinite", // Adding the glitter effect
          transition: "transform 0.3s",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        Today's Deal <span style={{ color: "#ffcc00" }}>✨</span>
      </div>

      <div
        style={{
          padding: "0 10px",
          whiteSpace: "nowrap",
          position: "relative",
          transition: "transform 0.3s",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        Photography and Videography 📷
      </div>

      <div
        style={{
          padding: "0 10px",
          whiteSpace: "nowrap",
          position: "relative",
          transition: "transform 0.3s",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        Printing Services 🖨️
      </div>

      <div
        style={{
          padding: "0 10px",
          whiteSpace: "nowrap",
          position: "relative",
          transition: "transform 0.3s",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        Home Renovation 🏠
      </div>

      {/* Sidebar Menu */}
      <SidebarMenu isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
};

export default HeaderMain;

// Add this in your CSS or in the style tag of your component
const style = document.createElement("style");
style.innerHTML = `
  @keyframes glitterEffect {
    0% { text-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.5), 0 0 15px rgba(255, 255, 255, 0.5); }
    50% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.7), 0 0 40px rgba(255, 255, 255, 0.6); }
    100% { text-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.5), 0 0 15px rgba(255, 255, 255, 0.5); }
  }
`;
document.head.appendChild(style);
