import React from "react";
import chef from "../../img/chef/chef.jpg";
import { FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { SlideRight, SlideDown, SlideLeft } from "../../utility/animation";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { chefImgs } from "../../data/data";

const Chef = () => {
  const [IsOpenBox, SetOpenBox] = useState(false);
  const toggle = () => {
    SetOpenBox(!IsOpenBox);
    console.log(IsOpenBox);
  };
  return (
    <>
      <div className="container flex flex-col md:flex-row justify-center items-center gap-12">
        {/* left side     */}

        <motion.img
          variants={SlideRight(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-[300px] h-[520px] lg:w-[440px] lg:h-[660px] rounded-md"
          src={chef}
          alt=""
        />

        {/* Right side */}
        <div className="flex flex-col justify-center items-center md:items-start gap-6">
          <motion.h1
            variants={SlideLeft(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className=" md:text-start  font-petrona font-medium text-[40px] md:text-[40px] text-lightBrown "
          >
            Chef Ahmed El Mansouri
          </motion.h1>
          <motion.p
            variants={SlideLeft(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-petrona text-lightBrown/80 text-[20px] md:text-start text-center"
          >
            <span className="text-secondary">Chef Ahmed El Mansouri</span>, with
            over 15 years of experience, is a master of Moroccan cuisine. His
            deep-rooted passion for traditional flavors, combined with a flair
            for modern presentation, has made him a renowned figure in the
            culinary world. Chef Ahmed’s dishes are a tribute to Morocco’s rich
            heritage, each one crafted with love, precision, and the finest
            local ingredients. At Master Chef, he brings the essence of Moroccan
            hospitality to life, ensuring every guest enjoys an authentic and
            unforgettable dining experience.
          </motion.p>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12">
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 0.4 } }}
              className="primary-btn"
              viewport={{ once: true }}
            >
              Reserve Your Table
            </motion.button>
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 0.4 } }}
              viewport={{ once: true }}
              href=""
              onClick={toggle}
              className=" underline text-secondary font-petrona italic text-sm sm:text-lg md:text-xl lg:text-2xl flex justify-center items-center gap-2"
            >
              Our chefs <FaArrowRight className="text-sm" />
            </motion.button>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {IsOpenBox && (
          <div className="flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="mt-6 bg-lime-300/50 rounded-xl   w-4/5 h-full  flex justify-center items-center  relative"
            >
              <button
                onClick={toggle}
                className="hidden   hover:text-red-600  hover:scale-[1.2] transition-all text-red-600  text-3xl absolute xl:flex justify-center items-center top-[-3rem]"
              >
                <FaXmark />
                <span className="text-3xl font-boogaloo font-medium">
                  Close
                </span>
              </button>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full h-full rounded-full ">
                {chefImgs.map((item) => (
                  <img
                    key={item.id}
                    src={item.image}
                    className="rounded-full"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chef;
