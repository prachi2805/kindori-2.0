import Card from "@/components/Card";
import React from "react";

const KidsSection = () => {
  return (
    <div>
      <Card items={data} showMoreActivities={true} showSocialLinks={false} />
    </div>
  );
};

const data = [
  {
    id: 1,
    name: "Kid And Future",
    href: "https://demo.cmssuperheroes.com/themeforest/kindori/wp-content/uploads/2020/08/classes-5-736x490.jpg",
    desc: " The magic number is the classroom for children to recognize the first numbers, developmentally appropriate.",
  
    moreDetails: {
      age: "1 - 2 Years",
      size: "9 Classes",
      price: "$34.00 /Day",
    },
  },
  
    {
      id: 2,
      name: "Music For The Imagination",
      href: "https://demo.cmssuperheroes.com/themeforest/kindori/wp-content/uploads/2020/08/classes-4-736x490.jpg",
      desc:  "The magic number is the classroom for children to recognize the first numbers, developmentally appropriate.",
    
    moreDetails: {
      age: "1 - 3 Years",
      size: "3 Classes",
      price: "$35.00 /Day",
    },
  },
  {
    id: 3,
    name: "Talent Explorers",
    href: "https://demo.cmssuperheroes.com/themeforest/kindori/wp-content/uploads/2020/08/classes-3-736x490.jpg",
    desc: " The magic number is the classroom for children to recognize the first numbers, developmentally appropriate.",
  
    moreDetails: {
      age: "2 - 3 Years",
      size: "9 Classes",
      price: "$26 /Day",
    },
  },
  {
    id: 4,
    name: "Super Cool kid",
    href: "https://demo.cmssuperheroes.com/themeforest/kindori/wp-content/uploads/2020/08/classes-2-736x490.jpg",
    desc: " The magic number is the classroom for children to recognize the first numbers, developmentally appropriate.",
  
    moreDetails: {
      age: "3 - 4 Years",
      size: "5 Classes",
      price: "$35 /Day",
    },
  },
  {
    id: 5,
    name: "Learning Disciplines",
    href: "https://demo.cmssuperheroes.com/themeforest/kindori/wp-content/uploads/2020/08/classes-1-736x490.jpg",
    desc: " The magic number is the classroom for children to recognize the first numbers, developmentally appropriate.",
  
    moreDetails: {
      age: "1 - 3 Years",
      size: "3 Classes",
      price: "$34.00 /Day",
    },
  },
  {
    id: 6,
    name: "Magic Number",
    href: "https://demo.cmssuperheroes.com/themeforest/kindori/wp-content/uploads/2020/08/classes-6-736x490.jpg",
    desc: " The magic number is the classroom for children to recognize the first numbers, developmentally appropriate.",

    moreDetails: {
      age: "1 - 2 Years",
      size: "10 Classes",
      price: "$18.00 /Day",
    },
  },
];

export default KidsSection;
