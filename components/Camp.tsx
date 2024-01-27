import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  backgroundColor: string;
}

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  backgroundColor,
}: CampProps) => {
  return (
    <div
      className={`h-fit w-full sm:1/2 lg:1/3 xl:w-1/4 ${backgroundColor} rounded-lg lg:rounded-2xl 2xl:rounded-4xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-6 lg:py-6">
        <div className="flexCenter flex-col gap-6 text-center">
          <div className="rounded-full p-3 border-2 border-white border-dashed">
            <Image
              className="rounded-full"
              src={backgroundImage}
              alt="map"
              width={150}
              height={150}
            />
          </div>
          <div className="flex flex-col gap-1 ">
            <h4
              className=" text-2xl font-fredoka mb-3"
              style={{ color: "white" }}
            >
              {title}
            </h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className=" relative flex flex-col px-20 sm:padding-container mb-5 sm:mb-0 pt-12 max-container">
      <div className="hide-scrollbar flex flex-col lg:flex-row w-full items-start justify-start gap-8 overflow-x-auto ">
        <CampSite
          backgroundImage="https://demo.cmssuperheroes.com/themeforest/kindori/wp-content/uploads/2020/08/image-fcb-1.jpg"
          title="Learn And Play"
          subtitle="With the criteria of playing and learning together, children will have a comfortable."
          backgroundColor="bg-[#FF6666]"
        />
        <CampSite
          backgroundImage="https://demo.cmssuperheroes.com/themeforest/kindori/wp-content/uploads/2020/08/image-fcb-2.jpg"
          title="Nutritious Meal"
          subtitle="Children's meals need to be provided with all the nutrients necessary for a day of play."
          backgroundColor="bg-[#FFC000]"
        />
        <CampSite
          backgroundImage="https://demo.cmssuperheroes.com/themeforest/kindori/wp-content/uploads/2020/08/image-fcb-3.jpg"
          title="Great Teachers"
          subtitle="Experienced and dedicated teachers team will help your child develop more in all aspects."
          backgroundColor="bg-[#ABCD52]"
        />
        <CampSite
          backgroundImage="https://demo.cmssuperheroes.com/themeforest/kindori/wp-content/uploads/2020/08/image-fcb-4.jpg"
          title="Cute Environment"
          subtitle="The colorful environment at Kindori is suitable for children's age, making them more accessible."
          backgroundColor="bg-[#1AB9FF]"
        />
      </div>
    </section>
  );
};

export default Camp;
