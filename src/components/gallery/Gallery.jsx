import React from "react";

import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../../utility/animation";
const Gallery = () => {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1.2, delay: 0.4 },
        }}
        viewport={{ once: true }}
        className="text-secondary font-petrona font-semibold text-[50px] text-center"
      >
        Gallery
      </motion.h1>
      <div className="">
        {}
      </div>
    </>
  );
};

export default Gallery;
