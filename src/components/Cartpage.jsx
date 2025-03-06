import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateQuantity = (id, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    const totalMRP = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const discount = totalMRP * 0.2;
    const shippingFee = totalMRP > 500 ? 0 : totalMRP === 0 ? 0 : 50;

    const platformFee = 5;
    const total = totalMRP - discount + shippingFee + platformFee;
    return { totalMRP, discount, shippingFee, platformFee, total };
  };

  const { totalMRP, discount, shippingFee, platformFee, total } =
    calculateTotal();

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3 w-full">
          <h1 className="text-3xl font-bold mb-6 text-[#3087d1]">Your Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">Your cart is currently empty.</p>
              <button
                onClick={() => navigate("/")}
                className="!bg-[#3087d1] text-white font-semibold py-3 px-6 rounded-full transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-5 mb-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1 ml-6">
                  <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                  <p className="text-black font-bold mt-1">₹{item.price}</p>
                  <div className="flex items-center mt-3">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                      className="px-3 py-1 bg-gray-200 rounded-l-md hover:bg-gray-300 text-gray-700"
                    >
                      -
                    </button>
                    <span className="px-4 text-gray-800">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 bg-gray-200 rounded-r-md hover:bg-gray-300 text-gray-700"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-4 py-2 !bg-[#3087d1] text-white rounded-full hover:bg-red-700 transition-colors"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        <div className="md:w-1/2 w-full mt-20 p-10 bg-white rounded-lg shadow-md h-[350px]">
          <h2 className="text-xl font-bold mb-5 text-[#3087d1]">Order Summary</h2>
          <div className="mb-3">
            <p className="flex justify-between text-gray-700">
              <span>Total MRP</span> <span>₹{totalMRP.toFixed(2)}</span>
            </p>
            <p className="flex justify-between text-green-600">
              <span>Offer Discount</span> <span>- ₹{discount.toFixed(2)}</span>
            </p>
            <p className="flex justify-between text-gray-700">
              <span>Shipping Fee</span> <span>₹{shippingFee.toFixed(2)}</span>
            </p>
            <p className="flex justify-between text-gray-700">
              <span>Platform Fee</span> <span>₹{platformFee.toFixed(2)}</span>
            </p>
          </div>
          <hr className="my-4 border-gray-300" />
          <p className="flex justify-between text-lg font-bold text-gray-800">
            <span>Total</span> <span>₹{total.toFixed(2)}</span>
          </p>
          <button
  className="w-full mt-6 !bg-[#3087d1] text-white py-3 rounded-full font-semibold transition-colors"
  onClick={() => {
    if (cartItems.length > 0) {
      navigate("/checkout"); // Replace with your actual checkout page route
    } else {
      alert("Your cart is empty.");
    }
  }}
>
  Proceed to Checkout
</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;