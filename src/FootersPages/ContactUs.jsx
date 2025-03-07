import React from "react";
import { Mail, Facebook, Twitter, MessageCircle, Phone } from "lucide-react";
import Footer from "../components/Footer";

const contactMethods = [
  {
    icon: <Mail size={48} className="text-purple-500" />, 
    title: "Write to us",
    description: "Drop us a line and we'll get back to you as fast as we can.",
    link: "mailto:support@example.com",
  },
  {
    icon: <Facebook size={48} className="text-blue-500" />, 
    title: "Facebook us",
    description: "Connect with us on your favourite social network.",
    link: "https://facebook.com/homecentreindia",
  },
  {
    icon: <Twitter size={48} className="text-black" />, 
    title: "Tweet us",
    description: "Reach out in 140 characters! We're @homecentreindia",
    link: "https://twitter.com/homecentreindia",
  },
  {
    icon: <MessageCircle size={48} className="text-orange-500" />, 
    title: "Chat with us",
    description: "Get answers in real-time. We're here to help.",
    online: true,
    link: "#", 
  },
  {
    icon: <Phone size={48} className="text-red-500" />, 
    title: "Talk to us",
    description: "Monday to Sunday, 10:00AM to 8:00PM\nCall us on 1800-212-7500",
    link: "tel:18002127500",
  },
];

export default function ContactUs() {
  return (
    <>
    <div className="max-w-5xl mx-auto p-8 text-center mt-20 mb-20">
      <h2 className="text-3xl font-semibold text-[#3087d1]">Contact us</h2>
      <p className="text-gray-600 mb-8">We're here to help you. Get in touch with us in any of these ways:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {contactMethods.map((method, index) => (
          <a key={index} href={method.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center hover:opacity-80 transition">
            <div className="mb-3">{method.icon}</div>
            <h3 className="font-medium text-lg">{method.title}</h3>
            <p className="text-gray-500 text-sm">{method.description}</p>
           
          </a>
        ))}
       

      </div>
     
    </div>
    <Footer/>
    </>
  );
}
