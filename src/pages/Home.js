import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LatestProperties from "../components/LatestProperties";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col h-screen">
        <Header />
        <Hero />
      </div>
      <LatestProperties />
    </div>
  );
};

export default Home;
