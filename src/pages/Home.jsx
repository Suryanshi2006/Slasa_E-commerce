import React from "react";
import { Outlet } from "react-router-dom"; // Import Outlet

import ProductCard from "../components/ProductCard.jsx";
import ProductList from "../components/ProductList.jsx";
import HeroSection from "../components/HeroSection.jsx";

import ProductSection from "../components/ProductSection.jsx";
import HomeCategories from "../components/Homecategories.jsx";
import Cult from "../components/Cult.jsx";
import PromotionOffers from "../components/PromotionOffers.jsx";
import PackageSection from "../components/PackageSection.jsx"; // Updated import
import Voucher from "../components/Voucher.jsx";
import Hero from "../components/Hero.jsx";
import { useVouchers } from "../context/VoucherContext";
import { usePackages } from "../context/PackageContext"; // Corrected import
import { CultProvider, cultData } from "../context/CultContext"; 
import Footer from "../components/Footer.jsx";
import ImageCarousel from "../components/ImageCarousel.jsx";
import Grid from "../components/Grid.jsx";



const Home = () => {

  const sectionsData = [
    {
      title: "Pick up where you left off",
      items: [
        { image: "/Images/Acrylic1.avif", alt: "Item 1", caption: "Acrylic Triangle shape..." },
        { image: "/Images/Exclusive22.jpeg", alt: "Item 2", caption: "Canvas Decor..." },
        { image: "/Images/Exclusive21.jpeg", alt: "Item 3", caption: "Wall Decor..." },
        { image: "/Images/Exclusive15.jpeg", alt: "Item 4", caption: "Canvas Art..." },
      ],
      linkText: "See more",
      linkHref: "#"
    },
    {
      title: "Continue shopping deals",
      items: [
        { image: "/Images/Exclusive5.jpeg", alt: "Model 1" },
        { image: "/Images/Exclusive4.jpeg", alt: "Model 2" },
        { image: "/Images/Exclusive6.jpeg", alt: "Model 3" },
        { image: "/Images/Exclusive2.jpeg", alt: "Model 4" },
      ],
      linkText: "See all deals",
      linkHref: "#"
    },
    {
      title: "Buy again",
      items: [
        { image: "/Images/Exclusive.jpeg", alt: "Tide" },
        { image: "/Images/Exclusive7.jpeg", alt: "Trimmer" },
        { image: "/Images/Exclusive9.jpeg", alt: "Lotion" },
        { image: "/Images/Exclusive32.jpeg", alt: "Lotion" },
      ],
      linkText: "More in Buy Again",
      linkHref: "#"
    },
    {
      title: "Get bulk discounts",
      items: [{ image: "/Images/Bedroom.jpeg", alt: "Amazon Business", caption: "+ Top B2B deals !!" }],
      specialLayout: "bulkDiscounts"
    },
    {
      title: "Wall Decor",
      items: [
        { image: "/Images/Exclusive23.jpeg", alt: "Decor 1", caption: "The Beautiful Decor for your Beautiful wall", discountPrice: "-4% ₹42,9.00", originalPrice: "M.R.P: ₹44,9.00" },
        { image: "/Images/Exclusive22.jpeg", alt: "Decor 2" },
        { image: "/Images/Exclusive27.jpeg", alt: "Decor 3" },
        { image: "/Images/Exclusive29.jpeg", alt: "Decor 4" },
      ],
      specialLayout: "highlightDeal"
    }
  ];
  const sectionsData2 = [
    {
      title: "Continue Shopping for",
      items: [
        { image: "/Images/acrylicSheets.avif", alt: "Item 1", caption: "Acrylic Triangle shape..." },
        { image: "/Images/cult.jpeg", alt: "Item 2", caption: "Canvas Decor..." },
        { image: "/Images/Exclusive28.jpeg", alt: "Item 3", caption: "Wall Decor..." },
        { image: "/Images/Exclusive25.jpeg", alt: "Item 4", caption: "Canvas Art..." },
      ],
      linkText: "See more",
      linkHref: "#"
    },
    {
      title: "More items to be consider",
      items: [
        { image: "/Images/Exclusive5.jpeg", alt: "Model 1" },
        { image: "/Images/Exclusive4.jpeg", alt: "Model 2" },
        { image: "/Images/Exclusive6.jpeg", alt: "Model 3" },
        { image: "/Images/Exclusive2.jpeg", alt: "Model 4" },
      ],
      linkText: "See all deals",
      linkHref: "#"
    },
    {
      title: "Pick up where You left",
      items: [
        { image: "/Images/Exclusive.jpeg", alt: "Tide" },
        { image: "/Images/Exclusive7.jpeg", alt: "Trimmer" },
        { image: "/Images/Exclusive9.jpeg", alt: "Lotion" },
        { image: "/Images/Exclusive32.jpeg", alt: "Lotion" },
      ],
      linkText: "More in Buy Again",
      linkHref: "#"
    },
    {
      title: "Kepp Shopping for",
      items: [{ image: "/Images/Bathroom.avif", alt: "Amazon Business", caption: "+ Top B2B deals !!" }],
      specialLayout: "bulkDiscounts"
    },
    {
      title: "Acrylic Wood",
      items: [
        { image: "/Images/eael4.avif", alt: "Decor 1", caption: "The Beautiful Decor for your Beautiful wall", discountPrice: "-4% ₹42,9.00", originalPrice: "M.R.P: ₹44,9.00" },
        { image: "/Images/easel8.avif", alt: "Decor 2" },
        { image: "/Images/easel6.avif", alt: "Decor 3" },
        { image: "/Images/easel7.avif", alt: "Decor 4" },
      ],
      specialLayout: "highlightDeal"
    }
  ];
  const {
    voucherData,
    constructionVoucher,
    homepageVouchers,
    newArrivalsVoucher,
    photographyVideographyVoucher,
    printingVoucher,
    renovationVoucher,
    todaysDealsVoucher,
  } = useVouchers();

  // Access packages from context
  const {
    acrylicPackages,
    constructionPackages,
    renovationPackages,
    newArrivalsPackages,
    photographyPackages,
    printingPackages,
    todaysDealsPackages,
  } = usePackages();

  const title = "Featured Products";
  const description =
    "Discover our best-selling products, carefully selected to meet all your needs for home renovation and construction projects.";
    const viewedItems = [
      "/Images/Exclusive.jpeg",
      "/Images/Exclusive29.jpeg",
      "/Images/Exclusive27.jpeg",
      "/Images/Exclusive22.jpeg",
      "/Images/Exclusive21.jpeg",
      // "/Image/Bathroom.avif",
      "/Images/Exclusive27.jpeg",
      "/Images/Exclusive22.jpeg",
      "/Images/Exclusive21.jpeg",
    ];
  
    const shoppingTrends = [
      "/Images/Exclusive17.jpeg",
      "/Images/Exclusive16.jpeg",
      "/Images/Exclusive13.jpeg",
      "/Images/Exclusive7.jpeg",
      "/Images/Exclusive9.jpeg",
      "/Images/Exclusive4.jpeg",
      "/Images/Exclusive9.jpeg",
    ];

    const viewedItems2 = [
      "/Images/Ramdan1.webp",
      "/Images/Ramdan2.webp",
      "/Images/Ramdan3.webp",
      "/Images/Ramdan6.webp",
      "/Images/Exclusive21.jpeg",
      // "/Image/Bathroom.avif",
      "/Images/Exclusive27.jpeg",
      "/Images/Exclusive22.jpeg",
      "/Images/Ramdan7.webp",
    ];
  
    const shoppingTrends2 = [
      "/Images/Ramdan7.webp",
      "/Images/Exclusive16.jpeg",
      "/Images/Ramdan6.webp",
      "/Images/Ramdan2.webp",
      "/Images/Exclusive9.jpeg",
      "/Images/Exclusive4.jpeg",
      "/Images/Exclusive9.jpeg",
    ];

  return (
    <div className="bg-white min-h-screen w-full overflow-hidden m-0 p-0">


      <div className=" min-h-screen overflow-hidden bg-white">

      <Hero
  slides={[
    "/Images/Sale1.jpeg",
    "/Images/AcrylicWood.jpeg",
    "/Images/AcrylicWall.jpeg",
    "/Images/HeroWood.png",
    "/Images/Premium.jpeg"
  
  ]}
   buttonText="Explore"
  buttonLink="/explore"
 
/>
<Grid sections={sectionsData} />
<ImageCarousel title="Related to items you've viewed" images={viewedItems} />
<ImageCarousel title="Inspired by your shopping trends" images={shoppingTrends} />

        <ProductSection title={title} description={description} mt-15 />
      </div>

      <div className="flex justify-center gap-4 flex-wrap p-4 mt-[-10px]">
        <ProductCard />
        <ProductList />
      </div>

    

      <HeroSection />

      <a href="/your-target-page" className="block w-full">
        <div className="flex justify-center w-full max-w-screen-lg mx-auto !px-8 mt-8 mb-8">
          <HomeCategories />
        </div>
      </a>

      {/* Pass packages from context */}
      <Grid sections={sectionsData2} />
      <PackageSection
        packages={[
          ...acrylicPackages,
          ...constructionPackages,
          ...renovationPackages,
          ...printingPackages,
          ...todaysDealsPackages,
        ]}
      />
      <ImageCarousel title="Based on your browsing history" images={viewedItems2} />
      <ImageCarousel title="You might also like" images={shoppingTrends2} />

<CultProvider value={cultData.homeCultData}>
          <Cult />
        </CultProvider>
        <ImageCarousel title="More top Picks for You" images={shoppingTrends} />
      <PromotionOffers promotionId={2} />
      <PromotionOffers promotionId={1} />
      {homepageVouchers.map((voucher, index) => (
        <Voucher
          key={index}
          title={voucher.title}
          subtitle={voucher.subtitle}
          discount={voucher.discount}
          sale={voucher.sale}
          categories={voucher.categories}
          imageUrl={voucher.imageUrl}
          buttonText={voucher.buttonText}
          buttonLink={voucher.buttonLink}
        />
      ))}
      <Footer/>

      <Outlet />
    </div>
  );
};

export default Home;
