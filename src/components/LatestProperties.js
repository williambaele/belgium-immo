import React from "react";
import PropertyCard from "./PropertyCard";

const LatestProperties = () => {
  return (
    <div className="bg-red-200 w-full py-10 md:py-16">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex justify-between bg-green-400">
          <div className="flex flex-col gap-2 md:gap-4">
            <h2 className="text-xl md:text-2xl font-bold">
              Explore our latest properties
            </h2>
            <p>Find your gem from 1800+ properties</p>
          </div>
          <div className="bg-yellow-600 flex items-end">
            <p>hi</p>
          </div>
        </div>
        <div className="w-1/3 bg-blue-400 py-10 px-4">
          <PropertyCard />
        </div>
      </div>
    </div>
  );
};

export default LatestProperties;
