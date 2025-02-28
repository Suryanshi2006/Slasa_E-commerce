import React from 'react';

const ProductSection = ({ title, description }) => {
  return (
    <div className='container mx-auto mt-2'>
      <div className='bg-black pl-40 text-white py-4 '>
        <h1>{title}</h1> {/* Dynamic title */}
        <p>{description}</p> {/* Dynamic description */}
      </div>
    </div>
  );
};

export default ProductSection;
