import React from "react";
import { usePromotion } from "../context/PromotionContext"; // Import the context hook

const PromotionOffers = ({ promotionId }) => {
  const { promotions } = usePromotion(); // Get promotions from context
  const promotion = promotions.find((p) => p.id === promotionId); // Find specific promotion

  if (!promotion) {
    return <p className="text-center text-gray-500">No promotion available.</p>;
  }

  return (
    <div className="mt-10 mb-6 bg-gray-200">
  <h2 className="text-2xl font-bold text-[#3087d1] flex items-center gap-2 mb-4">
    <span className="border-t-2 border-[#3087d1] w-32"></span>
    Promotion And Offers
    <span className="border-t-2 border-[#3087d1] flex-grow"></span>
  </h2>

  {/* Increase max width */}
  <div className="max-w-screen-xl mx-auto px-4">
    <div className="grid grid-cols-[3fr_2fr] gap-6">
      
      {/* Left Card - Increased width */}
      <div className="border-4 border-[#3087d1] p-4">
        <h3 className="text-lg font-semibold text-[#3087d1]">
          {promotion.title}
        </h3>
        <img
          src={promotion.image}
          alt="Promotion"
          className="w-full h-[450px] mt-2 object-cover"
        />
        <div className="mt-2 text-sm">
          <p className="font-bold">{promotion.brand}</p>
          <p className="text-xs">{promotion.description}</p>
          <p className="font-semibold">Price: {promotion.price}</p>
        </div>
        <button className="!bg-[#3087d1] text-white px-4 py-2 mt-3 rounded text-sm">
          Explore
        </button>
      </div>

      {/* Right Side - Increased width */}
      <div className="grid grid-rows-2 gap-4">
        <img
          src="/Images/Bigsale.jpeg"
          alt="Big Sale"
          className="w-full h-[270px] object-cover"
        />
        <img
          src="/Images/sale.jpeg"
          alt="Sale"
          className="w-full h-[270px] object-cover"
        />
      </div>
    </div>
  </div>
</div>

  );
};

export default PromotionOffers;
