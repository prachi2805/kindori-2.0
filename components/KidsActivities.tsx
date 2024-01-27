import React from "react";

const KidsActivities = () => {
  return (
    <section className="flexCenter flex-col padding-container max-container">
      <p className="font-schoolbell text-lg mb-2 text-pink-10 xl:max-w-[520px]">
        THINGS FOR KIDS
      </p>
      <h1 className="font-fredoka text-4xl ">Kids Activities</h1>
      <p className="regular-16 mt-6 text-gray-30 xl:max-w-[680px] text-center">
        Infant classroom offers strategies for building positive relationships,
        helping children develop self-regulation and responding to challenging
        behaviors.
      </p>
      <img
        src="https://demo.cmssuperheroes.com/themeforest/kindori/wp-content/uploads/2020/08/image-bee.png"
        alt="flying-bee"
        className="p-2.5"
      />
    </section>
  );
};

export default KidsActivities;
