"use client";
import Image from "next/image";
import { Fragment, useRef, useState, useEffect } from "react";
import AboutImageBig from "../../public/assets/images/aboutimagebig.png";
import AboutImageSmall1 from "../../public/assets/images/aboutimagesmall1.png";
import AboutImageSmall2 from "../../public/assets/images/aboutimagesmall2.png";
import FsLightbox from "fslightbox-react";
import promoBannerDesktop from "../../public/assets/images/PromoBannerDesktop.png";
import promoBannerMobile from "../../public/assets/images/PromoBannerMobile.png";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";

export default function About() {
  const [firstToggler, setFirstToggler] = useState(false);
  const [secondToggler, setSecondToggler] = useState(false);
  const [thirdToggler, setThirdToggler] = useState(false);
  const [promoToggler, setPromoToggler] = useState(false);

  useEffect(() => {
    setPromoToggler(true);
  }, []);

  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <div className="md:flex  items-center mt-10 gap-52">
        <div className="content-2-wrapper ">
          <h3 className="text-orange font-base mb-4">ABOUT</h3>
          <h3 className="text-3xl md:w-72 font-normal font-jakarta mb-4">
            Discover Omah Sabin
          </h3>
        </div>
        <div className="content-2-wrapper ">
          <p className="text-blackBlur font-satoshi md:leading-7 text-base md:text-xl  mb-4 font-light	font-xl">
            A complex of private boutique villas in the heart of Pererenan with
            uninterrupted rice field view <br /> and private pools. Omah Sabin
            offers a personalized design and service in a peacefulne... <br />
          </p>
          <span className="text-blackBlur mt-48 font-normal md:text-xl underline">
            read more
          </span>
        </div>
      </div>
      <div className="md:flex items-center mt-10 md:gap-7">
        <div
          onClick={() => setFirstToggler(!firstToggler)}
          className="content-2-wrapper cursor-pointer"
        >
          <Image
            className="md:h-[484px] md:w-[948px]"
            src={AboutImageBig}
            alt="About Image"
          />
        </div>
        <div
          onClick={() => setSecondToggler(!secondToggler)}
          className="md:flex-col md:grid md:grid-cols-1 grid grid-cols-2 md:gap-7 gap-2 mt-2 md:mt-0 cursor-pointer"
        >
          <Image
            src={AboutImageSmall1}
            className="md:h-[228px] md:w-[432px] "
            alt="About Image"
          />
          <Image
            onClick={() => setThirdToggler(!thirdToggler)}
            src={AboutImageSmall2}
            className="md:h-[228px] md:w-[432px]"
            alt="About Image"
          />
        </div>
        <FsLightbox
          toggler={firstToggler}
          sources={[
            AboutImageBig.src,
            AboutImageSmall1.src,
            AboutImageSmall2.src,
          ]}
        />
        <FsLightbox
          toggler={secondToggler}
          sources={[
            AboutImageSmall1.src,
            AboutImageBig.src,
            AboutImageSmall2.src,
          ]}
        />
        <FsLightbox
          toggler={thirdToggler}
          sources={[
            AboutImageSmall2.src,
            AboutImageBig.src,
            AboutImageSmall1.src,
          ]}
        />

        <Transition.Root show={promoToggler} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-hidden"
            onClose={() => setPromoToggler(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 backdrop-blur-sm transition-opacity" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="flex items-center justify-center min-h-screen">
                <div className="relative p-4 sm:p-6">
                  <button
                    className="absolute top-2 right-2  bg-orange w-9 h-9 flex items-center justify-center rounded-full border-solid border-2 border-white text-white cursor-pointer"
                    onClick={() => setPromoToggler(false)}
                  >
                    X
                  </button>

                  {/* Your image content */}
                  <div className="sm:flex sm:items-start">
                    <Link
                      href="https://book-directonline.com/properties/omahsabinvilladirect?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=IDR&checkInDate=2023-11-25&checkOutDate=2023-11-28"
                      target="_blank"
                    >
                      <Image
                        src={isMobile ? promoBannerMobile : promoBannerDesktop}
                        alt="Promo Banner"
                        className="w-[1144px] "
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
      </div>
    </>
  );
}
