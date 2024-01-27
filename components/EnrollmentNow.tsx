import Button from "./Button";

const EnrollmentNow = () => {
  return (
    <div>
      <section className="max-container padding-container flex flex-col gap-20 py-5 md:gap-28 lg:py-10 xl:flex-row bg-[#abcd52]">
        <div className="flex-col sm:flex-row flexBetween w-full">
          <div className="flex flex-col mb-4 sm:mb-0">
            <h1 className="font-fredoka text-3xl" style={{ color: "white" }}>
              HOW TO ENROLL YOUR CHILD TO A CLASS?
            </h1>
            <p className="regular-16 mt-1 text-white">
              Interested in good preschool education for your child? Our
              kindergarten is the right decision!
            </p>
          </div>

          <div className="flex flex-col  gap-3 sm:flex-row ">
            <Button type="button" title="Enrollment Now!" variant="btn_black" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnrollmentNow;
