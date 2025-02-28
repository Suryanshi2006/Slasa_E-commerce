import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
    console.log("Cart Items:", storedCart); // Debugging
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-[#3087d1]">Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg shadow-md mb-4">
            <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-md" />
            <div className="flex-1 ml-4">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-[#3087d1] font-bold">${item.price}</p>
              <p className="text-sm text-[#3087d1]">Quantity: {item.quantity}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="px-3 py-2 bg-red-500 text-[#3087d1]s rounded-md hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))
      )}

      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3  !bg-[#3087d1] text-white font-bold rounded-md hover:bg-blue-700"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default CartPage;
