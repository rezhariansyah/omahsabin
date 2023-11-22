import Image from "next/image";
import React from "react";
import contentImage3 from "../../public/assets/images/westvilla.png";
import contentImage2 from "../../public/assets/images/heroimage.png";
import iconBed from "../../public/assets/images/iconBed.png";
import iconRice from "../../public/assets/images/iconRice.png";
import iconFire from "../../public/assets/images/iconFire.png";
export default function Content3() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 mt-10 items-center">
      <div className="content-3-wrapper">
        <div className=" carousel">
          <div className="carousel-item w-full">
            <Image
              className="custom-size"
              src={contentImage3}
              alt="Description"
            />
          </div>
          <div className="carousel-item w-full">
            <Image
              className="custom-size"
              src={contentImage2}
              alt="Description"
            />
          </div>
        </div>
      </div>
      <div className="content-3-wrapper mt-5">
        <h3 className="text-orange font-base mb-4">WEST VILLA</h3>
        <h3 className="text-3xl font-normal font-jakarta mb-4">
          Omah Sabin West Villa
        </h3>
        <p className="text-blackBlur font-jakarta leading-7 mb-4 font-light	font-xl">
          A charming haven featuring a 10m infinity pool, sun deck, and three
          deluxe bedrooms with Bali`s renowned... <br />
          <span className="text-blackBlur font-normal underline">
            read more
          </span>
        </p>
        <div className="flex gap-8 py-8 items-center">
          <Image src={iconBed} alt="Icon Bed" className="w-7" />
          <div>
            <h3 className="text-xl font-normal font-jakarta">3 Bedrooms</h3>
            <p className="text-blackBlur font-light font-satoshi">
              Ideal for a group of 6 adults
            </p>
          </div>
        </div>
        <div className="flex gap-8 py-8 items-center">
          <Image src={iconRice} alt="Icon Bed" className="w-7" />
          <div>
            <h3 className="text-xl font-normal font-jakarta">
              Rice Field View Pool
            </h3>
            <p className="text-blackBlur font-light font-satoshi">
              Private pool and rice field as your backyard{" "}
            </p>
          </div>
        </div>
        <div className="flex gap-8 py-8 items-center">
          <Image src={iconFire} alt="Icon Bed" className="w-7" />
          <div>
            <h3 className="text-xl font-normal font-jakarta">
              Complete Kitchen & Dining Setup
            </h3>
            <p className="text-blackBlur font-light font-satoshi">
              Perfect for small gathering with your loved ones{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
