import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { category } = useParams(); // Get category from URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    let apiUrl = "https://dummyjson.com/products";
    if (category && category !== "all") {
      apiUrl = `https://dummyjson.com/products/category/${category}`;
    }

    axios
      .get(apiUrl)
      .then((response) => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [category]); // Refetch when category changes

  return (
    <div className="container mx-auto px-6 py-5 bg-white">
      {loading && <p>Loading products...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      <div className="flex gap-16 justify-center flex-wrap">
        {products.length > 0 ? (
          products.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
