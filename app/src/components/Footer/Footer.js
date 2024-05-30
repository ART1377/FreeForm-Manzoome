import React from "react";
import Logo from "../Logo/Logo";
import PhoneCallingRounded from "../../icons/PhoneCallingRounded";
import MapPoint from "../../icons/MapPoint";
import CallChatRounded from "../../icons/CallChatRounded";
import Letter from "../../icons/Letter";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-30 border-t-[0.5px] py-6 border-primary-300">
      <div>
        <Logo />
      </div>
      <p className="text-center max-w-[90%] text-primary text-[18px]">
        وب سایت شرکت گروه شرکتهای منظومه نگاران به عنوان بخش مرکزی روابط عمومی ،
        ماموریت آشنایی شما عزیزان با شرکتهای تابع واحد انتشارات ؛ استارت‌آپها و
        همچنین جذب و آموزش نیروهای متخصص را بر عهده دارد .برای مشاهده سایر
        استارت آپ ها
        <span className="font-bold px-1">اینجا</span>
        را کلیک کنید.
      </p>

      {/* footer contact */}
      <div className="flex flex-wrap w-full bg-primary-100 text-primary gap-15 p-4 rounded-15 mx-2">
        {/* contact item */}
        <div className="flex items-center gap-1 max-w-fit">
          <CallChatRounded />
          <p className="font-bold text-[18px] min-w-[110px]">مشاوره تلفنی :</p>
          <small className="text-primary text-[12px]">021-55569833</small>
        </div>
        {/* contact item */}
        <div className="flex items-center gap-1 max-w-fit">
          <PhoneCallingRounded />
          <p className="font-bold text-[18px] min-w-[110px]">شماره تماس : </p>
          <small className="text-primary text-[12px]">021-55569833</small>
        </div>

        {/* contact item */}
        <div className="flex items-center gap-1 max-w-fit">
          <Letter />
          <p className="font-bold text-[18px] min-w-[130px]">
            پست الکترونیکی :
          </p>
          <small className="text-primary text-[12px]">freeform@gmail.com</small>
        </div>
        {/* contact item */}
        <div className="flex items-center gap-1 max-w-fit">
          <MapPoint />
          <p className="font-bold text-[18px] min-w-[55px]">آدرس :</p>
          <small className="text-primary text-[12px]">
            خ بهشتی، ما بین یوسفی و صابونچی، پلاک 197، طبقه 7، واحد 25
          </small>
        </div>
      </div>
      {/* manzoomeh logo */}
      <div className="flex gap-2 items-end">
        <p className="text-neutral">Powered By</p>
        <img src="images/HoldingLogo.png" alt="footer logo" />
        <p className="text-neutral">MANZOOMEH</p>
      </div>
    </div>
  );
};

export default Footer;
