import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/Footer";

const OurStory = () => {
  const images = [
    "./logo.png",
    "/Images/Exclusive.jpeg",
    "/Images/Exclusive25.jpeg",
    "/Images/Exclusive3.jpeg",
    "/Images/Exclusive24.jpeg",
    "/Images/Exclusive22.jpeg",
    "/Images/Exclusive29.jpeg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <>
    <div className="bg-gray-100 py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 bg-white p-8 rounded-2xl shadow-lg">
        <div>
          <h3 className="text-[#3087d1] font-semibold">How It Started</h3>
          <h1 className="text-4xl font-bold text-gray-900 mt-2">
            "Empowering Innovation & Excellence in Business Solutions"
          </h1>
          <p className="text-gray-600 mt-4">
            Slasa was founded with a vision to revolutionize e-commerce and
            create a seamless digital shopping experience. Our commitment to
            innovation, quality, and customer satisfaction drives us to
            constantly evolve and expand.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full md:w-3/4 h-[300px] md:h-[400px]">
            <Slider {...settings} className="w-full h-full rounded-xl shadow-md">
              {images.map((img, index) => (
                <div key={index} className="h-full flex items-center justify-center">
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="rounded-xl w-full h-full object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Carousel for Vision, Mission, Values, and Mission Statement */}
      <div className="mt-12 max-w-6xl mx-auto bg-white p-10 rounded-2xl shadow-lg">
        <Slider {...settings} className="w-full">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#3087d1]">Our Vision</h2>
            <p className="text-gray-700 mt-4 text-lg max-w-3xl mx-auto leading-relaxed">
              At Slasa, our vision is to redefine the renovation and construction industry by 
              providing top-quality products and services that not only meet but exceed customer expectations.
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#3087d1]">Our Mission</h2>
            <p className="text-black mt-4 text-lg max-w-3xl mx-auto leading-relaxed">
              Our mission is to deliver excellence in every project we undertake. Whether it's home renovations, 
              commercial construction, or high-quality building materials, we ensure that every product and service 
              we offer is tailored to meet the unique needs of our customers.
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#3087d1]">Core Values</h2>
            <p className="text-black mt-4 text-lg max-w-3xl mx-auto leading-relaxed">
              We believe in treating our customers with respect and faith. We grow through creativity, invention, and innovation. 
              We integrate honesty, integrity, and business ethics into all aspects of our business functioning.
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#3087d1]">Mission Statement</h2>
            <p className="text-black mt-4 text-lg max-w-3xl mx-auto leading-relaxed">
              To build long-term relationships with our customers and clients and provide exceptional 
              customer services by pursuing business through innovation and advanced technology.
            </p>
          </div>
        </Slider>
      </div>

      {/* Services Section */}
      <div className="mt-12 max-w-6xl mx-auto bg-white p-10 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-[#3087d1] text-center">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold">E-commerce Solutions</h3>
            <p className="text-gray-600 mt-2">Providing seamless online shopping experiences with cutting-edge technology.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold">Custom Development</h3>
            <p className="text-gray-600 mt-2">Tailored solutions to meet business-specific needs with efficiency and innovation.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold">Marketing & Strategy</h3>
            <p className="text-gray-600 mt-2">Boosting brand presence through strategic marketing and growth planning.</p>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg text-center">
        <h2 className="text-3xl font-bold text-[#3087d1]">Our Team</h2>
        <p className="text-gray-600 mt-4">
          Meet the passionate team behind Slasa, dedicated to innovation,
          growth, and customer satisfaction.
        </p>
        <div className="flex flex-wrap justify-center mt-6 gap-6">
          <div className="bg-gray-100 p-6 rounded-xl shadow-md w-60">
            <img
              src="/Images/Exclusive29.jpeg"
              alt="Team Member"
              className="rounded-full w-24 h-24 mx-auto"
            />
            <h3 className="text-lg font-semibold mt-4">John Doe</h3>
            <p className="text-gray-500">CEO & Founder</p>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-xl shadow-md w-60">
            <img
              src="/Images/Exclusive29.jpeg"
              alt="Team Member"
              className="rounded-full w-24 h-24 mx-auto"
            />
            <h3 className="text-lg font-semibold mt-4">Jane Smith</h3>
            <p className="text-gray-500">Head of Marketing</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-md w-60">
            <img
              src="/Images/Exclusive29.jpeg"
              alt="Team Member"
              className="rounded-full w-24 h-24 mx-auto"
            />
            <h3 className="text-lg font-semibold mt-4">Jane Smith</h3>
            <p className="text-gray-500">Head of Marketing</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-md w-60">
            <img
              src="/Images/Exclusive29.jpeg"
              alt="Team Member"
              className="rounded-full w-24 h-24 mx-auto"
            />
            <h3 className="text-lg font-semibold mt-4">Jane Smith</h3>
            <p className="text-gray-500">Head of Marketing</p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
  
};

export default OurStory;