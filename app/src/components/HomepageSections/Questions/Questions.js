import React from "react";
import QuestionSquare from "../../../icons/QuestionSquare";
import Accordion from "../../Accordion/Accordion";

const Questions = () => {
  return (
    <div className="flex justify-center mt-[150px] ">
      <div className="rounded-15 bg-primary-100 flex flex-col gap-6 py-16 px-24 w-full max-w-[728px] h-[726px] relative">
        <div className="flex flex-col gap-15 w-[90%]">
          <small className="text-primary">سوالات متداول </small>
          <h3 className="text-primary">
            سوالات متداولی
            <div className="rounded-15 bg-primary-100 w-[45px] h-[45px] inline-flex mx-2 justify-center items-center">
              <QuestionSquare primary />
            </div>
            که برای کاربران به وجود آمده است{" "}
          </h3>
        </div>
        <div className="absolute top-0 left-0">
          <img src="images/Questions.png" alt="" />
        </div>

        {/* accordion */}
        <Accordion
          items={[
            {
              header: "سوالات متداول تستی",
              content:
                "با هر تغییری که در فرم ایجاد کنید یک ورژن به فرم شما اضافه خواهد شد و شما میتوانید تمام ورژن های قبلی و تغییرات آن را ببینید.",
            },
            {
              header: "سوالات متداول تستی",
              content:
                "با هر تغییری که در فرم ایجاد کنید یک ورژن به فرم شما اضافه خواهد شد و شما میتوانید تمام ورژن های قبلی و تغییرات آن را ببینید.",
            },
            {
              header: "سوالات متداول تستی",
              content:
                "با هر تغییری که در فرم ایجاد کنید یک ورژن به فرم شما اضافه خواهد شد و شما میتوانید تمام ورژن های قبلی و تغییرات آن را ببینید.",
            },
            {
              header: "سوالات متداول تستی",
              content:
                "با هر تغییری که در فرم ایجاد کنید یک ورژن به فرم شما اضافه خواهد شد و شما میتوانید تمام ورژن های قبلی و تغییرات آن را ببینید.",
            },
            {
              header: "سوالات متداول تستی",
              content:
                "با هر تغییری که در فرم ایجاد کنید یک ورژن به فرم شما اضافه خواهد شد و شما میتوانید تمام ورژن های قبلی و تغییرات آن را ببینید.",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Questions;
