import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GridSection = ({ title, items, linkText, linkHref, specialLayout }) => {
  const navigate = useNavigate();

  const handleClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  if (specialLayout === "bulkDiscounts") {
    return (
      <div className="bg-white p-4 shadow rounded-lg flex flex-col items-center justify-center">
        <img src={items[0].image} alt={items[0].alt} className="w-60 mt-2 cursor-pointer" onClick={() => handleClick(items[0])} />
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm">{items[0].caption}</p>
        <button className="!bg-[#3087d1] text-white px-4 py-2 rounded mt-2">Register now</button>
      </div>
    );
  }

  if (specialLayout === "highlightDeal") {
    return (
      <div className="bg-white p-4 shadow rounded-lg flex justify-between items-center col-span-4">
        <div>
          <h1 className="font-bold text-lg">{title}</h1>
          <p className="text-sm">{items[0].caption}</p>
          <div className="bg-red-600 text-white px-2 py-1 inline-block mt-2">Limited time deal</div>
          <p className="text-lg font-bold text-red-600">{items[0].discountPrice}</p>
          <p className="text-gray-500 text-sm line-through">{items[0].originalPrice}</p>
          <p className="text-blue-600">prime</p>
        </div>
        {items.map((item, index) => (
          <img key={index} src={item.image} alt={item.alt} className="w-80 h-48 object-contain cursor-pointer" onClick={() => handleClick(item)} />
        ))}
      </div>
    );
  }

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h3 className="font-bold text-lg">{title}</h3>
      <div className="grid grid-cols-2 gap-2 mt-2">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center cursor-pointer" onClick={() => handleClick(item)}>
            <img src={item.image} alt={item.alt} className="w-40 h-30 object-contain" />
            {item.caption && <p className="text-sm text-center">{item.caption}</p>}
          </div>
        ))}
      </div>
      {linkText && <a href={linkHref} className="text-[#3087d1] text-sm block mt-2">{linkText}</a>}
    </div>
  );
};

const Grid = ({ sections }) => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://api.yoursite.com/products")
      .then(response => {
        setApiData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching products", error);
        setLoading(false);
      });
  }, []);

  const finalSections = sections.map(section => ({
    ...section,
    items: apiData.length ? apiData.slice(0, section.items.length) : section.items,
  }));

  return (
    <div className="grid grid-cols-4 gap-4 p-6 bg-gradient-to-b from-[#3087d1] to-white">
      {loading ? (
        <p className="text-white text-center col-span-4">Loading products...</p>
      ) : (
        finalSections.map((section, index) => <GridSection key={index} {...section} />)
      )}
    </div>
  );
};

export default Grid;