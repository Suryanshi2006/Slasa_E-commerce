import React from "react";

const PromotionOffers = () => {
  return (
    <div className="container mx-auto mt-10 mb-6 bg-gray-200">
      <h2 className="text-2xl font-bold text-[#3087d1] flex items-center gap-2 mb-4">
        <span className="border-t-2 border-[#3087d1] w-32"></span>
        Promotion And Offers
        <span className="border-t-2 border-[#3087d1] flex-grow"></span>
      </h2>

      <div className="max-w-screen-lg mx-auto px-3">
        {/* Grid Layout */}
        <div className="grid grid-cols-2 gap-4">
          {/* Left Card */}
          <div className="border-4 border-[#3087d1] p-2">
            <h3 className="text-md font-semibold text-[#3087d1]">
              Upto 50% off | Unique Finds According to Preference
            </h3>
            <img src="/Images/Promotion.jpeg" alt="Sofa Offer" className="w-full h-[400px] mt-2 object-cover" />

            <div className="mt-2 text-sm">
              <p className="font-bold">UMASIS (A Bihar Govt. Undertaking)</p>
              <p className="text-xs">Handmade stone Sleeping Buddha Statue</p>
              <p className="font-semibold">Price: $255.00</p>
            </div>
            <button className="!bg-[#3087d1] text-white px-3 py-1 mt-2 rounded text-sm">
              Explore
            </button>
          </div>

          {/* Right Side */}
          <div className="grid grid-rows-2 gap-3">
            <img src="/Images/Bigsale.jpeg" alt="Sofa Offer" className="w-full h-[250px] mt-2 object-cover" />
            <img src="/Images/sale.jpeg" alt="Sofa Offer" className="w-full h-[250px] mt-2 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionOffers;
