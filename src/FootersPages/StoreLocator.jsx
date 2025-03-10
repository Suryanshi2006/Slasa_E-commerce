import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const storeLocations = [
  {
    id: 1,
    name: "Home Centre - Mall of the Emirates",
    position: { lat: 25.1184, lng: 55.2003 },
    address: "Level 1, Al Barsha, Dubai, UAE",
  },
  {
    id: 2,
    name: "Home Centre - Safeer Mall",
    position: { lat: 25.7852, lng: 55.9432 },
    address: "Level 1, Al Dhaid North, Ras Al Khaimah, UAE",
  },
  {
    id: 3,
    name: "Home Centre - Fujairah",
    position: { lat: 25.1369, lng: 56.3362 },
    address: "Mohammed Bin Matar Road, Al Faseel, Fujairah, UAE",
  },
  {
    id: 4,
    name: "Home Centre - Oasis Mall",
    position: { lat: 25.3292, lng: 55.3914 },
    address: "Al Ghuibaiba, Sharjah, UAE",
  },
  {
    id: 5,
    name: "Home Centre - Jimi Retail Park",
    position: { lat: 24.2075, lng: 55.7395 },
    address: "Al Jimi, Al Ain, UAE",
  },
];

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 25.276987,
  lng: 55.296249,
};

const StoreLocator = () => {
  const [selectedStore, setSelectedStore] = useState(null);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-[#3087d1] text-2xl font-bold mb-4">Store Locator</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <select
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
            onChange={(e) => setSelectedStore(e.target.value)}
          >
            <option value="">Select a Store</option>
            {storeLocations.map((store) => (
              <option key={store.id} value={store.id}>
                {store.name}
              </option>
            ))}
          </select>
          <ul className="space-y-3">
            {storeLocations.map((store) => (
              <li
                key={store.id}
                className="p-3 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100"
                onClick={() => setSelectedStore(store.id)}
              >
                <strong>{store.name}</strong>
                <p className="text-gray-700 text-sm">{store.address}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={8}>
              {storeLocations.map((store) => (
                <Marker key={store.id} position={store.position} />
              ))}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
};

export default StoreLocator;