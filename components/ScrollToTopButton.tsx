// ScrollToTopButton.js
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add scroll event listener to show/hide the button
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${
        isVisible ? "block" : "hidden"
      } block fixed bottom-8 right-0 bg-pink-10 text-white rounded-md p-2 cursor-pointer transition-opacity duration-300`}
    >
      <button
        className="border-2 border-dotted border-white p-2"
        onClick={scrollToTop}
        title="Go to top"
      >
        <Image src="arrow.svg" alt="arrow icon" height="14" width="14" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
