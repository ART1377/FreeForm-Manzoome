import React from "react";
import CreateProjectInput from "../../CreateProjectInput/CreateProjectInput";
import Button from "../../Button/Button";

const LastSection = () => {
  return (
    <div className="relative">
      <div className="bg-primary w-full rounded-15 mx-auto flex justify-center mt-[150px] min-h-[900px] lg:min-h-[820px] overflow-x-hidden mb-80 !overflow-hidden">
        <div className="w-[90%] lg:w-10/12 flex flex-col gap-15 pt-16 mb-20">
          <div className="w-full flex justify-center">
            <small className="text-center text-secondary w-full">
              همین الان شروع کنید
            </small>
          </div>
          <h2 className="text-center text-white">
            با یک کلیک به سادگی فرم خود را بسازی
          </h2>
          <p className="text-white mx-auto text-center w-full lg:w-7/12">
            برای شروع نام پروژه خود را وارد کنید و دکمه شروع کردن را بزنید تا
            وارد پنل کاربری خود شوید و بعد میتوانید به راحتی فرم خود را بسازید
          </p>
          <div className="flex justify-center mt-5">
            
          <Button isWhite={true}>همین حالا شروع کنید</Button>
          </div>
        </div>
        {/* images */}
        <div className="absolute bottom-0 max-h-[500px]
        sm:max-h-[600px] md:max-h-[700px] overflow-hidden left-0">
          <img src="images/LastSectionLeft.png" alt="" />
        </div>
        <div className="absolute bottom-0 max-h-[500px]
        sm:max-h-[600px] md:max-h-[700px] overflow-hidden right-0">
          <img src="images/LastSectionRight.png" alt="" />
        </div>
        <div className="absolute bottom-0 right-0 z-10">
          <img src="images/LastSectionSafariOverlay.png" alt="" />
        </div>
        <div className="absolute bottom-0 left-0 z-[15]">
          <img src="images/LastSectionSafariOverlay2.png" alt="" />
        </div>
        <div className="absolute bottom-0 right-0 z-[5] w-full mx-auto flex justify-center">
          <img src="images/LastSectionSafari.png" alt="" className="w-10/12 xl:w-8/12" />
        </div>
        {/* search and create from */}
        <div className="absolute -bottom-8 h-20 w-5/12 min-w-[380px] z-20">
          <CreateProjectInput />
        </div>
      </div>{" "}
    </div>
  );
};

export default LastSection;
