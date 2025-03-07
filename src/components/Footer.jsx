import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      {/* Subscription & App Download Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-gray-300">
        {/* Subscription Section */}
        <div>
          <h3 className="font-semibold text-xl mb-2">Subscribe to our awesome emails.</h3>
          <p className="text-gray-500 mb-4">Get our latest offers and news straight in your inbox.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Please enter an email address"
              className="w-full p-3 rounded-l-lg border border-gray-300 focus:outline-none"
            />
            <button className="!bg-[#3087d1] text-white px-6 py-3 rounded-r-lg">Subscribe</button>
          </div>
        </div>

        {/* Download Our Apps Section */}
        <div className="ml-40">
          <h3 className="font-semibold text-xl mb-2">Download our apps</h3>
          <p className="text-gray-500 mb-4">Shop our products and offers on-the-go.</p>
          <div className="flex space-x-4">
          <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="w-36"
            />
          
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="w-36"
            />
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-gray-300">
        {/* Customer Service */}
        <div>
          <h4 className="font-semibold text-lg mb-5">Customer Service</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/contactus" className="hover:text-gray-900">Contact Us</a></li>
            <li><a href="/track" className="hover:text-gray-900">Track Order</a></li>
            <li><a href="/returns" className="hover:text-gray-900">Returns & Refunds</a></li>
            <li><a href="/faq" className="hover:text-gray-900">FAQs</a></li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h4 className="font-semibold text-lg mb-5">About Us</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/OurStory" className="hover:text-gray-900">Our Story</a></li>
            <li><a href="/about" className="hover:text-gray-900">About</a></li>
            <li><a href="/careers" className="hover:text-gray-900">Careers</a></li>
            <li><a href="/store-locator" className="hover:text-gray-900">Store Locator</a></li>
            <li><a href="press-media" className="hover:text-gray-900">Press & Media</a></li>
          </ul>
        </div>

        {/* More Information */}
        <div>
          <h4 className="font-semibold text-lg mb-3">More Information</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/privacy" className="hover:text-gray-900">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-gray-900">Terms & Conditions</a></li>
            <li><a href="/shipping" className="hover:text-gray-900">Shipping Policy</a></li>
            <li><a href="/sitemap" className="hover:text-gray-900">Sitemap</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-5">Services</h4>
          <ul className="space-y-2 text-sm">
              <li><a href="/construction" className="hover:text-gray-900">Construction</a></li>
            <li><a href="/printing" className="hover:text-gray-900">Printing Services</a></li>
            <li><a href="/photography" className="hover:text-gray-900">Photgraphy and Videogrpahy</a></li>
            <li><a href="/rennovation" className="hover:text-gray-900">Rennovation</a></li>
            <li><a href="/construction" className="hover:text-gray-900">Construction</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-5">Consumer Policy</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/cancellation" className="hover:text-gray-900">Cancellation & Returns</a></li>
            <li><a href="/terms" className="hover:text-gray-900">Terms & Conditions</a></li>
            <li><a href="/security" className="hover:text-gray-900">Security</a></li>
            <li><a href="/privacy" className="hover:text-gray-900">privacy</a></li>
            <li><a href="/sitemap" className="hover:text-gray-900">Sitemap</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-5">Help</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/payments" className="hover:text-gray-900">Payments</a></li>
            <li><a href="/shipping" className="hover:text-gray-900">Shipping</a></li>
            <li><a href="/faq" className="hover:text-gray-900">FAQ</a></li>
            <li><a href="/cancellation" className="hover:text-gray-900">Cancellation and Returns</a></li>
          </ul>
        </div>
        


        {/* Social Media & Payment */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-xl"><FaFacebookF /></a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-xl"><FaTwitter /></a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-xl"><FaInstagram /></a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-xl"><FaYoutube /></a>
          </div>
          <h4 className="font-semibold text-lg mt-6 mb-3">We Accept</h4>
          <div className="flex space-x-3">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
    alt="Visa"
    className="h-8"
  />
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg"
    alt="MasterCard"
    className="h-8"
  />
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
    alt="PayPal"
    className="h-8"
  />
 
 
</div>



        </div>
      </div>

      {/* Contact & Copyright */}
      <div className="bg-gray-200 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <img
            src="./logo.png"
            alt="Home Centre"
            className="w-32 rounded-full"
          />
          <p className="text-gray-500 text-sm">Terms & Conditions - Privacy Policy</p>
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Slasa. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
