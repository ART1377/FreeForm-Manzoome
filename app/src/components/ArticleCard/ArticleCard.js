import React from "react";

const ArticleCard = ({ imageUrl, title, date, content }) => {
  return (
    <div className="flex flex-col gap-[5px] p-[10px] rounded-15 overflow-hidden border border-primary-100 max-w-[346px] min-w-[280px] lg:!w-1/3 mx-auto">
      <div className="relative w-[326px] h-[183px] object-cover">
        <img src={imageUrl} alt="article" />
      </div>
      <div className="flex flex-col gap-15 mt-5">
        <h6 className="text-primary text-[22px]">{title}</h6>
        <small className="text-primary text-[12px]">{date}</small>
        <small className="text-primary">{content}</small>
      </div>
    </div>
  );
};

export default ArticleCard;
