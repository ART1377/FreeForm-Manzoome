import React, { useState } from "react";
import { motion } from "framer-motion";
import style from "./Properties.module.css";
import ShieldNetwork from "./../../../icons/ShieldNetwork";
import TrashBin from "./../../../icons/TrashBin";
import FolderWithFiles from "./../../../icons/FolderWithFiles";
import MonitorSmartphone from "./../../../icons/MonitorSmartphone";
import Close from "../../../icons/Close";
import Refresh from "./../../../icons/Refresh";
import NavArrowRight from "../../../icons/NavArrowRight";
import ArrowLeft from "../../../icons/ArrowLeft";
import Page from "../../../icons/Page";
import EditPen from "../../../icons/EditPen";

const Properties = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [activeVerticalTab, setActiveVerticalTab] = useState(0);
  const [verticalTabIsActive, setVerticalTabIsActive] = useState(true);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const handleVerticalTabClick = (index) => {
    setActiveVerticalTab(index);
    if (!verticalTabIsActive) {
      setVerticalTabIsActive(true);
    }
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  };

  const tabs = ["مدیریت فایل", "دیزاین مجزا", "حذف شده ها", "دامنه اختصاصی"];

  const verticalTabs = ["صفحات", "فرم ها", "فایل ها"];


  // animation state
  let variants = {
    hidden: { opacity: 0, x: -1000 },
    visible: { opacity: 1, x: 0 },
  };

  switch (activeTab) {
    case 1:
      variants = {
        hidden: { opacity: 0, y: 1000 },
        visible: { opacity: 1, y: 0 },
      };
      break;
    case 2:
      variants = {
        hidden: { opacity: 0, y: -1000 },
        visible: { opacity: 1, y: 0 },
      };
      break;
    case 3:
      variants = {
        hidden: { opacity: 0, x: 1000 },
        visible: { opacity: 1, x: 0 },
      };
      break;
    default:
      // For the default case (activeTab === 0), variants remain unchanged
      break;
  }

  return (
    <div className="flex flex-col items-center mt-[150px] gap-30">
      <div className="flex flex-col gap-15 w-10/12">
        <small className="text-primary">ویژگی های فری فرم</small>
        <h3 className="text-primary max-w-[600px]">
          ویژگی هایی که کمتر در مورد آنها شنیده‌اید
        </h3>
        <p className="text-primary">
          بعد از اتمام پروسه ساخت فرم یا پروژه خود، به راحتی می‌توانید کدهای آن
          را در وبسایت خود پیاده سازی و یا اضافه کنید، بدین شکل که اگر شما
          ویرایشی در فرم خود اعمال کردید سایت شما نیز به صورت داینامیک آپدیت
          می‌شود.
        </p>
      </div>

      <div>
        {/* tabs */}
        <div className="flex p-2.5 bg-[#F6F6F6] rounded-15 w-fit mx-auto">
          {tabs.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer p-2 text-center rounded-15 px-3 lg:px-30 py-[5px] flex gap-px items-center transition duration-500 ${
                activeTab === index
                  ? "text-secondary bg-primary"
                  : "text-primary bg-transparent"
              }`}
              onClick={() => handleTabClick(index)}
            >
              {item}
              {index === 0 && <FolderWithFiles primary={activeTab !== 0} />}
              {index === 1 && <MonitorSmartphone primary={activeTab !== 1} />}
              {index === 2 && <TrashBin primary={activeTab !== 2} />}
              {index === 3 && <ShieldNetwork primary={activeTab !== 3} />}
            </div>
          ))}
        </div>

        {/* content container */}
        <div
          className={`bg-primary flex flex-col lg:flex-row gap-20 lg:gap-6 lg:justify-between lg:items-start rounded-15 px-12 py-30 mt-30 min-h-[600px] h-auto relative`}
        >
          {/* images */}
          <div className="absolute left-0 top-5">
            <img src="images/Property1.png" alt="" />
          </div>
          <div className="absolute left-0 bottom-5">
            <img src="images/Property2.png" alt="" />
          </div>

          {/* right side */}
          <motion.div
            key={activeTab}
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={"opacity 0.5s ease, transform 0.5s ease"}
            className="flex flex-col lg:flex-row gap-20 lg:gap-6 lg:justify-between lg:items-center"
          >
            <div className="w-full lg:w-6/12 flex flex-col gap-15 mb-auto mt-10">
              <div className="size-[76px] rounded-15 bg-neutral-200 border border-secondary flex justify-center items-center">
                {activeTab === 0 && <FolderWithFiles />}
                {activeTab === 1 && <MonitorSmartphone />}
                {activeTab === 2 && <TrashBin />}
                {activeTab === 3 && <ShieldNetwork />}
              </div>
              <small className="text-secondary">{tabs[activeTab]}</small>
              <h3 className="text-white pe-12">فضای ذخیره سازی خود را مدیریت کنید</h3>
              <p className="text-neutral pe-12 max-w-[90%]">
                شما میتوانید با استفاده از ابزار مدیریت فایل فری فرم همه فایل
                های مورد نیاز پروژه خود را ذخیره کنید و از آنها استفاده کنید.
              </p>
            </div>

            {/* left side */}
            <div className="w-full lg:w-6/12 mb-40 lg:mb-2 mt-10">
              <div className="flex flex-col gap-6 bg-[#F7F8FA] rounded-lg p-6 h-[356px] w-[328px] ms-auto relative">
                {/* safari nav */}
                <div className="flex items-center gap-6 justify-end">
                  <div
                    className={`w-[133px] h-6 pl-10 pr-[41px]  rounded-15 justify-center items-center inline-flex ${
                      tabs[activeTab] === "دامنه اختصاصی"
                        ? "bg-primary"
                        : "bg-primary-100"
                    }`}
                  >
                    <div
                      className={`text-center text-primary text-[10px] ${
                        tabs[activeTab] === "دامنه اختصاصی" && "text-secondary"
                      }`}
                    >
                      <small className={`text-[10px]`}>yourwebsite.com</small>
                    </div>
                  </div>
                  <div className="flex gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FA85A4]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFE56E]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#52E282]"></div>
                  </div>
                </div>

                {/* vertical tabs */}

                {/* file manager content */}
                {tabs[activeTab] === "مدیریت فایل" && (
                  <div className="relative left-[-120px] top-[120px]">
                    <div className="flex transform -rotate-90  bg-white rounded-15 gap-2.5 p-1.5">
                      {verticalTabs.map((item, index) => (
                        <div
                          key={index}
                          className={`cursor-pointer text-center rounded-md px-5 py-2 flex gap-px items-center transition duration-500 text-primary font-bold text-[12px] relative ${
                            activeVerticalTab === index && !verticalTabIsActive
                              ? "text-secondary bg-primary"
                              : "text-primary bg-white"
                          }`}
                          onClick={() => handleVerticalTabClick(index)}
                        >
                          {item}
                          {activeVerticalTab === index &&
                            verticalTabIsActive && (
                              <div
                                className={`w-full h-full bg-primary z-10 absolute rounded-lg flex justify-center items-center left-0 cursor-pointer ${style["custom-shape"]}`}
                                onClick={() => setVerticalTabIsActive(false)}
                              >
                                <Close />
                              </div>
                            )}

                          {activeVerticalTab === index &&
                            !verticalTabIsActive && (
                              <div className="bg-primary rounded-full size-7 absolute top-[22px] rounded-tl-2xl rounded-bl-2xl -z-10 transform left-1/2 -translate-x-1/2 text-white rotate-90 flex items-center">
                                <small className="">
                                  <NavArrowRight />
                                </small>
                              </div>
                            )}
                        </div>
                      ))}
                    </div>

                    {/* vertical tab content */}
                    <div
                      className={`w-[369px] h-[450px] bg-primary shadow-lg rounded-15 absolute left-[155px] -top-[120px] transition-all duration-500 ${
                        verticalTabIsActive
                          ? ""
                          : "transform -translate-x-[1000px] opacity-0 !h-0"
                      }`}
                    >
                      <div className="flex flex-col gap-15 p-6">
                        {/* header content */}
                        <div className="flex justify-between text-white border-b border-neutral pb-2">
                          <h6>{verticalTabs[activeVerticalTab]}</h6>
                          {/* menu icon */}
                          <div
                            className="flex gap-1 flex-col cursor-pointer relative px-2"
                            onClick={() => setIsDropdownOpen((prev) => !prev)}
                          >
                            <div className="size-1 rounded-full bg-white"></div>
                            <div className="size-1 rounded-full bg-white"></div>
                            <div className="size-1 rounded-full bg-white"></div>
                            {/* dropdown menu */}
                            {isDropdownOpen && (
                              <div className="bg-white p-2 rounded-15 flex flex-col gap-4 absolute left-0 top-8 z-20 shadow-md min-w-[200px]">
                                <div className="flex justify-between items-center gap-6 min-w-[100px] hover:bg-neutral-300 rounded-15 py-1 px-2 !w-full">
                                  <small className="min-w-fit text-neutral">
                                    ایجاد صفحه
                                  </small>
                                  <div>
                                    <Page />
                                  </div>
                                </div>
                                <div className="flex justify-between items-center gap-6 min-w-[100px] hover:bg-neutral-300 rounded-15 py-1 px-2 !w-full">
                                  <small className="min-w-fit text-neutral">
                                    انتخاب و ویرایش
                                  </small>
                                  <div>
                                    <EditPen />
                                  </div>
                                </div>
                                <div className="flex justify-between items-center gap-6 min-w-[100px] hover:bg-neutral-300 rounded-15 py-1 px-2 !w-full">
                                  <small className="min-w-fit text-[#f33]">
                                    انتخاب و حزف
                                  </small>
                                  <div>
                                    <TrashBin red />
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* special tabs for files */}
                        {verticalTabs[activeVerticalTab] === "فایل ها" && (
                          <div className="flex justify-between items-center">
                            <div className="text-white flex gap-1 items-center">
                              <FolderWithFiles white />
                              <small className="text-neutral">پوشه تست</small>/
                              <small className="font-bold text-white">
                                فایل های پروژه
                              </small>
                            </div>
                            <div>
                              <ArrowLeft />
                            </div>
                          </div>
                        )}

                        {/* content of vertical active tab */}
                        {verticalTabs[activeVerticalTab] === "صفحات" && (
                          <div className="flex flex-wrap gap-2">
                            <div className="bg-white text-primary rounded-15 px-15 py-2">
                              <small>index 1</small>
                            </div>
                            <div className="bg-white text-primary rounded-15 px-15 py-2">
                              <small>index 1</small>
                            </div>
                            <div className="bg-white text-primary rounded-15 px-15 py-2">
                              <small>index 1</small>
                            </div>
                            <div className="bg-white text-primary rounded-15 px-15 py-2">
                              <small>index 1</small>
                            </div>
                            <div className="bg-white text-primary rounded-15 px-15 py-2">
                              <small>index 1</small>
                            </div>
                            <div className="bg-white text-primary rounded-15 px-15 py-2">
                              <small>index 1</small>
                            </div>
                            <div className="bg-white text-primary rounded-15 px-15 py-2">
                              <small>index 1</small>
                            </div>
                          </div>
                        )}
                        {verticalTabs[activeVerticalTab] === "فرم ها" && (
                          <div className="flex flex-wrap gap-2">
                            <div className="bg-white text-primary rounded-15 px-15 py-2">
                              <small>فرم 1</small>
                            </div>
                            <div className="bg-white text-primary rounded-15 px-15 py-2">
                              <small>فرم 1</small>
                            </div>
                            <div className="bg-white text-primary rounded-15 px-15 py-2">
                              <small>فرم 1</small>
                            </div>
                            <div className="bg-white text-primary rounded-15 px-15 py-2">
                              <small>فرم 1</small>
                            </div>
                            <div className="bg-white text-primary rounded-15 px-15 py-2">
                              <small>فرم 1</small>
                            </div>
                            <div className="bg-white text-primary rounded-15 px-15 py-2">
                              <small>فرم 1</small>
                            </div>
                            <div className="bg-white text-primary rounded-15 px-15 py-2">
                              <small>فرم 1</small>
                            </div>
                          </div>
                        )}

                        {verticalTabs[activeVerticalTab] === "فایل ها" && (
                          <div className="flex flex-wrap gap-2">
                            <div className="bg-white text-primary rounded-15 p-4 flex flex-col gap-2 items-center hover:bg-secondary transition-all duration-300">
                              <div>
                                <FolderWithFiles primary />
                              </div>
                              <small className="text-primary">پوشه تست</small>
                            </div>
                            <div className="bg-white text-primary rounded-15 p-4 flex flex-col gap-2 items-center hover:bg-secondary transition-all duration-300">
                              <div>
                                <FolderWithFiles primary />
                              </div>
                              <small className="text-primary">پوشه تست</small>
                            </div>
                            <div className="bg-white text-primary rounded-15 p-4 flex flex-col gap-2 items-center hover:bg-secondary transition-all duration-300">
                              <div>
                                <FolderWithFiles primary />
                              </div>
                              <small className="text-primary">پوشه تست</small>
                            </div>
                            <div className="bg-white text-primary rounded-15 p-4 flex flex-col gap-2 items-center hover:bg-secondary transition-all duration-300">
                              <div>
                                <FolderWithFiles primary />
                              </div>
                              <small className="text-primary">پوشه تست</small>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* design */}
                {tabs[activeTab] === "دیزاین مجزا" && (
                  <div className="flex flex-col gap-15 relative">
                    <div className="flex w-full justify-between p-1 bg-gray-200 rounded-15">
                      <div className="bg-primary py-1 px-30 rounded-15 w-1/2 flex justify-center">
                        <small className=" text-white">دسکتاپ</small>
                      </div>
                      <div className="bg-transparent py-1 px-30 rounded-15 w-1/2 flex justify-center">
                        <small className=" text-neutral">موبایل</small>
                      </div>
                    </div>

                    <div className="h-[160px] border border-dashed border-neutral rounded-15"></div>

                    <div className="flex w-full justify-between p-1 bg-gray-200 rounded-15 absolute left-20 -bottom-3 z-20">
                      <div className="bg-primary py-1 px-30 rounded-15 w-1/2 flex justify-center">
                        <small className=" text-white">دسکتاپ</small>
                      </div>
                      <div className="bg-transparent py-1 px-30 rounded-15 w-1/2 flex justify-center">
                        <small className=" text-neutral">موبایل</small>
                      </div>
                    </div>
                  </div>
                )}

                {/* deleted */}
                {tabs[activeTab] === "حذف شده ها" && (
                  <div className="bg-white rounded-15 p-4 h-full max-h-[250px]">
                    <div className="flex w-full justify-between p-1 bg-gray-200 rounded-15">
                      <div className="bg-primary py-1 2 rounded-15 w-1/2 flex justify-center">
                        <small className=" text-white">صفحات</small>
                      </div>
                      <div className="bg-transparent py-1 2 rounded-15 w-1/2 flex justify-center">
                        <small className=" text-neutral">فرم ها</small>
                      </div>
                      <div className="bg-transparent py-1 2 rounded-15 w-1/2 flex justify-center">
                        <small className=" text-neutral">فایل ها</small>
                      </div>
                    </div>

                    <div className="flex flex-col items-end mt-30 gap-2">
                      <div className="rounded-15 bg-white shadow-md flex justify-between items-center p-4 min-w-[400px]">
                        <small className="text-primary font-bold">
                          صفحه نخست
                        </small>
                        <small className="text-primary">3</small>
                        <small className="text-primary">34 MB</small>
                        <div>
                          <Refresh />
                        </div>
                      </div>
                      <div className="rounded-15 bg-white shadow-md flex justify-between items-center p-4 min-w-[400px]">
                        <small className="text-primary font-bold">
                          صفحه نخست
                        </small>
                        <small className="text-primary">3</small>
                        <small className="text-primary">34 MB</small>
                        <div>
                          <Refresh />
                        </div>
                      </div>
                      <div className="rounded-15 bg-white shadow-md flex justify-between items-center p-4 min-w-[400px]">
                        <small className="text-primary font-bold">
                          صفحه نخست
                        </small>
                        <small className="text-primary">3</small>
                        <small className="text-primary">34 MB</small>
                        <div>
                          <Refresh />
                        </div>
                      </div>
                      <div className="rounded-15 bg-white shadow-md flex justify-between items-center p-4 min-w-[400px]">
                        <small className="text-primary font-bold">
                          صفحه نخست
                        </small>
                        <small className="text-primary">3</small>
                        <small className="text-primary">34 MB</small>
                        <div>
                          <Refresh />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* domain */}
                {tabs[activeTab] === "دامنه اختصاصی" && (
                  <div className="bg-white rounded-15 p-4 h-full max-h-[250px] min-h-[250px] w-full flex flex-col gap-2 relative">
                    <small className="text-primary">نام دامنه</small>
                    <div className="w-full rounded-15 bg-gray-200 p-3 ms-2">
                      <small className="text-neutral font-[8px]">
                        مثال www.manzoome.ir
                      </small>
                    </div>

                    <div className="flex flex-col mt-30 gap-2 p-3 pe-0 bg-white shadow-md rounded-15 min-w-[280px] absolute -right-20 -bottom-20">
                      <div className="bg-white text-primary-700 hover:text-primary p-2 hover:border-e-2 hover:border-primary hover:bg-primary-100 transition-all duration-300">
                        <small className="">تنظیمات پروژه</small>
                      </div>
                      <div className="bg-white text-primary-700 hover:text-primary p-2 hover:border-e-2 hover:border-primary hover:bg-primary-100 transition-all duration-300">
                        <small className="">اشتراک گذاری</small>
                      </div>
                      <div className="bg-white text-primary-700 hover:text-primary p-2 hover:border-e-2 hover:border-primary hover:bg-primary-100 transition-all duration-300">
                        <small className="">یکپارجه سازی</small>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
