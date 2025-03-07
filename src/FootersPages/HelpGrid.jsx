import React from "react";
import {
  FaTruck,
  FaUser,
  FaBox,
  FaCreditCard,
  FaClock,
  FaExchangeAlt,
  FaFileInvoice,
  FaGift,
  FaInfoCircle,
  FaAward,
  FaCouch,
  FaChair,
  FaUserSlash,
  FaShoppingCart,
} from "react-icons/fa";

const HelpGrid = () => {
  const helpItems = [
    { icon: <FaTruck size={40} />, title: "Shipping", description: "Get more information on delivery schedules, charges and more.", link: "/shipping" },
    { icon: <FaUser size={40} />, title: "My Account", description: "Learn how to create your account and update your information.", link: "/account" },
    { icon: <FaBox size={40} />, title: "Orders", description: "Know more about the order and delivery process.", link: "/orders" },
    { icon: <FaCreditCard size={40} />, title: "Payments", description: "Find out more about your payment options and plans.", link: "/payments" },
    { icon: <FaShoppingCart size={40} />, title: "Buy Now", description: "Find out how to pay, checkout and finish shopping in one easy step.", link: "/buy-now" },
    { icon: <FaClock size={40} />, title: "Tracking and Delivery", description: "Get more info on delivery schedules, times and addresses.", link: "/tracking" },
    { icon: <FaExchangeAlt size={40} />, title: "Returns Process", description: "Find out how to make a return online, to a store or schedule a pick-up.", link: "/returns-process" },
    { icon: <FaFileInvoice size={40} />, title: "Returns Policy", description: "Discover exactly how our returns and refunds work.", link: "/returns-policy" },
    { icon: <FaGift size={40} />, title: "Gift Card", description: "Now easily buy or use your Gift Cards online.", link: "/gift-card" },
    { icon: <FaInfoCircle size={40} />, title: "Other Information", description: "Important info you need to know about shopping with us.", link: "/info" },
    { icon: <FaAward size={40} />, title: "Landmark Rewards", description: "Discover how our award-winning loyalty programme works.", link: "/rewards" },
    { icon: <FaCouch size={40} />, title: "Refurbished Furniture", description: "Discover cost-effective refurbished furniture.", link: "/refurbished-furniture" },
    { icon: <FaChair size={40} />, title: "Customized Furniture", description: "Know more about the customized furniture.", link: "/customized-furniture" },
    { icon: <FaUserSlash size={40} />, title: "Account Deletion", description: "How to deactivate your landmark account.", link: "/account-deletion" },
  ];

  return (
    <div className="px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {helpItems.map((item, index) => (
          <a 
            key={index} 
            href={item.link} 
            className="flex flex-col items-center p-6 border rounded-lg shadow-md bg-white text-center transition transform hover:scale-105 hover:shadow-lg cursor-pointer"
          >
            <div className="mb-3 text-[#3087d1]">{item.icon}</div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HelpGrid;
