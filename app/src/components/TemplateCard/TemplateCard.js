import React from "react";
import ArrowLeft from "./../../icons/ArrowLeft";
import DocumentText from "../../icons/DocumentText";
import ClipboardList from "../../icons/ClipboardList";
import Smartphone from "../../icons/Smartphone";
import Button from "../Button/Button";

const TemplateCard = ({ imgSrc, isSmartphone }) => {
  return (
    <div className="w-[344px] h-[419px] min-w-[280px] max-w-[344px] lg:w-1/3 border border-primary-100 rounded-15 flex flex-col mx-auto bg-white group shadow-[0px_30px_60px_0px_var(--primary-100)]">
      <div className="rounded-15 overflow-hidden h-[193px] relative">
        <img src={imgSrc} alt="" />
        <div className="bg-primary-300 transition-all duration-300 absolute w-full h-full top-0 left-0 bottom-0 right-0 flex opacity-0 justify-center items-center group-hover:opacity-100">
          <ArrowLeft />
        </div>
        {isSmartphone && (
          <div className="bg-primary rounded-full p-[5px] absolute top-2.5 right-2.5 !z-10">
            <Smartphone />
          </div>
        )}
      </div>
      {/* card item content */}
      <div className="mt-1.5 p-4 flex flex-col gap-30">
        <div className="flex justify-between items-center">
          <div>
            <h6>پت شاپ</h6>
          </div>
          <div className="flex gap-5">
            <div className="flex gap-1 bg-primary-100 rounded-15 p-2.5">
              <small className="text-primary">1</small>
              <DocumentText />
            </div>
            <div className="flex gap-1 bg-primary-100 rounded-15 p-2.5">
              <small className="text-primary">3</small>
              <ClipboardList />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-15">
          <small className="text-primary">
            شما به راحتی میتوانید فرم و یا حتی صفحه دلخواه خود را بهشما به راحتی
            میتوانید فرم و یا حتی صفحه دلخواه خود را به صورت کاملا رایگان در ...
          </small>
          <Button>کلیک کنید</Button>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
