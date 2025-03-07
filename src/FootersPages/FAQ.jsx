import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import HelpSection from "./HelpSection";
import HelpGrid from "./HelpGrid";

const FAQ = () => {
  const faqs = [
    { question: "What if I'm not at home when my order arrives?", answer: "Our delivery partner will contact you for rescheduling." },
    { question: "When will I receive my order?", answer: "You can track your order in the 'My Orders' section." },
    { question: "What is your policy on returns?", answer: "You can return products within 30 days if they meet our return criteria." },
    { question: "How do I change my email address?", answer: "Go to 'My Account' > 'Edit Profile' to update your email." },
    { question: "How do I return my products?", answer: "Initiate a return through 'My Orders' and follow the steps provided." },
    { question: "Can I exchange my purchase for another product?", answer: "Yes, exchanges are possible if the item is eligible." },
    { question: "How do I cancel an order?", answer: "Go to 'My Orders' and select 'Cancel' before it's shipped." },
    { question: "I just returned my products. When will I receive my refund?", answer: "Refunds are processed within 5-7 business days." },
    { question: "If I have used a promo code, how is my refund calculated?", answer: "Refunds are calculated based on the final amount paid after discounts." }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <HelpSection/>
    <HelpGrid/>
    <div className="px-6 py-12 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Most popular questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <button
              className="w-full text-left font-medium text-gray-700 flex justify-between items-center py-2"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <motion.p
                className="text-gray-600 mt-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </motion.p>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default FAQ;
