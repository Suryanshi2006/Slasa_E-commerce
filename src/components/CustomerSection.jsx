import React from "react";
import { Link } from "react-router-dom";
import { FaTruck, FaHeadset, FaHeart, FaQuestionCircle } from "react-icons/fa";

const CustomerSection = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Header */}
        <div className="bg-[#3087D1] text-white py-8 text-center">
          <h2 className="text-3xl font-bold">Customer Service</h2>
          <p className="mt-2 text-lg opacity-90">How can we assist you today?</p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
          <ServiceCard 
            icon={<FaTruck size={32} />} 
            title="Track Your Order" 
            description="Check the status of your orders." 
            link="/order-tracking"
          />

          <ServiceCard 
            icon={<FaQuestionCircle size={32} />} 
            title="Help Center" 
            description="Find answers to your queries." 
            link="/help"
          />

          <ServiceCard 
            icon={<FaHeart size={32} />} 
            title="Wishlist & Saved Items" 
            description="Manage your favorite products." 
            link="/wishlist"
          />

          <ServiceCard 
            icon={<FaHeadset size={32} />} 
            title="Contact Support" 
            description="Get in touch with our team." 
            link="/contact"
          />
        </div>

        {/* Contact Information */}
        <div className="bg-gray-100 py-24 px-10 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Need Further Assistance?</h3>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <p className="text-gray-600 flex justify-center items-center gap-2">
              📧 Email: 
              <a 
                href="mailto:support@slasa.com" 
                className="text-[#3087D1] font-medium transition-all duration-300 hover:underline hover:text-blue-600"
              >
                support@slasa.com
              </a>
            </p>

            <p className="text-gray-600 flex justify-center items-center gap-2">
              📞 Phone: 
              <a 
                href="tel:+919876543210" 
                className="text-[#3087D1] font-medium transition-all duration-300 hover:underline hover:text-blue-600"
              >
                +91 9876543210
              </a>
            </p>

            <p className="text-gray-600">
              💬 Live Chat: <span className="font-medium text-[#3087D1]">Available 9 AM - 9 PM</span>
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-8">
            <a 
              href="/contact"
              className="bg-[#3087D1] !text-white font-semibold py-3 px-6 rounded-full shadow-md transition-transform duration-300 hover:!text-black hover:scale-105 hover:shadow-lg"
            >
              Contact Support
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

// 📌 Reusable Service Card Component
const ServiceCard = ({ icon, title, description, link }) => {
  return (
    <Link 
      to={link} 
      className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl"
    >
      <div className="text-[#3087D1] mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 text-center mt-1">{description}</p>
    </Link>
  );
};

export default CustomerSection;
