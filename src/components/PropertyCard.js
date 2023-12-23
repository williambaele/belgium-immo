import React from "react";
import HomeImage from "../assets/images/home1.jpeg";

const PropertyCard = () => {
  const cardStyle = {
    backgroundImage: `url(${HomeImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="bg-white shadow-lg h-80 w-full rounded-lg">
      <div
        className="h-3/5 bg-green-600 rounded-t-lg relative w-full"
        style={cardStyle}
      >
        <p className="text-sm absolute left-2 bottom-2 bg-white shadow-md rounded-md px-2">
          300,000€
        </p>
      </div>
      <div className="h-2/5 w-full py-4 px-2 flex flex-col gap-2">
        <h3 className="font-bold">Luxury villa in Etterbeek</h3>
        <p className="text-gray-400">Etterbeek 1050, Belgium</p>
      </div>
    </div>
  );
};

export default PropertyCard;
