import React from "react";
import logo from "../../img/logo/logo.png";
import { navLinks } from "../../data/data";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration:1.2,
      ease:'easeIn'
    },
  },
};

const navChildren = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="container  flex justify-end items-center pt-4"
      >
      
        <motion.div
          variants={navChildren}
          onClick={toggle}
          className=" text-white text-4xl md:text-6xl cursor-pointer hover:text-secondary"
        >
          {isOpen ? <FaXmark /> : <RxHamburgerMenu />}
        </motion.div>
      </motion.nav>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full h-screen z-20"
          >
            <div className="text-xl font-semibold uppercase bg-primary/80 text-white py-10 m-6 rounded-3xl">
              <ul className="flex flex-col justify-center items-center gap-6">
                {navLinks.map((item) => (
                  <li
                    className="font-medium font-petrona cursor-pointer text-lightBrown text-base"
                    key={item.id}
                  >
                    <a href={item.link}>{item.title}</a>
                    
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
