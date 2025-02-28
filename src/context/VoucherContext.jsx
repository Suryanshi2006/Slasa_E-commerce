import React, { createContext, useContext, useState } from "react";

// Creating a context for the voucher data
const VoucherContext = createContext();

// Creating the provider for the context
export const VoucherProvider = ({ children }) => {
  const voucherData = [
    {
      title: "Voucher",
      subtitle: "Exclusive Offer",
      discount: "Extra 15% off",
      sale: "30% Sale",
      categories: "Acrylic Accessories | Home Decor | Furniture",
      imageUrl: "Images/Acrylic2.jpeg",
      buttonText: "Shop Now",
      buttonLink: "/acrylic",
    },
  ];

  const constructionVoucher = {
    title: "Voucher",
    subtitle: "Exclusive Offer",
    discount: "Extra 18% off",
    sale: "45% Sale",
    categories: "Construction | Tools | Equipment",
    imageUrl: "Images/construction1.avif",
    buttonText: "Shop Now",
    buttonLink: "/construction",
  };

  const homepageVouchers = [
    {
      title: "Voucher",
      subtitle: "Exclusive Offer",
      discount: "Extra 10% off",
      sale: "40% Sale",
      categories: "Furniture | Sofas | Home Decor",
      imageUrl: "/Images/Bed.jpeg",
      buttonText: "Shop Now",
      buttonLink: "/homepage-furniture",
    },
  ];

  const newArrivalsVoucher = [
    {
      title: "Voucher",
      subtitle: "Exclusive Offer",
      discount: "Extra 8% off",
      sale: "35% Sale",
      categories: "New Arrivals | Latest Collections",
      imageUrl: "Images/New2.jpg",
      buttonText: "Shop Now",
      buttonLink: "/new-arrivals",
    },
  ];

  const photographyVideographyVoucher = [
    {
      title: "Voucher",
      subtitle: "Exclusive Offer",
      discount: "Extra 12% off",
      sale: "50% Sale",
      categories: "Photography & Videography | Camera Gear | Accessories",
      imageUrl: "Images/photography1.avif",
      buttonText: "Shop Now",
      buttonLink: "/photography-videography",
    },
  ];

  const printingVoucher = [
    {
      title: "Voucher",
      subtitle: "Exclusive Offer",
      discount: "Extra 10% off",
      sale: "40% Sale",
      categories: "Printing | Stationery | Office Supplies",
      imageUrl: "Images/printing1.avif",
      buttonText: "Shop Now",
      buttonLink: "/printing",
    },
  ];

  const renovationVoucher = [
    {
      title: "Voucher",
      subtitle: "Exclusive Offer",
      discount: "Extra 20% off",
      sale: "55% Sale",
      categories: "Renovation | Interior Design | Furniture",
      imageUrl: "Images/Kitchen.jpeg",
      buttonText: "Shop Now",
      buttonLink: "/renovation",
    },
  ];

  const todaysDealsVoucher = [
    {
      title: "Voucher",
      subtitle: "Exclusive Offer",
      discount: "Extra 15% off",
      sale: "60% Sale",
      categories: "Today's Deals | Limited Time Offers",
      imageUrl: "Images/Todays.jpg",
      buttonText: "Shop Now",
      buttonLink: "/todays-deals",
    },
  ];

  // Store all vouchers data in the context
  const vouchers = {
    voucherData,
    constructionVoucher,
    homepageVouchers,
    newArrivalsVoucher,
    photographyVideographyVoucher,
    printingVoucher,
    renovationVoucher,
    todaysDealsVoucher,
  };

  return (
    <VoucherContext.Provider value={vouchers}>
      {children}
    </VoucherContext.Provider>
  );
};

// Custom hook to use the Voucher context
export const useVouchers = () => {
  const context = useContext(VoucherContext);
  if (!context) {
    throw new Error("useVouchers must be used within a VoucherProvider");
  }
  return context;
};
