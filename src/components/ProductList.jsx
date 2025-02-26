import React from "react";
import ProductCard from "./ProductCard";
const products = [
    {
      id: 1,  // Add a unique ID
      image: "./Images/Bedroom.jpeg",
      title: "Home Kitchen",
      price: "499.00",
      rating: 4,
      reviews: 120,
      discount: "45%",
      tag: "Daily Deals",
      shipping: "In Stock - Ships in 3-5 days | Free Shipping"
    },
    {
      id: 2,  // Add another unique ID
      image: "./Images/Bedroom.jpeg",
      title: "Modern Sofa",
      price: "899.00",
      rating: 5,
      reviews: 85,
      discount: "30%",
      tag: "Best Seller",
      shipping: "In Stock - Ships in 3-5 days | Free Shipping"
    },
    {
      id: 3,
      image: "./Images/Bedroom.jpeg",
      title: "Office Chair",
      price: "199.00",
      rating: 4,
      reviews: 50,
      discount: "20%",
      tag: "Limited Offer",
      shipping: "In Stock - Ships in 3-5 days | Free Shipping"
    }
  ];

const ProductList = () => {
  return (
    <div className="container mx-auto px-6 py-5 bg-gray-200">
      <div className="flex gap-16 justify-center flex-wrap">
      
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
