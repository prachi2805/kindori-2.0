import React from "react";

const Testimonials = () => {
  return (
    <section className="flexCenter flex-col padding-container max-container bg-[#FCF9F4] py-5 sm:py-10 lg:py-20">
      <p className="font-schoolbell text-lg  mb-2 text-pink-10 xl:max-w-[520px]">
        WHAT DO PARENTS SAY ABOUT US
      </p>
      <h1 className="font-fredoka text-4xl">Testimonials</h1>
      <p className="regular-16 mt-6 text-gray-30 xl:max-w-[680px] text-center">
        Let's explore what Parents have to say about us. Let us know what you
        think of today’s newsletter and what you’d like to.
      </p>
      <img
        src="https://demo.cmssuperheroes.com/themeforest/kindori/wp-content/uploads/2020/08/image-bee.png"
        alt="flying-bee"
        className="p-2.5"
      />
    </section>
  );
};

export default Testimonials;
