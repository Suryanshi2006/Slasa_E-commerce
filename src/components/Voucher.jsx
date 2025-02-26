import React from 'react';

const Voucher = () => {
  return (
    <div className="container mx-auto mt-10 mb-6 bg-gray-200 p-6 rounded-lg shadow-lg">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#3087d1]">Voucher</h1>
      </div>

      {/* Voucher Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-0 mt-6">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img 
            src="Images/Bed.jpeg" 
            alt="Voucher" 
            className="w-full h-[378px] object-cover rounded-l-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 bg-[#3087d1] opacity-90 p-6 text-white rounded-r-lg">
          <h1 className="text-lg font-semibold p-2">Online Exclusive</h1>
          <h3 className="p-2 text-lg">Sofas | Walls | Acrylic Decor</h3>
          <h1 className="p-2 text-xl font-bold">Extra 10% off</h1>
          <p className="p-2">50% Sale</p>
          <p className="p-2">Latest Collections</p>

          {/* Explore Button */}
          <button className="bg-white text-[#3087d1] font-semibold px-4 py-2 mt-4 rounded-lg hover:bg-gray-100 transition duration-300">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Voucher;
