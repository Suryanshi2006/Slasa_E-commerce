import React, { useEffect, useState } from "react";

export default function ClickableImageGrid() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("https://api.pexels.com/v1/search?query=nature&per_page=5", {
          headers: {
            Authorization: "YOUR_PEXELS_API_KEY" // Replace with your actual API key
          }
        });

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();

        if (data.photos) {
          const formattedImages = data.photos.map((photo, index) => ({
            src: photo.src.medium, // Medium-sized image
            link: photo.url || `#image-${index + 1}`
          }));
          setImages(formattedImages);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="bg-blue-300 p-6 mx-auto max-w-full m-10 overflow-hidden">
      {images.length === 5 && (
        <>
          {/* First Row - Two Images */}
          <div className="grid grid-cols-2 gap-3">
            {images.slice(0, 2).map((img, index) => (
              <a key={index} href={img.link} className="w-full">
                <img src={img.src} alt={`Image ${index + 1}`} className="w-full h-auto object-cover" />
              </a>
            ))}
          </div>

          {/* Second Row - Three Images */}
          <div className="grid grid-cols-3 gap-3 mt-3">
            {images.slice(2).map((img, index) => (
              <a key={index} href={img.link}>
                <img src={img.src} alt={`Image ${index + 3}`} className="w-full h-auto object-cover" />
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
