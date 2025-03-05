import React from "react";
import { useCult } from "../context/CultContext";

const Cult = () => {
  const imageData = useCult(); // Get data from context

  return (
    <div className="max-w-screen-lg mx-auto px-4 mt-10 overflow-hidden">
      <h2 className="text-4xl font-bold mb-6">Cult Favourite</h2>
      <div className="grid grid-cols-2 gap-24">
        {imageData.map((item) => (
          <div key={item.id} className="border p-4 shadow-md">
            <img src={item.src} alt="Wall Decor" className="w-full h-[300px]" />
            <p className="text-center text-2xl font-semibold mt-2">
              {item.description} at {item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cult;
