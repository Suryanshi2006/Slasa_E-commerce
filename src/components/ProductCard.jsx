import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";

const ProductCard = ({ product }) => {
  if (!product) return null;

  const navigate = useNavigate();
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setIsWishlisted(wishlist.some((item) => item.id === product.id));
  }, [product?.id]);

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

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (!cart.some((item) => item.id === product.id)) {
      cart.push({ ...product, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    alert("Product added to cart!");
  };

  const buyNow = () => {
    navigate("/checkout", { state: { product } });
  };

  return (
    <div className="max-w-xs bg-gray-100 shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all p-4">
      <div className="relative">
        <Link to={`/product/${product.id}`}>
          <img src={product?.image || "./Images/Exclusive26.jpeg"} alt={product?.title || "Product"} className="w-full h-50 object-cover rounded-lg" />
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
        <button
          onClick={toggleWishlist}
          className={`absolute top-2 right-2 p-2 rounded-full transition-all duration-300 shadow-md hover:scale-110 border-2 ${
            isWishlisted
              ? "bg-[#3087d1] text-white hover:!border-[#3087d1]"
              : "bg-gray-300 text-gray-600 hover:!border-[#3087d1]"
          }`}
        >
          <Heart size={20} className={isWishlisted ? "text-white fill-[#3087d1]" : "text-[#3087d1]"} />
        </button>
      </div>
      <div className="p-3">
        <h3 className="text-lg font-semibold mt-2 text-[#3087d1]">{product.title}</h3>
        <p className="text-gray-800 font-bold">Price: ${product.price}</p>
        <div className="flex items-center mt-1">
          <span className="text-yellow-500">{"★".repeat(product.rating)}</span>
          <span className="text-gray-500 text-sm ml-1">
            ({Array.isArray(product?.reviews) ? product.reviews.length : 0} Reviews)
          </span>
        </div>
        <p className="text-gray-600 text-sm mt-1">{product.shipping}</p>
        <div className="mt-3 flex gap-2">
          <button onClick={buyNow} className="!bg-[#3087d1] text-white px-3 py-2 text-sm">Buy Now</button>
 <button onClick={() => addToCart(product, 1)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
