import React from "react";
import { IoSearch } from "react-icons/io5";
import { HiOutlineHome } from "react-icons/hi2";

const SearchBarProperty = () => {
  return (
    <div className="bg-white rounded-md h-16 w-full md:w-2/3 shadow-md p-2 flex items-center gap-4">
      <div className=" w-full h-full flex items-center relative">
        <div className="absolute left-2">
          <HiOutlineHome style={{ fontSize: "20px", color: "#EB6753" }} />
        </div>

        <input
          className="h-full w-full bg-gray-50 outline-none pl-8 rounded-lg text-gray-900"
          placeholder="Enter an address, city or ZIP code"
        />
      </div>
      <div className="bg-[#EB6753] rounded-lg w-20 h-full flex items-center justify-center">
        <IoSearch style={{ fontSize: "20px", color: "#FFFFFF" }} />
      </div>
    </div>
  );
};

export default SearchBarProperty;
