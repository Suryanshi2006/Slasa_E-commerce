import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const initialProduct = location.state?.product;
  const [product, setProduct] = useState(initialProduct);
  const [quantity, setQuantity] = useState(1);
  const [pincode, setPincode] = useState("");
  const [deliveryMessage, setDeliveryMessage] = useState("");
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  // Fetch product if not available in state
  useEffect(() => {
    if (!initialProduct) {
      axios.get(`https://run.mocky.io/v3/ee83b3db-2f99-45c4-b963-47a38b571a30${id}`)
        .then((response) => {
          setProduct({
            ...response.data,
            deliveryInfo: response.data.deliveryInfo || {
              estimatedDelivery: "5-7 Business Days",
              returnPolicy: "30-Day Return Policy",
              cashOnDelivery: true
            }
          });
        })
        .catch(error => console.error("Error fetching product details", error));
    }
  }, [id, initialProduct]);

  if (!product) return <p className="text-center text-gray-600 mt-20">Loading product...</p>;

  const discountedPrice = (product.price * (1 - product.discountPercentage / 100)).toFixed(2);

  // Pincode validation (Using API)
  const checkPincode = () => {
    if (/^\d{6}$/.test(pincode)) {
      axios.post("https://api.yoursite.com/check-pincode", { pincode })
        .then(response => {
          setDeliveryMessage(response.data.deliverable 
            ? `✅ ${response.data.message}`
            : "❌ Not deliverable to your location."
          );
        })
        .catch(error => console.error("Error checking pincode", error));
    } else {
      setDeliveryMessage("❌ Please enter a valid 6-digit pincode.");
    }
  };

  // Handle Add to Cart (Using API)
  const handleAddToCart = () => {
    axios.post("https://api.yoursite.com/cart", {
      userId: "1234",  // Replace with actual user ID from authentication
      productId: product.id,
      quantity
    })
    .then(() => {
      setIsAddedToCart(true);
    })
    .catch(error => console.error("Error adding to cart", error));
  };

  // Handle Buy Now (Checkout API)
  const handleBuyNow = () => {
    axios.post("https://api.yoursite.com/checkout", {
      userId: "1234", // Replace with actual user ID
      products: [{ productId: product.id, quantity }],
      paymentMethod: "COD"  // Add payment method dynamically
    })
    .then(response => {
      alert(`Order Placed! Order ID: ${response.data.orderId}`);
    })
    .catch(error => console.error("Error processing checkout", error));
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <p className="text-gray-500 text-sm mb-4">
        <span className="hover:underline cursor-pointer">Home</span> &gt; {product.category}
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow-lg">
        {/* Product Images */}
        <div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full rounded-lg shadow-md transition-transform hover:scale-105"
          />
          <div className="grid grid-cols-3 gap-3 mt-4">
            {product.images?.slice(0, 3).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Gallery ${index}`}
                className="w-full h-24 object-cover rounded-lg border border-gray-200 cursor-pointer hover:shadow-lg hover:border-blue-500"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-semibold">{product.title}</h1>
          <p className="text-gray-600 text-lg">{product.brand}</p>

          {/* Rating */}
          <div className="flex items-center mt-3">
            <span className="text-yellow-500 text-lg">{"★".repeat(Math.round(product.rating))}</span>
            <span className="text-gray-500 ml-2">({product.rating} reviews)</span>
          </div>

          {/* Pricing */}
          <div className="mt-4">
            <span className="text-2xl font-bold text-blue-600">${discountedPrice}</span>
            <span className="text-gray-500 line-through ml-2">${product.price}</span>
            <span className="text-green-600 ml-2 text-lg">{product.discountPercentage}% Off</span>
          </div>

          {/* Stock Status */}
          <p className={`mt-2 ${product.stock > 0 ? "text-green-600" : "text-red-600"}`}>
            {product.stock > 0 ? `✔ In Stock - Ships in 4 days` : "❌ Out of Stock"}
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center mt-6">
            <span className="mr-3 font-medium">Quantity:</span>
            <button
              className="px-4 py-2 bg-gray-800 text-white rounded-l-md hover:bg-blue-700 transition"
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
            >
              -
            </button>
            <span className="px-5 py-2 border">{quantity}</span>
            <button
              className="px-4 py-2 bg-gray-800 text-white rounded-r-md hover:bg-blue-700 transition"
              onClick={() => setQuantity(q => q + 1)}
            >
              +
            </button>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button 
              onClick={handleBuyNow} 
              className="w-full bg-[#3087d1] text-white py-3 rounded-lg hover:bg-green-600 transition text-lg">
              Buy Now
            </button>
            <button
              className={`w-full py-3 rounded-lg text-lg transition ${
                isAddedToCart ? "bg-gray-500 cursor-not-allowed" : "bg-[#3087d1] hover:bg-blue-600"
              } text-white`}
              onClick={handleAddToCart}
              disabled={isAddedToCart}
            >
              {isAddedToCart ? "Added to Cart ✅" : "Add to Cart"}
            </button>
          </div>

          {/* Pincode Check */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Delivery Availability</h3>
            <div className="flex items-center mt-3">
              <input
                type="text"
                placeholder="Enter Pincode"
                className="border p-3 rounded-lg w-40 focus:ring focus:ring-blue-300"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
              <button
                onClick={checkPincode}
                className="ml-3 bg-[#3087d1] text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Check
              </button>
            </div>
            <p className="mt-3 text-lg">{deliveryMessage}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
