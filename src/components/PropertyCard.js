import React from "react";
import HomeImage from "../assets/images/home1.jpeg";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { SlSizeActual } from "react-icons/sl";

const PropertyCard = () => {
  const cardStyle = {
    backgroundImage: `url(${HomeImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const options = [
    {
      name: "Bedrooms",
      svg: <IoBedOutline />,
      info: "4",
    },
    {
      name: "Bathrooms",
      svg: <LuBath />,
      info: "2",
    },
    {
      name: "Surface",
      svg: <SlSizeActual />,
      info: "200",
    },
  ];
  return (
    <div className="bg-white shadow-lg h-80 w-full rounded-lg cursor-pointer">
      <div
        className="h-3/5 bg-green-600 rounded-t-lg relative w-full"
        style={cardStyle}
      >
        <p className="text-sm absolute left-3 bottom-3 bg-white shadow-md rounded-md px-2">
          300,000€
        </p>
      </div>
      <div className="h-2/5 w-full py-4 px-4 flex flex-col gap-2">
        <h3 className="font-bold">Luxury villa in Etterbeek</h3>
        <p className="text-gray-400">Etterbeek 1050, Belgium</p>
        <div className="w-full grid grid-cols-3 gap-2">
          {options.map((option, index) => (
            <div
              key={index}
              className="hover:bg-gray-100 flex items-center gap-2 rounded-md px-1"
            >
              {option.svg}
              <p>{option.info}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
