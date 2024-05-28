import React from "react";
import Button from "../../Button/Button";
import NotesMinimalistic from "../../../icons/NotesMinimalistic";

const InitializeForm = () => {
  return (
    <div className="flex flex-col items-center w-100 mt-[400px] gap-12">
      <div className="flex flex-col w-8/12 items-center max-w-[740px] space-y-15">
        <small className="text-primary">فرم را در سایت خود استفاده کنید </small>
        <h2 className="text-primary text-center">
          راه اندازی فرم در وبسایت خود بدون دردسر{" "}
        </h2>
        <p className="text-primary text-center max-w-[655px]">
          بعد از اتمام پروسه ساخت فرم یا پروژه خود، به راحتی می‌توانید کدهای آن
          را در وبسایت خود پیاده سازی و یا اضافه کنید، بدین شکل که اگر شما
          ویرایشی در فرم خود اعمال کردید سایت شما نیز به صورت داینامیک آپدیت
          می‌شود.{" "}
        </p>
      </div>

      <div className="relative">
        <img src="images/Section2Image.png" alt="shape" />
        <div className="flex flex-col gap-6 bg-white rounded-lg p-4 w-6/12 min-w-[440px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center">
            <div className="w-[133px] h-6 pl-10 pr-[41px] bg-blue-600 rounded-15 justify-center items-center inline-flex mx-auto">
              <div className="text-center text-white text-[10px]">VS Code</div>
            </div>
            <div className="flex gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FA85A4]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFE56E]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#52E282]"></div>
            </div>
          </div>
          <div className="text-end bg-[#F7F9FC] p-4 rounded-15">
            {` <form action="https://formcarry.com/s/{Your Form ID}" method="POST" enctype="multipart/form-data">
            <input type="email" name="email">
            <textarea name="message"></textarea>
            <button type="submit">Submit</button>
            </form>`}
            <div className="flex justify-center mt-4 mb-2">
              <Button icon={<NotesMinimalistic />}>کپی کردن</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitializeForm;
