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
      <div className="container flex  flex-col lg:flex-row-reverse justify-center items-center gap-12">
        {/* left side     */}

        <motion.img
          variants={SlideLeft(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-md object-cover"
          src="https://images.unsplash.com/photo-1706694442016-bd539e1d102b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
        //   src="https://res.cloudinary.com/dkusr7var/image/upload/e_improve,w_400,h_500,c_thumb,g_auto/v1725229632/chef_jh1awy.jpg"
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
            Food is Art
          </motion.h1>
          <motion.p
            variants={SlideLeft(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-petrona text-lightBrown/80 text-[20px] md:text-start text-center"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo dolore non veritatis unde quis. Voluptatem!
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
