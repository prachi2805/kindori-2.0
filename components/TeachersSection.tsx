import Card from "@/components/Card";
import React from "react";
import Button from "./Button";

const TeachersSection = () => {
  return (
    <div>
      <Card items={data} showMoreActivities={false} showSocialLinks={true} />

      <div className="flexCenter my-8">
        <Button
          type="button"
          title="View All Teacher"
          variant="btn_pink"
          hoverColor="hover:bg-blue-70"
        />
      </div>
    </div>
  );
};

const data = [
  {
    id: 1,
    name: "Alice Bohm",
    href: "https://demo.cmssuperheroes.com/themeforest/kindori/wp-content/uploads/2020/08/team-1-500x445.jpg",
    desc: " Senior Educator",
  },
  {
    id: 2,
    name: "Fred Lambert",
    href: "https://demo.cmssuperheroes.com/themeforest/kindori/wp-content/uploads/2020/08/team-2-500x445.jpg",
    desc: "Maths Coach",
  },
  {
    id: 3,
    name: "Alice Bohm",
    href: "https://demo.cmssuperheroes.com/themeforest/kindori/wp-content/uploads/2020/08/team-3-500x445.jpg",
    desc: " Senior Educator",
  },
];

export default TeachersSection;
