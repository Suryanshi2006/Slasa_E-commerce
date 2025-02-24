import React, { useState } from "react";
import { FaShippingFast, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const HeaderTop = () => {
  const [isB2BOpen, setIsB2BOpen] = useState(false);
  const [isAreaOpen, setIsAreaOpen] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        backgroundColor: "black", // Entire background is black
        color: "white", // Text color is white
        padding: "18px 30px", // Balanced padding for proper spacing
        fontSize: "14px", // Slightly larger font size for clarity
        fontWeight: "600", // Medium weight for readability
        width: "100%",
        boxSizing: "border-box", // Ensures proper width handling
      }}
    >
      {/* ✅ Left Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px", // Increased gap for better spacing
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
            padding: "10px 15px",
            borderRadius: "5px",
            backgroundColor: "black", // Black background for each item
            color: "white", // White text color
            border: "2px solid transparent", // Transparent border
          }}
        >
          <FaShippingFast />
          <span>Free Shipping</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
            padding: "10px 15px",
            borderRadius: "5px",
            backgroundColor: "black",
            color: "white",
            border: "2px solid transparent",
          }}
        >
          <FaCalendarAlt />
          <span>Click and Collect</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
            padding: "10px 15px",
            borderRadius: "5px",
            backgroundColor: "black",
            color: "white",
            border: "2px solid transparent",
          }}
        >
          <span>Warranty</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
            padding: "10px 15px",
            borderRadius: "5px",
            backgroundColor: "black",
            color: "white",
            border: "2px solid transparent",
          }}
        >
          <span>📆</span>
        </div>
      </div>

      {/* ✅ Middle Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30px", // Increased gap between sections
          flexWrap: "wrap",
        }}
      >
        {/* B2B Dropdown */}
        <div
          style={{
            cursor: "pointer",
            padding: "5px 10px",
            borderRadius: "5px",
            backgroundColor: "black", // Black background
            color: "white", // White text color
            border: "2px solid transparent", // Transparent border
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
          onMouseEnter={() => setIsB2BOpen(true)}
          onMouseLeave={() => setIsB2BOpen(false)}
        >
          B2B Designing Services <span style={{ marginLeft: "10px" }}>⌄</span>

          {isB2BOpen && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: "0",
                backgroundColor: "#333", // Dark background
                color: "white",
                borderRadius: "8px",
                padding: "10px 20px",
                boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)", // Soft shadow for depth
                zIndex: 1,
                transformOrigin: "top center",
                minWidth: "200px", // Consistent width
                opacity: 1,
                visibility: "visible",
                transition: "opacity 0.3s ease, visibility 0.3s ease",
              }}
            >
              <p
                style={{
                  padding: "10px 0",
                  borderBottom: "1px solid #444",
                  cursor: "pointer", // Pointer cursor on hover
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#555")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
              >
                Custom Designs
              </p>
              <p
                style={{
                  padding: "10px 0",
                  cursor: "pointer",
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#555")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
              >
                Consulting Services
              </p>
            </div>
          )}
        </div>

        {/* Deliver to area Dropdown */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
            padding: "5px 10px",
            borderRadius: "5px",
            backgroundColor: "black",
            color: "white",
            border: "2px solid transparent",
            position: "relative",
          }}
          onMouseEnter={() => setIsAreaOpen(true)}
          onMouseLeave={() => setIsAreaOpen(false)}
        >
          <FaMapMarkerAlt />
          <span>Deliver to area <span style={{ marginLeft: "10px" }}>⌄</span></span>

          {isAreaOpen && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: "0",
                backgroundColor: "#333",
                color: "white",
                borderRadius: "8px",
                padding: "10px 20px",
                boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)",
                zIndex: 1,
                transformOrigin: "top center",
                minWidth: "200px",
                opacity: 1,
                visibility: "visible",
                transition: "opacity 0.3s ease, visibility 0.3s ease",
              }}
            >
              <p
                style={{
                  padding: "10px 0",
                  borderBottom: "1px solid #444",
                  cursor: "pointer", // Pointer cursor on hover
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#555")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
              >
                India
              </p>
              <p
                style={{
                  padding: "10px 0",
                  cursor: "pointer",
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#555")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
              >
                USA
              </p>
              <p
                style={{
                  padding: "10px 0",
                  cursor: "pointer",
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#555")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
              >
                Europe
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ✅ Right Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px", // Increased gap between elements
          flexWrap: "wrap",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px 15px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
          }}
        >
          Store Locator
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px 15px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
          }}
        >
          Help
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px 15px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
          }}
        >
          Sell with Us
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
