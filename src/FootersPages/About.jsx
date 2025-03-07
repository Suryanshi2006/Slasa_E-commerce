import React from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/Footer";

const About = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <>
      {/* Video Section */}
      <div className="relative w-full h-[600px]">
        <video
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
        ></video>

        {/* Logo in Top Left with Hover Effect */}
        <motion.div className="absolute top-10 left-4" whileHover={{ scale: 1.1 }}>
          <img src="/Images/SLASA.svg" alt="Logo" className="w-24 md:w-32 cursor-pointer" />
        </motion.div>

        {/* Text Overlay with Fade-in Effect */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 p-4 rounded-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-white text-lg md:text-2xl font-semibold">Experience the Best with Us</h2>
        </motion.div>
      </div>

      {/* Information Section with Carousel */}
      <div className="bg-[#3087d1] flex flex-col md:flex-row items-center justify-center p-10 gap-10">
        {/* Carousel Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex justify-center"
        >
          <Slider {...settings} className="w-3/4 md:w-2/3">
            <div>
              <img src="/logo.png" alt="Slide 1" className="rounded-lg shadow-lg w-full" />
            </div>
            <div>
              <img src="/Images/Acrylic1.avif" alt="Slide 2" className="rounded-lg shadow-lg w-full" />
            </div>
            <div>
              <img src="/Images/Exclusive.jpeg" alt="Slide 3" className="rounded-lg shadow-lg w-full" />
            </div>
          </Slider>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-white text-3xl font-bold mb-4">The Slasa Group</h1>
          <p className="text-white mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste deserunt nemo quibusdam sed quo quidem delectus fuga quas alias dicta, aut modi soluta voluptas eveniet recusandae repudiandae, numquam dignissimos inventore!
          </p>

          {/* Animated Button */}
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button variant="contained" className="bg-white text-blue-600 font-bold shadow-lg hover:bg-gray-200">
              Explore Us
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <div className=" flex flex-col md:flex-row items-center justify-center p-10 gap-10">
        {/* Carousel Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex justify-center"
        >
         
            <div>
              <img src="/Images/Team.jpg" alt="Slide 1" className="rounded-lg shadow-lg w-110" />
            </div>
            
      
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-[#3087d1] text-3xl font-bold mb-4 ">The Slasa Culture</h1>
          <p className="text-[#000] mb-6 leading-relaxed">
          Slasa embraces a culture of innovation, excellence, and customer-centricity. At its core, Slasa values creativity and adaptability, ensuring that products and services evolve with market demands. The company fosters a collaborative environment where ideas are welcomed, and teamwork drives success. Integrity and transparency form the foundation of all operations, ensuring trust and reliability among customers and partners. With a commitment to quality and user satisfaction, Slasa continuously strives to set new industry standards. The culture promotes growth, learning, and inclusivity, empowering individuals to contribute meaningfully while maintaining a dynamic and forward-thinking approach.
          </p>

          {/* Animated Button */}
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button variant="contained" className="bg-white text-blue-600 font-bold shadow-lg hover:bg-gray-200">
              Read More
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
