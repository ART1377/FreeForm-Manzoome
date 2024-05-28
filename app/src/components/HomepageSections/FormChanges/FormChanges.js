import React, { useState } from "react";
import { motion } from "framer-motion";
import NotesMinimalistic from "../../../icons/NotesMinimalistic";
import Note from "../../../icons/Note";
import Eye from "../../../icons/Eye";
import NavArrowBottom from "./../../../icons/NavArrowBottom";
import Plain from "./../../../icons/Plain";
import Button from './../../Button/Button';


const FormChanges = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const accordionItems = [
    {
      version: "ورژن فعلی",
      date: "14:30 | 1401/01/25",
    },
    {
      version: "1.5",
      date: "14:30 | 1401/01/25",
    },
    {
      version: "1.4",
      date: "14:30 | 1401/01/25",
    },
    {
      version: "1.3",
      date: "14:30 | 1401/01/25",
    },
  ];


     const variants = {
       hidden: { maxHeight: 0, opacity: 0 },
       visible: { maxHeight: "100vh", opacity: 1 },
     };

  return (
    <div className="flex flex-col gap-[60px] mt-[150px]">
      <div className="flex flex-col gap-4 p-4 sm:p-0 sm:flex-row justify-between sm:items-center">
        <div className="w-full sm:w-7/12 gap-15">
          <small className="primary">ثبت هر تغییر در ورژن فرم</small>
          <h2 className="text-primary">
            با یک کلیک
            <div className="rounded-15 bg-primary-100 w-[45px] h-[45px] inline-flex mx-2 justify-center items-center">
              <NotesMinimalistic primary />
            </div>
            و به صورت رایگان فرم خود را بسازید
          </h2>
        </div>
        <div className="w-full sm:w-5/12">
          <p className="text-primary">
            با هر تغییری که در فرم ایجاد کنید یک ورژن به فرم شما اضافه خواهد شد
            و شما میتوانید تمام ورژن های قبلی و تغییرات آن را ببینید.
          </p>
        </div>
      </div>
      {/* table container */}
      <div className="bg-[#F7F8FA] rounded-15 w-full p-30 overflow-hidden">
        <div className="bg-white rounded-15 p-5">
          <div className="flex flex-col gap-5 sm:flex-row justify-between items-center">
            <h6 className="text-primary">تاریخچه فرم</h6>
            <div className="flex gap-5 items-center">
              <div
                className={`transition-all duration-500 ${
                  openAccordion !== null
                    ? "transform -translate-y-[200px] opacity-0"
                    : "transform translate-y-0"
                }`}
              >
                <Button icon={<Plain />}>کلیک کنید</Button>
              </div>
              <div className="bg-[#E9E9E9] rounded-15 px-3 p-2 flex justify-between items-center min-w-[200px]">
                <small className="text-primary">فرم مشاوره</small>
                <small className="">
                  <NavArrowBottom />
                </small>
              </div>
            </div>
          </div>
          <div className="flex gap-6 items-center my-8">
            <small className="text-neutral">ورژن</small>
            <small className="text-neutral">تاریخ ایجاد</small>
          </div>
          {/* form items */}
          <div className="flex flex-col gap-4">
            {accordionItems.map((item, index) => (
              <div
                key={index}
                className={` bg-white flex flex-col justify-between rounded-15 border cursor-pointer hover:bg-primary-100 transition-all duration-300`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex justify-between px-3 py-2">
                  <div className="flex items-center gap-4 min-w-1/2 min-w-[260px] justify-between">
                    <div
                      className={` ${
                        item.version === "ورژن فعلی"
                          ? "bg-primary text-secondary"
                          : "bg-primary-100 text-primary-900"
                      } p-2 rounded-15`}
                    >
                      <p>{item.version}</p>
                    </div>
                    <small className="text-primary">{item.date}</small>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex items-center">
                      <Note />
                    </div>
                    <div className="flex items-center">
                      <Eye />
                    </div>
                    <div className="bg-primary w-px h-[60%] my-auto"></div>
                    <div
                      className={`ps-3 flex items-center transition-all duration-500  ${
                        openAccordion === index
                          ? "transform !rotate-90 mt-3"
                          : "transform rotate-0"
                      }`}
                    >
                      <NavArrowBottom />
                    </div>
                  </div>
                </div>
                {openAccordion === index && (
                  <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ ease: "easeOut", duration: 0.7 }}
                    className="w-full bg-primary-100 rounded-b-15 flex flex-col gap-15"
                  >
                    <div className="border-b-2 border-primary-200 p-3 pb-2">
                      <small className="font-bold text-primary">
                        تاریخچه ورژن{" "}
                        {item.version === "ورژن فعلی" ? 1.6 : item.version}
                      </small>
                    </div>
                    <div className="p-3 flex flex-col gap-5">
                      <div className="flex items-center gap-30">
                        <div className="py-1 px-2 bg-primary-300 text-primary font-bold text-[14px] rounded-15">
                          اصلاح
                        </div>
                        <div>
                          <small className="text-neutral">
                            فیلد (نام) و (نام خانوادگی) ... فیلد (نام) و (نام
                            خانوادگی) ...
                          </small>
                        </div>
                      </div>
                      <div className="flex items-center gap-30">
                        <div className="py-1 px-2 bg-red-200 text-red-700 font-bold text-[14px] rounded-15">
                          حذف
                        </div>
                        <div>
                          <small className="text-neutral">
                            فیلد (نام) و (نام خانوادگی) ... فیلد (نام) و (نام
                            خانوادگی) ...
                          </small>
                        </div>
                      </div>
                      <div className="flex items-center gap-30">
                        <div className="py-1 px-2 bg-green-200 text-green-700 font-bold text-[14px] rounded-15">
                          اضافه کردن
                        </div>
                        <div>
                          <small className="text-neutral">
                            فیلد (نام) و (نام خانوادگی) ... فیلد (نام) و (نام
                            خانوادگی) ...
                          </small>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormChanges;
