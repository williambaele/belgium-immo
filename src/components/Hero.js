import React from "react";
import homeImage from "../assets/images/home.jpg";
import SearchBarProperty from "./SearchBarProperty";

const Hero = () => {
  const heroStyle = {
    position: "relative",
    backgroundImage: `url(${homeImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh", // Set height to full viewport height
    color: "#FFFFFF", // Set text color to white
  };

  return (
    <div className="relative" style={heroStyle}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 px-4 md:px-0 container mx-auto flex flex-col items-center justify-center z-10">
        <div className="flex flex-col gap-4 pb-10">
          <span className="text-center text-lg md:text-2xl">
            THE BEST WAY TO
          </span>
          <h1 className="text-4xl md:text-5xl  font-bold mb-4 text-center">
            Find Your Dream Home
          </h1>
          <h2 className="text-center text-lg md:text-2xl">
            We’ve more than 745,000 apartments, place & plot.
          </h2>
        </div>

        <SearchBarProperty />
      </div>
    </div>
  );
};

export default Hero;
