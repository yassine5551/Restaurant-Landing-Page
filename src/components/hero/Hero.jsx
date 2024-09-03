import React from "react";
import { motion } from "framer-motion";
import { SlideDown } from "../../utility/animation";

const Hero = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.9, duration: 1.2, ease: "easeIn" },
        }}
        className="  flex justify-center items-center h-screen"
      >
        <motion.div
          variants={SlideDown(1)}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-[30px] sm:text-[50px]  md:text-[60px] lg:text-[80px] xl:text-[100px] font-petrona font-medium text-lightBrown">
            Experience Culinary
          </p>
          <p className="text-[30px] sm:text-[50px]  md:text-[60px] lg:text-[80px] xl:text-[100px] font-petrona font-medium text-lightBrown">
            Excellence
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-[100px]">
            <button className="primary-btn font-petrona">
              <a href="#Contact">Reserve Your Table</a>
            </button>
            <button className="text-white hover:text-secondary transition-all font-semibold md:py-3 md:px-3 py-1 px-1 rounded-md font-petrona border ">
              <a href="#Menu">Discover Our Specials</a>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Hero;
