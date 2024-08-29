import React from "react";
import { aboutData } from "../../data/data";
import { motion } from "framer-motion";
import { SlideRight, SlideDown } from "../../utility/animation";

const About = () => {
  return (
    <>
      <div className="container">
        <motion.h1
          variants={SlideDown(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}

          className="font-petrona font-semibold text-[30px] sm:text-[40px]  md:text-[50px] lg:text-[60px] xl:text-[70px] text-secondary mb-[30px] tracking-widest"
        >
          Discover Our Story
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {aboutData.map((item) => (
            <motion.div
              variants={SlideRight(item.delay)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              key={item.id}
            >
              <h1 className="font-petrona font-medium text-[30px] text-lightBrown tracking-wider">
                {item.title}
              </h1>
              <p className="font-petrona font-medium text-[18px] text-primary opacity-45  ">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
