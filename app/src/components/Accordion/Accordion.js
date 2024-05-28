import React, { useState } from "react";
import { motion } from "framer-motion";
import NavArrowBottom from "../../icons/NavArrowBottom";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

   const variants = {
     hidden: { maxHeight: 0, opacity: 0 },
     visible: { maxHeight: "100vh", opacity: 1 },
   };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div
          key={index}
          className={`border rounded-15 mb-2 ${
            openIndex === index
              ? "bg-primary text-[#F6F6F6]"
              : "bg-[#F6F6F6] text-primary"
          }`}
        >
          <div
            className="flex justify-between items-center p-4 cursor-pointer"
            onClick={() => toggleItem(index)}
          >
            <h6>{item.header}</h6>
            <div
              className={`transform transition-transform duration-300 ${
                openIndex === index
                  ? "text-[#F6F6F6] rotate-90"
                  : "text-primary"
              }`}
            >
              <NavArrowBottom
                color={openIndex === index ? "#F6F6F6" : "#354150"}
              />
            </div>
          </div>
          {/* item content */}
          {openIndex === index && (
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ ease: "easeOut", duration: 0.7 }}
              className={`p-4 pb-8`}
            >
              <small>{item.content}</small>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
