import React, { useState } from "react";
import DocumentAdd from '../../icons/DocumentAdd'
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
    <>
      <input
        type="text"
        className="border border-neutral rounded-15 py-4 pl-40 pr-12 focus:outline-none focus:border-primary w-full h-20 placeholder:text-neutral placeholder:text-sm"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        placeholder={`${
          placeholderVisible ? "نام پروژه خود را وارد کنید..." : ""
        }`}
      />
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
    </>
  );
}

export default CreateProjectInput