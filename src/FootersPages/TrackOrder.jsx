import React, { useState } from "react";

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchOrderData = async () => {
    setLoading(true);
    setError("");
    setOrder(null);

    try {
      const response = await fetch(`https://api.slasa.com/orders/${orderId}`);
      if (!response.ok) throw new Error("Order not found. Please check your Order ID.");
      
      const data = await response.json();
      setOrder(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-[#3087d1] mb-6">Track Your Order</h1>

      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Enter Order ID (e.g., SL12345)"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-full md:w-1/2"
        />
        <button
          onClick={fetchOrderData}
          className="!bg-[#3087d1] text-white px-4 py-2 rounded-md hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Tracking..." : "Track Order"}
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {order && (
        <div className="bg-gray-100 p-4 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold">Order ID: {order.id}</h2>
          <p className="text-lg mt-2">
            <strong>Status:</strong> {order.status}
          </p>
          <p className="text-lg">
            <strong>Estimated Delivery:</strong> {order.estimatedDelivery}
          </p>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">Order Progress</h3>
            <div className="w-full bg-gray-300 rounded-full h-4 mt-2">
              <div
                className="bg-[#3087d1] h-4 rounded-full transition-all duration-500"
                style={{
                  width:
                    order.status === "Order Placed" ? "25%" :
                    order.status === "Shipped" ? "50%" :
                    order.status === "Out for Delivery" ? "75%" : "100%",
                }}
              ></div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-4">Tracking History:</h3>
          <ul className="mt-2 space-y-2">
            {order.trackingHistory.map((update, index) => (
              <li key={index} className="p-2 bg-white border-l-4 border-blue-500 shadow-sm">
                <strong>{update.date}:</strong> {update.status}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TrackOrder;
