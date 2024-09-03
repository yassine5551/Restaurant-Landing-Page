import React from "react";
import { motion} from "framer-motion";
import { SlideRight,SlideLeft } from "../../utility/animation";
import { useState } from "react";

const Chef = () => {
  const [IsOpenBox, SetOpenBox] = useState(false);
  const toggle = () => {
    SetOpenBox(!IsOpenBox);
    console.log(IsOpenBox);
  };
  return (
    <>
      <div className="container flex flex-col lg:flex-row justify-center items-center gap-12">
        {/* left side     */}

        <motion.img
          variants={SlideRight(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-md object-cover"
          src="https://res.cloudinary.com/dkusr7var/image/upload/e_improve,w_400,h_500,c_thumb,g_auto/v1725229632/chef_jh1awy.jpg"
          alt="chef"
        />

        {/* Right side */}
        <div className="flex flex-col justify-center items-center lg:items-start gap-6">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Chef;
