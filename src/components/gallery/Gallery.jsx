import React from "react";

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
            transition: { duration: 1.2, delay: 0.4 },
          }}
          viewport={{ once: true }}
          className="text-secondary font-petrona font-semibold text-[50px]"
        >
          Gallery
        </motion.h1>

        <div class="parent">
          <motion.div
            variants={SlideRight(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="div1"
          >
            <img
              src="https://images.unsplash.com/photo-1585694854987-19b609e7721b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D"
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
              src="https://images.unsplash.com/photo-1588680051507-99b0bda3f498?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudCUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D"
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
              src="https://images.unsplash.com/photo-1614082636396-f8927eb06739?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnQlMjBnYWxsZXJ5fGVufDB8fDB8fHww"
              className="w-[350px] h-[250px]  md:w-[350px] md:h-[265px] rounded-md object-cover"
              alt="gallery"
            />
          </motion.div>
          <motion.div
            variants={SlideLeft(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="div4"
          >
            <img
              src="https://images.unsplash.com/photo-1719396923516-02856fd16f1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJlc3RhdXJhbnQlMjBnYWxsZXJ5fGVufDB8fDB8fHww"
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
