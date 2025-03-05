import React from "react";

const HeaderData = [
  {
    id: 1,
    title: "Total Sales",
    price: "$232,335",
    bgColor: "bg-blue-500",
  },
  {
    id: 2,
    title: "Total Orders",
    price: "1,245",
    bgColor: "bg-green-500",
  },
  {
    id: 3,
    title: "Total Revenue",
    price: "$1,123,455",
    bgColor: "bg-yellow-500",
  },
];

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center gap-4 p-4 flex-wrap">
      {HeaderData.map((data) => (
        <div
          key={data.id}
          className={`p-6 text-white ${data.bgColor} rounded-lg shadow-md flex flex-col items-center w-1/8`}
        >
          <h2 className="text-xl font-semibold">{data.title}</h2>
          <p className="text-2xl font-bold">{data.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Header;
