import React, { useState } from "react";
import Page from "../../../icons/Page";
import Logo from "../../Logo/Logo";
import style from "./Design.module.css";
import TrashBin from "./../../../icons/TrashBin";
import Close from "../../../icons/Close";
import NavArrowRight from "../../../icons/NavArrowRight";
import EditPen from "../../../icons/EditPen";
import HamburgerMenu from "./../../../icons/HamburgerMenu";

const Design = () => {
  const [activeVerticalTab, setActiveVerticalTab] = useState(0);
  const [verticalTabIsActive, setVerticalTabIsActive] = useState(true);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleVerticalTabClick = (index) => {
    setActiveVerticalTab(index);
    if (!verticalTabIsActive) {
      setVerticalTabIsActive(true);
    }
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  };


  const verticalTabs = ["صفحات", "فرم ها", "فایل ها"];

  return (
    <div className="bg-neutral-100 flex flex-col lg:flex-row gap-3 lg:gap-4 lg:justify-between lg:items-center rounded-15 px-16 py-30 pe-0 min-h-[1600px] lg:min-h-[900px] h-auto relative mt-[150px]">
      <div className="absolute right-0 bottom-0">
        <div className="flex w-[220px] px-30 py-15 gap-4 rounded-15 absolute bottom-40 right-40 bg-gradient-to-br from-white to-transparent filter drop-shadow-xl backdrop-blur-lg items-center">
          <div className="flex flex-col gap-2">
            <h6 className="text-primary">Freeform</h6>
            <small className="text-primary-600">Freeform.ir</small>
          </div>
          <Logo />
        </div>
        <img src="images/Design.png" alt="" />
      </div>
      {/* right side */}
      <div className="w-full lg:w-6/12 flex flex-col gap-15 lg:mb-auto pe-8">
        <div className="size-[90px] rounded-15 bg-primary flex justify-center items-center">
          <Page white />
        </div>
        <h3 className="text-primary mt-4">
          برای پروژه خود به تعداد نامحدود صفحه طراحی کنید{" "}
        </h3>
        <p className="text-primary">
          شما برای هر پروژه میتوانید به تعداد نامحدود صفحه طراحی کنید و فرم های
          خود را داخل صفحات فراخوانی کنید و محتوای دلخواه خود را به همراه فرم
          خود بسازید.{" "}
        </p>
        <small className="text-primary">
          هیچ محدودیتی برای فری فرم وجود ندارد، فقط برای اینکه بتوانید از آن لذت
          ببرید.
        </small>
      </div>

      {/* left side */}
      <div className="w-fit mr-auto lg:w-6/12 flex flex-col gap-15 lg:mb-auto mt-10 relative">
        <div className="absolute bottom-0 z-[-1]">
          <img src="images/DesignBlur.png" alt="" />
        </div>
        <div className="flex flex-col gap-7">
          <div className="w-full rounded-15 rounded-e-none bg-white px-4 min-h-[80px] flex gap-5 items-center">
            <div className="border-b border-primary h-[80px]  flex items-center">
              <p className="text-primary font-bold">طراحی</p>
            </div>
            <p className="text-neutral font-bold">تنظیمات</p>
          </div>
        </div>

        <div className="w-full rounded-15 rounded-e-none bg-white p-8 pe-0 h-[430px]">
          <div className="h-full w-full rounded-15 rounded-e-none border border-dashed border-primary-500 border-e-0 overflow-hidden">
            {/* icons */}
            <div className="bg-primary h-[58px] flex gap-2.5 p-3">
              <div className="bg-[#F6F6F6] rounded-15 py-3 px-2 flex items-center gap-2 border border-[#E9E9E9]">
                <HamburgerMenu />
                <HamburgerMenu />
                <HamburgerMenu />
                <HamburgerMenu />
                <HamburgerMenu />
              </div>
              <div className="bg-[#F6F6F6] rounded-15 py-3 px-2 flex items-center gap-2 border border-[#E9E9E9]">
                <HamburgerMenu />
                <HamburgerMenu />
              </div>
              <div className="bg-[#F6F6F6] rounded-15 py-3 px-2 flex items-center gap-2 border border-[#E9E9E9]">
                <HamburgerMenu />
                <div className="bg-primary flex justify-center items-center rounded-[10px] p-1">
                  <HamburgerMenu secondary />
                </div>
                <div className="flex justify-center items-center rounded-[10px] p-1">
                  <HamburgerMenu />
                </div>
              </div>
              <div className="bg-[#F6F6F6] rounded-15 py-3 px-2 flex items-center gap-2 border border-[#E9E9E9]">
                <HamburgerMenu />
                <div className="bg-primary flex justify-center items-center rounded-[10px] p-3">
                  {/* <HamburgerMenu secondary /> */}
                </div>
                <div className="flex justify-center items-center rounded-[10px] p-1">
                  <HamburgerMenu />
                </div>
              </div>
            </div>
            {/* vertical tab */}
            <div className="absolute transform -left-12 top-[70%] -translate-y-1/2">
              {" "}
              <div className="flex transform -rotate-90  bg-white rounded-15 gap-2.5 p-1.5 shadow-md">
                {verticalTabs.map((item, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer text-center rounded-md px-3 py-[5px] flex gap-px items-center transition duration-500 text-primary font-bold text-[12px] relative  ${
                      activeVerticalTab === index && !verticalTabIsActive
                        ? "text-secondary bg-primary"
                        : "text-primary bg-white"
                    }`}
                    onClick={() => handleVerticalTabClick(index)}
                  >
                    {item}
                    {activeVerticalTab === index && verticalTabIsActive && (
                      <div
                        className={`w-full h-full bg-primary z-10 absolute rounded-lg flex justify-center items-center cursor-pointer ${style["custom-shape"]}`}
                        onClick={() => setVerticalTabIsActive(false)}
                      >
                        <Close />
                      </div>
                    )}

                    {activeVerticalTab === index && !verticalTabIsActive && (
                      <div className="bg-primary rounded-full size-7 absolute top-15 rounded-tl-2xl rounded-bl-2xl -z-10 transform left-1/2 -translate-x-1/2 text-white rotate-90 flex items-center">
                        <small className="">
                          <NavArrowRight />
                        </small>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div
                className={`w-[369px] h-[450px] bg-primary shadow-lg rounded-15 absolute left-[117px] -top-[80px] transition-all duration-500 ${
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
