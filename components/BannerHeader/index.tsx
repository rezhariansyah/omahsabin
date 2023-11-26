"use client";
import React, { useState, useEffect } from "react";
import banner1 from "../../public/assets/images/aboutimagebig.png";
import banner2 from "../../public/assets/images/aboutimagesmall1.png";
import iconRight from "../../public/assets/icons/ArrowUpRight.png";
import Image from "next/image";
import styles from "./styles.module.css";
import classNames from "classnames";
import { GoArrowUpRight } from "react-icons/go";
import { FaPlay } from "react-icons/fa";

function BannerHeader() {
  const slides = [
    {
      url: banner1,
      text: "Omah Sabin East Villa",
    },
    {
      url: banner2,
      text: "Omah Sabin West Villa",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="hero-content lg:max-w-full flex-col lg:flex-row p-0 mt-5 mb-14">
      <div className="flex-1">
        <div className={classNames("jakarta", styles.titleBanner)}>
          Relax in Bali’s Nature
        </div>
        <div
          className={classNames(
            "text-blackBlur font-jakarta leading-7 mb-2 font-light	font-xl mt-4"
          )}
        >
          Escape to your private sanctuary in Bali’s most desirable seaside.
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-orange rounded-full px-8 py-4 mt-12 text-white hover:shadow-lg hover:bg-orangeHover hover:text-white">
            <div className="flex items-center">
              Book Your{" "}
              <span className="font-bold ml-1">Private Escape Now</span>{" "}
              <span>
                <GoArrowUpRight />
              </span>
            </div>
          </button>
          <button className="bg-white rounded-full py-4 px-4 mt-12 border border-orange text-orange hover:shadow-lg">
            <FaPlay />
          </button>
        </div>
      </div>
      <div className="lg:flex-1 h-[600px] w-full m-auto py-16 px-4 relative group">
        {slides.map((slide, index) => (
          <Image
            key={index}
            src={slide.url}
            alt="slide-banner"
            fill
            className={`absolute w-full h-full bg-center bg-cover transition-opacity duration-1000 object-cover ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute bottom-4 w-full max-w-screen-md flex justify-between items-center pr-7 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="text-white">{slide.text}</div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black text-white cursor-pointer border border-white rounded-full flex items-center justify-center">
                <span onClick={prevSlide}>{"<-"}</span>
              </div>
              <div className="w-10 h-10 bg-black/50 text-white cursor-pointer border border-white rounded-full flex items-center justify-center">
                <span onClick={nextSlide}>{"->"}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BannerHeader;
