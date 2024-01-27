"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRating from "./StarRating";

const ReviewSection = () => {
  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="padding-container max-container bg-[#FCF9F4] pb-20 mx-10">
      <div className="mx-14">
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={item.id} className="border rounded-xl p-4 bg-white">
              <div className="flex items-center justify-start ">
                <div>
                  <Image
                    className="rounded-full border-2 border-[#ff4880] mr-5"
                    src={item.url}
                    alt={item.name}
                    height={50}
                    width={50}
                  />
                </div>
                <div>
                  <div className="flex items-center justify-start">
                    <p className="mr-2 font-fredoka text-base ">{item.name}</p>
                    <Image
                      src="quotes-right.svg"
                      alt="quotes"
                      height={20}
                      width={20}
                    />
                  </div>
                  <p>
                    <StarRating rating={item.rating} />
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-50">{item.comment}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const items = [
  {
    id: 1,
    url: "https://demo.cmssuperheroes.com/themeforest/kindori/wp-content/uploads/2020/08/testi-5.jpg",
    name: "Tine Jensen",
    comment:
      "I had both my kids here, and loved it. Made it easy for us to meet a lot of amazing parents and kids. The school has such a home feel, and values a play based routine. It would be worth your time. ",
    rating: 5,
  },
  {
    id: 2,
    url: "https://demo.cmssuperheroes.com/themeforest/kindori/wp-content/uploads/2020/08/testi-6.jpg",
    name: "Rebecca Higgins",
    comment:
      "Kindori is a wonderful nursery, my Son is so happy there and asks every day if he “is going to nursery today”, even on on weekends! The staff are so welcoming, very professional and highly experienced.",
    rating: 4,
  },
  {
    id: 3,
    url: "https://demo.cmssuperheroes.com/themeforest/kindori/wp-content/uploads/2020/08/testi-5.jpg",
    name: "Ashish Doe",
    comment:
      "I had both my kids here, and loved it. Made it easy for us to meet a lot of amazing parents and kids. The school has such a home feel, and values a play based routine. It would be worth your time. ",
    rating: 5,
  },
  {
    id: 4,
    url: "https://demo.cmssuperheroes.com/themeforest/kindori/wp-content/uploads/2020/08/testi-6.jpg",
    name: "Chikoo dey",
    comment:
      "Kindori is a wonderful nursery, my Son is so happy there and asks every day if he “is going to nursery today”, even on on weekends! The staff are so welcoming, very professional and highly experienced.",
    rating: 4,
  },
];

export default ReviewSection;
