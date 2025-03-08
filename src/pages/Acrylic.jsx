import React from "react";
import ProductSection from "../components/ProductSection";
import ProductCard from "../components/ProductCard";
import ProductList from "../components/ProductList";
import HeroSection from "../components/HeroSection";
import Hero from "../components/Hero";
import HomeCategories from "../components/Homecategories";
import PackageSection from "../components/PackageSection";
import Cult from "../components/Cult";
import PromotionOffers from "../components/PromotionOffers";
import Voucher from "../components/Voucher";
import { useVouchers } from "../context/VoucherContext";
import { usePackages } from "../context/PackageContext";
import { CultProvider, cultData } from "../context/CultContext"; // ✅ Import CultProvider & cultData
import Footer from "../components/Footer";
import Grid from "../components/Grid";
import ImageCarousel from "../components/ImageCarousel";

const Acrylic = () => {
  
  const sectionsData = [
    {
      title: "Pick up where you left off",
      items: [
        { image: "/Images/Acrylic1.avif", alt: "Item 1", caption: "Acrylic Triangle shape..." },
        { image: "/Images/Acrylic2.jpeg", alt: "Item 2", caption: "Canvas Decor..." },
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
        { image: "/Images/Exclusive9.jpeg", alt: "Lotion" },
      ],
      linkText: "More in Buy Again",
      linkHref: "#"
    },
    {
      title: "Get bulk discounts",
      items: [{ image: "/Images/Exclusive22.jpeg", alt: "Amazon Business", caption: "+ Top B2B deals !!" }],
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

  const {
    acrylicPackages,
    constructionPackages,
    renovationPackages,
    newArrivalsPackages,
    photographyPackages,
    printingPackages,
    todaysDealsPackages,
  } = usePackages();

  const title = "Acrylic Accessories";
  const description =
    "Explore our wide range of stylish and durable acrylic accessories for your home and office decor.";

    const viewedItems = [
      "/Images/Exclusive.jpeg",
      "/Images/Exclusive29.jpeg",
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
  return (
    <>
      <div >
      <Hero
  slides={[
    "/Images/HeroWood.png",
    "/Images/Sale1.jpeg",
    "/Images/AcrylicWall.jpeg",
    "/Images/AcrylicWood.jpeg",
 
  
    "/Images/Premium.jpeg",
  
  ]}
  buttonText="Explore"
  buttonLink="/explore"
 
/>
<Grid sections={sectionsData} />
<ImageCarousel title="Related to items you've viewed" images={viewedItems} />
<ImageCarousel title="Inspired by your shopping trends" images={shoppingTrends} />

        <ProductSection title={title} description={description} className="mt-20" />

        <div className="flex justify-center gap-4 flex-wrap p-4">
          <ProductCard />
          <ProductList />
        </div>

        <HeroSection />
        <a href="/your-target-page" className="block w-full">
          <div className="flex justify-center w-full max-w-screen-lg mx-auto !px-8 mt-8 mb-8">
            <HomeCategories />
          </div>
        </a>

        <PackageSection
          packages={[...acrylicPackages, ...newArrivalsPackages, ...todaysDealsPackages]}
        />

        {/* ✅ Wrap Cult with CultProvider and pass acrylicCultData */}
        <CultProvider value={cultData.acrylicCultData}>
          <Cult />
        </CultProvider>

        <PromotionOffers promotionId={4} />

        {voucherData.map((voucher, index) => (
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
      </div>
    </>
  );
};

export default Acrylic;
