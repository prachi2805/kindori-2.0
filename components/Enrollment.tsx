import Button from "./Button";

const Enrollment = () => {
  return (
    <div>
      <section className="max-container padding-container flex flex-col gap-20 sm:pb-8 lg:pb-12 md:gap-28 py-5 sm:py-10 lg:py-20 xl:flex-row">
        <div className="flex-col sm:flex-row flexBetween w-full">
          <div className="relative z-20 flex  flex-col">
            <h1 className="font-fredoka text-2xl ">
              <span className="text-pink-10">How To&nbsp;</span>
              Let Your Child Study At Kindori?
            </h1>
            <p className="regular-16 mt-1 text-gray-40">
              Let your child attend Kindori Kindergarten to help your child
              develop comprehensively in all aspects.
            </p>
          </div>

          <div className="flex flex-col  gap-3 sm:flex-row">
            <Button type="button" title="Enrollment Now!" variant="btn_pink" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enrollment;
