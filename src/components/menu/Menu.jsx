import React, { useState } from "react";
import { FoodData } from "../../data/data";
import { motion } from "framer-motion";
import { SlideDown } from "../../utility/animation";

const Menu = () => {
  const [activeTab, setActiveTab] = useState("Main Course");
  const tabs = ["Main Course", "Side Dish", "Dessert"];
  const filteredCards =
    activeTab === "Main Course"
      ? FoodData.filter((card) => card.category === activeTab)
      : FoodData.filter((card) => card.category === activeTab);
  return (
    <>
      <div className="bg-card1 bg-center bg-cover bg-fixed pb-12 ">
        <div className="container flex justify-center items-center">
          <div>
            <h1 className="text-center font-petrona font-semibold text-[30px] sm:text-[40px]  md:text-[50px] lg:text-[60px] xl:text-[70px] text-secondary mb-[30px] tracking-widest">
              our menu
            </h1>
            <div className="flex justify-center items-center gap-12">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-1 px-2 md:py-2 md:px-4 rounded text-[10px] md:text-[20px] font-petrona font-medium ${
                    activeTab === tab
                      ? "bg-primary text-white"
                      : " bg-primary/30 text-primary"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="container mt-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCards.map((card) => (
            <motion.div
              variants={SlideDown(card.delay)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              key={card.id}
              className=" flex flex-col justify-center items-center border  shadow-lg shadow-primary space-y-2 w-full rounded-xl"
            >
              <img
                src={card.image}
                alt={card.name}
                className="w-[150px] h-[150px] object-cover rounded-full"
              />
              <h1 className="font-petrona font-semibold text-[20px] text-secondary ">
                {card.name}
              </h1>
              <div className="flex justify-around items-center gap-12">
                <p className="font-boogaloo text-[18px] text-primary">
                  Price: {card.price}dh
                </p>
                <p className="font-boogaloo text-[18px] text-primary">
                  {card.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
