import React from "react";
import Cursor from "../../../icons/Cursor";
import DocumentText from "../../../icons/DocumentText";
import Button from "../../Button/Button";
import QuestionSquare from "../../../icons/QuestionSquare";
import Server from "../../../icons/Server";
import SliderMinimalisticHorizontal from "../../../icons/SliderMinimalisticHorizontal";
import Document from "../../../icons/Document";
import HamburgerMenu from "../../../icons/HamburgerMenu";
import AddFolder from "../../../icons/AddFolder";
import CreateProjectInput from "../../CreateProjectInput/CreateProjectInput";



const Hero = () => {
  
  return (
    <div className="flex flex-col items-center w-full mt-[50px] gap-12">
      <div className="flex flex-col w-8/12 items-center max-w-[740px] space-y-15">
        <small className="text-primary">به سادگی فرم بسازید</small>
        <h1 className="text-primary text-center">
          با یک کلیک
          <div className="rounded-15 bg-primary-100 w-[45px] h-[45px] inline-flex mx-2 justify-center items-center">
            <Cursor />
          </div>
          و به صورت رایگان فرم
          <div className="rounded-15 bg-primary-100 w-[45px] h-[45px] inline-flex mx-2 justify-center items-center">
            <DocumentText />
          </div>
          خود را بسازید
        </h1>
        <p className="text-primary text-center max-w-[655px]">
          برای شروع نام پروژه خود را وارد کنید و دکمه شروع کردن را بزنید تا وارد
          پنل کاربری خود شوید و بعد میتوانید به راحتی فرم خود را بسازید
        </p>
      </div>
      <div className="w-10/12 flex flex-col items-center relative">
        <img src="images/shape.png" alt="shape" />
        <div className="absolute -top-5 h-20 w-5/12 min-w-[380px]">
         <CreateProjectInput/>
        </div>
        <div className="flex flex-col gap-6 bg-[#F7F8FA] rounded-lg p-6 w-6/12 min-w-[440px] absolute top-[70%]">
          <Button css={"absolute -right-[20%]"}>بکشید و رها کنید ✨</Button>
          <div className="flex items-center gap-16 justify-end">
            <div className="w-[133px] h-6 pl-10 pr-[41px] bg-primary-100 rounded-15 justify-center items-center inline-flex">
              <div className="text-center text-primary text-[10px]">
                Freeform.ir
              </div>
            </div>
            <div className="flex gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FA85A4]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFE56E]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#52E282]"></div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="bg-white rounded-15 p-6 w-4/12 min-h-[200px] flex-col justify-center items-center gap-[30px] inline-flex">
              <div className="flex flex-col rounded-15">
                <div className="flex">
                  <div className="size-[60px] border border-neutral-100 flex justify-center items-center">
                    <Server />
                  </div>
                  <div className="size-[60px] border border-neutral-100 flex justify-center items-center bg-primary rounded-15">
                    <QuestionSquare />
                  </div>
                </div>
                <div className="flex">
                  <div className="size-[60px] border border-neutral-100 flex justify-center items-center">
                    <Document />
                  </div>
                  <div className="size-[60px] border border-neutral-100 flex justify-center items-center">
                    <SliderMinimalisticHorizontal />
                  </div>
                </div>
                <div className="flex">
                  <div className="size-[60px] border border-neutral-100 flex justify-center items-center">
                    <AddFolder />
                  </div>
                  <div className="size-[60px] border border-neutral-100 flex justify-center items-center">
                    <HamburgerMenu />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-15 w-8/12 min-h-[200px] flex justify-center items-start p-6">
              <div className="p-6 flex justify-center items-center border border-dashed border-neutral w-full rounded-15">
                <small className="text-[10px] text-neutral">
                  فرم خود را بسازید
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
