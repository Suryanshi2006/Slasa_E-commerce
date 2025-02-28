import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";

const ProductCard = ({ product }) => {
  if (!product) return null;

  // Wishlist State
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Check if product is in wishlist when component mounts
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setIsWishlisted(wishlist.some((item) => item.id === product.id));
  }, [product.id]);

  // Function to handle Wishlist
  const toggleWishlist = () => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (isWishlisted) {
      wishlist = wishlist.filter((item) => item.id !== product.id);
      setIsWishlisted(false);
    } else {
      wishlist.push(product);
      setIsWishlisted(true);
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  };

  return (
    <div className="max-w-xs bg-gray-200 shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all p-4 rounded-lg">
      <div className="relative">
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.title} className="w-full h-50 object-cover rounded-lg" />
          {product.tag && (
            <span className="absolute bottom-12 left-2 bg-gray-400 text-black text-xs px-2 py-1 rounded">
              {product.tag}
            </span>
          )}
          {product.discount && (
            <span className="absolute bottom-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
              {product.discount} Off
            </span>
          )}
        </Link>
        {/* Wishlist Button */}
        <button
  onClick={toggleWishlist}
  className={`absolute top-2 right-2 p-2 rounded-full transition-all duration-300 shadow-md hover:scale-110 ${
    isWishlisted ? "bg-[#3087d1] text-white" : "bg-gray-300 text-gray-600"
  }`}
>
  <Heart size={20} className={isWishlisted ? "fill-[#3087d1]" : " text-[#3087d1]"} />
</button>

      </div>
      <div className="p-3">
        <h3 className="text-lg font-semibold mt-2 text-[#3087d1]">{product.title}</h3>
        <p className="text-gray-800 font-bold">Price: ${product.price}</p>
        <div className="flex items-center mt-1">
          <span className="text-yellow-500">{"★".repeat(product.rating)}</span>
          <span className="text-gray-500 text-sm ml-1">({product.reviews} Reviews)</span>
        </div>
        <p className="text-gray-600 text-sm mt-1">{product.shipping}</p>
        <div className="mt-3 flex gap-2">
          <button className="!bg-[#3087d1] text-white px-3 py-2 text-sm">Buy Now</button>
          <button className="bg-gray-400 text-gray-800 px-3 py-2 text-sm">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
