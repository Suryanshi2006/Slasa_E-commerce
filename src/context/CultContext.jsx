import React, { createContext, useContext } from "react";

// Create the context with a default empty array
const CultContext = createContext([]);

export const CultProvider = ({ children, value = [] }) => {
  return <CultContext.Provider value={value}>{children}</CultContext.Provider>;
};

// Acrylic Page
const acrylicCultData = [
  {
    id: 1,
    src: "/Images/Acrylic1.avif",
    price: "$149",
    description: "Modern Acrylic Decor",
  },
  {
    id: 2,
    src: "/Images/Todays.jpg",
    price: "$199",
    description: "Luxury Acrylic Frames",
  },
  {
    id: 3,
    src: "/Images/New1.avif",
    price: "$179",
    description: "Premium Acrylic Shelves",
  },
  {
    id: 4,
    src: "/Images/Todays2.jpg",
    price: "$129",
    description: "Stylish Acrylic Wall Art",
  },
];

const printingCultData = [
  {
    id: 1,
    src: "/Images/print4.avif",
    price: "$129",
    description: "High-Quality Photo Prints",
  },
  {
    id: 2,
    src: "/Images/printing2.avif",
    price: "$199",
    description: "Custom Business Cards",
  },
  {
    id: 3,
    src: "/Images/HeroPrint.jpeg",
    price: "$249",
    description: "Personalized T-Shirts Printing",
  },
  {
    id: 4,
    src: "/Images/printing1.avif",
    price: "$179",
    description: "Large Format Banners",
  },
];

// Construction Page
const constructionCultData = [
  {
    id: 1,
    src: "/Images/construction1.avif",
    price: "$249",
    description: "Heavy Duty Tools",
  },
  {
    id: 2,
    src: "/Images/construction2.avif",
    price: "$299",
    description: "Durable Safety Gear",
  },
  {
    id: 3,
    src: "/Images/HeroConstruction.jpeg",
    price: "$179",
    description: "Concrete Mixers",
  },
  {
    id: 4,
    src: "/Images/Construction4.avif",
    price: "$349",
    description: "Advanced Drill Machines",
  },
];

// Home Page
const homeCultData = [
  {
    id: 1,
    src: "/Images/Acrylic1.avif",
    price: "$129",
    description: "Elegant Home Decor",
  },
  {
    id: 2,
    src: "/Images/New1.avif",
    price: "$199",
    description: "Cozy Living Room Set",
  },
  {
    id: 3,
    src: "/Images/Bed.jpeg",
    price: "$159",
    description: "Premium Kitchen Essentials",
  },
  {
    id: 4,
    src: "/Images/Building.webp",
    price: "$189",
    description: "Stylish Wall Clocks",
  },
];

// Renovation Page
const renovationCultData = [
  {
    id: 1,
    src: "/Images/Hall.jpeg",
    price: "$399",
    description: "Professional Renovation Kit",
  },
  {
    id: 2,
    src: "/Images/Kitchen.jpeg",
    price: "$279",
    description: "Quality Flooring Tiles",
  },
  {
    id: 3,
    src: "/Images/Dinning.jpeg",
    price: "$329",
    description: "Smart Home Gadgets",
  },
  {
    id: 4,
    src: "/Images/Bedroom.jpeg",
    price: "$249",
    description: "Energy-Efficient Lighting",
  },
];

// Photography & Videography Page
const photographyCultData = [
  {
    id: 1,
    src: "/Images/photography1.avif",
    price: "$599",
    description: "Professional DSLR Camera",
  },
  {
    id: 2,
    src: "/Images/photography2.avif",
    price: "$199",
    description: "Studio Lighting Kit",
  },
  {
    id: 3,
    src: "/Images/HeroPhoto.jpeg",
    price: "$179",
    description: "4K Action Camera",
  },
  {
    id: 4,
    src: "/Images/Photo4.avif",
    price: "$129",
    description: "Portable Tripod Stand",
  },
];

// Today's Deals Page
const todaysDealsCultData = [
  {
    id: 1,
    src: "/Images/Todays.jpg",
    price: "$99",
    description: "Exclusive Smartwatch",
  },
  {
    id: 2,
    src: "/Images/Todays2.jpg",
    price: "$199",
    description: "Premium Wireless Earbuds",
  },
  {
    id: 3,
    src: "/Images/New1.avif",
    price: "$249",
    description: "High-Performance Laptop",
  },
  {
    id: 4,
    src: "/Images/Peace.jpeg",
    price: "$79",
    description: "Discounted Fitness Tracker",
  },
];

// New Arrivals Page
const newArrivalsCultData = [
  {
    id: 1,
    src: "/Images/New1.avif",
    price: "$159",
    description: "Latest Smart Home Hub",
  },
  {
    id: 2,
    src: "/Images/New2.jpg",
    price: "$229",
    description: "Modern Bluetooth Speaker",
  },
  {
    id: 3,
    src: "/Images/Bigsale.jpeg",
    price: "$199",
    description: "Stylish Wearable Tech",
  },
  {
    id: 4,
    src: "/Images/Wall.jpeg",
    price: "$179",
    description: "Next-Gen Gaming Console",
  },
];

const topRatedCultData = [
  {
    id: 1,
    src: "/Images/TopRated1.avif",
    price: "$299",
    description: "Best-Selling Smart TV",
  },
  {
    id: 2,
    src: "/Images/TopRated2.avif",
    price: "$149",
    description: "High-Performance Headphones",
  },
  {
    id: 3,
    src: "/Images/Exclusive.jpeg",
    price: "$199",
    description: "Ultra-Fast Gaming Mouse",
  },
  {
    id: 4,
    src: "/Images/TopRated4.avif",
    price: "$129",
    description: "Ergonomic Office Chair",
  },
];

const allTimeBestSellersCultData = [
  {
    id: 1,
    src: "/Images/BestSeller1.avif",
    price: "$399",
    description: "Premium Coffee Machine",
  },
  {
    id: 2,
    src: "/Images/BestSeller2.avif",
    price: "$299",
    description: "Top-Rated Smartphone",
  },
  {
    id: 3,
    src: "/Images/BestSeller3.avif",
    price: "$349",
    description: "Noise-Cancelling Earbuds",
  },
  {
    id: 4,
    src: "/Images/BestSeller4.avif",
    price: "$179",
    description: "Luxury Bedding Set",
  },
];

const staffPickExclusiveOnlineOfferCultData = [
  {
    id: 1,
    src: "/Images/TopRated1.avif",
    price: "$99",
    description: "Limited Edition Smartwatch",
  },
  {
    id: 2,
    src: "/Images/Bigsale.jpeg",
    price: "$249",
    description: "Exclusive Wireless Speaker",
  },
  {
    id: 3,
    src: "/Images/TopRated3.avif",
    price: "$159",
    description: "Portable Power Bank",
  },
  {
    id: 4,
    src: "/Images/TopRated3.avif",
    price: "$199",
    description: "Smart Home Security Camera",
  },
];

const exclusiveDealsCultData = [
  {
    id: 1,
    src: "/Images/Exclusive1.avif",
    price: "$129",
    description: "Exclusive Designer Watch",
  },
  {
    id: 2,
    src: "/Images/Exclusive2.jpeg",
    price: "$349",
    description: "Luxury Perfume Collection",
  },
  {
    id: 3,
    src: "/Images/Exclusive3.jpeg",
    price: "$249",
    description: "Premium Leather Wallet",
  },
  {
    id: 4,
    src: "/Images/Exclusive4.jpg",
    price: "$299",
    description: "Signature Sunglasses",
  },
];

const woodDealsDatas = [
  {
    id: 1,
    src: "/Images/easel2.avif",
    price: "$49",
    description: "Hand-Painted Ramadan Calligraphy on Canvas",
  },
  {
    id: 2,
    src: "/Images/easel2.avif",
    price: "$99",
    description: "Exclusive Eid Mubarak Wooden Easel Art",
  },
  {
    id: 3,
    src: "/Images/easel3.avif",
    price: "$129",
    description: "Islamic Geometric Art Canvas with Easel Stand",
  },
  {
    id: 4,
    src: "/Images/eael4.avif",
    price: "$59",
    description: "Limited Edition Mosque Silhouette Art on Easel",
  },
];

const ramadanDealsData = [
  {
    id: 1,
    src: "/Images/Ramdan1.webp",
    price: "$49",
    description: "Special Iftar Essentials Pack",
  },
  {
    id: 2,
    src: "/Images/Ramdan2.webp",
    price: "$99",
    description: "Exclusive Ramadan Lanterns",
  },
  {
    id: 3,
    src: "/Images/Ramdan3.webp",
    price: "$129",
    description: "Discounted Prayer Mats & Tasbeeh Set",
  },
  {
    id: 4,
    src: "/Images/Ramdan4.webp",
    price: "$59",
    description: "Mega Deal on Dry Fruits & Dates",
  },
];

const flashDealsCultData = [
  {
    id: 1,
    src: "/Images/Exclusive5,jpeg",
    price: "$89",
    description: "Limited Time Laptop Deal",
  },
  {
    id: 2,
    src: "/Images/Exclusive5,jpeg",
    price: "$149",
    description: "50% Off Smart Speakers",
  },
  {
    id: 3,
    src: "/Images/Flash3.avif",
    price: "$199",
    description: "Discounted Gaming Console",
  },
  {
    id: 4,
    src: "/Images/Flash4.jpg",
    price: "$79",
    description: "Mega Discounted Bluetooth Earbuds",
  },
];

const bundleOffersCultDat = [
  {
    id: 1,
    src: "/Images/Bundle1.avif",
    price: "$499",
    description: "Tech Essentials Bundle",
  },
  {
    id: 2,
    src: "/Images/Bundle2.jpeg",
    price: "$349",
    description: "Home Cleaning Kit Combo",
  },
  {
    id: 3,
    src: "/Images/Bundle3.jpeg",
    price: "$199",
    description: "Fitness Starter Pack",
  },
  {
    id: 4,
    src: "/Images/Bundle4.jpg",
    price: "$299",
    description: "Gaming Accessories Bundle",
  },
];

const clearanceSaleCultData = [
  {
    id: 1,
    src: "/Images/Clearance1.avif",
    price: "$69",
    description: "Final Stock Wireless Keyboard",
  },
  {
    id: 2,
    src: "/Images/Clearance2.jpeg",
    price: "$129",
    description: "Last Chance Designer Shoes",
  },
  {
    id: 3,
    src: "/Images/Clearance3.jpeg",
    price: "$199",
    description: "Clearance Smartwatch Sale",
  },
  {
    id: 4,
    src: "/Images/Clearance4.jpg",
    price: "$159",
    description: "End-of-Season Fashion Deals",
  },
];

const handmadeCustomCreationsCultData = [
  {
    id: 1,
    src: "/Images/Handmade1.avif",
    price: "$79",
    description: "Handcrafted Wooden Decor",
  },
  {
    id: 2,
    src: "/Images/Handmade2.jpeg",
    price: "$149",
    description: "Custom Engraved Jewelry",
  },
  {
    id: 3,
    src: "/Images/Handmade3.jpeg",
    price: "$199",
    description: "Handmade Ceramic Pottery",
  },
  {
    id: 4,
    src: "/Images/Handmade4.jpg",
    price: "$249",
    description: "Exclusive Leather Wallets",
  },
];

const mostSoldItemsCultData = [
  {
    id: 1,
    src: "/Images/MostSold1.avif",
    price: "$399",
    description: "Bestselling Gaming Laptop",
  },
  {
    id: 2,
    src: "/Images/MostSold2.jpeg",
    price: "$199",
    description: "Most Popular Wireless Earbuds",
  },
  {
    id: 3,
    src: "/Images/MostSold3.jpeg",
    price: "$249",
    description: "Top-Selling Smartwatch",
  },
  {
    id: 4,
    src: "/Images/MostSold4.jpg",
    price: "$179",
    description: "Customer Favorite Air Purifier",
  },
];

const influencerPicksCultData = [
  {
    id: 1,
    src: "/Images/Influencer1.avif",
    price: "$129",
    description: "Trending Skincare Set",
  },
  {
    id: 2,
    src: "/Images/Influencer2.jpeg",
    price: "$349",
    description: "Influencer's Favorite Camera",
  },
  {
    id: 3,
    src: "/Images/Influencer3.jpeg",
    price: "$249",
    description: "Social Media Star's Makeup Kit",
  },
  {
    id: 4,
    src: "/Images/Influencer4.jpg",
    price: "$299",
    description: "Fashion Blogger’s Top Pick Sunglasses",
  },
];

const backInStockCultData = [
  {
    id: 1,
    src: "/Images/BackInStock1.avif",
    price: "$179",
    description: "Restocked Gaming Mouse",
  },
  {
    id: 2,
    src: "/Images/BackInStock2.jpeg",
    price: "$399",
    description: "Bestseller Leather Jacket",
  },
  {
    id: 3,
    src: "/Images/BackInStock3.jpeg",
    price: "$249",
    description: "High-Demand Bluetooth Headphones",
  },
  {
    id: 4,
    src: "/Images/BackInStock4.jpg",
    price: "$99",
    description: "Reintroduced Classic Sneakers",
  },
];

const verifiedCustomerTestimonialsCultData = [
  {
    id: 1,
    src: "/Images/Testimonial1.avif",
    price: "$159",
    description: "Highly Rated Smartwatch",
  },
  {
    id: 2,
    src: "/Images/Testimonial2.jpeg",
    price: "$299",
    description: "Customer Approved Fitness Gear",
  },
  {
    id: 3,
    src: "/Images/Testimonial3.jpeg",
    price: "$229",
    description: "Top-Rated Home Security System",
  },
  {
    id: 4,
    src: "/Images/Testimonial4.jpg",
    price: "$99",
    description: "Most Loved Essential Oil Diffuser",
  },
];

const beforeAfterComparisonsCultData = [
  {
    id: 1,
    src: "/Images/BeforeAfter1.avif",
    price: "$129",
    description: "Skin Glow Serum - Before & After",
  },
  {
    id: 2,
    src: "/Images/BeforeAfter2.jpeg",
    price: "$349",
    description: "Weight Loss Equipment - Transformation",
  },
  {
    id: 3,
    src: "/Images/BeforeAfter3.jpeg",
    price: "$249",
    description: "Furniture Restyle - Before & After",
  },
  {
    id: 4,
    src: "/Images/BeforeAfter4.jpg",
    price: "$199",
    description: "Hair Growth Solution - Real Results",
  },
];
// Acrylic Keychains Page
const acrylicKeychainsCultData = [
  {
    id: 1,
    src: "/Images/Keychain1.avif",
    price: "$9",
    description: "Custom Engraved Acrylic Keychain",
  },
  {
    id: 2,
    src: "/Images/Keychain2.jpg",
    price: "$12",
    description: "Personalized Photo Keychain",
  },
  {
    id: 3,
    src: "/Images/Keychain3.jpeg",
    price: "$8",
    description: "Minimalist Transparent Keychain",
  },
  {
    id: 4,
    src: "/Images/Keychain4.avif",
    price: "$10",
    description: "Anime-Themed Acrylic Keychain",
  },
];

// Nameplates Page
const nameplatesCultData = [
  {
    id: 1,
    src: "/Images/Nameplate1.avif",
    price: "$29",
    description: "Wooden Engraved Nameplate",
  },
  {
    id: 2,
    src: "/Images/Nameplate2.jpg",
    price: "$35",
    description: "Acrylic LED Nameplate",
  },
  {
    id: 3,
    src: "/Images/Nameplate3.jpeg",
    price: "$25",
    description: "Metallic Office Desk Nameplate",
  },
  {
    id: 4,
    src: "/Images/Nameplate4.avif",
    price: "$40",
    description: "Customized House Nameplate",
  },
];

// Wall Decor Page
const wallDecorCultData = [
  {
    id: 1,
    src: "/Images/WallDecor1.avif",
    price: "$49",
    description: "Handcrafted Wooden Wall Art",
  },
  {
    id: 2,
    src: "/Images/WallDecor2.jpg",
    price: "$59",
    description: "3D Acrylic Wall Stickers",
  },
  {
    id: 3,
    src: "/Images/WallDecor3.jpeg",
    price: "$79",
    description: "Luxury Canvas Wall Painting",
  },
  {
    id: 4,
    src: "/Images/WallDecor4.avif",
    price: "$89",
    description: "Bohemian Macrame Wall Hanging",
  },
];

// Wall Clocks Page
const wallClocksCultData = [
  {
    id: 1,
    src: "/Images/WallClock1.avif",
    price: "$39",
    description: "Minimalist Silent Wall Clock",
  },
  {
    id: 2,
    src: "/Images/WallClock2.jpg",
    price: "$49",
    description: "Vintage Roman Numeral Clock",
  },
  {
    id: 3,
    src: "/Images/WallClock3.jpeg",
    price: "$69",
    description: "Modern LED Digital Wall Clock",
  },
  {
    id: 4,
    src: "/Images/WallClock4.avif",
    price: "$79",
    description: "Rustic Wooden Wall Clock",
  },
];

// Custom Frames Page
const customFramesCultData = [
  {
    id: 1,
    src: "/Images/CustomFrame1.avif",
    price: "$49",
    description: "Personalized Wooden Photo Frame",
  },
  {
    id: 2,
    src: "/Images/CustomFrame2.jpg",
    price: "$59",
    description: "Engraved Family Portrait Frame",
  },
  {
    id: 3,
    src: "/Images/CustomFrame3.jpeg",
    price: "$69",
    description: "Elegant Black Border Frame",
  },
  {
    id: 4,
    src: "/Images/CustomFrame4.avif",
    price: "$79",
    description: "Multi-Picture Collage Frame",
  },
];

// Acrylic Frames Page
const acrylicFramesCultData = [
  {
    id: 1,
    src: "/Images/AcrylicFrame1.avif",
    price: "$69",
    description: "Crystal Clear Floating Frame",
  },
  {
    id: 2,
    src: "/Images/AcrylicFrame2.jpg",
    price: "$79",
    description: "UV Printed Modern Acrylic Frame",
  },
  {
    id: 3,
    src: "/Images/AcrylicFrame3.jpeg",
    price: "$89",
    description: "Luxury Transparent Wall Frame",
  },
  {
    id: 4,
    src: "/Images/AcrylicFrame4.avif",
    price: "$99",
    description: "LED Backlit Acrylic Frame",
  },
];

// Canvas Arts Page
const canvasArtsCultData = [
  {
    id: 1,
    src: "/Images/CanvasArt1.avif",
    price: "$59",
    description: "Abstract Painting Canvas Art",
  },
  {
    id: 2,
    src: "/Images/CanvasArt2.jpg",
    price: "$69",
    description: "Nature Landscape Canvas Print",
  },
  {
    id: 3,
    src: "/Images/CanvasArt3.jpeg",
    price: "$79",
    description: "Inspirational Quote Canvas Art",
  },
  {
    id: 4,
    src: "/Images/CanvasArt4.avif",
    price: "$89",
    description: "Luxury Multi-Panel Canvas Set",
  },
];

// Decorative Panels Page
const decorativePanelsCultData = [
  {
    id: 1,
    src: "/Images/DecorPanel1.avif",
    price: "$99",
    description: "3D Geometric Decorative Panel",
  },
  {
    id: 2,
    src: "/Images/DecorPanel2.jpg",
    price: "$119",
    description: "Laser Cut Wooden Wall Panel",
  },
  {
    id: 3,
    src: "/Images/DecorPanel3.jpeg",
    price: "$129",
    description: "Floral Acrylic Decorative Panel",
  },
  {
    id: 4,
    src: "/Images/DecorPanel4.avif",
    price: "$149",
    description: "Luxury Metal Wall Art Panel",
  },
];
// Digital Printing Page
const digitalPrintingCultData = [
  {
    id: 1,
    src: "/Images/DigitalPrint1.avif",
    price: "$29",
    description: "High-Quality Business Cards",
  },
  {
    id: 2,
    src: "/Images/DigitalPrint2.jpg",
    price: "$49",
    description: "Customized Flyers & Brochures",
  },
  {
    id: 3,
    src: "/Images/DigitalPrint3.jpeg",
    price: "$39",
    description: "UV Coated Postcards",
  },
  {
    id: 4,
    src: "/Images/DigitalPrint4.avif",
    price: "$59",
    description: "Personalized Greeting Cards",
  },
];

// Offset Printing Page
const offsetPrintingCultData = [
  {
    id: 1,
    src: "/Images/OffsetPrint1.avif",
    price: "$99",
    description: "Bulk Offset Printed Catalogs",
  },
  {
    id: 2,
    src: "/Images/OffsetPrint2.jpg",
    price: "$129",
    description: "Premium Offset Printed Magazines",
  },
  {
    id: 3,
    src: "/Images/OffsetPrint3.jpeg",
    price: "$149",
    description: "High-Quality Booklets & Manuals",
  },
  {
    id: 4,
    src: "/Images/OffsetPrint4.avif",
    price: "$199",
    description: "Custom Packaging Boxes",
  },
];

// Specialty Printing Page
const specialtyPrintingCultData = [
  {
    id: 1,
    src: "/Images/SpecialPrint1.avif",
    price: "$39",
    description: "Gold Foil Stamped Invitations",
  },
  {
    id: 2,
    src: "/Images/SpecialPrint2.jpg",
    price: "$49",
    description: "Embossed Business Cards",
  },
  {
    id: 3,
    src: "/Images/SpecialPrint3.jpeg",
    price: "$79",
    description: "Custom Holographic Stickers",
  },
  {
    id: 4,
    src: "/Images/SpecialPrint4.avif",
    price: "$99",
    description: "UV Spot Coated Posters",
  },
];

// Large Format Printing Page
const largeFormatPrintingCultData = [
  {
    id: 1,
    src: "/Images/LargeFormat1.avif",
    price: "$149",
    description: "Outdoor Vinyl Banners",
  },
  {
    id: 2,
    src: "/Images/LargeFormat2.jpg",
    price: "$199",
    description: "Custom Wall Murals",
  },
  {
    id: 3,
    src: "/Images/LargeFormat3.jpeg",
    price: "$179",
    description: "High-Resolution Window Graphics",
  },
  {
    id: 4,
    src: "/Images/LargeFormat4.avif",
    price: "$249",
    description: "Trade Show Display Stands",
  },
];

// Personalized & Custom Printing Page
const personalizedPrintingCultData = [
  {
    id: 1,
    src: "/Images/PersonalPrint1.avif",
    price: "$19",
    description: "Custom Printed T-Shirts",
  },
  {
    id: 2,
    src: "/Images/PersonalPrint2.jpg",
    price: "$29",
    description: "Personalized Mugs & Gifts",
  },
  {
    id: 3,
    src: "/Images/PersonalPrint3.jpeg",
    price: "$39",
    description: "Photo Printed Pillows",
  },
  {
    id: 4,
    src: "/Images/PersonalPrint4.avif",
    price: "$49",
    description: "Custom Printed Phone Cases",
  },
];
// Event Photography Page
const eventPhotographyCultData = [
  {
    id: 1,
    src: "/Images/EventPhoto1.avif",
    price: "$299",
    description: "Wedding & Engagement Photography",
  },
  {
    id: 2,
    src: "/Images/EventPhoto2.jpg",
    price: "$249",
    description: "Birthday & Anniversary Shoots",
  },
  {
    id: 3,
    src: "/Images/EventPhoto3.jpeg",
    price: "$399",
    description: "Concert & Festival Coverage",
  },
  {
    id: 4,
    src: "/Images/EventPhoto4.avif",
    price: "$349",
    description: "Sports & Live Event Photography",
  },
];

// Corporate Shoots Page
const corporateShootsCultData = [
  {
    id: 1,
    src: "/Images/CorporateShoot1.avif",
    price: "$499",
    description: "Professional Headshots & Portraits",
  },
  {
    id: 2,
    src: "/Images/CorporateShoot2.jpg",
    price: "$599",
    description: "Company Profile & Branding Shoot",
  },
  {
    id: 3,
    src: "/Images/CorporateShoot3.jpeg",
    price: "$699",
    description: "Conference & Seminar Coverage",
  },
  {
    id: 4,
    src: "/Images/CorporateShoot4.avif",
    price: "$799",
    description: "Office & Team Photography",
  },
];

// Product Photography Page
const productPhotographyCultData = [
  {
    id: 1,
    src: "/Images/ProductPhoto1.avif",
    price: "$199",
    description: "E-commerce Product Photography",
  },
  {
    id: 2,
    src: "/Images/ProductPhoto2.jpg",
    price: "$249",
    description: "360-Degree Product Shoots",
  },
  {
    id: 3,
    src: "/Images/ProductPhoto3.jpeg",
    price: "$299",
    description: "Creative Lifestyle Product Shots",
  },
  {
    id: 4,
    src: "/Images/ProductPhoto4.avif",
    price: "$349",
    description: "Jewelry & High-End Product Photography",
  },
];

// Promotional Videos Page
const promotionalVideosCultData = [
  {
    id: 1,
    src: "/Images/PromoVideo1.avif",
    price: "$599",
    description: "Brand Promotional Video",
  },
  {
    id: 2,
    src: "/Images/PromoVideo2.jpg",
    price: "$699",
    description: "Social Media Ad Video",
  },
  {
    id: 3,
    src: "/Images/PromoVideo3.jpeg",
    price: "$799",
    description: "Product Explainer Video",
  },
  {
    id: 4,
    src: "/Images/PromoVideo4.avif",
    price: "$899",
    description: "Customer Testimonial Video",
  },
];

// Special Videography Services Page
const specialVideographyServicesCultData = [
  {
    id: 1,
    src: "/Images/SpecialVideo1.avif",
    price: "$899",
    description: "Drone Aerial Videography",
  },
  {
    id: 2,
    src: "/Images/SpecialVideo2.jpg",
    price: "$999",
    description: "Slow Motion & Cinematic Shoots",
  },
  {
    id: 3,
    src: "/Images/SpecialVideo3.jpeg",
    price: "$1099",
    description: "Underwater Videography",
  },
  {
    id: 4,
    src: "/Images/SpecialVideo4.avif",
    price: "$1199",
    description: "Virtual Reality (VR) Video Production",
  },
];
// Event Setup Page
const eventSetupCultData = [
  {
    id: 1,
    src: "/Images/EventSetup1.avif",
    price: "$999",
    description: "Complete Stage & Lighting Setup",
  },
  {
    id: 2,
    src: "/Images/EventSetup2.jpg",
    price: "$1199",
    description: "Audio-Visual Equipment Rental",
  },
  {
    id: 3,
    src: "/Images/EventSetup3.jpeg",
    price: "$1499",
    description: "Custom Backdrops & Decor",
  },
  {
    id: 4,
    src: "/Images/EventSetup4.avif",
    price: "$1799",
    description: "LED Screens & Projection Mapping",
  },
];

// Photography & Videography Setup Page
const photographyVideographySetupCultData = [
  {
    id: 1,
    src: "/Images/PhotoVideoSetup1.avif",
    price: "$799",
    description: "Professional Camera & Lighting Setup",
  },
  {
    id: 2,
    src: "/Images/PhotoVideoSetup2.jpg",
    price: "$999",
    description: "Live Streaming & Multi-Cam Recording",
  },
  {
    id: 3,
    src: "/Images/PhotoVideoSetup3.jpeg",
    price: "$1299",
    description: "Drone & Aerial Video Coverage",
  },
  {
    id: 4,
    src: "/Images/PhotoVideoSetup4.avif",
    price: "$1599",
    description: "On-Site Photo Booth & Instant Prints",
  },
];

// Booth Designing Page
const boothDesigningCultData = [
  {
    id: 1,
    src: "/Images/BoothDesign1.avif",
    price: "$1299",
    description: "Custom Exhibition Booth Design",
  },
  {
    id: 2,
    src: "/Images/BoothDesign2.jpg",
    price: "$1499",
    description: "Interactive Display & Branding Setup",
  },
  {
    id: 3,
    src: "/Images/BoothDesign3.jpeg",
    price: "$1799",
    description: "Modular Booth Structures",
  },
  {
    id: 4,
    src: "/Images/BoothDesign4.avif",
    price: "$1999",
    description: "Luxury Corporate Booth with LED Walls",
  },
];

// Trade Show Management Page
const tradeShowManagementCultData = [
  {
    id: 1,
    src: "/Images/TradeShow1.avif",
    price: "$2999",
    description: "End-to-End Trade Show Planning",
  },
  {
    id: 2,
    src: "/Images/TradeShow2.jpg",
    price: "$3499",
    description: "On-Site Event Coordination",
  },
  {
    id: 3,
    src: "/Images/TradeShow3.jpeg",
    price: "$3999",
    description: "Logistics & Vendor Management",
  },
  {
    id: 4,
    src: "/Images/TradeShow4.avif",
    price: "$4499",
    description: "Post-Event Analysis & Reporting",
  },
];
// Home Maintenance Page
const homeMaintenanceCultData = [
  {
    id: 1,
    src: "/Images/HomeMaintenance1.avif",
    price: "$99",
    description: "Plumbing & Leak Repairs",
  },
  {
    id: 2,
    src: "/Images/HomeMaintenance2.jpg",
    price: "$149",
    description: "Electrical Wiring & Fixes",
  },
  {
    id: 3,
    src: "/Images/HomeMaintenance3.jpeg",
    price: "$129",
    description: "Carpentry & Furniture Repairs",
  },
  {
    id: 4,
    src: "/Images/HomeMaintenance4.avif",
    price: "$199",
    description: "Home Deep Cleaning Services",
  },
];

// Office Maintenance Page
const officeMaintenanceCultData = [
  {
    id: 1,
    src: "/Images/OfficeMaintenance1.avif",
    price: "$249",
    description: "Routine Office Cleaning & Sanitization",
  },
  {
    id: 2,
    src: "/Images/OfficeMaintenance2.jpg",
    price: "$299",
    description: "HVAC & Air Conditioning Maintenance",
  },
  {
    id: 3,
    src: "/Images/OfficeMaintenance3.jpeg",
    price: "$349",
    description: "IT & Network System Repairs",
  },
  {
    id: 4,
    src: "/Images/OfficeMaintenance4.avif",
    price: "$399",
    description: "Pest Control & Disinfection Services",
  },
];

// Facility Maintenance Page
const facilityMaintenanceCultData = [
  {
    id: 1,
    src: "/Images/FacilityMaintenance1.avif",
    price: "$499",
    description: "Building Security & Surveillance Setup",
  },
  {
    id: 2,
    src: "/Images/FacilityMaintenance2.jpg",
    price: "$599",
    description: "Elevator & Escalator Servicing",
  },
  {
    id: 3,
    src: "/Images/FacilityMaintenance3.jpeg",
    price: "$699",
    description: "Fire Safety & Alarm System Checks",
  },
  {
    id: 4,
    src: "/Images/FacilityMaintenance4.avif",
    price: "$799",
    description: "Landscape & Garden Maintenance",
  },
];

// Specialized Services Page
const specializedServicesCultData = [
  {
    id: 1,
    src: "/Images/SpecializedService1.avif",
    price: "$899",
    description: "Industrial Machinery Maintenance",
  },
  {
    id: 2,
    src: "/Images/SpecializedService2.jpg",
    price: "$999",
    description: "Solar Panel Installation & Servicing",
  },
  {
    id: 3,
    src: "/Images/SpecializedService3.jpeg",
    price: "$1099",
    description: "Biohazard & Hazardous Waste Cleanup",
  },
  {
    id: 4,
    src: "/Images/SpecializedService4.avif",
    price: "$1199",
    description: "Smart Home Automation Repairs",
  },
];
// Vehicle Branding Page
const vehicleBrandingCultData = [
  {
    id: 1,
    src: "/Images/VehicleBrand1.avif",
    price: "$499",
    description: "Full Vehicle Wrap Branding",
  },
  {
    id: 2,
    src: "/Images/VehicleBrand2.jpg",
    price: "$399",
    description: "Partial Car Decals & Stickers",
  },
  {
    id: 3,
    src: "/Images/VehicleBrand3.jpeg",
    price: "$599",
    description: "Fleet Branding for Businesses",
  },
  {
    id: 4,
    src: "/Images/VehicleBrand4.avif",
    price: "$299",
    description: "Custom Magnetic Car Signs",
  },
];

// Safety Equipment Page
const safetyEquipmentCultData = [
  {
    id: 1,
    src: "/Images/SafetyEquip1.avif",
    price: "$49",
    description: "High-Visibility Safety Jackets",
  },
  {
    id: 2,
    src: "/Images/SafetyEquip2.jpg",
    price: "$79",
    description: "Fire Extinguishers & Fire Blankets",
  },
  {
    id: 3,
    src: "/Images/SafetyEquip3.jpeg",
    price: "$129",
    description: "Industrial Safety Helmets & Gloves",
  },
  {
    id: 4,
    src: "/Images/SafetyEquip4.avif",
    price: "$199",
    description: "First Aid Kits & Emergency Response Gear",
  },
];

// Lighting Poles Page
const lightingPolesCultData = [
  {
    id: 1,
    src: "/Images/LightingPole1.avif",
    price: "$599",
    description: "Commercial Street Lighting Poles",
  },
  {
    id: 2,
    src: "/Images/LightingPole2.jpg",
    price: "$699",
    description: "Decorative Outdoor Lamp Posts",
  },
  {
    id: 3,
    src: "/Images/LightingPole3.jpeg",
    price: "$899",
    description: "Smart LED Lighting Poles",
  },
  {
    id: 4,
    src: "/Images/LightingPole4.avif",
    price: "$999",
    description: "Heavy-Duty Industrial Light Poles",
  },
];

// Banners Page
const bannersCultData = [
  {
    id: 1,
    src: "/Images/Banner1.avif",
    price: "$99",
    description: "Custom Vinyl Banners",
  },
  {
    id: 2,
    src: "/Images/Banner2.jpg",
    price: "$129",
    description: "Retractable Roll-Up Banners",
  },
  {
    id: 3,
    src: "/Images/Banner3.jpeg",
    price: "$149",
    description: "Mesh & Fabric Banners",
  },
  {
    id: 4,
    src: "/Images/Banner4.avif",
    price: "$179",
    description: "Backlit Display Banners",
  },
];

// Solar Lights Page
const solarLightsCultData = [
  {
    id: 1,
    src: "/Images/SolarLight1.avif",
    price: "$299",
    description: "Solar-Powered Street Lights",
  },
  {
    id: 2,
    src: "/Images/SolarLight2.jpg",
    price: "$199",
    description: "LED Solar Garden Lights",
  },
  {
    id: 3,
    src: "/Images/SolarLight3.jpeg",
    price: "$349",
    description: "High-Intensity Solar Floodlights",
  },
  {
    id: 4,
    src: "/Images/SolarLight4.avif",
    price: "$399",
    description: "Motion Sensor Solar Security Lights",
  },
];

// Security Surveillance System Page
const securitySurveillanceCultData = [
  {
    id: 1,
    src: "/Images/SecuritySystem1.avif",
    price: "$499",
    description: "CCTV Camera Installation",
  },
  {
    id: 2,
    src: "/Images/SecuritySystem2.jpg",
    price: "$799",
    description: "Smart Access Control Systems",
  },
  {
    id: 3,
    src: "/Images/SecuritySystem3.jpeg",
    price: "$699",
    description: "Remote Monitoring & Alarm Setup",
  },
  {
    id: 4,
    src: "/Images/SecuritySystem4.avif",
    price: "$999",
    description: "Biometric Security Systems",
  },
];

// Flag Stands Page
const flagStandsCultData = [
  {
    id: 1,
    src: "/Images/FlagStand1.avif",
    price: "$59",
    description: "Promotional Feather Flag Stands",
  },
  {
    id: 2,
    src: "/Images/FlagStand2.jpg",
    price: "$79",
    description: "Outdoor Heavy-Duty Flag Poles",
  },
  {
    id: 3,
    src: "/Images/FlagStand3.jpeg",
    price: "$99",
    description: "Telescopic & Adjustable Flag Stands",
  },
  {
    id: 4,
    src: "/Images/FlagStand4.avif",
    price: "$129",
    description: "Customized National Flag Stands",
  },
];

// Street Signs Page
const streetSignsCultData = [
  {
    id: 1,
    src: "/Images/StreetSign1.avif",
    price: "$149",
    description: "Reflective Road Sign Boards",
  },
  {
    id: 2,
    src: "/Images/StreetSign2.jpg",
    price: "$199",
    description: "Custom Traffic & Direction Signs",
  },
  {
    id: 3,
    src: "/Images/StreetSign3.jpeg",
    price: "$249",
    description: "Weather-Resistant Street Name Plates",
  },
  {
    id: 4,
    src: "/Images/StreetSign4.avif",
    price: "$299",
    description: "Construction & Warning Signage",
  },
];

// LED & Neon Signage Page
const ledNeonSignageCultData = [
  {
    id: 1,
    src: "/Images/LEDNeon1.avif",
    price: "$349",
    description: "Custom LED Business Signage",
  },
  {
    id: 2,
    src: "/Images/LEDNeon2.jpg",
    price: "$399",
    description: "Neon Light Art & Decorative Signs",
  },
  {
    id: 3,
    src: "/Images/LEDNeon3.jpeg",
    price: "$449",
    description: "Programmable Digital LED Displays",
  },
  {
    id: 4,
    src: "/Images/LEDNeon4.avif",
    price: "$499",
    description: "3D Backlit Letter Signage",
  },
];

// Exhibition Stands Page
const exhibitionStandsCultData = [
  {
    id: 1,
    src: "/Images/ExhibitionStand1.avif",
    price: "$999",
    description: "Portable Pop-Up Exhibition Stands",
  },
  {
    id: 2,
    src: "/Images/ExhibitionStand2.jpg",
    price: "$1299",
    description: "Custom Trade Show Booths",
  },
  {
    id: 3,
    src: "/Images/ExhibitionStand3.jpeg",
    price: "$1499",
    description: "Modular Exhibition Display Stands",
  },
  {
    id: 4,
    src: "/Images/ExhibitionStand4.avif",
    price: "$1799",
    description: "Double-Decker Trade Show Displays",
  },
];

// Merchandising Stands Page
const merchandisingStandsCultData = [
  {
    id: 1,
    src: "/Images/MerchStand1.avif",
    price: "$199",
    description: "Retail Display Stands",
  },
  {
    id: 2,
    src: "/Images/MerchStand2.jpg",
    price: "$249",
    description: "Custom Branded Shelving Units",
  },
  {
    id: 3,
    src: "/Images/MerchStand3.jpeg",
    price: "$299",
    description: "Interactive Product Display Stands",
  },
  {
    id: 4,
    src: "/Images/MerchStand4.avif",
    price: "$349",
    description: "Acrylic & Metal Merchandising Racks",
  },
];

// Flex Face Signage Page
const flexFaceSignageCultData = [
  {
    id: 1,
    src: "/Images/FlexSign1.avif",
    price: "$399",
    description: "Large Format Flex Signboards",
  },
  {
    id: 2,
    src: "/Images/FlexSign2.jpg",
    price: "$499",
    description: "Illuminated Backlit Flex Signage",
  },
  {
    id: 3,
    src: "/Images/FlexSign3.jpeg",
    price: "$599",
    description: "Weatherproof Outdoor Flex Banners",
  },
  {
    id: 4,
    src: "/Images/FlexSign4.avif",
    price: "$699",
    description: "Custom High-Resolution Print Flex Signs",
  },
];
// Institutional & Public Buildings Page
const institutionalPublicBuildingsCultData = [
  {
    id: 1,
    src: "/Images/Institutional1.avif",
    price: "$50,000",
    description: "School & University Buildings Construction",
  },
  {
    id: 2,
    src: "/Images/Institutional2.jpg",
    price: "$75,000",
    description: "Government & Municipal Structures",
  },
  {
    id: 3,
    src: "/Images/Institutional3.jpeg",
    price: "$100,000",
    description: "Hospitals & Healthcare Facility Development",
  },
  {
    id: 4,
    src: "/Images/Institutional4.avif",
    price: "$120,000",
    description: "Public Libraries & Community Centers",
  },
];

// Commercial & Industrial Construction Page
const commercialIndustrialConstructionCultData = [
  {
    id: 1,
    src: "/Images/Commercial1.avif",
    price: "$150,000",
    description: "High-Rise Office Buildings",
  },
  {
    id: 2,
    src: "/Images/Commercial2.jpg",
    price: "$200,000",
    description: "Retail & Shopping Mall Construction",
  },
  {
    id: 3,
    src: "/Images/Commercial3.jpeg",
    price: "$250,000",
    description: "Factories & Warehouse Development",
  },
  {
    id: 4,
    src: "/Images/Commercial4.avif",
    price: "$300,000",
    description: "Hospitality & Hotel Infrastructure",
  },
];

// Landscaping & Outdoor Structures Page
const landscapingOutdoorStructuresCultData = [
  {
    id: 1,
    src: "/Images/Landscaping1.avif",
    price: "$5,000",
    description: "Garden & Park Landscaping",
  },
  {
    id: 2,
    src: "/Images/Landscaping2.jpg",
    price: "$7,500",
    description: "Outdoor Decking & Patios",
  },
  {
    id: 3,
    src: "/Images/Landscaping3.jpeg",
    price: "$10,000",
    description: "Gazebos & Pergolas Construction",
  },
  {
    id: 4,
    src: "/Images/Landscaping4.avif",
    price: "$15,000",
    description: "Water Features & Artificial Ponds",
  },
];

// Lighting & Ceiling Design Page
const lightingCeilingDesignCultData = [
  {
    id: 1,
    src: "/Images/LightingCeiling1.avif",
    price: "$3,000",
    description: "Modern LED Ceiling Designs",
  },
  {
    id: 2,
    src: "/Images/LightingCeiling2.jpg",
    price: "$4,500",
    description: "Architectural Lighting & False Ceilings",
  },
  {
    id: 3,
    src: "/Images/LightingCeiling3.jpeg",
    price: "$6,000",
    description: "Industrial High-Bay & Pendant Lighting",
  },
  {
    id: 4,
    src: "/Images/LightingCeiling4.avif",
    price: "$8,000",
    description: "Smart Lighting & Automation Systems",
  },
];
// Luxury Interior Makeovers Page
const luxuryInteriorMakeoversCultData = [
  {
    id: 1,
    src: "/Images/LuxuryInterior1.avif",
    price: "$20,000",
    description: "High-End Living Room Remodeling",
  },
  {
    id: 2,
    src: "/Images/LuxuryInterior2.jpg",
    price: "$25,000",
    description: "Luxury Bedroom Transformation",
  },
  {
    id: 3,
    src: "/Images/LuxuryInterior3.jpeg",
    price: "$30,000",
    description: "Premium Kitchen Renovation",
  },
  {
    id: 4,
    src: "/Images/LuxuryInterior4.avif",
    price: "$35,000",
    description: "Exclusive Bathroom Spa Makeover",
  },
];

// Smart Home Integration Page
const smartHomeIntegrationCultData = [
  {
    id: 1,
    src: "/Images/SmartHome1.avif",
    price: "$5,000",
    description: "Automated Lighting & Smart Switches",
  },
  {
    id: 2,
    src: "/Images/SmartHome2.jpg",
    price: "$7,500",
    description: "Voice-Controlled Home Automation",
  },
  {
    id: 3,
    src: "/Images/SmartHome3.jpeg",
    price: "$10,000",
    description: "Advanced Security & Surveillance Setup",
  },
  {
    id: 4,
    src: "/Images/SmartHome4.avif",
    price: "$12,000",
    description: "Smart Climate & Energy Management",
  },
];

// Space Optimization & Partitioning Page
const spaceOptimizationCultData = [
  {
    id: 1,
    src: "/Images/SpaceOpt1.avif",
    price: "$4,000",
    description: "Modular Room Partitions & Dividers",
  },
  {
    id: 2,
    src: "/Images/SpaceOpt2.jpg",
    price: "$6,500",
    description: "Custom Storage & Shelving Solutions",
  },
  {
    id: 3,
    src: "/Images/SpaceOpt3.jpeg",
    price: "$8,000",
    description: "Multi-Functional Furniture Installation",
  },
  {
    id: 4,
    src: "/Images/SpaceOpt4.avif",
    price: "$10,000",
    description: "Compact Living & Smart Space Utilization",
  },
];

// Wall Treatments & Decor Page
const wallTreatmentsCultData = [
  {
    id: 1,
    src: "/Images/WallDecor1.avif",
    price: "$2,500",
    description: "Textured & 3D Wall Panels",
  },
  {
    id: 2,
    src: "/Images/WallDecor2.jpg",
    price: "$3,500",
    description: "Luxury Wallpaper & Mural Installation",
  },
  {
    id: 3,
    src: "/Images/WallDecor3.jpeg",
    price: "$4,500",
    description: "Decorative Wall Cladding & Finishes",
  },
  {
    id: 4,
    src: "/Images/WallDecor4.avif",
    price: "$6,000",
    description: "Custom Artistic Wall Paint & Graphics",
  },
];
// Kitchen Remodeling Page
const kitchenRemodelingCultData = [
  {
    id: 1,
    src: "/Images/KitchenRemodel1.avif",
    price: "$15,000",
    description: "Modern Open-Concept Kitchen Design",
  },
  {
    id: 2,
    src: "/Images/KitchenRemodel2.jpg",
    price: "$20,000",
    description: "Custom Cabinetry & Storage Solutions",
  },
  {
    id: 3,
    src: "/Images/KitchenRemodel3.jpeg",
    price: "$25,000",
    description: "Luxury Countertops & Backsplash Upgrades",
  },
  {
    id: 4,
    src: "/Images/KitchenRemodel4.avif",
    price: "$30,000",
    description: "Smart Kitchen with High-Tech Appliances",
  },
];

// Bathroom Renovation Page
const bathroomRenovationCultData = [
  {
    id: 1,
    src: "/Images/BathroomRenovation1.avif",
    price: "$10,000",
    description: "Elegant Vanity & Mirror Upgrades",
  },
  {
    id: 2,
    src: "/Images/BathroomRenovation2.jpg",
    price: "$15,000",
    description: "Spa-Style Shower & Bathtub Installation",
  },
  {
    id: 3,
    src: "/Images/BathroomRenovation3.jpeg",
    price: "$20,000",
    description: "Premium Tile & Waterproof Flooring",
  },
  {
    id: 4,
    src: "/Images/BathroomRenovation4.avif",
    price: "$25,000",
    description: "Automated Smart Bathroom Systems",
  },
];

// Flooring & Tiling Page
const flooringTilingCultData = [
  {
    id: 1,
    src: "/Images/Flooring1.avif",
    price: "$5,000",
    description: "Hardwood Flooring Installation",
  },
  {
    id: 2,
    src: "/Images/Flooring2.jpg",
    price: "$7,500",
    description: "Luxury Vinyl & Laminate Flooring",
  },
  {
    id: 3,
    src: "/Images/Flooring3.jpeg",
    price: "$10,000",
    description: "Marble & Porcelain Tile Work",
  },
  {
    id: 4,
    src: "/Images/Flooring4.avif",
    price: "$12,000",
    description: "Eco-Friendly Bamboo & Cork Flooring",
  },
];

// Energy-Efficient Upgrades Page
const energyEfficientUpgradesCultData = [
  {
    id: 1,
    src: "/Images/EnergyEfficient1.avif",
    price: "$3,500",
    description: "LED Lighting & Smart Dimmers",
  },
  {
    id: 2,
    src: "/Images/EnergyEfficient2.jpg",
    price: "$5,000",
    description: "Energy-Saving Smart Thermostats",
  },
  {
    id: 3,
    src: "/Images/EnergyEfficient3.jpeg",
    price: "$8,000",
    description: "High-Performance Insulated Windows",
  },
  {
    id: 4,
    src: "/Images/EnergyEfficient4.avif",
    price: "$10,000",
    description: "Solar Panels & Sustainable Energy Solutions",
  },
];
// Retail Store Renovation Page
const retailStoreRenovationCultData = [
  {
    id: 1,
    src: "/Images/RetailStore1.avif",
    price: "$25,000",
    description: "Modern Storefront & Window Displays",
  },
  {
    id: 2,
    src: "/Images/RetailStore2.jpg",
    price: "$35,000",
    description: "Customized Shelving & Layout Design",
  },
  {
    id: 3,
    src: "/Images/RetailStore3.jpeg",
    price: "$50,000",
    description: "Enhanced Lighting & Brand Aesthetics",
  },
  {
    id: 4,
    src: "/Images/RetailStore4.avif",
    price: "$65,000",
    description: "Complete Retail Space Transformation",
  },
];

// Office Interior & Fit-Outs Page
const officeInteriorFitOutsCultData = [
  {
    id: 1,
    src: "/Images/OfficeInterior1.avif",
    price: "$30,000",
    description: "Open-Plan Office Design",
  },
  {
    id: 2,
    src: "/Images/OfficeInterior2.jpg",
    price: "$45,000",
    description: "Conference & Meeting Room Upgrades",
  },
  {
    id: 3,
    src: "/Images/OfficeInterior3.jpeg",
    price: "$60,000",
    description: "Modular Workstations & Ergonomic Setup",
  },
  {
    id: 4,
    src: "/Images/OfficeInterior4.avif",
    price: "$80,000",
    description: "High-End Executive Office Fit-Outs",
  },
];

// Hospitality & Restaurant Upgrades Page
const hospitalityRestaurantUpgradesCultData = [
  {
    id: 1,
    src: "/Images/Hospitality1.avif",
    price: "$40,000",
    description: "Luxury Hotel Lobby Redesign",
  },
  {
    id: 2,
    src: "/Images/Hospitality2.jpg",
    price: "$55,000",
    description: "Themed Restaurant Interior Makeover",
  },
  {
    id: 3,
    src: "/Images/Hospitality3.jpeg",
    price: "$70,000",
    description: "Bar & Lounge Customization",
  },
  {
    id: 4,
    src: "/Images/Hospitality4.avif",
    price: "$90,000",
    description: "Full-Scale Hospitality Space Renovation",
  },
];

// Warehouse & Industrial Facility Renovation Page
const warehouseIndustrialRenovationCultData = [
  {
    id: 1,
    src: "/Images/Warehouse1.avif",
    price: "$50,000",
    description: "Structural Reinforcement & Repairs",
  },
  {
    id: 2,
    src: "/Images/Warehouse2.jpg",
    price: "$75,000",
    description: "Energy-Efficient Lighting & HVAC Upgrades",
  },
  {
    id: 3,
    src: "/Images/Warehouse3.jpeg",
    price: "$100,000",
    description: "Optimized Storage & Racking Solutions",
  },
  {
    id: 4,
    src: "/Images/Warehouse4.avif",
    price: "$120,000",
    description: "Smart Warehouse Automation Setup",
  },
];
// Foundation & Concrete Works Page
const foundationConcreteWorksCultData = [
  {
    id: 1,
    src: "/Images/Foundation1.avif",
    price: "$50,000",
    description: "Reinforced Concrete Foundations",
  },
  {
    id: 2,
    src: "/Images/Foundation2.jpg",
    price: "$70,000",
    description: "Slab, Beam, & Column Construction",
  },
  {
    id: 3,
    src: "/Images/Foundation3.jpeg",
    price: "$90,000",
    description: "Precast Concrete & Structural Elements",
  },
  {
    id: 4,
    src: "/Images/Foundation4.avif",
    price: "$110,000",
    description: "Basement Excavation & Retaining Walls",
  },
];

// Masonry & Brickwork Page
const masonryBrickworkCultData = [
  {
    id: 1,
    src: "/Images/Masonry1.avif",
    price: "$25,000",
    description: "Load-Bearing Brick & Block Walls",
  },
  {
    id: 2,
    src: "/Images/Masonry2.jpg",
    price: "$40,000",
    description: "Architectural Stone & Veneer Work",
  },
  {
    id: 3,
    src: "/Images/Masonry3.jpeg",
    price: "$55,000",
    description: "Decorative & Structural Masonry",
  },
  {
    id: 4,
    src: "/Images/Masonry4.avif",
    price: "$70,000",
    description: "Fireplace & Chimney Construction",
  },
];

// Steel & Metal Fabrication Page
const steelMetalFabricationCultData = [
  {
    id: 1,
    src: "/Images/Steel1.avif",
    price: "$60,000",
    description: "Structural Steel Frame Construction",
  },
  {
    id: 2,
    src: "/Images/Steel2.jpg",
    price: "$85,000",
    description: "Custom Metal Staircases & Railings",
  },
  {
    id: 3,
    src: "/Images/Steel3.jpeg",
    price: "$100,000",
    description: "Industrial & Commercial Steel Fabrication",
  },
  {
    id: 4,
    src: "/Images/Steel4.avif",
    price: "$120,000",
    description: "Aluminum & Stainless Steel Works",
  },
];

// Demolition & Site Preparation Page
const demolitionSitePreparationCultData = [
  {
    id: 1,
    src: "/Images/Demolition1.avif",
    price: "$20,000",
    description: "Full & Partial Building Demolition",
  },
  {
    id: 2,
    src: "/Images/Demolition2.jpg",
    price: "$35,000",
    description: "Land Clearing & Excavation Services",
  },
  {
    id: 3,
    src: "/Images/Demolition3.jpeg",
    price: "$50,000",
    description: "Hazardous Material Removal & Disposal",
  },
  {
    id: 4,
    src: "/Images/Demolition4.avif",
    price: "$65,000",
    description: "Site Grading & Soil Stabilization",
  },
];
// Wood Easel Canvas Page
const woodEaselCanvasCultData = [
  {
    id: 1,
    src: "/Images/WoodEasel1.avif",
    price: "$50",
    description: "Adjustable Wooden Easel Stand",
  },
  {
    id: 2,
    src: "/Images/WoodEasel2.jpg",
    price: "$75",
    description: "Professional Artist Easel",
  },
  {
    id: 3,
    src: "/Images/WoodEasel3.jpeg",
    price: "$100",
    description: "Heavy-Duty Studio Easel",
  },
  {
    id: 4,
    src: "/Images/WoodEasel4.avif",
    price: "$120",
    description: "Tabletop Wooden Easel",
  },
];

// Wood Sheet Page
const woodSheetCultData = [
  {
    id: 1,
    src: "/Images/WoodSheet1.avif",
    price: "$30",
    description: "Plywood Sheet 4x8 ft",
  },
  {
    id: 2,
    src: "/Images/WoodSheet2.jpg",
    price: "$45",
    description: "High-Quality MDF Board",
  },
  {
    id: 3,
    src: "/Images/WoodSheet3.jpeg",
    price: "$60",
    description: "Hardwood Veneer Sheets",
  },
  {
    id: 4,
    src: "/Images/WoodSheet4.avif",
    price: "$80",
    description: "Custom Cut Wooden Panels",
  },
];

// Wood Shelves Page
const woodShelvesCultData = [
  {
    id: 1,
    src: "/Images/WoodShelves1.avif",
    price: "$40",
    description: "Floating Wooden Shelf Set",
  },
  {
    id: 2,
    src: "/Images/WoodShelves2.jpg",
    price: "$60",
    description: "Rustic Wall-Mounted Shelves",
  },
  {
    id: 3,
    src: "/Images/WoodShelves3.jpeg",
    price: "$90",
    description: "Custom Wooden Bookshelf",
  },
  {
    id: 4,
    src: "/Images/WoodShelves4.avif",
    price: "$120",
    description: "Handcrafted Solid Wood Shelving Unit",
  },
];

// Customize Wood Page
const customizeWoodCultData = [
  {
    id: 1,
    src: "/Images/CustomizeWood1.avif",
    price: "$50",
    description: "Engraved Wooden Nameplate",
  },
  {
    id: 2,
    src: "/Images/CustomizeWood2.jpg",
    price: "$75",
    description: "Custom Laser-Cut Wooden Art",
  },
  {
    id: 3,
    src: "/Images/CustomizeWood3.jpeg",
    price: "$100",
    description: "Personalized Wooden Gift Box",
  },
  {
    id: 4,
    src: "/Images/CustomizeWood4.avif",
    price: "$150",
    description: "Handmade Wooden Wall Art",
  },
];

// Wood Frame Page
const woodFrameCultData = [
  {
    id: 1,
    src: "/Images/WoodFrame1.avif",
    price: "$25",
    description: "Classic Wooden Picture Frame",
  },
  {
    id: 2,
    src: "/Images/WoodFrame2.jpg",
    price: "$40",
    description: "Handcrafted Wooden Poster Frame",
  },
  {
    id: 3,
    src: "/Images/WoodFrame3.jpeg",
    price: "$60",
    description: "Antique Finish Wooden Frame",
  },
  {
    id: 4,
    src: "/Images/WoodFrame4.avif",
    price: "$80",
    description: "Customized Wooden Photo Frame",
  },
];

// Ramadan & Eid Wood Page
const ramadanEidWoodCultData = [
  {
    id: 1,
    src: "/Images/RamadanEid1.avif",
    price: "$30",
    description: "Wooden Ramadan Decor Set",
  },
  {
    id: 2,
    src: "/Images/RamadanEid2.jpg",
    price: "$50",
    description: "Engraved Eid Mubarak Plaque",
  },
  {
    id: 3,
    src: "/Images/RamadanEid3.jpeg",
    price: "$75",
    description: "Handmade Wooden Lantern",
  },
  {
    id: 4,
    src: "/Images/RamadanEid4.avif",
    price: "$100",
    description: "Custom Islamic Calligraphy Wood Art",
  },
];
// Festival Neon Page
const festivalNeonCultData = [
  {
    id: 1,
    src: "/Images/FestivalNeon1.avif",
    price: "$80",
    description: "Colorful LED Festival Neon Lights",
  },
  {
    id: 2,
    src: "/Images/FestivalNeon2.jpg",
    price: "$120",
    description: "Hanging Festival Neon Sign",
  },
  {
    id: 3,
    src: "/Images/FestivalNeon3.jpeg",
    price: "$150",
    description: "Animated Neon Light Display",
  },
  {
    id: 4,
    src: "/Images/FestivalNeon4.avif",
    price: "$180",
    description: "Custom Festival-Themed Neon",
  },
];

// Celebration Neon Page
const celebrationNeonCultData = [
  {
    id: 1,
    src: "/Images/CelebrationNeon1.avif",
    price: "$90",
    description: "Happy Birthday Neon Sign",
  },
  {
    id: 2,
    src: "/Images/CelebrationNeon2.jpg",
    price: "$130",
    description: "Wedding & Anniversary Neon Lights",
  },
  {
    id: 3,
    src: "/Images/CelebrationNeon3.jpeg",
    price: "$160",
    description: "Party Theme LED Neon Sign",
  },
  {
    id: 4,
    src: "/Images/CelebrationNeon4.avif",
    price: "$200",
    description: "Event-Themed Neon Wall Decor",
  },
];

// Office & Event Neon Page
const officeEventNeonCultData = [
  {
    id: 1,
    src: "/Images/OfficeNeon1.avif",
    price: "$100",
    description: "Motivational Quote Neon Sign",
  },
  {
    id: 2,
    src: "/Images/OfficeNeon2.jpg",
    price: "$150",
    description: "Corporate Logo LED Neon",
  },
  {
    id: 3,
    src: "/Images/OfficeNeon3.jpeg",
    price: "$180",
    description: "Event Stage Backdrop Neon Light",
  },
  {
    id: 4,
    src: "/Images/OfficeNeon4.avif",
    price: "$220",
    description: "Workspace & Lounge Neon Decor",
  },
];

// Customize Neon Page
const customizeNeonCultData = [
  {
    id: 1,
    src: "/Images/CustomizeNeon1.avif",
    price: "$120",
    description: "Personalized Name Neon Sign",
  },
  {
    id: 2,
    src: "/Images/CustomizeNeon2.jpg",
    price: "$170",
    description: "Custom LED Neon Logo",
  },
  {
    id: 3,
    src: "/Images/CustomizeNeon3.jpeg",
    price: "$200",
    description: "Handmade Custom Message Neon",
  },
  {
    id: 4,
    src: "/Images/CustomizeNeon4.avif",
    price: "$250",
    description: "Fully Customized Large Neon Sign",
  },
];

// Group all data
const cultData = {
  woodEaselCanvasCultData,
  woodSheetCultData,
  woodShelvesCultData,
  customizeWoodCultData,
  woodFrameCultData,
  ramadanEidWoodCultData,
  acrylicCultData,
  constructionCultData,
  homeCultData,
  renovationCultData,
  photographyCultData,
  todaysDealsCultData,
  newArrivalsCultData,
  printingCultData,
  topRatedCultData,
  beforeAfterComparisonsCultData,
  verifiedCustomerTestimonialsCultData,
  backInStockCultData,
  influencerPicksCultData,
  mostSoldItemsCultData,
  handmadeCustomCreationsCultData,
  clearanceSaleCultData,
  bundleOffersCultDat,
  flashDealsCultData,
  exclusiveDealsCultData,
  staffPickExclusiveOnlineOfferCultData,
  allTimeBestSellersCultData,
  acrylicKeychainsCultData,
  wallClocksCultData,
  wallDecorCultData,
  nameplatesCultData,
  customFramesCultData,
  acrylicFramesCultData,
  specialVideographyServicesCultData,
  promotionalVideosCultData,
  productPhotographyCultData,
  corporateShootsCultData,
  eventPhotographyCultData,
  personalizedPrintingCultData,
  largeFormatPrintingCultData,
  specialtyPrintingCultData,
  offsetPrintingCultData,
  digitalPrintingCultData,
  decorativePanelsCultData,
  canvasArtsCultData,
  eventSetupCultData,
  boothDesigningCultData,
  tradeShowManagementCultData,
  homeMaintenanceCultData,
  officeMaintenanceCultData,
  specializedServicesCultData,
  facilityMaintenanceCultData,
  vehicleBrandingCultData,
  safetyEquipmentCultData,
  lightingPolesCultData,
  bannersCultData,
  solarLightsCultData,
  securitySurveillanceCultData,
  flagStandsCultData,
  ledNeonSignageCultData,
  streetSignsCultData,
  exhibitionStandsCultData,
  merchandisingStandsCultData,
  flexFaceSignageCultData,
  institutionalPublicBuildingsCultData,
  commercialIndustrialConstructionCultData,
  landscapingOutdoorStructuresCultData,
  lightingCeilingDesignCultData,
  luxuryInteriorMakeoversCultData,
  smartHomeIntegrationCultData,
  spaceOptimizationCultData,
  wallTreatmentsCultData,
  kitchenRemodelingCultData,
  bathroomRenovationCultData,
  flooringTilingCultData,
  energyEfficientUpgradesCultData,
  retailStoreRenovationCultData,
  officeInteriorFitOutsCultData,
  hospitalityRestaurantUpgradesCultData,
  warehouseIndustrialRenovationCultData,
  foundationConcreteWorksCultData,
  masonryBrickworkCultData,
  steelMetalFabricationCultData,
  demolitionSitePreparationCultData,
  festivalNeonCultData,
  celebrationNeonCultData,
  officeEventNeonCultData,
  customizeNeonCultData,
  ramadanDealsData,
  woodDealsDatas,
};

export const useCult = () => {
  return useContext(CultContext);
};

// Exporting for direct import if needed
export { cultData };
