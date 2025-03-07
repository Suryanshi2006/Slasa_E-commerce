import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Footer from "../components/Footer";

const Returns = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const returnSteps = [
    {
      title: "Fill out return slip",
      content: "You will receive a return slip via email once your products are delivered. Ensure to print and include it with your return package."
    },
    {
      title: "Visit store",
      content: "Locate your nearest store and bring your items in their original packaging along with your return slip and invoice."
    },
    {
      title: "Hand over return",
      content: "An authorized store representative will verify your return items and issue an acknowledgment receipt."
    },
    {
      title: "Receive refund",
      content: "Refunds will be processed based on your original payment method. Cash payments may receive cash refunds or store credits, while card and PayPal payments will be refunded accordingly."
    }
  ];

  return (
    <>
      <div className="p-10">
        <h1 className="text-3xl font-bold">Returns</h1>
        <p className="text-gray-500 mb-6">Here's how the returns process works.</p>

        <div className="flex px-10 mt-10">
          <div className="w-1/2">
            <h2 className="text-2xl font-semibold">Returns should be easy. We couldn’t agree more..</h2>
            <p className="text-lg text-gray-500 pt-4">Let's show you how to return your products in three easy ways.</p>
          </div>
          <div className="w-1/2 flex justify-center">
            <img src="/Images/Acrylic1.avif" alt="Returns" className="w-2/3 rounded-lg shadow-lg" />
          </div>
        </div>

        <motion.div
          className="bg-[#3087d1] text-white p-4 rounded-lg shadow-lg w-[400px] mt-10 cursor-pointer relative bottom-60 left-10"
          whileHover={{ scale: 1.05 }}
        >
          <p>Some products are non-returnable. Check our Returns Policy for details.</p>
        </motion.div>

        <div className="">
          <h2 className="text-2xl font-bold">Return to Store</h2>
          <motion.p
            className="bg-[#3087d1] text-white p-3 rounded-md w-[700px] mt-2"
            whileHover={{ scale: 1.05 }}
          >
            Please note, Slasa Product Cannot be returned to Slasa Store
          </motion.p>
        </div>

        {/* Interactive Return Steps */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Return Steps</h2>
          {returnSteps.map((step, index) => (
            <motion.div
              key={index}
              className="mb-4 bg-gray-100 p-4 rounded-md cursor-pointer shadow-sm"
              whileHover={{ scale: 1.02 }}
              onClick={() => toggleSection(index)}
            >
              <div className="flex justify-between items-center">
                <p className="font-medium">{step.title}</p>
                {openSection === index ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {openSection === index && (
                <motion.p className="mt-2 text-gray-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {step.content}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Image Section */}
        {/* <div className="mt-10">
          <h2 className="text-2xl font-semibold">Return Methods</h2>
          <div className="grid grid-cols-2 gap-6 mt-4">
            <img src="/Images/Box.jpeg" alt="Return Method 1" className="rounded-lg shadow-lg" />
            <img src="/Images/Exclusive28.jpeg" alt="Return Method 2" className="rounded-lg shadow-lg" />
          </div>
        </div> */}
      </div>
      <div className="container mx-auto p-8">
      {/* In-Store Return Section */}
      <h2 className="text-2xl font-bold mb-6">1. Return to a store</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        {[
          { title: "Fill out your return slip", text: "This will be emailed to you after your products are delivered." },
          { title: "Visit your nearest store", text: "Wrap your household products in their original packaging and bring them with your return slip and invoice to any store." },
          { title: "Hand over your return", text: "An authorized staff member will take your package and hand you an acknowledgement receipt." },
          { title: "Receive your refund", text: "If you’ve paid by cash, you can ask for a cash refund or a Credit Note. If you’ve paid by card or PayPal, you can opt for a Credit Note, or receive a refund to your card, bank account or PayPal account." },
        ].map((item, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md">
            <div className="text-4xl mb-4">📄</div>
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Online Return Section */}
      <h2 className="text-2xl font-bold mt-12 mb-6">2. Request a return online</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
         {[
          { title: "Request your return", text: "Go to Order History in My Account, select the products you want to return and place a return request." },
          { title: "Box up your products", text: "Wrap and seal your products in their original packaging or call us at 800-MYHOME if you no longer have it." },
          { title: "Hand over your return", text: "Our courier partner may take 3-5 business days to pick it up. They’ll give you an acknowledgement receipt." },
          { title: "Receive your refund", text: "We’ll check your returns, and credit your refund to your card, bank account or PayPal account in 4-15 days." },
         ].map((item, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">3. Call 800-MYHOME (800-694663) to schedule a pick up</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
         {[
          { title: " Call for a pick-up", text: "Speak to us at 800-MYHOME (800-694663) to schedule a pick-up time and location. Make sure you fill out the return slip first.." },
          { title: "Box up your products", text: "Wrap and seal your products in their original packaging or call us at 800-MYHOME if you no longer have it." },
          { title: "Hand over your return", text: "Our courier partner may take 3-5 business days to pick it up. They’ll give you an acknowledgement receipt." },
          { title: "Receive your refund", text: "We’ll check your returns, and credit your refund to your card, bank account or PayPal account in 4-15 days." },
         ].map((item, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
      <Footer/>
    </>
  );
};

export default Returns;
