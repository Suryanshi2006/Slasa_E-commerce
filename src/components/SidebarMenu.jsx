import * as RouterDom from "react-router-dom";
import React, { useEffect, useState,useCallback ,useRef} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SideMenu = ({ isOpen, onClose }) => {
  const menuRef = useRef(null);

  const [openSections, setOpenSections] = useState({});

  const toggleSection = useCallback((section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  }, []);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);
  

  return (
    <div
      ref={menuRef}
      style={{
        ...styles.sideMenu,
        transform: isOpen ? "translateX(0)" : "translateX(-100%)",
      }}
    >
      <div style={styles.closeButton} onClick={onClose}>
        &#10006;
      </div>
      <div style={styles.header}>
        <h2> 👨🏻 Hello, Sign In</h2>
      </div>

      <MenuSection title="Trending">
        <ExpandableMenu
          title="Best Sellers ✨"
          isOpen={openSections.sellers}
          toggle={() => toggleSection("sellers")}
        >
          <MenuItem text="Top Rated by Customers" link="/Top-Customers" />
          <MenuItem
            text="All-Time-Best-Seller"
            link="/all-Time-Best-Sellers"
          />
          <MenuItem text="Staff Pick" link="/staff-Pick" />
          <MenuItem text="Exclusive Online Offers" link="/exclusive" />
        </ExpandableMenu>
        <ExpandableMenu
          title="Trending Products"
          isOpen={openSections.products}
          toggle={() => toggleSection("products")}
        >
          <MenuItem text="Flash Deals" link="/flash-Deals" />
          <MenuItem text="Bundle Offers" link="/bundle-offers" />
          <MenuItem text="Clearance Sale" link="/clearance-Sale" />
        </ExpandableMenu>
        <ExpandableMenu
          title="New Arrivals"
          isOpen={openSections.arrivals}
          toggle={() => toggleSection("arrivals")}
        >
          <MenuItem
            text="Handmade & Custom Creations"
            link="/handmade-&-Custom Creations"
          />
          <MenuItem text="Most Sold Items" link="/most-Sold-Items" />
          <MenuItem text="Influencer Picks" link="/influencer-Picks" />
          <MenuItem text="Back in Stock" link="/back-in-Stock" />
        </ExpandableMenu>
        <ExpandableMenu
          title="Customer Reviews"
          isOpen={openSections.reviews}
          toggle={() => toggleSection("reviews")}
        >
          <MenuItem text="Top-Rated Products" link="/Top-Rated-Products" />
          <MenuItem
            text="Verified Customer Testimonials"
            link="/verified-Customer-Testimonials"
          />
          <MenuItem
            text="Before & After Comparisons"
            link="/before-&-After-Comparisons"
          />
          <MenuItem
            text="Exclusive Online Offers"
            link="/Exclusive-Online-Offers"
          />
        </ExpandableMenu>
      </MenuSection>

      <MenuSection title="Shop">
        <ExpandableMenu
          title="Acrylic Accessories ✨"
          isOpen={openSections.acrylic}
          toggle={() => toggleSection("acrylic")}
        >
          <MenuItem text="Keychains" link="/acrylic-keychains" />
          <MenuItem text="Wall Decor" link="/acrylic-wall-decor" />
          <MenuItem text="Nameplates" link="/acrylic-nameplates" />
          <MenuItem text="Wall Clocks" link="/acrylic-wall-clocks" />
        </ExpandableMenu>

        <ExpandableMenu
          title="UV Printing Wall Art "
          isOpen={openSections.UV}
          toggle={() => toggleSection("UV")}
        >
          <MenuItem text="Custom Frames" link="/acrylic-Custom-Frames"/>
          <MenuItem text="Acrylic Prints" link="/acrylic-Acrylic-Prints"/>
          <MenuItem text="Canvas Art" link="/acrylic-Canvas-Art"/>
          <MenuItem
            text="Decorative Panels"
            link="/acrylic-Decorative-Panels"
          />
        </ExpandableMenu>

        <ExpandableMenu
          title="Flowers & Plants "
          isOpen={openSections.Flowers}
          toggle={() => toggleSection("Flowers")}
        >
          <MenuItem text="Fresh Flowers" link="/acrylic-Fresh-Flowers"/>
          <MenuItem text="Indoor Plants" link="/acrylic-Indoor-Plants"/>
          <MenuItem text="Limited Edition" link="/acrylic-Limited-Edition"/>
          <MenuItem text="Outdoor Plants" link="/acrylic-Outdoor-Plants"/>
        </ExpandableMenu>
      </MenuSection>

      <MenuSection title="Services">
        <ExpandableMenu
          title="Printing Services "
          isOpen={openSections.services}
          toggle={() => toggleSection("services")}
        >
          <MenuItem text="Digital Printing" link="/services-Digital-Printing"/>
          <MenuItem text="Offset Printing" link="/services-offset-printing"/>
          <MenuItem
            text="Speciality Printing"
            link="/services-speciality-prinitng"
          />
          <MenuItem
            text="Large Format Printing"
            link="/services-Large-Format-Printing"
          />
          <MenuItem
            text="Personalized and custom printing"
            link="/services-Personalized-and-custom-printing"
          />
        </ExpandableMenu>
        <ExpandableMenu
          title="Photography & Videography "
          isOpen={openSections.photography}
          toggle={() => toggleSection("photography")}
        >
          <MenuItem
            text="Event Photography "
            link="/services-Event-Photography "
          />
          <MenuItem
            text="Corporate Shoots "
            link="/services-Corporate-Shoots "
          />
          <MenuItem
            text="Product Photography "
            link="/services-Product-Photography "
          />
          <MenuItem
            text="Promotional Videos "
            link="/services-Promotional-Videos "
          />
          <MenuItem
            text="Special Videography Services "
            link="/services-Special-Videography-Services "
          />
        </ExpandableMenu>
        <ExpandableMenu
          title="Exhibition & Events "
          isOpen={openSections.events}
          toggle={() => toggleSection("events")}
        >
          <MenuItem text="Event Setup " link="/services-CEvent-Setup"/>
          <MenuItem
            text="Photography & Videography Setup"
            link="/services-Photography-&-Videography-Setup"
          />
          <MenuItem text="Booth Designing " link="/services-Booth-Designings"/>
          <MenuItem
            text="Trade Show Management "
            link="/services-Trade-Show-Management "
          />
        </ExpandableMenu>
        <ExpandableMenu
          title="Maintanance Services"
          isOpen={openSections.maintanance}
          toggle={() => toggleSection("maintanance")}
        >
          <MenuItem
            text="Home Maintenance "
            link="/services-Home-Maintenance "
          />
          <MenuItem
            text="Office Maintenance "
            link="/services-Office-Maintenance "
          />
          <MenuItem
            text="Facility Management "
            link="/services-Facility-Management"
          />
          <MenuItem
            text="Specialized Services "
            link="/services-Specialized-Services"
          />
        </ExpandableMenu>
        <ExpandableMenu
          title="Other Services"
          isOpen={openSections.others}
          toggle={() => toggleSection("others")}
        >
          <MenuItem text="Vehicle Branding" link="/services-Vehicle-Branding"/>
          <MenuItem
            text="Safety Equipments"
            link="/services-Safety-Equipments"
          />
          <MenuItem text="Lighting poles" link="/services-Lighting-poles"/>
          <MenuItem text="Banner" link="/services-Banner" />
          <MenuItem text="Solar Lights" link="/services-Solar-Lights"/>
          <MenuItem
            text="Security Servilance system"
            link="/services-Security-Servilance-system"
          />
          <MenuItem text="Flag Stand" link="/services-Flag-Stand"/>
          <MenuItem text="Street signs" link="/services-Street-signs"/>
          <MenuItem
            text="Led & Neon Signage"
            link="/services-Led & Neon-Signage"
          />
          <MenuItem text="Exbition stand" link="/services-SExbition-stand"/>
          <MenuItem
            text="Merchanding stands"
            link="/services-Merchanding-stands"
          />
          <MenuItem
            text="Flex Face Signage"
            link="/services-Flex-Face-Signage"
          />
        </ExpandableMenu>
      </MenuSection>

      <MenuSection title="Construction & Renovation ">
        <ExpandableMenu
          title="New Construction "
          isOpen={openSections.construction}
          toggle={() => toggleSection("construction")}
        >
          <MenuItem
            text="Institutional & Public Buildings"
            link="/Institutional & Public Buildings"
          />
          <MenuItem
            text="Commercial & Industrial Construction"
            link="/Commercial & Industrial Construction"
          />
          <MenuItem
            text="Landscaping & Outdoor Structures"
            link="/Landscaping & Outdoor Structures"
          />
          <MenuItem
            text="Lighting & Ceiling Design"
            link="/Lighting & Ceiling Design"
          />
        </ExpandableMenu>

        <ExpandableMenu
          title="Home Renovation "
          isOpen={openSections.rennovation}
          toggle={() => toggleSection("rennovation")}
        >
          <MenuItem
            text="Luxury Interior Makeovers"
            link="/Luxury Interior Makeovers"
          />
          <MenuItem
            text="Smart Home Integration"
            link="/Smart Home Integration"
          />
          <MenuItem
            text="Space Optimization & Partitioning"
            link="Space Optimization & Partitioning"
          />
          <MenuItem
            text="Wall Treatments & Decor"
            link="/Wall Treatments & Decor"
          />
        </ExpandableMenu>
        <ExpandableMenu
          title="Interior Design "
          isOpen={openSections.design}
          toggle={() => toggleSection("design")}
        >
          <MenuItem text="Kitchen Remodeling" link="/Kitchen-Remodeling" />
          <MenuItem
            text="Bathroom Renovation"
            link="/commercial-construction"
          />
          <MenuItem text="Flooring & Tiling" link="/Flooring-&-Tiling" />
          <MenuItem
            text="Energy-Efficient Upgrades"
            link="/Energy-Efficient-Upgrades"
          />
        </ExpandableMenu>

        <ExpandableMenu
          title="Commercial Space Remodeling "
          isOpen={openSections.Remodeling}
          toggle={() => toggleSection("Remodeling")}
        >
          <MenuItem
            text="Retail Store Renovatio"
            link="/Retail-Store-Renovatio"
          />
          <MenuItem
            text="Office Interior & Fit-Out"
            link="/Office Interior-&-Fit-Out"
          />
          <MenuItem
            text="Hospitality & Restaurant Upgrade"
            link="/Hospitality-&-Restaurant-Upgrade"
          />
          <MenuItem
            text="Warehouse & Industrial Facility Renovati"
            link="/Warehouse-&-Industrial-Facility-Renovatio"
          />
        </ExpandableMenu>
        <ExpandableMenu
          title="Structural & Civil Works "
          isOpen={openSections.Works}
          toggle={() => toggleSection("Works")}
        >
          <MenuItem
            text="Foundation & Concrete Works"
            link="/residential-Foundation-&-Concrete Works"
          />
          <MenuItem text="Masonry & Brickwo" link="/Masonry-&-Brickwork"/>
          <MenuItem
            text="Steel & Metal Fabrication"
            link="/Steel-&-Metal Fabrication"
          />
          <MenuItem
            text="Demolition & Site Preparation"
            link="/Demolition-&-Site Preparatio"
          />
        </ExpandableMenu>
      </MenuSection>

      <MenuSection title="Help and Settings">
        <MenuItem text="Your Account" link="/account" />
        <MenuItem text="Customer Section" link="/customer" />
        <MenuItem text="Sign In" link="/signIn" />
        <MenuItem text="Sign Up" link="/signUp" />
      </MenuSection>
    </div>
  );
};

const ExpandableMenu = ({ title, isOpen, toggle, children }) => {
  return (
    <div style={styles.expandableMenu}>
      <div style={styles.menuItem} onClick={toggle}>
        <span style={styles.menuText}>{title}</span>
        <span style={styles.menuArrow}>{isOpen ? "▼" : "▶"}</span>
      </div>
      {isOpen && <div style={styles.subMenu}>{children}</div>}
    </div>
  );
};

const MenuSection = ({ title, children }) => {
  return (
    <div style={styles.menuSection}>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

const MenuItem = ({ text, link }) => {
  return (
    <Link to={link} style={styles.menuItem} className="menu-item">
      <span style={styles.menuText}>{text}</span>
      <span style={styles.menuArrow}>➝</span>
    </Link>
  );
};

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
    position: "absolute",
    top: "5px",
    right: "0px",
    backgroundColor: "#fff",
    padding: "8px 12px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    textAlign: "center",
    border: "none",
    borderRadius: "5px",
    transition: "all 0.3s ease",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
    color: "#333",

    "&:hover": {
      backgroundColor: "!#3087d1",
      color: "#3087d1",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
      transform: "scale(1.05)",
    },

    "&:active": {
      transform: "scale(0.95)",
      boxShadow: "none",
    },
  },
  header: {
    backgroundColor: "#3087D1",
    color: "#fff",
    padding: "30px",
    borderRadius: "8px",
    fontWeight: "bold",
  },
  menuSection: {
    padding: "15px 0",
    borderBottom: "1px solid #ddd",
  },
  menuItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px",
    fontSize: "14px",
    color: "#333",
    textDecoration: "none",
    cursor: "pointer",
    borderRadius: "5px",
    border: "1px solid transparent",
    transition: "0.2s",
  },
  expandableMenu: {
    marginBottom: "10px",
  },
  subMenu: {
    paddingLeft: "15px",
    borderLeft: "2px solid #ddd",
  },
  menuText: {
    flex: 1,
  },
  menuArrow: {
    transition: "transform 0.2s ease-in-out",
  },
};

export default SideMenu;