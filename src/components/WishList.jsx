import React, { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  // Remove item from wishlist
  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h2 className="text-3xl font-bold text-center text-[#3087d1] mb-6">Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-center text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {wishlist.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
                <h3 className="text-lg font-semibold text-[#3087d1] mt-2">{product.title}</h3>
                <p className="text-gray-800 font-bold">Price: ${product.price}</p>
              </Link>
              <button
                onClick={() => removeFromWishlist(product.id)}
                className="mt-3 flex items-center bg-red-500 text-[#3087d1] px-3 py-2 rounded-md hover:bg-red-600 transition-all"
              >
                <Trash2 size={18} className="mr-2" /> Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
