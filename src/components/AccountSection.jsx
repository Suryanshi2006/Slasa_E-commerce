import React from "react";
import { Link } from "react-router-dom";
import { FaBox, FaHeart, FaUserCog, FaLock, FaCreditCard, FaMapMarkerAlt, FaUndo, FaBell, FaGift, FaHeadset } from "react-icons/fa";

const YourAccount = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Header */}
        <div className="bg-[#3087D1] text-white py-8 text-center">
          <h2 className="text-3xl font-bold">Your Account</h2>
          <p className="mt-2 text-lg opacity-90">Manage your preferences and settings</p>
        </div>

        {/* Account Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
          <AccountCard icon={<FaBox size={32} />} title="Order History" description="View and manage your past orders." link="/orders" />
          <AccountCard icon={<FaHeart size={32} />} title="Wishlist" description="Access your saved items." link="/wishlist" />
          <AccountCard icon={<FaUserCog size={32} />} title="Account Settings" description="Edit your personal details." link="/account-settings" />
          <AccountCard icon={<FaLock size={32} />} title="Security Settings" description="Manage your password and security." link="/security" />
          <AccountCard icon={<FaCreditCard size={32} />} title="Payment Methods" description="Manage your saved cards and wallets." link="/payment-methods" />
          <AccountCard icon={<FaMapMarkerAlt size={32} />} title="Manage Addresses" description="Add, edit, or delete addresses." link="/addresses" />
          <AccountCard icon={<FaUndo size={32} />} title="Returns & Refunds" description="Track and request returns." link="/returns" />
          <AccountCard icon={<FaGift size={32} />} title="Gift Cards & Vouchers" description="View and redeem your gift cards." link="/gift-cards" />
          <AccountCard icon={<FaBell size={32} />} title="Notifications & Preferences" description="Manage your notification settings." link="/notifications" />
          <AccountCard icon={<FaHeadset size={32} />} title="Customer Support" description="Get help and support from our team." link="/support" />
        </div>

        {/* Logout Section */}
        <div className="bg-gray-100 py-16 px-10 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Want to log out?</h3>
          <p className="text-gray-600">Make sure to save your changes before logging out.</p>
          <button className="mt-6 !bg-[#3087D1] !text-white font-semibold py-3 px-6 rounded-full shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

// Reusable Account Card Component
const AccountCard = ({ icon, title, description, link }) => {
  return (
    <Link to={link} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="text-[#3087D1] mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 text-center mt-1">{description}</p>
    </Link>
  );
};

export default YourAccount;
