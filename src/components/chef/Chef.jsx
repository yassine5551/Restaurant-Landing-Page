import React from "react";
import chef from "../../img/chef/chef.jpg";
import { FaArrowRight } from "react-icons/fa";
import {motion} from 'framer-motion'
import {SlideLeft} from '../../utility/animation'
import {SlideRight} from '../../utility/animation'
const Chef = () => {
  return (
    <>
      <div className="container flex flex-col md:flex-row justify-center items-center gap-12">
        {/* left side     */}
        
          <motion.img variants={SlideRight(0.4)} initial='hidden' whileInView='visible' className="w-[300px] h-[520px] lg:w-[440px] lg:h-[660px] rounded-md" src={chef} alt="" />
        
        {/* Right side */}
        <div className="flex flex-col justify-center items-center md:items-start gap-6">
          <motion.h1 variants={SlideLeft(0.4)} initial='hidden' whileInView='visible' className=" md:text-start  font-petrona font-medium text-[40px] md:text-[40px] text-lightBrown ">Chef Ahmed El Mansouri</motion.h1>
          <motion.p variants={SlideLeft(0.6)} initial='hidden' whileInView='visible' className="font-petrona text-lightBrown/80 text-[20px] md:text-start text-center">
            <span className="text-secondary">Chef Ahmed El Mansouri</span>, with over 15 years of
            experience, is a master of Moroccan cuisine. His deep-rooted passion
            for traditional flavors, combined with a flair for modern
            presentation, has made him a renowned figure in the culinary world.
            Chef Ahmed’s dishes are a tribute to Morocco’s rich heritage, each
            one crafted with love, precision, and the finest local ingredients.
            At Master Chef, he brings the essence of Moroccan hospitality to
            life, ensuring every guest enjoys an authentic and unforgettable
            dining experience.
          </motion.p>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12">
            <motion.button variants={SlideLeft(0.7)} initial='hidden' whileInView='visible' className="primary-btn">Reserve Your Table</motion.button>
            <motion.a variants={SlideLeft(0.8)} initial='hidden' whileInView='visible' href="" className="underline text-secondary font-petrona italic text-sm sm:text-lg md:text-xl lg:text-2xl flex justify-center items-center gap-2">Our chefs <FaArrowRight className="text-sm"/> </motion.a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chef;
