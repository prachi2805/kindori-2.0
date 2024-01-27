"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import { SOCIALS } from "@/constants";

interface CardProps {
  items: Array<{
    id: number;
    name: string;
    href: string;
    desc: string;
    moreDetails?: { age: string; size: string; price: string };
  }>;
  showSocialLinks?: boolean;
  showMoreActivities?: boolean;
}

const Card = ({ items, showSocialLinks, showMoreActivities }: CardProps) => {
  var settings = {
    arrows: showSocialLinks ? false : true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    <div className="w-5/6 m-auto mb-5 ">
      <div>
        <Slider {...settings}>
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white text-black rounded-xl border-2"
            >
              <div className="max-h-full rounded-t-xl flexCenter">
                <Image
                  className={`w-auto h-auto ${showSocialLinks }`}
                  src={item.href}
                  alt={item.name}
                  width={300}
                  height={200}
                />
              </div>
              <div className="flexCenter flex-col gap-2 p-8 text-center">
                <p className="text-xl font-fredoka hover:text-pink-10 hover:cursor-pointer ">
                  {item.name}
                </p>
                <p className="text-gray-40 text-sm mb-5">{item.desc} </p>
                {/* More Activities Content */}
                {showMoreActivities && (
                  <section className="w-full font-prompt text-gray-40">
                    <p className="border mb-4"></p>
                    <div className="more-activities-section ">
                      <div className="flex justify-evenly align-center">
                        <div className="flexCenter flex-col">
                          <label className="text-sm">Age</label>
                          <p className="text-xs text-pink-10">
                            {item.moreDetails?.age}
                          </p>
                        </div>
                        <div className="flexCenter flex-col">
                          <label className="text-sm">Size</label>
                          <p className="text-xs text-pink-10">
                            {item.moreDetails?.size}
                          </p>
                        </div>
                        <div className="flexCenter flex-col">
                          <label className="text-sm">Price</label>
                          <p className="text-xs text-pink-10">
                            {item.moreDetails?.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                )}
                {/* Social Links Content */}
                {showSocialLinks && (
                  <div className="social-links-section">
                    <ul className="regular-14 flex gap-4">
                      {SOCIALS.links.map((link) => (
                        <li
                          key={link.id}
                          className={`${link.color} text-2xl flexCenter rounded-full py-2 px-3 hover:bg-[#8000ff] `}
                        >
                          <Link href="/" className="hover:animate-spin">
                            <Image
                              src={link.url}
                              alt="logo"
                              width={12}
                              height={12}
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Card;
