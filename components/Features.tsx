import { FEATURES_LEFT, FEATURES_RIGHT } from "@/constants";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="sm:pt-20">
      <div className="max-container padding-container flex-col sm:flex-row flexBetween">
        <ul className=" flex flex-col w-full sm:w-[30%]">
          {FEATURES_LEFT.map((feature) => (
            <FeatureItem
              reverseRow
              key={feature.title}
              title={feature.title}
              icon={feature.icon}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </ul>
        <div className="flexCenter w-full sm:w-[30%]">
          <Image
            src="https://demo.cmssuperheroes.com/themeforest/kindori/wp-content/uploads/2020/08/child-man.png"
            alt="child"
            width={400}
            height={400}
          />
        </div>
        <ul className=" flex flex-col w-full sm:w-[30%]">
          {FEATURES_RIGHT.map((feature) => (
            <FeatureItem
              key={feature.title}
              title={feature.title}
              icon={feature.icon}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

type FeatureItem = {
  title: string;
  icon: string;
  color: string;
  description: string;
  reverseRow?: boolean;
};

const FeatureItem = ({
  title,
  icon,
  description,
  reverseRow,
  color,
}: FeatureItem) => {
  return (
    <li
      className={`flex w-full flexCenter gap-5 items-start ${
        reverseRow && "flex-row-reverse"
      }`}
    >
      <div className={`rounded-full p-4 bg-${color}`}>
        <Image src={icon} alt="map" width={52} height={52} />
      </div>
      <div>
        <h2 className="text-2xl font-fredoka mt-5 capitalize">{title}</h2>
        <p className="regular-16 bg-white/80 text-gray-40 mt-2 ">
          {description}
        </p>
      </div>
    </li>
  );
};

export default Features;
