"use client";
import React from "react";
import { DISCOVER_OUR_IMAGES } from "@/constants";
import Image from "next/image";

const DiscoverOurImage = () => {
  return (
    <section className="bg-[#FCF9F4] pt-5 sm:pt-20 pb-2">
      <h1 className="font-fredoka text-4xl text-center">Discover Our Image</h1>

      <div className="flex gap-2 overflow-auto no-scrollbar mt-12 mx-6">
        {DISCOVER_OUR_IMAGES.links.map((link) => (
          <Image
            key={link.id}
            src={link.url}
            alt="logo"
            width={24}
            height={24}
            className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
          />
        ))}
      </div>
    </section>
  );
};

export default DiscoverOurImage;
