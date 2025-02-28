// src/context/PackageContext.jsx

import React, { createContext, useContext } from "react";

// Creating a context for the package data
const PackageContext = createContext();

// Creating the provider for the context
export const PackageProvider = ({ children }) => {
  // Define all the package data
  const acrylicPackages = [
    {
      title: "Modern Acrylic Accessories",
      image: "Images/Acrylic1.avif",
      alt: "Modern Acrylic Accessories",
      description: "This package features sleek and contemporary acrylic accessories that add a modern touch to any space.",
      link: "/modern-acrylic-accessories",
    },
    {
      title: "Acrylic Décor & Accessories",
      image: "Images/Acrylic2.jpeg",
      alt: "Acrylic Décor & Accessories",
      description: "This collection includes stylish acrylic décor pieces and functional accessories to elevate your home or office.",
      link: "/acrylic-decor-accessories",
    },
  ];

  const constructionPackages = [
    {
      title: "Premium Construction Package",
      image: "Images/construction1.avif",
      alt: "Premium Construction",
      description: "This package includes high-quality construction services with premium materials for residential and commercial properties.",
      link: "/premium-construction",
    },
    {
      title: "Eco-Friendly Construction Package",
      image: "Images/construction2.avif",
      alt: "Eco-Friendly Construction",
      description: "A sustainable construction package using eco-friendly materials and energy-efficient designs.",
      link: "/eco-friendly-construction",
    },
  ];

  const renovationPackages = [
    {
      title: "Basic Renovation Package",
      image: "Images/Bed.jpeg",
      alt: "Basic Renovation",
      description: "This package includes basic interior upgrades and furniture styling.",
      link: "/basic-renovation",
    },
    {
      title: "Premium Renovation Package",
      image: "Images/Promotion.jpeg",
      alt: "Premium Renovation",
      description: "A high-end package with luxurious renovations and premium materials.",
      link: "/premium-renovation",
    },
  ];

  const newArrivalsPackages = [
    {
      title: "New Arrivals Collection",
      image: "Images/New2.jpg",
      alt: "New Arrivals",
      description: "Discover the latest products added to our collection. Fresh designs and top-notch quality.",
      link: "/new-arrivals",
    },
    {
      title: "Exclusive New Arrivals",
      image: "Images/New1.avif",
      alt: "Exclusive New Arrivals",
      description: "Be the first to explore our exclusive new arrivals, featuring cutting-edge designs and premium materials.",
      link: "/exclusive-new-arrivals",
    },
  ];

  const photographyPackages = [
    {
      title: "Photography & Videography Package",
      image: "Images/photography1.avif",
      alt: "Photography & Videography",
      description: "Capture stunning moments with our professional photography and videography services for events and promotions.",
      link: "/photography-videography-package",
    },
    {
      title: "Event Photography & Videography",
      image: "Images/photography2.avif",
      alt: "Event Photography & Videography",
      description: "Capture memories at your events with our specialized photography and videography services for weddings, parties, and more.",
      link: "/event-photography-videography",
    },
  ];

  const printingPackages = [
    {
      title: "Advanced Printing Solutions",
      image: "Images/printing1.avif",
      alt: "Advanced Printing",
      description: "Explore state-of-the-art printing solutions for marketing materials, banners, and custom prints.",
      link: "/advanced-printing-solutions",
    },
    {
      title: "Custom Printing Package",
      image: "Images/printing2.avif",
      alt: "Custom Printing",
      description: "Get personalized prints for business cards, flyers, and more with high-quality custom printing services.",
      link: "/custom-printing-package",
    },
  ];

  const todaysDealsPackages = [
    {
      title: "Today's Exclusive Deals",
      image: "Images/Todays.jpg",
      alt: "Exclusive Deals",
      description: "Grab today's best deals on home improvement, construction, and accessories. Limited time offers!",
      link: "/todays-deals",
    },
    {
      title: "Flash Sale Deals",
      image: "Images/Todays2.jpg",
      alt: "Flash Sale Deals",
      description: "Hurry! Limited-time flash sale deals on selected items. Don't miss out on huge savings!",
      link: "/flash-sale-deals",
    },
  ];

  // Store all the package data
  const packages = {
    acrylicPackages,
    constructionPackages,
    renovationPackages,
    newArrivalsPackages,
    photographyPackages,
    printingPackages,
    todaysDealsPackages,
  };

  return (
    <PackageContext.Provider value={packages}>
      {children}
    </PackageContext.Provider>
  );
};

// Custom hook to use the Package context
export const usePackages = () => {
  const context = useContext(PackageContext);
  if (!context) {
    throw new Error("usePackages must be used within a PackageProvider");
  }
  return context;
};
