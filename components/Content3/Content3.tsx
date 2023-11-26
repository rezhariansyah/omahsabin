"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import contentImage3 from "../../public/assets/images/westvilla.png";
import contentImage2 from "../../public/assets/images/heroimage.png";
import iconBed from "../../public/assets/images/iconBed.png";
import iconRice from "../../public/assets/images/iconRice.png";
import iconFire from "../../public/assets/images/iconFire.png";
import Link from "next/link";
import { motion } from "framer-motion";

interface Icon {
  src: StaticImageData;
  alt: string;
  title: string;
  description: string;
}

interface ImageInfo {
  url: StaticImageData;
  text: string;
}

interface VillaData {
  title: string;
  name: string;
  desc: string;
  icons: Icon[];
  images: ImageInfo[];
}

const Content3: React.FC = () => {
  const data: VillaData[] = useMemo(
    () => [
      {
        title: "WEST VILLA",
        name: "Omah Sabin West Villa",
        desc: "A charming haven featuring a 10m infinity pool, sun deck, and three deluxe bedrooms with Bali's renowned...",
        icons: [
          {
            src: iconBed,
            alt: "Icon Bed",
            title: "3 Bedrooms",
            description: "Ideal for a group of 6 adults",
          },
          {
            src: iconRice,
            alt: "Icon Bed",
            title: "Rice Field View Pool",
            description: "Private pool and rice field as your backyard",
          },
          {
            src: iconFire,
            alt: "Icon Bed",
            title: "Complete Kitchen & Dining Setup",
            description: "Perfect for a small gathering with your loved ones",
          },
        ],
        images: [
          {
            url: contentImage3,
            text: "Omah Sabin East Villa",
          },
          {
            url: contentImage2,
            text: "Omah Sabin West Villa",
          },
        ],
      },
      {
        title: "ANOTHER VILLA",
        name: "Another Villa Name",
        desc: "Another description...",
        icons: [
          {
            src: iconBed,
            alt: "Icon Bed",
            title: "Another Bedrooms",
            description: "Ideal for another group",
          },
          {
            src: iconRice,
            alt: "Icon Bed",
            title: "Another Rice Field View Pool",
            description: "Private pool and rice field as another backyard",
          },
          {
            src: iconFire,
            alt: "Icon Bed",
            title: "Another Kitchen & Dining Setup",
            description:
              "Perfect for another small gathering with your loved ones",
          },
        ],
        images: [
          {
            url: contentImage3,
            text: "Omah Sabin timur Villa",
          },
          {
            url: contentImage2,
            text: "Omah Sabin barat Villa",
          },
        ],
      },
      {
        title: "ANOTHER VILLA 2",
        name: "Another Villa Name 2",
        desc: "Another description...",
        icons: [
          {
            src: iconBed,
            alt: "Icon Bed",
            title: "Another Bedrooms",
            description: "Ideal for another group",
          },
          {
            src: iconRice,
            alt: "Icon Bed",
            title: "Another Rice Field View Pool",
            description: "Private pool and rice field as another backyard",
          },
          {
            src: iconFire,
            alt: "Icon Bed",
            title: "Another Kitchen & Dining Setup",
            description:
              "Perfect for another small gathering with your loved ones",
          },
        ],
        images: [
          {
            url: contentImage3,
            text: "Omah Sabin East Villa",
          },
          {
            url: contentImage2,
            text: "Omah Sabin West Villa",
          },
        ],
      },
    ],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [bigBannerIndex, setBigBannerIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const prevBigSlide = () => {
    const isFirstSlide = bigBannerIndex === 0;
    const newIndex = isFirstSlide ? data.length - 1 : bigBannerIndex - 1;
    setBigBannerIndex(newIndex);
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 150);
  };

  const nextBigSlide = () => {
    const isLastSlide = bigBannerIndex === data.length - 1;
    const nextIndex = isLastSlide ? 0 : bigBannerIndex + 1;
    setBigBannerIndex(nextIndex);
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 150);
  };

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? data[bigBannerIndex].images.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === data[bigBannerIndex].images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, setCurrentIndex, data, bigBannerIndex]);

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, nextSlide]);

  return (
    <>
      <div className="flex items-center justify-between max-h-fit	 mt-24">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-black/50 text-blackBlur cursor-pointer border border-blackBlur rounded-full flex items-center justify-center">
            <span onClick={prevBigSlide}>{"<-"}</span>
          </div>
          <span
            onClick={prevBigSlide}
            className="font-satoshi md:text-base text-sm cursor-pointer font-light"
          >
            {data[(bigBannerIndex - 1 + data.length) % data.length].name}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span
            onClick={nextBigSlide}
            className="md:text-base text-sm font-satoshi font-light cursor-pointer "
          >
            {data[(bigBannerIndex + 1) % data.length].name}
          </span>
          <div className="w-6 h-6 bg-black/50 text-blackBlur cursor-pointer border border-blackBlur rounded-full flex items-center justify-center">
            <span onClick={nextBigSlide}>{"->"}</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 mt-10  items-center">
        <div className="content-3-wrapper md:col-span-1">
          {!isActive && (
            <motion.div
              initial={{ x: !isActive ? -30 : 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="flex-1 max-w-[1400px] md:h-[566px] h-[392px] w-full m-auto py-16 px-4 relative group ">
                {data[bigBannerIndex].images.map((slide, index) => (
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
                {data[bigBannerIndex].images.map((slide, index) => (
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
            </motion.div>
          )}
        </div>
        <div className="content-3-wrapper mt-5 ">
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-orange font-base mb-4">
              {data[bigBannerIndex].title}
            </h3>
            <h3 className="text-3xl font-normal font-jakarta mb-4">
              {data[bigBannerIndex].name}
            </h3>

            <p className="text-blackBlur text-base font-satoshi leading-6 mb-3 md:text-xl font-light	">
              {data[bigBannerIndex].desc} <br />
            </p>
            <Link
              href="/"
              className="text-blackBlur text-base font-medium md:text-xl underline"
            >
              read more
            </Link>
          </motion.div>

          <div className={`content-3-wrapper mt-5`}>
            {data[bigBannerIndex].icons.map((feature, index) => (
              <motion.div
                className="flex gap-8 py-8 items-center"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: index === 0 ? 1 : 0.7 }}
                transition={{ duration: 1 }}
                key={index} // Adding a key prop is a good practice when using map in React
              >
                <Image src={feature.src} alt={feature.alt} className="w-7" />
                <div>
                  <h3 className="text-xl font-normal font-jakarta">
                    {feature.title}
                  </h3>
                  <p className="text-blackBlur font-light font-satoshi">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Content3;
