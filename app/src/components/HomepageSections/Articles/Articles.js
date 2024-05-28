import React from "react";
import ArticleCard from '../../ArticleCard/ArticleCard'

const Articles = () => {
  return (
    <div className="flex flex-col mt-[150px] gap-16">
      {/* header */}
      <div className="flex flex-col gap-15">
        <div className="flex justify-center">
          <small className="text-center text-primary">مقالات</small>
        </div>
        <h2 className="text-center text-primary">مقالات متنوع فری فرم</h2>
      </div>
      {/* card items groupe */}
      <div className="flex justify-between gap-4 w-full flex-wrap md:flex-nowrap">
        {/* card item */}
        <ArticleCard
          imageUrl="images/Article2.png"
          title="چگونه یک فرم بسازیم؟"
          date="1401/01/01"
          content="آپلود فایل ها با استفاده از رمزگذاری آپلود فایل ها با استفاده از
              رمزگذاری Base64 یک روش معمول است، استفاده از تکنیک..."
        />
        {/* Repeat the same for other articles */}
        <ArticleCard
          imageUrl="images/Article1.png"
          title="چگونه یک فرم بسازیم؟"
          date="1401/01/01"
          content="آپلود فایل ها با استفاده از رمزگذاری آپلود فایل ها با استفاده از
              رمزگذاری Base64 یک روش معمول است، استفاده از تکنیک..."
        />
        {/* Repeat the same for other articles */}
        <ArticleCard
          imageUrl="images/Article3.png"
          title="چگونه یک فرم بسازیم؟"
          date="1401/01/01"
          content="آپلود فایل ها با استفاده از رمزگذاری آپلود فایل ها با استفاده از
              رمزگذاری Base64 یک روش معمول است، استفاده از تکنیک..."
        />
      </div>
    </div>
  );
};

export default Articles;
