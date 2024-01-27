import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <>
      <section className="hero-map">
        <div>
          <img
            src="https://demo.cmssuperheroes.com/themeforest/kindori/wp-content/uploads/2020/08/bg-home-top-section.png"
            alt="hero-banner"
          />

          <div className="lg:absolute lg:top-48 lg:left-20 lg:z-20 px-5 sm:px-0 flex flex-1 flex-col xl:w-1/2">
            <p className="font-schoolbell text-2xl mt-0 sm:mt-2 lg:mt-6 mb-2 text-pink-10 xl:max-w-[520px]">
              Kindori Kindergarten School
            </p>
            <h1 className="font-fredoka text-3xl lg:text-5xl">
              A Brighter Future For All.
            </h1>
            <p className="regular-16 mt-2 text-gray-40 xl:max-w-[520px]">
              The Universe is one great kindergarten for man. Everything that
              exists has brought with it its own peculiar lesson.
            </p>

            <div className="flex flex-col w-full mt-10 gap-3 sm:flex-row ">
              <Button
                hoverColor="hover:bg-blue-70"
                type="button"
                title="Discover more"
                variant="btn_pink"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flexCenter flex-col padding-container max-container">
        <p className="font-schoolbell text-lg  mb-2 text-pink-10 xl:max-w-[520px]">
          WHY CHOOSE US
        </p>
        <h1 className="font-fredoka text-4xl text-black-10">Our Core Values</h1>
        <p className="regular-16 mt-6 text-gray-40 xl:max-w-[680px] text-center">
          With kindori, we always put the quality of teaching children first,
          please rest assured when sending children at kindori kindergarten.
        </p>
        <img
          src="https://demo.cmssuperheroes.com/themeforest/kindori/wp-content/uploads/2020/08/image-bee.png"
          alt="flying-bee"
          className="p-2.5"
        />
      </section>
    </>
  );
};

export default Hero;
