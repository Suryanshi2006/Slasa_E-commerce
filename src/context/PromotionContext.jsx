import React, { createContext, useContext, useState } from "react";

// Create Context
const PromotionContext = createContext();

// Custom Hook to use Promotion Context
export const usePromotion = () => {
  const context = useContext(PromotionContext);
  if (!context) {
    throw new Error("usePromotion must be used within a PromotionProvider");
  }
  return context;
};

// Provider Component
export const PromotionProvider = ({ children }) => {
  // State for promotions
  const [promotions, setPromotions] = useState([
    {
      id: 1,
      title: "Welcome to Slasa | Discover Unique Creations",
      image: "/Images/Bed.jpeg",
      brand: "Slasa",
      description: "Explore a wide range of premium handcrafted and customized products.",
      price: "$99.0"
    },
    {
      id: 2,
      title: "Top-Quality Construction Materials | Best Deals",
      image: "/Images/construction1.avif",
      brand: "Slasa Build",
      description: "High-quality materials for all your construction needs at unbeatable prices.",
      price: "$500.00"
    },
    {
      id: 3,
      title: "Rennovation Essentials | Transform Your Space",
      image: "/Images/Kitchen.jpeg",
      brand: "Slasa Home",
      description: "Get the best rennovation materials and designs to revamp your home or office.",
      price: "$350.00"
    },
    {
      id: 4,
      title: "Exclusive Acrylic Collection | Modern & Elegant",
      image: "/Images/Acrylic1.avif",
      brand: "Slasa Premium",
      description: "Beautiful handcrafted acrylic home decor pieces.",
      price: "$120.00"
    },
    {
      id: 5,
      title: "New Arrivals | Fresh & Trendy Collections",
      image: "/Images/New1.avif",
      brand: "Slasa Trends",
      description: "Check out the latest arrivals with exclusive offers and discounts.",
      price: "$199.00"
    },
    {
      id: 6,
      title: "Professional Photography Gear | Best Quality",
      image: "/Images/photography1.avif",
      brand: "Slasa Capture",
      description: "High-end photography equipment and accessories for professionals and enthusiasts.",
      price: "$899.00"
    },
    {
      id: 7,
      title: "Premium Printing Services | High Resolution",
      image: "/Images/Printing1.avif",
      brand: "Slasa Print",
      description: "Best quality printing services for all business and personal needs.",
      price: "$50.00"
    },
    {
      id: 8,
      title: "Today's Deals | Limited Time Offers",
      image: "/Images/Todays.jpg",
      brand: "Slasa Deals",
      description: "Grab the best deals today with discounts up to 70% off.",
      price: "$75.00"
    }
    
    ,
    {
      "id": 9,
      "title": "Premium Wooden Easel with Canvas | Art Lovers' Choice",
      "image": "/Images/easel6.avif",
      "brand": "Slasa Art",
      "description": "High-quality wooden easel with a durable canvas, perfect for artists and home decor.",
      "price": "$79.99"
    }
    ,
    {
      "id": 10,
      "title": "Premium Wooden Easel with Canvas | Ramadan Special",
      "image": "/Images/easel6.avif",
      "brand": "Slasa Art",
      "description": "Celebrate Ramadan with creativity! This high-quality wooden easel with a durable canvas is perfect for painting festive designs, home decor, or as a thoughtful gift for art lovers during the holy month.",
      "price": "$79.99"
    },
    {
      "id": 11,
      "title": "Premium Wooden Shelves | Ramadan Home Decor",
      "image": "/Images/woodshelves.avif",
      "brand": "Slasa Home",
      "description": "Enhance your home this Ramadan with elegant wooden shelves. Perfect for displaying Islamic decor, lanterns, and Quranic books, adding a warm touch to your space.",
      "price": "$49.99"
    }
    ,
    {
      "id": 12,
      "title": "Handcrafted Wooden Frames | Ramadan Special",
      "image": "/Images/woodframes.avif",
      "brand": "Slasa Art",
      "description": "Celebrate the spirit of Ramadan with beautifully crafted wooden frames. Ideal for displaying Islamic calligraphy, family photos, or Eid greetings.",
      "price": "$29.99"
    },
    {
      "id": 13,
      "title": "High-Quality Wood Sheets | DIY Ramadan Crafts",
      "image": "/Images/woodsheets.avif",
      "brand": "Slasa DIY",
      "description": "Perfect for DIY Ramadan projects! These durable wood sheets can be used for crafting Islamic decorations, Eid gifts, and home improvement.",
      "price": "$39.99"
    }
,
{
  "id": 14,
  "title": "Customized Wooden Creations | Personalized Ramadan Gifts",
  "image": "/Images/customizewood.avif",
  "brand": "Slasa Custom",
  "description": "Make this Ramadan special with personalized wooden items! From engraved Islamic quotes to custom-designed home decor, create meaningful gifts for loved ones.",
  "price": "Varies"
}



    
    
    
  ]);

  return (
    <PromotionContext.Provider value={{ promotions, setPromotions }}>
      {children}
    </PromotionContext.Provider>
  );
};
