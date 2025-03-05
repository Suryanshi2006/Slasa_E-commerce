import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [deliveryDate, setDeliveryDate] = useState(null);
  const [addresses, setAddresses] = useState([]); // Added addresses state
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch cart items from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);

    // Fetch user addresses (replace with actual API call)
    const fetchAddresses = async () => {
      const addresses = await Promise.resolve([
        {
          id: 1,
          name: "Sachin",
          address: "H-535, 2, Alfa 3, Gautam Buddha Nagar, Uttar Pradesh 201310",
          mobile: "+918252404188",
          isDefault: true,
        },
        {
            id: 1,
            name: "Sachin",
            address: "H-535, 2, Alfa 3, Gautam Buddha Nagar, Uttar Pradesh 201310",
            mobile: "+918252404188",
            isDefault: true,
          },
          {
            id: 1,
            name: "Sachin",
            address: "H-535, 2, Alfa 3, Gautam Buddha Nagar, Uttar Pradesh 201310",
            mobile: "+918252404188",
            isDefault: true,
          },
        // Additional addresses can be added here
      ]);
      setAddresses(addresses);
      setSelectedAddress(addresses.find((addr) => addr.isDefault));
    };

    fetchAddresses();
  }, []);

  const handleAddressChange = (address) => {
    setSelectedAddress(address);
  };

  const handleDateChange = (date) => {
    setDeliveryDate(date);
  };

  const calculateTotal = () => {
    const totalMRP = (cartItems || []).reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const discount = totalMRP * 0.2;
    const shippingFee = totalMRP > 500 ? 0 : 50;
    const platformFee = 5;
    const total = totalMRP - discount + shippingFee + platformFee;
    return { totalMRP, discount, shippingFee, platformFee, total };
  };

  const { totalMRP, discount, shippingFee, platformFee, total } = calculateTotal();

  const handleCheckout = () => {
    console.log("Checkout:", {
      cartItems,
      selectedAddress,
      deliveryDate,
      total,
    });
    localStorage.removeItem("cart");
    navigate("/confirmation");
  };

  return (
    <div>
      <div style={{ backgroundColor: "#3087d1",opacity:"4", padding: "30px",borderRadius:"20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <img src="logo.png" alt="Home Centre Logo" style={{ height: "80px" }} />
          <div>
            <p>Call 1800-212-7500</p>
            <p>Monday-Sunday, 10 AM-8 PM</p>
          </div>
        </div>
      </div>

      <div style={{ padding: "20px", display: "flex" }}>
        <div style={{ flex: 2, paddingRight: "20px" }}>
          <h2>Shipping method</h2>
          <div style={{ display: "flex", marginTop: "10px" }}>
            <div style={{ border: "1px solid #ccc", padding: "10px", marginRight: "10px", borderRadius: "5px" }}>
              <strong>Home Delivery</strong>
              <p>(Get your product delivered to your home)</p>
            </div>
            <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
              <strong>Pick from nearby store</strong>
              <p>(Collect your order from a store of your choice)</p>
            </div>
          </div>

          <h3 style={{ marginTop: "20px" }}>Select your shipping address</h3>
          <button style={{ backgroundColor: "transparent", border: "none", color: "blue", cursor: "pointer" }}>
            Add new address
          </button>
          
          

          <div style={{ marginTop: "10px" }}>
            {addresses.map((address) => (
              <div key={address.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px", borderRadius: "5px" }}>
                <input
                  type="radio"
                  id={`address-${address.id}`}
                  name="address"
                  checked={selectedAddress?.id === address.id}
                  onChange={() => handleAddressChange(address)}
                />
                <label htmlFor={`address-${address.id}`}>
                  <p><strong>{address.name}</strong></p>
                  <p>{address.address}</p>
                  <p>Mobile Number: {address.mobile}</p>
                  {address.isDefault && <p>DEFAULT</p>}
                </label>
              </div>
            ))}
          </div>

          <h3 style={{ marginTop: "20px" }}>Choose Your Delivery Date</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "5px", marginTop: "10px" }}>
            {Array.from({ length: 12 }, (_, i) => {
              const date = new Date();
              date.setDate(date.getDate() + i);
              const day = date.getDate();
              const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
              return (
                <button key={i} style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }} onClick={() => handleDateChange(date)}>
                  {day} {dayName}
                </button>
              );
            })}
          </div>
        </div>

        {/* //right div */}

        <div style={{ flex: 1, paddingLeft: "20px" }}>
          <h2>Total MRP</h2>
          <p>&#8377;{totalMRP.toFixed(2)}</p>

          <h2>Offer discount</h2>
          <p>- &#8377;{discount.toFixed(2)}</p>

          <h2>Shipping Fee</h2>
          <p>&#8377;{shippingFee.toFixed(2)}</p>

          <h2>Platform Fee</h2>
          <p>&#8377;{platformFee.toFixed(2)}</p>

          <hr style={{ borderTop: "1px solid #ccc", margin: "10px 0" }} />

          <h2>Total</h2>
          <p>&#8377;{total.toFixed(2)}</p>

          <div style={{ marginTop: "20px" }}>
            <h3>Order Summary</h3>
            <button style={{ backgroundColor: "transparent", border: "none", color: "blue", cursor: "pointer" }}>Details</button>
          </div>

          <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
            <p>Your credit card details are securely encrypted and passed directly to our PCI DSS compliant Payment Gateway for processing.</p>
          </div>

          <button style={{ backgroundColor: "#007bff", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", marginTop: "20px", cursor: "pointer" }} onClick={handleCheckout}>
            Place Order
          </button>
        </div>
      </div>

      <div style={{ backgroundColor: "#f0f0f0", padding: "20px", textAlign: "center", fontSize: "0.8em" }}>
        <p>&copy; 2025 RNA Intellectual Property Limited</p>
        <p>Privacy Policy - Terms of Use - Terms & Conditions</p>
      </div>
    </div>
  );
};

export default Checkout;
