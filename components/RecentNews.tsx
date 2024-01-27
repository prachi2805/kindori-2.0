import React from "react";

const RecentNews = () => {
  return (
    <section className="flexCenter flex-col padding-container max-container py-5 sm:py-10 lg:py-20">
      <p className="font-schoolbell text-xl  mb-2 text-pink-10 xl:max-w-[520px]">
        WHAT'S GOING ON IN OUR BLOG?
      </p>
      <h1 className="font-fredoka text-4xl">Recent News</h1>
      <p className="regular-16 mt-6 text-gray-30 xl:max-w-[680px] text-center">
        We have been destroying the forests for whatever reasons for many years.
        Forests that work much like our lungs It is a long established.
      </p>
      <img
        src="https://demo.cmssuperheroes.com/themeforest/kindori/wp-content/uploads/2020/08/image-bee.png"
        alt="flying-bee"
        className="p-2.5"
      />
    </section>
  );
};

export default RecentNews;
