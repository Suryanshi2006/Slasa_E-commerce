import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ClickableImageGrid2() {
  const [images, setImages] = useState([]);
  const location = useLocation();

  // Extract page name from URL (e.g., "/about" -> "about")
  const currentPage = location.pathname.replace("/", "") || "home"; // Default to 'home' if empty

  useEffect(() => {
    fetch(`https://yourbackend.com/api/images?page=${currentPage}&limit=4`)
      .then(response => response.json())
      .then(data => {
        if (data.images) {
          setImages(data.images);
        }
      })
      .catch(error => console.error("Error fetching images:", error));
  }, [currentPage]); // Runs when the page changes

  return (
    <div className="bg-blue-300 p-6 mx-auto max-w-[900px] m-10 overflow-hidden">
      {images.length === 4 && (
        <>
          {/* First Row - Two Images */}
          <div className="grid grid-cols-2 gap-3">
            {images.slice(0, 2).map((img, index) => (
              <a key={index} href={img.redirect_url} className="w-full">
                <img src={img.image_url} alt={`Image ${index + 1}`} className="w-full h-auto object-cover" />
              </a>
            ))}
          </div>

          {/* Second Row - Two Images */}
          <div className="grid grid-cols-2 gap-3 mt-3">
            {images.slice(2, 4).map((img, index) => (
              <a key={index} href={img.redirect_url} className="w-full">
                <img src={img.image_url} alt={`Image ${index + 3}`} className="w-full h-auto object-cover" />
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
