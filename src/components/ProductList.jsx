import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://dummyjson.com/products") // 🔹 Fetching from API
      .then(response => {
        const updatedProducts = response.data.products.map(product => ({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.thumbnail,
          rating: Math.round(product.rating),
          reviews: Math.floor(product.stock / 2),  // 🔹 Estimated reviews
          discount: `${Math.round(product.discountPercentage)}%`,
          tag: product.category.toUpperCase(), // 🔹 Category as tag
          shipping: "In Stock - Ships in 3-5 days | Free Shipping" // 🔹 Static shipping info
        }));
        setProducts(updatedProducts);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto px-6 py-5 bg-white">
      {loading && <p>Loading products...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      <div className="flex gap-16 justify-center flex-wrap">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
