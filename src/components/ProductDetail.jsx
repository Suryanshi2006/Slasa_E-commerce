import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold">Product Details</h1>
      <p className="text-gray-600 mt-2">Product ID: {id}</p>
      {/* Fetch product data using the ID or display static content */}
    </div>
  );
};

export default ProductDetail;
