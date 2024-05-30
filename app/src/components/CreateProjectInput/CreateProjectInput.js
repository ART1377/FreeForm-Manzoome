import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DocumentAdd from "../../icons/DocumentAdd";
import Button from "../Button/Button";

const CreateProjectInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [placeholderVisible, setPlaceholderVisible] = useState(true);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputFocus = () => {
    setPlaceholderVisible(false);
  };

  const handleInputBlur = () => {
    if (inputValue === "") {
      setPlaceholderVisible(true);
    }
  };

  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          className="border border-neutral rounded-15 py-4 pl-40 pr-12 focus:outline-none focus:border-primary w-full h-20 placeholder-transparent"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <AnimatePresence>
          {placeholderVisible && (
            <motion.div
              initial={{
                top: "50%",
                transform: "translateY(-50%)",
                right: "50px",
              }}
              animate={{ right: "50px" }}
              exit={{ right: "-100px", opacity: 0 }} // Slide to the right top-1/2 transform -translate-y-1/2 left-40
              className="absolute text-neutral text-sm pointer-events-none"
            >
              نام پروژه خود را وارد کنید...
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Button
        css={
          "absolute left-15 flex items-center top-1/2 transform -translate-y-1/2"
        }
      >
        ساخت پروژه
      </Button>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-15">
        <DocumentAdd />
      </div>
    </div>
  );
};

export default CreateProjectInput;
