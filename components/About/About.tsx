import Image from "next/image";
import React from "react";
import AboutImageBig from "../../public/assets/images/aboutimagebig.png";
import AboutImageSmall1 from "../../public/assets/images/aboutimagesmall1.png";
import AboutImageSmall2 from "../../public/assets/images/aboutimagesmall2.png";

export default function About() {
  return (
    <>
      <div className="md:flex  items-center mt-10 gap-10">
        <div className="content-2-wrapper ">
          <h3 className="text-orange font-base mb-4">ABOUT</h3>
          <h3 className="text-3xl md:w-72 font-normal font-jakarta mb-4">
            Discover Omah Sabin
          </h3>
        </div>
        <div className="content-2-wrapper ">
          <p className="text-blackBlur font-jakarta leading-7   mb-4 font-light	font-xl">
            A complex of private boutique villas in the heart of Pererenan with
            uninterrupted rice field view and private pools. Omah Sabin offers a
            personalized design and service in a peacefulne... <br />
            <span className="text-blackBlur font-normal underline">
              read more
            </span>
          </p>
        </div>
      </div>
      <div className="md:flex items-center mt-10 md:gap-6">
        <div className="content-2-wrapper ">
          <Image src={AboutImageBig} alt="About Image" />
        </div>
        <div className="content-2-wrapper md:flex-col flex">
          <Image src={AboutImageSmall1} className="md:mb-7" alt="About Image" />
          <Image src={AboutImageSmall2} alt="About Image" />
        </div>
      </div>
    </>
  );
}
