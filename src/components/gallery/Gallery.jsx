import React from "react";
import g1 from "../../img/gallery/g1.jpg";
import g2 from "../../img/gallery/g2.jpg";
import g3 from "../../img/gallery/g3.jpg";
import g4 from "../../img/gallery/g4.jpg";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../../utility/animation";
const Gallery = () => {
  return (
    <>
      <div className="container flex justify-center items-center flex-col gap-4">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 1.2, delay: 0.6 },
          }}
          viewport={{ once: true }}
          className="text-secondary font-petrona font-semibold text-[50px]"
        >
          Gallery
        </motion.h1>

        <div class="parent">
          <motion.div
            variants={SlideRight(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="div1"
          >
            <img
              src={g1}
              className="w-[350px] h-[250px]  md:w-[350px] md:h-[530px] rounded-md  object-cover"
              alt="gallery"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1.2, delay: 0.4 },
            }}
            viewport={{ once: true }}
            className="div2"
          >
            <img
              src={g2}
              className="w-[350px] h-[250px] md:w-[350px] md:h-[265px] rounded-md object-cover"
              alt="gallery"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1.2, delay: 0.4 },
            }}
            viewport={{ once: true }}
            className="div3"
          >
            <img
              src={g3}
              className="w-[350px] h-[250px]  md:w-[350px] md:h-[265px] rounded-md object-cover"
              alt="gallery"
            />
          </motion.div>
          <motion.div
            variants={SlideLeft(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="div4"
          >
            <img
              src={g4}
              className="w-[350px] h-[250px] md:w-[350px] md:h-[530px] rounded-md object-cover"
              alt="gallery"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
