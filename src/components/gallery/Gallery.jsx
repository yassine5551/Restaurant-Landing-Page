import React from "react";
import { galleryImg } from "../../data/data";
import { motion, stagger } from "framer-motion";
import { SlideLeft, SlideRight } from "../../utility/animation";
const Gallery = () => {
  return (
    <>
      <div className="w-screen flex flex-col md:flex-row ">
        {galleryImg.map((item) => (
          <>
            <div key={item.id} className="w-full">
              <img
                src={item.img}
                alt=""
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Gallery;
