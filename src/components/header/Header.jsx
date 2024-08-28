import React from "react";
import logo from "../../img/logo/logo.png";
import { navLinks } from "../../data/data";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="container flex justify-between items-center">
        {/* logo section */}
        <div className="w-[80px] h-[80px] ">
          <img src={logo}  alt="" />
        </div>
        {/* navlinks section */}
        <div className="hidden md:block">
          <ul className="flex justify-center items-center gap-9">
            {navLinks.map((item) => (
              <li
                className="font-medium font-petrona text-lightBrown cursor-pointer hover:text-primary text-lg lg:text-xl"
                key={item.id}
              >
                <a href={item.link}>{item.title}</a>
                
              </li>
            ))}
          </ul>
        </div>
        {/* hamburger menu */}
        <div onClick={toggle} className="md:hidden text-primary text-3xl">
          {isOpen ? <FaXmark /> : <RxHamburgerMenu />}
        </div>
      </nav>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full h-screen z-20"
          >
            <div className="text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl">
              <ul className="flex flex-col justify-center items-center gap-6">
                {navLinks.map((item) => (
                  <li
                    className="font-medium font-petrona cursor-pointer text-lightBrown text-base"
                    key={item.id}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
