import React from "react";
import Button from "../../Button/Button";
import TemplateCard from "../../TemplateCard/TemplateCard";

const Templates = () => {
  return (
    <div className="flex flex-col relative gap-[60px] mt-[150px]">
      <div className="flex justify-between items-end">
        <div className="flex flex-col w-8/12 md:w-6/12 max-w-[740px] space-y-15">
          <small className="text-primary">قالب های تخصصی فری فرم </small>
          <h2 className="text-primary">
            قالب های تخصصی و متنوع برای کسب و کارها{" "}
          </h2>
        </div>
        <div>
          <Button>همه مقالات </Button>
        </div>
      </div>
      <div className="absolute !-left-[70%] md:!-left-[40%] xl:!-left-[20%] -z-10">
        <img src="images/Section2Image.png" alt="shape" />
      </div>
      {/* card items group */}
      <div className="flex gap-4 w-full flex-wrap md:flex-nowrap">
        <TemplateCard imgSrc="images/TemplateImage1.png" />
        <TemplateCard imgSrc="images/TemplateImage2.png" isSmartphone />
        <TemplateCard imgSrc="images/TemplateImage3.png" />
      </div>
    </div>
  );
};

export default Templates;
