import React from "react";

const imageData = [
  { id: 1, src: "/Images/Bed.jpeg", price: "$229", description: "Best wall decor deals" },
  { id: 2, src: "/Images/cult.jpeg", price: "$229", description: "Best wall decor deals" },
  { id: 3, src: "/Images/cult.jpeg", price: "$229", description: "Best wall decor deals" },
  { id: 4, src: "/Images/cult.jpeg", price: "$229", description: "Best wall decor deals" },
];

const Cult = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 mt-10">
      <h2 className="text-4xl font-bold mb-6">Cult Favourite</h2>
      <div className="grid grid-cols-2 gap-24">
        {imageData.map((item) => (
          <div key={item.id} className="border p-4 shadow-md">
            <img src={item.src} alt="Wall Decor" className="w-full h-auto" />
            <p className="text-center text-2xl font-semibold mt-2">{item.description} at {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cult;
