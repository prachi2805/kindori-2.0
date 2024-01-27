import React from "react";

const OurClasses = () => {
  return (
    <section className="flexCenter flex-col padding-container max-container py-5 sm:py-10 lg:py-20">
      <p className="font-schoolbell text-lg mb-2 text-pink-10 xl:max-w-[520px]">
        PLAYING IN LEARNING
      </p>
      <h1 className="font-fredoka text-4xl">Our Classes</h1>
      <p className="regular-16 mt-6 text-gray-30 xl:max-w-[680px] text-center">
        With kindori, we always put the quality of teaching children first,
        please rest assured when sending children at kindori kindergarten.
      </p>
      <img
        src="https://demo.cmssuperheroes.com/themeforest/kindori/wp-content/uploads/2020/08/image-bee.png"
        alt="flying-bee"
        className="p-2.5"
      />
    </section>
  );
};

export default OurClasses;
