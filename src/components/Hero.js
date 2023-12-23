import React from "react";
import homeImage from "../assets/images/home.jpg";
import SearchBarProperty from "./SearchBarProperty";

const Hero = () => {
  const heroStyle = {
    backgroundImage: `url(${homeImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="h-screen" style={heroStyle}>
      <div className="px-4 md:px-0 container mx-auto w-full h-full flex items-center justify-center">
        <SearchBarProperty />
      </div>
    </div>
  );
};

export default Hero;
