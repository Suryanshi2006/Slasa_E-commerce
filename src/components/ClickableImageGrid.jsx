import React from "react";

export default function ClickableImageGrid() {
    const images = [
      { src: "./Images/Bedroom.jpeg", link: "/page1" },
      { src: "./Images/Bedroom.jpeg", link: "/page2" },
      { src: "./Images/Bedroom.jpeg", link: "/page3" },
      { src: "./Images/Bedroom.jpeg", link: "/page4" },
      { src: "./Images/Bedroom.jpeg", link: "/page5" },
    ];
  
    return (
      <div className="bg-blue-300 p-6 mx-auto max-w-full m-10">
        {/* First Row - Two Images */}
        <div className="grid grid-cols-2 gap-3">
          <a href={images[0].link} className="w-full">
            <img src={images[0].src} alt="Image 1" className="w-full h-auto object-cover " />
          </a>
          <a href={images[1].link} className="w-full">
            <img src={images[1].src} alt="Image 2" className="w-full h-auto object-cover " />
          </a>
        </div>
  
        {/* Second Row - Three Images */}
        <div className="grid grid-cols-3 gap-3 mt-3">
          <a href={images[2].link}>
            <img src={images[2].src} alt="Image 3" className="w-full h-auto object-cover " />
          </a>
          <a href={images[3].link}>
            <img src={images[3].src} alt="Image 4" className="w-full h-auto object-cover " />
          </a>
          <a href={images[4].link}>
            <img src={images[4].src} alt="Image 5" className="w-full h-auto object-cover " />
          </a>
        </div>
      </div>
    );
  }
  