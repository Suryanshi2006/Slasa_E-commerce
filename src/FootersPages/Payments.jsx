import React, { useState } from "react";
import Footer from "../components/Footer";

const Payment = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <>

    <div className="container mx-auto p-4">
      <h1 className=" text-2xl font-bold mb-4">Payments - Slasa </h1>
      
      <table className="w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Payment Method</th>
            <th className="border border-gray-300 px-4 py-2">Availability</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Credit/Debit Card</td>
            <td className="border border-gray-300 px-4 py-2">Visa, MasterCard, AMEX, Mada</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Cash on Delivery</td>
            <td className="border border-gray-300 px-4 py-2">Up to AED 5000</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Internet Banking</td>
            <td className="border border-gray-300 px-4 py-2">Available for major UAE banks</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Apple Pay</td>
            <td className="border border-gray-300 px-4 py-2">Available on iOS devices</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">PayPal</td>
            <td className="border border-gray-300 px-4 py-2">Available for international transactions</td>
          </tr>
        </tbody>
      </table>
      
      <div className="space-y-4">
        {[
          {
            title: "How do I pay for a Slasa purchase?",
            content: "Slasa offers multiple secure payment methods including Credit/Debit cards, Cash on Delivery, Internet Banking, Apple Pay, and PayPal. Transactions are encrypted for security."
          },
          {
            title: "Are there any hidden charges when I make a purchase?",
            content: "There are no hidden charges. The price you see on the product page is what you pay. Delivery charges may apply based on your location."
          },
          {
            title: "What is Cash on Delivery?",
            content: "Cash on Delivery (C-o-D) allows you to pay in cash at the time of delivery. The maximum order value for C-o-D is AED 5000."
          },
          {
            title: "Is it safe to use my credit/debit card on Slasa?",
            content: "Yes, Slasa uses 256-bit encryption technology to secure transactions. We also support 3D Secure authentication for added security."
          },
          {
            title: "What payment options are available for international customers?",
            content: "International customers can pay using Visa, MasterCard, AMEX, and PayPal. Please check for additional bank charges for currency conversion."
          },
          {
            title: "How does Instant Cashback work?",
            content: "Instant Cashback is an exclusive offer on select products. The final price in your cart includes the discounted amount."
          }
        ].map((item, index) => (
          <div key={index} className="border border-gray-300 p-3 rounded-md">
            <button
              onClick={() => toggleSection(index)}
              className="w-full text-left font-semibold text-lg focus:outline-none"
            >
              {item.title}
            </button>
            {openSection === index && <p className="mt-2 text-gray-700">{item.content}</p>}
          </div>
        ))}
      </div>

    </div>
    <Footer/>
    </>

  );
};

export default Payment;