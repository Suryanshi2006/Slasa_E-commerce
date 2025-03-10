import React from "react";

const PressMedia = () => {
  const pressData = [
    {
      id: 1,
      image: "Images/Exclusive.jpeg",
      title: " Press Releases",
      heading: "Announcements about new product launches",
      buttonText: "Read More",
    },
    {
      id: 2,
      image: "Images/Exclusive2.jpeg",
      title: " Media Coverage",
      heading: "Articles, news mentions, or blog posts that feature Slasa",
      buttonText: "Read More",
    },
    {
      id: 1,
      image: "Images/Exclusive28.jpeg",
      title: "Brand Assets",
      heading: "Exciting News Update",
      buttonText: "Read More",
    },
    {
      id: 2,
      image: "Images/Exclusive2.jpeg",
      title: "About Slasa",
      heading: "Company Achievements",
      buttonText: "Read More",
    },
    {
      id: 2,
      image: "Images/Exclusive2.jpeg",
      title: "Contact for Media Inquiries",
      heading: "Company Achievements",
      buttonText: "Read More",
    },
    {
      id: 3,
      image: "Images/Bedroom.jpeg",
      title: "Press Kit Download",
      heading: "Latest Innovations",
      buttonText: "Read More",
    },
  ];

  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Press & Media</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pressData.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.heading}</p>
              <button className="!bg-[#3087d1] text-white px-4 py-2 rounded hover:bg-blue-700">
                {item.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PressMedia;