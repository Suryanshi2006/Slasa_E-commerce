import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (query) {
      fetch(`https://fakestoreapi.com/products`)
        .then((res) => res.json())
        .then((data) => {
          const filteredProducts = data.filter((product) =>
            product.title.toLowerCase().includes(query.toLowerCase())
          );
          setProducts(filteredProducts);
        });
    }
  }, [query]);

  return (
    <div>
      <h2>Search Results for "{query}"</h2>
      <ul>
        {products.length > 0 ? (
          products.map((product) => <li key={product.id}>{product.title}</li>)
        ) : (
          <p>No products found.</p>
        )}
      </ul>
    </div>
  );
};

export default SearchResults;
