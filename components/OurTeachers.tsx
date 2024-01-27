import React from "react";

const OurTeachers = () => {
  return (
    <section className="flexCenter flex-col padding-container max-container py-5 sm:py-10 lg:py-20">
      <p className="font-schoolbell text-lg  mb-2 text-pink-10 xl:max-w-[520px]">
        ABOUT THE TEACHERS
      </p>
      <h1 className="font-fredoka text-4xl">Our Teachers</h1>
      <p className="regular-16 mt-6 text-gray-30 xl:max-w-[680px] text-center">
        We have an excellent teacher to child ratio at our Kindergarten to
        ensure that each child receives the attention he or she needs.
      </p>
      <img
        src="https://demo.cmssuperheroes.com/themeforest/kindori/wp-content/uploads/2020/08/image-bee.png"
        alt="flying-bee"
        className="p-2.5"
      />
    </section>
  );
};

export default OurTeachers;
