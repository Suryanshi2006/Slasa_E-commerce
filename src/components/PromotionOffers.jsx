import React from "react";
import { usePromotion } from "../context/PromotionContext"; // Import the context hook

const PromotionOffers = ({ promotionId }) => {
  const { promotions } = usePromotion(); // Get promotions from context
  const promotion = promotions.find((p) => p.id === promotionId); // Find specific promotion

  if (!promotion) {
    return <p className="text-center text-gray-500">No promotion available.</p>;
  }

  return (
    <div className="container mx-auto mt-10 mb-6 bg-gray-200">
      <h2 className="text-2xl font-bold text-[#3087d1] flex items-center gap-2 mb-4">
        <span className="border-t-2 border-[#3087d1] w-32"></span>
        Promotion And Offers
        <span className="border-t-2 border-[#3087d1] flex-grow"></span>
      </h2>

      <div className="max-w-screen-lg mx-auto px-3">
        <div className="grid grid-cols-2 gap-4">
          {/* Left Card */}
          <div className="border-4 border-[#3087d1] p-2">
            <h3 className="text-md font-semibold text-[#3087d1]">
              {promotion.title}
            </h3>
            <img
              src={promotion.image}
              alt="Promotion"
              className="w-full h-[400px] mt-2 object-cover"
            />
            <div className="mt-2 text-sm">
              <p className="font-bold">{promotion.brand}</p>
              <p className="text-xs">{promotion.description}</p>
              <p className="font-semibold">Price: {promotion.price}</p>
            </div>
            <button className="!bg-[#3087d1] text-white px-3 py-1 mt-2 rounded text-sm">
              Explore
            </button>
          </div>

          {/* Right Side */}
          <div className="grid grid-rows-2 gap-3">
            <img
              src="/Images/Bigsale.jpeg"
              alt="Big Sale"
              className="w-full h-[250px] mt-2 object-cover"
            />
            <img
              src="/Images/sale.jpeg"
              alt="Sale"
              className="w-full h-[250px] mt-2 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionOffers;
