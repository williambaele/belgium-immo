import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import { HiMiniUser, HiBars3BottomRight, HiMiniXCircle } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import { HiHome } from "react-icons/hi2";

const Header = () => {
  const menu = [
    {
      name: "Listing",
      path: "listing",
    },
    {
      name: "Cities",
      path: "cities",
    },
    {
      name: "Agent",
      path: "agent",
    },
    {
      name: "About",
      path: "about",
    },
  ];

  const mobileMenu = [
    {
      name: "Listing",
      path: "listing",
    },
    {
      name: "Cities",
      path: "cities",
    },
    {
      name: "Agent",
      path: "agent",
    },
    {
      name: "About",
      path: "about",
    },
    {
      name: "Account",
      path: "account",
    },
  ];

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-[#2F27CE] w-full h-14 flex items-center">
      <div className="px-4 md:px-0 container mx-auto flex justify-between">
        <div>
          <HiHome style={{ fontSize: "26px", color: "#FFFFFF" }} />
        </div>
        <div className="flex-1 items-center justify-end gap-10 hidden md:flex">
          <ul className="flex gap-4 text-white">
            {menu.map((item, index) => (
              <li key={index} className="text-lg cursor-pointer">
                {item.name}
              </li>
            ))}
          </ul>
          <HiMiniUser
            style={{ fontSize: "22px", color: "#FFFFFF" }}
            className="cursor-pointer"
          />
        </div>
        <div className="flex md:hidden items-center">
          <HiBars3BottomRight
            style={{ fontSize: "26px", color: "#FFFFFF" }}
            onClick={toggleMobileMenu}
            className="cursor-pointer"
          />
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed top-0 right-0 w-1/3 h-full bg-[#EFF0F4] flex flex-col justify-between text-[#050315]"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
          >
            <ul className="flex-col gap-4 p-4 flex justify-end">
              {mobileMenu.map((item, index) => (
                <li
                  key={index}
                  className="text-lg cursor-pointer  flex items-center justify-end"
                >
                  {item.name}
                </li>
              ))}
            </ul>
            <div className="h-10 flex items-center justify-center">
              <HiMiniXCircle
                style={{ fontSize: "26px", color: "#FFFFF" }}
                className="cursor-pointer"
                onClick={toggleMobileMenu}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
