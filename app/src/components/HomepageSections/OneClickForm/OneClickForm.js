import React from "react";
import CreateProjectInput from "../../CreateProjectInput/CreateProjectInput";

const OneClickForm = () => {
  return (
    <div className="relative">
      <div className="bg-primary w-full rounded-15 mx-auto flex justify-center mt-[150px] min-h-[600px] lg:min-h-[500px]  overflow-x-hidden">
        <div className="w-[90%] lg:w-10/12 flex flex-col gap-15 pt-16">
          <div className="w-full flex justify-center">
            <small className="text-center text-secondary w-full">
              همین الان شروع کنید
            </small>
          </div>
          <h2 className="text-center text-white">
            با یک کلیک به سادگی فرم خود را بسازی
          </h2>
          <p className="text-white mx-auto text-center w-full lg:w-8/12">
            برای شروع نام پروژه خود را وارد کنید و دکمه شروع کردن را بزنید تا
            وارد پنل کاربری خود شوید و بعد میتوانید به راحتی فرم خود را بسازید
          </p>
        </div>
        {/* images */}
        <div className="absolute bottom-0 left-0">
          <img src="images/OneClickLeft.png" alt="" />
        </div>
        <div className="absolute bottom-0 right-0">
          <img src="images/OneClickRight.png" alt="" />
        </div>
        {/* search and create from */}
        <div className="absolute -bottom-8 h-20 w-5/12 min-w-[380px]">
          <CreateProjectInput />
        </div>
      </div>{" "}
    </div>
  );
};

export default OneClickForm;
